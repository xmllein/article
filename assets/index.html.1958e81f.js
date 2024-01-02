import{_ as l,r as c,o as p,c as u,d as a,w as t,a as n,b as s}from"./app.26c798e2.js";const i={},r=n("h2",{id:"项目开始",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#项目开始","aria-hidden":"true"},"#"),s(" 项目开始")],-1),k=n("ul",null,[n("li",null,[s("项目 主要由 "),n("code",null,"koa2 + sequelize + mysql"),s(" 简单博客项目")]),n("li",null,[n("code",null,"koa2 koa-pure-blog"),s(" 生成项目")])],-1),d=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"koa-pure-blog"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0.1.0"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"private"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"scripts"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"start"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"node bin/www"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"dev"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"cross-env NODE_ENV=dev ./node_modules/.bin/nodemon  bin/www"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"prd"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"pm2 start bin/www"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"test"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"echo \\"Error: no test specified\\" && exit 1"'),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"dependencies"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"debug"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^4.1.1"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"koa"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^2.7.0"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"koa-bodyparser"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^4.2.1"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"koa-convert"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^1.2.0"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"koa-generic-session"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^2.3.0"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"koa-json"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^2.0.2"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"koa-logger"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^3.2.0"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"koa-onerror"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^4.1.0"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"koa-redis"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^4.0.1"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"koa-router"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^7.4.0"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"koa-static"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^5.0.0"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"koa-views"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^6.2.0"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"mysql2"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^2.3.3"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"pug"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^2.0.3"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"sequelize"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^6.25.8"'),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"devDependencies"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"cross-env"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^7.0.3"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"nodemon"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^1.19.1"'),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("h2",{id:"添加用户和博客路由",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#添加用户和博客路由","aria-hidden":"true"},"#"),s(" 添加用户和博客路由")],-1),b=n("ul",null,[n("li",null,"用户路由只有登录"),n("li",null,"博客路由有增删改查")],-1),v=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" router "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'koa-router'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" login "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../controller/user'"),n("span",{class:"token punctuation"},")"),s(`
router`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"prefix"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/api/user'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" SuccessModel"),n("span",{class:"token punctuation"},","),s(" ErrorModel "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../model/resModel'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 登录"),s(`
router`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"post"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/login'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("ctx"),n("span",{class:"token punctuation"},","),s(" next")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" username"),n("span",{class:"token punctuation"},","),s(" password "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ctx"),n("span",{class:"token punctuation"},"."),s("request"),n("span",{class:"token punctuation"},"."),s(`body
  `),n("span",{class:"token keyword"},"const"),s(" data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"login"),n("span",{class:"token punctuation"},"("),s("username"),n("span",{class:"token punctuation"},","),s(" password"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},"."),s("username"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 设置 session"),s(`
    ctx`),n("span",{class:"token punctuation"},"."),s("session"),n("span",{class:"token punctuation"},"."),s("username "),n("span",{class:"token operator"},"="),s(" data"),n("span",{class:"token punctuation"},"."),s(`username
    ctx`),n("span",{class:"token punctuation"},"."),s("session"),n("span",{class:"token punctuation"},"."),s("realname "),n("span",{class:"token operator"},"="),s(" data"),n("span",{class:"token punctuation"},"."),s(`realname
    ctx`),n("span",{class:"token punctuation"},"."),s("body "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"SuccessModel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  ctx`),n("span",{class:"token punctuation"},"."),s("body "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ErrorModel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'登录失败'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(` router
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" router "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'koa-router'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
  getList`),n("span",{class:"token punctuation"},","),s(`
  getDetail`),n("span",{class:"token punctuation"},","),s(`
  newBlog`),n("span",{class:"token punctuation"},","),s(`
  updateBlog`),n("span",{class:"token punctuation"},","),s(`
  delBlog`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../controller/blog'"),n("span",{class:"token punctuation"},")"),s(`
router`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"prefix"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/api/blog'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" SuccessModel"),n("span",{class:"token punctuation"},","),s(" ErrorModel "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../model/resModel'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 登录中间件"),s(`
`),n("span",{class:"token keyword"},"const"),s(" checkLogin "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../middleware/checkLogin'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 博客列表"),s(`
router`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/list'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("ctx"),n("span",{class:"token punctuation"},","),s(" next")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" author "),n("span",{class:"token operator"},"="),s(" ctx"),n("span",{class:"token punctuation"},"."),s("query"),n("span",{class:"token punctuation"},"."),s("author "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token string"},"''"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" keyword "),n("span",{class:"token operator"},"="),s(" ctx"),n("span",{class:"token punctuation"},"."),s("query"),n("span",{class:"token punctuation"},"."),s("keyword "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token string"},"''"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" listData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"getList"),n("span",{class:"token punctuation"},"("),s("author"),n("span",{class:"token punctuation"},","),s(" keyword"),n("span",{class:"token punctuation"},")"),s(`
  ctx`),n("span",{class:"token punctuation"},"."),s("body "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"SuccessModel"),n("span",{class:"token punctuation"},"("),s("listData"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 博客详情"),s(`
router`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/detail'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("ctx"),n("span",{class:"token punctuation"},","),s(" next")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"getDetail"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},"."),s("query"),n("span",{class:"token punctuation"},"."),s("id"),n("span",{class:"token punctuation"},")"),s(`
  ctx`),n("span",{class:"token punctuation"},"."),s("body "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"SuccessModel"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 新建一篇博客"),s(`
router`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"post"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/new'"),n("span",{class:"token punctuation"},","),s(" checkLogin"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("ctx"),n("span",{class:"token punctuation"},","),s(" next")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" author "),n("span",{class:"token operator"},"="),s(" ctx"),n("span",{class:"token punctuation"},"."),s("session"),n("span",{class:"token punctuation"},"."),s(`username
  ctx`),n("span",{class:"token punctuation"},"."),s("request"),n("span",{class:"token punctuation"},"."),s("body"),n("span",{class:"token punctuation"},"."),s("author "),n("span",{class:"token operator"},"="),s(` author
  `),n("span",{class:"token keyword"},"const"),s(" data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"newBlog"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},"."),s("request"),n("span",{class:"token punctuation"},"."),s("body"),n("span",{class:"token punctuation"},")"),s(`
  ctx`),n("span",{class:"token punctuation"},"."),s("body "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"SuccessModel"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 更新一篇博客"),s(`
router`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"post"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/update'"),n("span",{class:"token punctuation"},","),s(" checkLogin"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("ctx"),n("span",{class:"token punctuation"},","),s(" next")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" val "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"updateBlog"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},"."),s("query"),n("span",{class:"token punctuation"},"."),s("id"),n("span",{class:"token punctuation"},","),s(" ctx"),n("span",{class:"token punctuation"},"."),s("request"),n("span",{class:"token punctuation"},"."),s("body"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    ctx`),n("span",{class:"token punctuation"},"."),s("body "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"SuccessModel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    ctx`),n("span",{class:"token punctuation"},"."),s("body "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ErrorModel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'更新博客失败'"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 删除一篇博客"),s(`
router`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"post"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/del'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("ctx"),n("span",{class:"token punctuation"},","),s(" next")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" author "),n("span",{class:"token operator"},"="),s(" ctx"),n("span",{class:"token punctuation"},"."),s("session"),n("span",{class:"token punctuation"},"."),s(`username
  `),n("span",{class:"token keyword"},"const"),s(" val "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"delBlog"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},"."),s("query"),n("span",{class:"token punctuation"},"."),s("id"),n("span",{class:"token punctuation"},","),s(" author"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    ctx`),n("span",{class:"token punctuation"},"."),s("body "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"SuccessModel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    ctx`),n("span",{class:"token punctuation"},"."),s("body "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ErrorModel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'删除博客失败'"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(` router
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"BaseModel"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("data"),n("span",{class:"token punctuation"},","),s(" message")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"typeof"),s(" data "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'string'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("message "),n("span",{class:"token operator"},"="),s(` data
      data `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
      message `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("data "),n("span",{class:"token operator"},"="),s(` data
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("message"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("message "),n("span",{class:"token operator"},"="),s(` message
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"SuccessModel"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"BaseModel"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("data"),n("span",{class:"token punctuation"},","),s(" message")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},","),s(" message"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("errno "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ErrorModel"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"BaseModel"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("data"),n("span",{class:"token punctuation"},","),s(" message")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},","),s(" message"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("errno "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  SuccessModel`),n("span",{class:"token punctuation"},","),s(`
  ErrorModel`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("h2",{id:"添加用户和博客控制器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#添加用户和博客控制器","aria-hidden":"true"},"#"),s(" 添加用户和博客控制器")],-1),f=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" User "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../db/model/User'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" SuccessModel"),n("span",{class:"token punctuation"},","),s(" ErrorModel "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../model/ResModel'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// 用户登录"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"login"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("username"),n("span",{class:"token punctuation"},","),s(" password")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" User"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"findOne"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"where"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      username`),n("span",{class:"token punctuation"},","),s(`
      password`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("data "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" data"),n("span",{class:"token punctuation"},"."),s(`dataValues
`),n("span",{class:"token punctuation"},"}"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  login`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" Sequelize "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'sequelize'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" Blog "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../db/model/Blog'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" SuccessModel"),n("span",{class:"token punctuation"},","),s(" ErrorModel "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../model/resModel'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 获取博客列表"),s(`
`),n("span",{class:"token keyword"},"const"),s(" getList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),s("author "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(" keyword "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" whereOpt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("author"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    whereOpt`),n("span",{class:"token punctuation"},"."),s("author "),n("span",{class:"token operator"},"="),s(` author
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("keyword"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    whereOpt`),n("span",{class:"token punctuation"},"."),s("title "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token punctuation"},"["),s("Sequelize"),n("span",{class:"token punctuation"},"."),s("Op"),n("span",{class:"token punctuation"},"."),s("like"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"%"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("keyword"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"%"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" list "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" Blog"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"findAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"where"),n("span",{class:"token operator"},":"),s(" whereOpt"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"order"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'id'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'desc'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"return"),s(" list"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" item"),n("span",{class:"token punctuation"},"."),s("dataValues"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// 获取博客详情"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getDetail"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"id"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" detail "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" Blog"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"findOne"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"where"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" detail"),n("span",{class:"token punctuation"},"."),s(`dataValues
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// 新建一篇博客"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"newBlog"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("blogData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token punctuation"},","),s(" content"),n("span",{class:"token punctuation"},","),s(" author "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(` blogData
  `),n("span",{class:"token keyword"},"const"),s(" result "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" Blog"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token punctuation"},","),s(`
    content`),n("span",{class:"token punctuation"},","),s(`
    author`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" result"),n("span",{class:"token punctuation"},"."),s(`dataValues
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// 更新一篇博客"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"updateBlog"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("id"),n("span",{class:"token punctuation"},","),s(" blogData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token punctuation"},","),s(" content "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(` blogData
  `),n("span",{class:"token keyword"},"const"),s(" result "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" Blog"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      title`),n("span",{class:"token punctuation"},","),s(`
      content`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"where"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" result"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// 删除一篇博客"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"delBlog"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("id"),n("span",{class:"token punctuation"},","),s(" author")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" result "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" Blog"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"destroy"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"where"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token punctuation"},","),s(`
      author`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" result "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  getList`),n("span",{class:"token punctuation"},","),s(`
  getDetail`),n("span",{class:"token punctuation"},","),s(`
  newBlog`),n("span",{class:"token punctuation"},","),s(`
  updateBlog`),n("span",{class:"token punctuation"},","),s(`
  delBlog`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("h2",{id:"连接数据库建立表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#连接数据库建立表","aria-hidden":"true"},"#"),s(" 连接数据库建立表")],-1),x=n("ul",null,[n("li",null,[s("安装 "),n("code",null,"sequelize"),s(" 和 "),n("code",null,"mysql2")])],-1),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" Sequelize "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'sequelize'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token constant"},"MYSQL_CONF"),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../config/db'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// 配置"),s(`
`),n("span",{class:"token keyword"},"const"),s(" conf "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"host"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"MYSQL_CONF"),n("span",{class:"token punctuation"},"."),s("host"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"dialect"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'mysql'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// 线上环境，使用连接池"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"NODE_ENV"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'production'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  conf`),n("span",{class:"token punctuation"},"."),s("pool "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"max"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 连接池中最大的连接数量"),s(`
    `),n("span",{class:"token literal-property property"},"min"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 最小"),s(`
    `),n("span",{class:"token literal-property property"},"idle"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10000"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 如果一个连接池 10s 之内没有被使用，则释放"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// 创建连接"),s(`
`),n("span",{class:"token keyword"},"const"),s(" seq "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Sequelize"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token constant"},"MYSQL_CONF"),n("span",{class:"token punctuation"},"."),s("database"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token constant"},"MYSQL_CONF"),n("span",{class:"token punctuation"},"."),s("user"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token constant"},"MYSQL_CONF"),n("span",{class:"token punctuation"},"."),s("password"),n("span",{class:"token punctuation"},","),s(`
  conf
`),n("span",{class:"token punctuation"},")"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(` seq
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" Sequelize "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'sequelize'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" seq "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../seq'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 创建 User 模型"),s(`
`),n("span",{class:"token keyword"},"const"),s(" User "),n("span",{class:"token operator"},"="),s(" seq"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'pure_user'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// id 会自动创建，并设为主键，自增"),s(`
  `),n("span",{class:"token comment"},"//"),s(`
  `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(" Sequelize"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"STRING"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// varchar(255)"),s(`
    `),n("span",{class:"token literal-property property"},"allowNull"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(" Sequelize"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"STRING"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"allowNull"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"realname"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(" Sequelize"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"STRING"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(` User
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" Sequelize "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'sequelize'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" seq "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../seq'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 创建 Blog 模型"),s(`
`),n("span",{class:"token keyword"},"const"),s(" Blog "),n("span",{class:"token operator"},"="),s(" seq"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'pure_blog'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// id 会自动创建，并设为主键，自增"),s(`
  `),n("span",{class:"token comment"},"//"),s(`
  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(" Sequelize"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"STRING"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// varchar(255)"),s(`
    `),n("span",{class:"token literal-property property"},"allowNull"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(" Sequelize"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"TEXT"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// longtext"),s(`
    `),n("span",{class:"token literal-property property"},"allowNull"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"author"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(" Sequelize"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"STRING"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"allowNull"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(` Blog
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" seq "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./seq'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 需要同步的模型列表"),s(`
`),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./model/Blog'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./model/User'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 测试连接"),s(`
seq
  `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"authenticate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'ok'"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'err'"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 执行同步"),s(`
seq`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sync"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"force"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'sync ok'"),n("span",{class:"token punctuation"},")"),s(`
  process`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"exit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=n("h2",{id:"使用-redis-保存-session",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用-redis-保存-session","aria-hidden":"true"},"#"),s(" 使用 redis 保存 session")],-1),E=n("ul",null,[n("li",null,[s("安装 "),n("code",null,"koa-generic-session"),s(" 和 "),n("code",null,"koa-redis")])],-1),T=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" session "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'koa-generic-session'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" redisStore "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'koa-redis'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token constant"},"REDIS_CONF"),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./config/db'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token operator"},"..."),s(`

`),n("span",{class:"token comment"},"// session 配置"),s(`
app`),n("span",{class:"token punctuation"},"."),s("keys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'WJiol#231_'"),n("span",{class:"token punctuation"},"]"),s(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token function"},"session"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'w23423423'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weibo:sess:'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token comment"},"// 配置 cookie"),s(`
    `),n("span",{class:"token literal-property property"},"cookie"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'/'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"httpOnly"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"maxAge"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"60"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"60"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token comment"},"// 配置 redis"),s(`
    `),n("span",{class:"token literal-property property"},"store"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"redisStore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"all"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token constant"},"REDIS_CONF"),n("span",{class:"token punctuation"},"."),s("host"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},":"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token constant"},"REDIS_CONF"),n("span",{class:"token punctuation"},"."),s("port"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 路由注册之前"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("h2",{id:"接口测试工具",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#接口测试工具","aria-hidden":"true"},"#"),s(" 接口测试工具")],-1),O=n("div",{class:"language-http line-numbers-mode","data-ext":"http"},[n("pre",{class:"language-http"},[n("code",null,[s(`### 变量

@BASE_URL = http://localhost:3000/api

### 测试
`),n("span",{class:"token request-line"},[n("span",{class:"token method property"},"GET"),s(),n("span",{class:"token request-target url"},"http://localhost:3000/"),s(),n("span",{class:"token http-version property"},"HTTP/1.1")]),s(`


### 博客列表
GET {{BASE_URL}}/blog/list HTTP/1.1

### 博客详情
GET {{BASE_URL}}/blog/detail?id=1 HTTP/1.1


### 新建博客
POST {{BASE_URL}}/blog/new HTTP/1.1
`),n("span",{class:"token header"},[n("span",{class:"token header-name keyword"},"Content-Type"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token header-value"},"application/json")]),s(`
`),n("span",{class:"token application-json"},[s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"title"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"测试标题 koa sequelize"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"content"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"测试内容3324koa sequelize"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"createtime"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1560000000000"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

### 修改博客
POST `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s("BASE_URL"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),s("/blog/update?id="),n("span",{class:"token number"},"1"),s(" HTTP/"),n("span",{class:"token number"},"1.1"),s(`
Content-Type`),n("span",{class:"token operator"},":"),s(` application/json

`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"title"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"测试标题koa"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"content"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"测试内容koa"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"author"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"admin"'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

### 删除博客
POST `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s("BASE_URL"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),s("/blog/delete?id="),n("span",{class:"token number"},"1"),s(`


### 用户登录
POST `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s("BASE_URL"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),s(`/user/login
Content-Type`),n("span",{class:"token operator"},":"),s(` application/json

`),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"username"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"admin"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"password"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"admin"'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`


### 用户注册
POST `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s("BASE_URL"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),s(`/user/register
Content-Type`),n("span",{class:"token operator"},":"),s(` application/json

`),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"username"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"admin"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"password"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"admin"'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function z(L,C){const e=c("CodeGroupItem"),o=c("CodeGroup");return p(),u("div",null,[r,k,a(o,null,{default:t(()=>[a(e,{title:"package.json"},{default:t(()=>[d]),_:1})]),_:1}),m,b,a(o,null,{default:t(()=>[a(e,{title:"routes/user.js"},{default:t(()=>[v]),_:1}),a(e,{title:"routes/blog.js"},{default:t(()=>[y]),_:1}),a(e,{title:"通用 ./model/resModel.js"},{default:t(()=>[g]),_:1})]),_:1}),w,a(o,null,{default:t(()=>[a(e,{title:"controller/user.js"},{default:t(()=>[f]),_:1}),a(e,{title:"controller/blog.js"},{default:t(()=>[h]),_:1})]),_:1}),_,x,a(o,null,{default:t(()=>[a(e,{title:"./db/seq.js"},{default:t(()=>[q]),_:1}),a(e,{title:"./db/model/User.js"},{default:t(()=>[S]),_:1}),a(e,{title:"./db/model/Blog.js"},{default:t(()=>[j]),_:1}),a(e,{title:"同步脚本 ./db/sync.js"},{default:t(()=>[B]),_:1})]),_:1}),M,E,a(o,null,{default:t(()=>[a(e,{title:"./app.js"},{default:t(()=>[T]),_:1})]),_:1}),N,a(o,null,{default:t(()=>[a(e,{title:"postman.http"},{default:t(()=>[O]),_:1})]),_:1})])}const D=l(i,[["render",z],["__file","index.html.vue"]]);export{D as default};
