import{_ as l,r as c,o as i,c as a,a as e,b as o,d as n,e as s}from"./app.26c798e2.js";const p="/article/images/2021_uni-app/img/2021-12-25-13-47-05.png",r="/article/images/2021_uni-app/img/2021-12-25-13-45-26.png",d="/article/images/2021_uni-app/img/2021-12-25-13-49-15.png",m="/article/images/2021_uni-app/img/2021-12-25-14-05-41.png",g="/article/images/2021_uni-app/img/2021-12-25-14-09-08.png",_="/article/images/2021_uni-app/img/2021-12-25-14-41-32.png",u="/article/images/2021_uni-app/img/2021-12-25-15-29-26.png",h="/article/images/2021_uni-app/img/2021-12-25-18-07-36.png",b="/article/images/2021_uni-app/img/2021-12-25-18-15-07.png",k="/article/images/2021_uni-app/img/2021-12-25-18-46-20.png",f="/article/images/2021_uni-app/img/2021-12-25-18-44-17.png",q="/article/images/2021_uni-app/img/2021-12-25-19-59-35.png",v="/article/images/2021_uni-app/img/2021-12-25-21-09-07.png",x="/article/images/2021_uni-app/img/2021-12-25-21-18-01.png",D="/article/images/2021_uni-app/img/2021-12-25-21-17-23.png",y="/article/images/2021_uni-app/img/2021-12-25-21-20-12.png",N="/article/images/2021_uni-app/img/2021-12-25-21-21-09.png",w="/article/images/2021_uni-app/img/2021-12-25-21-34-45.png",z="/article/images/2021_uni-app/img/2021-12-25-21-27-13.png",M="/article/images/2021_uni-app/img/2021-12-25-21-39-33.png",B="/article/images/2021_uni-app/img/2021-12-25-21-32-15.png",E="/article/images/2021_uni-app/img/2021-12-25-21-32-46.png",O="/article/images/2021_uni-app/img/2021-12-25-21-45-31.png",I="/article/images/2021_uni-app/img/2021-12-26-19-06-40.png",V="/article/images/2021_uni-app/img/2021-12-26-19-13-04.png",L="/article/images/2021_uni-app/img/2021-12-26-19-53-42.png",j="/article/images/2021_uni-app/img/2021-12-26-20-10-07.png",S="/article/images/2021_uni-app/img/2021-12-26-20-37-23.png",T="/article/images/2021_uni-app/img/2021-12-26-20-49-31.png",U="/article/images/2021_uni-app/img/2021-12-26-21-25-12.png",C="/article/images/2021_uni-app/img/2021-12-26-21-26-37.png",G="/article/images/2021_uni-app/img/2021-12-26-21-43-34.png",H="/article/images/2021_uni-app/img/2021-12-26-21-54-54.png",X="/article/images/2021_uni-app/img/2021-12-26-21-56-11.png",A="/article/images/2021_uni-app/img/2021-12-26-22-12-33.png",F={},J=s('<h1 id="第-8-章-文章详情模块开发" tabindex="-1"><a class="header-anchor" href="#第-8-章-文章详情模块开发" aria-hidden="true">#</a> 第 8 章 文章详情模块开发</h1><h3 id="_1-开篇-加片头" tabindex="-1"><a class="header-anchor" href="#_1-开篇-加片头" aria-hidden="true">#</a> <mark>1）开篇（加片头） </mark></h3><p>从本章开始我们要进入文章详情的页面开发。</p><p>总共分成两部分：</p><p><img src="'+p+'" alt="两部分"></p><p>在文章详情页面可以展示：</p><ol><li>文章标题</li><li>作者信息</li><li>发布时间</li><li>文章内容</li><li>文章评论</li></ol><p><img src="'+r+'" alt="展示评论"></p><p>同时你可以在这里进行：</p><ol><li>作者关注</li><li>文章评论</li><li>文章点赞</li><li>文章收藏</li></ol><p>等操作。</p><p><img src="'+d+'" alt="操作"></p><blockquote><p>这些操作需要判断是否已点击过 -&gt; 需要登录才行</p></blockquote><p>其它基本功能大家可以进入到我们已经发布的小程序《慕课热搜》中进行查看。</p><p>那么在这样的一个复杂的详情页面中，我们又会遇到什么样的复杂难题？又将如何进行解决呢？</p><p>我们一起来期待吧！</p><h3 id="_2-文章详情-点击进入文章详情页面" tabindex="-1"><a class="header-anchor" href="#_2-文章详情-点击进入文章详情页面" aria-hidden="true">#</a> <mark>2）文章详情 - 点击进入文章详情页面</mark></h3><p>如何进入到文章详情页？</p><ol><li><strong>热搜列表进入文章详情</strong></li><li><strong>搜索结果页面进入文章详情</strong></li></ol><p>💡：实现</p><p>在 <code>subpkg</code> 下创建 <strong>文章详情页面</strong> <code>blog-detail</code></p><p><img src="'+m+'" alt="blog-detail"></p><p>修改<code>pages.json</code></p><p><img src="'+g+'" alt="pages"></p><p>完成页面的跳转</p><ol><li><code>hot-list-item</code>发送通知被点击了 -&gt; <code>hot.vue</code>监听这个通知 -&gt; 跳转页面</li><li><code>search-result-list</code> -&gt; 给循环遍历时的那个<code>view</code>添加点击事件 -&gt; 跳转页面</li></ol>',26),K={href:"https://github.com/ppambler/imooc-uni-app/commit/d523bb7",target:"_blank",rel:"noopener noreferrer"},P=s('<h3 id="_3-文章详情-获取文章详情数据" tabindex="-1"><a class="header-anchor" href="#_3-文章详情-获取文章详情数据" aria-hidden="true">#</a> <mark>3）文章详情 - 获取文章详情数据</mark></h3><p>分析接口得知，需要两个参数：</p><ul><li>作者名称</li><li>文章 <code>id</code></li></ul><p>如何拿到这两个数据呢？</p><p><img src="'+_+'" alt="获取数据"></p><blockquote><p>是<code>user_name</code>，不是<code>nickname</code> -&gt; 在搜索结果里的是<code>author</code></p></blockquote><p>我们知道小程序在发送请求的时候带参数，遵循了<code>GET</code>请求标准形式</p><p>在<code>blog-detail</code>的<code>onLoad</code>里边拿到参数</p><p>参数有了，就发起请求呗！</p><p><img src="'+u+'" alt="请求"></p><p>注意：</p><ul><li>有些文章详情数据很多，所以会响应很慢 -&gt; 添加一个加载框 -&gt; 加载框的关闭在<code>request</code>的<code>complete</code>方法里边，如果你加载数据的时候，有用到加载框，那么这个<code>complete</code>方法是有效果的，当然，如果你没用到这也没事哈，这相当于什么也没做！</li></ul>',12),Q={href:"https://github.com/ppambler/imooc-uni-app/commit/a50a375",target:"_blank",rel:"noopener noreferrer"},R=s('<h3 id="_4-文章详情-分析并渲染文章详情的基本结构" tabindex="-1"><a class="header-anchor" href="#_4-文章详情-分析并渲染文章详情的基本结构" aria-hidden="true">#</a> <mark>4）文章详情 - 分析并渲染文章详情的基本结构</mark></h3><blockquote><p>渲染文章详情的 UI 结构</p></blockquote><p>整个文章详情可以被分为三个部分实现：</p><ol><li>文章内容区</li><li>评论列表区</li><li>底部功能区</li></ol><p><img src="'+h+'" alt="文章详情"></p><p>我们先来实现 <strong>文章内容区</strong> -&gt; 主要是搭建 UI 结构</p><p>完成后的效果：</p><p><img src="'+b+'" alt="效果"></p>',8),W={href:"https://github.com/ppambler/imooc-uni-app/commit/13a4c19",target:"_blank",rel:"noopener noreferrer"},Y=e("h3",{id:"_5-文章内容-美化文章内容区域",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-文章内容-美化文章内容区域","aria-hidden":"true"},"#"),o(),e("mark",null,"5）文章内容 - 美化文章内容区域")],-1),Z=e("p",null,"美化效果：",-1),$=e("p",null,[e("img",{src:k,alt:"效果"})],-1),ee={href:"https://github.com/ppambler/imooc-uni-app/commit/f2b0cbe",target:"_blank",rel:"noopener noreferrer"},oe=s('<p>方便调试（不用每次点击 <code>item</code> 进入文章详情页）：</p><p><img src="'+f+'" alt="调试"></p><h3 id="_6-文章内容-分析文章内容的样式实现" tabindex="-1"><a class="header-anchor" href="#_6-文章内容-分析文章内容的样式实现" aria-hidden="true">#</a> <mark>6）文章内容 - 分析文章内容的样式实现</mark></h3><p>目前我们虽然已经完成了基本的 <code>html</code> 和 <code>css</code> ，但是我们可以发现，现在的 <strong>文章内容</strong> 部分与完成之后的项目差距其实挺大的。那么怎么解决这个问题呢？</p><p>想要解决这个问题，我们需要先明确一点：<strong>所有和样式相关的问题，都需要通过 <code>css</code> 进行解决！</strong></p><p>明确了这点之后，我们就知道，想要解决这个问题，那么还是必须要从 <code>css</code> 进行着手。</p><p>回忆一下我们之前解决 <strong>搜索结果高亮关键字的功能</strong>，我们知道 对于 <code>rich-text</code> 来说，它并不会把 <strong>富文本</strong> 渲染为真实 <code>DOM</code> ，放入到 <code>DOM</code> 中，所以我们如果直接通过 <code>css</code> 指定样式，那么是没有效果的。</p><p>所以我们当时通过了 <strong>行内样式</strong> 的形式进行了 <strong>高亮文本的展示</strong>。</p><p>但是这样的一种方案，放入到我们当前的场景中是否合适呢？</p><p>答案是：<strong>不合适的</strong>。</p><p>因为对于 <strong>文章内容</strong> 来说，它涉及到了非常多的 <code>html 标签</code>，每个 <code>html 标签</code> 设计到的样式也非常复杂，如果我们还期望通过 <strong>行内样式</strong> 来去解决的话，那么未免 <strong>太不现实</strong> 了。</p><p>那么我们应该怎么去解决这个问题呢？大家可以先去思考一下这个问题。不需要思考出具体的实现方案，只需要给出一个可行的方案即可。</p><hr><p>在这里，我就认为大家已经针对这个问题进行过思考了，那么我们就直接公布可行方案：</p><ol><li>把包含 <code>html</code> 的富文本，转化为 <strong>小程序可识别的 元素 进行展示</strong></li><li>获取网络中现有的，用来处理文章详情的 <code>css</code>，对该 <code>css</code> 进行改造</li><li>为每个元素添加对应的类名，使其可拥有更完美的样式</li></ol><p>通过以上三步即可实现。</p><p>那么在下一节中我们将去实现对应的代码</p><h3 id="_7-文章内容-实现文章内容的样式渲染" tabindex="-1"><a class="header-anchor" href="#_7-文章内容-实现文章内容的样式渲染" aria-hidden="true">#</a> <mark>7）文章内容 - 实现文章内容的样式渲染</mark></h3><ul><li>mp-html 富文本组件</li><li>文章主题演示 -&gt; typora 的开放主题</li><li>给数据添加<code>class</code>，追加自己的样式，毕竟有些主题样式用到了小程序不支持的标签选择器</li></ul><p>注意：</p><ul><li>样式主题需要指定父类名？ -&gt; <code>&lt;mp-html class=&quot;markdown_views&quot;&gt;</code> -&gt; <code>markdown_views</code>就是父类名</li><li>需要添加<code>&lt;block v-if=&quot;articleData&quot;&gt;</code>，因为第一次渲染时数据还未到 -&gt; <code>articleData</code>为<code>null</code></li></ul><hr><p>在上一章中我们明确了 <strong>文章内容样式渲染的实现方案</strong>，一共分为三步：</p><ol><li>把包含 <code>html</code> 的富文本，转化为 <strong>小程序可识别的 元素 进行展示</strong></li><li>获取网络中现有的，用来处理文章详情的 <code>css</code>，对该 <code>css</code> 进行改造</li><li>为每个元素添加对应的类名，使其可拥有更完美的样式</li></ol><p>那么这一章节，我们就一步一步来进行实现。</p><p>💡：把包含 <code>html</code> 的富文本，转化为 小程序可识别的 元素 进行展示</p>',26),te={href:"https://ext.dcloud.net.cn/plugin?id=805",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://ext.dcloud.net.cn/plugin?id=805",target:"_blank",rel:"noopener noreferrer"},se=e("strong",null,"富文本渲染的一个库",-1),le=e("strong",null,[o("把包含 "),e("code",null,"html"),o(" 的富文本，转化为 小程序可识别的 元素 进行展示")],-1),ce={href:"https://ext.dcloud.net.cn/plugin?id=805",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://ext.dcloud.net.cn/plugin?id=805",target:"_blank",rel:"noopener noreferrer"},ae=e("strong",null,[o("使用 "),e("code",null,"HBuilderX 导入插件")],-1),pe=e("li",null,[o("在 "),e("code",null,"blog-detail"),o(" 中导入组件，并使用")],-1),re=s('<p>通过 <strong>微信小程序</strong> 查看渲染之后的 <code>DOM</code> 树，可以发现所有的 <strong>富文本</strong> 已经被真实渲染了</p><p><img src="'+q+'" alt="真实渲染"></p><p>💡：获取网络中现有的，用来处理文章详情的 <code>css</code>，对该 <code>css</code> 进行改造</p><p>那么现在，我们就只需要增加对应的 <code>css</code> 样式就可以了。那么 <code>css</code> 样式从哪里来呢？</p>',4),de=e("code",null,"css",-1),me={href:"https://theme.typora.io/",target:"_blank",rel:"noopener noreferrer"},ge=s(`<ol><li>下载对应的 css 压缩包</li><li>在 <code>styles</code> 中新建 <code>article-detail.scss</code> 文件</li><li>复制下载的 <code>css</code> 到 样式文件</li><li>在 <code>blog-detail.vue</code> 中导入 <code>css</code></li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 注意：需要删除 scoped  --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
@import &#39;~@/styles/article-detail.scss&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>💡：为每个元素添加对应的类名，使其可拥有更完美的样式</p><p>现在虽然 <code>DOM</code> 虽然已经被渲染出来了，但是其实现在距离我们最终的样式还是又一些差距的。</p><p>因为在导入的 <code>css</code> 中，很多的样式都是根据 <code>p</code> 标签，<code>span</code> 标签 这样的，标签选择器进行的样式指定，而我们被渲染出来的 <code>dom</code> 是不包含这些选择器的，所以我们需要给不同的标签增加不同的类名，然后修改对应的 <code>css</code> 使其可以通过 <strong>类名选择器</strong> 覆盖样式。</p><p><strong>为 <code>dom</code> 增加类名</strong></p><p>想要添加类名比较简单，我们可以直接通过 <strong>正则进行选取替换：</strong></p><p><img src="`+v+'" alt="添加类名"></p><p>现在查看 <code>DOM</code> 结构，我们就可以发现，在部分被渲染为 <code>view</code> 组件的元素上，已经多了一个 <code>class</code> 为 <code>blockquote-cls</code> 了。</p><p><img src="'+x+'" alt="blockquote-cls"></p><p><strong>为 <code>css</code> 修改类名选择器</strong></p><p>在 <code>css</code> 文件中，全局搜索 <code>blockquote</code> ，将其修改为 <code>.blockquote-cls</code>。</p><p>即可发现样式已经被渲染成功了：</p><p><img src="'+D+'" alt="渲染样式"></p><p>接下来我们就可以为 <strong>所有的标签增加类名</strong> ，同时为 <strong><code>css</code> 修改对应的样式</strong></p><p><img src="'+y+'" alt="添加类"></p><p>替换之后得到如下页面：</p><p><img src="'+N+'" alt="替换结果"></p>',18),_e={href:"https://github.com/ppambler/imooc-uni-app/commit/1048c54",target:"_blank",rel:"noopener noreferrer"},ue=s('<p>如果 <strong>忽略掉文字大小</strong>，只看这个样式其实还是蛮好看的对吧。</p><p>但是这个字体大小是怎么回事呢？我们下一小节为大家解惑！</p><h3 id="_8-文章内容-解决字体过小的问题" tabindex="-1"><a class="header-anchor" href="#_8-文章内容-解决字体过小的问题" aria-hidden="true">#</a> <mark>8）文章内容 - 解决字体过小的问题</mark></h3><p>在上一小节我们解决了 <strong>文章内容</strong> 的渲染样式问题，但是在渲染之后，我们发现这个 <strong>文字也太小了吧</strong>。那么这个问题怎么解决呢？我们一起来看一下！</p><p><strong>分析问题：</strong></p><p>首先我们先来看一看下出现这个问题的原因是什么呢？</p><p>我们知道：<strong>所有影响样式的问题都是由 <code>css</code> 引起的。</strong> 那么这样的问题也不例外，查看我们的 <code>css</code> 可以发现，<strong>文章内容</strong> 中所有的 <strong>文字大小</strong> 都是由 <code>rem</code> 进行指定的。</p><p><img src="'+w+'" alt="rem"></p><p>同时我们知道 <code>rem</code> 的大小取决于 <code>html</code> 根目录的 <code>font-size</code> 大小，那么明白了这个之后，问题应该就好解决了对不对。我们是不是只需要给 <strong><code>html</code> 根标签添加一个对应的 <code>font-size</code> 就可以了</strong>。</p><p>所以我们可以到 <code>article-detail.scss</code> 顶部，但是我们发现它这里已经有了对应的 <code>css</code> 了！！</p><p><img src="'+z+'" alt="css"></p><p>既然已经有了这个 <code>css</code> 那为什么还不能生效呢？？</p><hr><p>原因其实非常简单，大家想一下咱们现在是在 <strong>微信小程序</strong> 中，<strong>微信小程序</strong> 中有 <code>html</code> 标签吗？ 是不是没有啊。</p><p>所以通过指定 <code>html</code> 样式的形式是无法解决 <strong>微信小程序</strong> 中的字体大小问题的。</p><p><strong>微信小程序字体大小解决方案：</strong></p><p>那么我们应该怎么解决这个问题呢？</p>',17),he=e("code",null,"uniapp",-1),be={href:"https://uniapp.dcloud.io/component/page-meta?id=page-meta",target:"_blank",rel:"noopener noreferrer"},ke=e("p",null,[e("img",{src:M,alt:"page-meta"})],-1),fe={href:"https://uniapp.dcloud.io/component/page-meta?id=page-meta",target:"_blank",rel:"noopener noreferrer"},qe=e("code",null,"html",-1),ve=e("code",null,"header",-1),xe=e("code",null,"head",-1),De=e("code",null,"root-font-size",-1),ye=e("strong",null,[e("code",null,"根 font-size"),o("（类似于 "),e("code",null,"html"),o(" 根元素的 "),e("code",null,"font-size"),o("）")],-1),Ne=e("p",null,[o("所以，我们可以直接使用 "),e("code",null,"<page-meta>"),o(" 包裹元素")],-1),we=e("p",null,[e("img",{src:B,alt:"page-meta"})],-1),ze=e("p",null,[o("此时，在返回模拟器，即可发现 "),e("strong",null,"文字大小问题已经解决")],-1),Me=e("p",null,[e("img",{src:E,alt:"效果"})],-1),Be={href:"https://github.com/ppambler/imooc-uni-app/commit/1c71b09",target:"_blank",rel:"noopener noreferrer"},Ee=s('<p><strong>注意：目前文章详情还无法在 浏览器 中进行展示，具体原因我们会在后面 【适配方案】 中进行讲解！！</strong></p><p><img src="'+O+'" alt="浏览器"></p><blockquote><p>对于文章内容，最复杂的地方，莫过于我们对整个内容区域的渲染部分 -&gt; 这里最核心的一个点就是「如何把我们的富文本通过微信小程序可识别的组件来把它们渲染出来」</p></blockquote><h3 id="_9-评论列表-获取评论列表数据" tabindex="-1"><a class="header-anchor" href="#_9-评论列表-获取评论列表数据" aria-hidden="true">#</a> <mark>9）评论列表 - 获取评论列表数据</mark></h3><blockquote><p>先获取数据再讨论如何渲染</p></blockquote><ol><li>在<code>article.js</code>里边定义接口</li><li>创建新的组件：<code>article-comment-list</code></li><li>在<code>blog-detail</code>里边使用组件</li></ol><p>效果：</p><p><img src="'+I+'" alt="效果"></p>',8),Oe={href:"https://github.com/ppambler/imooc-uni-app/commit/84e0c05",target:"_blank",rel:"noopener noreferrer"},Ie=s('<h3 id="_10-评论列表-渲染评论列表-精简评论" tabindex="-1"><a class="header-anchor" href="#_10-评论列表-渲染评论列表-精简评论" aria-hidden="true">#</a> <mark>10）评论列表 - 渲染评论列表（精简评论）</mark></h3><p>对于评论列表，包含两部分的内容：</p><ol><li>精简评论 -&gt; 只渲染两条评论项</li><li>全部评论（包含分页） -&gt; 上拉加载评论有分页</li></ol><p><img src="'+V+'" alt="精简评论"></p><p>先来完成精简评论</p><ul><li>先完成内容的展示</li><li>评论项是一个组件</li><li>评论人默认是<code>nickName</code>，但有时该值是空，所以得用<code>userName</code>作为兜底值</li></ul><p>效果：</p><p><img src="'+L+'" alt="效果"></p>',8),Ve={href:"https://github.com/ppambler/imooc-uni-app/commit/d417401",target:"_blank",rel:"noopener noreferrer"},Le=e("p",null,"👇：实现评论列表的样式",-1),je=e("h3",{id:"_11-评论列表-美化评论列表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_11-评论列表-美化评论列表","aria-hidden":"true"},"#"),o(),e("mark",null,"11）评论列表 - 美化评论列表")],-1),Se=e("p",null,"效果：",-1),Te=e("p",null,[e("img",{src:j,alt:"效果"})],-1),Ue={href:"https://github.com/ppambler/imooc-uni-app/commit/2f35dee",target:"_blank",rel:"noopener noreferrer"},Ce=s('<h3 id="_12-评论列表-渲染全部评论列表" tabindex="-1"><a class="header-anchor" href="#_12-评论列表-渲染全部评论列表" aria-hidden="true">#</a> <mark>12）评论列表 - 渲染全部评论列表</mark></h3><ul><li>用到了<code>v-if</code> -&gt; 「精简评论」和「全部评论」之间的切换</li><li>上拉加载依旧用到了<code>mescroll</code> -&gt; 不过这次不需要下拉刷新功能 -&gt; <code>:down=&quot;{ use: false }&quot;</code></li></ul><p>效果：</p><p><img src="'+S+'" alt="效果"></p>',4),Ge={href:"https://github.com/ppambler/imooc-uni-app/commit/aa76a09",target:"_blank",rel:"noopener noreferrer"},He=s('<h3 id="_13-评论列表-完成全部评论的分页加载" tabindex="-1"><a class="header-anchor" href="#_13-评论列表-完成全部评论的分页加载" aria-hidden="true">#</a> <mark>13）评论列表 - 完成全部评论的分页加载</mark></h3><ul><li><code>mescroll</code>实例对象的获取 -&gt; 不能像之前在<code>mounted</code>里边这样获取了，因为<code>mescroll-body</code>的渲染是我们通过点击「查看更多评论」才会渲染的（说白了，这是一个<code>v-else</code>部分，<code>mounted</code>可是直接看<code>v-if</code>的），所以我们可以使用一个方法来获取这个实例</li></ul><p>效果：</p><p><img src="'+T+'" alt="效果"></p><p>这个「加载中」动画需要结束……因为数据已经加载完了！ -&gt; 总之，数据总有加载完的一天……</p>',5),Xe={href:"https://github.com/ppambler/imooc-uni-app/commit/ca1e4b0",target:"_blank",rel:"noopener noreferrer"},Ae=s('<h3 id="_14-评论列表-处理数据加载完成的提示" tabindex="-1"><a class="header-anchor" href="#_14-评论列表-处理数据加载完成的提示" aria-hidden="true">#</a> <mark>14）评论列表 - 处理数据加载完成的提示</mark></h3><p>服务端会返回评论的总数量，如果<code>当前评论数量 === 总数量</code> 则表示 <strong>数据已全部加载！</strong></p><p>在 <code>mescroll</code> 中提供了对应的对比方法：<code>mescroll.endBySize（当前数据量，总数据量）</code></p><ul><li>当前数据量：目前加载的评论数量</li><li>总数据量：<code>count</code>总数</li></ul><p>加载完的提示：<code>mescroll</code>是有提供的，默认是<code>-- END --</code>，当然，我们可以对其进行配置</p><p><img src="'+U+`" alt="默认提示"></p><p>总之，想要修改结束的提示，可以直接通过配置修改：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mescroll-body</span>
  <span class="token attr-name">:up</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
    textNoMore: &#39;-- 我也是有底线的！ --&#39;
  }<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mescroll-body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><p><img src="`+C+'" alt="效果"></p>',10),Fe={href:"https://github.com/ppambler/imooc-uni-app/commit/3184c64",target:"_blank",rel:"noopener noreferrer"},Je=s('<p>至此，三大块里边，我们已经完成了两大块，剩下功能区部分</p><h3 id="_15-功能区域-封装功能组件" tabindex="-1"><a class="header-anchor" href="#_15-功能区域-封装功能组件" aria-hidden="true">#</a> <mark>15）功能区域 - 封装功能组件</mark></h3><p>底部功能区域包含三个部分：</p><ol><li>输入框</li><li>点赞按钮</li><li>收藏按钮</li></ol><p>实现：</p><ol><li>创建底部功能组件：<code>article-operate</code></li><li>输入框使用 <code>my-search</code> 组件</li><li>创建点赞组件：<code>article-praise</code></li><li>创建收藏组件：<code>article-collect</code></li><li>在 <strong>文章详情 <code>blog-detail</code></strong> 使用该组件</li></ol><p>效果：</p><p><img src="'+G+'" alt="效果"></p>',8),Ke={href:"https://github.com/ppambler/imooc-uni-app/commit/f0d03cd",target:"_blank",rel:"noopener noreferrer"},Pe=e("h3",{id:"_16-功能区域-样式美化",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_16-功能区域-样式美化","aria-hidden":"true"},"#"),o(),e("mark",null,"16）功能区域 - 样式美化")],-1),Qe=e("p",null,"效果：",-1),Re=e("p",null,[e("img",{src:H,alt:"效果"})],-1),We={href:"https://github.com/ppambler/imooc-uni-app/commit/53d4985",target:"_blank",rel:"noopener noreferrer"},Ye=s('<p>距离真正的效果：</p><p><img src="'+X+'" alt="输入框样式"></p><h3 id="_17-功能区域-增加-my-search-的样式适配" tabindex="-1"><a class="header-anchor" href="#_17-功能区域-增加-my-search-的样式适配" aria-hidden="true">#</a> <mark>17）功能区域 - 增加 <code>my-search</code> 的样式适配</mark></h3><ol><li>给<code>my-search</code>添加样式配置项</li><li>在<code>article-operate</code>里边添加自定义样式配置</li></ol><p>效果：</p><p><img src="'+A+'" alt="效果"></p>',6),Ze={href:"https://github.com/ppambler/imooc-uni-app/commit/6ba3417",target:"_blank",rel:"noopener noreferrer"},$e=s('<p>👇：功能区的展示已实现，接下来就是关于它的业务代码实现</p><h3 id="_18-明确功能业务" tabindex="-1"><a class="header-anchor" href="#_18-明确功能业务" aria-hidden="true">#</a> <mark>18）明确功能业务</mark></h3><p>目前在 <strong>文章详情</strong> 中尚未完成的功能主要有 4 个：</p><ol><li>关注用户</li><li>发布评论</li><li>文章点赞</li><li>文章收藏</li></ol><p>对于这四个功能来说，需要在用户登录完成之后才能进行。 -&gt; 你不登录，那这篇文章的作者就不知道谁关注他了，也不知道谁给自己点了赞……</p><p>所以想要完成这四个功能，我们需要先完成 <strong>用户登录</strong> 功能！</p><h3 id="_19-总结" tabindex="-1"><a class="header-anchor" href="#_19-总结" aria-hidden="true">#</a> <mark>19）总结 </mark></h3><p>在本章节中我们完成了 <strong>文章详情的展示功能</strong>。</p><p>其中最复杂的模块应该是有两个：</p><ol><li>文章详情的展示</li><li>文章评论的展示</li></ol><p>对于 <strong>文章详情</strong> 来说，核心的思路在于你需要想办法为 <strong>富文本赋予样式</strong>。而要想实现这个功能你就必须要明白 <strong>富文本</strong> 的渲染机制。只要能够想通这一点，那么剩下的功能就不会特别复杂了。</p><p>而对于 <strong>文章评论</strong> 来说，因为要涉及到 <strong>精简评论</strong> 和 <strong>全部评论</strong> 的切换展示，所以这里会有一个比较复杂的逻辑（就是一个上拉加载罢了）存在。这一块的内容可能需要大家多捋捋代码。</p><p>当然，这些还仅限于 <strong>文章详情的展示功能</strong>，像其他的比如：</p><ol><li>关注</li><li>收藏</li><li>点赞</li><li>评论</li></ol><p>这些功能需要 <strong>用户登录之后才可以进行操作</strong>，所以从下一章开始，我们就需要去实现用户的 <strong>登录</strong> 功能啦！</p>',15);function eo(oo,to){const t=c("ExternalLinkIcon");return i(),a("div",null,[J,e("blockquote",null,[e("p",null,[e("a",K,[o("Demo"),n(t)])])]),P,e("blockquote",null,[e("p",null,[e("a",Q,[o("Demo"),n(t)])])]),R,e("blockquote",null,[e("p",null,[e("a",W,[o("Demo"),n(t)])])]),Y,Z,$,e("blockquote",null,[e("p",null,[e("a",ee,[o("Demo"),n(t)])])]),oe,e("p",null,[o("想要实现这个功能，我们需要借助一个现有的第三方库 "),e("a",te,[o("mp-html"),n(t)])]),e("p",null,[e("a",ne,[o("mp-html"),n(t)]),o(" 是一个专门用来解决 "),se,o(" ，它的解决方案就是 "),le,o("，正好符合我们的需求。")]),e("p",null,[o("导入并使用 "),e("a",ce,[o("mp-html"),n(t)]),o(" ：")]),e("ol",null,[e("li",null,[o("点击进入 "),e("a",ie,[o("mp-html"),n(t)]),o("，点击 "),ae]),pe]),re,e("p",null,[o("获取 "),de,o(" 的样式大家可以直接从："),e("a",me,[o("theme"),n(t)]),o(" 网站去进行下载，然后进行导入：")]),ge,e("blockquote",null,[e("p",null,[e("a",_e,[o("Demo"),n(t)])])]),ue,e("p",null,[o("在 "),he,o(" 中，为我们提供了一个单独的组件 "),e("a",be,[o("page-meta"),n(t)]),o(" 。")]),ke,e("p",null,[e("a",fe,[o("page-meta"),n(t)]),o(" 是一个特殊的标签，有点类似 "),qe,o(" 里的"),ve,o("（"),xe,o("？）标签。页面的背景色、原生导航栏的参数，都可以写在这里。我们可以通过 "),De,o(" 属性指定页面的 "),ye]),Ne,we,ze,Me,e("blockquote",null,[e("p",null,[e("a",Be,[o("Demo"),n(t)])])]),Ee,e("blockquote",null,[e("p",null,[e("a",Oe,[o("Demo"),n(t)])])]),Ie,e("blockquote",null,[e("p",null,[e("a",Ve,[o("Demo"),n(t)])])]),Le,je,Se,Te,e("blockquote",null,[e("p",null,[e("a",Ue,[o("Demo"),n(t)])])]),Ce,e("blockquote",null,[e("p",null,[e("a",Ge,[o("Demo"),n(t)])])]),He,e("blockquote",null,[e("p",null,[e("a",Xe,[o("Demo"),n(t)])])]),Ae,e("blockquote",null,[e("p",null,[e("a",Fe,[o("Demo"),n(t)])])]),Je,e("blockquote",null,[e("p",null,[e("a",Ke,[o("Demo"),n(t)])])]),Pe,Qe,Re,e("blockquote",null,[e("p",null,[e("a",We,[o("Demo"),n(t)])])]),Ye,e("blockquote",null,[e("p",null,[e("a",Ze,[o("Demo"),n(t)])])]),$e])}const so=l(F,[["render",eo],["__file","index.html.vue"]]);export{so as default};