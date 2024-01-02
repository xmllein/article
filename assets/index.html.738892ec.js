import{_ as t,r as o,o as c,c as l,a as n,b as s,d as e,e as p}from"./app.26c798e2.js";const i={},r=p(`<h2 id="egg-js-简介" tabindex="-1"><a class="header-anchor" href="#egg-js-简介" aria-hidden="true">#</a> Egg.js 简介</h2><ul><li>Egg.js 是一个基于 Koa 的 Node.js 服务端框架。</li><li>Egg.js 通过框架约定进行开发，提高开发效率和规范性。</li><li>Egg.js 通过框架插件的方式，提供了更多的功能，比如：安全、Session、定时任务、邮件、队列、MySQL、Redis、Elasticsearch、GraphQL、Vue、React、Webpack 等等。</li></ul><h2 id="egg-js-特性" tabindex="-1"><a class="header-anchor" href="#egg-js-特性" aria-hidden="true">#</a> Egg.js 特性</h2><ul><li>提供基于 Egg 定制上层框架的能力</li><li>高度可扩展的插件机制</li><li>内置多进程管理</li><li>基于 Koa 开发，性能优异</li><li>框架稳定，测试覆盖率高</li><li>渐进式开发</li></ul><h2 id="egg-js-适用场景" tabindex="-1"><a class="header-anchor" href="#egg-js-适用场景" aria-hidden="true">#</a> Egg.js 适用场景</h2><ul><li>服务端渲染</li><li>大中型网站后台</li><li>微服务</li></ul><h2 id="egg-js-目录结构" tabindex="-1"><a class="header-anchor" href="#egg-js-目录结构" aria-hidden="true">#</a> Egg.js 目录结构</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>egg-project
├── package.json
├── app.js <span class="token punctuation">(</span>可选<span class="token punctuation">)</span> <span class="token punctuation">(</span>入口文件<span class="token punctuation">)</span>
├── agent.js <span class="token punctuation">(</span>可选<span class="token punctuation">)</span> <span class="token punctuation">(</span>Agent 入口文件<span class="token punctuation">)</span>
├── app
<span class="token operator">|</span>   ├── router.js
│   ├── controller
│   <span class="token operator">|</span>   └── home.js
│   ├── <span class="token function">service</span>
│   <span class="token operator">|</span>   └── user.js
│   ├── middleware
│   <span class="token operator">|</span>   └── response_time.js
│   ├── schedule <span class="token punctuation">(</span>可选<span class="token punctuation">)</span>
│   <span class="token operator">|</span>   └── my_task.js
│   ├── public <span class="token punctuation">(</span>可选<span class="token punctuation">)</span>
│   <span class="token operator">|</span>   └── reset.css
│   ├── view <span class="token punctuation">(</span>可选<span class="token punctuation">)</span>
│   <span class="token operator">|</span>   └── home.tpl
│   ├── extend <span class="token punctuation">(</span>可选<span class="token punctuation">)</span>
│   <span class="token operator">|</span>   ├── helper.js
│   <span class="token operator">|</span>   ├── request.js
│   <span class="token operator">|</span>   ├── response.js
│   <span class="token operator">|</span>   ├── context.js
│   <span class="token operator">|</span>   └── application.js
│   ├── plugin.js <span class="token punctuation">(</span>可选<span class="token punctuation">)</span>
│   └── config
│       ├── config.default.js
│       ├── config.prod.js
│       ├── config.test.js
│       ├── config.local.js <span class="token punctuation">(</span>可选<span class="token punctuation">)</span>
│       ├── plugin.js <span class="token punctuation">(</span>可选<span class="token punctuation">)</span>
│       └── config.override.js <span class="token punctuation">(</span>可选<span class="token punctuation">)</span>
├── <span class="token builtin class-name">test</span>
<span class="token operator">|</span>   ├── middleware
│   <span class="token operator">|</span>   └── response_time.test.js
│   └── controller
│       └── home.test.js
└── logs <span class="token punctuation">(</span>可选<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="egg-js-基础" tabindex="-1"><a class="header-anchor" href="#egg-js-基础" aria-hidden="true">#</a> Egg.js 基础</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 安装脚手架</span>
<span class="token function">npm</span> i egg-init <span class="token parameter variable">-g</span>
<span class="token comment"># 或者直接</span>
<span class="token function">npm</span> init egg <span class="token parameter variable">--type</span><span class="token operator">=</span>simple

<span class="token comment"># 创建项目</span>
<span class="token function">npm</span> init egg <span class="token parameter variable">--type</span><span class="token operator">=</span>simple
<span class="token comment">#或者 ts 版本</span>
<span class="token function">npm</span> init egg <span class="token parameter variable">--type</span><span class="token operator">=</span>ts

<span class="token comment"># 框架开发</span>
<span class="token function">npm</span> init egg <span class="token parameter variable">--type</span><span class="token operator">=</span>framework

<span class="token comment"># 插件开发</span>
<span class="token function">npm</span> init egg <span class="token parameter variable">--type</span><span class="token operator">=</span>plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 安装依赖</span>
<span class="token function">npm</span> i

<span class="token comment"># 启动项目</span>
<span class="token function">npm</span> run dev

<span class="token comment"># 启动单元测试</span>
<span class="token function">npm</span> <span class="token builtin class-name">test</span>

<span class="token comment"># 启动线上环境</span>
<span class="token function">npm</span> start

<span class="token comment"># 停止线上环境</span>
<span class="token function">npm</span> stop

<span class="token comment"># 查看日志</span>
<span class="token function">npm</span> run log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// config/config.default.js</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">appInfo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">(</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 开发时候设置为 false，线上环境设置为 true</span>
  config<span class="token punctuation">.</span>security <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">csrf</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">enable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// use for cookie sign key, should change to your own and keep security</span>
  config<span class="token punctuation">.</span>keys <span class="token operator">=</span> appInfo<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;_demo&#39;</span>

  <span class="token comment">// add your middleware config here</span>
  config<span class="token punctuation">.</span>middleware <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token comment">// 配置需要的插件，数组顺序即为插件的加载顺序</span>
  <span class="token comment">// static 插件默认配置</span>
  config<span class="token punctuation">.</span>static <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dir</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>appInfo<span class="token punctuation">.</span>baseDir<span class="token punctuation">,</span> <span class="token string">&#39;app/public&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dynamic</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">preload</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">buffer</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maxFiles</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 配置需要的插件 egg-mysql</span>
  <span class="token comment">// 配置 mysql 插件信息</span>
  config<span class="token punctuation">.</span>mysql <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">client</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// host</span>
      <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;mysql.com&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 端口号</span>
      <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token string">&#39;3306&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 用户名</span>
      <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&#39;test_user&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 密码</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;test_password&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 数据库名</span>
      <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 是否加载到 app 上，默认开启</span>
      <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// 是否加载到 agent 上，默认关闭</span>
      <span class="token literal-property property">agent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 配置需要的插件 egg-redis</span>
  <span class="token comment">// 配置 redis 插件信息</span>
  config<span class="token punctuation">.</span>redis <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">client</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">6379</span><span class="token punctuation">,</span> <span class="token comment">// Redis port</span>
      <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Redis host</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">db</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 配置需要的插件 egg-sequelize</span>
  <span class="token comment">// 配置 sequelize 插件信息</span>
  config<span class="token punctuation">.</span>sequelize <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">dialect</span><span class="token operator">:</span> <span class="token string">&#39;mysql&#39;</span><span class="token punctuation">,</span> <span class="token comment">// support: mysql, mariadb, postgres, mssql</span>
    <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;mysql.com&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token string">&#39;3306&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;test_user&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;test_password&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">define</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">timestamps</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 默认不加时间戳</span>
      <span class="token literal-property property">freezeTableName</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 默认不修改表名</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 配置需要的插件 egg-view-nunjucks</span>
  <span class="token comment">// 配置模板引擎</span>
  config<span class="token punctuation">.</span>view <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">defaultViewEngine</span><span class="token operator">:</span> <span class="token string">&#39;nunjucks&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mapping</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;.tpl&#39;</span><span class="token operator">:</span> <span class="token string">&#39;nunjucks&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 配置需要的插件 egg-graphql</span>
  <span class="token comment">// 配置 graphql 插件信息</span>
  config<span class="token punctuation">.</span>graphql <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">router</span><span class="token operator">:</span> <span class="token string">&#39;/graphql&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">agent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">graphiql</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">apolloServerOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tracing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 配置需要的插件 egg-jwt</span>
  <span class="token comment">// 配置 jwt 插件信息</span>
  config<span class="token punctuation">.</span>jwt <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 秘钥</span>
    <span class="token literal-property property">secret</span><span class="token operator">:</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 过期时间</span>
    <span class="token literal-property property">sign</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">expiresIn</span><span class="token operator">:</span> <span class="token string">&#39;1d&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 配置需要的插件 egg-validate</span>
  <span class="token comment">// 配置 validate 插件信息</span>
  config<span class="token punctuation">.</span>validate <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// convert: false,</span>
    <span class="token comment">// validateRoot: false,</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 配置需要的插件 egg-cors</span>
  <span class="token comment">// 配置 cors 插件信息</span>
  config<span class="token punctuation">.</span>cors <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">origin</span><span class="token operator">:</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">allowMethods</span><span class="token operator">:</span> <span class="token string">&#39;GET,HEAD,PUT,POST,DELETE,PATCH&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// add your user config here</span>
  <span class="token keyword">const</span> userConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// myAppName: &#39;egg&#39;,</span>
    <span class="token literal-property property">redisExpire</span><span class="token operator">:</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token comment">// redis过期时间</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>config<span class="token punctuation">,</span>
    <span class="token operator">...</span>userConfig<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件" aria-hidden="true">#</a> 中间件</h3><ul><li>编写中间件</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/middleware/response_time.js</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">responseTime</span><span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> startTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 上报请求时间</span>
    ctx<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;X-Response-Time&#39;</span><span class="token punctuation">,</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> startTime<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置中间件</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// config/config.default.js</span>

<span class="token comment">// 配置中间件</span>
config<span class="token punctuation">.</span>middleware <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;responseTime&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// 配置中间件的配置项</span>
config<span class="token punctuation">.</span>responseTime <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">&#39;X-Response-Time&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h3><ul><li>编写路由</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/router.js</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> router<span class="token punctuation">,</span> controller <span class="token punctuation">}</span> <span class="token operator">=</span> app
  router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> controller<span class="token punctuation">.</span>home<span class="token punctuation">.</span>index<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="控制器" tabindex="-1"><a class="header-anchor" href="#控制器" aria-hidden="true">#</a> 控制器</h3><ul><li>编写控制器</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/controller/home.js</span>
<span class="token keyword">const</span> Controller <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;egg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Controller

<span class="token keyword">class</span> <span class="token class-name">HomeController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> ctx <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">&#39;hi, egg&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> HomeController
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="服务" tabindex="-1"><a class="header-anchor" href="#服务" aria-hidden="true">#</a> 服务</h3><ul><li>编写服务</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/service/user.js</span>
<span class="token keyword">const</span> Service <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;egg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Service

<span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token keyword">extends</span> <span class="token class-name">Service</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">uid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>model<span class="token punctuation">.</span>User<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> uid<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> user
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> UserService
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模型-sequelize" tabindex="-1"><a class="header-anchor" href="#模型-sequelize" aria-hidden="true">#</a> 模型(Sequelize)</h3><ul><li>定义模型</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/model/user.js</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token constant">STRING</span><span class="token punctuation">,</span> <span class="token constant">INTEGER</span><span class="token punctuation">,</span> <span class="token constant">DATE</span> <span class="token punctuation">}</span> <span class="token operator">=</span> app<span class="token punctuation">.</span>Sequelize

  <span class="token keyword">const</span> User <span class="token operator">=</span> app<span class="token punctuation">.</span>model<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">INTEGER</span><span class="token punctuation">,</span> <span class="token literal-property property">primaryKey</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">autoIncrement</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token constant">STRING</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token constant">INTEGER</span><span class="token punctuation">,</span>
    <span class="token literal-property property">created_at</span><span class="token operator">:</span> <span class="token constant">DATE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">updated_at</span><span class="token operator">:</span> <span class="token constant">DATE</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> User
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用模型</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/controller/user.js</span>
<span class="token keyword">const</span> Controller <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;egg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Controller

<span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> ctx <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>model<span class="token punctuation">.</span>User<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> users
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> UserController
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h3><ul><li>安装插件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i egg-redis <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>配置插件</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// config/plugin.js</span>

<span class="token comment">// 配置插件</span>
exports<span class="token punctuation">.</span>redis <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">enable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token keyword">package</span><span class="token operator">:</span> <span class="token string">&#39;egg-redis&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用插件</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/controller/user.js</span>
<span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> ctx <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>model<span class="token punctuation">.</span>User<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 使用插件</span>
    <span class="token keyword">const</span> redis <span class="token operator">=</span> <span class="token keyword">await</span> app<span class="token punctuation">.</span>redis<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;default&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> redis<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token keyword">await</span> redis<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token punctuation">{</span>
      users<span class="token punctuation">,</span>
      foo<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h3><ul><li>编写扩展</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/extend/context.js 扩展context</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">get</span> <span class="token function">isIOS</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> iosReg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">iphone|ipad|ipod</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span>
    <span class="token keyword">return</span> iosReg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;user-agent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// app/extend/application.js 扩展application</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">get</span> <span class="token function">isIOS</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> iosReg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">iphone|ipad|ipod</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span>
    <span class="token keyword">return</span> iosReg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;user-agent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// app/extend/request.js 扩展request</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">get</span> <span class="token function">isIOS</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> iosReg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">iphone|ipad|ipod</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span>
    <span class="token keyword">return</span> iosReg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;user-agent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// app/extend/response.js 扩展response</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">get</span> <span class="token function">isIOS</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> iosReg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">iphone|ipad|ipod</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span>
    <span class="token keyword">return</span> iosReg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;user-agent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// app/extend/helper.js 扩展helper</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">get</span> <span class="token function">isIOS</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> iosReg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">iphone|ipad|ipod</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span>
    <span class="token keyword">return</span> iosReg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;user-agent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用扩展</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/controller/user.js</span>
<span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> ctx <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>model<span class="token punctuation">.</span>User<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 使用扩展</span>
    <span class="token keyword">const</span> isIOS <span class="token operator">=</span> ctx<span class="token punctuation">.</span>isIOS
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token punctuation">{</span>
      users<span class="token punctuation">,</span>
      isIOS<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// app/service/user.js</span>
<span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token keyword">extends</span> <span class="token class-name">Service</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">uid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>model<span class="token punctuation">.</span>User<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> uid<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 使用扩展 扩展application</span>
    <span class="token keyword">const</span> isIOS <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>app<span class="token punctuation">.</span>isIOS
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      user<span class="token punctuation">,</span>
      isIOS<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// app/middleware/response_time.js</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">responseTime</span><span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> startTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 上报请求时间</span>
    ctx<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;X-Response-Time&#39;</span><span class="token punctuation">,</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> startTime<span class="token punctuation">)</span>
    <span class="token comment">// 使用扩展 扩展request</span>
    <span class="token keyword">const</span> isIOS <span class="token operator">=</span> ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>isIOS
    <span class="token comment">// 使用扩展 扩展response</span>
    <span class="token keyword">const</span> isIOS <span class="token operator">=</span> ctx<span class="token punctuation">.</span>response<span class="token punctuation">.</span>isIOS
    <span class="token comment">// 使用扩展 扩展helper</span>
    <span class="token keyword">const</span> isIOS <span class="token operator">=</span> ctx<span class="token punctuation">.</span>helper<span class="token punctuation">.</span>isIOS
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定时任务" tabindex="-1"><a class="header-anchor" href="#定时任务" aria-hidden="true">#</a> 定时任务</h3><ul><li>编写定时任务</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/schedule/update_cache.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">schedule</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token string">&#39;1m&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 1 分钟间隔</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 指定所有的 worker 都需要执行</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token function">task</span><span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ctx 就是 app 上下文，可以调用 ctx 上的其他方法，或访问属性</span>
    ctx<span class="token punctuation">.</span>app<span class="token punctuation">.</span>cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置定时任务</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// config/config.default.js</span>
exports<span class="token punctuation">.</span>schedule <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token string">&#39;1m&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 1 分钟间隔</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 指定所有的 worker 都需要执行</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="egg-js-进阶" tabindex="-1"><a class="header-anchor" href="#egg-js-进阶" aria-hidden="true">#</a> Egg.js 进阶</h2><h3 id="loader-加载器" tabindex="-1"><a class="header-anchor" href="#loader-加载器" aria-hidden="true">#</a> Loader(加载器)</h3>`,53),u={href:"https://www.eggjs.org/zh-CN/advanced/loader",target:"_blank",rel:"noopener noreferrer"},d=n("li",null,"加载顺序",-1),k=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app.js</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;app.js&#39;</span><span class="token punctuation">)</span>
  app<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">&#39;server&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">server</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;server&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;request&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;request&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;response&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;response&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// agent.js</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">agent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;agent.js&#39;</span><span class="token punctuation">)</span>
  agent<span class="token punctuation">.</span>messenger<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;egg-ready&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;egg-ready&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  agent<span class="token punctuation">.</span>messenger<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;xxx_action&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;xxx_action&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插件开发" tabindex="-1"><a class="header-anchor" href="#插件开发" aria-hidden="true">#</a> 插件开发</h3>`,2),v={href:"https://www.eggjs.org/zh-cn/advanced/plugin.html",target:"_blank",rel:"noopener noreferrer"},m=n("li",null,[n("p",null,"编写一个自定义插件")],-1),b=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// lib/plugin/egg-xxx/middleware/xxx.js</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">xxx</span><span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 中间件的配置项，框架会将 app.config[\${middlewareName}] 传递进来</span>
    <span class="token comment">// console.log(options)</span>
    <span class="token comment">// console.log(ctx)</span>
    <span class="token comment">// console.log(next)</span>
    <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// lib/plugin/egg-xxx/app/package.json</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;egg-xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;eggPlugin&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// app/config/plugin.js</span>
