import{_ as p,r as o,o as c,c as i,a as n,b as s,d as t,e}from"./app.26c798e2.js";const l="/article/images/ios/1.png",u="/article/images/ios/2.png",r="/article/images/ios/3.png",k="/article/images/ios/4.png",d={},v={id:"oc-使用-mylayout-布局",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#oc-使用-mylayout-布局","aria-hidden":"true"},"#",-1),b={href:"https://github.com/youngsoft/MyLinearLayout",target:"_blank",rel:"noopener noreferrer"},g=e(`<h3 id="添加依赖" tabindex="-1"><a class="header-anchor" href="#添加依赖" aria-hidden="true">#</a> 添加依赖</h3><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code><span class="token comment">#提供类似Android中更高层级的布局框架</span>
<span class="token comment">#https://github.com/youngsoft/MyLinearLayout</span>
pod <span class="token string-literal"><span class="token string">&#39;MyLayout&#39;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入头文件" tabindex="-1"><a class="header-anchor" href="#导入头文件" aria-hidden="true">#</a> 导入头文件</h3><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">//提供类似Android中更高层级的布局框架</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">import</span> <span class="token expression"><span class="token operator">&lt;</span>MyLayout<span class="token operator">/</span>MyLayout<span class="token punctuation">.</span>h<span class="token operator">&gt;</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="viewcontroller-m" tabindex="-1"><a class="header-anchor" href="#viewcontroller-m" aria-hidden="true">#</a> ViewController.m</h3><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">//</span>
<span class="token comment">//  ViewController.m</span>
<span class="token comment">//  TestMyLayout</span>
<span class="token comment">//</span>
<span class="token comment">//  Created by xu menglong on 2023/8/18.</span>
<span class="token comment">//</span>

<span class="token comment">//提供类似Android中更高层级的布局框架</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">import</span> <span class="token expression"><span class="token operator">&lt;</span>MyLayout<span class="token operator">/</span>MyLayout<span class="token punctuation">.</span>h<span class="token operator">&gt;</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">import</span> <span class="token string">&quot;ViewController.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">import</span> <span class="token string">&quot;SettingController.h&quot;</span></span>

<span class="token keyword">@interface</span> <span class="token function">ViewController</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">@property</span><span class="token punctuation">(</span>nonatomic<span class="token punctuation">,</span> strong<span class="token punctuation">)</span> UIView <span class="token operator">*</span>container<span class="token punctuation">;</span>
<span class="token keyword">@property</span><span class="token punctuation">(</span>nonatomic<span class="token punctuation">,</span> strong<span class="token punctuation">)</span> UIButton <span class="token operator">*</span>phoneLoginButton<span class="token punctuation">;</span>
<span class="token keyword">@property</span><span class="token punctuation">(</span>nonatomic<span class="token punctuation">,</span> strong<span class="token punctuation">)</span> UIButton <span class="token operator">*</span>primaryButton<span class="token punctuation">;</span>

<span class="token keyword">@end</span>

<span class="token keyword">@implementation</span> ViewController

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>viewDidLoad <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token keyword">super</span> viewDidLoad<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 创建一个相对布局</span>
    MyRelativeLayout <span class="token operator">*</span>container <span class="token operator">=</span> <span class="token punctuation">[</span>MyRelativeLayout new<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 添加背景色</span>
    container<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token punctuation">[</span>UIColor whiteColor<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 安全区域</span>
    container<span class="token punctuation">.</span>leadingPos<span class="token punctuation">.</span><span class="token function">equalTo</span><span class="token punctuation">(</span><span class="token operator">@</span><span class="token punctuation">(</span>MyLayoutPos<span class="token punctuation">.</span>safeAreaMargin<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    container<span class="token punctuation">.</span>trailingPos<span class="token punctuation">.</span><span class="token function">equalTo</span><span class="token punctuation">(</span><span class="token operator">@</span><span class="token punctuation">(</span>MyLayoutPos<span class="token punctuation">.</span>safeAreaMargin<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    container<span class="token punctuation">.</span>topPos<span class="token punctuation">.</span><span class="token function">equalTo</span><span class="token punctuation">(</span><span class="token operator">@</span><span class="token punctuation">(</span>MyLayoutPos<span class="token punctuation">.</span>safeAreaMargin<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    container<span class="token punctuation">.</span>bottomPos<span class="token punctuation">.</span><span class="token function">equalTo</span><span class="token punctuation">(</span><span class="token operator">@</span><span class="token punctuation">(</span>MyLayoutPos<span class="token punctuation">.</span>safeAreaMargin<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 添加到view</span>
    <span class="token punctuation">[</span><span class="token keyword">self</span><span class="token punctuation">.</span>view addSubview<span class="token punctuation">:</span>container<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// logo</span>
    UIImageView <span class="token operator">*</span>logo <span class="token operator">=</span> <span class="token punctuation">[</span>UIImageView new<span class="token punctuation">]</span><span class="token punctuation">;</span>
    logo<span class="token punctuation">.</span>image <span class="token operator">=</span> <span class="token punctuation">[</span>UIImage imageNamed<span class="token punctuation">:</span><span class="token string">@&quot;Logo&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>container addSubview<span class="token punctuation">:</span>logo<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 宽高</span>
    logo<span class="token punctuation">.</span>myWidth <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    logo<span class="token punctuation">.</span>heightSize<span class="token punctuation">.</span><span class="token function">equalTo</span><span class="token punctuation">(</span><span class="token operator">@</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 距离顶部</span>
    logo<span class="token punctuation">.</span>myTop <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token comment">// 水平居中</span>
    logo<span class="token punctuation">.</span>myCenterX <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">mark <span class="token operator">-</span> 底部容器</span></span>
    <span class="token comment">// 创建一个垂直方向容器，类似android 线性布局控件</span>
    MyLinearLayout <span class="token operator">*</span>bottomContainer <span class="token operator">=</span> <span class="token punctuation">[</span>MyLinearLayout linearLayoutWithOrientation<span class="token punctuation">:</span>MyOrientation_Vert<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 宽度和父布局一样</span>
    bottomContainer<span class="token punctuation">.</span>myWidth <span class="token operator">=</span> MyLayoutSize<span class="token punctuation">.</span>fill<span class="token punctuation">;</span>
    <span class="token comment">// 高度包裹内容</span>
    bottomContainer<span class="token punctuation">.</span>myHeight <span class="token operator">=</span> MyLayoutSize<span class="token punctuation">.</span>wrap<span class="token punctuation">;</span>
    bottomContainer<span class="token punctuation">.</span>myBottom <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// 内容水平居中</span>
    bottomContainer<span class="token punctuation">.</span>gravity <span class="token operator">=</span> MyGravity_Horz_Center<span class="token punctuation">;</span>
    <span class="token comment">//子控件间距</span>
    bottomContainer<span class="token punctuation">.</span>subviewSpace <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>container addSubview<span class="token punctuation">:</span>bottomContainer<span class="token punctuation">]</span><span class="token punctuation">;</span>


    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">mark <span class="token operator">-</span> 底部容器</span></span>
    <span class="token comment">// 手机号登录按钮</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>phoneLoginButton <span class="token operator">=</span> <span class="token punctuation">[</span>UIButton buttonWithType<span class="token punctuation">:</span>UIButtonTypeSystem<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置标题</span>
    <span class="token punctuation">[</span><span class="token keyword">self</span><span class="token punctuation">.</span>phoneLoginButton setTitle<span class="token punctuation">:</span><span class="token string">@&quot;手机号登录&quot;</span> forState<span class="token punctuation">:</span>UIControlStateNormal<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置点击事件</span>
    <span class="token punctuation">[</span><span class="token keyword">self</span><span class="token punctuation">.</span>phoneLoginButton addTarget<span class="token punctuation">:</span><span class="token keyword">self</span> action<span class="token punctuation">:</span><span class="token keyword">@selector</span><span class="token punctuation">(</span>phoneLoginClick<span class="token punctuation">:</span><span class="token punctuation">)</span> forControlEvents<span class="token punctuation">:</span>UIControlEventTouchUpInside<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 背景颜色</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>phoneLoginButton<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token punctuation">[</span>UIColor redColor<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 圆角</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>phoneLoginButton<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>cornerRadius <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置标题颜色</span>
    <span class="token punctuation">[</span><span class="token keyword">self</span><span class="token punctuation">.</span>phoneLoginButton setTitleColor<span class="token punctuation">:</span><span class="token punctuation">[</span>UIColor whiteColor<span class="token punctuation">]</span> forState<span class="token punctuation">:</span>UIControlStateNormal<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 高亮颜色</span>
    <span class="token punctuation">[</span><span class="token keyword">self</span><span class="token punctuation">.</span>phoneLoginButton setTitleColor<span class="token punctuation">:</span><span class="token punctuation">[</span>UIColor grayColor<span class="token punctuation">]</span> forState<span class="token punctuation">:</span>UIControlStateHighlighted<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 添加到容器</span>
    <span class="token punctuation">[</span>bottomContainer addSubview<span class="token punctuation">:</span><span class="token keyword">self</span><span class="token punctuation">.</span>phoneLoginButton<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 设置宽高</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>phoneLoginButton<span class="token punctuation">.</span>myWidth <span class="token operator">=</span> MyLayoutSize<span class="token punctuation">.</span>fill<span class="token punctuation">;</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>phoneLoginButton<span class="token punctuation">.</span>myHeight <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>

    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">mark <span class="token operator">-</span> 主登录按钮</span></span>
    <span class="token comment">// 登录按钮</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>primaryButton <span class="token operator">=</span> <span class="token punctuation">[</span>UIButton buttonWithType<span class="token punctuation">:</span>UIButtonTypeSystem<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置标题</span>
    <span class="token punctuation">[</span><span class="token keyword">self</span><span class="token punctuation">.</span>primaryButton setTitle<span class="token punctuation">:</span><span class="token string">@&quot;用户名和密码登录&quot;</span> forState<span class="token punctuation">:</span>UIControlStateNormal<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 字体颜色</span>
    <span class="token punctuation">[</span><span class="token keyword">self</span><span class="token punctuation">.</span>primaryButton setTitleColor<span class="token punctuation">:</span><span class="token punctuation">[</span>UIColor redColor<span class="token punctuation">]</span> forState<span class="token punctuation">:</span>UIControlStateNormal<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置点击</span>
    <span class="token punctuation">[</span><span class="token keyword">self</span><span class="token punctuation">.</span>primaryButton addTarget<span class="token punctuation">:</span><span class="token keyword">self</span> action<span class="token punctuation">:</span><span class="token keyword">@selector</span><span class="token punctuation">(</span>primaryButtonClick<span class="token punctuation">:</span><span class="token punctuation">)</span> forControlEvents<span class="token punctuation">:</span>UIControlEventTouchUpInside<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 背景颜色</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>primaryButton<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token punctuation">[</span>UIColor clearColor<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 圆角</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>primaryButton<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>cornerRadius <span class="token operator">=</span> <span class="token number">21</span><span class="token punctuation">;</span>
    <span class="token comment">// 边框宽度</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>primaryButton<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>borderWidth <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">// 边框颜色</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>primaryButton<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>borderColor <span class="token operator">=</span> <span class="token punctuation">[</span>UIColor redColor<span class="token punctuation">]</span><span class="token punctuation">.</span>CGColor<span class="token punctuation">;</span>
    <span class="token comment">// 添加到容器</span>
    <span class="token punctuation">[</span>bottomContainer addSubview<span class="token punctuation">:</span><span class="token keyword">self</span><span class="token punctuation">.</span>primaryButton<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 设置宽高</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>primaryButton<span class="token punctuation">.</span>myWidth <span class="token operator">=</span> MyLayoutSize<span class="token punctuation">.</span>fill<span class="token punctuation">;</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>primaryButton<span class="token punctuation">.</span>myHeight <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>

    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">mark <span class="token operator">-</span> 登录按钮</span></span>
    <span class="token comment">// 第三方登录容器</span>
    MyBaseLayout <span class="token operator">*</span>otherLoginContainer <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>MyLinearLayout alloc<span class="token punctuation">]</span> initWithOrientation<span class="token punctuation">:</span>MyOrientation_Horz<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 宽高</span>
    otherLoginContainer<span class="token punctuation">.</span>myWidth <span class="token operator">=</span> MyLayoutSize<span class="token punctuation">.</span>fill<span class="token punctuation">;</span>
    otherLoginContainer<span class="token punctuation">.</span>myHeight <span class="token operator">=</span> MyLayoutSize<span class="token punctuation">.</span>wrap<span class="token punctuation">;</span>
    <span class="token comment">// 垂直居中</span>
    otherLoginContainer<span class="token punctuation">.</span>gravity <span class="token operator">=</span> MyGravity_Vert_Center<span class="token punctuation">;</span>
    otherLoginContainer<span class="token punctuation">.</span>subviewSpace<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>

    <span class="token comment">// 添加到容器</span>
    <span class="token punctuation">[</span>bottomContainer addSubview<span class="token punctuation">:</span>otherLoginContainer<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 第三方按钮</span>
    <span class="token comment">//第三方登录按钮</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>NSInteger i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        UIButton <span class="token operator">*</span>buttonView<span class="token operator">=</span><span class="token punctuation">[</span>UIButton new<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">[</span>buttonView setImage<span class="token punctuation">:</span><span class="token punctuation">[</span>UIImage imageNamed<span class="token punctuation">:</span><span class="token string">@&quot;LoginQqSelected&quot;</span><span class="token punctuation">]</span> forState<span class="token punctuation">:</span>UIControlStateNormal<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">[</span>otherLoginContainer addSubview<span class="token punctuation">:</span>buttonView<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//        buttonView.backgroundColor=[UIColor greenColor];</span>

        buttonView<span class="token punctuation">.</span>myHeight<span class="token operator">=</span><span class="token number">50</span><span class="token punctuation">;</span>

        <span class="token comment">//权重，如果相同就是平分</span>
        buttonView<span class="token punctuation">.</span>weight<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">mark <span class="token operator">-</span> 协议</span></span>
    <span class="token comment">// 协议</span>
    UILabel <span class="token operator">*</span>agrementLabelView <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>UILabel alloc<span class="token punctuation">]</span> init<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 标题</span>
    agrementLabelView<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">@&quot;登录即表示你同意《用户协议》和《隐私政策》oc 布局&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">// 字体大小</span>
    agrementLabelView<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token punctuation">[</span>UIFont systemFontOfSize<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 字体颜色</span>
    agrementLabelView<span class="token punctuation">.</span>textColor <span class="token operator">=</span> <span class="token punctuation">[</span>UIColor grayColor<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 添加容器</span>
    <span class="token punctuation">[</span>bottomContainer addSubview<span class="token punctuation">:</span>agrementLabelView<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置宽高</span>
    agrementLabelView<span class="token punctuation">.</span>myWidth <span class="token operator">=</span> MyLayoutSize<span class="token punctuation">.</span>wrap<span class="token punctuation">;</span>
    agrementLabelView<span class="token punctuation">.</span>myHeight <span class="token operator">=</span> MyLayoutSize<span class="token punctuation">.</span>wrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 手机号登录点击</span>
<span class="token operator">-</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>phoneLoginClick<span class="token punctuation">:</span><span class="token punctuation">(</span>UIButton <span class="token operator">*</span><span class="token punctuation">)</span> sender <span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;ViewController phoneLoginClick %@&quot;</span><span class="token punctuation">,</span>sender<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 跳转到 SettingController</span>
    SettingController <span class="token operator">*</span>settingController <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>SettingController alloc<span class="token punctuation">]</span> init<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span><span class="token keyword">self</span><span class="token punctuation">.</span>navigationController pushViewController<span class="token punctuation">:</span>settingController animated<span class="token punctuation">:</span>YES<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 主按钮点击</span>
<span class="token operator">-</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>primaryButtonClick<span class="token punctuation">:</span><span class="token punctuation">(</span>UIButton <span class="token operator">*</span><span class="token punctuation">)</span> sender <span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;ViewController primaryClick %@&quot;</span><span class="token punctuation">,</span>sender<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">@end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+`" alt="图片"></p><h3 id="自定义-view" tabindex="-1"><a class="header-anchor" href="#自定义-view" aria-hidden="true">#</a> 自定义 View</h3><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// View/SettingView.h</span>
<span class="token comment">//</span>
<span class="token comment">//  SettingView.h</span>
<span class="token comment">//  TestMyLayout</span>
<span class="token comment">//</span>
<span class="token comment">//  Created by xu menglong on 2023/8/19.</span>
<span class="token comment">//</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">import</span> <span class="token expression"><span class="token operator">&lt;</span>MyLayout<span class="token operator">/</span>MyLayout<span class="token punctuation">.</span>h<span class="token operator">&gt;</span></span></span>

NS_ASSUME_NONNULL_BEGIN

<span class="token keyword">@interface</span> SettingView <span class="token punctuation">:</span> MyLinearLayout

<span class="token comment">// 左侧图标</span>
<span class="token keyword">@property</span><span class="token punctuation">(</span>nonatomic<span class="token punctuation">,</span> strong<span class="token punctuation">)</span> UIImageView <span class="token operator">*</span>iconView<span class="token punctuation">;</span>

<span class="token comment">// 标题</span>
<span class="token keyword">@property</span><span class="token punctuation">(</span>nonatomic<span class="token punctuation">,</span> strong<span class="token punctuation">)</span> UILabel <span class="token operator">*</span>titleView<span class="token punctuation">;</span>

<span class="token comment">// 右侧图标</span>
<span class="token keyword">@property</span><span class="token punctuation">(</span>nonatomic<span class="token punctuation">,</span> strong<span class="token punctuation">)</span> UIImageView <span class="token operator">*</span>moreIconView<span class="token punctuation">;</span>
<span class="token keyword">@end</span>

NS_ASSUME_NONNULL_END
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// View/SettingView.m</span>
<span class="token comment">//</span>
<span class="token comment">//  SettingView.m</span>
<span class="token comment">//  TestMyLayout</span>
<span class="token comment">//</span>
<span class="token comment">//  Created by xu menglong on 2023/8/19.</span>
<span class="token comment">//</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">import</span> <span class="token string">&quot;SettingView.h&quot;</span></span>

<span class="token keyword">@implementation</span> SettingView


<span class="token comment">/// 初始化</span>
<span class="token operator">-</span> <span class="token punctuation">(</span>instancetype<span class="token punctuation">)</span>init
<span class="token punctuation">{</span>
    <span class="token keyword">self</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">super</span> initWithOrientation<span class="token punctuation">:</span>MyOrientation_Horz<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span><span class="token keyword">self</span> innerInit<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">self</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">/// 内部容器初始化</span>
<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>innerInit <span class="token punctuation">{</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>myWidth <span class="token operator">=</span> MyLayoutSize<span class="token punctuation">.</span>fill<span class="token punctuation">;</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>myHeight <span class="token operator">=</span> <span class="token number">55</span><span class="token punctuation">;</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>padding <span class="token operator">=</span> <span class="token function">UIEdgeInsetsMake</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>subviewSpace <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

    <span class="token keyword">self</span><span class="token punctuation">.</span>gravity <span class="token operator">=</span> MyGravity_Vert_Center<span class="token punctuation">;</span>

    <span class="token keyword">self</span><span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token punctuation">[</span>UIColor whiteColor<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span><span class="token keyword">self</span> addSubview<span class="token punctuation">:</span><span class="token keyword">self</span><span class="token punctuation">.</span>iconView<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span><span class="token keyword">self</span> addSubview<span class="token punctuation">:</span><span class="token keyword">self</span><span class="token punctuation">.</span>titleView<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span><span class="token keyword">self</span> addSubview<span class="token punctuation">:</span><span class="token keyword">self</span><span class="token punctuation">.</span>moreIconView<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">mark <span class="token operator">-</span> 创建控件</span></span>

<span class="token comment">/// 左侧图标</span>
<span class="token operator">-</span> <span class="token punctuation">(</span>UIImageView <span class="token operator">*</span><span class="token punctuation">)</span>iconView<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>_iconView<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        _iconView<span class="token operator">=</span><span class="token punctuation">[</span>UIImageView new<span class="token punctuation">]</span><span class="token punctuation">;</span>
        _iconView<span class="token punctuation">.</span>image<span class="token operator">=</span><span class="token punctuation">[</span>UIImage imageNamed<span class="token punctuation">:</span><span class="token string">@&quot;Setting&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        _iconView<span class="token punctuation">.</span>myWidth<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">;</span>
        _iconView<span class="token punctuation">.</span>myHeight<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> _iconView<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">/// 标题</span>
<span class="token operator">-</span> <span class="token punctuation">(</span>UILabel <span class="token operator">*</span><span class="token punctuation">)</span>titleView<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>_titleView<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        _titleView<span class="token operator">=</span><span class="token punctuation">[</span>UILabel new<span class="token punctuation">]</span><span class="token punctuation">;</span>
        _titleView<span class="token punctuation">.</span>text<span class="token operator">=</span><span class="token string">@&quot;设置&quot;</span><span class="token punctuation">;</span>

        _titleView<span class="token punctuation">.</span>myWidth<span class="token operator">=</span>MyLayoutSize<span class="token punctuation">.</span>fill<span class="token punctuation">;</span>
        _titleView<span class="token punctuation">.</span>myHeight<span class="token operator">=</span>MyLayoutSize<span class="token punctuation">.</span>wrap<span class="token punctuation">;</span>
        _titleView<span class="token punctuation">.</span>weight<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> _titleView<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">/// 右侧图标</span>
<span class="token operator">-</span> <span class="token punctuation">(</span>UIImageView <span class="token operator">*</span><span class="token punctuation">)</span>moreIconView<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>_moreIconView<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        _moreIconView<span class="token operator">=</span><span class="token punctuation">[</span>UIImageView new<span class="token punctuation">]</span><span class="token punctuation">;</span>
        _moreIconView<span class="token punctuation">.</span>image<span class="token operator">=</span><span class="token punctuation">[</span>UIImage imageNamed<span class="token punctuation">:</span><span class="token string">@&quot;Arrow&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        _moreIconView<span class="token punctuation">.</span>myWidth<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">;</span>
        _moreIconView<span class="token punctuation">.</span>myHeight<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> _moreIconView<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">@end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// Controller/SettingController.h</span>
<span class="token comment">//</span>
<span class="token comment">//  SettingController.h</span>
<span class="token comment">//  TestMyLayout</span>
<span class="token comment">//</span>
<span class="token comment">//  Created by xu menglong on 2023/8/19.</span>
<span class="token comment">//</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">import</span> <span class="token expression"><span class="token operator">&lt;</span>UIKit<span class="token operator">/</span>UIKit<span class="token punctuation">.</span>h<span class="token operator">&gt;</span></span></span>

NS_ASSUME_NONNULL_BEGIN

<span class="token keyword">@interface</span> SettingController <span class="token punctuation">:</span> UIViewController

<span class="token keyword">@end</span>

NS_ASSUME_NONNULL_END
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">// Controller/SettingController.m</span>
<span class="token comment">//</span>
<span class="token comment">//  SettingController.m</span>
<span class="token comment">//  TestMyLayout</span>
<span class="token comment">//</span>
<span class="token comment">//  Created by xu menglong on 2023/8/19.</span>
<span class="token comment">//</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">import</span> <span class="token string">&quot;SettingController.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">import</span> <span class="token string">&quot;SettingView.h&quot;</span></span>

<span class="token keyword">@interface</span> <span class="token function">SettingController</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">@property</span><span class="token punctuation">(</span>nonatomic<span class="token punctuation">,</span> strong<span class="token punctuation">)</span> SettingView <span class="token operator">*</span>settingView<span class="token punctuation">;</span>
<span class="token keyword">@property</span><span class="token punctuation">(</span>nonatomic<span class="token punctuation">,</span> strong<span class="token punctuation">)</span> SettingView <span class="token operator">*</span>collectView<span class="token punctuation">;</span>


<span class="token keyword">@end</span>

<span class="token keyword">@implementation</span> SettingController

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>viewDidLoad <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token keyword">super</span> viewDidLoad<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// Do any additional setup after loading the view.</span>
    <span class="token comment">// 设置标题</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">@&quot;设置&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">// 背景颜色</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>view<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token punctuation">[</span>UIColor systemGroupedBackgroundColor<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">//创建一个容器</span>
    MyBaseLayout <span class="token operator">*</span>container <span class="token operator">=</span> <span class="token punctuation">[</span>MyLinearLayout linearLayoutWithOrientation<span class="token punctuation">:</span>MyOrientation_Vert<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">//从安全区开始</span>
    container<span class="token punctuation">.</span>leadingPos<span class="token punctuation">.</span><span class="token function">equalTo</span><span class="token punctuation">(</span><span class="token operator">@</span><span class="token punctuation">(</span>MyLayoutPos<span class="token punctuation">.</span>safeAreaMargin<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    container<span class="token punctuation">.</span>trailingPos<span class="token punctuation">.</span><span class="token function">equalTo</span><span class="token punctuation">(</span><span class="token operator">@</span><span class="token punctuation">(</span>MyLayoutPos<span class="token punctuation">.</span>safeAreaMargin<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    container<span class="token punctuation">.</span>topPos<span class="token punctuation">.</span><span class="token function">equalTo</span><span class="token punctuation">(</span><span class="token operator">@</span><span class="token punctuation">(</span>MyLayoutPos<span class="token punctuation">.</span>safeAreaMargin<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    container<span class="token punctuation">.</span>myHeight <span class="token operator">=</span> MyLayoutSize<span class="token punctuation">.</span>wrap<span class="token punctuation">;</span>

    container<span class="token punctuation">.</span>subviewSpace <span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">;</span>

    <span class="token punctuation">[</span><span class="token keyword">self</span><span class="token punctuation">.</span>view addSubview<span class="token punctuation">:</span>container<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 添加子控件</span>
    <span class="token punctuation">[</span>container addSubview<span class="token punctuation">:</span><span class="token keyword">self</span><span class="token punctuation">.</span>settingView<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>container addSubview<span class="token punctuation">:</span><span class="token keyword">self</span><span class="token punctuation">.</span>collectView<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>


<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">mark <span class="token operator">-</span> 事件</span></span>
<span class="token operator">-</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>settingTapGestureRecognizer<span class="token punctuation">:</span><span class="token punctuation">(</span>UITapGestureRecognizer <span class="token operator">*</span><span class="token punctuation">)</span>recognizer<span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;SettingController settingTapGestureRecognizer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">mark <span class="token operator">-</span> 控件</span></span>
<span class="token comment">/// 设置Item</span>
<span class="token operator">-</span> <span class="token punctuation">(</span>SettingView <span class="token operator">*</span><span class="token punctuation">)</span>settingView<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>_settingView<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        _settingView<span class="token operator">=</span><span class="token punctuation">[</span>SettingView new<span class="token punctuation">]</span><span class="token punctuation">;</span>
        _settingView<span class="token punctuation">.</span>titleView<span class="token punctuation">.</span>text<span class="token operator">=</span><span class="token string">@&quot;设置&quot;</span><span class="token punctuation">;</span>

        <span class="token comment">//设置点击事件</span>
        UITapGestureRecognizer <span class="token operator">*</span>tapGestureRecognizer <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>UITapGestureRecognizer alloc<span class="token punctuation">]</span> initWithTarget<span class="token punctuation">:</span><span class="token keyword">self</span> action<span class="token punctuation">:</span><span class="token keyword">@selector</span><span class="token punctuation">(</span>settingTapGestureRecognizer<span class="token punctuation">:</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">[</span>_settingView addGestureRecognizer<span class="token punctuation">:</span>tapGestureRecognizer<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> _settingView<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/// 收藏Item</span>
<span class="token operator">-</span> <span class="token punctuation">(</span>SettingView <span class="token operator">*</span><span class="token punctuation">)</span>collectView<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>_collectView<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        _collectView<span class="token operator">=</span><span class="token punctuation">[</span>SettingView new<span class="token punctuation">]</span><span class="token punctuation">;</span>
        _collectView<span class="token punctuation">.</span>titleView<span class="token punctuation">.</span>text<span class="token operator">=</span><span class="token string">@&quot;收藏&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> _collectView<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">@end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+'" alt="图片"></p>',13),w={id:"swift-使用-tangramkit-布局",tabindex:"-1"},y=n("a",{class:"header-anchor",href:"#swift-使用-tangramkit-布局","aria-hidden":"true"},"#",-1),f={href:"https://github.com/youngsoft/TangramKit",target:"_blank",rel:"noopener noreferrer"},h=e(`<h3 id="添加依赖-1" tabindex="-1"><a class="header-anchor" href="#添加依赖-1" aria-hidden="true">#</a> 添加依赖</h3><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code><span class="token comment">#提供类似Android中更高层级的布局框架</span>
<span class="token comment">#https://github.com/youngsoft/TangramKit</span>
pod <span class="token string-literal"><span class="token string">&#39;TangramKit&#39;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="viewcontroller-swift-文件" tabindex="-1"><a class="header-anchor" href="#viewcontroller-swift-文件" aria-hidden="true">#</a> ViewController.swift 文件</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token comment">//</span>
<span class="token comment">//  ViewController.swift</span>
<span class="token comment">//  MyTestSnapKit</span>
<span class="token comment">//</span>
<span class="token comment">//  Created by xu menglong on 2023/8/22.</span>
<span class="token comment">//</span>

<span class="token keyword">import</span> <span class="token class-name">UIKit</span>

<span class="token comment">//自动布局框架</span>
<span class="token keyword">import</span> <span class="token class-name">TangramKit</span>

<span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span> <span class="token punctuation">{</span>
    <span class="token comment">// 根容器</span>
    <span class="token keyword">var</span> container<span class="token punctuation">:</span><span class="token class-name">UIView</span><span class="token operator">!</span>

    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// Do any additional setup after loading the view.</span>
        <span class="token comment">// 设置背景色</span>
        view<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token punctuation">.</span>white

        <span class="token comment">// 创建一个根容器</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>container <span class="token operator">=</span> <span class="token class-name">TGRelativeLayout</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// 从安全区开始</span>
        container<span class="token punctuation">.</span>tg_top<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token class-name">TGLayoutPos</span><span class="token punctuation">.</span>tg_safeAreaMargin<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
        container<span class="token punctuation">.</span>tg_leading<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token class-name">TGLayoutPos</span><span class="token punctuation">.</span>tg_safeAreaMargin<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
        container<span class="token punctuation">.</span>tg_trailing<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token class-name">TGLayoutPos</span><span class="token punctuation">.</span>tg_safeAreaMargin<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
        container<span class="token punctuation">.</span>tg_bottom<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token class-name">TGLayoutPos</span><span class="token punctuation">.</span>tg_safeAreaMargin<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>

        view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span>

        <span class="token comment">// logo</span>
        <span class="token keyword">let</span> logoView <span class="token operator">=</span> <span class="token class-name">UIImageView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// 设置宽高</span>
        logoView<span class="token punctuation">.</span>tg_width<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
        logoView<span class="token punctuation">.</span>tg_height <span class="token operator">~=</span> <span class="token number">100</span>
        logoView<span class="token punctuation">.</span>tg_top <span class="token operator">~=</span> <span class="token number">100</span>
        <span class="token comment">// 水平居中</span>
        logoView<span class="token punctuation">.</span>tg_centerX<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

        logoView<span class="token punctuation">.</span>image <span class="token operator">=</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>named<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Logo&quot;</span></span><span class="token punctuation">)</span>
        container<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>logoView<span class="token punctuation">)</span>


        <span class="token comment">// MARK: - 底部容器</span>
        <span class="token keyword">let</span> bottomContainer <span class="token operator">=</span> <span class="token class-name">TGLinearLayout</span><span class="token punctuation">(</span><span class="token punctuation">.</span>vert<span class="token punctuation">)</span>
        bottomContainer<span class="token punctuation">.</span>tg_height<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token punctuation">.</span>wrap<span class="token punctuation">)</span>
        bottomContainer<span class="token punctuation">.</span>tg_width<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token punctuation">.</span>fill<span class="token punctuation">)</span>
        bottomContainer<span class="token punctuation">.</span>tg_bottom<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        bottomContainer<span class="token punctuation">.</span>tg_gravity <span class="token operator">=</span> <span class="token class-name">TGGravity</span><span class="token punctuation">.</span>horz<span class="token punctuation">.</span>center
        bottomContainer<span class="token punctuation">.</span>tg_space <span class="token operator">=</span> <span class="token number">30</span>
        container<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>bottomContainer<span class="token punctuation">)</span>

        <span class="token comment">// 手机的登录按钮</span>
        bottomContainer<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>phoneLoginButton<span class="token punctuation">)</span>

        <span class="token comment">// 用户名和密码登录按钮</span>
        bottomContainer<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>primaryLoginButton<span class="token punctuation">)</span>

        <span class="token comment">// MARK: - 第三方登录容器</span>
        <span class="token keyword">let</span> otherLoginContainer <span class="token operator">=</span> <span class="token class-name">TGLinearLayout</span><span class="token punctuation">(</span><span class="token punctuation">.</span>horz<span class="token punctuation">)</span>
        otherLoginContainer<span class="token punctuation">.</span>tg_height<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token punctuation">.</span>wrap<span class="token punctuation">)</span>
        otherLoginContainer<span class="token punctuation">.</span>tg_width<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token punctuation">.</span>fill<span class="token punctuation">)</span>
        otherLoginContainer<span class="token punctuation">.</span>tg_gravity <span class="token operator">=</span> <span class="token class-name">TGGravity</span><span class="token punctuation">.</span>horz<span class="token punctuation">.</span>between
        bottomContainer<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>otherLoginContainer<span class="token punctuation">)</span>

        <span class="token comment">// 第三方登录按钮</span>
        <span class="token keyword">for</span> <span class="token omit keyword">_</span> <span class="token keyword">in</span> <span class="token number">0</span><span class="token operator">..&lt;</span><span class="token number">4</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> buttonView <span class="token operator">=</span> <span class="token class-name">UIButton</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> <span class="token punctuation">.</span>custom<span class="token punctuation">)</span>
            buttonView<span class="token punctuation">.</span><span class="token function">setImage</span><span class="token punctuation">(</span><span class="token class-name">UIImage</span><span class="token punctuation">(</span>named<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;LoginQqSelected&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>normal<span class="token punctuation">)</span>
            <span class="token comment">//  buttonView.backgroundColor = .green</span>
            buttonView<span class="token punctuation">.</span>tg_width<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token punctuation">.</span>wrap<span class="token punctuation">)</span>
            buttonView<span class="token punctuation">.</span>tg_height<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
            otherLoginContainer<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>buttonView<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 协议</span>
        <span class="token keyword">let</span> agreementLabelView <span class="token operator">=</span> <span class="token class-name">UILabel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// 标题</span>
        agreementLabelView<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;登录即代表您同意 swift 布局&quot;</span></span>
        <span class="token comment">// 字体大小</span>
        agreementLabelView<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token class-name">UIFont</span><span class="token punctuation">.</span><span class="token function">systemFont</span><span class="token punctuation">(</span>ofSize<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">)</span>
        <span class="token comment">// 字体颜色</span>
        agreementLabelView<span class="token punctuation">.</span>textColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">(</span>red<span class="token punctuation">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span> green<span class="token punctuation">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span> blue<span class="token punctuation">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
        agreementLabelView<span class="token punctuation">.</span>tg_width<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token punctuation">.</span>wrap<span class="token punctuation">)</span>
        agreementLabelView<span class="token punctuation">.</span>tg_height<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token punctuation">.</span>wrap<span class="token punctuation">)</span>
        bottomContainer<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>agreementLabelView<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token attribute atrule">@objc</span> <span class="token keyword">func</span> <span class="token function-definition function">phoneLoginAction</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> sender<span class="token punctuation">:</span> <span class="token class-name">UIButton</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;点击了手机登录按钮&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token class-name">SettingController</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        navigationController<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">pushViewController</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token attribute atrule">@objc</span> <span class="token keyword">func</span> <span class="token function-definition function">primaryLoginAction</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> sender<span class="token punctuation">:</span> <span class="token class-name">UIButton</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;点击了用户名和密码登录按钮&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>




    <span class="token comment">// 手机登录按钮</span>
    <span class="token comment">// 这是swift 懒加载</span>
    <span class="token keyword">lazy</span> <span class="token keyword">var</span> phoneLoginButton<span class="token punctuation">:</span> <span class="token class-name">UIButton</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token class-name">UIButton</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> <span class="token punctuation">.</span>system<span class="token punctuation">)</span>
        <span class="token comment">// 设置标题</span>
        r<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;手机登录&quot;</span></span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>normal<span class="token punctuation">)</span>
        <span class="token comment">// 设置点击事件</span>
        r<span class="token punctuation">.</span><span class="token function">addTarget</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span><span class="token function">phoneLoginAction</span><span class="token punctuation">(</span><span class="token omit keyword">_</span><span class="token punctuation">:</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>touchUpInside<span class="token punctuation">)</span>
        <span class="token comment">// 设置背景颜色</span>
        r<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token punctuation">.</span>red
        <span class="token comment">// 圆角大小</span>
        r<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>cornerRadius <span class="token operator">=</span> <span class="token number">5</span>
        <span class="token comment">// 设置默认标题颜色</span>
        r<span class="token punctuation">.</span><span class="token function">setTitleColor</span><span class="token punctuation">(</span><span class="token punctuation">.</span>white<span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>normal<span class="token punctuation">)</span>
        <span class="token comment">// 设置按下时的标题颜色</span>
        r<span class="token punctuation">.</span><span class="token function">setTitleColor</span><span class="token punctuation">(</span><span class="token class-name">UIColor</span><span class="token punctuation">(</span>red<span class="token punctuation">:</span> <span class="token number">0.9</span><span class="token punctuation">,</span> green<span class="token punctuation">:</span> <span class="token number">0.9</span><span class="token punctuation">,</span> blue<span class="token punctuation">:</span> <span class="token number">0.9</span><span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>highlighted<span class="token punctuation">)</span>

        <span class="token comment">// 设置宽高</span>
        r<span class="token punctuation">.</span>tg_width<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token punctuation">.</span>fill<span class="token punctuation">)</span>
        r<span class="token punctuation">.</span>tg_height<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span>

        <span class="token keyword">return</span> r

    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


    <span class="token comment">// 用户名和密码登录按钮</span>
    <span class="token comment">// 这是swift 懒加载</span>
    <span class="token keyword">lazy</span> <span class="token keyword">var</span> primaryLoginButton<span class="token punctuation">:</span> <span class="token class-name">UIButton</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token class-name">UIButton</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> <span class="token punctuation">.</span>system<span class="token punctuation">)</span>
        <span class="token comment">// 设置标题</span>
        r<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;用户名和密码登录&quot;</span></span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>normal<span class="token punctuation">)</span>
        <span class="token comment">// 设置点击事件</span>
        r<span class="token punctuation">.</span><span class="token function">addTarget</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span><span class="token function">primaryLoginAction</span><span class="token punctuation">(</span><span class="token omit keyword">_</span><span class="token punctuation">:</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>touchUpInside<span class="token punctuation">)</span>
        <span class="token comment">// 设置背景颜色</span>
        r<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token punctuation">.</span>clear
        <span class="token comment">// 圆角大小</span>
        r<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>cornerRadius <span class="token operator">=</span> <span class="token number">21</span>
        <span class="token comment">// 边框颜色</span>
        r<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>borderColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">(</span>red<span class="token punctuation">:</span> <span class="token number">0.9</span><span class="token punctuation">,</span> green<span class="token punctuation">:</span> <span class="token number">0.9</span><span class="token punctuation">,</span> blue<span class="token punctuation">:</span> <span class="token number">0.9</span><span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>cgColor
        r<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>borderWidth <span class="token operator">=</span> <span class="token number">1</span>
        <span class="token comment">// 设置默认标题颜色</span>
        r<span class="token punctuation">.</span><span class="token function">setTitleColor</span><span class="token punctuation">(</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>normal<span class="token punctuation">)</span>
        <span class="token comment">// 设置按下时的标题颜色</span>
        r<span class="token punctuation">.</span><span class="token function">setTitleColor</span><span class="token punctuation">(</span><span class="token class-name">UIColor</span><span class="token punctuation">(</span>red<span class="token punctuation">:</span> <span class="token number">0.9</span><span class="token punctuation">,</span> green<span class="token punctuation">:</span> <span class="token number">0.9</span><span class="token punctuation">,</span> blue<span class="token punctuation">:</span> <span class="token number">0.9</span><span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>highlighted<span class="token punctuation">)</span>

        <span class="token comment">// 设置宽高</span>
        r<span class="token punctuation">.</span>tg_width<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token punctuation">.</span>fill<span class="token punctuation">)</span>
        r<span class="token punctuation">.</span>tg_height<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span>

        <span class="token keyword">return</span> r

    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="图片"></p><h3 id="自定义-view-1" tabindex="-1"><a class="header-anchor" href="#自定义-view-1" aria-hidden="true">#</a> 自定义 View</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token comment">// View/SettingView.swift</span>
<span class="token comment">//</span>
<span class="token comment">//  SettingView.swift</span>
<span class="token comment">//  MyTestSnapKit</span>
<span class="token comment">//</span>
<span class="token comment">//  Created by xu menglong on 2023/8/28.</span>
<span class="token comment">//</span>

<span class="token keyword">import</span> <span class="token class-name">UIKit</span>
<span class="token keyword">import</span> <span class="token class-name">TangramKit</span>

<span class="token keyword">class</span> <span class="token class-name">SettingView</span><span class="token punctuation">:</span> <span class="token class-name">TGRelativeLayout</span> <span class="token punctuation">{</span>

    <span class="token keyword">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">(</span>frame<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">.</span>zero<span class="token punctuation">)</span>
        <span class="token function">innerInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">required</span> <span class="token keyword">init</span><span class="token operator">?</span><span class="token punctuation">(</span>coder<span class="token punctuation">:</span> <span class="token class-name">NSCoder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">(</span>coder<span class="token punctuation">:</span> coder<span class="token punctuation">)</span>
        <span class="token function">innerInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">innerInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        tg_width<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token punctuation">.</span>fill<span class="token punctuation">)</span>
        tg_height<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token number">55</span><span class="token punctuation">)</span>


        backgroundColor <span class="token operator">=</span> <span class="token punctuation">.</span>white
        <span class="token function">addSubview</span><span class="token punctuation">(</span>iconView<span class="token punctuation">)</span>
        <span class="token function">addSubview</span><span class="token punctuation">(</span>titleView<span class="token punctuation">)</span>
        <span class="token function">addSubview</span><span class="token punctuation">(</span>moreIconView<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/// 左侧图标</span>
    <span class="token keyword">lazy</span> <span class="token keyword">var</span> iconView<span class="token punctuation">:</span> <span class="token class-name">UIImageView</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token class-name">UIImageView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        result<span class="token punctuation">.</span>image <span class="token operator">=</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>named<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Setting&quot;</span></span><span class="token punctuation">)</span>

        result<span class="token punctuation">.</span>tg_width<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
        result<span class="token punctuation">.</span>tg_height<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
        result<span class="token punctuation">.</span>tg_centerY<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        result<span class="token punctuation">.</span>tg_leading<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> result
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">/// 标题</span>
    <span class="token keyword">lazy</span> <span class="token keyword">var</span> titleView<span class="token punctuation">:</span> <span class="token class-name">UILabel</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token class-name">UILabel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        result<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;设置&quot;</span></span>
        result<span class="token punctuation">.</span>tg_width<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token punctuation">.</span>wrap<span class="token punctuation">)</span>
        result<span class="token punctuation">.</span>tg_height<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token punctuation">.</span>wrap<span class="token punctuation">)</span>
        result<span class="token punctuation">.</span>tg_centerY<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        result<span class="token punctuation">.</span>tg_leading<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>iconView<span class="token punctuation">.</span>tg_trailing<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> result
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">/// 右侧图标</span>
    <span class="token keyword">lazy</span> <span class="token keyword">var</span> moreIconView<span class="token punctuation">:</span> <span class="token class-name">UIImageView</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token class-name">UIImageView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        result<span class="token punctuation">.</span>image <span class="token operator">=</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>named<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Arrow&quot;</span></span><span class="token punctuation">)</span>
        result<span class="token punctuation">.</span>tg_width<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
        result<span class="token punctuation">.</span>tg_height<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
        result<span class="token punctuation">.</span>tg_centerY<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        result<span class="token punctuation">.</span>tg_right<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> result
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token comment">// Controller/SettingController.swift</span>
<span class="token comment">//</span>
<span class="token comment">//  SettingController.swift</span>
<span class="token comment">//  MyTestSnapKit</span>
<span class="token comment">//</span>
<span class="token comment">//  Created by xu menglong on 2023/8/28.</span>
<span class="token comment">//</span>

<span class="token keyword">import</span> <span class="token class-name">UIKit</span>
<span class="token keyword">import</span> <span class="token class-name">TangramKit</span>

<span class="token keyword">class</span> <span class="token class-name">SettingController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span> <span class="token punctuation">{</span>

    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// 设置背景颜色</span>
        view<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token punctuation">.</span>systemGroupedBackground

        <span class="token comment">// 设置标题</span>
        title <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;设置界面&quot;</span></span>

        <span class="token keyword">let</span> container <span class="token operator">=</span> <span class="token class-name">TGLinearLayout</span><span class="token punctuation">(</span><span class="token punctuation">.</span>vert<span class="token punctuation">)</span>
        container<span class="token punctuation">.</span>tg_width<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token punctuation">.</span>fill<span class="token punctuation">)</span>
        container<span class="token punctuation">.</span>tg_height<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token punctuation">.</span>wrap<span class="token punctuation">)</span>
        container<span class="token punctuation">.</span>tg_top<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token class-name">TGLayoutPos</span><span class="token punctuation">.</span>tg_safeAreaMargin<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
        container<span class="token punctuation">.</span>tg_space <span class="token operator">=</span> <span class="token number">1</span>

        container<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>settingView<span class="token punctuation">)</span>
        container<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>collectView<span class="token punctuation">)</span>

        view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span>

    <span class="token punctuation">}</span>

    <span class="token attribute atrule">@objc</span> <span class="token keyword">func</span> <span class="token function-definition function">onSettingClick</span><span class="token punctuation">(</span>recognizer<span class="token punctuation">:</span><span class="token class-name">UITapGestureRecognizer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;onSettingClick&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/// 设置Item</span>
    <span class="token keyword">lazy</span> <span class="token keyword">var</span> settingView<span class="token punctuation">:</span> <span class="token class-name">SettingView</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token class-name">SettingView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment">//设置点击事件</span>
        r<span class="token punctuation">.</span><span class="token function">addGestureRecognizer</span><span class="token punctuation">(</span><span class="token class-name">UITapGestureRecognizer</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span><span class="token function">onSettingClick</span><span class="token punctuation">(</span>recognizer<span class="token punctuation">:</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token keyword">return</span> r
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">/// 收藏Item</span>
    <span class="token keyword">lazy</span> <span class="token keyword">var</span> collectView<span class="token punctuation">:</span> <span class="token class-name">SettingView</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token class-name">SettingView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        r<span class="token punctuation">.</span>titleView<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;收藏&quot;</span></span>
        r<span class="token punctuation">.</span>iconView<span class="token punctuation">.</span>image <span class="token operator">=</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>named<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Setting&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> r
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">/*
     // MARK: - Navigation

     // In a storyboard-based application, you will often want to do a little preparation before navigation
     override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
     // Get the new view controller using segue.destination.
     // Pass the selected object to the new view controller.
     }
     */</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+k+'" alt="图片"></p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',10),C={href:"https://github.com/youngsoft/MyLinearLayout",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/youngsoft/TangramKit",target:"_blank",rel:"noopener noreferrer"};function L(_,I){const a=o("ExternalLinkIcon");return c(),i("div",null,[n("h2",v,[m,s(" oc 使用 "),n("a",b,[s("MyLayout"),t(a)]),s(" 布局")]),g,n("h2",w,[y,s(" swift 使用 "),n("a",f,[s("TangramKit"),t(a)]),s(" 布局")]),h,n("ul",null,[n("li",null,[n("a",C,[s("MyLayout"),t(a)])]),n("li",null,[n("a",V,[s("TangramKit"),t(a)])])])])}const q=p(d,[["render",L],["__file","index.html.vue"]]);export{q as default};
