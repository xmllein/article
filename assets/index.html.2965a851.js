import{_ as e,r as p,o,c,a as n,b as a,d as t,e as i}from"./app.26c798e2.js";const l={},u=i(`<h2 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建" aria-hidden="true">#</a> 环境搭建</h2><h3 id="安装-nestjs" tabindex="-1"><a class="header-anchor" href="#安装-nestjs" aria-hidden="true">#</a> 安装 nestjs</h3><ul><li>建议用户使用 <code>yarn</code> 或者 <code>cnpm</code> 安装依赖，因为 <code>npm</code> 安装依赖的时候会有很多警告，但是不影响使用。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> @nestjs/cli
<span class="token comment"># 创建项目</span>
nest new nestjs-demo

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>目录结构</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nestjs-demo
├── nest-cli.json
├── package.json
├── README.md
├── src
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── <span class="token builtin class-name">test</span>
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
└── tsconfig.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>核心文件</p><!-- 表格 --><table><thead><tr><th style="text-align:center;">文件名</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">app.controller.ts</td><td style="text-align:center;">单个路由的基本控制器器</td></tr><tr><td style="text-align:center;">app.controller.spec.ts</td><td style="text-align:center;">针对控制器的单元测试</td></tr><tr><td style="text-align:center;">app.module.ts</td><td style="text-align:center;">应用程序的根模块</td></tr><tr><td style="text-align:center;">app.service.ts</td><td style="text-align:center;">具有单一方法的基本服务</td></tr><tr><td style="text-align:center;">main.ts</td><td style="text-align:center;">应用程序的入口文件，它使用核心函数 NestFactory 来创建 Nest 应用程序的实例</td></tr></tbody></table></li><li><p>启动项目</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run start
<span class="token comment"># 或者</span>
<span class="token function">yarn</span> start


<span class="token comment"># 监控文件变化</span>
<span class="token function">npm</span> run start:dev
<span class="token comment"># 或者</span>
<span class="token function">yarn</span> start:dev

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>访问 <code>http://localhost:3000/</code>，可以看到 <code>Hello World!</code></li></ul><p><code>main.ts</code> 中只有一行代码，<code>app.module.ts</code> 中有一行代码，<code>app.controller.ts</code> 中有一行代码，<code>app.service.ts</code> 中有一行代码，这四个文件是最核心的文件，其他的文件都是一些配置文件。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Module <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AppController <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./app.controller&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AppService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./app.service&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Module</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  imports<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  controllers<span class="token operator">:</span> <span class="token punctuation">[</span>AppController<span class="token punctuation">]</span><span class="token punctuation">,</span>
  providers<span class="token operator">:</span> <span class="token punctuation">[</span>AppService<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.module</code>文件需要使用<code>@Module</code>装饰器来装饰，<code>@Module</code>装饰器接收一个对象，对象中有三个属性，<code>imports</code>、<code>controllers</code>、<code>providers</code>，<code>imports</code>是导入的模块，<code>controllers</code>是控制器，<code>providers</code>是服务。</p><ul><li><code>providers</code>: 服务，用来处理业务逻辑，比如数据库操作、http 请求等, 服务可以注入到控制器中使用。各个模块可以共享服务，也可以在模块中创建私有服务。</li><li><code>controllers</code>: 控制器，用来处理路由，接收请求，返回响应，控制器可以注入服务。</li><li><code>imports</code>: 导入的模块，可以导入其他模块的服务，也可以导入第三方模块。</li><li><code>exports</code>: 导出的模块，可以导出服务，也可以导出第三方模块。</li></ul><h2 id="路由装饰器" tabindex="-1"><a class="header-anchor" href="#路由装饰器" aria-hidden="true">#</a> 路由装饰器</h2><h3 id="controller" tabindex="-1"><a class="header-anchor" href="#controller" aria-hidden="true">#</a> @Controller</h3><ul><li><code>@Controller</code> 装饰器用来创建路由控制器，接收一个字符串参数，用来指定路由的前缀，如果不传参数，则默认为根路由。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Controller <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span>
<span class="token comment">// 访问 http://localhost:3000/user</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="http-方法处理装饰器" tabindex="-1"><a class="header-anchor" href="#http-方法处理装饰器" aria-hidden="true">#</a> HTTP 方法处理装饰器</h3><ul><li><code>@Get</code> 装饰器用来创建 <code>GET</code> 请求的路由，接收一个字符串参数，用来指定路由的路径。</li><li><code>@Post</code> 装饰器用来创建 <code>POST</code> 请求的路由，接收一个字符串参数，用来指定路由的路径。</li><li><code>@Put</code> 装饰器用来创建 <code>PUT</code> 请求的路由，接收一个字符串参数，用来指定路由的路径。</li><li><code>@Patch</code> 装饰器用来创建 <code>PATCH</code> 请求的路由，接收一个字符串参数，用来指定路由的路径。</li><li><code>@Delete</code> 装饰器用来创建 <code>DELETE</code> 请求的路由，接收一个字符串参数，用来指定路由的路径。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Controller<span class="token punctuation">,</span> Get <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
  <span class="token comment">// 访问 http://localhost:3000/user</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;user index&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 访问 http://localhost:3000/user/list</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">)</span>
  <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;user list&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 访问 http://localhost:3000/user/detail</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">&#39;detail&#39;</span><span class="token punctuation">)</span>
  <span class="token function">detail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;user detail&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 访问 http://localhost:3000/user/add</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">)</span>
  <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;user add&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 访问 http://localhost:3000/user/update</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Put</span></span><span class="token punctuation">(</span><span class="token string">&#39;update&#39;</span><span class="token punctuation">)</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;user update&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 访问 http://localhost:3000/user/delete</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Delete</span></span><span class="token punctuation">(</span><span class="token string">&#39;delete&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;user delete&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 动态路由获取参数</span>
  <span class="token comment">// 访问 http://localhost:3000/user/1</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">&#39;:id&#39;</span><span class="token punctuation">)</span>
  <span class="token function">detail</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Param</span></span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">)</span> id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">user detail </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局路由前缀" tabindex="-1"><a class="header-anchor" href="#全局路由前缀" aria-hidden="true">#</a> 全局路由前缀</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NestFactory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/core&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AppModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./app.module&#39;</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">await</span> NestFactory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>AppModule<span class="token punctuation">)</span>
  <span class="token comment">// 全局路由前缀, 访问 http://localhost:3000/api/user</span>
  app<span class="token punctuation">.</span><span class="token function">setGlobalPrefix</span><span class="token punctuation">(</span><span class="token string">&#39;api&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由参数" tabindex="-1"><a class="header-anchor" href="#路由参数" aria-hidden="true">#</a> 路由参数</h3><ul><li><code>@Param</code> 装饰器用来获取路由参数，接收一个字符串参数，用来指定路由参数的名称。</li><li><code>@Query</code> 装饰器用来获取查询字符串参数，接收一个字符串参数，用来指定查询字符串参数的名称。</li><li><code>@Body</code> 装饰器用来获取请求体参数，接收一个字符串参数，用来指定请求体参数的名称。</li><li><code>@Headers</code> 装饰器用来获取请求头参数，接收一个字符串参数，用来指定请求头参数的名称。</li><li><code>@Req</code> 装饰器用来获取请求对象，接收一个字符串参数，用来指定请求对象的名称。</li><li><code>@Res</code> 装饰器用来获取响应对象，接收一个字符串参数，用来指定响应对象的名称。</li><li><code>@Next</code> 装饰器用来获取下一个中间件，接收一个字符串参数，用来指定下一个中间件的名称。</li><li><code>@Session</code> 装饰器用来获取 session 对象，接收一个字符串参数，用来指定 session 对象的名称。</li><li><code>@UploadedFile</code> 装饰器用来获取上传的文件，接收一个字符串参数，用来指定上传文件的名称。</li><li><code>@UploadedFiles</code> 装饰器用来获取上传的文件数组，接收一个字符串参数，用来指定上传文件的名称。</li><li><code>@Param</code>、<code>@Query</code>、<code>@Body</code>、<code>@Headers</code>、<code>@Req</code>、<code>@Res</code>、<code>@Next</code>、<code>@Session</code>、<code>@UploadedFile</code>、<code>@UploadedFiles</code> 装饰器都接收一个字符串参数，用来指定参数的名称，如果不传参数，则默认使用参数的名称。</li></ul><h3 id="命令行工具" tabindex="-1"><a class="header-anchor" href="#命令行工具" aria-hidden="true">#</a> 命令行工具</h3><ul><li><code>nest</code> 命令行工具用来创建控制器、服务、模块等，使用 <code>nest --help</code> 可以查看帮助信息。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
nest g <span class="token operator">&lt;</span>schematic<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>
nest g <span class="token punctuation">[</span>文件类型<span class="token punctuation">]</span> <span class="token punctuation">[</span>文件名称<span class="token punctuation">]</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span>

<span class="token comment"># 选项： --dry-run 仅显示将要生成的文件，而不实际生成文件</span>
<span class="token comment"># 选项： --no-spec 不生成 .spec 文件</span>
<span class="token comment"># 选项： --flat 不生成文件夹</span>
<span class="token comment"># 选项： 目录 生成文件的目录</span>

<span class="token comment"># 创建控制器</span>
nest g controller user
<span class="token comment"># 简写</span>
nest g co user

<span class="token comment"># 创建服务</span>
nest g <span class="token function">service</span> user
<span class="token comment"># 简写</span>
nest g s user

<span class="token comment"># 创建模块</span>
nest g module user
<span class="token comment"># 简写</span>
nest g mo user

<span class="token comment"># 创建中间件</span>
nest g middleware user
<span class="token comment"># 简写</span>
nest g mi user

<span class="token comment"># 创建管道</span>
nest g pipe user
<span class="token comment"># 简写</span>
nest g p user

<span class="token comment"># 创建过滤器</span>
nest g filter user
<span class="token comment"># 简写</span>
nest g f user

<span class="token comment"># 创建网关</span>
nest g gateway user
<span class="token comment"># 简写</span>
nest g ga user

<span class="token comment"># 创建拦截器</span>
nest g interceptor user
<span class="token comment"># 简写</span>
nest g <span class="token keyword">in</span> user

<span class="token comment"># 创建装饰器</span>
nest g decorator user
<span class="token comment"># 简写</span>
nest g d user

<span class="token comment"># 创建守卫</span>
nest g guard user
<span class="token comment"># 简写</span>
nest g gu user

<span class="token comment"># 创建解析器</span>
nest g resolver user
<span class="token comment"># 简写</span>
nest g r user

<span class="token comment"># 创建接口</span>
nest g interface user
<span class="token comment"># 简写</span>
nest g itf user

<span class="token comment"># 创建资源</span>
nest g resource user
<span class="token comment"># 简写</span>
nest g res user

<span class="token comment"># 创建配置</span>
nest g configuration user
<span class="token comment"># 简写</span>
nest g config user

<span class="token comment"># 创建类</span>
nest g class user
<span class="token comment"># 简写</span>
nest g cl user

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="连接-mysql" tabindex="-1"><a class="header-anchor" href="#连接-mysql" aria-hidden="true">#</a> 连接 Mysql</h2><h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">--save</span> @nestjs/typeorm typeorm mysql2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置数据库" tabindex="-1"><a class="header-anchor" href="#配置数据库" aria-hidden="true">#</a> 配置数据库</h3><ul><li><p>在 <code>app.module.ts</code> 中导入 <code>TypeOrmModule.forRoot()</code> 方法，该方法接收一个对象，对象中有三个属性，<code>type</code>、<code>host</code>、<code>port</code>、<code>username</code>、<code>password</code>、<code>database</code>、<code>entities</code>、<code>synchronize</code>、<code>logging</code>、<code>logger</code>、<code>autoLoadEntities</code>、<code>keepConnectionAlive</code>、<code>extra</code>。</p></li><li><p>首先在项目根目录下创建两个文件<code>.env</code>和<code>.env.prod</code>，分别存的是开发环境和线上环境不同的环境变量：</p></li></ul><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>// 数据库地址
<span class="token key attr-name">DB_HOST</span><span class="token punctuation">=</span><span class="token value attr-value">localhost</span>
// 数据库端口
<span class="token key attr-name">DB_PORT</span><span class="token punctuation">=</span><span class="token value attr-value">3306</span>
// 数据库登录名
<span class="token key attr-name">DB_USER</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
// 数据库登录密码
<span class="token key attr-name">DB_PASSWD</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
// 数据库名字
<span class="token key attr-name">DB_DATABASE</span><span class="token punctuation">=</span><span class="token value attr-value">blog</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.env.prod</code>中的是上线要用的数据库信息，如果你的项目要上传到线上管理，为了安全性考虑，建议这个文件添加到<code>.gitignore</code>中。</p><p>接着在根目录下创建一个文件夹<code>config</code>(与<code>src</code>同级)，然后再创建一个<code>env.ts</code>用于根据不同环境读取相应的配置文件。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fs <span class="token keyword">from</span> <span class="token string">&#39;fs&#39;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>
<span class="token keyword">const</span> isProd <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span>

<span class="token keyword">function</span> <span class="token function">parseEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> localEnv <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;.env&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> prodEnv <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;.env.prod&#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>localEnv<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>prodEnv<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;缺少环境配置文件&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> filePath <span class="token operator">=</span> isProd <span class="token operator">&amp;&amp;</span> fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>prodEnv<span class="token punctuation">)</span> <span class="token operator">?</span> prodEnv <span class="token operator">:</span> localEnv
  <span class="token keyword">return</span> <span class="token punctuation">{</span> path<span class="token operator">:</span> filePath <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">parseEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>app.module.ts</code>中连接数据库</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> TypeOrmModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/typeorm&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigService<span class="token punctuation">,</span> ConfigModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/config&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> envConfig <span class="token keyword">from</span> <span class="token string">&#39;../config/env&#39;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Module</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  imports<span class="token operator">:</span> <span class="token punctuation">[</span>
    ConfigModule<span class="token punctuation">.</span><span class="token function">forRoot</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    isGlobal<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 设置为全局</span>
    envFilePath<span class="token operator">:</span> <span class="token punctuation">[</span>envConfig<span class="token punctuation">.</span>path<span class="token punctuation">]</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    TypeOrmModule<span class="token punctuation">.</span><span class="token function">forRootAsync</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      imports<span class="token operator">:</span> <span class="token punctuation">[</span>ConfigModule<span class="token punctuation">]</span><span class="token punctuation">,</span>
      inject<span class="token operator">:</span> <span class="token punctuation">[</span>ConfigService<span class="token punctuation">]</span><span class="token punctuation">,</span>
      autoLoadEntities<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 自动加载实体</span>
      <span class="token function-variable function">useFactory</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>configService<span class="token operator">:</span> ConfigService<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;mysql&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 数据库类型</span>
        entities<span class="token operator">:</span> <span class="token punctuation">[</span>
          __dirname <span class="token operator">+</span> <span class="token string">&#39;/**/*.entity{.ts,.js}&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">// 数据表实体</span>
        host<span class="token operator">:</span> configService<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;DB_HOST&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 主机，默认为localhost</span>
        port<span class="token operator">:</span> configService<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;DB_PORT&#39;</span><span class="token punctuation">,</span> <span class="token number">3306</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 端口号</span>
        username<span class="token operator">:</span> configService<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;DB_USER&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>   <span class="token comment">// 用户名</span>
        password<span class="token operator">:</span> configService<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;DB_PASSWORD&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 密码</span>
        database<span class="token operator">:</span> configService<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;DB_DATABASE&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;blog&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//数据库名</span>
        timezone<span class="token operator">:</span> <span class="token string">&#39;+08:00&#39;</span><span class="token punctuation">,</span> <span class="token comment">//服务器上配置的时区</span>
        synchronize<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//根据实体自动创建数据库表， 生产环境建议关闭</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    PostsModule<span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>另外一种方法使用 <code>ormconfig.json</code> 方式</li></ul><p>在根目录下创建一个<code>ormconfig.json</code>文件(与<code>src</code>同级), 而不是将配置对象传递给<code>forRoot()</code>的方式。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Module <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TypeOrmModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/typeorm&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Module</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  imports<span class="token operator">:</span> <span class="token punctuation">[</span>TypeOrmModule<span class="token punctuation">.</span><span class="token function">forRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建实体" tabindex="-1"><a class="header-anchor" href="#创建实体" aria-hidden="true">#</a> 创建实体</h3><ul><li>创建实体文件 <code>src/entity/posts.entity.ts</code></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//src/entity/posts.entity.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Column<span class="token punctuation">,</span> Entity<span class="token punctuation">,</span> PrimaryGeneratedColumn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typeorm&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token string">&#39;posts&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PostsEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">PrimaryGeneratedColumn</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 标记为主列，值自动生成</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> length<span class="token operator">:</span> <span class="token number">50</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> length<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  author<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">)</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  thumb_url<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token string">&#39;tinyint&#39;</span><span class="token punctuation">)</span>
  type<span class="token operator">:</span> <span class="token builtin">number</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;timestamp&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;CURRENT_TIMESTAMP&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  create_time<span class="token operator">:</span> Date

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;timestamp&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;CURRENT_TIMESTAMP&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  update_time<span class="token operator">:</span> Date
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>posts.service.ts</code>中使用实体</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> HttpException<span class="token punctuation">,</span> Injectable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> InjectRepository <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/typeorm&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getRepository<span class="token punctuation">,</span> Repository <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typeorm&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> PostsEntity <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./posts.entity&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PostsRo</span> <span class="token punctuation">{</span>
  list<span class="token operator">:</span> PostsEntity<span class="token punctuation">[</span><span class="token punctuation">]</span>
  count<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Injectable</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PostsService</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">InjectRepository</span></span><span class="token punctuation">(</span>PostsEntity<span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> postsRepository<span class="token operator">:</span> Repository<span class="token operator">&lt;</span>PostsEntity<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// 创建文章</span>
  <span class="token keyword">async</span> <span class="token function">create</span><span class="token punctuation">(</span>post<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>PostsEntity<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>PostsEntity<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> title <span class="token punctuation">}</span> <span class="token operator">=</span> post
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>title<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">HttpException</span><span class="token punctuation">(</span><span class="token string">&#39;缺少文章标题&#39;</span><span class="token punctuation">,</span> <span class="token number">401</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> doc <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>postsRepository<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span> where<span class="token operator">:</span> <span class="token punctuation">{</span> title <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>doc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">HttpException</span><span class="token punctuation">(</span><span class="token string">&#39;文章已存在&#39;</span><span class="token punctuation">,</span> <span class="token number">401</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>postsRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>post<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 获取文章列表</span>
  <span class="token keyword">async</span> <span class="token function">findAll</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>PostsRo<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> qb <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getRepository</span><span class="token punctuation">(</span>PostsEntity<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createQueryBuilder</span><span class="token punctuation">(</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">)</span>
    qb<span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string">&#39;1 = 1&#39;</span><span class="token punctuation">)</span>
    qb<span class="token punctuation">.</span><span class="token function">orderBy</span><span class="token punctuation">(</span><span class="token string">&#39;post.create_time&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;DESC&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token keyword">await</span> qb<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> pageNum <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> pageSize <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token operator">...</span>params <span class="token punctuation">}</span> <span class="token operator">=</span> query
    qb<span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span>pageSize<span class="token punctuation">)</span>
    qb<span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span>pageSize <span class="token operator">*</span> <span class="token punctuation">(</span>pageNum <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> qb<span class="token punctuation">.</span><span class="token function">getMany</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> list<span class="token operator">:</span> posts<span class="token punctuation">,</span> count<span class="token operator">:</span> count <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 获取指定文章</span>
  <span class="token keyword">async</span> <span class="token function">findById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>PostsEntity<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>postsRepository<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 更新文章</span>
  <span class="token keyword">async</span> <span class="token function">updateById</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> post<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>PostsEntity<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> existPost <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>postsRepository<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>existPost<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">HttpException</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">id为</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">的文章不存在</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token number">401</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> updatePost <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>postsRepository<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span>existPost<span class="token punctuation">,</span> post<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>postsRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>updatePost<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 刪除文章</span>
  <span class="token keyword">async</span> <span class="token function">remove</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> existPost <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>postsRepository<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>existPost<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">HttpException</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">id为</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">的文章不存在</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token number">401</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>postsRepository<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>existPost<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>posts.controller.ts</code>中使用实体</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> PostsService<span class="token punctuation">,</span> PostsRo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./posts.service&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Body<span class="token punctuation">,</span>
  Controller<span class="token punctuation">,</span>
  Delete<span class="token punctuation">,</span>
  Get<span class="token punctuation">,</span>
  Param<span class="token punctuation">,</span>
  Post<span class="token punctuation">,</span>
  Put<span class="token punctuation">,</span>
  Query<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PostsController</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> postsService<span class="token operator">:</span> PostsService<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">/**
   * 创建文章
   * @param post
   */</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Body</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> post<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>postsService<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>post<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * 获取所有文章
   */</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Query</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> query<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>PostsRo<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>postsService<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * 获取指定文章
   * @param id
   */</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">&#39;:id&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Param</span></span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">)</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>postsService<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * 更新文章
   * @param id
   * @param post
   */</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Put</span></span><span class="token punctuation">(</span><span class="token string">&#39;:id&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Param</span></span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">)</span> id<span class="token punctuation">,</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">Body</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> post<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>postsService<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> post<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * 删除
   * @param id
   */</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Delete</span></span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Param</span></span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">)</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>postsService<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口格式统一" tabindex="-1"><a class="header-anchor" href="#接口格式统一" aria-hidden="true">#</a> 接口格式统一</h3><ul><li>定义正确是返回<code>json</code></li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

- 定义错误时返回\`json\`

\`\`\`json
<span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>拦截请求错误 创建一个过滤器</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nest g filter core/filter/http-exception
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  ArgumentsHost<span class="token punctuation">,</span>
  Catch<span class="token punctuation">,</span>
  ExceptionFilter<span class="token punctuation">,</span>
  HttpException<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Catch</span></span><span class="token punctuation">(</span>HttpException<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">HttpExceptionFilter</span> <span class="token keyword">implements</span> <span class="token class-name">ExceptionFilter</span> <span class="token punctuation">{</span>
  <span class="token function">catch</span><span class="token punctuation">(</span>exception<span class="token operator">:</span> HttpException<span class="token punctuation">,</span> host<span class="token operator">:</span> ArgumentsHost<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> host<span class="token punctuation">.</span><span class="token function">switchToHttp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 获取请求上下文</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">getResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 获取请求上下文中的 response对象</span>
    <span class="token keyword">const</span> status <span class="token operator">=</span> exception<span class="token punctuation">.</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 获取异常状态码</span>

    <span class="token comment">// 设置错误信息</span>
    <span class="token keyword">const</span> message <span class="token operator">=</span> exception<span class="token punctuation">.</span>message
      <span class="token operator">?</span> exception<span class="token punctuation">.</span>message
      <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>status <span class="token operator">&gt;=</span> <span class="token number">500</span> <span class="token operator">?</span> <span class="token string">&#39;Service Error&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;Client Error&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token keyword">const</span> errorResponse <span class="token operator">=</span> <span class="token punctuation">{</span>
      data<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      message<span class="token operator">:</span> message<span class="token punctuation">,</span>
      code<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 设置返回的状态码， 请求头，发送错误信息</span>
    response<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span>
    response<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;application/json; charset=utf-8&#39;</span><span class="token punctuation">)</span>
    response<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>errorResponse<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在<code>main.ts</code>中使用过滤器</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TransformInterceptor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./core/interceptor/transform.interceptor&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">await</span> NestFactory<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">create</span><span class="token generic class-name"><span class="token operator">&lt;</span>NestExpressApplication<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>AppModule<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">...</span>
   <span class="token comment">// 注册全局错误的过滤器</span>
  app<span class="token punctuation">.</span><span class="token function">useGlobalInterceptors</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TransformInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>拦截成功请求 创建一个拦截器</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nest g interceptor core/interceptor/transform
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  CallHandler<span class="token punctuation">,</span>
  ExecutionContext<span class="token punctuation">,</span>
  Injectable<span class="token punctuation">,</span>
  NestInterceptor<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> map<span class="token punctuation">,</span> Observable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rxjs&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Injectable</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">TransformInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">NestInterceptor</span> <span class="token punctuation">{</span>
  <span class="token function">intercept</span><span class="token punctuation">(</span>context<span class="token operator">:</span> ExecutionContext<span class="token punctuation">,</span> next<span class="token operator">:</span> CallHandler<span class="token punctuation">)</span><span class="token operator">:</span> Observable<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> next<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>
      <span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          data<span class="token punctuation">,</span>
          code<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          msg<span class="token operator">:</span> <span class="token string">&#39;请求成功&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在<code>main.ts</code>中使用拦截器</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TransformInterceptor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./core/interceptor/transform.interceptor&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">await</span> NestFactory<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">create</span><span class="token generic class-name"><span class="token operator">&lt;</span>NestExpressApplication<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>AppModule<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">...</span>
  <span class="token comment">// 全局注册拦截器</span>
 app<span class="token punctuation">.</span><span class="token function">useGlobalInterceptors</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TransformInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">9080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-swagger" tabindex="-1"><a class="header-anchor" href="#使用-swagger" aria-hidden="true">#</a> 使用 Swagger</h2><ul><li>安装依赖</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">--save</span> @nestjs/swagger swagger-ui-express

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在<code>main.ts</code>中使用 Swagger</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SwaggerModule<span class="token punctuation">,</span> DocumentBuilder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/swagger&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">await</span> NestFactory<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">create</span><span class="token generic class-name"><span class="token operator">&lt;</span>NestExpressApplication<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>AppModule<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">...</span>
  <span class="token comment">// 设置swagger文档</span>
  <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DocumentBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&#39;管理后台&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token string">&#39;管理后台接口文档&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setVersion</span><span class="token punctuation">(</span><span class="token string">&#39;1.0&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">addBearerAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> document <span class="token operator">=</span> SwaggerModule<span class="token punctuation">.</span><span class="token function">createDocument</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>
  SwaggerModule<span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span> app<span class="token punctuation">,</span> document<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置完成 Swagger 后，访问 <code>http://localhost:3000/docs</code>，可以看到 Swagger 文档。</li></ul><h3 id="接口标签" tabindex="-1"><a class="header-anchor" href="#接口标签" aria-hidden="true">#</a> 接口标签</h3><ul><li>根据<code>Controller</code>来分类， 只要添加<code>@ApiTags</code>就可以</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ApiTags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/swagger&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Body<span class="token punctuation">,</span> Controller<span class="token punctuation">,</span> Delete<span class="token punctuation">,</span> Get<span class="token punctuation">,</span> Param<span class="token punctuation">,</span> Post<span class="token punctuation">,</span> Put<span class="token punctuation">,</span> Query <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">ApiTags</span></span><span class="token punctuation">(</span><span class="token string">&quot;文章&quot;</span><span class="token punctuation">)</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PostsController</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口说明" tabindex="-1"><a class="header-anchor" href="#接口说明" aria-hidden="true">#</a> 接口说明</h3><ul><li><p>同样在 <code>Controller</code> 中， 在每一个路由的前面使用<code>@ApiOperation</code> 装饰器</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//  posts.controller.ts</span>
<span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ApiTags<span class="token punctuation">,</span>ApiOperation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/swagger&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PostsController</span> <span class="token punctuation">{</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">ApiOperation</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> summary<span class="token operator">:</span> <span class="token string">&#39;创建文章&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Body</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> post<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">ApiOperation</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> summary<span class="token operator">:</span> <span class="token string">&#39;获取文章列表&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Query</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> query<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>PostsRo<span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
<span class="token operator">...</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="接口传参" tabindex="-1"><a class="header-anchor" href="#接口传参" aria-hidden="true">#</a> 接口传参</h3><p>在<code>posts</code>目录下创建一个 dto 文件夹，再创建一个<code>create-post.dot.ts</code>文件</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// dto/create-post.dot.ts</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">CreatePostDto</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> title<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token keyword">readonly</span> author<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token keyword">readonly</span> content<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token keyword">readonly</span> cover_url<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token keyword">readonly</span> type<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在<code>Controller</code>中对创建文章是传入的参数进行类型说明</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//  posts.controller.ts</span>
<span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CreatePostDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./dto/create-post.dto&#39;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">ApiOperation</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> summary<span class="token operator">:</span> <span class="token string">&#39;创建文章&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Body</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> post<span class="token operator">:</span>CreatePostDto<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>create-post.dto</code> 文件添加 <code>Swagger</code> 的注释</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ApiProperty <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/swagger&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">CreatePostDto</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">ApiProperty</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> description<span class="token operator">:</span> <span class="token string">&#39;文章标题&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">readonly</span> title<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">ApiProperty</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> description<span class="token operator">:</span> <span class="token string">&#39;作者&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">readonly</span> author<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">ApiPropertyOptional</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> description<span class="token operator">:</span> <span class="token string">&#39;内容&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">readonly</span> content<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">ApiPropertyOptional</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> description<span class="token operator">:</span> <span class="token string">&#39;文章封面&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">readonly</span> cover_url<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">ApiProperty</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> description<span class="token operator">:</span> <span class="token string">&#39;文章类型&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">readonly</span> type<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据验证" tabindex="-1"><a class="header-anchor" href="#数据验证" aria-hidden="true">#</a> 数据验证</h2><h3 id="安装依赖-1" tabindex="-1"><a class="header-anchor" href="#安装依赖-1" aria-hidden="true">#</a> 安装依赖</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">--save</span> class-validator class-transformer

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用验证器" tabindex="-1"><a class="header-anchor" href="#使用验证器" aria-hidden="true">#</a> 使用验证器</h3><ul><li>在<code>create-post.dto.ts</code>中使用验证器</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> IsNotEmpty<span class="token punctuation">,</span> IsNumber<span class="token punctuation">,</span> IsString <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;class-validator&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">CreatePostDto</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">ApiProperty</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> description<span class="token operator">:</span> <span class="token string">&#39;文章标题&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">IsNotEmpty</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">&#39;文章标题必填&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">readonly</span> title<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">IsNotEmpty</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">&#39;缺少作者信息&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">ApiProperty</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> description<span class="token operator">:</span> <span class="token string">&#39;作者&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">readonly</span> author<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">ApiPropertyOptional</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> description<span class="token operator">:</span> <span class="token string">&#39;内容&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">readonly</span> content<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">ApiPropertyOptional</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> description<span class="token operator">:</span> <span class="token string">&#39;文章封面&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">readonly</span> cover_url<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">IsNumber</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">ApiProperty</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> description<span class="token operator">:</span> <span class="token string">&#39;文章类型&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">readonly</span> type<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>posts.controller.ts</code> 中使用验证器</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CreatePostDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./dto/create-post.dto&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> PostsService<span class="token punctuation">,</span> PostsRo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./posts.service&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Body<span class="token punctuation">,</span> Controller<span class="token punctuation">,</span> Delete<span class="token punctuation">,</span> Get<span class="token punctuation">,</span> Param<span class="token punctuation">,</span> Post<span class="token punctuation">,</span> Put<span class="token punctuation">,</span> Query <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PostsController</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> postsService<span class="token operator">:</span> PostsService<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">/**
   * 创建文章
   * @param post
   */</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Body</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> post<span class="token operator">:</span>CreatePostDto<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>postsService<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>post<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>main.ts</code> 中全局注册一下管道</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ValidationPipe <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">await</span> NestFactory<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">create</span><span class="token generic class-name"><span class="token operator">&lt;</span>NestExpressApplication<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>AppModule<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">...</span>
  <span class="token comment">// 全局注册管道</span>
  app<span class="token punctuation">.</span><span class="token function">useGlobalPipes</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ValidationPipe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件" aria-hidden="true">#</a> 中间件</h2><ul><li>创建中间件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nest g middleware core/middleware/logger
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Injectable<span class="token punctuation">,</span> NestMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Request<span class="token punctuation">,</span> Response<span class="token punctuation">,</span> NextFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;express&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Injectable</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">LoggerMiddleware</span> <span class="token keyword">implements</span> <span class="token class-name">NestMiddleware</span> <span class="token punctuation">{</span>
  <span class="token function">use</span><span class="token punctuation">(</span>req<span class="token operator">:</span> Request<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">,</span> next<span class="token operator">:</span> NextFunction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Request...&#39;</span><span class="token punctuation">)</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在<code>app.module.ts</code>中使用中间件</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Module<span class="token punctuation">,</span> NestModule<span class="token punctuation">,</span> MiddlewareConsumer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span>
<span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> LoggerMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./core/middleware/logger.middleware&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Module</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  imports<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  controllers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  providers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token keyword">implements</span> <span class="token class-name">NestModule</span> <span class="token punctuation">{</span>
  <span class="token function">configure</span><span class="token punctuation">(</span>consumer<span class="token operator">:</span> MiddlewareConsumer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">consumer</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>LoggerMiddleware<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forRoutes</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意： 在全局中间件只能使用 函数式中间件，不能使用类中间件。</p><h2 id="守卫" tabindex="-1"><a class="header-anchor" href="#守卫" aria-hidden="true">#</a> 守卫</h2><ul><li>创建守卫</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nest g guard core/guard/auth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Injectable<span class="token punctuation">,</span> CanActivate<span class="token punctuation">,</span> ExecutionContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Observable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rxjs&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Injectable</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AuthGuard</span> <span class="token keyword">implements</span> <span class="token class-name">CanActivate</span> <span class="token punctuation">{</span>
  <span class="token function">canActivate</span><span class="token punctuation">(</span>
    context<span class="token operator">:</span> ExecutionContext
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span> <span class="token operator">|</span> Observable<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> request <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">switchToHttp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;request&#39;</span><span class="token punctuation">,</span> request<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token function">validateRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span> <span class="token comment">// 校验请求</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在 <code>controller</code> 中使用守卫</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> AuthGuard <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./core/guard/auth.guard&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PostsController</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> postsService<span class="token operator">:</span> PostsService<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">/**
   * 创建文章
   * @param post
   */</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">UseGuards</span></span><span class="token punctuation">(</span>AuthGuard<span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Body</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> post<span class="token operator">:</span> CreatePostDto<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>postsService<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>post<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,101),r={href:"https://nestjs.com/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://docs.nestjs.cn/",target:"_blank",rel:"noopener noreferrer"},k={href:"http://nestjs.inode.club/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.bilibili.com/video/BV1NG41187Bs/?spm_id_from=333.337.search-card.all.click&vd_source=c5abf1ba032ca00c06ebba96e3ff445e",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.bilibili.com/video/BV1x341177P8/?spm_id_from=333.337.search-card.all.click&vd_source=c5abf1ba032ca00c06ebba96e3ff445e",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.bilibili.com/video/BV1124y1k7th/?spm_id_from=333.999.0.0&vd_source=c5abf1ba032ca00c06ebba96e3ff445e",target:"_blank",rel:"noopener noreferrer"},y={href:"https://juejin.cn/post/7032079740982788132",target:"_blank",rel:"noopener noreferrer"},g={href:"https://juejin.cn/post/7044708915438682148",target:"_blank",rel:"noopener noreferrer"},f={href:"https://juejin.cn/post/7160936006517014558",target:"_blank",rel:"noopener noreferrer"};function w(h,x){const s=p("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[a("nestjs 官网"),t(s)])]),n("li",null,[n("a",d,[a("nestjs 中文文档"),t(s)])]),n("li",null,[n("a",k,[a("nestjs 中文文档"),t(s)])]),n("li",null,[n("a",v,[a("Nestjs 全家桶系列 小满"),t(s)])]),n("li",null,[n("a",m,[a("nestjs 从入门到实战--sequelize、typeorm、graphql、swagger"),t(s)])]),n("li",null,[n("a",b,[a("大地 Nestjs 实战教程"),t(s)])]),n("li",null,[n("a",y,[a("学完这篇 Nest.js 实战，还没入门的来锤我！(长文预警)"),t(s)])]),n("li",null,[n("a",g,[a("Nest.js 实战系列二-手把手带你-实现注册、扫码登录、jwt 认证等"),t(s)])]),n("li",null,[n("a",f,[a("Nest.js 进阶系列五： Node.js 中使用 Redis 原来这么简单"),t(s)])])])])}const j=e(l,[["render",w],["__file","index.html.vue"]]);export{j as default};
