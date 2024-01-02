import{_ as t,r as p,o,c,a as n,b as a,d as e,e as i}from"./app.26c798e2.js";const l="/article/images/bff/web0_1.jpeg",u="/article/images/bff/web2.jpeg",r="/article/images/bff/web3.jpeg",k="/article/images/bff/web4.jpeg",d="/article/images/bff/web5.jpeg",v="/article/images/bff/web06.png",m="/article/images/bff/web07.png",b="/article/images/bff/web08.png",y="/article/images/bff/web09.png",g={},f=i('<h2 id="bff-架构演进" tabindex="-1"><a class="header-anchor" href="#bff-架构演进" aria-hidden="true">#</a> BFF 架构演进</h2><h3 id="单体服务" tabindex="-1"><a class="header-anchor" href="#单体服务" aria-hidden="true">#</a> 单体服务</h3><ul><li>单体服务是指一个独立的应用程序，包含了所有的功能和业务逻辑。这种架构方式在小型应用程序中很常见。</li><li>随着应用程序的功能越来越多，代码库也会越来越大，维护起来也会变得更加困难。此外，单体服务的整体复杂度也会增加，这可能导致软件开发周期变长，质量下降，并且系统的扩展性也会受到限制。</li></ul><p><img src="'+l+'" alt="单体服务"></p><h3 id="微服务" tabindex="-1"><a class="header-anchor" href="#微服务" aria-hidden="true">#</a> 微服务</h3><ul><li>为了应对这些问题，许多公司开始使用微服务架构。微服务是指将一个大型应用程序拆分成若干个小型服务，每个服务负责执行特定的任务。这种架构方式可以帮助公司更快地开发和部署新功能，并提高系统的可扩展性和可维护性。</li><li>这种方式会有以下问题： <ul><li>域名开销增加。</li><li>各个端有大量的个性化需求： <ul><li>数据聚合 某些功能可能需要调用多个微服务进行组合。 <ul><li>数据裁剪 后端服务返回的数据可能需要过滤掉一些敏感数据，以保证安全性。</li><li>数据适配 后端返回的数据可能需要针对不同端进行数据结构的适配，后端返回<code>XML</code>，但前端需要<code>JSON</code>。</li><li>数据鉴权 不同的客户端有不同的权限要求。</li></ul></li></ul></li></ul></li></ul><p><img src="'+u+'" alt="微服务"></p><h3 id="bff" tabindex="-1"><a class="header-anchor" href="#bff" aria-hidden="true">#</a> BFF</h3><ul><li><code>BFF</code>是<code>Backend for Frontend</code>的缩写，指的是专门为前端应用设计的后端服务。</li><li>主要用来为各个端提供代理数据聚合、裁剪、适配和鉴权服务，方便各个端接入后端服务。</li><li>BFF 可以把前端和微服务进行解耦，各自可以独立演进。</li></ul><p><img src="'+r+'" alt="BFF"></p><h3 id="网关" tabindex="-1"><a class="header-anchor" href="#网关" aria-hidden="true">#</a> 网关</h3><ul><li><code>API</code> 网关是一种用于在应用程序和 <code>API</code> 之间提供安全访问的中间层。</li><li>API 网关还可以用于监控 API 调用，路由请求，以及在请求和响应之间添加附加功能（例如身份验证，缓存，数据转换，压缩、流量控制、限流熔断、防爬虫等）。</li><li>网关和 BFF 可能合二为一</li></ul><p><img src="'+k+'" alt="网关"></p><h3 id="集群化" tabindex="-1"><a class="header-anchor" href="#集群化" aria-hidden="true">#</a> 集群化</h3><ul><li>单点服务器可能会存在以下几个问题： <ul><li>单点故障：单点服务器只有一台，如果这台服务器出现故障，整个系统都会停止工作，这会导致服务中断。</li><li>计算能力有限：单点服务器的计算能力是有限的，无法应对大规模的计算需求。</li><li>可扩展性差：单点服务器的扩展能力有限，如果想要提升计算能力，就必须改造或者替换现有的服务器。</li></ul></li><li>这些问题可以通过采用服务器集群的方式来解决。服务器集群是指将多台服务器组合在一起，共同完成一项任务。服务器集群可以提高系统的可用性和可扩展性，从而提升系统的整体性能。</li></ul><p><img src="'+d+`" alt="集群化"></p><h2 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建" aria-hidden="true">#</a> 环境搭建</h2><h3 id="微服务-1" tabindex="-1"><a class="header-anchor" href="#微服务-1" aria-hidden="true">#</a> 微服务</h3><ul><li>微服务是一种架构模式，它将单个应用程序划分为小的服务，每个服务都独立运行并且可以使用不同的语言开发。这种架构模式使得应用程序变得更容易开发、维护和扩展。</li><li>微服务架构通常会有许多不同的服务，这些服务可能位于不同的机器上，因此需要使用某种通信协议来进行通信。</li><li>因为<code>RPC</code>协议比<code>HTTP</code>协议具有更低的延迟和更高的性能，所以用的更多。</li></ul><h3 id="rpc" tabindex="-1"><a class="header-anchor" href="#rpc" aria-hidden="true">#</a> RPC</h3><ul><li><code>RPC（Remote Procedure Call）</code> 是远程过程调用的缩写，是一种通信协议，允许程序在不同的计算机上相互调用远程过程，就像调用本地过程一样</li></ul><h3 id="sofa-rpc-node" tabindex="-1"><a class="header-anchor" href="#sofa-rpc-node" aria-hidden="true">#</a> sofa-rpc-node</h3><ul><li><code>sofa-rpc-node</code> 是基于 <code>Node.js</code> 的一个 <code>RPC</code> 框架，支持多种协议。</li></ul><h3 id="protocol-buffers" tabindex="-1"><a class="header-anchor" href="#protocol-buffers" aria-hidden="true">#</a> Protocol Buffers</h3><ul><li><code>Protocol Buffers</code>（简称 protobuf）是 <code>Google</code> 开发的一种数据序列化格式，可以将结构化数据序列化成二进制格式，并能够跨语言使用</li></ul><h3 id="zookeeper" tabindex="-1"><a class="header-anchor" href="#zookeeper" aria-hidden="true">#</a> Zookeeper</h3><ul><li><code>ZooKeeper</code> 是一个分布式协调服务，提供了一些简单的分布式服务，如配置维护、名字服务、组服务等。它可以用于管理分布式系统中的数据。</li></ul><h3 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存" aria-hidden="true">#</a> 缓存</h3><ul><li>一般会使用多级缓存，本地做一层 LRU 缓存，再做一层远程服务器的 Redis 缓存。这些缓存层的优先级通常是依次递减的，即最快的缓存层位于最顶层，最慢的缓存层位于最底层。越上层的缓存缓存时间一般越短。</li></ul><h3 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a> RabbitMQ</h3><ul><li><p><code>RabbitMQ</code> 是一个开源的消息代理，用于在应用程序之间进行消息传递。它实现了高级消息队列协议（<code>AMQP</code>），并且支持多种消息协议。</p><ul><li>消息生产者将消息发送到 <code>RabbitMQ</code> 服务器。</li><li><code>RabbitMQ</code> 服务器将消息存储在队列中。</li><li>消息消费者从队列中获取消息并进行处理。</li><li>当消息消费者处理完消息后 <code>RabbitMQ</code> 服务器将消息删除。</li></ul></li></ul><h3 id="docker-容器安装" tabindex="-1"><a class="header-anchor" href="#docker-容器安装" aria-hidden="true">#</a> docker 容器安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull mysql
<span class="token function">docker</span> pull redis
<span class="token function">docker</span> pull zookeeper
<span class="token function">docker</span> pull rabbitmq:management


<span class="token comment"># mysql 的密码初始化为 123456</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--hostname</span> localhost <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token parameter variable">--name</span> mysql <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 mysql
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--hostname</span> localhost <span class="token parameter variable">--name</span> redis <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 redis
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--hostname</span> localhost <span class="token parameter variable">--name</span> zookeeper <span class="token parameter variable">-p</span> <span class="token number">2181</span>:2181 zookeeper
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> rabbitmq <span class="token parameter variable">-p</span> <span class="token number">5672</span>:5672 <span class="token parameter variable">-p</span> <span class="token number">15672</span>:15672 docker.io/rabbitmq:management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>-d 后台进程运行</li><li><code>hostname</code> 主机名</li><li>name 容器名称</li><li><code>-p port: port</code> 端口映射 本地端口:容器端口</li><li>-e 环境变量</li></ul><p>执行完上面命令后执行 <code>docker ps</code> 看看我们是否所有都启动成功了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在mysql中创建数据库 bff, 并且创建表 user</span>
create table user <span class="token punctuation">(</span>id varchar<span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span> comment <span class="token string">&#39;编号&#39;</span>,username varchar<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> comment <span class="token string">&#39;用户名&#39;</span>,phone varchar<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span> comment <span class="token string">&#39;手机号码&#39;</span><span class="token punctuation">)</span> comment <span class="token string">&#39;用户表&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="项目初始化" tabindex="-1"><a class="header-anchor" href="#项目初始化" aria-hidden="true">#</a> 项目初始化</h3><ul><li>项目目录</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>├── bff                 用于和前端交互的 bff 胶水层
│   ├── index.js
│   ├── middleware
│   │   ├── cache.js
│   │   ├── mq.js
│   │   └── rpc.js
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── store
│   │   └── index.js
│   └── utils
│       └── log.js
├── user                用户相关的微服务函数
│   ├── client.js
│   ├── index.js
│   ├── package.json
│   └── pnpm-lock.yaml
└── write-logger        写入日志的服务
    ├── index.js
    ├── logger.txt
    ├── package.json
    └── pnpm-lock.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户微服务" tabindex="-1"><a class="header-anchor" href="#用户微服务" aria-hidden="true">#</a> 用户微服务</h3><p>在 user 中再新建一个 <code>index.js</code> 文件，写入如下代码，主要是在函数中连接数据库，然后创建 <code>Zookeeper</code> 注册中心，创建微服务服务器，将其中的函数注册到 <code>Zookeeper</code> 中，用于给外部进行调用，我们这里主要注册两个函数。</p><ul><li>创建有用户的函数</li><li>获取用户的函数</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// user package.json</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nodemon index.js&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;koa-logger&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.2.1&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;koa-router&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^12.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;mysql2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.3.3&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;sofa-rpc-node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.8.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^9.0.0&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建 rpc 服务器</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span> RpcServer <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 创建注册中心，维护服务的注册信息，帮助节点和客户端找到对方</span>
  <span class="token literal-property property">registry</span><span class="token operator">:</span> <span class="token punctuation">{</span> ZookeeperRegistry <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sofa-rpc-node&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> mysql <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mysql2/promise&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">v4</span><span class="token operator">:</span> uuidv4 <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;uuid&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> logger <span class="token operator">=</span> console

<span class="token keyword">let</span> connection

<span class="token comment">// 创建一个注册中心，用于注册微服务</span>
<span class="token keyword">const</span> registry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZookeeperRegistry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 记录日志</span>
  logger<span class="token punctuation">,</span>
  <span class="token comment">// zookeeper 的地址</span>
  <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;localhost:2181&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 创建 rpc 服务器的实例</span>
<span class="token comment">// 客户端连接 rpc 服务器的时候可以通过 zookeeper， 也可以直连 rpc 服务器</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RpcServer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  logger<span class="token punctuation">,</span>
  registry<span class="token punctuation">,</span>
  <span class="token comment">// 注意：这里端口要检查是否被占用</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  connection <span class="token operator">=</span> <span class="token keyword">await</span> mysql<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">&#39;bff&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 添加服务接口</span>
  server<span class="token punctuation">.</span><span class="token function">addService</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// 约定格式为域名反转+领域模型的名称</span>
      <span class="token literal-property property">interfaceName</span><span class="token operator">:</span> <span class="token string">&#39;com.xmllein.user&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">async</span> <span class="token function">createUser</span><span class="token punctuation">(</span><span class="token parameter">username</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> sql <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">INSERT INTO user(id,username,phone) VALUES(&#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">uuidv4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;,&#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>username<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;,185);</span><span class="token template-punctuation string">\`</span></span>
        <span class="token keyword">const</span> rows <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;创建成功&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> rows<span class="token punctuation">,</span>
          <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token keyword">async</span> <span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token parameter">username</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> sql <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">SELECT id,username,phone from user WHERE username=&#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>username<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39; limit 1</span><span class="token template-punctuation string">\`</span></span>
        <span class="token keyword">const</span> <span class="token punctuation">[</span>rows<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span>

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;查询成功&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> rows<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>

  <span class="token comment">// 启动 rpc 服务</span>
  <span class="token keyword">await</span> server<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 把启动好的 rpc 服务器注册到 zookeeper 中</span>
  <span class="token keyword">await</span> server<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;微服务启动&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>client.js</code> 用于连接 rpc 服务器，然后调用其中的函数</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">client</span><span class="token operator">:</span> <span class="token punctuation">{</span> RpcClient <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">registry</span><span class="token operator">:</span> <span class="token punctuation">{</span> ZookeeperRegistry <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sofa-rpc-node&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 设置日志记录器</span>
<span class="token keyword">const</span> logger <span class="token operator">=</span> console
<span class="token comment">// 创建 Zookeeper 注册中心</span>
<span class="token keyword">const</span> registry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZookeeperRegistry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  logger<span class="token punctuation">,</span>
  <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;127.0.0.1:2181&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建 RPC 客户端</span>
  <span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RpcClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span> logger<span class="token punctuation">,</span> registry <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 创建 RPC 服务消费者</span>
  <span class="token keyword">const</span> userConsumer <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">createConsumer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 指定服务接口名称</span>
    <span class="token literal-property property">interfaceName</span><span class="token operator">:</span> <span class="token string">&#39;com.xmllein.user&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 等待服务就绪</span>
  <span class="token keyword">await</span> userConsumer<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 调用服务方法</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> userConsumer<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token string">&#39;createUser&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">responseTimeout</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 输出结果</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
  process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+`" alt="user微服务"></p><h3 id="日志微服务" tabindex="-1"><a class="header-anchor" href="#日志微服务" aria-hidden="true">#</a> 日志微服务</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// write-logger package.json</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;write-logger&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nodemon index.js&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;amqplib&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.10.3&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;fs-extra&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^11.1.0&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装好依赖后，<code>write-logger</code> 目录下创建一个 <code>index.js</code> 文件，写入如下代码。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 用于连接 RabbitMQ 服务器</span>
<span class="token keyword">const</span> amqp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;amqplib&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs-extra&#39;</span><span class="token punctuation">)</span>

<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 连接 MQ 服务器</span>
  <span class="token keyword">const</span> mqClient <span class="token operator">=</span> <span class="token keyword">await</span> amqp<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&#39;amqp://localhost&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// 创建一个通道</span>
  <span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token keyword">await</span> mqClient<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 创建一个名称为 logger 的队列，如果已经存在了，不会重复创建</span>
  <span class="token keyword">await</span> logger<span class="token punctuation">.</span><span class="token function">assertQueue</span><span class="token punctuation">(</span><span class="token string">&#39;logger&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// 消费队列里的消息</span>
  logger<span class="token punctuation">.</span><span class="token function">consume</span><span class="token punctuation">(</span><span class="token string">&#39;logger&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 往本地写入日志文件，到时候 bff 端会以 Buffer 二进制的形式发送数据过来</span>
    <span class="token keyword">await</span> fs<span class="token punctuation">.</span><span class="token function">appendFile</span><span class="token punctuation">(</span><span class="token string">&#39;./logger.txt&#39;</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>content<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bff-端" tabindex="-1"><a class="header-anchor" href="#bff-端" aria-hidden="true">#</a> bff 端</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bff&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nodemon index.js&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;amqplib&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.10.3&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;fs-extra&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^11.1.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;koa&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.14.1&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;koa-logger&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.2.1&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;koa-router&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^12.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;sofa-rpc-node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.8.0&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>rpc 中间件</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bff/middleware/rpc.js</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建 rpc 服务器</span>
  <span class="token literal-property property">client</span><span class="token operator">:</span> <span class="token punctuation">{</span> RpcClient <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 创建注册中心，维护服务的注册信息，帮助节点和客户端找到对方</span>
  <span class="token literal-property property">registry</span><span class="token operator">:</span> <span class="token punctuation">{</span> ZookeeperRegistry <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sofa-rpc-node&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> logger <span class="token operator">=</span> console

<span class="token keyword">const</span> <span class="token function-variable function">rpcMiddleware</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建一个注册中心，用于注册微服务</span>
    <span class="token keyword">const</span> registry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZookeeperRegistry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 记录日志</span>
      logger<span class="token punctuation">,</span>
      <span class="token comment">// zookeeper 的地址</span>
      <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;localhost:2181&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RpcClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      logger<span class="token punctuation">,</span>
      registry<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> interfaceNames <span class="token operator">=</span> options<span class="token punctuation">.</span>interfaceNames <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> rpcConsumers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> interfaceNames<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> interfaceName <span class="token operator">=</span> interfaceNames<span class="token punctuation">[</span>i<span class="token punctuation">]</span>

      <span class="token comment">// 创建 RPC 服务器的消费者,通过消费者调用 rpc 接口</span>
      <span class="token keyword">const</span> consumer <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">createConsumer</span><span class="token punctuation">(</span><span class="token punctuation">{</span> interfaceName <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token comment">// 等待服务就绪</span>
      <span class="token keyword">await</span> consumer<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

      rpcConsumers<span class="token punctuation">[</span>interfaceName<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> consumer
    <span class="token punctuation">}</span>

    ctx<span class="token punctuation">.</span>rpcConsumers <span class="token operator">=</span> rpcConsumers
    <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> rpcMiddleware
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>缓存中间件</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bff/store/index.js</span>
<span class="token comment">/*
CacheStore：管理 Store 容器的类，优先使用 LRU 算法调用本地内存缓存，命中不到再去调用 Redis 缓存
MemoryStore：本地内存 Store
RedisStore：远程 Redis 服务器 Store
*/</span>
<span class="token keyword">const</span> LRUCache <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;lru-cache&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Redis <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;ioredis&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 一般越上层的缓存过期时间就越短</span>
<span class="token keyword">class</span> <span class="token class-name">CacheStore</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>stores <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">store</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>stores<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> store <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stores<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> store <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stores<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MemoryStore</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LRUCache</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
      <span class="token comment">// 一分钟过期</span>
      <span class="token literal-property property">ttl</span><span class="token operator">:</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">RedisStore</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>
    options <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token string">&#39;6379&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Redis</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token keyword">return</span> val <span class="token operator">?</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  CacheStore<span class="token punctuation">,</span>
  MemoryStore<span class="token punctuation">,</span>
  RedisStore<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>bff/middleware/cache.js</code> 中写入缓存中间件的代码。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> RedisStore<span class="token punctuation">,</span> CacheStore<span class="token punctuation">,</span> MemoryStore <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../store&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">cacheMiddleware</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建一个缓存实例</span>
    <span class="token keyword">const</span> cacheStore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CacheStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 添加一些缓存层</span>
    cacheStore<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MemoryStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    cacheStore<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RedisStore</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">)</span>

    ctx<span class="token punctuation">.</span>cache <span class="token operator">=</span> cacheStore
    <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> cacheMiddleware
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>RabbitMQ 中间件</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//bff/middleware/mq.js 中写入如下代码，用于连接 RabbitMQ 消息队列服务器</span>
<span class="token comment">// RabbitMQ</span>
<span class="token keyword">const</span> amqp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;amqplib&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> MQMiddleware <span class="token operator">=</span> <span class="token punctuation">(</span>
  options <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;amqp://localhost&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 连接 MQ 服务器</span>
    <span class="token keyword">const</span> mqClient <span class="token operator">=</span> <span class="token keyword">await</span> amqp<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
    <span class="token comment">// 创建一个通道</span>
    <span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token keyword">await</span> mqClient<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 创建一个名称为 logger 的队列，如果已经存在了，不会重复创建</span>
    <span class="token keyword">await</span> logger<span class="token punctuation">.</span><span class="token function">assertQueue</span><span class="token punctuation">(</span><span class="token string">&#39;logger&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// 将其挂载到 ctx.channels 中，其它地方就能进行调用了</span>
    ctx<span class="token punctuation">.</span>channels <span class="token operator">=</span> <span class="token punctuation">{</span>
      logger<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> MQMiddleware
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>log 日志工具</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在 bff/utils/log 路径下，封装日志记录函数用于发送消息到 RabbitMQ 消息队列供其它服务消费来写入日志</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function-variable function">log</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 把用户信息写入文件进行持久化，通过 Buffer 二进制发送</span>
  ctx<span class="token punctuation">.</span>channels<span class="token punctuation">.</span>logger<span class="token punctuation">.</span><span class="token function">sendToQueue</span><span class="token punctuation">(</span>
    <span class="token string">&#39;logger&#39;</span><span class="token punctuation">,</span>
    Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>
      <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> ctx<span class="token punctuation">.</span>method<span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> ctx<span class="token punctuation">.</span>path<span class="token punctuation">,</span>
        <span class="token operator">...</span>data<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>bff/index.js</code> 中写入如下代码，启动 BFF 服务</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-router&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-logger&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> cacheMiddleware <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./middleware/cache&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> MQMiddleware <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./middleware/mq&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> rpcMiddleware <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./middleware/rpc&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> log <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./utils/log&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token function">rpcMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">interfaceNames</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;com.xmllein.user&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cacheMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">MQMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">.</span><span class="token function">routes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">.</span><span class="token function">allowedMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/getUserInfo&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> username <span class="token operator">=</span> ctx<span class="token punctuation">.</span>query<span class="token punctuation">.</span>username

  <span class="token keyword">const</span> cacheKey <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ctx<span class="token punctuation">.</span>method<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ctx<span class="token punctuation">.</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>username<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token keyword">let</span> cacheData <span class="token operator">=</span> <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>cacheKey<span class="token punctuation">)</span>

  <span class="token comment">// 把用户信息写入文件进行持久化，通过 Buffer 二进制发送</span>
  <span class="token function">log</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    username<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>cacheData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> cacheData
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rpcConsumers</span><span class="token operator">:</span> <span class="token punctuation">{</span> user <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> ctx

  <span class="token keyword">const</span> userInfo <span class="token operator">=</span> <span class="token keyword">await</span> user<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token string">&#39;getUserInfo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>username<span class="token punctuation">]</span><span class="token punctuation">)</span>

  cacheData <span class="token operator">=</span> <span class="token punctuation">{</span>
    userInfo<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>cacheKey<span class="token punctuation">,</span> cacheData<span class="token punctuation">)</span>

  ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> cacheData
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 插入一条 user 数据</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/createUser&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> username <span class="token operator">=</span> ctx<span class="token punctuation">.</span>query<span class="token punctuation">.</span>username
  <span class="token function">log</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    username<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rpcConsumers</span><span class="token operator">:</span> <span class="token punctuation">{</span> user <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> ctx
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> user<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token string">&#39;createUser&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>username<span class="token punctuation">]</span><span class="token punctuation">)</span>

  ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> res
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;启动成功&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们把上面编写的三个服务通过命令行先跑起来，在各个目录下运行 <code>npm run dev</code> 即可</p><p>然后使用 <code>rest-client</code> 插件进行测试,<code>postmane.http</code> 文件如下</p><div class="language-HTTP line-numbers-mode" data-ext="HTTP"><pre class="language-HTTP"><code>@BASE_URL = http://127.0.0.1:3000

### 添加用户
GET {{BASE_URL}}/createUser?username=test1 HTTP/1.1

### 获取用户信息
GET {{BASE_URL}}/getUserInfo?username=test1 HTTP/1.1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+'" alt="rabbitmq"><img src="'+b+'" alt="mysql"><img src="'+y+'" alt="redis"></p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',70),h={href:"http://www.zhufengpeixun.com/strong/html/160.bff.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://juejin.cn/post/7222079859710869541",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.bilibili.com/video/BV1uM411h7yv/?spm_id_from=333.337.search-card.all.click&vd_source=c5abf1ba032ca00c06ebba96e3ff445e",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.bilibili.com/video/BV15M411F7v6/?spm_id_from=333.788.recommend_more_video.-1&vd_source=c5abf1ba032ca00c06ebba96e3ff445e",target:"_blank",rel:"noopener noreferrer"},j={href:"https://blog.csdn.net/m0_54853503/article/details/124295133",target:"_blank",rel:"noopener noreferrer"};function _(R,S){const s=p("ExternalLinkIcon");return o(),c("div",null,[f,n("ul",null,[n("li",null,[n("p",null,[n("a",h,[a("珠峰架构师成长计划-bff"),e(s)])])]),n("li",null,[n("p",null,[n("a",w,[a("Node.js BFF 从零开始实战"),e(s)])])]),n("li",null,[n("p",null,[n("a",q,[a("珠峰 BFF-1"),e(s)])])]),n("li",null,[n("p",null,[n("a",x,[a("珠峰 BFF-2"),e(s)])])]),n("li",null,[n("p",null,[n("a",j,[a("Mac 上怎么用 docker 安装 rabbitmq"),e(s)])])])])])}const M=t(g,[["render",_],["__file","index.html.vue"]]);export{M as default};
