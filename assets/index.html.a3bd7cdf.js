import{_ as i,r as o,o as l,c as p,a as s,b as n,d as e,e as t}from"./app.26c798e2.js";const c="/article/snippet/1.webp",r="/article/snippet/2.webp",u="/article/snippet/3.webp",d="/article/snippet/4.webp",v="/article/snippet/5.webp",b="/article/snippet/6.webp",m="/article/snippet/7.webp",k="/article/snippet/8.webp",q={},g=t('<h2 id="开发" tabindex="-1"><a class="header-anchor" href="#开发" aria-hidden="true">#</a> 开发</h2><ul><li>安装脚手架 <code>npm install -g yo generator-code</code></li><li>然后执行命令 <code>yo code</code></li><li>选择 <code>New Code Snippet</code>，然后输入基础信息，回车</li></ul><h2 id="创建片段" tabindex="-1"><a class="header-anchor" href="#创建片段" aria-hidden="true">#</a> 创建片段</h2>',3),h={href:"https://snippet-generator.app/",target:"_blank",rel:"noopener noreferrer"},_=s("h2",{id:"发布",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#发布","aria-hidden":"true"},"#"),n(" 发布")],-1),f=s("li",null,[n("安装 "),s("code",null,"vsce"),n(" 工具 "),s("code",null,"npm install -g vsce")],-1),x={href:"https://login.live.com/",target:"_blank",rel:"noopener noreferrer"},$={href:"https://login.microsoftonline.com/common/oauth2/authorize?client_id=499b84ac-1321-427f-aa17-267ca6975798&site_id=501454&response_mode=form_post&response_type=code+id_token&redirect_uri=https%3A%2F%2Fapp.vssps.visualstudio.com%2F_signedin&nonce=85738e6a-90d5-4e42-add3-3425653acab3&state=realm%3Daex.dev.azure.com%26reply_to%3Dhttps%253A%252F%252Faex.dev.azure.com%252Fsignup%253FacquisitionId%253D26ee9974-7dc9-493a-a383-8c497e092dd3%2526acquisitionType%253DbyDefault%26ht%3D3%26mkt%3Dzh-CN%26nonce%3D85738e6a-90d5-4e42-add3-3425653acab3&resource=https%3A%2F%2Fmanagement.core.windows.net%2F&cid=85738e6a-90d5-4e42-add3-3425653acab3&wsucxt=1&githubsi=true&msaoauth2=true&mkt=zh-CN",target:"_blank",rel:"noopener noreferrer"},y={href:"https://aex.dev.azure.com/",target:"_blank",rel:"noopener noreferrer"},N=s("li",null,[n("这里的 "),s("code",null,"organizations"),n(" 必须要选择 "),s("code",null,"all accessible organizations"),n("，"),s("code",null,"Scopes"),n(" 要选择 "),s("code",null,"full access"),n("，否则后面发布会失败")],-1),E=s("li",null,[n("第四步发布 "),s("code",null,"vsce publish -p 你的令牌")],-1),R=t(`<h2 id="代码片段语法" tabindex="-1"><a class="header-anchor" href="#代码片段语法" aria-hidden="true">#</a> 代码片段语法</h2><ul><li>tabStops(按 tab 时焦点停留位置) $1, $2 ... 为 tab 键依次停留位置 $0 为最后停留位置并退出代码片段</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># example 基础for循环</span>
<span class="token string">&quot;basic for&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;prefix&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;bfor&quot;</span>,
    <span class="token string">&quot;body&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;for (const <span class="token variable">\${1}</span> of <span class="token variable">\${2<span class="token operator">:</span>array}</span>) {<span class="token entity" title="\\n">\\n</span>  <span class="token variable">$0</span> <span class="token entity" title="\\n">\\n</span>}&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+`" alt="RUNOOB 图标"></p><ul><li>placeholders(占位符)：在 tab 位置填入默认值</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># example 带占位符的for循环</span>
<span class="token string">&quot;placeholder for&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;prefix&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pfor&quot;</span>,
    <span class="token string">&quot;body&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;for (const <span class="token variable">\${1<span class="token operator">:</span>ele}</span> of <span class="token variable">\${2<span class="token operator">:</span>array}</span>) {<span class="token entity" title="\\n">\\n</span>  <span class="token variable">$0</span> <span class="token entity" title="\\n">\\n</span>}&quot;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="RUNOOB 图标"></p><ul><li><p>choice（下拉选择）：在 tab 位置展示下拉菜单</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># example 带下拉菜单的for循环</span>
<span class="token string">&quot;test for&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
  <span class="token string">&quot;prefix&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;tfor&quot;</span>,
  <span class="token string">&quot;body&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;for (const <span class="token variable">\${1|ele<span class="token operator">,</span>key<span class="token operator">,</span>item|}</span> of <span class="token variable">\${2<span class="token operator">:</span>array}</span>) {<span class="token entity" title="\\n">\\n</span>  <span class="token variable">$0</span> <span class="token entity" title="\\n">\\n</span>}&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+`" alt="RUNOOB 图标"></p></li><li><p>内置变量: 格式为$name 或 \${name:默认值}常见 vscode 内置变量：VSCode variables</p></li><li><p>快速生成基本 React 页面:</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token string">&quot;React Function Comp&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;prefix&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;trfc&quot;</span>,
    <span class="token string">&quot;body&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;import React, { useEffect } from &#39;react&#39;&quot;</span>,
      <span class="token string">&quot;&quot;</span>,
      <span class="token string">&quot;type IProps = {}&quot;</span>,
      <span class="token string">&quot;&quot;</span>,
      <span class="token string">&quot;const <span class="token variable">\${TM_FILENAME<span class="token operator">/</span>(.*).js<span class="token operator">/</span>$1<span class="token operator">/</span>i}</span> = (props: IProps) =&gt; {&quot;</span>,
      <span class="token string">&quot;  return (&quot;</span>,
      <span class="token string">&quot;    null
&quot;</span>,
      <span class="token string">&quot;  )&quot;</span>,
      <span class="token string">&quot;}&quot;</span>,
      <span class="token string">&quot;&quot;</span>,
      <span class="token string">&quot;export default <span class="token variable">\${TM_FILENAME<span class="token operator">/</span>(.*).js<span class="token operator">/</span>$1<span class="token operator">/</span>i}</span>&quot;</span>,
      <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">]</span>,
    <span class="token string">&quot;description&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;react 函数式组件快速命令&quot;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt="RUNOOB 图标"></p><ul><li>在注释中使用日期变量</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token string">&quot;作者和时间注释&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;prefix&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;zs-Author &amp; Time&quot;</span>,
    <span class="token string">&quot;body&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;/**&quot;</span>,
      <span class="token string">&quot; * Created by laiye on <span class="token variable">$CURRENT_YEAR</span>/<span class="token variable">$CURRENT_MONTH</span>/<span class="token variable">$CURRENT_DATE</span>&quot;</span>,
      <span class="token string">&quot; */&quot;</span>,
      <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span>
    <span class="token punctuation">]</span>,
    <span class="token string">&quot;description&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;添加作者和时间注释&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+`" alt="RUNOOB 图标"></p><ul><li><p>变量转换 : 变量转化能够让你在变量的值被插入之前，得到一个修改插入值的机会语法：<code>\${var_name/regular_expression/format_string/options}</code></p><ul><li>var_name: 变量名</li><li>regular_expression: 正则表达式</li><li>format_string: 格式化字符串</li><li>options: 选项</li></ul></li><li><p>例如：生成 react 文件时，将文件名变量首字母大写：</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token string">&quot;React Function Comp&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;prefix&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;trfc&quot;</span>,
    <span class="token string">&quot;body&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;import React, { useEffect } from &#39;react&#39;&quot;</span>,
      <span class="token string">&quot;&quot;</span>,
      <span class="token string">&quot;type IProps = {}&quot;</span>,
      <span class="token string">&quot;&quot;</span>,
      <span class="token string">&quot;const <span class="token variable">\${TM_FILENAME<span class="token operator">/</span>(.*).js<span class="token operator">/</span>\${1<span class="token operator">:</span><span class="token operator">/</span>capitalize}</span>/i} = (props: IProps) =&gt; {&quot;</span>,
      <span class="token string">&quot;  return (&quot;</span>,
      <span class="token string">&quot;    null
&quot;</span>,
      <span class="token string">&quot;  )&quot;</span>,
      <span class="token string">&quot;}&quot;</span>,
      <span class="token string">&quot;&quot;</span>,
      <span class="token string">&quot;export default <span class="token variable">\${TM_FILENAME<span class="token operator">/</span>(.*).js<span class="token operator">/</span>\${1<span class="token operator">:</span><span class="token operator">/</span>capitalize}</span>/i}&quot;</span>,
      <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">]</span>,
    <span class="token string">&quot;description&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;react 函数式组件快速命令&quot;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+b+`" alt="RUNOOB 图标"></p><ul><li>获取变量结果时，可以用条件判断最终显示内容:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token string">&quot;format_string if&quot;</span>:<span class="token punctuation">{</span>
    <span class="token string">&quot;prefix&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;tstr&quot;</span>,
    <span class="token string">&quot;body&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;<span class="token variable">\${TM_FILENAME<span class="token operator">/</span>verify.js(x)?<span class="token operator">/</span>\${1<span class="token operator">:?</span>jsx<span class="token operator">:</span>tsx}</span>/}&quot;</span>,
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设我们有一个「verify.js」文件，我们有这么一条 <code>snippet: &quot;body&quot;: &quot;\${TM_FILENAME/verify\\\\.j(s)?/\${1:?jsx:tsx}/}&quot;</code>。整个模式串匹配成功，括号中的 s 也成功，则写入 jsx，否则写入 tsx</p><p><img src="`+m+'" alt="RUNOOB 图标"></p><ul><li>占位符转换(tab 切换光标时，对占位符进行格式化)</li><li>举例：react 中使用 useState</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>const <span class="token punctuation">[</span> <span class="token variable">${1}</span>, <span class="token builtin class-name">set</span><span class="token variable">${1<span class="token operator">/</span>(.*)<span class="token operator">/</span>${1<span class="token operator">:</span><span class="token operator">/</span>capitalize}</span>/<span class="token punctuation">}</span> <span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token punctuation">(</span><span class="token variable">$2</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="'+k+'" alt="RUNOOB 图标"></p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',24),F={href:"https://juejin.cn/post/7030250953215311908",target:"_blank",rel:"noopener noreferrer"},O={href:"https://zhuanlan.zhihu.com/p/556043480",target:"_blank",rel:"noopener noreferrer"};function z(T,C){const a=o("ExternalLinkIcon");return l(),p("div",null,[g,s("ul",null,[s("li",null,[n("code snippet "),s("a",h,[n("snippet-generator.app/"),e(a)])])]),_,s("ul",null,[f,s("li",null,[n("第二步创建账号 "),s("a",x,[n("https://login.live.com/"),e(a)])]),s("li",null,[s("a",$,[n("azure devops"),e(a)])]),s("li",null,[n("第三步进入组织创建令牌(Personal access tokens) "),s("a",y,[n("https://aex.dev.azure.com/"),e(a)])]),N,E]),R,s("ul",null,[s("li",null,[s("a",F,[n("一起来写 VS Code 插件:为你的团队提供常用代码片段"),e(a)])]),s("li",null,[s("a",O,[n("来也科技技术交流|团队提效利器-VSCode 代码片段插件"),e(a)])])])])}const M=i(q,[["render",z],["__file","index.html.vue"]]);export{M as default};
