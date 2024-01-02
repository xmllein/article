import{_ as a,o as n,c as s,e}from"./app.26c798e2.js";const o="/article/images/2021_uni-app/img/2021-12-13-18-30-46.png",t="/article/images/2021_uni-app/img/2021-12-13-18-46-35.png",p="/article/images/2021_uni-app/img/2021-12-13-18-52-09.png",i="/article/images/2021_uni-app/img/2021-12-13-19-04-29.png",c="/article/images/2021_uni-app/img/2021-12-13-21-33-00.png",l="/article/images/2021_uni-app/img/2021-12-13-21-32-01.png",d="/article/images/2021_uni-app/img/2021-12-13-23-09-25.png",r="/article/images/2021_uni-app/img/2021-12-13-23-03-09.png",u="/article/images/2021_uni-app/img/2021-12-14-15-13-04.png",g="/article/images/2021_uni-app/img/2021-12-14-15-15-43.png",m="/article/images/2021_uni-app/img/2021-12-14-16-50-21.png",k="/article/images/2021_uni-app/img/2021-12-14-16-50-47.png",h="/article/images/2021_uni-app/img/2021-12-14-17-16-47.png",b="/article/images/2021_uni-app/img/2021-12-14-17-22-21.png",_="/article/images/2021_uni-app/img/2021-12-14-17-28-10.png",v="/article/images/2021_uni-app/img/2021-12-14-17-41-40.png",q="/article/images/2021_uni-app/img/2021-12-14-18-08-31.png",f="/article/images/2021_uni-app/img/2021-12-14-18-25-06.png",x="/article/images/2021_uni-app/img/2021-12-14-18-58-34.png",y="/article/images/2021_uni-app/img/2021-12-14-18-59-22.png",w="/article/images/2021_uni-app/img/2021-12-14-19-01-02.png",D="/article/images/2021_uni-app/img/2021-12-14-20-58-31.png",j="/article/images/2021_uni-app/img/2021-12-14-21-29-00.png",C="/article/images/2021_uni-app/img/2021-12-14-21-46-44.png",T={},B=e('<h1 id="_04-小程序进阶概念" tabindex="-1"><a class="header-anchor" href="#_04-小程序进阶概念" aria-hidden="true">#</a> 04-小程序进阶概念</h1><h3 id="_1-开篇" tabindex="-1"><a class="header-anchor" href="#_1-开篇" aria-hidden="true">#</a> <mark>1）开篇</mark></h3><p>在上一大章中我们讲解了 <strong>小程序的核心概念</strong>，那么这一章节我们来讲解 <strong>小程序的进阶概念。</strong></p><p>在本章节中我们将会通过一个 <strong>案例</strong> 来贯穿整个进阶内容的知识。</p><p><img src="'+o+'" alt="案例"></p><p>这个案例看起来似乎很简单，但麻雀虽小，五脏俱全！</p><p>同样一个功能可能会有很多不同的一个做法 -&gt; 对于这个案例，我们会通过我们之前没有接触过的小程序知识来实现这样一个功能，其中包括组件化思想、数据监听器、组件的关系和通信、组件中插槽的使用……</p><h3 id="_2-什么是组件化思想" tabindex="-1"><a class="header-anchor" href="#_2-什么是组件化思想" aria-hidden="true">#</a> <mark>2）什么是组件化思想</mark></h3><p>想要理解小程序中这个「组件」概念 -&gt; 你首先得搞明白一件事，那就是「什么是组件化思想」</p><p>一个声明：</p><p><strong>对于组件化思想，如果你没有实际的开发经验的话，那么你可能很难立刻理解它。</strong></p><p><strong>不过没有关系！</strong></p><p><strong>随着你对课程的逐渐深入学习，我们会一直为大家灌输组件化思想的概念！</strong></p><blockquote><p>后边用 uni-app 写那个项目的时候，会反复灌输这个「组件化思想」，如果你此刻不能理解，那这也没有关系，随着你接触到越来越多的场景，你就会越来越明白啥是组件化思想了！</p></blockquote><hr><p>想要搞明白什么是组件，那么就必须要先搞清楚，组件解决了什么样的问题！ <strong>所有的技术都是因为解决了一个或多个问题，才有存在的价值！</strong></p><h4 id="_1、场景" tabindex="-1"><a class="header-anchor" href="#_1、场景" aria-hidden="true">#</a> <mark>1、场景</mark></h4><p><img src="'+t+'" alt="场景"></p><p>以上的两张截图是【饿了么小程序】中的数据截图，两个截图来自两个不同的页面。</p><p>但是我们可以发现：虽然他们来自于不同页面，但是其中店铺的 <code>item</code> 项的结构非常类似。</p><p>那么我们现在假象一种场景：</p><blockquote><p>现在你在【饿了么】工作，现在你领导让你去完成这两个页面，那你怎么做？</p><p>你会创建两个页面，然后在一个页面中用 <code>wx:for</code> 指令，创建一堆 <code>item</code> 的 <code>dom 结构</code> 然后再去渲染它们的 <code>wxss</code>。</p><p>然后在到另外一个页面里面，重复这一系列的操作吗？</p></blockquote><p>如果你是这么做的话？那么我打赌你在【饿了么】待不了 3 天。原因就是因为：<strong>你的代码太冗余了！</strong>，换句话来说就是：<strong>不可维护，不可扩展！</strong></p><p>对于我们软件工程师来说，一般情况下，我们会去遵循 <strong>所有可重复的代码，都是可以封装的！</strong></p><p>这里的封装放到我们当前这个场景下，指的就是 <strong>组件化</strong> 封装。</p><p>明确了我们为啥要进行组件化封装之后，接下来我们就来看一下什么是组件化</p><h4 id="_2、内容" tabindex="-1"><a class="header-anchor" href="#_2、内容" aria-hidden="true">#</a> <mark>2、内容</mark></h4><p>我们可以把【整个项目】比喻成一个 <strong>乐高积木</strong>：</p><p><img src="'+p+'" alt="乐高积木"></p><p>那么，对于当前这个项目之中，【每个组件】都可以认为是【其中一块小的积木】（当前一个积木中的一个一个的小零件），这些小的积木可以在当前的项目中使用，也可以直接拿走放到另外的项目中使用。</p><p>一个大的项目，由多个小的组件组成，每一个组件都封装了单独的【结构】、【样式】和【行为】。</p><p>这就是现在的组件化思想。</p><blockquote><p>图中的的 6 个小积木人，是用来插入到那个大积木里边去的，这些小积木人（有不同的颜色和结构，还有不同的行为）就是组件，如果你有其他大积木，那么你可以把这些小积木人插入到其他大积木里边去</p></blockquote><p>如果之前大家有过 <code>vue、react、angular</code> 的开发经验的话，那么应该很好理解 <strong>组件化</strong> 指的是什么意思。</p><p>如果大家之前只有过 <code>html + css + js</code> 的开发经验的话，那么可以把组件理解为：<strong>是一个包含了【结构】和【样式】的模块。</strong></p><p>最后不要忽略，本小节开头的话：</p><p><img src="'+i+'" alt="组件化思想"></p><h3 id="_3-创建第一个组件" tabindex="-1"><a class="header-anchor" href="#_3-创建第一个组件" aria-hidden="true">#</a> <mark>3）创建第一个组件</mark></h3><h4 id="_1、场景-1" tabindex="-1"><a class="header-anchor" href="#_1、场景-1" aria-hidden="true">#</a> <mark>1、场景</mark></h4><blockquote><p>指的是业务场景，简单来说就是「需求」</p></blockquote><p>就像在【开篇】中说到的，<strong>我们会开发一个【案例】，来贯穿整个第四章的内容。</strong></p><p>那么下面我们就来去实现这个案例：</p><blockquote><p>对于这个案例，我们把它拆成两个部分：</p><ol><li>顶部的 tabs</li><li>底部的 list</li></ol><p>这两个部分，将分别通过两个组件来进行开发 -&gt; 而且这两个组件会产生一定的交互</p></blockquote><p>所以，我们接下来要做的第一件事情，就是【创建这两个组件，并在页面中使用它们】，而这个也就是本小节的主要内容</p><h4 id="_2、问题" tabindex="-1"><a class="header-anchor" href="#_2、问题" aria-hidden="true">#</a> <mark>2、问题</mark></h4><blockquote><ol><li>组件应该被放入到哪个文件夹中？</li><li>如何在页面中使用【自定义组件】？</li></ol></blockquote><h4 id="_3、内容" tabindex="-1"><a class="header-anchor" href="#_3、内容" aria-hidden="true">#</a> <mark>3、内容</mark></h4><ol><li>创建组件 <ol><li>创建 <code>components</code> 文件夹</li><li>创建 <code>tabs</code> 和 <code>list</code> 文件夹 -&gt; 用来承载组件的文件夹</li><li>右键 <strong>新建 <code>Component</code></strong> -&gt; 组件的结构几乎和页面一模一样，都是 4 个文件</li></ol></li><li>使用组件 <ol><li>找到页面的 <code>.json</code> 文件 -&gt; 哪个页面需要用到组件？</li><li>在 <code>usingComponents</code> 选项下 <strong>注册组件</strong><ol><li><code>key</code> 为当前组件在该页面中的标签名</li><li><code>value</code> 为组件的代码路径 -&gt; 绝对路径</li></ol></li><li>在页面的 <code>wxml</code> 文件中，以 <strong>注册的 <code>key</code></strong> 为标签名，使用组件</li></ol></li></ol><p>注册组件：</p><p><img src="'+c+'" alt="注册组件"></p><p>使用组件：</p><p><img src="'+l+`" alt="使用组件"></p><h4 id="_4、答案" tabindex="-1"><a class="header-anchor" href="#_4、答案" aria-hidden="true">#</a> <mark>4、答案</mark></h4><blockquote><ol><li>组件应该被放入到哪个文件夹中？ <ol><li><code>components</code></li></ol></li><li>如何在页面中使用【自定义组件】？ <ol><li>在页面的 <code>.json</code> 文件中，通过 <code>usingComponents</code> 进行注册</li><li>注册完后，在 <code>wxml</code> 文件中，以注册的 <code>key</code> 为 <strong>标签名</strong> 进行使用</li></ol></li></ol></blockquote><p>以上就是我们「创建第一个组件」所对应的内容了</p><h3 id="_4-组件的生命周期" tabindex="-1"><a class="header-anchor" href="#_4-组件的生命周期" aria-hidden="true">#</a> <mark>4）组件的生命周期</mark></h3><blockquote><p>构建这两个组件的代码 -&gt; 先处理 <code>tabs</code> 里边的相关操作 -&gt; <code>tabs</code>组件被渲染出来之后，可以获取到对应的数据，并且把这个结构给渲染出来</p></blockquote><h4 id="_1、场景-2" tabindex="-1"><a class="header-anchor" href="#_1、场景-2" aria-hidden="true">#</a> <mark>1、场景</mark></h4><p>接下来我们希望在 <code>tabs</code> 组件被渲染之后，获取 <code>tabs</code> 的数据，并且进行渲染。</p><p>参考下，上一大章中的 <code>列表案例</code> -&gt; 上一章是在页面里边完成，这一次我们要在组件里边完成</p><p>要完成这个功能，我们就必须要有一个 <strong>前置条件：</strong></p><p>那就是：<strong>明确组件的生命周期函数，明确在什么时候去获取接口数据</strong></p><h4 id="_2、问题-1" tabindex="-1"><a class="header-anchor" href="#_2、问题-1" aria-hidden="true">#</a> <mark>2、问题</mark></h4><p>之前，我们说到小程序里边的生命周期主要分成了两个部分，第一个是页面的生命周期，第二个则是组件的生命周期</p><blockquote><ol><li>组件的 <strong>生命周期</strong> 和 <strong>方法</strong> 分别应该被放入到哪个节点下？</li><li><code>created</code> 函数中可以调用 <code>setData</code> 吗？</li><li>获取数据的操作应该在哪个函数中进行？</li></ol></blockquote><h4 id="_3、内容-1" tabindex="-1"><a class="header-anchor" href="#_3、内容-1" aria-hidden="true">#</a> <mark>3、内容</mark></h4><p>💡：前置知识</p><p><strong>组件</strong> 的生命周期应该被定义在 <code>lifetimes</code> 中，而方法必须要放入到 <code>methods</code> 中。 -&gt; 这跟页面有非常大的不同，在页面里边我们直接写在<code>Page({})</code>的选项对象里边就好了</p><p>组件的生命周期一共有三个：</p><ol><li><code>created</code> ： 组件实例刚刚被创建好。<strong>此时还不能调用 <code>setData</code></strong> -&gt; 用的很少，因为无法调用<code>setData</code>，不要跟 Vue 的<code>created</code>给混淆了</li><li><code>attached</code>：组件完全初始化完毕、进入页面节点树后才进行调用。<strong>绝大多数初始化工作可以在这个时机进行</strong> -&gt; 用的最多</li><li><code>detached</code>：在组件离开页面节点树后才进行调用</li></ol><p>💡：实现需求</p><p>步骤：</p><ol><li>定位到组件的<code>js</code>文件，在<code>Component({})</code>的<code>{}</code>里边添加一个<code>lifetimes</code>属性，它是一个列表对象，在这里对象里边添加生命周期函数<code>attached</code></li><li>在<code>methods</code>里边添加<code>loadTabsData</code>方法，用来发送请求获取数据 -&gt; 把获取到的数据赋值给<code>data</code>旗下的<code>listData</code></li><li>根据<code>listData</code>渲染视图 -&gt; 添加相应样式 -&gt; 处理默认选中 -&gt; 添加一个<code>active</code>数据</li></ol><p>代码：</p><p><code>tabs.js</code>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// components/tabs/tabs.js</span>
<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 组件的属性列表
   */</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * 组件的初始数据
   */</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 数据源</span>
    <span class="token literal-property property">listData</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 选中项</span>
    <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * 组件的方法列表（组件中的方法必须定义到 methods 中）
   */</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 获取数据的方法
     */</span>
    <span class="token function">loadTabsData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://api.imooc-blog.lgdsunday.club/api/hot/tabs&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">listData</span><span class="token operator">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list<span class="token punctuation">,</span>
            <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * 生命周期函数
   */</span>
  <span class="token literal-property property">lifetimes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">attached</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadTabsData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求结果：</p><p><img src="`+d+'" alt="请求"></p><p>渲染情况：</p><p><img src="'+r+'" alt="效果"></p><h4 id="_4、答案-1" tabindex="-1"><a class="header-anchor" href="#_4、答案-1" aria-hidden="true">#</a> <mark>4、答案</mark></h4><blockquote><ol><li>组件的 <strong>生命周期</strong> 和 <strong>方法</strong> 分别应该被放入到哪个节点下？ <ol><li>生命周期应该被定义在 <code>lifetimes</code> 这个选项中</li><li>方法必须要放入到 <code>methods</code> 这个节点中</li></ol></li><li><code>created</code> 函数中可以调用 <code>setData</code> 吗？ <ol><li>不可以</li></ol></li><li>获取数据的操作应该在哪个函数中进行？ -&gt; 主要有 3 个生命周期函数 <ol><li><code>attached</code> -&gt; 我们的大部分操作一般都这个函数中进行</li></ol></li></ol></blockquote><h3 id="_5-数据监听器" tabindex="-1"><a class="header-anchor" href="#_5-数据监听器" aria-hidden="true">#</a> <mark>5）数据监听器</mark></h3><h4 id="_1、场景-3" tabindex="-1"><a class="header-anchor" href="#_1、场景-3" aria-hidden="true">#</a> <mark>1、场景</mark></h4><p>通过 <strong>接口文档</strong> 我们可以看出，如果想要获取 <code>list</code> 那么我们需要传递一个 <code>type</code> 的参数，而这个 <code>type</code> 就是用户选中的 <code>tab 项</code> 的 <code>id</code></p><p>所以接下来我们就需要来做一件事情：<strong>监听用户选中的 <code>tab</code>，根据用户选中的 <code>tab</code> 来切换底部 <code>list</code> 的数据</strong></p><p>明确对应的场景之后，就可以来看一下对应的问题了！</p><h4 id="_2、问题-2" tabindex="-1"><a class="header-anchor" href="#_2、问题-2" aria-hidden="true">#</a> <mark>2、问题</mark></h4><blockquote><ol><li>小程序中通过哪个选项来声明数据监听器？</li><li>数据监听器的使用场景是什么？ -&gt; 这个答案需要自己总结出来</li></ol></blockquote><h4 id="_3、内容-2" tabindex="-1"><a class="header-anchor" href="#_3、内容-2" aria-hidden="true">#</a> <mark>3、内容</mark></h4><p>目标：<strong>监听用户选中的 <code>tab</code>，根据用户选中的 <code>tab</code> 来切换底部 <code>list</code> 的数据</strong></p><p>有了这个目标后，我们接下来该怎么去完成这对应的一件事情呢？</p><p>我们之前说过：</p><p>当我们面临一个复杂的需求时，我们需要把这个 <strong>复杂的需求，拆解为几个可执行的步骤</strong></p><p>大家看到这里，可以先思考一下，我们如何拆解以上需求。..</p><blockquote><p>注意：这是一个「可具体执行」的步骤</p></blockquote><hr><p>步骤拆解如下：</p><blockquote><ol><li>监听用户选中项的变化</li><li>获取用户选中的数据的 <code>id</code></li><li>把 <code>id</code> 传递给 <code>list</code> 组件</li><li><code>list</code> 组件根据接收到的 <code>id</code> 获取对应的数据</li></ol></blockquote><p>以上步骤就是根据目标所拆解出的这么四步需求！</p><p>💡：实现这四步需求</p><ol><li>点击事件 -&gt; 传参</li><li>修改选中项 -&gt; 也就是点谁谁高亮</li><li>监听选中项的变化 -&gt; 也就是<code>active</code>的变化 -&gt; <code>observers</code> -&gt; 拿到用户选中的数据<code>id</code></li></ol><p><img src="'+u+'" alt="代码"></p><p>效果：</p><p><img src="'+g+'" alt="效果"></p><h4 id="_4、答案-2" tabindex="-1"><a class="header-anchor" href="#_4、答案-2" aria-hidden="true">#</a> <mark>4、答案</mark></h4><blockquote><ol><li>小程序中通过哪个选项来声明数据监听器 <ol><li><code>observers</code></li></ol></li><li>数据监听器的使用场景是什么？（需要同学自己思考） <ol><li>有一天你需要监听数据的变化</li><li>并且在数据变化之后，进行一些操作的时候</li></ol></li></ol></blockquote><p>到目前，我们已经实现了需求的前两步，那么后面的两步怎么做呢？</p><p>请查看我们下一节：<strong>组件之间的关系与组件之间的通讯</strong></p><h3 id="_6-组件之间的关系与通讯" tabindex="-1"><a class="header-anchor" href="#_6-组件之间的关系与通讯" aria-hidden="true">#</a> <mark>6）组件之间的关系与通讯</mark></h3><h4 id="_1、场景-4" tabindex="-1"><a class="header-anchor" href="#_1、场景-4" aria-hidden="true">#</a> <mark>1、场景</mark></h4><blockquote><ol><li>监听用户选中项的变化</li><li>获取用户选中的数据的 <code>id</code></li><li>把 <code>id</code> 传递给 <code>list</code> 组件</li><li><code>list</code> 组件根据接收到的 <code>id</code> 获取对应的数据</li></ol></blockquote><p>在上一节中，我们实现了前面两步，但是接下来当我们想要把 <code>id</code> 传递给 <code>list</code> 组件的时候，却遇到了一些问题。我们不知道如何才能 <strong>在一个组件中把数据传递给另外一个组件</strong> ，那么这一小节我们就来去解决这个问题。</p><h4 id="_2、问题-3" tabindex="-1"><a class="header-anchor" href="#_2、问题-3" aria-hidden="true">#</a> <mark>2、问题</mark></h4><blockquote><ol><li>组件之间数据传递的关系可以分为哪几种？ -&gt; 组件之间进行数据传递，可以分为哪几种传递的形式</li><li>兄弟组件之间传递数据的方式是什么？</li></ol></blockquote><h4 id="_3、内容-3" tabindex="-1"><a class="header-anchor" href="#_3、内容-3" aria-hidden="true">#</a> <mark>3、内容</mark></h4><blockquote><p>分为两块来讲</p></blockquote><p>💡：组件之间的关系</p><p>组件之间的关系和 <code>html</code> 标签之间的关系其实是相同的：</p><blockquote><p><code>html</code>标签 -&gt; 父标签和子标签，就是父子关系 -&gt; 同级标签就是兄弟关系 -&gt; 同理，组件也是如此</p></blockquote><ol><li><p>父子关系</p><p><img src="'+m+'" alt="父子关系"></p></li><li><p>兄弟关系</p><p><img src="'+k+'" alt="兄弟关系"></p></li></ol><p>💡：不同关系之间的传递数据方式</p><p>我们已经知道了组件之间的关系分为两大类 -&gt; 一个叫父子，一个叫兄弟</p><p>我们去分析组件之间的数据传递的时候，也会根据这两大类去进行一个分析</p><hr><p>首先是父子关系</p><p>对于父子关系，它的数据传递形式可以分成两种：</p><ol><li>父向子传参</li><li>子向父传参</li></ol><p>在小程序中，我们想要实现父组件向子组件里边传递数据，我们可以分成两步去完成：</p><ol><li>在子组件里边进行操作：通过 <code>properties</code> 声明要从父组件中接收的数据</li><li>在父组件里边进行操作：通过自定义属性的形式传递数据，以子组件中定义的 <code>key</code> 为属性名，以要传递的数据为属性值</li></ol><p><img src="'+h+'" alt="父向子传参"></p><p>实现子向父传参，同样也是分成了两个大步：</p><ol><li>在子组件里边做一些事情：小程序提供了一个<code>triggerEvent</code>方法，我们可以通过 <code>triggerEvent</code> 方法发送一个通知，通知父组件接收数据 <ol><li>方法的第一个参数为：通知名</li><li>方法的第二个参数为：要传递的数据</li></ol></li><li>在父组件里边做一些事情：通过 <code>bind</code> 监听子组件中发送的通知 <ol><li><code>bind</code> 后的内容为 子组件发送的通知名，表达式为接收到该通知时所触发的方法</li><li>方法被触发后可以通过 <code>e.detail</code> 的形式获取子组件传递过来的数据对象</li></ol></li></ol><p><img src="'+b+'" alt="子向父传参"></p><blockquote><p>可以不加<code>:</code> -&gt; <code>bindchange</code> -&gt; 不过，推荐加<code>:</code>，即<code>bind:change</code></p></blockquote><p>至此，我们已经明确了父向子传参和子向父传参这种形式。接下来，就来看第二个关系：兄弟关系</p><hr><p>其次是兄弟关系</p><p>想要搞明白兄弟组件之间传参，首选需要搞明白一点内容：那就是我们一直所说的兄弟关系到底指的是什么呢？</p><p>其实，所谓的兄弟关系：<strong>兄弟关系 === 没有关系</strong></p><p>兄弟关系或者兄弟组件只是为了方便称呼的一个叫法而已</p><p><img src="'+_+'" alt="兄弟关系"></p><p>所以想要完成兄弟组件之间的传参，就需要：<strong>为它们建立关系</strong></p><p>而建立关系说白了就是为了找到一个：<strong>和这两个组件都认识的 ”中间人“ 。</strong></p><p>这个中间人一般为：<strong>统一的父组件。</strong></p><blockquote><p>曹丕和曹植 -&gt; 谁认识他们俩兄弟？ -&gt; 他们的父亲——曹操</p><p>我们给元素之间说兄弟关系，其实根本就不同于现实生活中的兄弟、姐妹这种实际有关系的情况，两个元素处于同级的，实际上就是没有关系！</p></blockquote><p>而最后：兄弟组件之间想要传递数据，就需要利用 ”中间人进行传递“，也就是：</p><ol><li>【兄弟 A 组件】传递数据给 父组件（中间人）</li><li>父组件（中间人）再把数据传递给 【兄弟 B 组件】</li></ol><p>搞明白这一点之后，我们就可以来实现我们的代码了</p><hr><p>💡：第三步「把 <code>id</code> 传递给 <code>list</code> 组件」</p><p>这一步的实现逻辑：</p><p><img src="'+v+'" alt="实现逻辑"></p><p>子向父传参：</p><ol><li><code>tabs</code>组件 -&gt; <code>observers</code> -&gt; <code>active</code> -&gt; <code>triggerEvent</code>一个<code>change</code>通知，参数是<code>id</code></li><li><code>index.wxml</code> -&gt; <code>&lt;tabs bind:change=&quot;onTabChange&quot;&gt;&lt;/tabs&gt;</code></li><li><code>index.js</code> -&gt; 写<code>onTabChange</code>方法</li></ol><p><img src="'+q+'" alt="子向父传参"></p><p>父向子传参：</p><p><img src="'+f+'" alt="父向子传参"></p><p>💡：最后一步「<code>list</code> 组件根据接收到的 <code>id</code> 获取对应的数据」</p><ol><li>获取数据</li><li>渲染数据</li><li>写样式 -&gt; 让列表更好看 -&gt; 注意，垂直滚动列表时， tabs 是固定的，这个固定 tabs 的样式写法可以记住，一种固定形式！</li></ol><p><img src="'+x+'" alt="最后一步"></p><p>每次切换 tab，发起的数据请求：</p><p><img src="'+y+'" alt="请求"></p><p>实现的效果：</p><p><img src="'+w+'" alt="效果"></p><h4 id="_4、答案-3" tabindex="-1"><a class="header-anchor" href="#_4、答案-3" aria-hidden="true">#</a> <mark>4、答案</mark></h4><blockquote><ol><li>组件之间数据传递的关系可以分为哪几种？ -&gt; 三种 <ol><li>父向子传递数据</li><li>子向父传递数据</li><li>兄弟组件之间传递数据</li></ol></li><li>兄弟组件之间传递数据的方式是什么？ -&gt; 理解兄弟关系等于没有关系，让它们之间有关系，也就是产生联系，需要有一个中间人，也就是都认识它们的父组件 <ol><li>【兄弟 A 组件】传递数据给 父组件（中间人）</li><li>父组件（中间人）再把数据传递给 【兄弟 B 组件】</li></ol></li></ol></blockquote><h3 id="_7-组件的插槽" tabindex="-1"><a class="header-anchor" href="#_7-组件的插槽" aria-hidden="true">#</a> <mark>7）组件的插槽</mark></h3><h4 id="_1、场景-5" tabindex="-1"><a class="header-anchor" href="#_1、场景-5" aria-hidden="true">#</a> <mark>1、场景</mark></h4><p>整个案例还剩下最后一个功能：在列表的头部和尾部分别展示文本。</p><p><img src="'+D+'" alt="展示文本"></p><blockquote><p>list 组件的头部和尾部将来会展示一块内容，但是这块内容具体展示什么，在不同的页面中会不一样，比如 <code>logs</code> 页面，需要的是图片，而不是文本</p></blockquote><p>而这个功能我们有一个额外的要求：具体展示的文本和样式，我们需要在父组件中指定。</p><p>因为，组件可以进行复用，当 <code>list</code> 组件应用到 <code>index</code> 页面时，我们展示的文本和样式，并不一定为在其他页面时所想要展示的文本和样式。所以这个文本和样式不可以在 <code>list</code> 中写死。</p><p>那么要实现这个功能就需要使用到 <strong>插槽</strong> 的知识了。</p><h4 id="_2、问题-4" tabindex="-1"><a class="header-anchor" href="#_2、问题-4" aria-hidden="true">#</a> <mark>2、问题</mark></h4><blockquote><ol><li>什么时候需要使用组件的插槽？</li><li>小程序中如何定义多个插槽？</li></ol></blockquote><h4 id="_3、内容-4" tabindex="-1"><a class="header-anchor" href="#_3、内容-4" aria-hidden="true">#</a> <mark>3、内容</mark></h4><p>小程序里边提供了一个插槽的支持，通过插槽可以帮我们解决对应的问题 -&gt; 啥问题？ -&gt; 就是「头部」和「尾部」的内容不是固定的！</p><p>小程序里的插槽分成了两块知识点：</p><ol><li>定义插槽</li><li>使用插槽</li></ol><p>从「定义插槽」和「使用插槽」这两个维度来讲</p><p>💡：定义插槽</p><p>定义插槽又分为两块：</p><ol><li>定义单一插槽</li><li>定义多个插槽</li></ol><p>定义单一插槽：</p><blockquote><p>在 <strong>组件</strong> 中使用 <code>slot</code> 组件（小程序提供的）定义插槽。</p><p>我们定义了一个插槽，可这有啥用呢？（也就是插槽的作用） -&gt; 这表示：<strong>占据了这一块空间，等待父组件填充</strong>。 -&gt; 这块空间将来放啥内容，完全由父组件来决定</p></blockquote><p><img src="'+j+'" alt="定义单一插槽"></p><p>定义多个插槽：</p><blockquote><p>小程序默认只能定义一个插槽，如果要定义多个插槽，那么需要：<strong>在组件中指定 <code>options</code> 选项的 <code>multipleSlots</code> 选项为 <code>true</code></strong></p><p>然后通过 <code>slot</code> 的 <code>name</code> 属性为插槽命名。例如：<code>&lt;slot name=&quot;header&quot;&gt;&lt;/slot&gt;</code> -&gt; 因为有多个插槽，所以需要指定名字，以此来指定这个内容往哪个插槽里边填充内容</p></blockquote><p><img src="'+C+`" alt="定义多个插槽"></p><p>💡：使用插槽</p><p>同样，使用插槽也分为两块：</p><ol><li>使用单一插槽</li><li>使用多个插槽</li></ol><p>使用单一插槽：</p><p>在组件使用时，以 <code>innerHTML </code> 的形式插入内容：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>单一插槽插入的 DOM<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>使用多个插槽：</p><p>在组件使用时，以 <code>innerHTML </code> 的形式插入内容，以 <code>slot</code> 属性标记当前 <code>DOM</code> 插入到哪个插槽中：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>该元素将被插入到 name=header 的插槽中<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>该元素将被插入到 name=footer 的插槽中<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、答案-4" tabindex="-1"><a class="header-anchor" href="#_4、答案-4" aria-hidden="true">#</a> <mark>4、答案</mark></h4><blockquote><ol><li>什么时候需要使用插槽？ <ol><li>由 父组件 来指定 子组件 中某一部分展示的内容和样式时 -&gt; 此时你就应该想到「我要使用插槽的知识了」</li></ol></li><li>小程序中如何定义多个插槽？ <ol><li>到组件的<code>js</code>文件里边指定 <code>options</code> 的 <code>multipleSlots</code> 为 <code>true</code></li></ol></li></ol></blockquote><h3 id="_8-总结" tabindex="-1"><a class="header-anchor" href="#_8-总结" aria-hidden="true">#</a> <mark>8）总结</mark></h3><ol><li>组件化思想 -&gt; 没有开发经验，很难理解这个思想，不过这没关系，在后边 uniapp 项目之中，会频繁地给大家灌输组件化的思想内容 -&gt; 整个课程学完，这个组件化思想你也就懂了！</li><li>创建组件 -&gt; 放在<code>components</code>文件夹中，每个组件跟小程序页面一样，也是由四个文件组成的</li><li>组件的生命周期 -&gt; <code>attached</code> -&gt; 组件完全初始化完毕、进入页面节点树后。<strong>绝大多数初始化工作可以在这个时机进行</strong> -&gt; 比如在<code>tabs</code>中获取数据</li><li>数据监听器 <ol><li>数据监听器，在小程序里边是通过<code>observers</code>这个选项来定义的</li><li>定义出来的数据监听器，跟 Vue 中的<code>watch</code>所起的作用是一模一样的 -&gt; 都是用来监听数据的变化 -&gt; 数据变化后回去回调对应的一个函数</li></ol></li><li>组件之间的关系 <ol><li>大致分为两种：父子关系、兄弟关系</li><li>根据不同的关系，传递数据的方式也不一样 <ol><li>父子关系的传递数据的方式分为：父向子传递、子向父传递</li><li>兄弟组件之间的数据传递方式分为：需要找到「中间人」，一般就是兄弟组件统一的父组件</li></ol></li></ol></li><li>组件之间的通讯</li><li>组件的插槽 <ol><li>必须搞明白你应该在什么时候去使用插槽 -&gt; 搞明白这点，关于插槽的用法对你而言就不是一个难点了</li></ol></li></ol><p>以上的内容，就是整个第四章的所有内容了！</p>`,206),E=[B];function M(S,V){return n(),s("div",null,E)}const H=a(T,[["render",M],["__file","index.html.vue"]]);export{H as default};