"use strict";(self.webpackChunkmynameis=self.webpackChunkmynameis||[]).push([[538],{6362:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"do-gamedev","metadata":{"permalink":"/mynameis/blog/do-gamedev","source":"@site/blog/03-do-gamedev/index.mdx","title":"Backend Guy Ventures into Game Development","description":"In order to be engaged one explores different areas and looks for unknown software area.","date":"2024-09-02T18:32:54.000Z","formattedDate":"September 2, 2024","tags":[{"label":"software","permalink":"/mynameis/blog/tags/software"}],"readingTime":6.53,"hasTruncateMarker":true,"authors":[{"name":"Denis","title":"Software Experience Dude","key":"denis"}],"frontMatter":{"slug":"do-gamedev","title":"Backend Guy Ventures into Game Development","authors":["denis"],"tags":["software"]},"unlisted":false,"nextItem":{"title":"250mb json in a 40mb service limit","permalink":"/mynameis/blog/big-json"}},"content":"In order to be engaged one explores different areas and looks for unknown software area.\\n\\nHere we look at the gamedev in 2024 from experience in server side software.\\n\\nIn software development, it\'s common to explore new domains to stay engaged. \\nWhether it\'s for a change of pace or to push personal boundaries, exploring the unknown can lead to fancy adventures in software. \\nThis page will share my journey as a backend developer diving into the game development in 2024.\\n\\n\x3c!--truncate--\x3e\\n\\n#### Why Gamedev? \\n\\n99% of programmes came here to make a game.\\nEither did I.\\n\\nFrom a young age, I was captivated by two genres: strategy games and action RPGs. \\nMy first PC came preloaded with classics like Red Alert 2, Heroes of Might and Magic 3, and Diablo 2. \\nThe simple yet addictive gameplay\u2014click, move, destroy, enjoy \u2014 cemented my love for these genres. \\nOver the years, I\u2019ve played many iconic RTS games like Warcraft 3 and Starcraft 2 (and still do occasionally).\\nBut I realized that Starcraft 2 and similar games leaned more towards real-time execution rather than strategic depth.\\n\\nSo I decided to make my own game with the strategy and decision making take the center stage.\\n\\n#### Choosing the Game Engine \\n\\nThere are numerous options out there\u2014Defold, RPG Maker, GameMaker, Construct, to name a few.\\n\\nBut I focused on the big three that are free to start with, offer extensive flexibility, and have been tested by major projects: Unreal Engine, Unity, and Godot.\\n\\n#### Unreal Engine: A Mixed Bag of Power and Complexity\\n\\nI chose to start with Unreal Engine. It has a large community, though not the largest. Everything Unity offers in its asset store, Unreal has an equivalent. The engine supports C++ for low-level programming and Blueprints (a visual scripting language) for level design, though you can use either approach.\\n\\nInstalling the engine is a hassle. You need to first install the Epic Games Launcher and then download the 55GB engine itself, which can be a chore if your disk space is limited.\\n\\nAfter setting up a blank project, I was impressed by the vast flexibility Unreal offers. You get all the benefits of C++\u2014dynamic dependency injection, custom components, and more.. But it adds complexity.\\n1. Compiliation time. It exists. Not just exists like a couple blinks 5-10 seconds, it takes a lot of time to build a single class to start using it in the project.\\n2. Code complexity. Write header files, manual memory management. Good package manager doesn\'t exist in 2024, now I understand why they love Rust so much. \\n3. Poor mac support. No comments, even the interface of top bar menu is different, I was struggling to find editor settings according to the documentation, and every question is like that. \\n\\nI would recommend such engine for people who likes waiting, c++ and want to make a beatiful scenes with nice action. \\nI also have to note that engine is open source and owned by a technical guy and people who actually make games. I would stop there if I liked waiting and c++.\\n\\n#### Unity: The Industry Standard.\\n\\nNext up was Unity, the most popular game engine out there. \\nUnity has a vast ecosystem, with advanced features like rendering, post-processing, and easy shader creation. \\nIt\u2019s backed by a huge asset store, which should theoretically make development easier.\\nC# - Im not a big fun, but it\'s compilable, therefore type safe, seems good.\\n\\nA basic abstraction is an object. An object has compenents to manage what is it, it might be a script to move it, a mesh to render a tree, a colission not to pass through the tree, sound to play as tree leafs on the wind and so on.\\nSeems quite simple. \\n\\nBut when I approached a real problem there are plenty of weird things.\\n1. Unity has three different render pipelines, which aren\u2019t compatible with each other. The oldest one is being deprecated, meaning half the assets in the store may soon be obsolete.\\n2. Asset store is a garbage. I tried several camera controllers, and only one partially met my needs. I had to patch it to double its functionality, which felt like reinventing the wheel.\\n\\nWe all remember the Unity pricing drama. It has a closed-source codebase, and now there\u2019s a tracker that counts installations to generate more revenue for shareholders. \\nThis has led to a lot of half-baked features and outdated documentation, which can make the engine feel unstable.\\n\\nUnity is still a solid choice, but in 2024, it feels like the engine is in a weird transitional state. \\nThe documentation isn\u2019t as up-to-date as it should be, and the engine itself seems to be in a half-finished state. \\nI might revisit it in 2025 when Unity 6 is released.\\n\\n#### Godot: Unknown creature in the Sea.\\n\\nFinally, I turned to Godot, an engine I initially underestimated. \\nKnown for its strong 2D capabilities, Godot seemed lacking in 3D support. \\nIts physics engine was also rumored to be subpar.\\n\\nSo I start doing a 3D. \\nFirst I found that asset library is poor, camera controller only for Godot 3 (previous release) and it makes no sense to use Godot 3 in 2024.\\n\\nWhat I actually see in progress.\\n0. Godot\u2019s installation bundle is just 150MB. It has a negligible memory footprint and can run smoothly even on modest hardware. Coming from Unity, this was a breath of fresh air.\\n1. Godot\u2019s editor can be extended in a similar manner to Unity, allowing you to add new UI elements and dynamically instantiate new components.\\n2. The asset library isn\u2019t a store but a repository where everything is distributed for free. Since Godot is open-source, I doubt any significant part of it will go paid, unlike Unity and Unreal, where quality assets often come with a price tag.\\n3. Physics engine implementation can be replaced with jolt easy-peasy and works very well.\\n4. The same abstractions, the same component building, but not an object has component, rather a scene (actually a node) has nodes (the others to implement actual behavior of the node).\\n5. Exporting is just a button click. I managed to build a project for windows in Mac, it\'s so good, haven\'t had such smooth exprerience.\\n\\nIt was surprisingly easy to understand the basics, the nodes design, the event bus system, for a backend guy it\'s perfect to start making a real game.\\n\\nGDScript can fail in runtime, not the best, but you can use C# for the sake of compilte time failure.\\n\\nAnd I know, the community is smaller, it will be developed slower, true. But I care about me today, not the community.\\n\\nI initially planned to give Unity a fair shot, spending a week with both engines. \\nBut after just two days with Godot, I was progressing so much faster that I decided it wasn\u2019t worth the time to continue with Unity. \\nGodot\u2019s lower entry barrier and faster development pace made it the clear choice for me.\\n\\n##### I want to finish simpler. \\n\\nIn the end, the best engine is the one that aligns with your needs and preferences. \\nRemember, Blender was once considered a niche tool while everyone used 3D Max, and now Blender is the industry standard. \\nFirebase was just a \u201cbase,\u201d and today we have Supabase, Pocketbase and many others.\\n\\nThe landscape of game development is always changing. \\nWhat matters most is finding the tool that helps you bring your vision to life, not what the industry standard is. \\nFor me, that tool is Godot.\\n\\n### Lessons\\nSpoiler, no, I didn\'t finish a game, I learned the gamedev abstractions and played with the engines a bit and I enjoyed it.\\nAnd it\'s fine, I had good time and wish everyone to find a toy you can spend some time on and make you engaged."},{"id":"big-json","metadata":{"permalink":"/mynameis/blog/big-json","source":"@site/blog/02-250mbjson-in-50mb-limit/index.mdx","title":"250mb json in a 40mb service limit","description":"This article has been created to remind us of one simple thing: HTTP is a stream.","date":"2024-05-26T15:48:12.000Z","formattedDate":"May 26, 2024","tags":[{"label":"software","permalink":"/mynameis/blog/tags/software"}],"readingTime":6.8,"hasTruncateMarker":true,"authors":[{"name":"Denis","title":"Software Experience Dude","key":"denis"}],"frontMatter":{"slug":"big-json","title":"250mb json in a 40mb service limit","authors":["denis"],"tags":["software"]},"unlisted":false,"prevItem":{"title":"Backend Guy Ventures into Game Development","permalink":"/mynameis/blog/do-gamedev"},"nextItem":{"title":"Why this page exists","permalink":"/mynameis/blog/why-a-blog"}},"content":"This article has been created to remind us of one simple thing: HTTP is a stream.\\n\\nAs a practical outcome we can learn how to reduce memory requirements for our services in a typical task: cache warming.\\n\\n\x3c!--truncate--\x3e\\n\\nLet\'s look at the challenge first.\\n\\nWe have a service that must download the data and keep it in memory.\\nThe issue is the JSON document we have to download is 10 times larger than the encoded data. \\nTherefore we have to increase the memory limit 2-3 times to download it once. \\nLater on, the service doesn\'t consume as much memory, so it\'s a start up cost.\\n\\n\\n### The challenge: cut down the memory consumption as much as we can.\\n\\nLet\'s get back to the basic of network communication.\\n\\n:::note\\nWe skip TLS termination for the sake of simplicity.\\n:::\\n\\nThere is a great book that explains it very well: https://hpbn.co/building-blocks-of-tcp/#slow-start\\n\\n![img](./syn.svg)\\n\\nJust a litle picture to remind us how a connection starts: we do a handshake with the service.\\n\\nThen we can start exchanging data.\\nTypical API responses are at most ~50kb.\\n\\nBut what if you want to warm a cache? How much can it be? \\nIt can be a lot, around tens of megabytes.\\nIn my example, we take 250mb.\\n\\nHow does the server send such data?\\n\\n![img](./congestion.svg)\\n\\nSlowly, packet by packet.\\n\\nThe server tries to understand your throughput. The protocol itself rarely provides an accurate value of a packet size, so by relying on the imperical latency, it tunes the packet size little by little.\\nIt needs to send a lot of packets to transfer a really big response.\\n\\n### 3 Ways to do it\\n\\nBelow we will consider 3 approaches to solve this task.\\nThere is no such thing as the only right solution; all of them are fine as long as you understand the costs and risks well enough, and we are gonna cover them.\\n\\n### First, Brute Force solution.\\n\\n:::warning\\nIf you want to reproduce an example make sure to untar server/json.tar.gz; it must contain the f.json file since GitHub has a limit of up to 100mb for a file.\\n:::\\n\\nYou can imagine how the simplest Go HTTP client can implement it or just look at the code.\\n\\n[Link](https://github.com/dennypenta/http-response-lab/blob/543510947c0b19dbc0097adf403ae5cd6954c1cc/client/main.go)\\n\\nThe implementation is straight forward: it sends a request, gets a response, reads, marhsals it into a defined structure, holds it in the memory and ready to serve it further.\\n\\nAnd here is the pprof output:\\n\\n```shell\\nShowing nodes accounting for 229.48MB, 100% of 229.48MB total\\n      flat  flat%   sum%        cum   cum%\\n  229.48MB   100%   100%   229.48MB   100%  io.ReadAll\\n         0     0%   100%   229.48MB   100%  main.main\\n         0     0%   100%   229.48MB   100%  runtime.main\\n```\\n\\nYes, it\'s not real win, with huge memory consumption, but it works ok.\\n\\nWe see all the memory consumed on reading the HTTP stream.\\n\\nOr you might say, \\"What a noob, you must use `json.Decoder`\\" so as to let the decoder work with the HTTP pipe closer.\\n\\nAnd it\'s pretty much the same, in my example, even worse.\\n[Link](https://github.com/dennypenta/http-response-lab/blob/b6ee7fcfd69fdffad844eb6a3d324d2fe3040985/client/main.go) to code with Decoder\\n\\n```shell\\nShowing nodes accounting for 384MB, 100% of 384MB total\\n      flat  flat%   sum%        cum   cum%\\n     384MB   100%   100%      384MB   100%  encoding/json.(*Decoder).refill\\n         0     0%   100%      384MB   100%  encoding/json.(*Decoder).Decode\\n         0     0%   100%      384MB   100%  encoding/json.(*Decoder).readValue\\n         0     0%   100%      384MB   100%  main.main\\n         0     0%   100%      384MB   100%  runtime.main\\n```\\n\\nTo recall why let\'s dig a little into the json/encoding library [implementation](https://cs.opensource.google/go/go/+/refs/tags/go1.22.3:src/encoding/json/stream.go;l=49). \\n\\n```go\\nfunc (dec *Decoder) Decode(v any) error {\\n\\tif dec.err != nil {\\n\\t\\treturn dec.err\\n\\t}\\n\\n\\tif err := dec.tokenPrepareForDecode(); err != nil {\\n\\t\\treturn err\\n\\t}\\n\\n\\tif !dec.tokenValueAllowed() {\\n\\t\\treturn &SyntaxError{msg: \\"not at beginning of value\\", Offset: dec.InputOffset()}\\n\\t}\\n\\n\\t// Read whole value into buffer.\\n\\tn, err := dec.readValue()\\n\\tif err != nil {\\n\\t\\treturn err\\n\\t}\\n\\tdec.d.init(dec.buf[dec.scanp : dec.scanp+n])\\n\\tdec.scanp += n\\n\\n\\t// Don\'t save err from unmarshal into dec.err:\\n\\t// the connection is still usable since we read a complete JSON\\n\\t// object from it before the error happened.\\n\\terr = dec.d.unmarshal(v)\\n\\n\\t// fixup token streaming state\\n\\tdec.tokenValueEnd()\\n\\n\\treturn err\\n}\\n```\\n\\nIt does exactly the same, it calls `dec.readValue()` first to read all the response and then `dec.d.unmarshal` to parse it.\\n\\nAnd it\'s ok; the reason is very simple: **encoding/json doesn\'t know the nature of your data.**\\n\\n:::note\\nLibraries like [json-iter](https://github.com/json-iterator/go) or [easyjson](https://github.com/mailru/easyjson) offer zero improvements in memory consumption.\\n:::\\n\\n### Second, decode object by object.\\n\\nGo json library provides a method of the Decoder called [`Token`](https://pkg.go.dev/encoding/json#Decoder.Token)\\n\\nThis approach, parsing manually token by token, can give us an option to manually parse the json.\\nA token might be every symbol, such as as open bracket, quote, key, value, etc.\\nBut I found this approach quite complex. Having a deeply nested JSON object makes it very confusing to understand the relation for a given token. An solution could be to hold every key and designated level, but the decision gets worse with duplicated keys on a couple of levels.\\n\\nThat\'s why I prefer another approach.\\n\\nThere is a well-known problem on LeetCode called \\"[Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/)\\"\\n\\nWe can simply read the beginning of a given object and the end, understanding when the last bracket of the object comes.\\n\\n[Link](https://github.com/dennypenta/http-response-lab/blob/b5890cbb74282416b5adacc92de95f18f7ee766f/client/main.go#L110)\\n\\npprof gives the following output\\n```shell\\n(pprof) top 5\\nShowing nodes accounting for 68.56MB, 100% of 68.56MB total\\nShowing top 5 nodes out of 10\\n      flat  flat%   sum%        cum   cum%\\n   27.55MB 40.18% 40.18%    68.56MB   100%  main.decode\\n      20MB 29.17% 69.35%       20MB 29.17%  encoding/json.(*decodeState).literalStore\\n      20MB 29.17% 98.52%       20MB 29.17%  bufio.NewReaderSize (inline)\\n    1.01MB  1.48%   100%     1.01MB  1.48%  bufio.(*Scanner).Text (inline)\\n         0     0%   100%       20MB 29.17%  encoding/json.(*decodeState).object\\n```\\n\\nUsually, the output varies between 65-80mb. \\n\\nSuch adventages is achieved due to marshalling the json **and** reading the HTTP response at the same time.\\n\\nLet\'s get back to the introduction. Such a huge response gives us a stream of HTTP chunks we read step by step until the FIN message comes.\\nWe can\'t make the HTTP server split every object in the response for us (probably we can, but it brings even more complexity).\\nInstead, every given chunk window we can ask, \\"Does it contain a valid json object?\\"\\n\\nAs soon as a valid object has come, we can marshal it and continue reading the response further **until the next valid JSON object comes**.\\n\\n### Third, the simplest: data compression.\\n\\nIt was new to me to discover that the most efficient solution will nott be related to the response handling.\\n\\n**We simply must transfer as little data as we can.**\\n\\nJSON is not the only way to represent the data.\\nIt\'s easy and human-readable, but sometimes we have to trade it.\\n\\nThere are plenty of formats we can apply:\\n- Avro\\n- Tthrift\\n- MessagePack\\n- Gob (Go only)\\n- Protobuf\\n\\nAnd most likely more I don\'t even know.\\n\\nI tried replacing decoding to MessagePack and gave very litle result (zero \\\\_(\u30c4)_/).\\n\\nThe best outcome showed Protobuf.\\n:::note\\nWe still use HTTP/1.1; we don\'t use gRPC transport.\\n:::\\n\\nThe output from pprof is even better with less effort to implement.\\nIt may vary up to 50mb sometimes.\\n\\n```shell\\n(pprof) top5\\nShowing nodes accounting for 30.79MB, 100% of 30.79MB total\\n      flat  flat%   sum%        cum   cum%\\n   30.79MB   100%   100%    30.79MB   100%  io.ReadAll\\n         0     0%   100%    30.79MB   100%  main.decode\\n         0     0%   100%    30.79MB   100%  main.main\\n         0     0%   100%    30.79MB   100%  runtime.main\\n```\\n\\nHere is the solution: [Link](https://github.com/dennypenta/http-response-lab/blob/main/client/main.go#L14)\\n\\nWhat we can say about Gob? \\n\\nIt offers very specific decoding and is a Go-only implementation, but it doesn\'t provide any benefit, here is the pprof output\\n```shell\\n(pprof) top5\\nShowing nodes accounting for 70.81MB, 100% of 70.81MB total\\nShowing top 5 nodes out of 20\\n      flat  flat%   sum%        cum   cum%\\n   30.53MB 43.12% 43.12%    30.53MB 43.12%  internal/saferio.ReadData\\n   28.28MB 39.94% 83.05%    28.28MB 39.94%  reflect.growslice\\n      12MB 16.95%   100%       12MB 16.95%  encoding/gob.decString\\n         0     0%   100%    70.81MB   100%  encoding/gob.(*Decoder).Decode\\n         0     0%   100%    70.81MB   100%  encoding/gob.(*Decoder).DecodeValue\\n```\\n\\nPerhaps for someone, having schemaless implementation is valuable, so here is the solution [link](https://github.com/dennypenta/http-response-lab/blob/main/client/main.go#L40)\\n\\n\\n### Conclusion\\n\\nI found 2 interesting ideas to me during the investigation.\\n1. The best, or one of them, solution might be the most obvious, so obvious to one is not to everyone.\\n2. It\'s not hard to implement and dig into fundamentals; some may win from engineering a new bicycle."},{"id":"why-a-blog","metadata":{"permalink":"/mynameis/blog/why-a-blog","source":"@site/blog/01-why-you-need-a-blog/index.mdx","title":"Why this page exists","description":"Blog is a\xa0 system to spread ideas across the internet. Shout out about a thing \\"Look, I have an opinion on that if you care\\".","date":"2023-12-13T21:25:34.000Z","formattedDate":"December 13, 2023","tags":[{"label":"career","permalink":"/mynameis/blog/tags/career"}],"readingTime":3.305,"hasTruncateMarker":true,"authors":[{"name":"Denis","title":"Software Experience Dude","key":"denis"}],"frontMatter":{"slug":"why-a-blog","title":"Why this page exists","authors":["denis"],"tags":["career"]},"unlisted":false,"prevItem":{"title":"250mb json in a 40mb service limit","permalink":"/mynameis/blog/big-json"}},"content":"Blog is a\xa0 system to spread ideas across the internet. Shout out about a thing \\"Look, I have an opinion on that if you care\\".\\n\\n\x3c!--truncate--\x3e\\n\\nI have opinion on different things, especially in software. I\'ve been working on it since 2015.  \\n\\nSo let\'s start from reasoning why you might want to own one.\\n\\n## It makes more than 0 chances somebody will find it and share your opinion\\n\\nOr disagree, it\'s also fine and in some cases means almost the the same for you.\\n\\nYou get audience.\xa0\\n\\nAnd it\'s a big deal.\\n\\nFirst, the audience challenges your ideas. It\'s good to find a person to discuss your ideas. It allows your either find weaknesses in the idea itself, or perhaps your mindset to find crucial vocabulary to express what it means for you, or become even more confident on a topic. After all, it\'s just a joy to discuss what you have on top of your head.\\n\\n## More than 0 chances your future team knows you\\n\\nIt\'s a well known that having a referral in a company makes hiring easier to everyone. They get plus a point in confidence they hire not a dumbass, you may skip long questionnaire. They refer you not because you are good at contribution, but it\'s easier to build ubiquitous language in the team when you know each other.\\n\\nI want to say having written something valuable for others makes you a little more known that you used to be. And if you apply to a new job and they have found it - it bumps your chances a lot.\\n\\nIm convinced in the idea that not just delivering good result to your company, but telling the best pieces to the others will pay me off later on.\\n\\nThe only thing is under question if we really have built and understood something important for the industry.\\n\\n## Memo is good\\n\\nDuring software experience I realised the wide range technologies I apply can hardly be stored in my head.\\n\\nTools such Obsidian are fancy, but Im not disciplined enough to handle my cloud to store it or just structure them well enough, it doesn\'t fit me.\\n\\nSo Im going to structure my experience here.\\n\\nIt\'s not just putting all I have in my memory, but also try structuring all new stuff I have in my head.\\n\\nFor instance, I want to memoize a way to define alerts using terraform. Even though I\'ve done it I have no idea what those queries to an observability provider mean.\xa0\\n\\nWhat should I do?\\n\\nNot to fool people. I will figure out in order to explain it to the others. Otherwise the article will be one of the thousands on medium or linkedin.\\n\\nEventually I have to push my skill up to give my audience valuable experience shared.\\n\\nIn the same time I get structured my experience and making it better by reading more in order to write a little.\\n\\n## Expressing better\\n\\nAnd my personal reason. \\n\\nIm poor at structuring my speach. If you read it you know how hard it was to catch my ideas. But I fight against it and I believe the blog may make me write more often and amend the way I express myself.\\n\\n## You are ready. what now?\\n\\nOk, let\'s say you confirmed you have a reason to have a blog.\\n\\n  \\n\\nA couple of hints I want to add.\\n\\n  \\n\\nPlatforms like medium blocks people from reading your content without subscription. \\nAnd definitely it\'s not what I want.\\n\\nI can understand if you want to setup patreon to provide sub only data, but I don\'t consider such option.\xa0\\nMoreover, the platforms get bigger revenue chunk of your ad and don\'t do more than google does.\\n\\nI picked docusaurus because I have full control on codebase, fonts, styles, ads, comments, structuring. And I was lucky enough to find a template I wanted to reuse by [takken](https://takken.io/).\\n\\nOr you can just clone this [project](https://github.com/dennypenta/mynameis)."}]}')}}]);