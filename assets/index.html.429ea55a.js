import{_ as s,o as n,c as a,e}from"./app.26c798e2.js";const i={},l=e(`<h2 id="es12-2021" tabindex="-1"><a class="header-anchor" href="#es12-2021" aria-hidden="true">#</a> ES12-2021</h2><h3 id="_1-string-prototype-replaceall" tabindex="-1"><a class="header-anchor" href="#_1-string-prototype-replaceall" aria-hidden="true">#</a> 1. String.prototype.replaceAll()</h3><ul><li>String.prototype.replaceAll() 方法返回一个由替换值（replacement）替换一些或所有匹配的模式（pattern）后的新字符串。模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> p <span class="token operator">=</span>
  <span class="token string">&#39;The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?&#39;</span>

<span class="token keyword">const</span> regex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">dog</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span>regex<span class="token punctuation">,</span> <span class="token string">&#39;ferret&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// expected output: &quot;The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-promise-any" tabindex="-1"><a class="header-anchor" href="#_2-promise-any" aria-hidden="true">#</a> 2. Promise.any()</h3><ul><li>Promise.any() 方法返回一个带有单一参数的 Promise，该参数是一个迭代器，其中包含一组 Promise 实例。只要迭代器中的任何一个 Promise 实例被解决或拒绝，返回的 Promise 就会被解决或拒绝。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. Promise.any() 方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-logical-assignment-operators" tabindex="-1"><a class="header-anchor" href="#_3-logical-assignment-operators" aria-hidden="true">#</a> 3. Logical Assignment Operators</h3><ul><li>逻辑赋值运算符（&amp;&amp;=， ||=， ??=）是一种新的赋值运算符，它结合了逻辑运算符和赋值运算符的功能。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. &amp;&amp;= 逻辑赋值运算符</span>

<span class="token comment">// 2. ||= 逻辑赋值运算符</span>

<span class="token comment">// 3. ??= 逻辑赋值运算符</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-numeric-separators" tabindex="-1"><a class="header-anchor" href="#_4-numeric-separators" aria-hidden="true">#</a> 4. Numeric Separators</h3><ul><li>数字分隔符（_）是一种新的数字字面量语法，它允许在数字字面量中使用下划线来增强可读性。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. 数字分隔符</span>

<span class="token keyword">const</span> oneMillion <span class="token operator">=</span> <span class="token number">1_000_000</span>

<span class="token keyword">const</span> creditCard <span class="token operator">=</span> <span class="token number">1234_5678_9012_3456</span>

<span class="token keyword">const</span> socialSecurity <span class="token operator">=</span> <span class="token number">999_99_9999</span>

<span class="token keyword">const</span> hexBytes <span class="token operator">=</span> <span class="token number">0xFF_EC_DE_5E</span>

<span class="token keyword">const</span> bits <span class="token operator">=</span> <span class="token number">0b1010_0001_1000_0101</span>

<span class="token keyword">const</span> anAmount <span class="token operator">=</span> <span class="token number">1_000_000_000_000</span>

<span class="token keyword">const</span> inBinary <span class="token operator">=</span> <span class="token number">0b0101_1111_1001_0000_1000_0110_1110_0111</span>

<span class="token keyword">const</span> withSeparators <span class="token operator">=</span> <span class="token number">1_000_000_000_000</span>

<span class="token keyword">const</span> justTooBig <span class="token operator">=</span> <span class="token number">1_000_000_000_000_000</span>

<span class="token keyword">const</span> notANumber <span class="token operator">=</span> 1_000_000_000_000_000_

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),r=[l];function t(o,c){return n(),a("div",null,r)}const d=s(i,[["render",t],["__file","index.html.vue"]]);export{d as default};
