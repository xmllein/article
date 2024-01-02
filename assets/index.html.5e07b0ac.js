import{_ as e,r as o,o as c,c as l,a as n,b as s,d as t,e as p}from"./app.26c798e2.js";const i={},u=p('<h2 id="什么是状态管理" tabindex="-1"><a class="header-anchor" href="#什么是状态管理" aria-hidden="true">#</a> 什么是状态管理</h2><h3 id="状态" tabindex="-1"><a class="header-anchor" href="#状态" aria-hidden="true">#</a> 状态</h3><ul><li><p>状态是表示组件当前状况的 <code>JS</code> 对象。在 <code>React</code> 中，可以使用 <code>useState</code> 或者 <code>this.state</code> 维护组件内部状态，通过 <code>props</code> 传递给子组件使用。</p></li><li><p>为了避免状态传递过程中出现混乱，<code>React</code> 引入了“单向数据流”的理念。主要思想是组件不会改变接收的数据，只会监听数据的变化，当数据发生变化时他们会使用接收到的新值，而不是修改已有的值。当组件的更新机制触发后，他们只是使用新值进行重新渲染。</p></li><li><p>父子组件通信可以直接使用 <code>props</code> 和回调方式；深层次、远距离组件则要通过“状态提升”和 <code>props</code> 层层传递。</p></li></ul><h3 id="常见模式" tabindex="-1"><a class="header-anchor" href="#常见模式" aria-hidden="true">#</a> 常见模式</h3><ul><li><p>状态提升：兄弟组件间是没法直接共享状态的，可以通过将状态提升到最近的祖先组件中，所有兄弟组件就可以通过 <code>props</code> 一级级传递获取状态。</p></li><li><p>状态组合：某些状态可能只在应用程序的特定子树中需要。最好将状态存储在尽可能接近实际需要的位置，这有助于优化渲染行为，使 <code>React</code> 组件树变得更容易调试。</p></li><li><p>属性下钻：将父组件的状态以属性的形式一级级显示传递给嵌套子组件。</p></li><li><p><code>Provider</code>：<code>React Context</code> 通过 <code>Provider</code> 包裹组件，被包裹的所有嵌套子组件都可以不用通过属性下钻而是通过 <code>context</code> 直接获取状态。</p></li></ul><blockquote><p>层层传递的 value onChange 会对一个优质代码库带来的毁灭性影响，粗暴地把数据塞在 redux 中也并不能让一个应用得到很好的拓展性和可维护性。</p></blockquote><h3 id="要解决的问题" tabindex="-1"><a class="header-anchor" href="#要解决的问题" aria-hidden="true">#</a> 要解决的问题</h3><ul><li>从组件树的「任何地方」读取存储的状态</li><li>写入存储状态的能力</li><li>提供「优化渲染」的机制</li><li>提供「优化内存使用」的机制</li><li>与「并发模式的兼容性」</li><li>数据的「持久化」</li><li>「上下文丢失」问题</li><li>「props 失效」问题</li><li>「孤儿」问题</li></ul><h3 id="心智模型" tabindex="-1"><a class="header-anchor" href="#心智模型" aria-hidden="true">#</a> 心智模型</h3><ul><li>不可变状态模型</li><li>可变状态模型</li><li>主要好处是可以使用原生 JS 方法</li><li>基于 Proxy 的状态管理的一个缺点是状态不可预测，难以 debug</li></ul><blockquote><p>因为 React 没有官方的状态管理方案，React 生态中状态管理库，百花齐放，演进出很多设计思想和心智模式。如何选择状态管理库就变得十分令人抓狂。</p></blockquote><h2 id="react-context" tabindex="-1"><a class="header-anchor" href="#react-context" aria-hidden="true">#</a> React Context</h2><ul><li>React Context: 在多级嵌套组件场景下，使用“属性下钻”方式进行组件通信是一件成本极高的事情。为了解决这个问题，React 官方提供 Context 用于避免一级级属性传递。</li></ul><h3 id="context-的问题" tabindex="-1"><a class="header-anchor" href="#context-的问题" aria-hidden="true">#</a> context 的问题</h3><ul><li><p>Context 存在的问题也是老生常谈。在 <code> react </code> 里，<code>context </code> 是个反模式的东西，不同于  redux  等的细粒度响应式更新，<code>context</code> 的值一旦变化，所有依赖该 <code>context</code> 的组件全部都会  <code>force update</code>，因为  <code>context API  </code>并不能细粒度地分析某个组件依赖了 <code>context</code> 里的哪个属性，并且它可以穿透  <code>React.memo</code>  和  <code>shouldComponentUpdate </code> 的对比，把所有涉事组件强制刷新。</p></li><li><p><code>Context</code> 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言。这种对于一个组件树而言是“全局”的数据，往往会被多个组件所需要，但是使用 props 传递又会比较麻烦，这就是 <code>Context</code> 出现的背景。</p></li></ul><blockquote><p>综上，在系统中跟业务相关、会频繁变动的数据在共享时，应谨慎使用 <code>context</code>。</p></blockquote><blockquote><p>如果决定使用 <code>context</code>，可以在一些场景中，将多个子组件依赖的不同 <code>context</code>属性提升到一个父组件中，由父组件订阅 <code>context</code> 并以 prop 的方式下发，这样可以使用子组件的 memo、shouldComponentUpdate 生效。</p></blockquote>',17),r={href:"https://zh-hans.legacy.reactjs.org/docs/context.html#caveats",target:"_blank",rel:"noopener noreferrer"},k=p(`<h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ul><li>作为 React 内置的 hook，不需要引入第三方库。</li><li>书写还算方便。</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ul><li><code>Context</code> 只能存储单一值，当数据量大起来时，你可能需要使用<code>createContext</code>创建大量<code>context</code>。</li><li>直接使用的话，会有一定的性能问题：每一次对<code>state</code>的某个值变更，都会导致其他使用该 state 的组件<code>re-render</code>，即使没有使用该值。 你可以通过<code>useMemo</code>来解决这个问题，但是就需要一定的成本来定制一个通用的解决方案。</li><li>无法处理异步请求。对于异步的逻辑，<code>Context API</code>并没有提供任何 API，需要自己做封装。 无法处理数据间的联动。<code>Context API</code>并没有提供<code>API</code>来生成派生状态，同样也需要自行去封装一些方法来实现。</li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// hooks 方式</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> createContext<span class="token punctuation">,</span> useState<span class="token punctuation">,</span> useContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">const</span> CountContext <span class="token operator">=</span> <span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>CountContext<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">You clicked </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token plain-text"> times</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Click me</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CountContext.Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Counter</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">CountContext.Provider</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// class 方式</span>

<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> createContext<span class="token punctuation">,</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">const</span> CountContext <span class="token operator">=</span> <span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CountContext.Consumer</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">CountContext.Consumer</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">You clicked </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token plain-text"> times</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          Click me
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CountContext.Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Counter</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">CountContext.Provider</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-外部状态管理库" tabindex="-1"><a class="header-anchor" href="#react-外部状态管理库" aria-hidden="true">#</a> React 外部状态管理库</h2><ul><li><p><code>React</code> 的外部状态管理库一直以来是 <code>React</code> 生态中非常内卷的一个领域。目前比较常见的状态管理库有 <code>Redux</code>（包括基于 <code>Redux</code> 的 <code>Dva</code>、<code>Icestore</code>）、<code>Mobx</code>、<code>Zustand</code>、<code>Recoil</code>、<code>Jotai</code>、<code>Valtio</code>、<code>Hox</code> 等。</p></li><li><p><code>Redux</code>  作为  <code>React</code>  状态管理的老大哥，下载量上依然遥遥领先其他库。Mobx  作为往年热度仅次于  <code>Redux</code>  的状态管理库，位置正逐步有被  <code>zustand</code>  超越的趋势。<code>recoil/jotai/valtio </code>作为这两年热门的新兴库热度也在逐步上升。<code>hox</code>  则处于不温不火的尴尬地位。</p></li><li><p>以  <code>React v16.8</code>  版本为分水岭，状态管理库可分为  <code>Class</code>  时代和  Hooks  时代。<code>Class</code>  时代中 <code> Redux</code> 和  <code>Mobx</code>  都是非常优秀的状态库。随着  <code>Hooks</code>  时代的到来，状态管理的心智模型也逐步发生着演变。整体呈现从中心化到去中心化，从单一状态到原子状态，从  <code>Provider</code>  到拥抱  <code>Hooks</code>  等演变趋势。</p></li></ul><h2 id="class-时代" tabindex="-1"><a class="header-anchor" href="#class-时代" aria-hidden="true">#</a> class 时代</h2>`,9),d={id:"redux",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#redux","aria-hidden":"true"},"#",-1),m={href:"https://cn.redux.js.org/introduction/getting-started/",target:"_blank",rel:"noopener noreferrer"},b=p("<ul><li><p>Redux  的灵感来源于  Flux  架构和函数式编程原理，状态更新可预测、可跟踪，提倡使用「单一存储」。这通常会「导致将所有的东西存储在一个大的单体存储中」。将 UI 和远程实体状态之间的所有东西都放在一个地方管理，这变得非常难以管理。对性能造成了不小的压力。</p></li><li><p>单向数据流：Redux  应用中数据的生命周期遵循以下 4 个步骤：</p><ul><li>调用  <code>store.dispatch(action)</code>。</li><li>Redux  store 调用传入的 reducer 函数。</li><li>根 reducer 应该把多个子 reducer 输出合并成一个单一的 state 树。</li><li>Redux  store 保存了根 reducer 返回的完整 state 树。</li></ul></li></ul><blockquote><p>由此可看出 Redux 遵循“单向数据流”和“不可变状态模型”的设计思想。这使得 Redux 的状态变化是可预测、可调式的</p></blockquote>",2),y=p("<li><p>三大原则</p><ul><li>单一数据源：整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。</li><li>State 是只读的：唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。</li><li>使用纯函数来执行修改：为了描述 action 如何改变 state tree ，你需要编写 reducers。</li></ul></li><li><p>如何处理异步</p><ul><li><p>redux 没有规定如何处理异步数据流，最原始的方式就是使用 Action Creators，也就是在制造 action 之前进行各种的异步操作，你可以把要复用的操作抽离出来。</p></li><li><p>当然这样并不优雅，在实际项目中我们通常使用类似<code>redux-thunk</code>、<code>redux-saga</code>这些中间件来支持处理异步。</p></li></ul></li><li><p>如何处理数据间联动</p><ul><li><code>redux</code>  并没有提供派生状态的方法，需要自行封装。</li><li><code>react-redux </code>的 <code>useSelector</code> 获取状态后，你可以编写一些逻辑来处理派生状态。如果派生状态需要复用，记得给抽离出来。</li></ul></li>",3),g=p("<p>缺点</p><ul><li>陡峭的学习曲线。将副作用扔给中间件来处理，导致社区一堆中间件，学习成本陡然增加。比如处理异步请求的 <code>Redux-saga</code>、计算衍生状态的 reselect</li><li>大量的样板代码。每个 <code>action</code> 都需要编写一个 <code>action type</code>，每个 <code>reducer</code> 都需要编写一个 <code>switch case</code>，每个组件都需要编写 <code>mapStateToProps</code> 和 <code>mapDispatchToProps</code>，这些样板代码让人疲惫。</li><li>过于中心化。<code>Redux</code> 的 <code>store</code> 是全局唯一的，所有的状态都放在一个 <code>store</code> 中，这导致了 <code>Redux</code> 的状态管理是过于中心化的。当应用复杂度上升时，<code>Redux</code> 的 <code>store</code> 会变得越来越臃肿，这会导致性能问题。</li><li><code>reducer</code> 要返回新的对象，如果更新的值层级较深，更新成本也很高。</li><li>更多的内存占用，由于采用单一数据源，所有状态存储在一个 <code>state</code> 中，当某些状态不再需要使用时，也不会被垃圾回收释放内存。</li></ul>",2),f={href:"https://cn.redux.js.org/introduction/why-rtk-is-redux-today/",target:"_blank",rel:"noopener noreferrer"},h=p(`<ul><li>配置 <code>redux store</code> 过于麻烦</li><li>必须手动额外添加很多包才能正常使用 <code>redux</code></li><li><code>redux</code> 需要太多模板代码</li></ul><blockquote><p>不过，即使有 redux toolkit 的加持，redux 的学习成本依旧不低</p></blockquote><ul><li>代码示例</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// store.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span>
<span class="token keyword">import</span> reducer <span class="token keyword">from</span> <span class="token string">&#39;./reducer&#39;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store

<span class="token comment">// reducer.js</span>

<span class="token keyword">const</span> defaultState <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">inputValue</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> defaultState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;change_input_value&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newState <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">)</span>
    newState<span class="token punctuation">.</span>inputValue <span class="token operator">=</span> action<span class="token punctuation">.</span>value
    <span class="token keyword">return</span> newState
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;add_todo_item&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newState <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">)</span>
    newState<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newState<span class="token punctuation">.</span>inputValue<span class="token punctuation">)</span>
    newState<span class="token punctuation">.</span>inputValue <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">return</span> newState
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;delete_todo_item&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newState <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">)</span>
    newState<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> newState
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> state
<span class="token punctuation">}</span>

