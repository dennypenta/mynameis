"use strict";(self.webpackChunkmynameis=self.webpackChunkmynameis||[]).push([[644],{8826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(5893),i=n(1151);const o={slug:"tq-devlog-0",title:"PaaS devlog |#0",authors:["denis"],tags:["software"]},s=void 0,r={permalink:"/mynameis/blog/tq-devlog-0",source:"@site/blog/04-tq-devlog-0/index.md",title:"PaaS devlog |#0",description:"Devlog |#0",date:"2024-09-02T20:12:28.000Z",formattedDate:"September 2, 2024",tags:[{label:"software",permalink:"/mynameis/blog/tags/software"}],readingTime:3.91,hasTruncateMarker:!0,authors:[{name:"Denis",title:"Software Experience Dude",key:"denis"}],frontMatter:{slug:"tq-devlog-0",title:"PaaS devlog |#0",authors:["denis"],tags:["software"]},unlisted:!1,nextItem:{title:"Backend Guy Ventures into Game Development",permalink:"/mynameis/blog/do-gamedev"}},l={authorsImageUrls:[void 0]},d=[{value:"Devlog |#0",id:"devlog-0",level:2},{value:"The problem",id:"the-problem",level:3},{value:"The planing",id:"the-planing",level:3},{value:"The ugly thing",id:"the-ugly-thing",level:3}];function c(e){const t={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"devlog-0",children:"Devlog |#0"}),"\n",(0,a.jsx)(t.p,{children:"Today I want to share with your my first steps of creating new project.\nFor a long time I've wanted created something cool, really meaninful, and after all I step into my idea: Platform as a service."}),"\n",(0,a.jsx)(t.p,{children:"The main tech stack has beeen defined: Go for a main backend, perhaps JavaScript for cdk integration.\nAll the infra will be used from a well known cloud providers (not aws ofc, no clue who can understand how to user it).\nFirst iteration will not such words as a frontend, ui, design. Ofc I want to make it, but only future history can judge me."}),"\n",(0,a.jsx)(t.h3,{id:"the-problem",children:"The problem"}),"\n",(0,a.jsxs)(t.p,{children:["The technical problem exists, it's fun to figure out.\nBut no the main one. The biggest fight Im gonna accept is ",(0,a.jsx)(t.strong,{children:"procrastination"}),". Im such a person who pushes further all the tasks very often. I just have little to do with time discipline. That's what will stop me from the progress.\nSo the easiest way to move progress away - do whatever, but not the progress."]}),"\n",(0,a.jsx)(t.h3,{id:"the-planing",children:"The planing"}),"\n",(0,a.jsxs)(t.p,{children:["So I decided to plan everything and understand how big the actual project is gonna be.\nSo I start speaking with GPT in order to express my mind, kinda talking to a duck.\nInstead of asking what I should do I explained my plan and asked to ask ",(0,a.jsx)(t.strong,{children:"more questions"})," so it could help me to clarify the technical solution and the plan."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"img",src:n(8323).Z+"",width:"817",height:"1036"})}),"\n",(0,a.jsxs)(o,{children:[(0,a.jsx)("summary",{children:(0,a.jsx)(t.p,{children:"Here you can find a prompt I used"})}),(0,a.jsx)(t.p,{children:"I want to develop a platform like digitalocean app, vercel, render, fly.io, heroku, etc. My value is the following: I give observability with 0 code changes, and a localdev opportunity with connecting to a cloud environment, for instance a request comes from a frontend app on staging to my backend app locally so I could intercept it and make my laptop appear kinda in the cloud. It's a multitenant project. There are 2 paths: kubernetes and a custom architecture. To build a custom architecture the app must be on a few virtual machines, a load balancer on top including firewall. The challenge: ask me necessary questions so we could make a right decision. I have to highlight, we build a users' environment, not the product architecture I will create in order to reproduce the given environment, so we need to decide that would fit me and users better."})]}),"\n",(0,a.jsx)(t.p,{children:"Initially I thought I will do it providing a user set of virtual machines connected under VPC, putting a load balancer on top, back to 2000. I thought it will make it cheaper and some tools just easier to implement."}),"\n",(0,a.jsxs)(t.p,{children:["Chatting to GPT I realized - Kubernetes will provide it a way quicker, most of the stuff is just ready to go like network policies, load balancing, SSL, deployment/rollback, health monitoring, resources observability, Istio adoption. Istio is very useful for observability and local first development, it became a new word today - ",(0,a.jsx)(t.strong,{children:"remocal"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"When stepped into the planning I decided to make it even longer.\nI wanted to researched all the kanban boards, unresistable.\nI used to use Trello and it was ok, but using api in power-ups boundaries sucks. Not really somethign I need right now though."}),"\n",(0,a.jsx)(t.p,{children:"I tried Cluckup, it's a laggish joke, even worse than Jira to make you feel you are already enterprise.\nI tried Asana and saw 0 difference with Trello, I spent about 2 minutes to confirm it and exist."}),"\n",(0,a.jsx)(t.h3,{id:"the-ugly-thing",children:"The ugly thing"}),"\n",(0,a.jsx)(t.p,{children:"In the end I found Linear.\nTo be fair it looked ugly, the design is equal to supabase: fonts, buttons."}),"\n",(0,a.jsx)(t.p,{children:"A few minutes later I started catching.\nKeyboard first design - that's what I buy."}),"\n",(0,a.jsx)(t.p,{children:"So I read Linear Method, the framework they apply internally. It was hard to accept it, I think older I get more conservatibe I become, but I dig it anyway.\nThe basic element is an issue. It might have sub-issues. And they might have.\nThey can be collected in a project."}),"\n",(0,a.jsx)(t.p,{children:"There are bunch of other staff I don't use, but I will share it below."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Cycle - like a sprint, hate it."}),"\n",(0,a.jsx)(t.li,{children:"Triage - inbox, it's a boss feature in my opinion, you can aggregate communication channels in a single place, then an on-call person can carry them, create issues or remove."}),"\n",(0,a.jsx)(t.li,{children:"Initiative - collection of the projects, they can be presented as a time line or a strategy decision, or even a roadmap on a timeline."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"As a result I cooked quite a few cards (48 projects in a backlog \ud83d\ude31\ufe0f\ufe0f\ufe0f\ufe0f\ufe0f\ufe0f)."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"img",src:n(4753).Z+"",width:"1632",height:"1121"})}),"\n",(0,a.jsxs)(t.p,{children:["Thank you for reading, come here and see what's gonna be in the end.\nRepository is here: ",(0,a.jsx)(t.a,{href:"http://github.com/treenq/treenq",children:"http://github.com/treenq/treenq"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},4753:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/few-a8829c782e27ba5f7f88f18ced787cf4.png"},8323:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gpt-b6084e0c9c75c7a74f335fb999dde350.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(7294);const i={},o=a.createContext(i);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);