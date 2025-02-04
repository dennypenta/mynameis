"use strict";(self.webpackChunkmynameis=self.webpackChunkmynameis||[]).push([[872],{6103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=n(5893),i=n(1151);const o={slug:"tq-devlog-1",title:"PaaS devlog |#1",authors:["denis"],tags:["software"]},s=void 0,r={permalink:"/mynameis/blog/tq-devlog-1",source:"@site/blog/05-tq-devlog-1/index.md",title:"PaaS devlog |#1",description:"Devlog |#1: postgres, docker, beekeeper, lazygit",date:"2024-09-02T20:48:25.748Z",formattedDate:"September 2, 2024",tags:[{label:"software",permalink:"/mynameis/blog/tags/software"}],readingTime:3.315,hasTruncateMarker:!0,authors:[{name:"Denis",title:"Software Experience Dude",key:"denis"}],frontMatter:{slug:"tq-devlog-1",title:"PaaS devlog |#1",authors:["denis"],tags:["software"]},unlisted:!1,prevItem:{title:"Web API Design: A Simplified Approach",permalink:"/mynameis/blog/api-design"},nextItem:{title:"PaaS devlog |#0",permalink:"/mynameis/blog/tq-devlog-0"}},d={authorsImageUrls:[void 0]},l=[{value:"Devlog |#1: postgres, docker, beekeeper, lazygit",id:"devlog-1-postgres-docker-beekeeper-lazygit",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"devlog-1-postgres-docker-beekeeper-lazygit",children:"Devlog |#1: postgres, docker, beekeeper, lazygit"}),"\n",(0,a.jsx)(t.p,{children:"Another day I actually started working on the project (what a surprise)."}),"\n",(0,a.jsx)(t.p,{children:"I want to setup my repository, basic development environment, something to make it cool and get a chance to procrastinate a bit more."}),"\n",(0,a.jsx)(t.p,{children:"Im convinced I will store my data in postgres, therefore I need a local instance, migrations, a tool to lookup the data."}),"\n",(0,a.jsx)(t.p,{children:"First, docker compose. I can't imagine local environment without it. Very simple one, some volumes, passwordless acceess, expose 5432 port, done."}),"\n",(0,a.jsx)(t.p,{children:"I didn't know how my first feature will look like, a user creating, connecting a repository or saving the infrastracture state.\nBut I needed a first migration to test it, so I created a users table. Very creative, but I really will need users table, it's fine."}),"\n",(0,a.jsx)(t.p,{children:"I installed a few dependencies:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"go get github.com/golang-migrate/migrate/v4\ngo get github.com/jmoiron/sqlx\ngo get github.com/jackc/pgx\n"})}),"\n",(0,a.jsx)(t.p,{children:"I will sqlx + squirrel for query executing, pgx as a driver and migrate for running migrations, it prodes cli interface if you want to run in the jobs and go api as well."}),"\n",(0,a.jsx)(t.p,{children:"I will use go api, but I wouldn't recomment it in production, it's important to create a database backup before starting a mgiration, so the best case you have a migration job that makes a backup and then runs the migration, if it worked out - release is welcome."}),"\n",(0,a.jsx)(t.p,{children:"Then I made a few commands to work with migration like create new, up, down and fix migration."}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["Migration package stores the state in the same database. When it fails it writes the migration as ",(0,a.jsx)(t.code,{children:"dirty"}),". Fix command is used to force the version, it's very useful in the development process. I even used it in prod."]})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-makefile",children:'DB_DSN ?= "postgres://postgres@localhost:5432/tq?sslmode=disable"\n\nmigrate_new:\n    migrate create -ext sql -dir migrations -seq -digits 4 ${MNAME}\n\nmigrate_up:\n    migrate -path migrations -database ${DB_DSN} up\n\nmigrate_down:\n    migrate -path migrations -database ${DB_DSN} down\n\nmigrate_fix:\n    migrate -path migrations -database ${DB_DSN} force ${V}\n\nmigrate_v:\n    migrate -path migrations -database ${DB_DSN} version\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Using command ",(0,a.jsx)(t.code,{children:"make migrate_new users_table"})," I create a new migration and feel it with the following sql:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";\n\nCREATE TABLE IF NOT EXISTS users (\n    id uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,\n    email varchar(85) NOT NULL,\n    password varchar(255) NOT NULL,\n\n    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,\n    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL\n);\n'})}),"\n",(0,a.jsx)(t.p,{children:"I like using uuid as an identity. It never fooled me."}),"\n",(0,a.jsx)(t.p,{children:"Then I do what I didn't recommend."}),"\n",(0,a.jsx)(t.p,{children:"Yes, I run the migrations right in the starting the app server.\nSeems ok, applied."}),"\n",(0,a.jsx)(t.p,{children:"I need something to see the result, the table, the extension.\nI use psql, but to me personnaly it's very annoying having such long interface, it matters a lot when I have a few databases to follow."}),"\n",(0,a.jsxs)(t.p,{children:["I looked for a tool again. I tried pgadmin, jetbrains embedded one.\nAnd I found Beekeeper. That's the tool I wouldn't be ashamed to create. Looks very good, easy to use, to edit, look for data with 0 sql, comfortable keyboard control.\nEverything I like.\n",(0,a.jsx)(t.strong,{children:"It's even opensourced and has a free community edition."})]}),"\n",(0,a.jsx)(t.p,{children:"I looked at the data, the migration record exists, the users table does as well."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"img",src:n(3114).Z+"",width:"697",height:"485"})}),"\n",(0,a.jsxs)(t.p,{children:["Finally I can commit it.\nI like using lazygit for most of my cases.\nIt also a keyboard only control.\nEven my brain can handle it, there are very few commands: arrows to navigate, space to stage a change, you can use mouse to stage only a part  of the file, and push ",(0,a.jsx)(t.code,{children:"c"})," to input a commit message and ",(0,a.jsx)(t.code,{children:"Enter"})," to commit.\nIt also has bunch of things like branches list, reflog, command log."]}),"\n",(0,a.jsxs)(t.p,{children:["At least I don't repeatadly do anymore ",(0,a.jsx)(t.code,{children:"ls, gd, ga"})," file by file."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["I use zsh and it gives me many shortcuts, for instance ",(0,a.jsx)(t.code,{children:"ga"})," is equal to ",(0,a.jsx)(t.code,{children:"git add"})]})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"img",src:n(2772).Z+"",width:"1144",height:"368"})}),"\n",(0,a.jsxs)(t.p,{children:["Thank you for reading, come here and see what's gonna be in the end.\nRepository is here: ",(0,a.jsx)(t.a,{href:"http://github.com/treenq/treenq",children:"http://github.com/treenq/treenq"})]})]})}function g(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},3114:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/beekeeper-beaeade119f66325a55e6f5ae21ef953.png"},2772:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-c137585a8a0b1af52301455de126177b.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(7294);const i={},o=a.createContext(i);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);