import{_ as t,r as p,o as i,c as o,a as n,b as s,d as e,e as l}from"./app.26c798e2.js";const c={},r=n("h2",{id:"prisma-简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#prisma-简介","aria-hidden":"true"},"#"),s(" prisma 简介")],-1),u={href:"https://www.prisma.io/",target:"_blank",rel:"noopener noreferrer"},d=l(`<h2 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目" aria-hidden="true">#</a> 初始化项目</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> prisma-demo
<span class="token builtin class-name">cd</span> prisma-demo

<span class="token function">npm</span> init <span class="token parameter variable">-y</span>
<span class="token function">npm</span> <span class="token function">install</span> prisma <span class="token parameter variable">-D</span>

npx prisma init
<span class="token comment"># 或者选择sqlite 作为默认数据库</span>
npx prisma init --datasource-provider sqlite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置 <code>schema.prisma</code> 文件</li></ul><div class="language-prisma line-numbers-mode" data-ext="prisma"><pre class="language-prisma"><code>// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = &quot;prisma-client-js&quot;
}

datasource db {
  provider = &quot;sqlite&quot;
  url      = env(&quot;DATABASE_URL&quot;)
}

// 用户模型
model user {
  id       String   @id @unique @default(uuid())
  // @map 作用是将数据库中的字段名映射为 user_name
  userName String   @unique @map(&quot;user_name&quot;)
  password String   @default(&quot;&quot;)
  nickName String   @default(&quot;&quot;) @map(&quot;nick_name&quot;)
  address  String   @default(&quot;&quot;)
  createAt DateTime @default(now()) @map(&quot;create_at&quot;)
  updateAt DateTime @default(now()) @map(&quot;update_at&quot;)
  post     post[]

  // @@map 作用是将数据库中的表名映射为 users
  @@map(&quot;users&quot;)
}

// 文章模型
model post {
  id       String   @id @unique @default(uuid())
  title    String   @default(&quot;&quot;)
  desc     String   @default(&quot;&quot;)
  content  String   @default(&quot;&quot;)
  createAt DateTime @default(now()) @map(&quot;create_at&quot;)
  updateAt DateTime @default(now()) @map(&quot;update_at&quot;)

  // 一篇文章只能属于一个用户
  user   user   @relation(fields: [userId], references: [id])
  // @map 作用是将数据库中的字段名映射为 user_id
  userId String @map(&quot;user_id&quot;)

  createdAt DateTime @default(now()) @map(&quot;created_at&quot;)
  updatedAt DateTime @default(now()) @map(&quot;updated_at&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>生成数据库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx prisma db push

<span class="token comment"># vscode 安装 sqlite 插件，可以查看数据库</span>

<span class="token comment"># prisma 可视化 查看数据库 npx prisma studio</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>连接数据库</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// utils/db.js</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> PrismaClient <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@prisma/client&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PrismaClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 连接数据库</span>
db<span class="token punctuation">.</span><span class="token function">$connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据库操作" tabindex="-1"><a class="header-anchor" href="#数据库操作" aria-hidden="true">#</a> 数据库操作</h2><ul><li>增加数据</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// user.js, 然后执行 node user.js</span>
<span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./utils/db&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 创建用户</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">createUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> db<span class="token punctuation">.</span>user<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">userName</span><span class="token operator">:</span> <span class="token string">&#39;小黑&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">nickName</span><span class="token operator">:</span> <span class="token string">&#39;小黑&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;创建用户成功&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">createUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 查询用户</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> userList <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span>user<span class="token punctuation">.</span><span class="token function">findMany</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">select</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">userName</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">nickName</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;查询用户列表成功&#39;</span><span class="token punctuation">,</span> userList<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">getUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 创建文章</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">createPost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span>user<span class="token punctuation">.</span><span class="token function">findFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> db<span class="token punctuation">.</span>post<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;第一篇文章&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;第一篇文章的内容&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">userId</span><span class="token operator">:</span> user<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;创建文章成功&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">createPost</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>关联数据查询</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// user.js, 然后执行 node user.js</span>
<span class="token comment">// 使用 select 关联查询， 或者 include 关联查询</span>
<span class="token comment">// 查询文章</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getPostList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> postList <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span>post<span class="token punctuation">.</span><span class="token function">findMany</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">select</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">select</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">userName</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">nickName</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// include: {</span>
    <span class="token comment">//   user: true,</span>
    <span class="token comment">// },</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;查询文章列表成功&#39;</span><span class="token punctuation">,</span> postList<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="prisma-常用命令" tabindex="-1"><a class="header-anchor" href="#prisma-常用命令" aria-hidden="true">#</a> prisma 常用命令</h2><ul><li><p><code>npx prisma init</code> 初始化项目</p></li><li><p><code>npx prisma migrate dev</code> 生成数据库</p></li><li><p><code>npx prisma studio</code> 可视化查看数据库</p></li><li><p><code>npx prisma migrate reset</code> 重置数据库</p></li><li><p><code>npx prisma migrate deploy</code> 部署数据库</p></li><li><p><code>npx prisma generate</code> 生成 prisma client</p></li><li><p><code>npx prisma introspect</code> 生成 prisma schema</p></li><li><p><code>npx prisma format</code> 格式化 prisma schema</p></li><li><p><code>npx prisma migrate save --experimental</code> 生成迁移文件</p></li><li><p><code>npx prisma migrate up --experimental</code> 执行迁移文件</p></li><li><p><code>npx prisma migrate down --experimental</code> 回滚迁移文件</p></li><li><p><code>npx prisma migrate resolve</code> 解决迁移文件冲突</p></li><li><p><code>npx prisma migrate status</code> 查看迁移文件状态</p></li><li><p><code>npx prisma db push</code> 生成数据库</p></li><li><p><code>npx prisma db pull</code> 从数据库生成 prisma schema</p></li><li><p><code>npx prisma db seed</code> 生成数据库种子数据</p></li><li><p><code>npx prisma db seed --preview-feature</code> 生成数据库种子数据</p></li><li><p><code>npx prisma db seed --preview-feature --reset</code> 重置数据库种子数据</p></li><li><p><code>npx prisma db seed --preview-feature --reset --force</code> 强制重置数据库种子数据</p></li><li><p><code>npx prisma migrate dev --name init</code> 生成迁移文件</p></li><li><p><code>npx prisma migrate dev --name init --create-only</code> 生成迁移文件</p></li><li><p><code>npx prisma migrate dev --name init --create-only --preview-feature</code> 生成迁移文件</p></li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,16),m={href:"https://www.prisma.io/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://prisma.yoga/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://juejin.cn/post/7153283997060202527",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.bilibili.com/video/BV1mZ4y1f7bu?p=1&vd_source=c5abf1ba032ca00c06ebba96e3ff445e",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.bilibili.com/video/BV1UM4y1T7QF/?spm_id_from=333.337.search-card.all.click&vd_source=c5abf1ba032ca00c06ebba96e3ff445e",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.bilibili.com/video/BV1yo4y1x7e7/?spm_id_from=333.337.search-card.all.click&vd_source=c5abf1ba032ca00c06ebba96e3ff445e",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.bilibili.com/video/BV1K44y197Za/?spm_id_from=333.337.search-card.all.click&vd_source=c5abf1ba032ca00c06ebba96e3ff445e",target:"_blank",rel:"noopener noreferrer"},g={href:"https://zhuanlan.zhihu.com/p/594669461",target:"_blank",rel:"noopener noreferrer"};function _(w,x){const a=p("ExternalLinkIcon");return i(),o("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[s("prism"),e(a)]),s(" 是一个数据库管理工具，可以通过 prisma 来管理数据库，也可以通过 prisma 来管理数据库的 schema，也可以通过 prisma 来管理数据库的数据。")])]),d,n("ul",null,[n("li",null,[n("a",m,[s("Prisma"),e(a)])]),n("li",null,[n("a",v,[s("Prisma 中文文档"),e(a)])]),n("li",null,[n("a",k,[s("使用 Next.js、 Prisma 和 PostgreSQL 全栈开发视频网站"),e(a)])]),n("li",null,[n("a",b,[s("Node.js 中的 ORM 框架 Prisma 使用"),e(a)])]),n("li",null,[n("a",f,[s("手把手实践入门 Prisma - 面向 Prisma 初学者"),e(a)])]),n("li",null,[n("a",h,[s("Prisma 教程 | 快速入门 | 下一代 Node.js 和 TypeScript ORM"),e(a)])]),n("li",null,[n("a",y,[s("Vue3+Nest+GraphQL+Prisma 入门全栈开发图书管理系统"),e(a)])]),n("li",null,[n("a",g,[s("基于 docker 的 prisma + eggjs + typescript 的后端请求模板"),e(a)])])])])}const j=t(c,[["render",_],["__file","index.html.vue"]]);export{j as default};
