import{_ as p,r as t,o as e,c as o,a as n,b as c,d as l,e as s}from"./app.26c798e2.js";const i={},r=s(`<h2 id="es14-2023" tabindex="-1"><a class="header-anchor" href="#es14-2023" aria-hidden="true">#</a> ES14-2023</h2><h3 id="数组被修改时返回副本" tabindex="-1"><a class="header-anchor" href="#数组被修改时返回副本" aria-hidden="true">#</a> 数组被修改时返回副本</h3><ul><li><p>toSortedArray</p></li><li><p>toReversedArray</p></li><li><p>toSplicedArray</p></li><li><p>with</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> sortedArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">toSortedArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr <span class="token operator">===</span> sortedArr<span class="token punctuation">)</span> <span class="token comment">// false</span>

<span class="token keyword">const</span> reversedArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">toReversedArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr <span class="token operator">===</span> reversedArr<span class="token punctuation">)</span> <span class="token comment">// false</span>

<span class="token keyword">const</span> splicedArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">toSplicedArray</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr <span class="token operator">===</span> splicedArr<span class="token punctuation">)</span> <span class="token comment">// false</span>

<span class="token keyword">const</span> withArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr <span class="token operator">===</span> withArr<span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="数组被修改时返回原数组" tabindex="-1"><a class="header-anchor" href="#数组被修改时返回原数组" aria-hidden="true">#</a> 数组被修改时返回原数组</h3>`,4),u=s("<li><p>sort</p></li><li><p>reverse</p></li><li><p>splice</p></li><li><p>push</p></li><li><p>pop</p></li><li><p>shift</p></li><li><p>unshift</p></li><li><p>fill</p></li>",8),k=s(`<p>copyWithin</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> sortedArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr <span class="token operator">===</span> sortedArr<span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token keyword">const</span> reversedArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr <span class="token operator">===</span> reversedArr<span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token keyword">const</span> splicedArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr <span class="token operator">===</span> splicedArr<span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token keyword">const</span> withArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr <span class="token operator">===</span> withArr<span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token keyword">const</span> withArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr <span class="token operator">===</span> withArr<span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token keyword">const</span> withArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr <span class="token operator">===</span> withArr<span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token keyword">const</span> withArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr <span class="token operator">===</span> withArr<span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token keyword">const</span> withArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr <span class="token operator">===</span> withArr<span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token keyword">const</span> withArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">copyWithin</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr <span class="token operator">===</span> withArr<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,3),d={href:"https://juejin.cn/post/7206302271079989308",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const a=t("ExternalLinkIcon");return e(),o("div",null,[r,n("ul",null,[u,n("li",null,[k,n("ul",null,[n("li",null,[n("a",d,[c("ES2023 来了，赶紧学起来"),l(a)])])])])])])}const f=p(i,[["render",v],["__file","index.html.vue"]]);export{f as default};