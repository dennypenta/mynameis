---
slug: unit-test-observability
title: "Unit test in observability"
authors: [denis]
tags: [software]
---

On this page, I want to cover the caveats I encountered while shaping my approach to unit testing in the context of observability.

It's important to clarify that I’m not referring to testing logs or metrics delivery. 
Instead, I want to focus on testing modules that perform business logic but also include observability calls, like loggers or meters.

<!--truncate-->

## Regular Unit Test

Let’s start with a typical example of a unit test containing a logger call. 

```go
func (s *service) Do(ctx context.Context, request model.Object) (model.Response, error) {
	res, err := s.repo.Do(ctx, request)
	if err != nil {
		return res, err
	}

	return res, nil
}
```

With a straightforward approach, you'd mock the repository and verify in a unit test that the mock was called with the expected parameters.

This is the conventional way of handling things.

## Side Effects

Now, let’s complicate the example by adding a logger.

```go
func (s *service) Do(ctx context.Context, request model.Object) (model.Response, error) {
  err := s.notImportantRepo.Something(ctx, another.Model(request))
  if err != nil {
    s.log.Error("can't do something", "err", err.Error())
  }

	return nil
}
```

Following the same approach, we can mock both dependencies. Here's how the mock preparation might look:
```go
notImportantRepoErr := errors.New("err")
notImportantRepo.On("Something", req).Return(notImportantRepoErr)
log.On("Error", mock.Anything, "err", notImportantRepoErr.Error())
```

If we make the logger call more realistic, extracting all the values we need for emergency debugging, we end up with this:
```go
s.log.Error("can't do something", "err", err.Error(), "ctx", logging.FromContext(ctx), "another", mapper.From(req))
```

At this point, engineers often use mock.Anything for the logger parameters:
```go
log.On("Error", mock.Anything...)
```

This leads to a couple of issues:
- The logger call becomes a side effect that doesn’t affect the result being tested.
- Nobody bothers to test what's actually logged.

## Sustainability

Real-world software isn’t always as clean as in theory, raising a few important questions.

1. __1.__ Does this approach improve the __quality__ of logging?

In some ways, yes. 
At least we confirm that a log message with the correct severity level was sent. 
However, ensuring that the necessary parameters are logged requires strict discipline, which isn’t always feasible. 
We can’t "fix people."

2. __2.__ Does it __reduce PRs__ focused solely on improving logging?

Sadly, no. 
There's no validation of the parameters being logged, their mapping, formatting, or even the actual log message.

Often, only in production do we realize, "Oh, it's missing field X." After another debugging round, we might say, "Oh, it's missing field Z." This cycle continues.

3. __3.__ Does it help deliver more __observable software__?

This is tricky. 
While it might seem like a yes (if we answer question 1), the lack of validation means we’re still prone to errors. 
The absence of data model testing only slows down software delivery.

Every time an engineer touches the function, they might copy a mock from a previous test. 
If the function behaves differently, they’ll see a failed unit test like this:
```
assert: mock: I don't know what to return because the method call was unexpected.
  Either do Mock.On("Error").Return(...) first, or remove the Error() call.
  This method was unexpected:
    Error(params)
```

Then, they’ll blindly copy the previous mock statement, and the test will pass—despite the logger parameters being completely different.

## Is It Worth It?

Here’s my evaluation:
- Patching takes more time because of the added mock statements.
- More CI failures occur due to forgotten mocks.

All these costs offer no real benefit. 
We only confirm that the log was called. 
But for all we know, we might have sent nil to the logger and won’t realize it until an emergency.

## A Better Approach

There are two paths to improve this situation:
- Never allow loggers to accept mock.Anything.
- Don’t test loggers in the business layer.

The first option is ideal but impractical unless you have years to experiment with uncertain payoffs.

The second option is more radical but effective: don’t mix observability tests with business logic. 
Let me explain in two steps.

#### Nop Logger

Start by defining the logger mock as a no-op and remove it from the mocks preparation. 
You can use one of the following loggers for unit tests:

- An empty value logger
- A package-defined nop logger
- A mock logger with no assertions
- A logger that writes to io.Discard (no impact on unit test output)

Any of these options will ignore logger calls and simplify development.

You can apply the same approach to other observability components. 
For example, _OpenTelemetry_ provides `"go.opentelemetry.io/otel/metric/noop"` to create an empty counter or meter.

#### Isolation

Finally, I’m not suggesting we skip logging tests entirely.

We should still test them, but in __isolation__ rather than as a side effect. 
Here’s how:

```go
	for _, tt := range []testCase{
		{
			name: "regular log",
			handler: http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
				LoggerFromContext(r.Context()).ErrorContext(r.Context(), "test", "arg1", "text")
				w.WriteHeader(200)
			}),
			expectedLogFunc: func(t *testing.T, m map[string]string) {
				t.Helper()
				assert.Equal(t, "ERROR", m["level"])
        ...
			},
			expectedStatus: 200,
		},
	} {
		t.Run(tt.name, func(t *testing.T) {
			buf := bytes.NewBuffer(nil)
			l := NewLogger(buf, slog.LevelInfo)
			m := NewLoggingMiddleware(l)
			h := m(tt.handler)

			w := httptest.NewRecorder()
			h.ServeHTTP(w, httptest.NewRequest("POST", "/", nil))

			res := buf.String()
			jsonRes := make(map[string]string)
			err := json.Unmarshal([]byte(res), &jsonRes)
			require.NoError(t, err)

			tt.expectedLogFunc(t, jsonRes)

			assert.Equal(t, tt.expectedStatus, w.Code)
		})
	}
```

Instead of writing to stderr/stdout, substitute the logger’s writer with bytes.Buffer, allowing you to capture and validate the exact log message.

This way, we’re testing the logger implementation itself, not the side effect of a function that has little to no impact on the application's core functionality.
