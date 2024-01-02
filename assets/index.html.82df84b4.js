import{_ as t,r as p,o,c,a as n,b as a,d as e,e as i}from"./app.26c798e2.js";const l={},u=i(`<h2 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建" aria-hidden="true">#</a> 环境搭建</h2><ul><li><p><code>TypeORM</code> 是一个 ORM 框架，它可以运行在 <code>NodeJS</code>、<code>Browser</code>、<code>Cordova</code>、<code>PhoneGap</code>、<code>Ionic</code>、<code>React Native</code>、<code>Expo</code> 和 <code>Electron</code> 平台上，可以与 <code>TypeScript</code> 和 <code>JavaScript</code> <code>(ES5,ES6,ES7,ES8)</code>一起使用。 它的目标是始终支持最新的 <code>JavaScript</code> 特性并提供额外的特性以帮助你开发任何使用数据库的（不管是只有几张表的小型应用还是拥有多数据库的大型企业应用）应用程序。</p></li><li><p><code>TypeORM</code> 支持 <code>MySQL</code> / <code>MariaDB</code> / <code>Postgres</code> / <code>CockroachDB</code> / <code>SQLite</code> / <code>Microsoft SQL Server</code> / <code>Oracle</code> / <code>sql.js</code> / <code>MongoDB</code> 数据库。</p></li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> egg-init <span class="token parameter variable">--type</span><span class="token operator">=</span>ts

<span class="token function">npm</span> <span class="token function">install</span> typeorm egg-ts-typeorm mysql2 <span class="token parameter variable">--save</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置 config/plugin.ts</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  typeorm<span class="token operator">:</span> <span class="token punctuation">{</span>
    enable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token keyword">package</span><span class="token operator">:</span> <span class="token string">&#39;egg-ts-typeorm&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置 config/config.default.ts</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>config<span class="token punctuation">.</span>typeorm <span class="token operator">=</span> <span class="token punctuation">{</span>
  client<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;mysql&#39;</span><span class="token punctuation">,</span>
    host<span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
    port<span class="token operator">:</span> <span class="token number">3306</span><span class="token punctuation">,</span>
    username<span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
    password<span class="token operator">:</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span>
    database<span class="token operator">:</span> <span class="token string">&#39;sq_test&#39;</span><span class="token punctuation">,</span>
    synchronize<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    logging<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 关闭 csrf</span>
config<span class="token punctuation">.</span>security <span class="token operator">=</span> <span class="token punctuation">{</span>
  csrf<span class="token operator">:</span> <span class="token punctuation">{</span>
    enable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>根目录创建 <code>ormconfig.yml</code> 文件</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">default</span><span class="token punctuation">:</span> <span class="token comment"># 默认连接</span>
  <span class="token key atrule">entitiesdir</span><span class="token punctuation">:</span> <span class="token string">&#39;app/entities&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>创建 <code>app/entities</code> 文件夹</p></li><li><p>创建 <code>app/entities/User.ts</code> 文件</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  Entity<span class="token punctuation">,</span>
  PrimaryGeneratedColumn<span class="token punctuation">,</span>
  Column<span class="token punctuation">,</span>
  OneToMany<span class="token punctuation">,</span>
  JoinColumn<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typeorm&#39;</span>
<span class="token keyword">import</span> Post <span class="token keyword">from</span> <span class="token string">&#39;./Post&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Entity<span class="token punctuation">,</span>
  PrimaryGeneratedColumn<span class="token punctuation">,</span>
  Column<span class="token punctuation">,</span>
  OneToMany<span class="token punctuation">,</span>
  JoinColumn<span class="token punctuation">,</span>
  OneToOne<span class="token punctuation">,</span>
  ManyToMany<span class="token punctuation">,</span>
  JoinTable<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typeorm&#39;</span>
<span class="token keyword">import</span> Post <span class="token keyword">from</span> <span class="token string">&#39;./Post&#39;</span>
<span class="token keyword">import</span> Profile <span class="token keyword">from</span> <span class="token string">&#39;./Profile&#39;</span>
<span class="token keyword">import</span> Course <span class="token keyword">from</span> <span class="token string">&#39;./Course&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">PrimaryGeneratedColumn</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;int&#39;</span><span class="token punctuation">,</span>
    comment<span class="token operator">:</span> <span class="token string">&#39;主键id&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;varchar&#39;</span><span class="token punctuation">,</span>
    length<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    comment<span class="token operator">:</span> <span class="token string">&#39;账号&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  account<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;varchar&#39;</span><span class="token punctuation">,</span>
    length<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    comment<span class="token operator">:</span> <span class="token string">&#39;密码&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  password<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token comment">// 一对一</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">OneToOne</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Profile<span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">JoinColumn</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  profile<span class="token operator">:</span> Profile

  <span class="token comment">// 一对多</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">OneToMany</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Post<span class="token punctuation">,</span> <span class="token punctuation">(</span>post<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> post<span class="token punctuation">.</span>user<span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">JoinColumn</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  posts<span class="token operator">:</span> Post<span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token comment">// 多对多</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">ManyToMany</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Course<span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">JoinTable</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  courses<span class="token operator">:</span> Course<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建 <code>app/entities/Profile.ts</code> 文件</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Entity<span class="token punctuation">,</span> Column<span class="token punctuation">,</span> PrimaryGeneratedColumn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typeorm&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Profile</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">PrimaryGeneratedColumn</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;int&#39;</span><span class="token punctuation">,</span>
    comment<span class="token operator">:</span> <span class="token string">&#39;主键id&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;varchar&#39;</span><span class="token punctuation">,</span>
    length<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    comment<span class="token operator">:</span> <span class="token string">&#39;姓名&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;int&#39;</span><span class="token punctuation">,</span>
    comment<span class="token operator">:</span> <span class="token string">&#39;年龄&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;varchar&#39;</span><span class="token punctuation">,</span>
    length<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    comment<span class="token operator">:</span> <span class="token string">&#39;性别&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  gender<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建 <code>app/entities/Course.ts</code> 文件</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Entity<span class="token punctuation">,</span> PrimaryGeneratedColumn<span class="token punctuation">,</span> Column <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typeorm&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Course</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">PrimaryGeneratedColumn</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;int&#39;</span><span class="token punctuation">,</span>
    comment<span class="token operator">:</span> <span class="token string">&#39;主键id&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;varchar&#39;</span><span class="token punctuation">,</span>
    length<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    comment<span class="token operator">:</span> <span class="token string">&#39;课程名称&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;varchar&#39;</span><span class="token punctuation">,</span>
    length<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    comment<span class="token operator">:</span> <span class="token string">&#39;课程描述&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  description<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建 <code>app/entities/Post.ts</code> 文件</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Entity<span class="token punctuation">,</span> PrimaryGeneratedColumn<span class="token punctuation">,</span> Column<span class="token punctuation">,</span> ManyToOne <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typeorm&#39;</span>
<span class="token keyword">import</span> User <span class="token keyword">from</span> <span class="token string">&#39;./User&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Post</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">PrimaryGeneratedColumn</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;int&#39;</span><span class="token punctuation">,</span>
    comment<span class="token operator">:</span> <span class="token string">&#39;主键id&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;varchar&#39;</span><span class="token punctuation">,</span>
    length<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    comment<span class="token operator">:</span> <span class="token string">&#39;标题&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
    comment<span class="token operator">:</span> <span class="token string">&#39;内容&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token comment">// 关联用户 id</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">ManyToOne</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> User<span class="token punctuation">,</span> <span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> user<span class="token punctuation">.</span>posts<span class="token punctuation">)</span>
  user<span class="token operator">:</span> User
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据库操作" tabindex="-1"><a class="header-anchor" href="#数据库操作" aria-hidden="true">#</a> 数据库操作</h2><ul><li>创建 <code>app/controller/user.ts</code> 文件</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Controller <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;egg&#39;</span>
<span class="token keyword">import</span> User <span class="token keyword">from</span> <span class="token string">&#39;../entities/User&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">HomeController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> ctx <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token comment">// ctx.body = await ctx.repo.User.find({</span>
    <span class="token comment">//   relations: [&#39;posts&#39;],</span>
    <span class="token comment">// })</span>
    <span class="token comment">// TypeORM 关系查询,只查部分字段该怎么写?</span>
    <span class="token comment">// https://cnodejs.org/topic/5c3fe2bba4d44449266b1dce</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>repo<span class="token punctuation">.</span>User<span class="token punctuation">.</span><span class="token function">createQueryBuilder</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string">&#39;user.id&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;user.account&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;profile.name&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;profile.age&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;profile.gender&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;course.name&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;course.description&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;post.title&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;post.content&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">leftJoin</span><span class="token punctuation">(</span><span class="token string">&#39;user.posts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">leftJoin</span><span class="token punctuation">(</span><span class="token string">&#39;user.profile&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;profile&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">leftJoin</span><span class="token punctuation">(</span><span class="token string">&#39;user.courses&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;course&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">getMany</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 新增用户</span>
  <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> ctx <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token comment">// 个人信息</span>
    <span class="token keyword">const</span> profile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Profile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    profile<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span>
    profile<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span>
    profile<span class="token punctuation">.</span>gender <span class="token operator">=</span> <span class="token string">&#39;男&#39;</span>
    <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>repo<span class="token punctuation">.</span>Profile<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>profile<span class="token punctuation">)</span>
    <span class="token comment">// 课程</span>
    <span class="token keyword">const</span> course1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    course1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;语文&#39;</span>
    course1<span class="token punctuation">.</span>description <span class="token operator">=</span> <span class="token string">&#39;语文课程&#39;</span>
    <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>repo<span class="token punctuation">.</span>Course<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>course1<span class="token punctuation">)</span>

    <span class="token keyword">const</span> course2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    course2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;数学&#39;</span>
    course2<span class="token punctuation">.</span>description <span class="token operator">=</span> <span class="token string">&#39;数学课程&#39;</span>
    <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>repo<span class="token punctuation">.</span>Course<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>course2<span class="token punctuation">)</span>
    <span class="token comment">// 用户</span>
    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    user<span class="token punctuation">.</span>account <span class="token operator">=</span> <span class="token string">&#39;zhangsan&#39;</span>
    user<span class="token punctuation">.</span>password <span class="token operator">=</span> <span class="token string">&#39;123456&#39;</span>
    user<span class="token punctuation">.</span>profile <span class="token operator">=</span> profile
    user<span class="token punctuation">.</span>courses <span class="token operator">=</span> <span class="token punctuation">[</span>course1<span class="token punctuation">,</span> course2<span class="token punctuation">]</span>
    <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>repo<span class="token punctuation">.</span>User<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>

    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">&#39;新增成功&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 产找指定用户</span>
  <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> ctx <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>repo<span class="token punctuation">.</span>User<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 删除指定用户</span>
  <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> ctx <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">let</span> userToRemove <span class="token operator">=</span> <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>repo<span class="token punctuation">.</span>User<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
    <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>repo<span class="token punctuation">.</span>User<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>userToRemove<span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">&#39;删除成功&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建 <code>app/router.ts</code> 文件</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Controller <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;egg&#39;</span>
<span class="token keyword">import</span> Post <span class="token keyword">from</span> <span class="token string">&#39;../entities/Post&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">PostController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
  <span class="token comment">// 新增文章</span>
  <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> ctx <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">let</span> post <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Post</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> title<span class="token punctuation">,</span> content<span class="token punctuation">,</span> userId <span class="token punctuation">}</span> <span class="token operator">=</span> ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>body
    post<span class="token punctuation">.</span>title <span class="token operator">=</span> title
    post<span class="token punctuation">.</span>content <span class="token operator">=</span> content
    <span class="token comment">// post.user = userId</span>
    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>repo<span class="token punctuation">.</span>User<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span>
    post<span class="token punctuation">.</span>user <span class="token operator">=</span> user

    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>repo<span class="token punctuation">.</span>Post<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>post<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,24),r={href:"https://typeorm.bootcss.com/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://typeorm.bootcss.com/relations",target:"_blank",rel:"noopener noreferrer"},k={href:"https://typeorm.io/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/hackycy/sf-egg-admin/tree/master",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/apgzs/cool-admin-api",target:"_blank",rel:"noopener noreferrer"},b={href:"https://juejin.cn/post/7142704416695517214#heading-3",target:"_blank",rel:"noopener noreferrer"};function y(g,f){const s=p("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[a("TypeORM 中文文档"),e(s)])]),n("li",null,[n("a",d,[a("TypeORM 中文文档- 关系"),e(s)])]),n("li",null,[n("a",k,[a("TypeORM"),e(s)])]),n("li",null,[n("a",v,[a("sf-egg-admin"),e(s)])]),n("li",null,[n("a",m,[a("cool-admin-api"),e(s)])]),n("li",null,[n("a",b,[a("基于 Nest.js+TypeORM 实战系列 3"),e(s)])])])])}const h=t(l,[["render",y],["__file","index.html.vue"]]);export{h as default};
