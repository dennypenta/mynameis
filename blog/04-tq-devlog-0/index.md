---
slug: tq-devlog-0
title: PaaS devlog |#0
authors: [denis]
tags: [software]
---

## Devlog |#0

Today I want to share with your my first steps of creating new project.
For a long time I've wanted created something cool, really meaninful, and after all I step into my idea: Platform as a service.

<!--truncate-->

The main tech stack has beeen defined: Go for a main backend, perhaps JavaScript for cdk integration.
All the infra will be used from a well known cloud providers (not aws ofc, no clue who can understand how to user it).
First iteration will not such words as a frontend, ui, design. Ofc I want to make it, but only future history can judge me.

### The problem

The technical problem exists, it's fun to figure out.
But no the main one. The biggest fight Im gonna accept is __procrastination__. Im such a person who pushes further all the tasks very often. I just have little to do with time discipline. That's what will stop me from the progress.
So the easiest way to move progress away - do whatever, but not the progress.

### The planing

So I decided to plan everything and understand how big the actual project is gonna be.
So I start speaking with GPT in order to express my mind, kinda talking to a duck. 
Instead of asking what I should do I explained my plan and asked to ask __more questions__ so it could help me to clarify the technical solution and the plan.

![img](./gpt.png)

<details>
<summary>
Here you can find a prompt I used
</summary>
I want to develop a platform like digitalocean app, vercel, render, fly.io, heroku, etc. My value is the following: I give observability with 0 code changes, and a localdev opportunity with connecting to a cloud environment, for instance a request comes from a frontend app on staging to my backend app locally so I could intercept it and make my laptop appear kinda in the cloud. It's a multitenant project. There are 2 paths: kubernetes and a custom architecture. To build a custom architecture the app must be on a few virtual machines, a load balancer on top including firewall. The challenge: ask me necessary questions so we could make a right decision. I have to highlight, we build a users' environment, not the product architecture I will create in order to reproduce the given environment, so we need to decide that would fit me and users better.
</details>

Initially I thought I will do it providing a user set of virtual machines connected under VPC, putting a load balancer on top, back to 2000. I thought it will make it cheaper and some tools just easier to implement.

Chatting to GPT I realized - Kubernetes will provide it a way quicker, most of the stuff is just ready to go like network policies, load balancing, SSL, deployment/rollback, health monitoring, resources observability, Istio adoption. Istio is very useful for observability and local first development, it became a new word today - __remocal__.

When stepped into the planning I decided to make it even longer.
I wanted to researched all the kanban boards, unresistable.
I used to use Trello and it was ok, but using api in power-ups boundaries sucks. Not really somethign I need right now though. 

I tried Cluckup, it's a laggish joke, even worse than Jira to make you feel you are already enterprise.
I tried Asana and saw 0 difference with Trello, I spent about 2 minutes to confirm it and exist.

### The ugly thing

In the end I found Linear. 
To be fair it looked ugly, the design is equal to supabase: fonts, buttons.

A few minutes later I started catching.
Keyboard first design - that's what I buy.

So I read Linear Method, the framework they apply internally. It was hard to accept it, I think older I get more conservatibe I become, but I dig it anyway.
The basic element is an issue. It might have sub-issues. And they might have.
They can be collected in a project.

There are bunch of other staff I don't use, but I will share it below.
- Cycle - like a sprint, hate it.
- Triage - inbox, it's a boss feature in my opinion, you can aggregate communication channels in a single place, then an on-call person can carry them, create issues or remove.
- Initiative - collection of the projects, they can be presented as a time line or a strategy decision, or even a roadmap on a timeline. 

As a result I cooked quite a few cards (48 projects in a backlog 😱️️️️️️).

![img](./few.png)

Thank you for reading, come here and see what's gonna be in the end.
Repository is here: http://github.com/treenq/treenq