<span class="token comment">// TodoList.js</span>

<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">TodoList</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token comment">// 从 store 中获取数据</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handleInputChange <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleInputChange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handleStoreChange <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleStoreChange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handleBtnClick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleBtnClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token comment">// 订阅 store 的改变</span>
    store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleStoreChange<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>input
            value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>inputValue<span class="token punctuation">}</span>
            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleInputChange<span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleBtnClick<span class="token punctuation">}</span><span class="token operator">&gt;</span>提交<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
              <span class="token operator">&lt;</span>li
                key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span>
                onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleItemDelete</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">}</span>
              <span class="token operator">&gt;</span>
                <span class="token punctuation">{</span>item<span class="token punctuation">}</span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">handleInputChange</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;change_input_value&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span>
    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">handleStoreChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">handleBtnClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;add_todo_item&#39;</span>
    <span class="token punctuation">}</span>
    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">handleItemDelete</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;delete_todo_item&#39;</span><span class="token punctuation">,</span>
      index
    <span class="token punctuation">}</span>
    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> TodoList

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 使用 Redux Toolkit 重构</span>
<span class="token comment">// store/todoSlice.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createSlice <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@reduxjs/toolkit&#39;</span>

<span class="token keyword">const</span> todoSlice <span class="token operator">=</span> <span class="token function">createSlice</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;todo&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">initialState</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inputValue</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">reducers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">changeInputValue</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>inputValue <span class="token operator">=</span> action<span class="token punctuation">.</span>payload
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">addTodoItem</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>inputValue<span class="token punctuation">)</span>
      state<span class="token punctuation">.</span>inputValue <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">deleteTodoItem</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>payload<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token punctuation">{</span> changeInputValue<span class="token punctuation">,</span> addTodoItem<span class="token punctuation">,</span> deleteTodoItem <span class="token punctuation">}</span> <span class="token operator">=</span>
  todoSlice<span class="token punctuation">.</span>actions

