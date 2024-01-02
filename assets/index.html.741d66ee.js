import{_ as n,o as s,c as a,e as t}from"./app.26c798e2.js";const p={},o=t(`<h2 id="nslog-介绍" tabindex="-1"><a class="header-anchor" href="#nslog-介绍" aria-hidden="true">#</a> NSLog 介绍</h2><p>NSLog 是 Foundation 框架中的一个函数，用于向标准输出流（stdout）或者标准错误流（stderr）输出日志信息。NSLog 函数的定义如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// void NSLog(NSString *format, ...);</span>

<span class="token comment">// 输出 hello world</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span>@<span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 变量</span>
NSString <span class="token operator">*</span>name <span class="token operator">=</span> @<span class="token string">&quot;world&quot;</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span>@<span class="token string">&quot;hello %@&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 多个变量</span>
NSString <span class="token operator">*</span>name <span class="token operator">=</span> @<span class="token string">&quot;world&quot;</span><span class="token punctuation">;</span>
NSString <span class="token operator">*</span>age <span class="token operator">=</span> @<span class="token string">&quot;18&quot;</span><span class="token punctuation">;</span>

<span class="token function">NSLog</span><span class="token punctuation">(</span>@<span class="token string">&quot;hello %@, age is %@&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="oc-中数据类型" tabindex="-1"><a class="header-anchor" href="#oc-中数据类型" aria-hidden="true">#</a> oc 中数据类型</h2><h3 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a> 基本数据类型</h3><ul><li>整型：int、short、long、long long</li><li>浮点型：float、double</li><li>字符型：char</li><li>布尔型：BOOL</li></ul><h3 id="指针类型" tabindex="-1"><a class="header-anchor" href="#指针类型" aria-hidden="true">#</a> 指针类型</h3><ul><li>指针：int _、float _、char *</li><li>对象：NSObject _、NSString _、NSArray _、NSDictionary _</li><li>id 类型：id</li></ul><h3 id="block-类型" tabindex="-1"><a class="header-anchor" href="#block-类型" aria-hidden="true">#</a> block 类型</h3><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token operator">-</span> <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">^</span>blockName<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token operator">^</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token operator">-</span> <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">^</span>blockName<span class="token punctuation">)</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token operator">^</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span>name<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特殊类型" tabindex="-1"><a class="header-anchor" href="#特殊类型" aria-hidden="true">#</a> 特殊类型</h3><ul><li>nil：空对象</li><li>NULL：空指针</li><li>Nil：空类</li><li>SEL：方法选择器</li></ul><h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h2><h3 id="类的声明" tabindex="-1"><a class="header-anchor" href="#类的声明" aria-hidden="true">#</a> 类的声明</h3><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// 类的声明</span>
<span class="token keyword">@interface</span> Person <span class="token punctuation">:</span> NSObject

<span class="token comment">// 属性</span>
<span class="token keyword">@property</span> <span class="token punctuation">(</span>nonatomic<span class="token punctuation">,</span> copy<span class="token punctuation">)</span> NSString <span class="token operator">*</span>name<span class="token punctuation">;</span>
<span class="token keyword">@property</span> <span class="token punctuation">(</span>nonatomic<span class="token punctuation">,</span> assign<span class="token punctuation">)</span> NSInteger age<span class="token punctuation">;</span>

<span class="token comment">// 方法</span>
<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>eat<span class="token punctuation">;</span>
<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>run<span class="token punctuation">;</span>

<span class="token comment">// 有参方法</span>
<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>eat<span class="token punctuation">:</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>food<span class="token punctuation">;</span>

<span class="token comment">// 多参数方法</span>
<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>eat<span class="token punctuation">:</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>food drink<span class="token punctuation">:</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>drink<span class="token punctuation">;</span>

<span class="token comment">// 有返回值的方法</span>
<span class="token operator">-</span> <span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>eat<span class="token punctuation">:</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>food drink<span class="token punctuation">:</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>drink<span class="token punctuation">;</span>

<span class="token comment">// 静态方法</span>
<span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>eat<span class="token punctuation">;</span>

<span class="token keyword">@end</span>

<span class="token comment">// 类的实现</span>
<span class="token keyword">@implementation</span> Person

<span class="token comment">// 方法的实现</span>
<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>eat <span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;eat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>run <span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;run&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>eat<span class="token punctuation">:</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>food <span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;eat %@&quot;</span><span class="token punctuation">,</span> food<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>eat<span class="token punctuation">:</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>food drink<span class="token punctuation">:</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>drink <span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;eat %@ drink %@&quot;</span><span class="token punctuation">,</span> food<span class="token punctuation">,</span> drink<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 有返回值的方法</span>
<span class="token operator">-</span> <span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>eat<span class="token punctuation">:</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>food drink<span class="token punctuation">:</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>drink <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>NSString stringWithFormat<span class="token punctuation">:</span><span class="token string">@&quot;eat %@ drink %@&quot;</span><span class="token punctuation">,</span> food<span class="token punctuation">,</span> drink<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 静态方法的实现</span>
<span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>eat <span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;eat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">@end</span>

<span class="token comment">// 使用</span>
<span class="token comment">// Person *person = [[Person alloc] init];</span>
<span class="token comment">// 或者 new</span>
Person <span class="token operator">*</span>person <span class="token operator">=</span> <span class="token punctuation">[</span>Person new<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 属性赋值</span>
person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">@&quot;name&quot;</span><span class="token punctuation">;</span>
person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>

<span class="token comment">// 方法调用</span>
<span class="token punctuation">[</span>person eat<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span>person eat<span class="token punctuation">:</span><span class="token string">@&quot;food&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span>person eat<span class="token punctuation">:</span><span class="token string">@&quot;food&quot;</span> drink<span class="token punctuation">:</span><span class="token string">@&quot;drink&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pragma-mark-使用" tabindex="-1"><a class="header-anchor" href="#pragma-mark-使用" aria-hidden="true">#</a> <code>#pragma mark</code> 使用</h2><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">mark <span class="token operator">-</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">mark 用于分组</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="static-关键字使用" tabindex="-1"><a class="header-anchor" href="#static-关键字使用" aria-hidden="true">#</a> static 关键字使用</h2><ul><li><code>static</code>: 修饰局部变量，修饰全局变量，修饰方法，修饰类。</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// static 修饰局部变量</span>

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>method <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    a<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%d&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// static 修饰全局变量</span>

<span class="token keyword">static</span> <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>method <span class="token punctuation">{</span>
    a<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%d&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// static 修饰方法</span>

<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;method&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>method <span class="token punctuation">{</span>
    <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// static 修饰类</span>

<span class="token keyword">static</span> NSString <span class="token operator">*</span>name <span class="token operator">=</span> <span class="token string">@&quot;name&quot;</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="self-与-super-关键字使用" tabindex="-1"><a class="header-anchor" href="#self-与-super-关键字使用" aria-hidden="true">#</a> self 与 super 关键字使用</h2><ul><li><code>self</code>: 指向当前对象的指针。</li><li><code>super</code>: 指向当前对象的父类对象的指针。</li></ul><h2 id="方法重写" tabindex="-1"><a class="header-anchor" href="#方法重写" aria-hidden="true">#</a> 方法重写</h2><ul><li>子类重写父类的方法，子类的方法会覆盖父类的方法。</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// 父类</span>
<span class="token keyword">@interface</span> Person <span class="token punctuation">:</span> NSObject

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>eat<span class="token punctuation">;</span>

<span class="token keyword">@end</span>


<span class="token keyword">@implementation</span> Person

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>eat <span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;eat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">@end</span>

<span class="token comment">// 子类</span>

<span class="token keyword">@interface</span> Student <span class="token punctuation">:</span> Person

<span class="token keyword">@end</span>

<span class="token keyword">@implementation</span> Student
<span class="token comment">// 重写父类的方法</span>
<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>eat <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token keyword">super</span> eat<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;eat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">@end</span>

<span class="token comment">// 使用</span>

Student <span class="token operator">*</span>student <span class="token operator">=</span> <span class="token punctuation">[</span>Student new<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span>student eat<span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="property-关键字使用" tabindex="-1"><a class="header-anchor" href="#property-关键字使用" aria-hidden="true">#</a> <code>@property</code> 关键字使用</h2><ul><li><code>@property</code> 用于声明属性，可以自动生成属性的 getter 和 setter 方法。</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// 声明属性</span>
<span class="token keyword">@property</span> <span class="token punctuation">(</span>nonatomic<span class="token punctuation">,</span> copy<span class="token punctuation">)</span> NSString <span class="token operator">*</span>name<span class="token punctuation">;</span>
<span class="token keyword">@property</span> <span class="token punctuation">(</span>nonatomic<span class="token punctuation">,</span> assign<span class="token punctuation">)</span> NSInteger age<span class="token punctuation">;</span>
<span class="token keyword">@property</span> <span class="token punctuation">(</span>nonatomic<span class="token punctuation">,</span> strong<span class="token punctuation">)</span> Person <span class="token operator">*</span>person<span class="token punctuation">;</span>

<span class="token comment">// 自动生成的 getter 和 setter 方法</span>
<span class="token operator">-</span> <span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>name<span class="token punctuation">;</span>
<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>setName<span class="token punctuation">:</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>name<span class="token punctuation">;</span>

<span class="token operator">-</span> <span class="token punctuation">(</span>NSInteger<span class="token punctuation">)</span>age<span class="token punctuation">;</span>
<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>setAge<span class="token punctuation">:</span><span class="token punctuation">(</span>NSInteger<span class="token punctuation">)</span>age<span class="token punctuation">;</span>

<span class="token operator">-</span> <span class="token punctuation">(</span>Person <span class="token operator">*</span><span class="token punctuation">)</span>person<span class="token punctuation">;</span>
<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>setPerson<span class="token punctuation">:</span><span class="token punctuation">(</span>Person <span class="token operator">*</span><span class="token punctuation">)</span>person<span class="token punctuation">;</span>

<span class="token comment">// 访问</span>
Person <span class="token operator">*</span>person <span class="token operator">=</span> <span class="token punctuation">[</span>Person new<span class="token punctuation">]</span><span class="token punctuation">;</span>
person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">@&quot;name&quot;</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="synthesize-关键字使用" tabindex="-1"><a class="header-anchor" href="#synthesize-关键字使用" aria-hidden="true">#</a> <code>@synthesize</code> 关键字使用</h2><ul><li><code>@synthesize</code> 用于指定属性的实现，可以指定属性的 getter 和 setter 方法的实现。</li><li>与 <code>@property</code> 关键字区别：<code>@property</code> 用于声明属性，<code>@synthesize</code> 用于指定属性的实现。</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code>
<span class="token comment">// 声明属性</span>
<span class="token keyword">@synthesize</span> name <span class="token operator">=</span> _name<span class="token punctuation">;</span>

<span class="token comment">// 自动生成的 getter 和 setter 方法</span>
<span class="token operator">-</span> <span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>name <span class="token punctuation">{</span>
    <span class="token keyword">return</span> _name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>setName<span class="token punctuation">:</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>name <span class="token punctuation">{</span>
    _name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重写构造方法" tabindex="-1"><a class="header-anchor" href="#重写构造方法" aria-hidden="true">#</a> 重写构造方法</h2><ul><li>重写构造方法，可以自定义初始化方法。</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// 父类</span>
<span class="token keyword">@interface</span> Person <span class="token punctuation">:</span> NSObject

<span class="token keyword">@property</span> <span class="token punctuation">(</span>nonatomic<span class="token punctuation">,</span> copy<span class="token punctuation">)</span> NSString <span class="token operator">*</span>name<span class="token punctuation">;</span>
<span class="token keyword">@property</span> <span class="token punctuation">(</span>nonatomic<span class="token punctuation">,</span> assign<span class="token punctuation">)</span> NSInteger age<span class="token punctuation">;</span>

<span class="token operator">-</span> <span class="token punctuation">(</span>instancetype<span class="token punctuation">)</span>initWithName<span class="token punctuation">:</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>name age<span class="token punctuation">:</span><span class="token punctuation">(</span>NSInteger<span class="token punctuation">)</span>age<span class="token punctuation">;</span>

<span class="token keyword">@end</span>

<span class="token keyword">@implementation</span> Person

<span class="token operator">-</span> <span class="token punctuation">(</span>instancetype<span class="token punctuation">)</span>initWithName<span class="token punctuation">:</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>name age<span class="token punctuation">:</span><span class="token punctuation">(</span>NSInteger<span class="token punctuation">)</span>age <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">self</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">super</span> init<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">self</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">@end</span>

<span class="token comment">// 子类</span>

<span class="token keyword">@interface</span> Student <span class="token punctuation">:</span> Person

<span class="token keyword">@property</span> <span class="token punctuation">(</span>nonatomic<span class="token punctuation">,</span> copy<span class="token punctuation">)</span> NSString <span class="token operator">*</span>school<span class="token punctuation">;</span>

<span class="token operator">-</span> <span class="token punctuation">(</span>instancetype<span class="token punctuation">)</span>initWithName<span class="token punctuation">:</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>name age<span class="token punctuation">:</span><span class="token punctuation">(</span>NSInteger<span class="token punctuation">)</span>age school<span class="token punctuation">:</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>school<span class="token punctuation">;</span>

<span class="token keyword">@end</span>

<span class="token keyword">@implementation</span> Student

<span class="token comment">// 重写父类的构造方法</span>
<span class="token operator">-</span> <span class="token punctuation">(</span>instancetype<span class="token punctuation">)</span>initWithName<span class="token punctuation">:</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>name age<span class="token punctuation">:</span><span class="token punctuation">(</span>NSInteger<span class="token punctuation">)</span>age school<span class="token punctuation">:</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>school <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">self</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">super</span> initWithName<span class="token punctuation">:</span>name age<span class="token punctuation">:</span>age<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>school <span class="token operator">=</span> school<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">self</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">@end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="class-关键字使用" tabindex="-1"><a class="header-anchor" href="#class-关键字使用" aria-hidden="true">#</a> <code>@class</code> 关键字使用</h2><ul><li><code>@class</code> 用于声明类，可以解决类的循环引用问题。</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// 声明类</span>
<span class="token keyword">@class</span> Person<span class="token punctuation">;</span>

<span class="token comment">// 使用类</span>
<span class="token keyword">@interface</span> Student <span class="token punctuation">:</span> NSObject

<span class="token keyword">@property</span> <span class="token punctuation">(</span>nonatomic<span class="token punctuation">,</span> strong<span class="token punctuation">)</span> Person <span class="token operator">*</span>person<span class="token punctuation">;</span>

<span class="token keyword">@end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="category-关键字使用" tabindex="-1"><a class="header-anchor" href="#category-关键字使用" aria-hidden="true">#</a> <code>category</code> 关键字使用</h2><ul><li><code>category</code> 用于给类添加方法，可以在不修改原有类的基础上，给类添加方法。</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// 声明类</span>
<span class="token keyword">@interface</span> Person <span class="token punctuation">:</span> NSObject

<span class="token keyword">@end</span>

<span class="token comment">// 实现类</span>
<span class="token keyword">@implementation</span> Person

<span class="token keyword">@end</span>


<span class="token comment">// 声明类的分类, 文件名：Person+Category.h</span>

<span class="token keyword">@interface</span> <span class="token function">Person</span> <span class="token punctuation">(</span>Category<span class="token punctuation">)</span>

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>eat<span class="token punctuation">;</span>

<span class="token keyword">@end</span>

<span class="token comment">// 实现类的分类</span>

<span class="token keyword">@implementation</span> <span class="token function">Person</span> <span class="token punctuation">(</span>Category<span class="token punctuation">)</span>

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>eat <span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;eat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">@end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="block-代码块" tabindex="-1"><a class="header-anchor" href="#block-代码块" aria-hidden="true">#</a> <code>block</code> 代码块</h2><ul><li><code>block</code> 用于封装代码，可以作为方法的参数，也可以作为方法的返回值。</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code>
<span class="token comment">// block 作为方法的参数</span>
<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>method<span class="token punctuation">:</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">^</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">)</span>block <span class="token punctuation">{</span>
    <span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用</span>
<span class="token punctuation">[</span><span class="token keyword">self</span> method<span class="token punctuation">:</span><span class="token operator">^</span><span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;block&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// block 作为方法的返回值</span>

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">^</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">)</span>method <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">^</span><span class="token punctuation">{</span>
        <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;block&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用</span>
<span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">^</span>block<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">self</span> method<span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="protocol-关键字使用" tabindex="-1"><a class="header-anchor" href="#protocol-关键字使用" aria-hidden="true">#</a> <code>Protocol</code> 关键字使用</h2><ul><li><code>Protocol</code> 用于声明协议，可以解决类的循环引用问题。</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// 声明协议</span>
<span class="token keyword">@protocol</span> PersonDelegate <span class="token operator">&lt;</span>NSObject<span class="token operator">&gt;</span>

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>eat<span class="token punctuation">;</span>

<span class="token keyword">@end</span>

<span class="token comment">// 使用协议</span>
<span class="token keyword">@interface</span> Person <span class="token punctuation">:</span> NSObject

<span class="token keyword">@property</span> <span class="token punctuation">(</span>nonatomic<span class="token punctuation">,</span> weak<span class="token punctuation">)</span> id<span class="token operator">&lt;</span>PersonDelegate<span class="token operator">&gt;</span> delegate<span class="token punctuation">;</span>

<span class="token keyword">@end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="foundation" tabindex="-1"><a class="header-anchor" href="#foundation" aria-hidden="true">#</a> Foundation</h2><ul><li>Foundation 框架是 iOS 开发中最常用的框架，Foundation 框架中包含了很多常用的类，如：NSString、NSArray、NSDictionary、NSDate、NSData 等。</li></ul><h3 id="nsstring" tabindex="-1"><a class="header-anchor" href="#nsstring" aria-hidden="true">#</a> NSString</h3><ul><li>NSString 是 Foundation 框架中的一个类，用于处理字符串。</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// 创建</span>
NSString <span class="token operator">*</span>str <span class="token operator">=</span> <span class="token string">@&quot;hello world&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 创建空字符串，给与赋值</span>
NSString <span class="token operator">*</span>str <span class="token operator">=</span> <span class="token punctuation">[</span>NSString string<span class="token punctuation">]</span><span class="token punctuation">;</span>
str <span class="token operator">=</span> <span class="token string">@&quot;hello world&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 创建 占位符</span>
NSString <span class="token operator">*</span>str <span class="token operator">=</span> <span class="token punctuation">[</span>NSString stringWithFormat<span class="token punctuation">:</span><span class="token string">@&quot;hello %@&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;world&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 长度</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%lu&quot;</span><span class="token punctuation">,</span> str<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 比较</span>
NSString <span class="token operator">*</span>str1 <span class="token operator">=</span> <span class="token string">@&quot;hello&quot;</span><span class="token punctuation">;</span>
NSString <span class="token operator">*</span>str2 <span class="token operator">=</span> <span class="token string">@&quot;world&quot;</span><span class="token punctuation">;</span>

<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>str1 isEqualToString<span class="token punctuation">:</span>str2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 拼接</span>
NSString <span class="token operator">*</span>str1 <span class="token operator">=</span> <span class="token string">@&quot;hello&quot;</span><span class="token punctuation">;</span>
NSString <span class="token operator">*</span>str2 <span class="token operator">=</span> <span class="token string">@&quot;world&quot;</span><span class="token punctuation">;</span>

NSString <span class="token operator">*</span>str3 <span class="token operator">=</span> <span class="token punctuation">[</span>str1 stringByAppendingString<span class="token punctuation">:</span>str2<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 截取</span>
NSString <span class="token operator">*</span>str <span class="token operator">=</span> <span class="token string">@&quot;hello world&quot;</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>str substringToIndex<span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 查找</span>
NSString <span class="token operator">*</span>str <span class="token operator">=</span> <span class="token string">@&quot;hello world&quot;</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%lu&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>str rangeOfString<span class="token punctuation">:</span><span class="token string">@&quot;world&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>location<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 替换</span>
NSString <span class="token operator">*</span>str <span class="token operator">=</span> <span class="token string">@&quot;hello world&quot;</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>str stringByReplacingOccurrencesOfString<span class="token punctuation">:</span><span class="token string">@&quot;world&quot;</span> withString<span class="token punctuation">:</span><span class="token string">@&quot;ios&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 大小写转换</span>
NSString <span class="token operator">*</span>str <span class="token operator">=</span> <span class="token string">@&quot;hello world&quot;</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>str uppercaseString<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>str lowercaseString<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 去除空格</span>
NSString <span class="token operator">*</span>str <span class="token operator">=</span> <span class="token string">@&quot; hello world &quot;</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>str stringByTrimmingCharactersInSet<span class="token punctuation">:</span><span class="token punctuation">[</span>NSCharacterSet whitespaceCharacterSet<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 分割</span>
NSString <span class="token operator">*</span>str <span class="token operator">=</span> <span class="token string">@&quot;hello world&quot;</span><span class="token punctuation">;</span>
NSArray <span class="token operator">*</span>array <span class="token operator">=</span> <span class="token punctuation">[</span>str componentsSeparatedByString<span class="token punctuation">:</span><span class="token string">@&quot; &quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 转换为基本数据类型</span>
NSString <span class="token operator">*</span>str <span class="token operator">=</span> <span class="token string">@&quot;123&quot;</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>str intValue<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// int 类型</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%f&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>str floatValue<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// float 类型</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%ld&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>str integerValue<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// long 类型</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%lld&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>str longLongValue<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// long long 类型</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>str boolValue<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// bool 类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nsarray" tabindex="-1"><a class="header-anchor" href="#nsarray" aria-hidden="true">#</a> NSArray</h3><ul><li>NSArray 是 Foundation 框架中的一个类，用于存储对象。</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// 创建</span>
NSArray <span class="token operator">*</span>array <span class="token operator">=</span> <span class="token operator">@</span><span class="token punctuation">[</span><span class="token string">@&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;world&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 创建空数组，给与赋值</span>
NSArray <span class="token operator">*</span>array <span class="token operator">=</span> <span class="token punctuation">[</span>NSArray array<span class="token punctuation">]</span><span class="token punctuation">;</span>
array <span class="token operator">=</span> <span class="token operator">@</span><span class="token punctuation">[</span><span class="token string">@&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;world&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 创建数组</span>
NSArray <span class="token operator">*</span>array <span class="token operator">=</span> <span class="token punctuation">[</span>NSArray arrayWithObjects<span class="token punctuation">:</span><span class="token string">@&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;world&quot;</span><span class="token punctuation">,</span> nil<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 常用方法</span>
NSArray <span class="token operator">*</span>array <span class="token operator">=</span> <span class="token operator">@</span><span class="token punctuation">[</span><span class="token string">@&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;world&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 长度</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%lu&quot;</span><span class="token punctuation">,</span> array<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 取值</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 遍历</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>count<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span>NSString <span class="token operator">*</span>str <span class="token keyword">in</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span>array enumerateObjectsUsingBlock<span class="token punctuation">:</span><span class="token operator">^</span><span class="token punctuation">(</span>id  _Nonnull obj<span class="token punctuation">,</span> NSUInteger idx<span class="token punctuation">,</span> BOOL <span class="token operator">*</span> _Nonnull stop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 查找</span>

NSArray <span class="token operator">*</span>array <span class="token operator">=</span> <span class="token operator">@</span><span class="token punctuation">[</span><span class="token string">@&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;world&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%lu&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>array indexOfObject<span class="token punctuation">:</span><span class="token string">@&quot;world&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 截取</span>
NSArray <span class="token operator">*</span>array <span class="token operator">=</span> <span class="token operator">@</span><span class="token punctuation">[</span><span class="token string">@&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;world&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>array subarrayWithRange<span class="token punctuation">:</span><span class="token function">NSMakeRange</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 排序</span>
NSArray <span class="token operator">*</span>array <span class="token operator">=</span> <span class="token operator">@</span><span class="token punctuation">[</span><span class="token string">@&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;world&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>array sortedArrayUsingSelector<span class="token punctuation">:</span><span class="token keyword">@selector</span><span class="token punctuation">(</span>compare<span class="token punctuation">:</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 转换为字符串</span>
NSArray <span class="token operator">*</span>array <span class="token operator">=</span> <span class="token operator">@</span><span class="token punctuation">[</span><span class="token string">@&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;world&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>array componentsJoinedByString<span class="token punctuation">:</span><span class="token string">@&quot; &quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 去重</span>
NSArray <span class="token operator">*</span>array <span class="token operator">=</span> <span class="token operator">@</span><span class="token punctuation">[</span><span class="token string">@&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;world&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;hello&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>array valueForKeyPath<span class="token punctuation">:</span><span class="token string">@&quot;@distinctUnionOfObjects.self&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nsdictionary" tabindex="-1"><a class="header-anchor" href="#nsdictionary" aria-hidden="true">#</a> NSDictionary</h3><ul><li>NSDictionary 是 Foundation 框架中的一个类，用于存储键值对。</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// 创建</span>
NSDictionary <span class="token operator">*</span>dict <span class="token operator">=</span> <span class="token operator">@</span><span class="token punctuation">{</span><span class="token string">@&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">@&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token string">@&quot;18&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 创建空字典，给与赋值</span>
NSDictionary <span class="token operator">*</span>dict <span class="token operator">=</span> <span class="token punctuation">[</span>NSDictionary dictionary<span class="token punctuation">]</span><span class="token punctuation">;</span>
dict <span class="token operator">=</span> <span class="token operator">@</span><span class="token punctuation">{</span><span class="token string">@&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">@&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token string">@&quot;18&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 创建字典</span>
NSDictionary <span class="token operator">*</span>dict <span class="token operator">=</span> <span class="token punctuation">[</span>NSDictionary dictionaryWithObjectsAndKeys<span class="token punctuation">:</span><span class="token string">@&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;18&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;age&quot;</span><span class="token punctuation">,</span> nil<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 常用方法</span>

<span class="token comment">// 长度</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%lu&quot;</span><span class="token punctuation">,</span> dict<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 取值</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> dict<span class="token punctuation">[</span><span class="token string">@&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 遍历</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>NSString <span class="token operator">*</span>key <span class="token keyword">in</span> dict<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> dict<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span>dict enumerateKeysAndObjectsUsingBlock<span class="token punctuation">:</span><span class="token operator">^</span><span class="token punctuation">(</span>id  _Nonnull key<span class="token punctuation">,</span> id  _Nonnull obj<span class="token punctuation">,</span> BOOL <span class="token operator">*</span> _Nonnull stop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 转换为数组</span>
NSDictionary <span class="token operator">*</span>dict <span class="token operator">=</span> <span class="token operator">@</span><span class="token punctuation">{</span><span class="token string">@&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">@&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token string">@&quot;18&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>dict allKeys<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 转换为字符串</span>
NSDictionary <span class="token operator">*</span>dict <span class="token operator">=</span> <span class="token operator">@</span><span class="token punctuation">{</span><span class="token string">@&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">@&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token string">@&quot;18&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>dict description<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 去重</span>
NSDictionary <span class="token operator">*</span>dict <span class="token operator">=</span> <span class="token operator">@</span><span class="token punctuation">{</span><span class="token string">@&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">@&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token string">@&quot;18&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">@&quot;name&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>dict valueForKeyPath<span class="token punctuation">:</span><span class="token string">@&quot;@distinctUnionOfObjects.self&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 排序</span>
NSDictionary <span class="token operator">*</span>dict <span class="token operator">=</span> <span class="token operator">@</span><span class="token punctuation">{</span><span class="token string">@&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">@&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token string">@&quot;18&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>dict keysSortedByValueUsingSelector<span class="token punctuation">:</span><span class="token keyword">@selector</span><span class="token punctuation">(</span>compare<span class="token punctuation">:</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 转换为 JSON 字符串</span>
NSDictionary <span class="token operator">*</span>dict <span class="token operator">=</span> <span class="token operator">@</span><span class="token punctuation">{</span><span class="token string">@&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">@&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token string">@&quot;18&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
NSData <span class="token operator">*</span>data <span class="token operator">=</span> <span class="token punctuation">[</span>NSJSONSerialization dataWithJSONObject<span class="token punctuation">:</span>dict options<span class="token punctuation">:</span>NSJSONWritingPrettyPrinted error<span class="token punctuation">:</span>nil<span class="token punctuation">]</span><span class="token punctuation">;</span>

NSString <span class="token operator">*</span>str <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>NSString alloc<span class="token punctuation">]</span> initWithData<span class="token punctuation">:</span>data encoding<span class="token punctuation">:</span>NSUTF8StringEncoding<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// JSON 字符串转换为字典</span>
NSString <span class="token operator">*</span>str <span class="token operator">=</span> <span class="token string">@&quot;{\\&quot;name\\&quot;:\\&quot;name\\&quot;,\\&quot;age\\&quot;:\\&quot;18\\&quot;}&quot;</span><span class="token punctuation">;</span>
NSData <span class="token operator">*</span>data <span class="token operator">=</span> <span class="token punctuation">[</span>str dataUsingEncoding<span class="token punctuation">:</span>NSUTF8StringEncoding<span class="token punctuation">]</span><span class="token punctuation">;</span>
NSDictionary <span class="token operator">*</span>dict <span class="token operator">=</span> <span class="token punctuation">[</span>NSJSONSerialization JSONObjectWithData<span class="token punctuation">:</span>data options<span class="token punctuation">:</span>NSJSONReadingMutableContainers error<span class="token punctuation">:</span>nil<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> dict<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 字典转换为模型</span>
NSDictionary <span class="token operator">*</span>dict <span class="token operator">=</span> <span class="token operator">@</span><span class="token punctuation">{</span><span class="token string">@&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">@&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token string">@&quot;18&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Person <span class="token operator">*</span>person <span class="token operator">=</span> <span class="token punctuation">[</span>Person modelWithDict<span class="token punctuation">:</span>dict<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 模型转换为字典</span>
NSDictionary <span class="token operator">*</span>dict <span class="token operator">=</span> <span class="token punctuation">[</span>person dictionaryWithValuesForKeys<span class="token punctuation">:</span><span class="token operator">@</span><span class="token punctuation">[</span><span class="token string">@&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;age&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 字典转换为模型数组</span>
NSArray <span class="token operator">*</span>array <span class="token operator">=</span> <span class="token operator">@</span><span class="token punctuation">[</span><span class="token operator">@</span><span class="token punctuation">{</span><span class="token string">@&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">@&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token string">@&quot;18&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">@</span><span class="token punctuation">{</span><span class="token string">@&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">@&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">@&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token string">@&quot;18&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
NSArray <span class="token operator">*</span>array <span class="token operator">=</span> <span class="token punctuation">[</span>Person modelArrayWithDictArray<span class="token punctuation">:</span>array<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 模型数组转换为字典数组</span>
NSArray <span class="token operator">*</span>array <span class="token operator">=</span> <span class="token operator">@</span><span class="token punctuation">[</span><span class="token punctuation">[</span>Person new<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>Person new<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
NSArray <span class="token operator">*</span>array <span class="token operator">=</span> <span class="token punctuation">[</span>Person dictArrayWithModelArray<span class="token punctuation">:</span>array<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nsdate" tabindex="-1"><a class="header-anchor" href="#nsdate" aria-hidden="true">#</a> NSDate</h3><ul><li>NSDate 是 Foundation 框架中的一个类，用于处理日期和时间。</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// 创建</span>
NSDate <span class="token operator">*</span>date <span class="token operator">=</span> <span class="token punctuation">[</span>NSDate date<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 创建指定时间</span>
NSDate <span class="token operator">*</span>date <span class="token operator">=</span> <span class="token punctuation">[</span>NSDate dateWithTimeIntervalSince1970<span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 创建指定时间</span>
NSDate <span class="token operator">*</span>date <span class="token operator">=</span> <span class="token punctuation">[</span>NSDate dateWithTimeIntervalSinceNow<span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 常用方法</span>
<span class="token comment">// 获取当前时间</span>

NSDate <span class="token operator">*</span>date <span class="token operator">=</span> <span class="token punctuation">[</span>NSDate date<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 获取当前时间戳</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%f&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>date timeIntervalSince1970<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取当前时间戳</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%f&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>date timeIntervalSinceNow<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取当前时间</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>date dateByAddingTimeInterval<span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取当前年月日</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>date descriptionWithLocale<span class="token punctuation">:</span><span class="token punctuation">[</span>NSLocale currentLocale<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nsdata" tabindex="-1"><a class="header-anchor" href="#nsdata" aria-hidden="true">#</a> NSData</h3><ul><li>NSData 是 Foundation 框架中的一个类，用于处理二进制数据。</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// 创建</span>
NSData <span class="token operator">*</span>data <span class="token operator">=</span> <span class="token punctuation">[</span>NSData data<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 创建</span>
NSData <span class="token operator">*</span>data <span class="token operator">=</span> <span class="token punctuation">[</span>NSData dataWithBytes<span class="token punctuation">:</span><span class="token string">&quot;hello&quot;</span> length<span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 常用方法</span>
<span class="token comment">// 获取长度</span>

NSData <span class="token operator">*</span>data <span class="token operator">=</span> <span class="token punctuation">[</span>NSData dataWithBytes<span class="token punctuation">:</span><span class="token string">&quot;hello&quot;</span> length<span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%lu&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取指定位置的字节</span>
NSData <span class="token operator">*</span>data <span class="token operator">=</span> <span class="token punctuation">[</span>NSData dataWithBytes<span class="token punctuation">:</span><span class="token string">&quot;hello&quot;</span> length<span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%c&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span>data<span class="token punctuation">.</span>bytes<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 转换为字符串</span>
NSData <span class="token operator">*</span>data <span class="token operator">=</span> <span class="token punctuation">[</span>NSData dataWithBytes<span class="token punctuation">:</span><span class="token string">&quot;hello&quot;</span> length<span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>NSString alloc<span class="token punctuation">]</span> initWithData<span class="token punctuation">:</span>data encoding<span class="token punctuation">:</span>NSUTF8StringEncoding<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 转换为 JSON 字符串</span>
NSData <span class="token operator">*</span>data <span class="token operator">=</span> <span class="token punctuation">[</span>NSData dataWithBytes<span class="token punctuation">:</span><span class="token string">&quot;hello&quot;</span> length<span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>NSString alloc<span class="token punctuation">]</span> initWithData<span class="token punctuation">:</span>data encoding<span class="token punctuation">:</span>NSUTF8StringEncoding<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// JSON 字符串转换为 NSData</span>
NSString <span class="token operator">*</span>str <span class="token operator">=</span> <span class="token string">@&quot;hello&quot;</span><span class="token punctuation">;</span>
NSData <span class="token operator">*</span>data <span class="token operator">=</span> <span class="token punctuation">[</span>str dataUsingEncoding<span class="token punctuation">:</span>NSUTF8StringEncoding<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 转换为字典</span>
NSData <span class="token operator">*</span>data <span class="token operator">=</span> <span class="token punctuation">[</span>NSData dataWithBytes<span class="token punctuation">:</span><span class="token string">&quot;hello&quot;</span> length<span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
NSDictionary <span class="token operator">*</span>dict <span class="token operator">=</span> <span class="token punctuation">[</span>NSJSONSerialization JSONObjectWithData<span class="token punctuation">:</span>data options<span class="token punctuation">:</span>NSJSONReadingMutableContainers error<span class="token punctuation">:</span>nil<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 转换为数组</span>
NSData <span class="token operator">*</span>data <span class="token operator">=</span> <span class="token punctuation">[</span>NSData dataWithBytes<span class="token punctuation">:</span><span class="token string">&quot;hello&quot;</span> length<span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
NSArray <span class="token operator">*</span>array <span class="token operator">=</span> <span class="token punctuation">[</span>NSJSONSerialization JSONObjectWithData<span class="token punctuation">:</span>data options<span class="token punctuation">:</span>NSJSONReadingMutableContainers error<span class="token punctuation">:</span>nil<span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nsnumber" tabindex="-1"><a class="header-anchor" href="#nsnumber" aria-hidden="true">#</a> NSNumber</h3><ul><li>NSNumber 是 Foundation 框架中的一个类，用于处理基本数据类型。</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// 创建</span>
NSNumber <span class="token operator">*</span>number <span class="token operator">=</span> <span class="token punctuation">[</span>NSNumber numberWithInt<span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 创建</span>
NSNumber <span class="token operator">*</span>number <span class="token operator">=</span> <span class="token punctuation">[</span>NSNumber numberWithFloat<span class="token punctuation">:</span><span class="token number">10.0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 创建</span>
NSNumber <span class="token operator">*</span>number <span class="token operator">=</span> <span class="token punctuation">[</span>NSNumber numberWithBool<span class="token punctuation">:</span>YES<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 常用方法</span>
<span class="token comment">// 转换为基本数据类型</span>

NSNumber <span class="token operator">*</span>number <span class="token operator">=</span> <span class="token punctuation">[</span>NSNumber numberWithInt<span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%d&quot;</span><span class="token punctuation">,</span> number<span class="token punctuation">.</span>intValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

NSNumber <span class="token operator">*</span>number <span class="token operator">=</span> <span class="token punctuation">[</span>NSNumber numberWithFloat<span class="token punctuation">:</span><span class="token number">10.0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%f&quot;</span><span class="token punctuation">,</span> number<span class="token punctuation">.</span>floatValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

NSNumber <span class="token operator">*</span>number <span class="token operator">=</span> <span class="token punctuation">[</span>NSNumber numberWithBool<span class="token punctuation">:</span>YES<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%d&quot;</span><span class="token punctuation">,</span> number<span class="token punctuation">.</span>boolValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 转换为字符串</span>
NSNumber <span class="token operator">*</span>number <span class="token operator">=</span> <span class="token punctuation">[</span>NSNumber numberWithInt<span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> number<span class="token punctuation">.</span>stringValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 转换为 JSON 字符串</span>
NSNumber <span class="token operator">*</span>number <span class="token operator">=</span> <span class="token punctuation">[</span>NSNumber numberWithInt<span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> number<span class="token punctuation">.</span>stringValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// JSON 字符串转换为 NSNumber</span>
NSString <span class="token operator">*</span>str <span class="token operator">=</span> <span class="token string">@&quot;10&quot;</span><span class="token punctuation">;</span>
NSNumber <span class="token operator">*</span>number <span class="token operator">=</span> <span class="token punctuation">[</span>NSNumber numberWithInt<span class="token punctuation">:</span>str<span class="token punctuation">.</span>intValue<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 转换为字典</span>
NSNumber <span class="token operator">*</span>number <span class="token operator">=</span> <span class="token punctuation">[</span>NSNumber numberWithInt<span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
NSDictionary <span class="token operator">*</span>dict <span class="token operator">=</span> <span class="token punctuation">[</span>NSJSONSerialization JSONObjectWithData<span class="token punctuation">:</span>data options<span class="token punctuation">:</span>NSJSONReadingMutableContainers error<span class="token punctuation">:</span>nil<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 转换为数组</span>
NSNumber <span class="token operator">*</span>number <span class="token operator">=</span> <span class="token punctuation">[</span>NSNumber numberWithInt<span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
NSArray <span class="token operator">*</span>array <span class="token operator">=</span> <span class="token punctuation">[</span>NSJSONSerialization JSONObjectWithData<span class="token punctuation">:</span>data options<span class="token punctuation">:</span>NSJSONReadingMutableContainers error<span class="token punctuation">:</span>nil<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 转换为 NSData</span>
NSNumber <span class="token operator">*</span>number <span class="token operator">=</span> <span class="token punctuation">[</span>NSNumber numberWithInt<span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
NSData <span class="token operator">*</span>data <span class="token operator">=</span> <span class="token punctuation">[</span>NSJSONSerialization dataWithJSONObject<span class="token punctuation">:</span>number options<span class="token punctuation">:</span>NSJSONWritingPrettyPrinted error<span class="token punctuation">:</span>nil<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 转换为 NSDate</span>
NSNumber <span class="token operator">*</span>number <span class="token operator">=</span> <span class="token punctuation">[</span>NSNumber numberWithInt<span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
NSDate <span class="token operator">*</span>date <span class="token operator">=</span> <span class="token punctuation">[</span>NSDate dateWithTimeIntervalSince1970<span class="token punctuation">:</span>number<span class="token punctuation">.</span>doubleValue<span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,66),e=[o];function c(i,l){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
