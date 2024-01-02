import{_ as n,o as s,c as e,e as i}from"./app.26c798e2.js";const a={},t=i(`<h2 id="ios-开发中常用的框架-swift" tabindex="-1"><a class="header-anchor" href="#ios-开发中常用的框架-swift" aria-hidden="true">#</a> iOS 开发中常用的框架(Swift)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token comment">#提供类似Android中更高层级的布局框架</span>
  <span class="token comment">#https://github.com/youngsoft/TangramKit</span>
  pod <span class="token string">&#39;TangramKit&#39;</span>

  <span class="token comment">#将资源（图片，文件等）生成类，方便到代码中方法</span>
  <span class="token comment">#例如：let icon = R.image.settingsIcon()</span>
  <span class="token comment">#let font = R.font.sanFrancisco(size: 42)</span>
  <span class="token comment">#let color = R.color.indicatorHighlight()</span>
  <span class="token comment">#let viewController = CustomViewController(nib: R.nib.customView)</span>
  <span class="token comment">#let string = R.string.localizable.welcomeWithName(&quot;Arthur Dent&quot;)</span>
  <span class="token comment">#https://github.com/mac-cain13/R.swift</span>
  pod <span class="token string">&#39;R.swift&#39;</span>

  <span class="token comment">#颜色工具类</span>
  <span class="token comment">#https://github.com/yannickl/DynamicColor</span>
  pod <span class="token string">&quot;DynamicColor&quot;</span>

  <span class="token comment">#腾讯开源的UI框架，提供了很多功能，例如：圆角按钮，空心按钮，TextView支持placeholder</span>
  <span class="token comment">#https://github.com/QMUI/QMUIDemo_iOS</span>
  <span class="token comment">#https://qmuiteam.com/ios/get-started</span>
  pod <span class="token string">&quot;QMUIKit&quot;</span>

  <span class="token comment">#图片加载</span>
  <span class="token comment">#https://github.com/SDWebImage/SDWebImage</span>
  pod <span class="token string">&#39;SDWebImage&#39;</span>

  <span class="token comment"># 网络请求框架</span>
  <span class="token comment"># https://github.com/Moya/Moya</span>
  pod <span class="token string">&#39;Moya/RxSwift&#39;</span>

  <span class="token comment">#避免每个界面定义disposeBag</span>
  <span class="token comment">#https://github.com/RxSwiftCommunity/NSObject-Rx</span>
  pod <span class="token string">&quot;NSObject+Rx&quot;</span>

  <span class="token comment"># JSON解析为对象</span>
  <span class="token comment"># https://github.com/alibaba/HandyJSON</span>
  pod <span class="token string">&quot;HandyJSON&quot;</span>

  <span class="token comment">#提示框架</span>
  <span class="token comment">#https://github.com/jdg/MBProgressHUD</span>
  pod <span class="token string">&#39;MBProgressHUD&#39;</span>

  <span class="token comment">#Swift图片加载</span>
  <span class="token comment">#https://github.com/onevcat/Kingfisher</span>
  pod <span class="token string">&quot;Kingfisher&quot;</span>

  <span class="token comment">#Swift扩展，像字符串，数组等</span>
  <span class="token comment">#https://github.com/SwifterSwift/SwifterSwift</span>
  pod <span class="token string">&#39;SwifterSwift&#39;</span>

  <span class="token comment"># 发布订阅框架</span>
  <span class="token comment"># https://github.com/cesarferreira/SwiftEventBus</span>
  pod <span class="token string">&quot;SwiftEventBus&quot;</span>

  <span class="token comment">#下拉刷新</span>
  <span class="token comment">#https://github.com/CoderMJLee/MJRefresh</span>
  pod <span class="token string">&#39;MJRefresh&#39;</span>

  <span class="token comment">#富文本框架</span>
  <span class="token comment">#https://github.com/a1049145827/BSText</span>
  <span class="token comment">#OC版本：https://github.com/ibireme/YYText</span>
  pod <span class="token string">&quot;BSText&quot;</span>

  <span class="token comment">#腾讯开源的偏好存储框架</span>
  <span class="token comment">#https://github.com/Tencent/MMKV</span>
  pod <span class="token string">&#39;MMKV&#39;</span>

  <span class="token comment">#验证码输入框</span>
  <span class="token comment">#https://github.com/feaskters/MHVerifyCodeView</span>
  pod <span class="token string">&#39;MHVerifyCodeView&#39;</span>

  <span class="token comment">#腾讯WCDB是一个高效、完整、易用的移动数据库框架，基于SQLCipher，支持iOS, macOS和Android</span>
  <span class="token comment">#https://github.com/Tencent/wcdb</span>
  pod <span class="token string">&#39;WCDB.swift&#39;</span>

  <span class="token comment">#面向泛前端产品研发全生命周期的效率平台，查看数据库,网络请求,内存泄漏</span>
  <span class="token comment">#https://xingyun.xiaojukeji.com/docs/dokit/#/iosGuide</span>
    pod <span class="token string">&#39;DoraemonKit/Core&#39;</span>, :configurations <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;Debug&#39;</span><span class="token punctuation">]</span> <span class="token comment">#必选</span>
  <span class="token comment">#  pod &#39;DoraemonKit/WithGPS&#39;, &#39;~&gt; 3.0.4&#39;, :configurations =&gt; [&#39;Debug&#39;] #可选</span>
  <span class="token comment">#  pod &#39;DoraemonKit/WithLoad&#39;, &#39;~&gt; 3.0.4&#39;, :configurations =&gt; [&#39;Debug&#39;] #可选</span>
  <span class="token comment">#  pod &#39;DoraemonKit/WithLogger&#39;, &#39;~&gt; 3.0.4&#39;, :configurations =&gt; [&#39;Debug&#39;] #可选</span>
    pod <span class="token string">&#39;DoraemonKit/WithDatabase&#39;</span>,  :configurations <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;Debug&#39;</span><span class="token punctuation">]</span> <span class="token comment">#可选</span>
  <span class="token comment">#  pod &#39;DoraemonKit/WithMLeaksFinder&#39;,  :configurations =&gt; [&#39;Debug&#39;] #可选</span>
  <span class="token comment">#  pod &#39;DoraemonKit/WithWeex&#39;, &#39;~&gt; 3.0.4&#39;, :configurations =&gt; [&#39;Debug&#39;] #可选</span>

  <span class="token comment">#腾讯云开源的一款播放器组件，简单几行代码即可拥有类似腾讯视频强大的播放功能，包括横竖屏切换、清晰度选择、手势和小窗等基础功能，还支持视频缓存，软硬解切换和倍速播放等特殊功能，相比系统播放器，支持格式更多，兼容性更好，功能更强大，同时还具备首屏秒开、低延迟的优点，以及视频缩略图等高级能力。</span>
  <span class="token comment">#https://cloud.tencent.com/document/product/881/20208</span>
  <span class="token comment">#编译报错解决方法：https://www.jianshu.com/p/103c0bf7d523</span>
   pod <span class="token string">&#39;SuperPlayer&#39;</span>

  <span class="token comment">#图片预览框架，效果都不是很好，后面会重写</span>
  <span class="token comment">#https://github.com/fcbox/Lantern</span>
  pod <span class="token string">&#39;Lantern&#39;</span>

  <span class="token comment">#图片选择框架，预览框架</span>
  <span class="token comment">#https://github.com/longitachi/ZLPhotoBrowser</span>
  pod <span class="token string">&#39;ZLPhotoBrowser&#39;</span>

  <span class="token comment"># 阿里云OSS</span>
  <span class="token comment"># 用来上传发布带图片动态</span>
  <span class="token comment"># https://help.aliyun.com/document_detail/32055.html</span>
  pod <span class="token string">&#39;AliyunOSSiOS&#39;</span>

  <span class="token comment">#高德地图</span>
  <span class="token comment">#https://lbs.amap.com/api/ios-sdk/guide/create-project/cocoapods</span>
  <span class="token comment">#这里用的是没有IDFA的sdk，更多说明：https://lbs.amap.com/api/ios-sdk/guide/create-project/idfa-guide</span>
  pod <span class="token string">&#39;AMap3DMap-NO-IDFA&#39;</span>

  <span class="token comment">#高德地图POI</span>
  pod <span class="token string">&#39;AMapSearch-NO-IDFA&#39;</span>

  <span class="token comment">#用户详情头部视图</span>
  <span class="token comment"># https://github.com/pujiaxin33/JXPagingView</span>
  pod <span class="token string">&#39;JXPagingView/Paging&#39;</span>

  <span class="token comment">#指示器</span>
  <span class="token comment">#https://github.com/pujiaxin33/JXSegmentedView</span>
  pod <span class="token string">&#39;JXSegmentedView&#39;</span>

  <span class="token comment">#支付宝支付</span>
  <span class="token comment">#https://docs.open.alipay.com/204/105295/</span>
  pod <span class="token string">&#39;AlipaySDK-iOS&#39;</span>

  <span class="token comment">#融云聊天</span>
  <span class="token comment">#https://doc.rongcloud.cn/im/IOS/5.X/noui/import</span>
  pod <span class="token string">&#39;RongCloudIM/IMLib&#39;</span>

  <span class="token comment"># share sdk</span>
  <span class="token comment">#https://mob.com/wiki/detailed?wiki=4&amp;id=14</span>
  <span class="token comment"># 主模块(必须)</span>
  pod <span class="token string">&#39;mob_sharesdk&#39;</span>

  <span class="token comment"># UI模块(非必须，需要用到ShareSDK提供的分享菜单栏和分享编辑页面需要以下1行)</span>
  pod <span class="token string">&#39;mob_sharesdk/ShareSDKUI&#39;</span>

  <span class="token comment"># 平台SDK模块(对照一下平台，需要的加上。如果只需要QQ、微信、新浪微博，只需要以下3行)</span>
  pod <span class="token string">&#39;mob_sharesdk/ShareSDKPlatforms/QQ&#39;</span>
  pod <span class="token string">&#39;mob_sharesdk/ShareSDKPlatforms/SinaWeibo&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[t];function c(o,d){return s(),e("div",null,l)}const p=n(a,[["render",c],["__file","index.html.vue"]]);export{p as default};