exports<span class="token punctuation">.</span>xxx <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">enable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../lib/plugin/egg-xxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// app/config/config.default.js</span>
<span class="token comment">// 参数， options 接收</span>
exports<span class="token punctuation">.</span>xxx <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">aaa</span><span class="token operator">:</span> <span class="token string">&#39;aaa&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bbb</span><span class="token operator">:</span> <span class="token string">&#39;bbb&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 或者在app.js 中应用</span>
<span class="token comment">// app.js</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>coreMiddleware<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="框架开发" tabindex="-1"><a class="header-anchor" href="#框架开发" aria-hidden="true">#</a> 框架开发</h3>`,2),g={href:"https://www.eggjs.org/zh-cn/advanced/framework.html",target:"_blank",rel:"noopener noreferrer"},h=n("h3",{id:"单元测试",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#单元测试","aria-hidden":"true"},"#"),s(" 单元测试")],-1),y={href:"https://www.eggjs.org/zh-cn/core/unittest.html",target:"_blank",rel:"noopener noreferrer"},f=n("h3",{id:"部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#部署","aria-hidden":"true"},"#"),s(" 部署")],-1),x={href:"https://www.eggjs.org/zh-cn/core/deployment.html",target:"_blank",rel:"noopener noreferrer"},w=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),j={href:"https://www.eggjs.org/zh-CN",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/eggjs/awesome-egg",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/search?q=topic%3Aegg-plugin&type=Repositories",target:"_blank",rel:"noopener noreferrer"},E={href:"https://zhuanlan.zhihu.com/p/464320162",target:"_blank",rel:"noopener noreferrer"},S={href:"https://zhuanlan.zhihu.com/p/594669461",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.sequelize.cn/core-concepts/model-querying-basics",target:"_blank",rel:"noopener noreferrer"},R={href:"https://coding.imooc.com/class/452.html",target:"_blank",rel:"noopener noreferrer"},T={href:"https://www.itying.com/goods-941.html",target:"_blank",rel:"noopener noreferrer"},O={href:"https://juejin.cn/post/7216518670381858875",target:"_blank",rel:"noopener noreferrer"},z={href:"https://juejin.cn/post/6995063516470198279",target:"_blank",rel:"noopener noreferrer"};function C(N,U){const a=o("ExternalLinkIcon");return c(),l("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[s("加载器"),e(a)])]),d]),k,n("ul",null,[n("li",null,[n("p",null,[n("a",v,[s("插件开发"),e(a)])])]),m]),b,n("ul",null,[n("li",null,[n("a",g,[s("框架开发"),e(a)])])]),h,n("ul",null,[n("li",null,[n("a",y,[s("单元测试"),e(a)])])]),f,n("ul",null,[n("li",null,[n("a",x,[s("部署"),e(a)])])]),w,n("ul",null,[n("li",null,[n("a",j,[s("官网"),e(a)])]),n("li",null,[n("a",_,[s("awesome-egg"),e(a)])]),n("li",null,[n("a",q,[s("插件列表"),e(a)])]),n("li",null,[n("a",E,[s("分享一个基于 Egg.js 的后端脚手架"),e(a)])]),n("li",null,[n("a",S,[s("基于 docker 的 prisma + eggjs + typescript 的后端请求模板"),e(a)])]),n("li",null,[n("a",I,[s("Sequelize 中文"),e(a)])]),n("li",null,[n("a",R,[s("React+React Hook+Egg 造轮子 全栈开发旅游电商应用"),e(a)])]),n("li",null,[n("a",T,[s("Eggjs 仿小米商城企业级"),e(a)])]),n("li",null,[n("a",O,[s("Egg.js、Nest.js、Midway.js 的比较"),e(a)])]),n("li",null,[n("a",z,[s("学习 egg.js，看这一篇就够了！"),e(a)])])])])}const D=t(i,[["render",C],["__file","index.html.vue"]]);export{D as default};