<span class="token keyword">export</span> <span class="token keyword">default</span> todoSlice<span class="token punctuation">.</span>reducer

<span class="token comment">// store/index.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> configureStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@reduxjs/toolkit&#39;</span>

<span class="token keyword">import</span> todoReducer <span class="token keyword">from</span> <span class="token string">&#39;./todoSlice&#39;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">configureStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">reducer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    todoReducer
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store


<span class="token comment">// TodoList.js 类组件中使用</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  changeInputValue<span class="token punctuation">,</span>
  addTodoItem<span class="token punctuation">,</span>
  deleteTodoItem
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store/todoSlice&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">TodoList</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> inputValue<span class="token punctuation">,</span> list<span class="token punctuation">,</span> changeInputValue<span class="token punctuation">,</span> addTodoItem<span class="token punctuation">,</span> deleteTodoItem <span class="token punctuation">}</span> <span class="token operator">=</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>props
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>input value<span class="token operator">=</span><span class="token punctuation">{</span>inputValue<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>changeInputValue<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>addTodoItem<span class="token punctuation">}</span><span class="token operator">&gt;</span>提交<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
          <span class="token punctuation">{</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
              <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">deleteTodoItem</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
                <span class="token punctuation">{</span>item<span class="token punctuation">}</span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inputValue</span><span class="token operator">:</span> state<span class="token punctuation">.</span>todoReducer<span class="token punctuation">.</span>inputValue<span class="token punctuation">,</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> state<span class="token punctuation">.</span>todoReducer<span class="token punctuation">.</span>list
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">mapDispatchToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function">changeInputValue</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">changeInputValue</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">addTodoItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">addTodoItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">deleteTodoItem</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">deleteTodoItem</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>TodoList<span class="token punctuation">)</span>


<span class="token comment">// 函数式组件使用 Redux Toolkit</span>

<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useSelector<span class="token punctuation">,</span> useDispatch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  changeInputValue<span class="token punctuation">,</span>
  addTodoItem<span class="token punctuation">,</span>
  deleteTodoItem
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store/todoSlice&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">TodoList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> inputValue <span class="token operator">=</span> <span class="token function">useSelector</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>todoReducer<span class="token punctuation">.</span>inputValue<span class="token punctuation">)</span>
  <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token function">useSelector</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>todoReducer<span class="token punctuation">.</span>list<span class="token punctuation">)</span>
  <span class="token keyword">const</span> dispatch <span class="token operator">=</span> <span class="token function">useDispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>input
          value<span class="token operator">=</span><span class="token punctuation">{</span>inputValue<span class="token punctuation">}</span>
          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">changeInputValue</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">addTodoItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>提交<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">deleteTodoItem</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
              <span class="token punctuation">{</span>item<span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> TodoList

<span class="token comment">// 与 typescript 结合使用</span>
<span class="token comment">// store/todoSlice.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> createSlice<span class="token punctuation">,</span> PayloadAction<span class="token punctuation">,</span>createAsyncThunk  <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@reduxjs/toolkit&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">TodoState</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">inputValue</span><span class="token operator">:</span> string
  <span class="token literal-property property">list</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>


<span class="token comment">// 异步</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> fetchUsers <span class="token operator">=</span> <span class="token function">createAsyncThunk</span><span class="token punctuation">(</span>
  <span class="token string">&#39;users/fetchUsers&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">userId<span class="token punctuation">,</span> thunkAPI</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> userAPI<span class="token punctuation">.</span><span class="token function">fetchById</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span>
    <span class="token keyword">return</span> response<span class="token punctuation">.</span>data
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> todoSlice <span class="token operator">=</span> <span class="token function">createSlice</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;todo&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">initialState</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inputValue</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span> <span class="token keyword">as</span> TodoState<span class="token punctuation">,</span>
  <span class="token literal-property property">reducers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">changeInputValue</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> <span class="token literal-property property">action</span><span class="token operator">:</span> PayloadAction<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>inputValue <span class="token operator">=</span> action<span class="token punctuation">.</span>payload
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">addTodoItem</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>inputValue<span class="token punctuation">)</span>
      state<span class="token punctuation">.</span>inputValue <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">deleteTodoItem</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> <span class="token literal-property property">action</span><span class="token operator">:</span> PayloadAction<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>payload<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token literal-property property">extraReducers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Add reducers for additional action types here, and handle loading state as needed</span>
     builder<span class="token punctuation">.</span><span class="token function">addCase</span><span class="token punctuation">(</span>fetchUsers<span class="token punctuation">.</span>pending<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
       state<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">&#39;loading&#39;</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    builder<span class="token punctuation">.</span><span class="token function">addCase</span><span class="token punctuation">(</span>fetchUsers<span class="token punctuation">.</span>fulfilled<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">&#39;idle&#39;</span>
        <span class="token comment">// Add any fetched posts to the array</span>
        state<span class="token punctuation">.</span>list <span class="token operator">=</span> action<span class="token punctuation">.</span>payload
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    builder<span class="token punctuation">.</span><span class="token function">addCase</span><span class="token punctuation">(</span>fetchUsers<span class="token punctuation">.</span>rejected<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">&#39;failed&#39;</span>
        state<span class="token punctuation">.</span>error <span class="token operator">=</span> action<span class="token punctuation">.</span>error<span class="token punctuation">.</span>message
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token punctuation">{</span> changeInputValue<span class="token punctuation">,</span> addTodoItem<span class="token punctuation">,</span> deleteTodoItem <span class="token punctuation">}</span> <span class="token operator">=</span>
  todoSlice<span class="token punctuation">.</span>actions

<span class="token keyword">export</span> <span class="token keyword">default</span> todoSlice<span class="token punctuation">.</span>reducer

<span class="token comment">// store/index.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> configureStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@reduxjs/toolkit&#39;</span>

<span class="token keyword">import</span> todoReducer <span class="token keyword">from</span> <span class="token string">&#39;./todoSlice&#39;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">configureStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">reducer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    todoReducer
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store

<span class="token comment">// TodoList.tsx</span>

<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useSelector<span class="token punctuation">,</span> useDispatch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  changeInputValue<span class="token punctuation">,</span>
  addTodoItem<span class="token punctuation">,</span>
  deleteTodoItem<span class="token punctuation">,</span>
  fetchUsers
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store/todoSlice&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">TodoList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> inputValue <span class="token operator">=</span> <span class="token function">useSelector</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>todoReducer<span class="token punctuation">.</span>inputValue<span class="token punctuation">)</span>
  <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token function">useSelector</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>todoReducer<span class="token punctuation">.</span>list<span class="token punctuation">)</span>
  <span class="token keyword">const</span> dispatch <span class="token operator">=</span> <span class="token function">useDispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">fetchUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>dispatch<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>input
          value<span class="token operator">=</span><span class="token punctuation">{</span>inputValue<span class="token punctuation">}</span>
          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">changeInputValue</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">addTodoItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>提交<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">deleteTodoItem</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
              <span class="token punctuation">{</span>item<span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> TodoList

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),w={id:"dva",tabindex:"-1"},x=n("a",{class:"header-anchor",href:"#dva","aria-hidden":"true"},"#",-1),C={href:"https://dvajs.com/",target:"_blank",rel:"noopener noreferrer"},_=p("<ul><li><p><code>dva</code> 首先是一个基于 <code>redux</code> 和 <code>redux-saga</code> 的数据流方案，然后为了简化开发体验，<code>dva</code> 还额外内置了 <code>react-router</code> 和 <code>fetch</code>，所以也可以理解为一个轻量级的应用框架。</p></li><li><p>Dva 的特点:</p><ul><li>易学易用，仅有 6 个 api，对 <code>redux</code> 开发者尤其友好，配合 umi 使用后更是降低为 0 api。</li><li>elm 概念，通过 <code>reducers</code>, <code>effects</code> 和 <code>subscriptions</code> 组织 <code>model</code>。</li><li>插件机制，比如 <code>dva-loading</code> 可以自动处理 <code>loading</code> 状态，不用一遍遍地写 <code>showLoading</code> 和 <code>hideLoading</code>。</li><li>支持 <code>HMR</code>，基于 <code>babel-plugin-dva-hmr</code> 实现 <code>components</code>、<code>routes</code> 和 <code>models</code> 的 <code>HMR</code>。</li></ul></li></ul><blockquote><p>Dva 大幅降低了 <code>Redux</code> 的上手成本，过去也在社区拥有了拥趸，github star 数 16.1k。不过，从 2019.11 开始就没有新的版本发布，看起来已经处于不维护状态。</p></blockquote>",2),R={href:"https://umijs.org/zh-CN/docs",target:"_blank",rel:"noopener noreferrer"},S=n("li",null,[n("p",null,"代码示例")],-1),I=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/models/todo.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespace</span><span class="token operator">:</span> <span class="token string">&#39;todo&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inputValue</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">reducers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">changeInputValue</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>state<span class="token punctuation">,</span>
        <span class="token literal-property property">inputValue</span><span class="token operator">:</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">addTodoItem</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>state<span class="token punctuation">,</span>
        <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">.</span>list<span class="token punctuation">,</span> state<span class="token punctuation">.</span>inputValue<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">inputValue</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">deleteTodoItem</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">.</span>list<span class="token punctuation">]</span>
      list<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>payload<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>state<span class="token punctuation">,</span>
        list<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">effects</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 用于处理异步逻辑</span>
    <span class="token operator">*</span><span class="token function">asyncAddTodoItem</span><span class="token punctuation">(</span><span class="token parameter">action<span class="token punctuation">,</span> <span class="token punctuation">{</span> put<span class="token punctuation">,</span> call <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span>delay<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
      <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;addTodoItem&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token parameter">timeout</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> timeout<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token comment">// src/pages/todo.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;dva&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">TodoList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> inputValue<span class="token punctuation">,</span> list<span class="token punctuation">,</span> dispatch <span class="token punctuation">}</span> <span class="token operator">=</span> props

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>input
          value<span class="token operator">=</span><span class="token punctuation">{</span>inputValue<span class="token punctuation">}</span>
          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
            <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;todo/changeInputValue&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;todo/addTodoItem&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
          提交
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>li
              key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span>
              onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;todo/deleteTodoItem&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> index <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
            <span class="token operator">&gt;</span>
              <span class="token punctuation">{</span>item<span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inputValue</span><span class="token operator">:</span> state<span class="token punctuation">.</span>todo<span class="token punctuation">.</span>inputValue<span class="token punctuation">,</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> state<span class="token punctuation">.</span>todo<span class="token punctuation">.</span>list<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>TodoList<span class="token punctuation">)</span>


<span class="token comment">// src/pages/index.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> TodoList <span class="token keyword">from</span> <span class="token string">&#39;./todo&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">IndexPage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>TodoList <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> IndexPage

<span class="token comment">// class 组件中使用</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;dva&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">TodoList</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> inputValue<span class="token punctuation">,</span> list<span class="token punctuation">,</span> dispatch <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>input
            value<span class="token operator">=</span><span class="token punctuation">{</span>inputValue<span class="token punctuation">}</span>
            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
              <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;todo/changeInputValue&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;todo/addTodoItem&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
            提交
          <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
          <span class="token punctuation">{</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
              <span class="token operator">&lt;</span>li
                key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span>
                onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
                  <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;todo/deleteTodoItem&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> index <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
              <span class="token operator">&gt;</span>
                <span class="token punctuation">{</span>item<span class="token punctuation">}</span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inputValue</span><span class="token operator">:</span> state<span class="token punctuation">.</span>todo<span class="token punctuation">.</span>inputValue<span class="token punctuation">,</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> state<span class="token punctuation">.</span>todo<span class="token punctuation">.</span>list<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>TodoList<span class="token punctuation">)</span>


<span class="token comment">// 与 typescript 结合使用</span>
<span class="token comment">// src/models/todo.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> delay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/utils&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">TodoState</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">inputValue</span><span class="token operator">:</span> string
  <span class="token literal-property property">list</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">TodoModelType</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespace</span><span class="token operator">:</span> <span class="token string">&#39;todo&#39;</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> TodoState
  <span class="token literal-property property">reducers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">changeInputValue</span><span class="token operator">:</span> Reducer<span class="token operator">&lt;</span>TodoState<span class="token operator">&gt;</span>
    <span class="token literal-property property">addTodoItem</span><span class="token operator">:</span> Reducer<span class="token operator">&lt;</span>TodoState<span class="token operator">&gt;</span>
    <span class="token literal-property property">deleteTodoItem</span><span class="token operator">:</span> Reducer<span class="token operator">&lt;</span>TodoState<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
  <span class="token literal-property property">effects</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">asyncAddTodoItem</span><span class="token operator">:</span> Effect
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">TodoModel</span><span class="token operator">:</span> TodoModelType <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespace</span><span class="token operator">:</span> <span class="token string">&#39;todo&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inputValue</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">reducers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">changeInputValue</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>state<span class="token punctuation">,</span>
        <span class="token literal-property property">inputValue</span><span class="token operator">:</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">addTodoItem</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>state<span class="token punctuation">,</span>
        <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">.</span>list<span class="token punctuation">,</span> state<span class="token punctuation">.</span>inputValue<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">inputValue</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">deleteTodoItem</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">.</span>list<span class="token punctuation">]</span>
      list<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>payload<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>state<span class="token punctuation">,</span>
        list<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">effects</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 用于处理异步逻辑</span>
    <span class="token operator">*</span><span class="token function">asyncAddTodoItem</span><span class="token punctuation">(</span><span class="token parameter">action<span class="token punctuation">,</span> <span class="token punctuation">{</span> put<span class="token punctuation">,</span> call <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span>delay<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
      <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;addTodoItem&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>



<span class="token comment">// src/pages/todo.tsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> connect<span class="token punctuation">,</span> DispatchProp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;dva&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ConnectState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/models/connect&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">TodoListProps</span> <span class="token keyword">extends</span> <span class="token class-name">DispatchProp</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">inputValue</span><span class="token operator">:</span> string
  <span class="token literal-property property">list</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">TodoList</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>TodoListProps<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> inputValue<span class="token punctuation">,</span> list<span class="token punctuation">,</span> dispatch <span class="token punctuation">}</span> <span class="token operator">=</span> props

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>input
          value<span class="token operator">=</span><span class="token punctuation">{</span>inputValue<span class="token punctuation">}</span>
          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
            <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;todo/changeInputValue&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;todo/addTodoItem&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
          提交
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>li
              key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span>
              onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;todo/deleteTodoItem&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> index <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
            <span class="token operator">&gt;</span>
              <span class="token punctuation">{</span>item<span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),T={id:"icestore",tabindex:"-1"},j=n("a",{class:"header-anchor",href:"#icestore","aria-hidden":"true"},"#",-1),V={href:"https://github.com/ice-lab/icestore",target:"_blank",rel:"noopener noreferrer"},P=p(`<ul><li><p>icestore 是 IceJs 内置状态管理库。icestore 是面向 React 应用的、简单友好的状态管理方案。</p></li><li><p>特点：</p><ul><li>简单、熟悉的 API：不需要额外的学习成本，只需要了解 React Hooks，对 Redux 用户友好。</li><li>集成异步处理：记录异步操作时的执行状态，简化视图中对于等待或错误的处理逻辑。</li><li>支持组件 Class 写法：友好的兼容策略可以让老项目享受轻量状态管理的乐趣。</li><li>良好的 TypeScript 支持：提供完整的 TypeScript 类型定义，在 VS Code 中能获得完整的类型检查和推断。</li></ul></li></ul><blockquote><p>icestore  的灵感来自于  rematch 和  constate。整体实现和  rematch  基本一致。rematch  是一个没有模板代码的  redux  最佳实践。icestore  整体配置简单，解决了  redux  学习成本高、大量模板代码等问题，同时又很好的支持了异步处理、TypeScript  和  SSR</p></blockquote><ul><li>代码示例</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> createModel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@ice/store&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">delay</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 1️⃣ 使用模型定义你的状态</span>
<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token function">createModel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">reducers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">prevState</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> prevState <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token function-variable function">decrement</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">prevState</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> prevState <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">effects</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">asyncDecrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> models <span class="token operator">=</span> <span class="token punctuation">{</span>
  counter<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2️⃣ 创建 Store</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>models<span class="token punctuation">)</span>

<span class="token comment">// 3️⃣ 消费模型</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> useModel <span class="token punctuation">}</span> <span class="token operator">=</span> store
<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> dispatchers<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useModel</span><span class="token punctuation">(</span><span class="token string">&#39;counter&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> increment<span class="token punctuation">,</span> asyncDecrement <span class="token punctuation">}</span> <span class="token operator">=</span> dispatchers
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">&#39;button&#39;</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>increment<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">+</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">&#39;button&#39;</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>asyncDecrement<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">-</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 4️⃣ 绑定视图</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token operator">=</span> store
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Provider<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Counter <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> rootElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> rootElement<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),M={id:"mobx",tabindex:"-1"},A=n("a",{class:"header-anchor",href:"#mobx","aria-hidden":"true"},"#",-1),D={href:"https://zh.mobx.js.org/react-integration.html",target:"_blank",rel:"noopener noreferrer"},q=p(`<ul><li><p>设计思想</p><ul><li>MobX 的主要思想是用「函数响应式编程」和「可变状态模型」使得状态管理变得简单和可扩展。</li><li>MobX 背后的哲学很简单: <ul><li>任何源自应用状态的东西都应该自动地获得。其中包括 UI、数据序列化、服务器通讯，等等。</li></ul></li><li>React 和 MobX 是一对强力组合。React 通过提供机制把应用状态转换为可渲染组件树并对其进行渲染。而 MobX 提供机制来存储和更新应用状态供 React 使用。</li><li>对于应用开发中的常见问题，React  和  MobX  都提供了最优和独特的解决方案。React  提供了优化 UI 渲染的机制，  这种机制就是通过使用虚拟 DOM 来减少昂贵的 DOM 变化的数量。MobX  提供了优化应用状态与  React  组件同步的机制，这种机制就是使用响应式虚拟依赖状态图表，它只有在真正需要的时候才更新并且永远保持是最新的。</li></ul></li><li><p>心智模型</p><ul><li>Mobx 的心智模型和 react 很像，它区分了应用程序的三个概： <ul><li>状态（state）：任何影响应用程序的东西都可以被认为是状态。状态可以是简单的原始值，也可以是复杂的对象和数组。</li><li>动作 (actions)：动作是改变状态的任何东西。它们是纯函数，不能有副作用。</li><li>派生 (derivation)：派生是从状态和动作中衍生出的任何东西。它们是自动更新的，因此可以保持最新。</li></ul></li></ul><blockquote><p>Mobx 虽然心智模型像 react，但是实现却是完完全全的 vue：mutable + proxy（为了兼容性，proxy 实际上使用 Object.defineProperty 实现）。所以，Mobx 本质上就是一个更繁琐的 Vue。</p></blockquote></li></ul><blockquote><p>尤大本人也盖过章：React + MobX 本质上就是一个更繁琐的 Vue</p></blockquote><ul><li>代码示例</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> observable<span class="token punctuation">,</span> action <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mobx&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">Store</span> <span class="token punctuation">{</span>
  <span class="token comment">//@observable： 将普通的数据属性转换成可观察的属性</span>
  @observable count <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token comment">// @action: 将普通的方法转换成可以修改状态的行为</span>
  @action<span class="token punctuation">.</span>bound
  <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  @action<span class="token punctuation">.</span>bound
  <span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">--</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// @computed: 将普通的 getter 方法转换成可以动态获取数据的属性</span>
  @computed
  <span class="token keyword">get</span> <span class="token function">doubleCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">*</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//  异步 action 通过 async/await 来实现</span>
  @action<span class="token punctuation">.</span>bound
  <span class="token keyword">async</span> <span class="token function">asyncDecrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 通过 autorun 来实现</span>
  <span class="token comment">// autorun: 在被其观察的任意一个值发生改变时重新执行一个函数。</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">autorun</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 通过 reaction 来实现</span>
  <span class="token comment">// reaction: 在所选的任一数据发生改变时重新执行一个副作用。</span>
  <span class="token comment">// constructor() {</span>
  <span class="token comment">//   reaction(</span>
  <span class="token comment">//     () =&gt; this.count,</span>
  <span class="token comment">//     (count) =&gt; {</span>
  <span class="token comment">//       console.log(count)</span>
  <span class="token comment">//     }</span>
  <span class="token comment">//   )</span>
  <span class="token comment">// }</span>

  <span class="token comment">// 通过 when 来实现</span>
  <span class="token comment">// when: 一旦一个 observable 条件为真就立即执行一次副作用函数。</span>
  <span class="token comment">// constructor() {</span>
  <span class="token comment">//   when(</span>
  <span class="token comment">//     () =&gt; this.count &gt; 10,</span>
  <span class="token comment">//     () =&gt; {</span>
  <span class="token comment">//       console.log(&#39;count &gt; 10&#39;)</span>
  <span class="token comment">//     }</span>
  <span class="token comment">//   )</span>
  <span class="token comment">// }</span>

  <span class="token comment">// 通过 flow 来实现</span>
  <span class="token comment">// flow: 对 MobX 友好的 async/await 替代品，支持取消。</span>
  <span class="token comment">// @flow</span>
  <span class="token comment">// *asyncDecrement() {</span>
  <span class="token comment">//   yield delay(1000)</span>
  <span class="token comment">//   this.decrement()</span>
  <span class="token comment">// }</span>

  <span class="token comment">// 通过 transaction 来实现</span>
  <span class="token comment">// transaction: Transaction 是底层 API。推荐改用 action 或 runInAction。</span>
  <span class="token comment">// @action.bound</span>
  <span class="token comment">// async asyncDecrement() {</span>
  <span class="token comment">//   await delay(1000)</span>
  <span class="token comment">//   this.decrement()</span>
  <span class="token comment">// }</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Store</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span>store<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">&#39;button&#39;</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">.</span>increment<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">+</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">&#39;button&#39;</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">.</span>decrement<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">-</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> rootElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Counter <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> rootElement<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mobx vs redux</li></ul><p>Mobx 和 Redux 的对比，实际上可以归结为 面向对象 vs 函数式和 Mutable vs Immutable。</p><ul><li><p>相比于 <code>redux</code> 的广播遍历 <code>dispatch</code>，然后遍历判断引用来决定组件是否更新，mobx 基于 proxy 可以精确收集依赖、局部更新组件（类似 vue），理论上会有更好的性能，但 redux 认为这可能不是一个问题。</p></li><li><p>Mobx 因为数据只有一份引用，没有回溯能力，不像 <code>redux</code> 每次更新都相当于打了一个快照，调试时搭配 <code>redux-logger</code> 这样的中间件，可以很直观地看到数据流变化历史。</p></li><li><p><code>Mobx</code> 的学习成本更低，没有全家桶。</p></li><li><p><code>Mobx</code> 在更新 state 中深层嵌套属性时更方便，直接赋值就好了，<code>redux</code> 则需要更新所有途经层级的引用（当然搭配 <code>immer</code> 也不麻烦）。</p></li><li><p>优点</p><ul><li>代码量少，学习成本低</li><li>代码结构简单，易于维护</li></ul></li><li><p>缺点</p><ul><li>依赖装饰器，需要额外配置 babel。</li><li>难以调试。由于采用可变状态模型，状态不可预测和追溯，难以 debug。</li><li>由于 Mobx 采用可变状态模型，所以需要额外的工具来保证状态的不可变性，比如使用 <code>mobx-state-tree</code>。</li><li>响应式是基于 Proxy 实现的，希望传递的是一个数组，拿到的却是一个 Proxy。排查问题时有点痛苦。</li></ul></li></ul><h2 id="hooks-时代" tabindex="-1"><a class="header-anchor" href="#hooks-时代" aria-hidden="true">#</a> hooks 时代</h2>`,8),L={id:"recoil",tabindex:"-1"},E=n("a",{class:"header-anchor",href:"#recoil","aria-hidden":"true"},"#",-1),z={href:"https://recoiljs.org/zh-hans/",target:"_blank",rel:"noopener noreferrer"},U=p(`<ul><li><p>简介</p><ul><li><p>Recoil 是在 React Europe 2020 Conference 上 facebook 官方推出的专为 react 打造的状态管理库，动机是解决 react 状态共享模式的局限性。</p><ul><li>以往只能将 state 提升到公共祖先来实现状态共享，并且一旦这么做了，基本就无法将组件树的顶层（state 必须存在的地方）与叶子组件 (使用 state 的地方) 进行代码分割。</li><li>Context 只能存储单一值，无法存储多个各自拥有消费者的值的集合。</li></ul></li></ul></li><li><p>设计思想</p><ul><li>Recoil 的状态集是一个有向图 (directed graph)，正交且天然连结于 React 组件树。状态的变化从该图的顶点（atom）开始，流经纯函数 (selector) 再传入组件。</li><li>Recoil 定义了一个有向图 (directed graph)，正交同时又天然连结于你的 React 树上。状态的变化从该图的顶点（我们称之为 atom）开始，流经纯函数 (我们称之为 selector) 再传入组件。基于这样的实现。 <ul><li>atom 是状态的基本单位，它是一个可读写的状态容器，可以被任意组件订阅，当 atom 的值发生变化时，所有订阅该 atom 的组件都会被触发重新渲染。</li><li>selector 是一个纯函数，它接收一个或多个 atom 作为输入，返回一个新的状态。selector 可以被其他 selector 订阅，当它的输入 atom 发生变化时，selector 会被重新计算，然后触发订阅它的组件重新渲染。</li><li>selectorFamily 是一个函数，它接收一个函数作为参数，返回一个 selector。selectorFamily 可以根据传入的参数动态生成 selector，这样就可以根据参数的不同来订阅不同的 selector。</li></ul></li></ul></li></ul><blockquote><p>正交：相互独立，相互间不可替代，并且可以组合起来实现其它功能 Recoil 每一次状态变更都会生成一个不可变的快照，利用这个特性，可以快速实现应用导航相关的功能，例如状态回溯、跳转等。</p></blockquote><ul><li>代码示例</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> atom<span class="token punctuation">,</span> selector<span class="token punctuation">,</span> useRecoilState<span class="token punctuation">,</span> useRecoilValue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;recoil&#39;</span>

<span class="token keyword">const</span> textState <span class="token operator">=</span> <span class="token function">atom</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;textState&#39;</span><span class="token punctuation">,</span> <span class="token comment">// unique ID (with respect to other atoms/selectors)</span>
  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// default value (aka initial value)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> charCountState <span class="token operator">=</span> <span class="token function">selector</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;charCountState&#39;</span><span class="token punctuation">,</span> <span class="token comment">// unique ID (with respect to other atoms/selectors)</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> get <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token function">get</span><span class="token punctuation">(</span>textState<span class="token punctuation">)</span>

    <span class="token keyword">return</span> text<span class="token punctuation">.</span>length
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">CharacterCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>text<span class="token punctuation">,</span> setText<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useRecoilState</span><span class="token punctuation">(</span>textState<span class="token punctuation">)</span>
  <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">useRecoilValue</span><span class="token punctuation">(</span>charCountState<span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setText</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&#39;text&#39;</span> value<span class="token operator">=</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token literal-property property">Echo</span><span class="token operator">:</span> <span class="token punctuation">{</span>text<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">&gt;</span>
      Character Count<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> CharacterCount

<span class="token comment">// 与 typescript 结合使用</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> atom<span class="token punctuation">,</span> selector<span class="token punctuation">,</span> useRecoilState<span class="token punctuation">,</span> useRecoilValue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;recoil&#39;</span>

<span class="token keyword">const</span> textState <span class="token operator">=</span>
  atom <span class="token operator">&lt;</span>
  string <span class="token operator">&gt;</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;textState&#39;</span><span class="token punctuation">,</span> <span class="token comment">// unique ID (with respect to other atoms/selectors)</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// default value (aka initial value)</span>
  <span class="token punctuation">}</span>

<span class="token keyword">const</span> charCountState <span class="token operator">=</span> <span class="token function">selector</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;charCountState&#39;</span><span class="token punctuation">,</span> <span class="token comment">// unique ID (with respect to other atoms/selectors)</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> get <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token function">get</span><span class="token punctuation">(</span>textState<span class="token punctuation">)</span>

    <span class="token keyword">return</span> text<span class="token punctuation">.</span>length
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token literal-property property">CharacterCount</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>text<span class="token punctuation">,</span> setText<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useRecoilState</span><span class="token punctuation">(</span>textState<span class="token punctuation">)</span>
  <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">useRecoilValue</span><span class="token punctuation">(</span>charCountState<span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ChangeEvent<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setText</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&#39;text&#39;</span> value<span class="token operator">=</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token literal-property property">Echo</span><span class="token operator">:</span> <span class="token punctuation">{</span>text<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">&gt;</span>
      Character Count<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),H={id:"jotai",tabindex:"-1"},O=n("a",{class:"header-anchor",href:"#jotai","aria-hidden":"true"},"#",-1),J={href:"https://github.com/pmndrs/jotai",target:"_blank",rel:"noopener noreferrer"},N=p(`<ul><li><p>简介</p><ul><li>Jotai 是由 pmndrs 团队开发的状态管理库，它的设计思想与 Recoil 类似，都是基于原子（atom）和选择器（selector）的状态管理模式，但是 Jotai 的实现更加简单，代码量更少，而且不依赖 Context，所以性能更好。</li><li>jotai  是一个小型全局状态管理库，它模仿了  useState、useReducer。jotai  有个叫做  atom  的概念，用于表示小的状态片段。和  zustand  不同的是，他是一个组件级别的状态管理库。和  zustand  相同的是同样都基于不可变状态模型。</li><li>jotai 是 Context 和订阅机制的结合，是面向 React 的一种全局状态管理库。如果你的需求是一个没有额外重复渲染的 Context，那 jotai 是个不错的选择。</li></ul></li><li><p>特点：</p><ul><li>语法简单</li><li>性能好</li><li>jotai 的状态不是全局状态</li></ul></li><li><p>atom  可以在  React  组件的生命周期里创建和销毁。这通过多个  Context  是无法实现的，因为使用  Context  增加一个新的  state  意味着增加一个新的  Provider  组件，如果新增一个组件，它所有的子组件都会被重新挂载，会失去所有状态。</p></li><li><p>推荐场景：组件为中心的应用，不需要全局状态，但是需要共享状态。</p></li><li><p>代码示例</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> atom<span class="token punctuation">,</span> useAtom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;jotai&#39;</span>

<span class="token keyword">const</span> countAtom <span class="token operator">=</span> <span class="token function">atom</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useAtom</span><span class="token punctuation">(</span>countAtom<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>count<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> c <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>increment<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Counter

<span class="token comment">// 与 typescript 结合使用</span>

<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> atom<span class="token punctuation">,</span> useAtom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;jotai&#39;</span>

<span class="token keyword">const</span> countAtom <span class="token operator">=</span> atom <span class="token operator">&lt;</span> number <span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token literal-property property">Counter</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useAtom</span><span class="token punctuation">(</span>countAtom<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>count<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> c <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>increment<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Counter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),B={id:"zustand",tabindex:"-1"},F=n("a",{class:"header-anchor",href:"#zustand","aria-hidden":"true"},"#",-1),X={href:"https://github.com/pmndrs/zustand",target:"_blank",rel:"noopener noreferrer"},Z=p(`<ul><li><p>zustand 是一个轻量级状态管理库，和 redux 一样都是基于不可变状态模型和单向数据流的，状态对象 state 不可被修改，只能被替换。渲染优化要手动通过 selectors 进行。</p></li><li><p>特点：</p><ul><li>轻量级</li><li>中心化，单一 store</li><li>不可变状态模型</li><li>不固执，很少限制，可以和其他库结合使用</li></ul></li><li><p>Zustand vs Redux</p><ul><li>zustand 和 redux 是非常像的，都基于不可变状态模型，都基于单向数据流。</li><li>不过，redux 需要应用被 Context Provider 包裹，zustand 则不需要。</li><li>二者更新数据的方式不同，redux 基于 reducers，更新状态的 reducers 是严格的方法，这就使得状态更加可预测。zustand 不使用 reducers 而是通过更灵活的方法来更新状态。</li></ul></li><li><p>代码示例</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> create <span class="token keyword">from</span> <span class="token string">&#39;zustand&#39;</span>

<span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">set</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token function-variable function">inc</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function-variable function">dec</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> state<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>count<span class="token punctuation">)</span>
  <span class="token keyword">const</span> inc <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>inc<span class="token punctuation">)</span>
  <span class="token keyword">const</span> dec <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>dec<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>count<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>inc<span class="token punctuation">}</span><span class="token operator">&gt;</span>increment<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>dec<span class="token punctuation">}</span><span class="token operator">&gt;</span>decrement<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Counter

<span class="token comment">// 与 typescript 结合使用</span>

<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> create <span class="token keyword">from</span> <span class="token string">&#39;zustand&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> number
  <span class="token function-variable function">inc</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
  <span class="token function-variable function">dec</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> useStore <span class="token operator">=</span> create <span class="token operator">&lt;</span> State <span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">set</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token function-variable function">inc</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function-variable function">dec</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> state<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token literal-property property">Counter</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>count<span class="token punctuation">)</span>
  <span class="token keyword">const</span> inc <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>inc<span class="token punctuation">)</span>
  <span class="token keyword">const</span> dec <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>dec<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>count<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>inc<span class="token punctuation">}</span><span class="token operator">&gt;</span>increment<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>dec<span class="token punctuation">}</span><span class="token operator">&gt;</span>decrement<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> Counter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Y={id:"valtio",tabindex:"-1"},G=n("a",{class:"header-anchor",href:"#valtio","aria-hidden":"true"},"#",-1),K={href:"https://github.com/pmndrs/valtio",target:"_blank",rel:"noopener noreferrer"},Q=p(`<ul><li><p>简介</p><ul><li>基于可变状态模型，利用 Proxy 获取一个和 React 集成在一起的不可变快照。</li><li>利用 Proxy 自动进行重新渲染优化，这个过程使用了状态使用跟踪技术。通过状态使用跟踪，可以检测到状态的哪部分被使用，让组件实现按使用重新渲染。同时，开发者也可以编写更少的代码。</li><li>Valtio 也可以和其他库结合使用，比如 React Router、Redux、Mobx 等。</li></ul></li><li><p>代码示例</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> proxy<span class="token punctuation">,</span> useSnapshot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;valtio&#39;</span>

<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> snap <span class="token operator">=</span> <span class="token function">useSnapshot</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>count<span class="token operator">:</span> <span class="token punctuation">{</span>snap<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>state<span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>increment<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Counter

<span class="token comment">// 与 typescript 结合使用</span>

<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> proxy<span class="token punctuation">,</span> useSnapshot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;valtio&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> state <span class="token operator">=</span>
  proxy <span class="token operator">&lt;</span>
  State <span class="token operator">&gt;</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">Counter</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> snap <span class="token operator">=</span> <span class="token function">useSnapshot</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>count<span class="token operator">:</span> <span class="token punctuation">{</span>snap<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>state<span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>increment<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),W={id:"hox",tabindex:"-1"},$=n("a",{class:"header-anchor",href:"#hox","aria-hidden":"true"},"#",-1),nn={href:"https://github.com/umijs/hox",target:"_blank",rel:"noopener noreferrer"},sn=p(`<ul><li><p>简介</p><ul><li>Hox 是一个基于 React Hooks 的状态管理库，它的 API 设计和 Redux 非常相似，但是使用起来更加简单。</li></ul></li><li><p>特点</p><ul><li>基于 React Hooks</li><li>API 设计和 Redux 非常相似</li><li>使用起来更加简单</li><li>与其他库结合使用</li><li>优秀的性能和 TypeScript 支持</li><li>同时支持局部状态和全局状态，在灵活和简单之间做到了很好的平衡</li></ul></li><li><p>代码示例</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createModel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;hox&#39;</span>

<span class="token keyword">function</span> <span class="token function">useCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">decrement</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> count<span class="token punctuation">,</span> decrement<span class="token punctuation">,</span> increment <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> useCounterModel <span class="token operator">=</span> <span class="token function">createModel</span><span class="token punctuation">(</span>useCounter<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> count<span class="token punctuation">,</span> decrement<span class="token punctuation">,</span> increment <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCounterModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>count<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>increment<span class="token punctuation">}</span><span class="token operator">&gt;</span>increment<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>decrement<span class="token punctuation">}</span><span class="token operator">&gt;</span>decrement<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Counter

<span class="token comment">// 与 typescript 结合使用</span>

<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> createModel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;hox&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token function-variable function">decrement</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">useCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">decrement</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> count<span class="token punctuation">,</span> decrement<span class="token punctuation">,</span> increment <span class="token punctuation">}</span> <span class="token keyword">as</span> State
<span class="token punctuation">}</span>

<span class="token keyword">const</span> useCounterModel <span class="token operator">=</span> <span class="token function">createModel</span><span class="token punctuation">(</span>useCounter<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token literal-property property">Counter</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> count<span class="token punctuation">,</span> decrement<span class="token punctuation">,</span> increment <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCounterModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>count<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>increment<span class="token punctuation">}</span><span class="token operator">&gt;</span>increment<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>decrement<span class="token punctuation">}</span><span class="token operator">&gt;</span>decrement<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),an={id:"resso",tabindex:"-1"},tn=n("a",{class:"header-anchor",href:"#resso","aria-hidden":"true"},"#",-1),pn={href:"https://github.com/nanxiaobei/resso/blob/main/README.zh-CN.md",target:"_blank",rel:"noopener noreferrer"},en=p(`<ul><li><p>简介</p><ul><li>Resso 最简单的 React 状态管理器。</li></ul></li><li><p>特点</p><ul><li>简单易用</li><li>非常聪明</li><li>非常小巧</li></ul></li><li><p>安装</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> resso
<span class="token comment"># or</span>
<span class="token function">yarn</span> <span class="token function">add</span> resso
<span class="token comment"># or</span>
<span class="token function">npm</span> i resso
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>代码示例</li></ul><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> resso <span class="token keyword">from</span> <span class="token string">&#39;resso&#39;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">resso</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> count <span class="token punctuation">}</span> <span class="token operator">=</span> store <span class="token comment">// UI 中 data 须在顶层先解构 🥷</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">++</span>store<span class="token punctuation">.</span>count<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">+</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>API</p><ul><li>初始化</li></ul><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> resso <span class="token keyword">from</span> <span class="token string">&#39;resso&#39;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">resso</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token function-variable function">inc</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> count <span class="token punctuation">}</span> <span class="token operator">=</span> store <span class="token comment">// 方法中的 data 须在顶层先解构，同样 🥷</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>更新</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 更新单个 → 直接赋值</span>
store<span class="token punctuation">.</span>count <span class="token operator">=</span> count <span class="token operator">+</span> <span class="token number">1</span>

<span class="token comment">// 更新单个 → 更新函数</span>
<span class="token function">store</span><span class="token punctuation">(</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">prev</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> prev <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">// 更新多个</span>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> <span class="token punctuation">{</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用</li></ul><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// UI 中 data 须在顶层先解构，因为它们是以 useState 注入的</span>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> count <span class="token punctuation">}</span> <span class="token operator">=</span> store <span class="token comment">// 须在最顶层，否则将有 React 报错 (Hooks 规则)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ul><li>以上就是我对于 React 状态管理库的一些总结，希望对你有所帮助。</li><li>简单场景使用原生的 <code>useState、useReducer、useContext</code> 就能满足；还可以用 <code>Hox</code> 这样小而美的库将 <code>hook</code> 的状态直接拓展成持久化状态，几乎没有额外的心智负担。</li><li>复杂场景的应用，<code>redux、mobx</code> 都是经受过千锤百炼的库，社区生态也很完备。</li><li>Redux 高度模板化、分层化，职责划分清晰，塑造了其状态在可回溯、可维护性方面的优势；搭配 thunk、saga 这些中间件几乎是无所不能。</li><li>Mobx 的优势是写法简单和高性能，但状态的可维护性不如 redux，在并发模式中的兼容性也有待观察。</li><li>随着 hook 和有官方背景的 recoil 的出现，状态管理似乎在朝原子化、组件化的方向发展，这也符合 react 的组件化哲学。Redux 的暴力遍历和分发或许已经是逆潮流的解法。</li></ul><blockquote><p>但是，状态管理库的选择，还是要根据项目的实际情况来选择，没有最好的，只有最适合的。</p></blockquote><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,9),on={href:"https://juejin.cn/post/7195513281228898363",target:"_blank",rel:"noopener noreferrer"},cn={href:"https://juejin.cn/post/7197309324275318843",target:"_blank",rel:"noopener noreferrer"},ln={href:"https://juejin.cn/post/7063054916234772517",target:"_blank",rel:"noopener noreferrer"},un={href:"https://juejin.cn/post/7026232873233416223",target:"_blank",rel:"noopener noreferrer"},rn={href:"https://www.bilibili.com/video/BV1Tr4y1Z7h7/",target:"_blank",rel:"noopener noreferrer"},kn={href:"https://juejin.cn/post/7260514688378667063",target:"_blank",rel:"noopener noreferrer"};function dn(vn,mn){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("ul",null,[n("li",null,[s("使用 "),n("a",r,[s("注意事项"),t(a)])])]),k,n("h3",d,[v,s(),n("a",m,[s("redux"),t(a)])]),b,n("ul",null,[y,n("li",null,[g,n("blockquote",null,[n("p",null,[s("当然，redux 也在致力于解决上述缺点。比如，"),n("a",f,[s("redux toolkit"),t(a)]),s("就旨在让开发者使用标准方式编写 redux 逻辑。主要解决 redux 的 3 个问题")])]),h])]),n("h3",w,[x,s(),n("a",C,[s("Dva"),t(a)])]),_,n("ul",null,[n("li",null,[n("p",null,[n("a",R,[s("Umi"),t(a)])])]),S]),I,n("h3",T,[j,s(),n("a",V,[s("icestore"),t(a)])]),P,n("h3",M,[A,s(),n("a",D,[s("mobx"),t(a)])]),q,n("h3",L,[E,s(),n("a",z,[s("Recoil"),t(a)])]),U,n("h3",H,[O,s(),n("a",J,[s("Jotai"),t(a)])]),N,n("h3",B,[F,s(),n("a",X,[s("Zustand"),t(a)])]),Z,n("h3",Y,[G,s(),n("a",K,[s("Valtio"),t(a)])]),Q,n("h3",W,[$,s(),n("a",nn,[s("Hox"),t(a)])]),sn,n("h3",an,[tn,s(),n("a",pn,[s("Resso"),t(a)])]),en,n("ul",null,[n("li",null,[n("a",on,[s("2023 再看 React 状态管理"),t(a)])]),n("li",null,[n("a",cn,[s("一文带你全面体验八种状态管理库"),t(a)])]),n("li",null,[n("a",ln,[s("2022 年，我们再来谈谈 React 状态管理"),t(a)])]),n("li",null,[n("a",un,[s("2021 年的 React 状态管理"),t(a)])]),n("li",null,[n("a",rn,[s("React Zustand 状态管理库教程"),t(a)])]),n("li",null,[n("a",kn,[s("2023 年了，我还是选择 MobX"),t(a)])])])])}const yn=e(i,[["render",dn],["__file","index.html.vue"]]);export{yn as default};
