import{_ as p,r as i,o as c,c as l,a as n,b as s,d as e,e as t}from"./app.26c798e2.js";const o={},u=n("h2",{id:"dart-介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#dart-介绍","aria-hidden":"true"},"#"),s(" dart 介绍")],-1),d=n("p",null,"Dart 是由谷歌开发的计算机编程语言,它可以被用于 web、服务器、移动应用 和物联网等领域的开发。",-1),r=n("p",null,"Dart 诞生于 2011 年，号称要取代 JavaScript。但是过去的几年中一直不温不火。直到 Flutter 的出现现在被人们重新重视。",-1),k={href:"https://dart.dev/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://dart.dev/get-dart",target:"_blank",rel:"noopener noreferrer"},m=t(`<h2 id="dart-基础" tabindex="-1"><a class="header-anchor" href="#dart-基础" aria-hidden="true">#</a> dart 基础</h2><h3 id="dart-变量" tabindex="-1"><a class="header-anchor" href="#dart-变量" aria-hidden="true">#</a> Dart 变量</h3><ul><li>dart 是一个强大的脚本类语言，可以不预先定义变量类型 ，自动会类型推倒</li><li>dart 中定义变量可以通过 <code>var</code> 关键字可以通过类型来申明变量</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>
  <span class="token keyword">var</span> str<span class="token operator">=</span><span class="token string-literal"><span class="token string">&#39;this is var&#39;</span></span><span class="token punctuation">;</span>
  <span class="token class-name">String</span> str<span class="token operator">=</span><span class="token string-literal"><span class="token string">&#39;this is var&#39;</span></span><span class="token punctuation">;</span>
  int str<span class="token operator">=</span><span class="token number">123</span><span class="token punctuation">;</span>

<span class="token comment">// 注意： var 后就不要写类型 ，  写了类型 不要var   两者都写   var  a int  = 5;  报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dart-常量" tabindex="-1"><a class="header-anchor" href="#dart-常量" aria-hidden="true">#</a> Dart 常量</h3><ul><li><code>final</code> 和 <code>const</code>修饰符。</li><li><code>const</code> 值不变 一开始就得赋值。</li><li><code>final</code> 可以开始不赋值 只能赋一次 ; 而 <code>final</code> 不仅有 <code>const</code> 的编译时常量的特性，最重要的它是运行时常量，并且 <code>final</code> 是惰性初始化，即在运行时第一次使用前才初始化。</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>  <span class="token comment">// 永远不改量的量，请使用final或const修饰它，而不是使用var或其他变量类型。</span>
  <span class="token keyword">final</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;Bob&#39;</span></span><span class="token punctuation">;</span> <span class="token comment">// Without a type annotation</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> nickname <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;Bobby&#39;</span></span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token number">1000000</span><span class="token punctuation">;</span> <span class="token comment">// Unit of pressure (dynes/cm2)</span>
  <span class="token keyword">const</span> double atm <span class="token operator">=</span> <span class="token number">1.01325</span> <span class="token operator">*</span> bar<span class="token punctuation">;</span> <span class="token comment">// Standard atmosphere</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dart-的命名规则" tabindex="-1"><a class="header-anchor" href="#dart-的命名规则" aria-hidden="true">#</a> Dart 的命名规则</h3><ul><li>变量名称必须由数字、字母、下划线和美元符($)组成。</li><li>注意：标识符开头不能是数字</li><li>标识符不能是保留字和关键字。</li><li>变量的名字是区分大小写的如: age 和 Age 是不同的变量。在实际的运用中,也建议,不要用一个单词大小写区分两个变量。</li><li>标识符(变量名称)一定要见名思意 ：变量名称建议用名词，方法名称建议用动词 。</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token keyword">var</span> str1<span class="token operator">=</span><span class="token string-literal"><span class="token string">&#39;2134214&#39;</span></span><span class="token punctuation">;</span>

    <span class="token comment">//var 2str=&#39;xxx&#39;;   //错误</span>
    <span class="token comment">// var if=&#39;124214&#39;;  //错误</span>


    <span class="token comment">//变量的名字是区分大小写的</span>
    <span class="token keyword">var</span> age<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> <span class="token class-name">Age</span><span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">;</span>

    <span class="token function">print</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">Age</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



    <span class="token keyword">var</span> price<span class="token operator">=</span><span class="token number">12</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> name<span class="token operator">=</span><span class="token number">124</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="入口方法" tabindex="-1"><a class="header-anchor" href="#入口方法" aria-hidden="true">#</a> 入口方法</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>  <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;你好dart&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><ul><li><p>常用数据类型：</p><ul><li><code>Number</code>(数值),<code>int double</code></li><li><code>String</code>(字符串) , <code>String</code></li><li><code>Boolean</code>(布尔), <code>bool</code></li><li><code>List</code>(数组): 在 <code>Dart</code> 中，数组是列表对象，所以大多数人只是称它们为列表。</li><li><code>Map</code>(字典): 通常来说，<code>Map</code> 是一个键值对相关的对象。键和值可以是任何类型的对象。每个 键 只出现一次， 而一个值则可以出现多次。</li></ul></li><li><p>项目中用不到的数据类型（用不到）：</p><ul><li><p><code>Runes</code> : <code>Rune</code> 是 <code>UTF-32</code> 编码的字符串。它可以通过文字转换成符号表情或者代表特定的文字。</p></li><li><p><code>Symbols</code> : <code>Symbol</code> 对象表示在 <code>Dart</code> 程序中声明的运算符或标识符。您可能永远不需要使用符号，但它们对于按名称引用标识符的 <code>API</code> 非常有用，因为缩小会更改标识符名称而不会更改标识符符号。要获取标识符的符号，请使用符号文字，它只是＃后跟标识符。</p></li></ul></li></ul><h3 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token comment">//1、字符串定义的几种方式</span>
  <span class="token comment">// var str1=&#39;this is str1&#39;;</span>
  <span class="token comment">// var str2=&quot;this is str2&quot;;</span>

  <span class="token comment">// print(str1);</span>
  <span class="token comment">// print(str2);</span>

  <span class="token comment">// String str1=&#39;this is str1&#39;;</span>
  <span class="token comment">// String str2=&quot;this is str2&quot;;</span>
  <span class="token comment">// print(str1);</span>
  <span class="token comment">// print(str2);</span>

  <span class="token comment">// String str1=&#39;&#39;&#39;this is str1</span>
  <span class="token comment">// this is str1</span>
  <span class="token comment">// this is str1</span>
  <span class="token comment">// &#39;&#39;&#39;;</span>
  <span class="token comment">//  print(str1);</span>

  <span class="token comment">//   String str1=&quot;&quot;&quot;</span>
  <span class="token comment">//   this is str1</span>
  <span class="token comment">//   this is str1</span>
  <span class="token comment">//   this is str1</span>
  <span class="token comment">//   &quot;&quot;&quot;;</span>
  <span class="token comment">//  print(str1);</span>

  <span class="token comment">//2、字符串的拼接</span>

  <span class="token class-name">String</span> str1<span class="token operator">=</span><span class="token string-literal"><span class="token string">&#39;你好&#39;</span></span><span class="token punctuation">;</span>
  <span class="token class-name">String</span> str2<span class="token operator">=</span><span class="token string-literal"><span class="token string">&#39;Dart&#39;</span></span><span class="token punctuation">;</span>
  <span class="token comment">// print(&quot;$str1 $str2&quot;);</span>


  <span class="token function">print</span><span class="token punctuation">(</span>str1 <span class="token operator">+</span> str2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>str1 <span class="token operator">+</span><span class="token string-literal"><span class="token string">&quot; &quot;</span></span><span class="token operator">+</span> str2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> Number</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token comment">//1、int   必须是整型</span>
    int a<span class="token operator">=</span><span class="token number">123</span><span class="token punctuation">;</span>
    a<span class="token operator">=</span><span class="token number">45</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//2、double  既可以是整型 也可是浮点型</span>
    double b<span class="token operator">=</span><span class="token number">23.5</span><span class="token punctuation">;</span>
    b<span class="token operator">=</span><span class="token number">24</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//3、运算符</span>
  <span class="token comment">// + - * / %</span>

    <span class="token keyword">var</span> c<span class="token operator">=</span>a<span class="token operator">+</span>b<span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Boolean</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token comment">//1、bool</span>
  <span class="token comment">// bool flag1=true;</span>
  <span class="token comment">// print(flag1);</span>

  <span class="token comment">// bool flag2=false;</span>
  <span class="token comment">// print(flag2);</span>

  <span class="token comment">//2、条件判断语句</span>
  <span class="token comment">// var flag=true;</span>
  <span class="token comment">// if(flag){</span>
  <span class="token comment">//   print(&#39;真&#39;);</span>
  <span class="token comment">// }else{</span>
  <span class="token comment">//   print(&#39;假&#39;);</span>
  <span class="token comment">// }</span>

  <span class="token comment">// var a=123;</span>
  <span class="token comment">// var b=&#39;123&#39;;</span>
  <span class="token comment">// if(a==b){</span>
  <span class="token comment">//   print(&#39;a=b&#39;);</span>
  <span class="token comment">// }else{</span>
  <span class="token comment">//    print(&#39;a!=b&#39;);</span>
  <span class="token comment">// }</span>

  <span class="token keyword">var</span> a<span class="token operator">=</span><span class="token number">123</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> b<span class="token operator">=</span><span class="token number">123</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">==</span>b<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;a=b&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;a!=b&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> List</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//1、第一种定义List的方式</span>

  <span class="token comment">// var l1=[&quot;张三&quot;,20,true];</span>
  <span class="token comment">// print(l1);  //[张三, 20, true]</span>
  <span class="token comment">// print(l1.length);  //3</span>
  <span class="token comment">// print(l1[0]); //张三</span>
  <span class="token comment">// print(l1[1]); //20</span>

  <span class="token comment">//2、第二种定义List的方式 指定类型</span>

  <span class="token comment">// var l2=&lt;String&gt;[&quot;张三&quot;,&quot;李四&quot;];</span>
  <span class="token comment">// print(l2);</span>

  <span class="token comment">// var l3 = &lt;int&gt;[12, 30];</span>
  <span class="token comment">// print(l3);</span>

  <span class="token comment">//3、第三种定义List的方式  增加数据 ,通过[]创建的集合它的容量可以变化</span>

  <span class="token comment">// var l4 = [];</span>
  <span class="token comment">// print(l4);</span>
  <span class="token comment">// print(l4.length);</span>

  <span class="token comment">// l4.add(&quot;张三&quot;);</span>
  <span class="token comment">// l4.add(&quot;李四&quot;);</span>
  <span class="token comment">// l4.add(20);</span>
  <span class="token comment">// print(l4);</span>
  <span class="token comment">// print(l4.length);</span>

  <span class="token comment">// var l5 = [&quot;张三&quot;, 20, true];</span>
  <span class="token comment">// l5.add(&quot;李四&quot;);</span>
  <span class="token comment">// l5.add(&quot;zhaosi&quot;);</span>
  <span class="token comment">// print(l5);</span>

  <span class="token comment">//4、第四种定义List的方式</span>

  <span class="token comment">//  var l6=new List();  //在新版本的dart里面没法使用这个方法了</span>
  <span class="token comment">// var l6=List.filled(2, &quot;&quot;);  //创建一个固定长度的集合</span>
  <span class="token comment">// print(l6);</span>
  <span class="token comment">// print(l6[0]);</span>

  <span class="token comment">// l6[0]=&quot;张三&quot;;   //修改集合的内容</span>
  <span class="token comment">// l6[1]=&quot;李四&quot;;</span>
  <span class="token comment">// print(l6);  //[张三, 李四]</span>
  <span class="token comment">// l6.add(&quot;王五&quot;);  //错误写法  通过List.filled创建的集合长度是固定  没法增加数据</span>

  <span class="token comment">//通过List.filled创建的集合长度是固定</span>
  <span class="token comment">// var l6=List.filled(2, &quot;&quot;);</span>
  <span class="token comment">// print(l6.length);</span>
  <span class="token comment">// l6.length=0;  //修改集合的长度   报错</span>

  <span class="token comment">// var l7=&lt;String&gt;[&quot;张三&quot;,&quot;李四&quot;];</span>
  <span class="token comment">// print(l7.length);  //2</span>
  <span class="token comment">// l7.length=0;  //可以改变的</span>
  <span class="token comment">// print(l7);  //[]</span>

  <span class="token keyword">var</span> l8<span class="token operator">=</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">.</span><span class="token function">filled</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  l8<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string-literal"><span class="token string">&quot;string&quot;</span></span><span class="token punctuation">;</span>
  <span class="token comment">// l8[0]=222;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>l8<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">//第一种定义 Maps的方式</span>

  <span class="token comment">// var person={</span>
  <span class="token comment">//   &quot;name&quot;:&quot;张三&quot;,</span>
  <span class="token comment">//   &quot;age&quot;:20,</span>
  <span class="token comment">//   &quot;work&quot;:[&quot;程序员&quot;,&quot;送外卖&quot;]</span>
  <span class="token comment">// };</span>

  <span class="token comment">// print(person);</span>
  <span class="token comment">// print(person[&quot;name&quot;]);</span>
  <span class="token comment">// print(person[&quot;age&quot;]);</span>
  <span class="token comment">// print(person[&quot;work&quot;]);</span>

  <span class="token comment">//第二种定义 Maps的方式</span>

  <span class="token keyword">var</span> p<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  p<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;name&quot;</span></span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string-literal"><span class="token string">&quot;李四&quot;</span></span><span class="token punctuation">;</span>
  p<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;age&quot;</span></span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">22</span><span class="token punctuation">;</span>
  p<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;work&quot;</span></span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;程序员&quot;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&quot;送外卖&quot;</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>p<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;age&quot;</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断数据类型" tabindex="-1"><a class="header-anchor" href="#判断数据类型" aria-hidden="true">#</a> 判断数据类型</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// var str=&#39;1234&#39;;</span>
  <span class="token comment">// if(str is String){</span>
  <span class="token comment">//   print(&#39;是string类型&#39;);</span>
  <span class="token comment">// }else if(str is int){</span>
  <span class="token comment">//    print(&#39;int&#39;);</span>
  <span class="token comment">// }else{</span>
  <span class="token comment">//    print(&#39;其他类型&#39;);</span>
  <span class="token comment">// }</span>

  <span class="token keyword">var</span> str<span class="token operator">=</span><span class="token number">123</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>str <span class="token operator">is</span> <span class="token class-name">String</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;是string类型&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>str <span class="token operator">is</span> int<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;int&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;其他类型&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运算-类型转换" tabindex="-1"><a class="header-anchor" href="#运算-类型转换" aria-hidden="true">#</a> 运算，类型转换</h2><h3 id="算数符-条件判断语句" tabindex="-1"><a class="header-anchor" href="#算数符-条件判断语句" aria-hidden="true">#</a> 算数符，条件判断语句</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">/*

1、Dart运算符：
    算术运算符
      +    -    *    /     ~/ (取整)     %（取余）

    关系运算符
      ==    ！=   &gt;    &lt;    &gt;=    &lt;=

    逻辑运算符
        !  &amp;&amp;   ||

    赋值运算符
     基础赋值运算符   =   ??=
     复合赋值运算符   +=  -=  *=   /=   %=  ~/=

    条件表达式
        if  else   switch case
        三目运算符
        ??运算符：
2、类型转换

    1、Number与String类型之间的转换
    2、其他类型转换成Booleans类型
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="算术运算" tabindex="-1"><a class="header-anchor" href="#算术运算" aria-hidden="true">#</a> 算术运算</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  int a<span class="token operator">=</span><span class="token number">13</span><span class="token punctuation">;</span>
  int b<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span>

  <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//加</span>
  <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token operator">-</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//减</span>
  <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token operator">*</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//乘</span>
  <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token operator">/</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//除</span>
  <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token operator">%</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//其余</span>
  <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token operator">~/</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//取整</span>

  <span class="token keyword">var</span> c<span class="token operator">=</span>a<span class="token operator">*</span>b<span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;--------&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关系运算" tabindex="-1"><a class="header-anchor" href="#关系运算" aria-hidden="true">#</a> 关系运算</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">//  ==    ！=   &gt;    &lt;    &gt;=    &lt;=</span>
  int a<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span>
  int b<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>

  <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token operator">==</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//判断是否相等</span>
  <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token operator">!=</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//判断是否不等</span>
  <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token operator">&gt;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//判断是否大于</span>
  <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token operator">&lt;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//判断是否小于</span>
  <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token operator">&gt;=</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//判断是否大于等于</span>
  <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token operator">&lt;=</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//判断是否小于等于</span>

  <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">&gt;</span>b<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;a大于b&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;a小于b&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="逻辑运算" tabindex="-1"><a class="header-anchor" href="#逻辑运算" aria-hidden="true">#</a> 逻辑运算</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">/* ! 取反 */</span>

  <span class="token comment">// bool flag=false;</span>
  <span class="token comment">// print(!flag);   //取反</span>

 <span class="token comment">/* &amp;&amp;并且:全部为true的话值为true 否则值为false */</span>
  <span class="token comment">// bool a=true;</span>
  <span class="token comment">// bool b=true;</span>
  <span class="token comment">// print(a &amp;&amp; b);</span>

 <span class="token comment">/* ||或者：全为false的话值为false 否则值为true */</span>
  <span class="token comment">// bool a=false;</span>
  <span class="token comment">// bool b=false;</span>
  <span class="token comment">// print(a || b);</span>

<span class="token comment">//如果一个人的年龄是20 并且 sex是女的话我们打印这个人</span>

  <span class="token comment">// int age=20;</span>
  <span class="token comment">// String sex=&quot;女&quot;;</span>
  <span class="token comment">// if(age==20 &amp;&amp; sex==&quot;女&quot;){</span>
  <span class="token comment">//   print(&quot;$age --- $sex&quot;);</span>
  <span class="token comment">// }else{</span>
  <span class="token comment">//   print(&quot;不打印&quot;);</span>
  <span class="token comment">// }</span>

<span class="token comment">//如果一个人的年龄是20 或者 sex是女的话我们打印这个人</span>

  int age<span class="token operator">=</span><span class="token number">23</span><span class="token punctuation">;</span>
  <span class="token class-name">String</span> sex<span class="token operator">=</span><span class="token string-literal"><span class="token string">&quot;女&quot;</span></span><span class="token punctuation">;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>age<span class="token operator">==</span><span class="token number">20</span> <span class="token operator">||</span> sex<span class="token operator">==</span><span class="token string-literal"><span class="token string">&quot;女&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">age</span></span><span class="token string"> --- </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">sex</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;不打印&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a> 赋值运算符</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//  1、基础赋值运算符   =   ??=</span>
        <span class="token comment">// int a=10;</span>
        <span class="token comment">// int b=3;</span>
        <span class="token comment">// print(a);</span>
        <span class="token comment">// int c=a+b;   //从右向左</span>
    <span class="token comment">// b??=23;  表示如果b为空的话把 23赋值给b</span>

        <span class="token comment">// int b=6;</span>
        <span class="token comment">// b??=23;</span>
        <span class="token comment">// print(b);</span>

        <span class="token comment">// int b;</span>
        <span class="token comment">// b??=23;</span>
        <span class="token comment">// print(b);</span>

<span class="token comment">//2、  复合赋值运算符   +=  -=  *=   /=   %=  ~/=</span>
    <span class="token comment">// var a=12;</span>
    <span class="token comment">// a=a+10;</span>
    <span class="token comment">// print(a);</span>

    <span class="token comment">// var a=13;</span>
    <span class="token comment">// a+=10;   //表示a=a+10</span>
    <span class="token comment">// print(a);</span>

   <span class="token keyword">var</span> a<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">;</span>
   a<span class="token operator">*=</span><span class="token number">3</span><span class="token punctuation">;</span>  <span class="token comment">//a=a*3;</span>
   <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="条件运算" tabindex="-1"><a class="header-anchor" href="#条件运算" aria-hidden="true">#</a> 条件运算</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">//1、if  else   switch case</span>
    <span class="token comment">// bool flag=true;</span>
    <span class="token comment">// if(flag){</span>
    <span class="token comment">//   print(&#39;true&#39;);</span>
    <span class="token comment">// }else{</span>
    <span class="token comment">//   print(&#39;false&#39;);</span>
    <span class="token comment">// }</span>

  <span class="token comment">//判断一个人的成绩 如果大于60 显示及格   如果大于 70显示良好  如果大于90显示优秀</span>

  <span class="token comment">// var score=41;</span>
  <span class="token comment">// if(score&gt;90){</span>
  <span class="token comment">//   print(&#39;优秀&#39;);</span>
  <span class="token comment">// }else if(score&gt;70){</span>
  <span class="token comment">//    print(&#39;良好&#39;);</span>
  <span class="token comment">// }else if(score&gt;=60){</span>
  <span class="token comment">//   print(&#39;及格&#39;);</span>
  <span class="token comment">// }else{</span>
  <span class="token comment">//   print(&#39;不及格&#39;);</span>
  <span class="token comment">// }</span>

  <span class="token comment">// var sex=&quot;女&quot;;</span>
  <span class="token comment">// switch(sex){</span>
  <span class="token comment">//   case &quot;男&quot;:</span>
  <span class="token comment">//     print(&#39;性别是男&#39;);</span>
  <span class="token comment">//     break;</span>
  <span class="token comment">//   case &quot;女&quot;:</span>
  <span class="token comment">//     print(&#39;性别是女&#39;);</span>
  <span class="token comment">//     print(&#39;性别是女&#39;);</span>
  <span class="token comment">//     break;</span>
  <span class="token comment">//   default:</span>
  <span class="token comment">//     print(&#39;传入参数错误&#39;);</span>
  <span class="token comment">//     break;</span>
  <span class="token comment">// }</span>

  <span class="token comment">//2、三目运算符</span>

  <span class="token comment">// var falg=true;</span>
  <span class="token comment">// var c;</span>
  <span class="token comment">// if(falg){</span>
  <span class="token comment">//     c=&#39;我是true&#39;;</span>
  <span class="token comment">// }else{</span>
  <span class="token comment">//   c=&quot;我是false&quot;;</span>
  <span class="token comment">// }</span>
  <span class="token comment">// print(c);</span>

  bool flag<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token class-name">String</span> c<span class="token operator">=</span>flag<span class="token operator">?</span><span class="token string-literal"><span class="token string">&#39;我是true&#39;</span></span><span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&#39;我是false&#39;</span></span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//3  ??运算符</span>
  <span class="token comment">// var a;</span>
  <span class="token comment">// var b= a ?? 10;</span>
  <span class="token comment">// print(b);   10</span>

  <span class="token keyword">var</span> a<span class="token operator">=</span><span class="token number">22</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> b<span class="token operator">=</span> a <span class="token operator">?</span><span class="token operator">?</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换" aria-hidden="true">#</a> 类型转换</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>


    <span class="token comment">//1、Number与String类型之间的转换</span>

      <span class="token comment">// Number类型转换成String类型 toString()</span>
      <span class="token comment">// String类型转成Number类型  int.parse()</span>

      <span class="token comment">// String str=&#39;123&#39;;</span>
      <span class="token comment">// var myNum=int.parse(str);</span>
      <span class="token comment">// print(myNum is int);</span>

      <span class="token comment">// String str=&#39;123.1&#39;;</span>
      <span class="token comment">// var myNum=double.parse(str);</span>
      <span class="token comment">// print(myNum is double);</span>

      <span class="token comment">//  String price=&#39;12&#39;;</span>
      <span class="token comment">// var myNum=double.parse(price);</span>
      <span class="token comment">// print(myNum);</span>
      <span class="token comment">// print(myNum is double);</span>

      <span class="token comment">//报错</span>
      <span class="token comment">// String price=&#39;&#39;;</span>
      <span class="token comment">// var myNum=double.parse(price);</span>
      <span class="token comment">// print(myNum);</span>
      <span class="token comment">// print(myNum is double);</span>

    <span class="token comment">// try  ... catch</span>
    <span class="token comment">//  String price=&#39;&#39;;</span>
    <span class="token comment">//   try{</span>
    <span class="token comment">//     var myNum=double.parse(price);</span>
    <span class="token comment">//     print(myNum);</span>
    <span class="token comment">//   }catch(err){</span>
    <span class="token comment">//        print(0);</span>
    <span class="token comment">//   }</span>

    <span class="token comment">// var myNum=12;</span>
    <span class="token comment">// var str=myNum.toString();</span>
    <span class="token comment">// print(str is String);</span>
 <span class="token comment">// 2、其他类型转换成Booleans类型</span>

        <span class="token comment">// isEmpty:判断字符串是否为空</span>
        <span class="token comment">// var str=&#39;&#39;;</span>
        <span class="token comment">// if(str.isEmpty){</span>
        <span class="token comment">//   print(&#39;str空&#39;);</span>
        <span class="token comment">// }else{</span>
        <span class="token comment">//   print(&#39;str不为空&#39;);</span>
        <span class="token comment">// }</span>

        <span class="token comment">// var myNum=123;</span>
        <span class="token comment">// if(myNum==0){</span>
        <span class="token comment">//    print(&#39;0&#39;);</span>
        <span class="token comment">// }else{</span>
        <span class="token comment">//   print(&#39;非0&#39;);</span>
        <span class="token comment">// }</span>


        <span class="token comment">// var myNum;</span>
        <span class="token comment">// if(myNum==0){</span>
        <span class="token comment">//    print(&#39;0&#39;);</span>
        <span class="token comment">// }else{</span>
        <span class="token comment">//   print(&#39;非0&#39;);</span>
        <span class="token comment">// }</span>

        <span class="token comment">// var myNum;</span>
        <span class="token comment">// if(myNum==null){</span>
        <span class="token comment">//    print(&#39;空&#39;);</span>
        <span class="token comment">// }else{</span>
        <span class="token comment">//   print(&#39;非空&#39;);</span>
        <span class="token comment">// }</span>

        <span class="token keyword">var</span> myNum<span class="token operator">=</span><span class="token number">0</span><span class="token operator">/</span><span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// print(myNum);</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>myNum<span class="token punctuation">.</span>isNaN<span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;NaN&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dart-循环" tabindex="-1"><a class="header-anchor" href="#dart-循环" aria-hidden="true">#</a> dart 循环</h2><ul><li><code>for</code> 循环</li><li><code>while</code> 循环</li><li><code>do while</code> 循环</li><li><code>break</code> 和 <code>continue</code></li></ul><h2 id="集合类型-list-set-map" tabindex="-1"><a class="header-anchor" href="#集合类型-list-set-map" aria-hidden="true">#</a> 集合类型 List Set Map</h2><h3 id="list-1" tabindex="-1"><a class="header-anchor" href="#list-1" aria-hidden="true">#</a> List</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">/*
List里面常用的属性和方法：

    常用属性：
        length          长度
        reversed        翻转
        isEmpty         是否为空
        isNotEmpty      是否不为空
    常用方法：
        add         增加
        addAll      拼接数组
        indexOf     查找  传入具体值
        remove      删除  传入具体值
        removeAt    删除  传入索引值
        fillRange   修改
        insert(index,value);            指定位置插入
        insertAll(index,list)           指定位置插入List
        toList()    其他类型转换成List
        join()      List转换成字符串
        split()     字符串转化成List
        forEach
        map
        where
        any
        every

*/</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token comment">// List myList=[&#39;香蕉&#39;,&#39;苹果&#39;,&#39;西瓜&#39;];</span>
  <span class="token comment">// print(myList[1]);</span>

  <span class="token comment">// var list=new List();  //新版本没法使用</span>
  <span class="token comment">// list.add(&#39;111&#39;);</span>
  <span class="token comment">// list.add(&#39;222&#39;);</span>
  <span class="token comment">// print(list);</span>

<span class="token comment">//List里面的属性：</span>
    <span class="token comment">// List myList=[&#39;香蕉&#39;,&#39;苹果&#39;,&#39;西瓜&#39;];</span>
    <span class="token comment">// print(myList.length);</span>
    <span class="token comment">// print(myList.isEmpty);</span>
    <span class="token comment">// print(myList.isNotEmpty);</span>
    <span class="token comment">// print(myList.reversed);  //对列表倒序排序</span>
    <span class="token comment">// var newMyList=myList.reversed.toList();</span>
    <span class="token comment">// print(newMyList);</span>

<span class="token comment">//List里面的方法：</span>

    <span class="token comment">// List myList=[&#39;香蕉&#39;,&#39;苹果&#39;,&#39;西瓜&#39;];</span>
    <span class="token comment">//myList.add(&#39;桃子&#39;);   //增加数据  增加一个</span>
    <span class="token comment">// myList.addAll([&#39;桃子&#39;,&#39;葡萄&#39;]);  //拼接数组</span>
    <span class="token comment">// print(myList);</span>
    <span class="token comment">//print(myList.indexOf(&#39;苹x果&#39;));    //indexOf查找数据 查找不到返回-1  查找到返回索引值</span>


    <span class="token comment">// myList.remove(&#39;西瓜&#39;);</span>
    <span class="token comment">// myList.removeAt(1);</span>
    <span class="token comment">// print(myList);</span>

    <span class="token comment">// List myList=[&#39;香蕉&#39;,&#39;苹果&#39;,&#39;西瓜&#39;];</span>
    <span class="token comment">// myList.fillRange(1, 2,&#39;aaa&#39;);  //修改</span>
    <span class="token comment">// myList.fillRange(1, 3,&#39;aaa&#39;);</span>

    <span class="token comment">// myList.insert(1,&#39;aaa&#39;);      //插入  一个</span>
    <span class="token comment">// myList.insertAll(1, [&#39;aaa&#39;,&#39;bbb&#39;]);  //插入 多个</span>
    <span class="token comment">// print(myList);</span>


    <span class="token comment">// List myList=[&#39;香蕉&#39;,&#39;苹果&#39;,&#39;西瓜&#39;];</span>
    <span class="token comment">// var str=myList.join(&#39;-&#39;);   //list转换成字符串</span>
    <span class="token comment">// print(str);</span>
    <span class="token comment">// print(str is String);  //true</span>


    <span class="token keyword">var</span> str<span class="token operator">=</span><span class="token string-literal"><span class="token string">&#39;香蕉-苹果-西瓜&#39;</span></span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> list<span class="token operator">=</span>str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;-&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>list <span class="token operator">is</span> <span class="token class-name">List</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h3><ul><li>用它最主要的功能就是去除数组重复内容。</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token comment">// var s=new Set();</span>
  <span class="token comment">// s.add(&#39;香蕉&#39;);</span>
  <span class="token comment">// s.add(&#39;苹果&#39;);</span>
  <span class="token comment">// s.add(&#39;苹果&#39;);</span>
  <span class="token comment">// print(s);   //{香蕉, 苹果}</span>
  <span class="token comment">// print(s.toList());</span>

  <span class="token class-name">List</span> myList<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;香蕉&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;苹果&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;西瓜&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;香蕉&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;苹果&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;香蕉&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;苹果&#39;</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> s<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  s<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>myList<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map-1" tabindex="-1"><a class="header-anchor" href="#map-1" aria-hidden="true">#</a> Map</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">/*
  映射(Maps)是无序的键值对：

    常用属性：
        keys            获取所有的key值
        values          获取所有的value值
        isEmpty         是否为空
        isNotEmpty      是否不为空
    常用方法:
        remove(key)     删除指定key的数据
        addAll({...})   合并映射  给映射内增加属性
        containsValue   查看映射内的值  返回true/false
        forEach
        map
        where
        any
        every

*/</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// Map person={</span>
  <span class="token comment">//   &quot;name&quot;:&quot;张三&quot;,</span>
  <span class="token comment">//   &quot;age&quot;:20</span>
  <span class="token comment">// };</span>

  <span class="token comment">// var m=new Map();</span>
  <span class="token comment">// m[&quot;name&quot;]=&quot;李四&quot;;</span>
  <span class="token comment">// print(person);</span>
  <span class="token comment">// print(m);</span>

<span class="token comment">//常用属性：</span>

    <span class="token comment">// Map person={</span>
    <span class="token comment">//   &quot;name&quot;:&quot;张三&quot;,</span>
    <span class="token comment">//   &quot;age&quot;:20,</span>
    <span class="token comment">//   &quot;sex&quot;:&quot;男&quot;</span>
    <span class="token comment">// };</span>

    <span class="token comment">// print(person.keys.toList());</span>
    <span class="token comment">// print(person.values.toList());</span>
    <span class="token comment">// print(person.isEmpty);</span>
    <span class="token comment">// print(person.isNotEmpty);</span>

<span class="token comment">//常用方法：</span>
    <span class="token class-name">Map</span> person<span class="token operator">=</span><span class="token punctuation">{</span>
      <span class="token string-literal"><span class="token string">&quot;name&quot;</span></span><span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&quot;张三&quot;</span></span><span class="token punctuation">,</span>
      <span class="token string-literal"><span class="token string">&quot;age&quot;</span></span><span class="token punctuation">:</span><span class="token number">20</span><span class="token punctuation">,</span>
      <span class="token string-literal"><span class="token string">&quot;sex&quot;</span></span><span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&quot;男&quot;</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// person.addAll({</span>
    <span class="token comment">//   &quot;work&quot;:[&#39;敲代码&#39;,&#39;送外卖&#39;],</span>
    <span class="token comment">//   &quot;height&quot;:160</span>
    <span class="token comment">// });</span>
    <span class="token comment">// print(person);</span>

    <span class="token comment">// person.remove(&quot;sex&quot;);</span>
    <span class="token comment">// print(person);</span>
    <span class="token function">print</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span><span class="token function">containsValue</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;张三&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="foreach-map-where-any-every" tabindex="-1"><a class="header-anchor" href="#foreach-map-where-any-every" aria-hidden="true">#</a> forEach map where any every</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

      <span class="token comment">//  List myList=[&#39;香蕉&#39;,&#39;苹果&#39;,&#39;西瓜&#39;];</span>
      <span class="token comment">// for(var i=0;i&lt;myList.length;i++){</span>
      <span class="token comment">//   print(myList[i]);</span>
      <span class="token comment">// }</span>

      <span class="token comment">// for(var item in myList){</span>
      <span class="token comment">//   print(item);</span>
      <span class="token comment">// }</span>

      <span class="token comment">// myList.forEach((value){</span>
      <span class="token comment">//     print(&quot;$value&quot;);</span>
      <span class="token comment">// });</span>

      <span class="token comment">// List myList=[1,3,4];</span>
      <span class="token comment">// List newList=new List();</span>
      <span class="token comment">// for(var i=0;i&lt;myList.length;i++){</span>
      <span class="token comment">//   newList.add(myList[i]*2);</span>
      <span class="token comment">// }</span>
      <span class="token comment">// print(newList);</span>

      <span class="token comment">// List myList=[1,3,4];</span>
      <span class="token comment">// var newList=myList.map((value){</span>
      <span class="token comment">//     return value*2;</span>
      <span class="token comment">// });</span>
      <span class="token comment">// print(newList.toList());</span>

      <span class="token comment">// List myList=[1,3,4,5,7,8,9];</span>
      <span class="token comment">// var newList=myList.where((value){</span>
      <span class="token comment">//     return value&gt;5;</span>
      <span class="token comment">// });</span>
      <span class="token comment">// print(newList.toList());</span>

      <span class="token comment">// List myList=[1,3,4,5,7,8,9];</span>
      <span class="token comment">// var f=myList.any((value){   //只要集合里面有满足条件的就返回true</span>
      <span class="token comment">//     return value&gt;5;</span>
      <span class="token comment">// });</span>
      <span class="token comment">// print(f);</span>

      <span class="token comment">// List myList=[1,3,4,5,7,8,9];</span>
      <span class="token comment">// var f=myList.every((value){   //每一个都满足条件返回true  否则返回false</span>
      <span class="token comment">//     return value&gt;5;</span>
      <span class="token comment">// });</span>
      <span class="token comment">// print(f);</span>

      <span class="token comment">// set</span>
      <span class="token comment">// var s=new Set();</span>
      <span class="token comment">// s.addAll([1,222,333]);</span>
      <span class="token comment">// s.forEach((value)=&gt;print(value));</span>

      <span class="token comment">//map</span>
       <span class="token class-name">Map</span> person<span class="token operator">=</span><span class="token punctuation">{</span>
          <span class="token string-literal"><span class="token string">&quot;name&quot;</span></span><span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&quot;张三&quot;</span></span><span class="token punctuation">,</span>
          <span class="token string-literal"><span class="token string">&quot;age&quot;</span></span><span class="token punctuation">:</span><span class="token number">20</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">key</span></span><span class="token string">---</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">value</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数-略" tabindex="-1"><a class="header-anchor" href="#函数-略" aria-hidden="true">#</a> 函数 （略）</h2><h2 id="函数高级应用" tabindex="-1"><a class="header-anchor" href="#函数高级应用" aria-hidden="true">#</a> 函数高级应用</h2><h3 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数" aria-hidden="true">#</a> 箭头函数</h3><h3 id="匿名方法-自执行方法" tabindex="-1"><a class="header-anchor" href="#匿名方法-自执行方法" aria-hidden="true">#</a> 匿名方法，自执行方法</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>int <span class="token function">getNum</span><span class="token punctuation">(</span>int n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// print(getNum(12));</span>

  <span class="token comment">//匿名方法</span>
  <span class="token comment">// var printNum=(){</span>
  <span class="token comment">//   print(123);</span>
  <span class="token comment">// };</span>
  <span class="token comment">// printNum();</span>

  <span class="token comment">// var printNum=(int n){</span>
  <span class="token comment">//   print(n+2);</span>
  <span class="token comment">// };</span>
  <span class="token comment">// printNum(12);</span>

<span class="token comment">//自执行方法</span>

  <span class="token comment">// ((int n){</span>
  <span class="token comment">//   print(n);</span>
  <span class="token comment">//   print(&#39;我是自执行方法&#39;);</span>
  <span class="token comment">// })(12);</span>

<span class="token comment">//方法的递归</span>
  <span class="token comment">// var sum = 1;</span>
  <span class="token comment">// fn(int n) {</span>
  <span class="token comment">//   sum *= n;</span>
  <span class="token comment">//   if (n == 1) {</span>
  <span class="token comment">//     return;</span>
  <span class="token comment">//   }</span>
  <span class="token comment">//   fn(n - 1);</span>
  <span class="token comment">// }</span>
  <span class="token comment">// fn(5);</span>
  <span class="token comment">// print(sum);</span>

<span class="token comment">//通过方法的递归 求1-100的和</span>

  <span class="token keyword">var</span> sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token function">fn</span><span class="token punctuation">(</span>int n<span class="token punctuation">)</span><span class="token punctuation">{</span>
      sum<span class="token operator">+=</span>n<span class="token punctuation">;</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">fn</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h3><ul><li>闭包: 函数嵌套函数, 内部函数会调用外部函数的变量或参数, 变量或参数不会被系统回收(不会释放内存)</li><li>闭包的写法： 函数嵌套函数，并 return 里面的函数，这样就形成了闭包。</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">/*全局变量*/</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// print(a);</span>

  <span class="token comment">// fn(){</span>
  <span class="token comment">//   a++;</span>
  <span class="token comment">//   print(a);</span>
  <span class="token comment">// }</span>
  <span class="token comment">// fn();</span>
  <span class="token comment">// fn();</span>
  <span class="token comment">// fn();</span>

<span class="token comment">//局部变量</span>
  <span class="token comment">// printInfo() {</span>
  <span class="token comment">//   var myNum = 123;</span>
  <span class="token comment">//   myNum++;</span>
  <span class="token comment">//   print(myNum);</span>
  <span class="token comment">// }</span>

  <span class="token comment">// printInfo();</span>
  <span class="token comment">// printInfo();</span>
  <span class="token comment">// printInfo();</span>

<span class="token comment">//闭包</span>

  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">/*不会污染全局   常驻内存*/</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      a<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 124</span>
  <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 125</span>
  <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 126</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类-对象" tabindex="-1"><a class="header-anchor" href="#类-对象" aria-hidden="true">#</a> 类 对象</h2><h3 id="内置类" tabindex="-1"><a class="header-anchor" href="#内置类" aria-hidden="true">#</a> 内置类</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token comment">// List list=new List();  //最新版本的dart中已没法使用</span>
    <span class="token comment">// list.isEmpty;</span>
    <span class="token comment">// list.add(&#39;香蕉&#39;);</span>
    <span class="token comment">// list.add(&#39;香蕉1&#39;);</span>

    <span class="token class-name">Map</span> m<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    m<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;username&quot;</span></span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string-literal"><span class="token string">&quot;张三&quot;</span></span><span class="token punctuation">;</span>
    m<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-literal"><span class="token string">&quot;age&quot;</span></span><span class="token punctuation">:</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    m<span class="token punctuation">.</span>isEmpty<span class="token punctuation">;</span>

    <span class="token class-name">Object</span> a<span class="token operator">=</span><span class="token number">123</span><span class="token punctuation">;</span>
    <span class="token class-name">Object</span> v<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义类" tabindex="-1"><a class="header-anchor" href="#自定义类" aria-hidden="true">#</a> 自定义类</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// 定义类</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
  <span class="token class-name">String</span> name<span class="token operator">=</span><span class="token string-literal"><span class="token string">&quot;张三&quot;</span></span><span class="token punctuation">;</span>
  int age<span class="token operator">=</span><span class="token number">23</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// print(&quot;$name----$age&quot;);</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>name</span><span class="token punctuation">}</span></span><span class="token string">----</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>age</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">void</span> <span class="token function">setInfo</span><span class="token punctuation">(</span>int age<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token operator">=</span>age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token comment">//实例化</span>
  <span class="token comment">// var p1=new Person();</span>
  <span class="token comment">// print(p1.name);</span>
  <span class="token comment">// p1.getInfo();</span>

  <span class="token class-name">Person</span> p1<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// print(p1.name);</span>
  p1<span class="token punctuation">.</span><span class="token function">setInfo</span><span class="token punctuation">(</span><span class="token number">28</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  p1<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// class Person{</span>
<span class="token comment">//   String name=&#39;张三&#39;;</span>
<span class="token comment">//   int age=20;</span>
<span class="token comment">//   //默认构造函数</span>
<span class="token comment">//   Person(){</span>
<span class="token comment">//     print(&#39;这是构造函数里面的内容  这个方法在实例化的时候触发&#39;);</span>
<span class="token comment">//   }</span>
<span class="token comment">//   void printInfo(){</span>
<span class="token comment">//     print(&quot;\${this.name}----\${this.age}&quot;);</span>
<span class="token comment">//   }</span>
<span class="token comment">// }</span>

<span class="token comment">//最新版本的dart中需要初始化不可为null的实例字段，如果不初始化的话需要在属性前面加上late</span>
<span class="token comment">// class Person{</span>
<span class="token comment">//   late String name;</span>
<span class="token comment">//   late int age;</span>
<span class="token comment">//   //默认构造函数</span>
<span class="token comment">//   Person(String name,int age){</span>
<span class="token comment">//       this.name=name;</span>
<span class="token comment">//       this.age=age;</span>
<span class="token comment">//   }</span>
<span class="token comment">//   void printInfo(){</span>
<span class="token comment">//     print(&quot;\${this.name}----\${this.age}&quot;);</span>
<span class="token comment">//   }</span>
<span class="token comment">// }</span>

<span class="token comment">//最新版本的dart中需要初始化不可为null的实例字段，如果不初始化的话需要在属性前面加上late</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
  late <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  late int age<span class="token punctuation">;</span>
  <span class="token comment">//默认构造函数的简写</span>
  <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>name</span><span class="token punctuation">}</span></span><span class="token string">----</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>age</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token class-name">Person</span> p1<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;张三&#39;</span></span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  p1<span class="token punctuation">.</span><span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


  <span class="token class-name">Person</span> p2<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;李四&#39;</span></span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  p2<span class="token punctuation">.</span><span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命名构造函数" tabindex="-1"><a class="header-anchor" href="#命名构造函数" aria-hidden="true">#</a> 命名构造函数</h3><ul><li><code>dart</code> 里面构造函数可以写多个。</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">/*
注意：最新版本的dart中需要初始化不可为null的实例字段，如果不初始化的话需要在属性前面加上late
*/</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  late <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  late int age<span class="token punctuation">;</span>
  <span class="token comment">//默认构造函数的简写</span>
  <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;我是命名构造函数&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token function">setInfo</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> int age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">void</span> <span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>name</span><span class="token punctuation">}</span></span><span class="token string">----</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>age</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// var d=new DateTime.now();   //实例化DateTime调用它的命名构造函数</span>
  <span class="token comment">// print(d);</span>

  <span class="token comment">//Person p1=new Person(&#39;张三&#39;, 20);   //默认实例化类的时候调用的是 默认构造函数</span>

  <span class="token comment">//Person p1=new Person.now();   //命名构造函数</span>

  <span class="token class-name">Person</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token function">setInfo</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;李四&#39;</span></span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  p1<span class="token punctuation">.</span><span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="私有属性和私有方法" tabindex="-1"><a class="header-anchor" href="#私有属性和私有方法" aria-hidden="true">#</a> 私有属性和私有方法</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
  late <span class="token class-name">String</span> _name<span class="token punctuation">;</span>   <span class="token comment">//私有属性</span>
  late int age<span class="token punctuation">;</span>
  <span class="token comment">//默认构造函数的简写</span>
  <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">void</span> <span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>_name</span><span class="token punctuation">}</span></span><span class="token string">----</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>age</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">void</span> <span class="token function">_run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;这是一个私有方法&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">execRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//类里面方法的相互调用</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setter-与-getter" tabindex="-1"><a class="header-anchor" href="#setter-与-getter" aria-hidden="true">#</a> setter 与 getter</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">class</span> <span class="token class-name">Rect</span><span class="token punctuation">{</span>
    late num height<span class="token punctuation">;</span>
    late num width<span class="token punctuation">;</span>
    <span class="token class-name">Rect</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>width<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">get</span> area<span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token operator">*</span><span class="token keyword">this</span><span class="token punctuation">.</span>width<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">set</span> <span class="token function">areaHeight</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token operator">=</span>value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Rect</span> r<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Rect</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// print(&quot;面积:\${r.area()}&quot;);</span>
    r<span class="token punctuation">.</span>areaHeight<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">;</span>

    <span class="token function">print</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>area<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// Dart中我们也可以在构造函数体运行之前初始化实例变量</span>
<span class="token keyword">class</span> <span class="token class-name">Rect</span><span class="token punctuation">{</span>
  int height<span class="token punctuation">;</span>
  int width<span class="token punctuation">;</span>
  <span class="token class-name">Rect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>height<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>width<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>height</span><span class="token punctuation">}</span></span><span class="token string">---</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>width</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token operator">*</span><span class="token keyword">this</span><span class="token punctuation">.</span>width<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token class-name">Rect</span> r<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Rect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态成员-静态方法" tabindex="-1"><a class="header-anchor" href="#静态成员-静态方法" aria-hidden="true">#</a> 静态成员, 静态方法</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;张三&#39;</span></span><span class="token punctuation">;</span>
  int age<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token keyword">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">void</span> <span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">/*非静态方法可以访问静态成员以及非静态成员*/</span>
      <span class="token comment">// print(name);  //访问静态属性</span>
      <span class="token comment">// print(this.age);  //访问非静态属性</span>
      <span class="token keyword">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//调用静态方法</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//静态方法</span>
        <span class="token function">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//静态属性</span>
        <span class="token keyword">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//静态方法</span>
        <span class="token comment">//print(this.age);     //静态方法没法访问非静态的属性</span>
        <span class="token comment">// this.printInfo();   //静态方法没法访问非静态的方法</span>
        <span class="token comment">// printInfo();</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// print(Person.name);</span>
  <span class="token comment">// Person.show();</span>

  <span class="token comment">// Person p=new Person();</span>
  <span class="token comment">// p.printInfo();</span>
  <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token function">printUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dart-中的对象操作符" tabindex="-1"><a class="header-anchor" href="#dart-中的对象操作符" aria-hidden="true">#</a> Dart 中的对象操作符</h3><ul><li>as 类型转换</li><li>is 类型判断</li><li>.. 连贯操作</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  num age<span class="token punctuation">;</span>
  <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>name</span><span class="token punctuation">}</span></span><span class="token string">---</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>age</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Person p;</span>
  <span class="token comment">// p?.printInfo();   //已被最新的dart废弃 了解</span>

  <span class="token comment">//  Person p=new Person(&#39;张三&#39;, 20);</span>
  <span class="token comment">//  p?.printInfo();   //已被最新的dart废弃 了解</span>

  <span class="token class-name">Person</span> p<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;张三&#39;</span></span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>p <span class="token operator">is</span> <span class="token class-name">Person</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      p<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string-literal"><span class="token string">&quot;李四&quot;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  p<span class="token punctuation">.</span><span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>p <span class="token operator">is</span> <span class="token class-name">Object</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// var p1;</span>
  <span class="token comment">// p1=&#39;&#39;;</span>
  <span class="token comment">// p1=new Person(&#39;张三1&#39;, 20);</span>
  <span class="token comment">// p1.printInfo();</span>
  <span class="token comment">// (p1 as Person).printInfo();</span>

  <span class="token comment">//  Person p1=new Person(&#39;张三1&#39;, 20);</span>
  <span class="token comment">//  p1.printInfo();</span>
  <span class="token comment">//  p1.name=&#39;张三222&#39;;</span>
  <span class="token comment">//  p1.age=40;</span>
  <span class="token comment">//  p1.printInfo();</span>

  <span class="token class-name">Person</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;张三1&#39;</span></span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  p1<span class="token punctuation">.</span><span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  p1
    <span class="token punctuation">.</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;李四&quot;</span></span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">30</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><ul><li>简单继承 <code>extends</code></li><li><code>super</code> 关键字 继承</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">/*
面向对象的三大特性：封装 、继承、多态
Dart中的类的继承：
    1、子类使用extends关键词来继承父类
    2、子类会继承父类里面可见的属性和方法 但是不会继承构造函数
    3、子类能复写父类的方法 getter和setter

*/</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  late <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  late num age<span class="token punctuation">;</span>
  late <span class="token class-name">String</span> gender<span class="token punctuation">;</span>
  <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>name</span><span class="token punctuation">}</span></span><span class="token string">---</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>age</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Web</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
  <span class="token class-name">Web</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> num age<span class="token punctuation">,</span> <span class="token class-name">String</span> gender<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>gender<span class="token operator">=</span>gender<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
   <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>name</span><span class="token punctuation">}</span></span><span class="token string">---</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>age</span><span class="token punctuation">}</span></span><span class="token string">--</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>sex</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token comment">// Person p=new Person(&#39;李四&#39;,20);</span>
  <span class="token comment">// p.printInfo();</span>

  <span class="token comment">// Person p1=new Person(&#39;张三&#39;,20);</span>
  <span class="token comment">// p1.printInfo();</span>

  <span class="token class-name">Web</span> w<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Web</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;张三&#39;</span></span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&quot;男&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  w<span class="token punctuation">.</span><span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  w<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 张三---12--男</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复写父类的方法" tabindex="-1"><a class="header-anchor" href="#复写父类的方法" aria-hidden="true">#</a> 复写父类的方法</h3><ul><li><code>@override</code> 复写父类的方法</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">/*

面向对象的三大特性：封装 、继承、多态


Dart中的类的继承：
    1、子类使用extends关键词来继承父类
    2、子类会继承父类里面可见的属性和方法 但是不会继承构造函数
    3、子类能复写父类的方法 getter和setter

*/</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  num age<span class="token punctuation">;</span>
  <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>name</span><span class="token punctuation">}</span></span><span class="token string">---</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>age</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>name</span><span class="token punctuation">}</span></span><span class="token string">在工作...&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Web</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
  <span class="token class-name">Web</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> num age<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;run&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//覆写父类的方法</span>
  <span class="token metadata function">@override</span>       <span class="token comment">//可以写也可以不写  建议在覆写父类方法的时候加上 @override</span>
  <span class="token keyword">void</span> <span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;姓名：</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>name</span><span class="token punctuation">}</span></span><span class="token string">---年龄：</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>age</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token metadata function">@override</span>
  <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>name</span><span class="token punctuation">}</span></span><span class="token string">的工作是写代码&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token class-name">Web</span> w<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Web</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;李四&#39;</span></span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  w<span class="token punctuation">.</span><span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  w<span class="token punctuation">.</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子类调用父类方法" tabindex="-1"><a class="header-anchor" href="#子类调用父类方法" aria-hidden="true">#</a> 子类调用父类方法</h3><ul><li><code>super</code> 关键字</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">/*
面向对象的三大特性：封装 、继承、多态


Dart中的类的继承：
    1、子类使用extends关键词来继承父类
    2、子类会继承父类里面可见的属性和方法 但是不会继承构造函数
    3、子类能复写父类的方法 getter和setter

*/</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  num age<span class="token punctuation">;</span>
  <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>name</span><span class="token punctuation">}</span></span><span class="token string">---</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>age</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>name</span><span class="token punctuation">}</span></span><span class="token string">在工作...&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Web</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
  <span class="token class-name">Web</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> num age<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;run&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//子类调用父类的方法</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//覆写父类的方法</span>
  <span class="token metadata function">@override</span>       <span class="token comment">//可以写也可以不写  建议在覆写父类方法的时候加上 @override</span>
  <span class="token keyword">void</span> <span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;姓名：</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>name</span><span class="token punctuation">}</span></span><span class="token string">---年龄：</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>age</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token class-name">Web</span> w<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Web</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;李四&#39;</span></span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// w.printInfo();</span>
  w<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="抽象-多态-接口" tabindex="-1"><a class="header-anchor" href="#抽象-多态-接口" aria-hidden="true">#</a> 抽象，多态，接口</h2><h3 id="抽象" tabindex="-1"><a class="header-anchor" href="#抽象" aria-hidden="true">#</a> 抽象</h3><ul><li>关键字 <code>abstract</code></li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//抽象方法</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//抽象方法</span>
  <span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;我是一个抽象类里面的普通方法&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;小狗在吃骨头&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO: implement run</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;小狗在跑&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO: implement eat</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;小猫在吃老鼠&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO: implement run</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;小猫在跑&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token class-name">Dog</span> d<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  d<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  d<span class="token punctuation">.</span><span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">Cat</span> c<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  c<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  c<span class="token punctuation">.</span><span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Animal a=new Animal();   //抽象类没法直接被实例化</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h3><ul><li>多态的实现，就是通过抽象类。多态就是父类定义一个方法不去实现，让继承他的子类去实现，每个子类有不同的表现。</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//抽象方法</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;小狗在吃骨头&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;run&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;小猫在吃老鼠&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;run&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token comment">// Dog d=new Dog();</span>
  <span class="token comment">// d.eat();</span>
  <span class="token comment">// d.run();</span>

  <span class="token comment">// Cat c=new Cat();</span>
  <span class="token comment">// c.eat();</span>

  <span class="token class-name">Animal</span> d<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  d<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 小狗在吃骨头</span>

  <span class="token class-name">Animal</span> c<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  c<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 小猫在吃老鼠</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h3><ul><li><p><code>dart</code> 的接口没有 <code>interface</code> 关键字定义接口，而是普通类或抽象类都可以作为接口被实现。</p></li><li><p>同样使用 <code>implements</code> 关键字进行实现。</p></li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">/*
定义一个DB库 支持 mysql  mssql  mongodb

mysql  mssql  mongodb三个类里面都有同样的方法

*/</span>


<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Db</span><span class="token punctuation">{</span>   <span class="token comment">//当做接口   接口：就是约定 、规范</span>
    late <span class="token class-name">String</span> uri<span class="token punctuation">;</span>      <span class="token comment">//数据库的链接地址</span>
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">String</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Mysql</span> <span class="token keyword">implements</span> <span class="token class-name">Db</span><span class="token punctuation">{</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">String</span> uri<span class="token punctuation">;</span>

  <span class="token class-name">Mysql</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>uri<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token function">add</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO: implement add</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;这是mysql的add方法&#39;</span></span><span class="token operator">+</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO: implement delete</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO: implement save</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MsSql</span> <span class="token keyword">implements</span> <span class="token class-name">Db</span><span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  late <span class="token class-name">String</span> uri<span class="token punctuation">;</span>
  <span class="token metadata function">@override</span>
  <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">String</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;这是mssql的add方法&#39;</span></span><span class="token operator">+</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO: implement delete</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO: implement save</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token class-name">Mysql</span> mysql<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Mysql</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;xxxxxx&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  mysql<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;1243214&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mixins" tabindex="-1"><a class="header-anchor" href="#mixins" aria-hidden="true">#</a> mixins</h2><h3 id="一个类实现多个接口" tabindex="-1"><a class="header-anchor" href="#一个类实现多个接口" aria-hidden="true">#</a> 一个类实现多个接口</h3><ul><li><code>implements</code> 关键字</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">/*
Dart中一个类实现多个接口：
*/</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
  late <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token function">printA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">{</span>
  <span class="token function">printB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token keyword">implements</span> <span class="token class-name">A</span><span class="token punctuation">,</span><span class="token class-name">B</span><span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  late <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token metadata function">@override</span>
  <span class="token function">printA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;printA&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token metadata function">@override</span>
  <span class="token function">printB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO: implement printB</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token class-name">C</span> c<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  c<span class="token punctuation">.</span><span class="token function">printA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mixins-绝不是继承-也不是接口-而是一种全新的特性" tabindex="-1"><a class="header-anchor" href="#mixins-绝不是继承-也不是接口-而是一种全新的特性" aria-hidden="true">#</a> mixins 绝不是继承，也不是接口，而是一种全新的特性</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> info<span class="token operator">=</span><span class="token string-literal"><span class="token string">&quot;this is A&quot;</span></span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">printA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;A&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>
  <span class="token keyword">void</span> <span class="token function">printB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;B&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token keyword">with</span> <span class="token class-name">A</span><span class="token punctuation">,</span><span class="token class-name">B</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> c<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  c<span class="token punctuation">.</span><span class="token function">printA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// A</span>
  c<span class="token punctuation">.</span><span class="token function">printB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// B</span>
  <span class="token function">print</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// this is A</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多种类型的混入" tabindex="-1"><a class="header-anchor" href="#多种类型的混入" aria-hidden="true">#</a> 多种类型的混入</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
  <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  num age<span class="token punctuation">;</span>
  <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>name</span><span class="token punctuation">}</span></span><span class="token string">----</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>age</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Person Run&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> info<span class="token operator">=</span><span class="token string-literal"><span class="token string">&quot;this is A&quot;</span></span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">printA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;A&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;A Run&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>
  <span class="token keyword">void</span> <span class="token function">printB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;B&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;B Run&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token keyword">with</span> <span class="token class-name">B</span><span class="token punctuation">,</span><span class="token class-name">A</span><span class="token punctuation">{</span>
  <span class="token class-name">C</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> num age<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> c<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">C</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;张三&#39;</span></span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  c<span class="token punctuation">.</span><span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// c.printB();</span>
  <span class="token comment">// print(c.info);</span>
  c<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// B Run</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h2><h3 id="泛型方法" tabindex="-1"><a class="header-anchor" href="#泛型方法" aria-hidden="true">#</a> 泛型方法</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>  getData<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">T</span> value<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token comment">// print(getData(21));</span>
    <span class="token comment">// print(getData(&#39;xxx&#39;));</span>
    <span class="token comment">// getData&lt;String&gt;(&#39;你好&#39;);</span>
    <span class="token function">print</span><span class="token punctuation">(</span>getData<span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型类" tabindex="-1"><a class="header-anchor" href="#泛型类" aria-hidden="true">#</a> 泛型类</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">MyList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token class-name">List</span> list <span class="token operator">=</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">T</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token class-name">List</span> <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> list<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">List</span> list2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span><span class="token punctuation">.</span><span class="token function">filled</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  list2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
  list2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">13</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>list2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型接口" tabindex="-1"><a class="header-anchor" href="#泛型接口" aria-hidden="true">#</a> 泛型接口</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Cache</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token function">getByKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">setByKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">T</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">FileCache</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">Cache</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token function">getByKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">setByKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">T</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;我是文件缓存 把key=</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">key</span><span class="token punctuation">}</span></span><span class="token string">  value=</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">value</span><span class="token punctuation">}</span></span><span class="token string">的数据写入到了文件中&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MemoryCache</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">Cache</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token function">getByKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">setByKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">T</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;我是内存缓存 把key=</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">key</span><span class="token punctuation">}</span></span><span class="token string">  value=</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">value</span><span class="token punctuation">}</span></span><span class="token string"> -写入到了内存中&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// MemoryCache m=new MemoryCache&lt;String&gt;();</span>
  <span class="token comment">//  m.setByKey(&#39;index&#39;, &#39;首页数据&#39;);</span>

  <span class="token class-name">MemoryCache</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MemoryCache</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  m<span class="token punctuation">.</span><span class="token function">setByKey</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;index&#39;</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string-literal"><span class="token string">&quot;name&quot;</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;张三&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;age&quot;</span></span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异步" tabindex="-1"><a class="header-anchor" href="#异步" aria-hidden="true">#</a> 异步</h2><h3 id="async-和-await" tabindex="-1"><a class="header-anchor" href="#async-和-await" aria-hidden="true">#</a> <code>async</code> 和 <code>await</code></h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;dart:io&#39;</span></span><span class="token punctuation">;</span>

<span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token class-name">Future</span><span class="token punctuation">.</span><span class="token function">delayed</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">(</span>seconds<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">&quot;hello world&quot;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;main start&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;main end&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="future-和-then" tabindex="-1"><a class="header-anchor" href="#future-和-then" aria-hidden="true">#</a> <code>Future</code> 和 <code>then</code></h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;dart:io&#39;</span></span><span class="token punctuation">;</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;main start&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 2秒后执行的代码</span>
  <span class="token class-name">Future</span><span class="token punctuation">.</span><span class="token function">delayed</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">(</span>seconds<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">&quot;hello 111&quot;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 3秒后执行的代码</span>
  <span class="token class-name">Future</span><span class="token punctuation">.</span><span class="token function">delayed</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">(</span>seconds<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">&quot;hello 222&quot;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;main end&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="库-系统库-第三方库" tabindex="-1"><a class="header-anchor" href="#库-系统库-第三方库" aria-hidden="true">#</a> 库，系统库，第三方库</h2>`,122),b=t("<li><p>Dart 中的库主要有三种：</p></li><li><p>1、我们自定义的库</p><ul><li><code>import &#39;lib/xxx.dart&#39;;</code></li></ul></li><li><p>2、系统内置库</p><ul><li><code>import &#39;dart:math&#39;;</code></li><li><code>import &#39;dart:io&#39;;</code></li><li><code>import &#39;dart:convert&#39;;</code></li></ul></li>",3),g=n("p",null,[s("3、"),n("code",null,"Pub"),s(" 包管理系统中的库")],-1),h={href:"https://pub.dev/packages",target:"_blank",rel:"noopener noreferrer"},f={href:"https://pub.flutter-io.cn/packages",target:"_blank",rel:"noopener noreferrer"},y={href:"https://pub.dartlang.org/flutter/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://app.quicktype.io/",target:"_blank",rel:"noopener noreferrer"},q=t("<li><p>1、需要在自己想项目根目录新建一个 <code>pubspec.yaml</code></p></li><li><p>2、在 <code>pubspec.yaml</code> 文件 然后配置名称 、描述、依赖等信息</p></li><li><p>3、然后运行 <code>pub get</code> 获取包下载到本地</p></li><li><p>4、项目中引入库 <code>import &#39;package:http/http.dart&#39; as http;</code> 看文档使用</p></li>",4),x=t(`<h3 id="内置库" tabindex="-1"><a class="header-anchor" href="#内置库" aria-hidden="true">#</a> 内置库</h3><ul><li>请求数据</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;dart:io&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;dart:convert&#39;</span></span><span class="token punctuation">;</span>


<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getDataFromZhihuAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//api接口： http://news-at.zhihu.com/api/3/stories/latest</span>
<span class="token function">getDataFromZhihuAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span><span class="token punctuation">{</span>
  <span class="token comment">//1、创建HttpClient对象</span>
  <span class="token keyword">var</span> httpClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HttpClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//2、创建Uri对象</span>
  <span class="token keyword">var</span> uri <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uri</span><span class="token punctuation">.</span><span class="token function">http</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;news-at.zhihu.com&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;/api/3/stories/latest&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//3、发起请求，等待请求</span>
  <span class="token keyword">var</span> request <span class="token operator">=</span> <span class="token keyword">await</span> httpClient<span class="token punctuation">.</span><span class="token function">getUrl</span><span class="token punctuation">(</span>uri<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//4、关闭请求，等待响应</span>
  <span class="token keyword">var</span> response <span class="token operator">=</span> <span class="token keyword">await</span> request<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//5、解码响应的内容</span>
  <span class="token keyword">return</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span>utf8<span class="token punctuation">.</span>decoder<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="库名冲突解决" tabindex="-1"><a class="header-anchor" href="#库名冲突解决" aria-hidden="true">#</a> 库名冲突解决</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>
<span class="token comment">/*
1、冲突解决
当引入两个库中有相同名称标识符的时候，如果是java通常我们通过写上完整的包名路径来指定使用的具体标识符，甚至不用import都可以，但是Dart里面是必须import的。当冲突的时候，可以使用as关键字来指定库的前缀。如下例子所示：

    import &#39;package:lib1/lib1.dart&#39;;
    import &#39;package:lib2/lib2.dart&#39; as lib2;


    Element element1 = new Element();           // Uses Element from lib1.
    lib2.Element element2 = new lib2.Element(); // Uses Element from lib2.

*/</span>


<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;lib/Person1.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;lib/Person2.dart&#39;</span></span> <span class="token operator">as</span> lib<span class="token punctuation">;</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Person</span> p1<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;张三&#39;</span></span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  p1<span class="token punctuation">.</span><span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


  <span class="token class-name"><span class="token namespace">lib<span class="token punctuation">.</span></span>Person</span> p2<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">lib<span class="token punctuation">.</span></span>Person</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;李四&#39;</span></span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  p2<span class="token punctuation">.</span><span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入部分" tabindex="-1"><a class="header-anchor" href="#导入部分" aria-hidden="true">#</a> 导入部分</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">/*
部分导入
  如果只需要导入库的一部分，有两种模式：

     模式一：只导入需要的部分，使用show关键字，如下例子所示：
      import &#39;package:lib1/lib1.dart&#39; show foo;

     模式二：隐藏不需要的部分，使用hide关键字，如下例子所示：
      import &#39;package:lib2/lib2.dart&#39; hide foo;

*/</span>

<span class="token comment">// import &#39;lib/myMath.dart&#39; show getAge;</span>

 <span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;lib/myMath.dart&#39;</span></span> <span class="token keyword">hide</span> getName<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//  getName();</span>
  <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="延迟加载" tabindex="-1"><a class="header-anchor" href="#延迟加载" aria-hidden="true">#</a> 延迟加载</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>
<span class="token comment">/*
延迟加载

    也称为懒加载，可以在需要的时候再进行加载。
    懒加载的最大好处是可以减少APP的启动时间。

    懒加载使用deferred as关键字来指定，如下例子所示：

    import &#39;package:deferred/hello.dart&#39; deferred as hello;

    当需要使用的时候，需要使用loadLibrary()方法来加载：

    greet() async {
      await hello.loadLibrary();
      hello.printGreeting();
    }

*/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异常" tabindex="-1"><a class="header-anchor" href="#异常" aria-hidden="true">#</a> 异常</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>
<span class="token comment">/*

Dart中的异常处理

    1、on 捕获指定的异常
    2、catch 捕获所有的异常
    3、rethrow 重新抛出异常
    4、throw 用来抛出异常

*/</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">on</span> <span class="token class-name">FormatException</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;main()方法捕获了异常：</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">e</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;finally&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">FormatException</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;格式化异常&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dart-2-13-后-新特性" tabindex="-1"><a class="header-anchor" href="#dart-2-13-后-新特性" aria-hidden="true">#</a> dart 2.13 后 新特性</h2><h3 id="空安全" tabindex="-1"><a class="header-anchor" href="#空安全" aria-hidden="true">#</a> 空安全</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">/*
  Null safety翻译成中文的意思是空安全。
  null safety 可以帮助开发者避免一些日常开发中很难被发现的错误，并且额外的好处是可以改善性能。
  Flutter2.2.0（2021年5月19日发布） 之后的版本都要求使用null safety。
  ? 可空类型
  ! 类型断言

*/</span>

<span class="token class-name">String</span><span class="token operator">?</span> <span class="token function">getData</span><span class="token punctuation">(</span>apiUrl<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>apiUrl<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">&quot;this is server data&quot;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// void printLength(String? str){</span>
<span class="token comment">//   // print(str!.length);</span>
<span class="token comment">//   if (str!=null){</span>
<span class="token comment">//     print(str.length);</span>
<span class="token comment">//   }</span>
<span class="token comment">// }</span>

<span class="token keyword">void</span> <span class="token function">printLength</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token operator">?</span> str<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>str<span class="token operator">!</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;str is null&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token comment">//1、 ? 可空类型</span>
  <span class="token comment">// int a=123;</span>
  <span class="token comment">// print(a);</span>

  <span class="token comment">// String username=&quot;张三&quot;;</span>
  <span class="token comment">// print(username);</span>

  <span class="token comment">// List&lt;String&gt; l1=[&quot;张三&quot;,&quot;李四&quot;,&quot;王五&quot;];</span>
  <span class="token comment">// print(l1);</span>

  <span class="token comment">// int a=123;  //非空的int类型</span>
  <span class="token comment">// a=null;  //A value of type &#39;Null&#39; can&#39;t be assigned to a variable of type &#39;int&#39;</span>

  <span class="token comment">// String username=&quot;张三&quot;;  //非空的String类型</span>
  <span class="token comment">// username=null;   //A value of type &#39;Null&#39; can&#39;t be assigned to a variable of type &#39;String&#39;.</span>

  <span class="token comment">// String? username=&quot;张三&quot;;   // String?  表示username是一个可空类型</span>
  <span class="token comment">// username=null;</span>
  <span class="token comment">// print(username);</span>

  <span class="token comment">// int? a=123;  //  int? 表示a是一个可空类型</span>
  <span class="token comment">// a=null;</span>
  <span class="token comment">// print(a);</span>

  <span class="token comment">// List&lt;String&gt; l1=[&quot;张三&quot;,&quot;李四&quot;,&quot;王五&quot;];</span>
  <span class="token comment">// l1=null;  //A value of type &#39;Null&#39; can&#39;t be assigned to a variable of type &#39;List&lt;String&gt;&#39;.</span>


  <span class="token comment">// List&lt;String&gt;? l1=[&quot;张三&quot;,&quot;李四&quot;,&quot;王五&quot;];</span>
  <span class="token comment">// l1=null;</span>
  <span class="token comment">// print(l1);</span>


  <span class="token comment">//调用方法</span>
  <span class="token comment">// print(getData(&quot;http://www.itying.com&quot;));</span>
  <span class="token comment">// print(getData(null));</span>

<span class="token comment">//2. ! 类型断言</span>

  <span class="token comment">// String? str=&quot;this is str&quot;;</span>
  <span class="token comment">// str=null;</span>
  <span class="token comment">// print(str!.length);</span>
  <span class="token comment">//类型断言: 如果str不等于null 会打印str的长度，如果等于null会抛出异常</span>
  <span class="token comment">//  printLength(&quot;str&quot;);</span>

   <span class="token function">printLength</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="late-关键字" tabindex="-1"><a class="header-anchor" href="#late-关键字" aria-hidden="true">#</a> late 关键字</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">/*
Null safety翻译成中文的意思是空安全。

late 关键字主要用于延迟初始化。

*/</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  late <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  late int age<span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> int age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>name</span><span class="token punctuation">}</span></span><span class="token string">---</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>age</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  p<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;张三&quot;</span></span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="late-接口" tabindex="-1"><a class="header-anchor" href="#late-接口" aria-hidden="true">#</a> late 接口</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">/*
和Java一样，dart也有接口，但是和Java还是有区别的。
  首先，dart的接口没有interface关键字定义接口，而是普通类或抽象类都可以作为接口被实现。
  同样使用implements关键字进行实现。
  但是dart的接口有点奇怪，如果实现的类是普通类，会将普通类和抽象中的属性的方法全部需要覆写一遍。
  而因为抽象类可以定义抽象方法，普通类不可以，所以一般如果要实现像Java接口那样的方式，一般会使用抽象类。
  建议使用抽象类定义接口。
*/</span>

<span class="token comment">/*
定义一个DB库 支持 mysql  mssql  mongodb
mysql  mssql  mongodb三个类里面都有同样的方法
*/</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Db</span><span class="token punctuation">{</span>   <span class="token comment">//当做接口   接口：就是约定 、规范</span>
    late <span class="token class-name">String</span> uri<span class="token punctuation">;</span> <span class="token comment">//数据库的链接地址</span>
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">String</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Mysql</span> <span class="token keyword">implements</span> <span class="token class-name">Db</span><span class="token punctuation">{</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">String</span> uri<span class="token punctuation">;</span>
  <span class="token class-name">Mysql</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>uri<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token function">add</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO: implement add</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;这是mysql的add方法&#39;</span></span><span class="token operator">+</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO: implement delete</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO: implement save</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MsSql</span> <span class="token keyword">implements</span> <span class="token class-name">Db</span><span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  late <span class="token class-name">String</span> uri<span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">String</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;这是mssql的add方法&#39;</span></span><span class="token operator">+</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO: implement delete</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO: implement save</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token class-name">Mysql</span> mysql<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Mysql</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;xxxxxx&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  mysql<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;1243214&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="required-关键字" tabindex="-1"><a class="header-anchor" href="#required-关键字" aria-hidden="true">#</a> required 关键字</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">/*
required关键词:
    最开始 @required 是注解
    现在它已经作为内置修饰符。
    主要用于允许根据需要标记任何命名参数（函数或类），使得它们不为空。因为可选参数中必须有个 required 参数或者该参数有个默认值。

*/</span>
<span class="token class-name">String</span> <span class="token function">printUserInfo</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">,</span> <span class="token punctuation">{</span>int age<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token class-name">String</span> sex<span class="token operator">=</span><span class="token string-literal"><span class="token string">&quot;男&quot;</span></span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//行参</span>
  <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">&quot;姓名:</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">username</span></span><span class="token string">---性别:</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">sex</span></span><span class="token string">--年龄:</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">age</span></span><span class="token string">&quot;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">String</span> <span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">,</span> <span class="token punctuation">{</span>required int age<span class="token punctuation">,</span> required <span class="token class-name">String</span> sex<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//行参</span>
  <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">&quot;姓名:</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">username</span></span><span class="token string">---性别:</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">sex</span></span><span class="token string">--年龄:</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">age</span></span><span class="token string">&quot;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token function">printUserInfo</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;张三&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token function">printUserInfo</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;张三&#39;</span></span><span class="token punctuation">,</span>age<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>sex<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;女&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//age 和 sex必须传入</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;张三&#39;</span></span><span class="token punctuation">,</span>age<span class="token punctuation">:</span> <span class="token number">22</span><span class="token punctuation">,</span>sex<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;女&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="required-命名参数" tabindex="-1"><a class="header-anchor" href="#required-命名参数" aria-hidden="true">#</a> required 命名参数</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">/*

required关键词:
    最开始 @required 是注解
    现在它已经作为内置修饰符。
    主要用于允许根据需要标记任何命名参数（函数或类），使得它们不为空。因为可选参数中必须有个 required 参数或者该参数有个默认值。

*/</span>

<span class="token comment">//表示 name 和age 是必须传入的命名参数</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  int age<span class="token punctuation">;</span>
  <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">{</span>required <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span>required <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//表示 name 和age 必须传入</span>

  <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>name</span><span class="token punctuation">}</span></span><span class="token string">---</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>age</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token class-name">Person</span> p<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>
     name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;张三&quot;</span></span><span class="token punctuation">,</span>
     age<span class="token punctuation">:</span> <span class="token number">20</span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token function">print</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="required-参数可选" tabindex="-1"><a class="header-anchor" href="#required-参数可选" aria-hidden="true">#</a> required 参数可选</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">/*
required关键词:

    最开始 @required 是注解

    现在它已经作为内置修饰符。

    主要用于允许根据需要标记任何命名参数（函数或类），使得它们不为空。因为可选参数中必须有个 required 参数或者该参数有个默认值。

*/</span>

<span class="token comment">// name 可以传入也可以不传入   age必须传入</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span><span class="token operator">?</span> name<span class="token punctuation">;</span>   <span class="token comment">//可空属性</span>
  int age<span class="token punctuation">;</span>
  <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span>required <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//表示 name 可以传入也可以不传入   age必须传入</span>

  <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>name</span><span class="token punctuation">}</span></span><span class="token string">---</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>age</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token class-name">Person</span> p<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>
     name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;张三&quot;</span></span><span class="token punctuation">,</span>
     age<span class="token punctuation">:</span> <span class="token number">20</span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token function">print</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//张三---20</span>

  <span class="token class-name">Person</span> p1<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>
     age<span class="token punctuation">:</span> <span class="token number">20</span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token function">print</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//null---20</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="普通构造函数和常量构造函数" tabindex="-1"><a class="header-anchor" href="#普通构造函数和常量构造函数" aria-hidden="true">#</a> 普通构造函数和常量构造函数</h2><ul><li>普通构造函数</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Container</span><span class="token punctuation">{</span>
  int width<span class="token punctuation">;</span>
  int height<span class="token punctuation">;</span>
  <span class="token class-name">Container</span><span class="token punctuation">(</span><span class="token punctuation">{</span>required <span class="token keyword">this</span><span class="token punctuation">.</span>width<span class="token punctuation">,</span>required <span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token keyword">var</span> c1<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>height<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> c2<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>height<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span> <span class="token function">identical</span><span class="token punctuation">(</span>c1<span class="token punctuation">,</span> c2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//false   c1和c2在内存中存储了2份</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>常量构造函数</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">/*
常量构造函数总结如下几点：

  1、常量构造函数需以const关键字修饰
  2、const构造函数必须用于成员变量都是final的类
  3、如果实例化时不加const修饰符，即使调用的是常量构造函数，实例化的对象也不是常量实例
  4、实例化常量构造函数的时候，多个地方创建这个对象，如果传入的值相同，只会保留一个对象。
  5、Flutter中const 修饰不仅仅是节省组件构建时的内存开销，Flutter 在需要重新构建组件的时候，由于这个组件是不应该改变的，重新构建没有任何意义，因此 Flutter 不会重建构建 const 组件
*/</span>

<span class="token comment">//常量构造函数</span>
<span class="token keyword">class</span> <span class="token class-name">Container</span><span class="token punctuation">{</span>
  <span class="token keyword">final</span> int width<span class="token punctuation">;</span>
  <span class="token keyword">final</span> int height<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token class-name">Container</span><span class="token punctuation">(</span><span class="token punctuation">{</span>required <span class="token keyword">this</span><span class="token punctuation">.</span>width<span class="token punctuation">,</span>required <span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token keyword">var</span> c1<span class="token operator">=</span><span class="token class-name">Container</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>height<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> c2<span class="token operator">=</span><span class="token class-name">Container</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>height<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token function">identical</span><span class="token punctuation">(</span>c1<span class="token punctuation">,</span> c2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>

  <span class="token keyword">var</span> c3<span class="token operator">=</span><span class="token keyword">const</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>height<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> c4<span class="token operator">=</span><span class="token keyword">const</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>height<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token function">identical</span><span class="token punctuation">(</span>c3<span class="token punctuation">,</span> c4<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>

  <span class="token keyword">var</span> c5<span class="token operator">=</span><span class="token keyword">const</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>height<span class="token punctuation">:</span> <span class="token number">110</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> c6<span class="token operator">=</span><span class="token keyword">const</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">120</span><span class="token punctuation">,</span>height<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token function">identical</span><span class="token punctuation">(</span>c5<span class="token punctuation">,</span> c6<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>

<span class="token punctuation">}</span>
<span class="token comment">// 实例化常量构造函数的时候，多个地方创建这个对象，如果传入的值相同，只会保留一个对象。</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,30),L={href:"https://www.bilibili.com/video/BV1S4411E7LY",target:"_blank",rel:"noopener noreferrer"},S={href:"https://pub.dev/packages",target:"_blank",rel:"noopener noreferrer"},P={href:"https://app.quicktype.io/",target:"_blank",rel:"noopener noreferrer"};function N(D,_){const a=i("ExternalLinkIcon");return c(),l("div",null,[u,d,r,n("ul",null,[n("li",null,[n("a",k,[s("官网"),e(a)])]),n("li",null,[n("a",v,[s("环境搭建"),e(a)])])]),m,n("ul",null,[b,n("li",null,[g,n("ul",null,[n("li",null,[n("p",null,[n("a",h,[s("https://pub.dev/packages"),e(a)])])]),n("li",null,[n("p",null,[n("a",f,[s("https://pub.flutter-io.cn/packages"),e(a)])])]),n("li",null,[n("p",null,[n("a",y,[s("https://pub.dartlang.org/flutter/"),e(a)])])]),n("li",null,[n("p",null,[n("a",w,[s("json 转 dart"),e(a)])])]),q])])]),x,n("ul",null,[n("li",null,[n("a",L,[s("Dart Flutter 教程_Dart Flutter3.x 入门实战视频教程"),e(a)])]),n("li",null,[n("a",S,[s("https://pub.dev/packages"),e(a)])]),n("li",null,[n("a",P,[s("json 转 dart"),e(a)])])])])}const I=p(o,[["render",N],["__file","index.html.vue"]]);export{I as default};
