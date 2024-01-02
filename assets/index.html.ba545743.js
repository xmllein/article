import{_ as n,o as s,c as a,e}from"./app.26c798e2.js";const t={},i=e(`<h2 id="es11-2020" tabindex="-1"><a class="header-anchor" href="#es11-2020" aria-hidden="true">#</a> ES11-2020</h2><h3 id="_1-bigint" tabindex="-1"><a class="header-anchor" href="#_1-bigint" aria-hidden="true">#</a> 1. BigInt</h3><ul><li>BigInt 是一种内置对象，它提供了一种方法来表示大于 2^53 - 1 的整数。BigInt 可以用于任何需要整数的场合：任何接受 Number 类型的地方都可以使用 BigInt 类型。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 2^53</span>

<span class="token keyword">const</span> theBiggestInt <span class="token operator">=</span> <span class="token number">9007199254740991n</span>

<span class="token comment">// 2^64</span>

<span class="token keyword">const</span> alsoHuge <span class="token operator">=</span> <span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">9007199254740991</span><span class="token punctuation">)</span>

<span class="token comment">// 2^2000</span>

<span class="token keyword">const</span> huge <span class="token operator">=</span> <span class="token number">1234567890123456789012345678901234567890n</span>

<span class="token comment">// 2^53 - 1</span>

<span class="token keyword">const</span> max <span class="token operator">=</span> <span class="token function">BigInt</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span><span class="token punctuation">)</span>

<span class="token comment">// 2^53</span>

<span class="token keyword">const</span> tooBig <span class="token operator">=</span> <span class="token function">BigInt</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1n</span>

<span class="token comment">// SyntaxError: Cannot mix BigInt and other types, use explicit conversions</span>

<span class="token keyword">const</span> alsoHuge <span class="token operator">=</span> <span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">9007199254740991</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> bigSum <span class="token operator">=</span> theBiggestInt <span class="token operator">+</span> alsoHuge

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bigSum<span class="token punctuation">)</span> <span class="token comment">// 18014398509481982n</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> bigSum<span class="token punctuation">)</span> <span class="token comment">// &quot;bigint&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-promise-allsettled" tabindex="-1"><a class="header-anchor" href="#_2-promise-allsettled" aria-hidden="true">#</a> 2. Promise.allSettled()</h3><ul><li>Promise.allSettled() 方法返回一个在所有给定的 promise 都已经 fulfilled 或 rejected 后的 promise，并带有一个对象数组，每个对象表示对应的 promise 结果。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> promises <span class="token operator">=</span> <span class="token punctuation">[</span>Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

Promise<span class="token punctuation">.</span><span class="token function">allSettled</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">results</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span>
  <span class="token comment">// [</span>
  <span class="token comment">//   { status: &#39;fulfilled&#39;, value: 1 },</span>
  <span class="token comment">//   { status: &#39;rejected&#39;, reason: 2 },</span>
  <span class="token comment">//   { status: &#39;fulfilled&#39;, value: 3 }</span>
  <span class="token comment">// ]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-optional-chaining" tabindex="-1"><a class="header-anchor" href="#_3-optional-chaining" aria-hidden="true">#</a> 3. Optional Chaining</h3><ul><li>可选链操作符（?.）可用于访问嵌套对象的属性，而不必明确验证链中的每个引用是否有效。可选链操作符有两种形式：?. 和 ?.[ ]。当 ?. 出现在表达式的左侧时，它被称为可选链的“删除”操作符。当 ?. 或 ?.[ ] 出现在表达式的右侧时，它被称为可选链的“保留”操作符。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. ?. 保留操作符</span>

<span class="token comment">// 2. ?.[] 保留操作符</span>

<span class="token comment">// 3. ?.() 保留操作符</span>

<span class="token comment">// 4. ?. 与 delete 操作符</span>

<span class="token comment">// 5. ?. 与赋值操作符</span>

<span class="token comment">// 6. ?. 与逻辑操作符</span>

<span class="token comment">// 7. ?. 与逗号操作符</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-nullish-coalescing-operator" tabindex="-1"><a class="header-anchor" href="#_4-nullish-coalescing-operator" aria-hidden="true">#</a> 4. Nullish Coalescing Operator</h3><ul><li>空值合并操作符（??）返回它的第一个运算数，如果该运算数是 null 或 undefined，否则返回第二个运算数。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. ?? 优先级高于 ||</span>

<span class="token comment">// 2. ?? 只有左侧为 null 或 undefined 时才会返回右侧</span>

<span class="token comment">// 3. ?? 不会对左侧的值进行转换</span>

<span class="token comment">// 4. ?? 不会对右侧的值进行转换</span>

<span class="token comment">// 5. ?? 右侧可以是一个表达式</span>

<span class="token comment">// 6. ?? 右侧可以是一个函数</span>

<span class="token comment">// 7. ?? 右侧可以是一个对象</span>

<span class="token comment">// 8. ?? 右侧可以是一个数组</span>

<span class="token comment">// 9. ?? 右侧可以是一个正则表达式</span>

<span class="token comment">// 10. ?? 右侧可以是一个类</span>

<span class="token comment">// 11. ?? 右侧可以是一个对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-dynamic-import" tabindex="-1"><a class="header-anchor" href="#_5-dynamic-import" aria-hidden="true">#</a> 5. Dynamic Import</h3><ul><li>动态 import() 表达式是一个 ECMAScript 提案，它允许模块按需加载。它是一个类似于 import 语句的表达式，但是它可以在运行时动态地指定模块的路径。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. 动态导入模块</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> add <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./math.js&#39;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 42</span>

<span class="token comment">// 2. 动态导入模块</span>

<span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./math.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">math</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 42</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-import-meta" tabindex="-1"><a class="header-anchor" href="#_6-import-meta" aria-hidden="true">#</a> 6. i<wbr>mport.meta</h3><ul><li>i<wbr>mport.meta 对象提供了关于当前模块的信息。它的属性和方法取决于模块的类型。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. i<wbr>mport.meta.url</span>

<span class="token comment">// 2. i<wbr>mport.meta.resolve()</span>

<span class="token comment">// 3. i<wbr>mport.meta.glob()</span>

<span class="token comment">// 4. i<wbr>mport.meta.globEager()</span>

<span class="token comment">// 5. i<wbr>mport.meta.hot</span>

<span class="token comment">// 6. i<wbr>mport.meta.env</span>

<span class="token comment">// 7. i<wbr>mport.meta.webpackHot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-字符串方法-matchall" tabindex="-1"><a class="header-anchor" href="#_7-字符串方法-matchall" aria-hidden="true">#</a> 7. 字符串方法 matchAll()</h3><ul><li>String.prototype.matchAll() 方法返回一个包含所有匹配正则表达式及分组捕获结果的迭代器。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;test1test2&#39;</span>

<span class="token keyword">const</span> regexp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">t(e)(st(\\d?))</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>

<span class="token keyword">const</span> matches <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>regexp<span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> match <span class="token keyword">of</span> matches<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>match<span class="token punctuation">)</span>
  <span class="token comment">// [&quot;test1&quot;, &quot;e&quot;, &quot;st1&quot;, &quot;1&quot;, index: 0, input: &quot;test1test2&quot;, groups: undefined]</span>
<span class="token punctuation">}</span>

<span class="token comment">// expected output: Array [&quot;test1&quot;, &quot;e&quot;, &quot;st1&quot;, &quot;1&quot;]</span>

<span class="token comment">// expected output: Array [&quot;test2&quot;, &quot;e&quot;, &quot;st2&quot;, &quot;2&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-模块复合" tabindex="-1"><a class="header-anchor" href="#_8-模块复合" aria-hidden="true">#</a> 8. 模块复合</h3><ul><li>模块复合（module concatenation）是一种新的优化技术，它允许将多个模块合并为一个模块，以减少浏览器加载的文件数量。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./module1.js&#39;</span>

<span class="token comment">// 相当于</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> _module1 <span class="token keyword">from</span> <span class="token string">&#39;./module1.js&#39;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> _module1 <span class="token keyword">as</span> module1 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),l=[i];function c(o,p){return s(),a("div",null,l)}const d=n(t,[["render",c],["__file","index.html.vue"]]);export{d as default};
