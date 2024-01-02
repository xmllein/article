import{_ as n,o as s,c as e,e as i}from"./app.26c798e2.js";const a={},l=i(`<h2 id="ios-开发中常用的框架" tabindex="-1"><a class="header-anchor" href="#ios-开发中常用的框架" aria-hidden="true">#</a> iOS 开发中常用的框架</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">#腾讯开源的UI框架，提供了很多功能，例如：圆角按钮，空心按钮，TextView支持placeholder</span>
  <span class="token comment">#https://github.com/QMUI/QMUIDemo_iOS</span>
  <span class="token comment">#https://qmuiteam.com/ios/get-started</span>
  pod <span class="token string">&quot;QMUIKit&quot;</span>

  <span class="token comment">#提供类似Android中更高层级的布局框架</span>
  <span class="token comment">#https://github.com/youngsoft/MyLinearLayout</span>
  pod <span class="token string">&#39;MyLayout&#39;</span>

  <span class="token comment">#https://github.com/SysdataSpA/R.objc</span>
  <span class="token comment">#作者说受R.swift的自由启发，获取自动完成的本地化字符串、资产目录图像名称和故事板对象</span>
  pod <span class="token string">&#39;R.objc&#39;</span>

  <span class="token comment">#轮播图</span>
  <span class="token comment">#https://github.com/QuintGao/GKCycleScrollView</span>
  pod <span class="token string">&#39;GKCycleScrollView&#39;</span>

  <span class="token comment">#基于AFNetworking与YYCache的二次封装网络框架</span>
  <span class="token comment">#https://github.com/lztbwlkj/MSNetwork</span>
  <span class="token comment">#这样源码方式添加，因为在它基础上增加了功能</span>
  <span class="token comment"># pod &#39;MSNetwork&#39;</span>

  <span class="token comment">#网络框架</span>
  <span class="token comment">#https://github.com/AFNetworking/AFNetworking</span>
  pod <span class="token string">&#39;AFNetworking&#39;</span>

  <span class="token comment">#缓存框架</span>
  <span class="token comment">#https://github.com/ibireme/YYCache</span>
  pod <span class="token string">&#39;YYCache&#39;</span>

  <span class="token comment">#JSON解析</span>
  <span class="token comment">#https://github.com/CoderMJLee/MJExtension</span>
  pod <span class="token string">&#39;MJExtension&#39;</span>

  <span class="token comment">#指示器</span>
  <span class="token comment">#https://github.com/jdg/MBProgressHUD</span>
  pod <span class="token string">&#39;MBProgressHUD&#39;</span>

  <span class="token comment">#图片加载框架</span>
  <span class="token comment">#https://github.com/SDWebImage/SDWebImage</span>
  pod <span class="token string">&#39;SDWebImage&#39;</span>

  <span class="token comment">#发布订阅框架</span>
  <span class="token comment">#https://github.com/LeoMobileDeveloper/QTEventBus</span>
  pod <span class="token string">&#39;QTEventBus&#39;</span>

  <span class="token comment">#下拉刷新</span>
  <span class="token comment">#https://github.com/CoderMJLee/MJRefresh</span>
  pod <span class="token string">&#39;MJRefresh&#39;</span>

  <span class="token comment">#日志框架</span>
  <span class="token comment">#https://github.com/CocoaLumberjack/CocoaLumberjack</span>
  pod <span class="token string">&#39;CocoaLumberjack&#39;</span>

  <span class="token comment">#https://github.com/ChavezChen/CWLateralSlide</span>
  <span class="token comment">#侧滑菜单</span>
  pod <span class="token string">&#39;CWLateralSlide&#39;</span>

  <span class="token comment">#富文本</span>
  <span class="token comment">#https://github.com/ibireme/YYText</span>
  pod <span class="token string">&#39;YYText&#39;</span>

  <span class="token comment">#腾讯开源的偏好存储框架</span>
  <span class="token comment">#https://github.com/Tencent/MMKV</span>
  pod <span class="token string">&#39;MMKV&#39;</span>

  <span class="token comment">#验证码输入框</span>
  <span class="token comment">#https://github.com/CRAnimation/CRBoxInputView</span>
  pod <span class="token string">&#39;CRBoxInputView&#39;</span>

  <span class="token comment">#倒计时框架，可以不依赖view使用</span>
  <span class="token comment">#https://github.com/SmileZXLee/ZXCountDownView</span>
  pod <span class="token string">&#39;ZXCountDownView&#39;</span>

  <span class="token comment">#腾讯云开源的一款播放器组件，简单几行代码即可拥有类似腾讯视频强大的播放功能，包括横竖屏切换、清晰度选择、手势和小窗等基础功能，还支持视频缓存，软硬解切换和倍速播放等特殊功能，相比系统播放器，支持格式更多，兼容性更好，功能更强大，同时还具备首屏秒开、低延迟的优点，以及视频缩略图等高级能力。</span>
  <span class="token comment">#https://cloud.tencent.com/document/product/881/20208</span>
  <span class="token comment">#pod &#39;SuperPlayer&#39;</span>

  <span class="token comment">#阴影，边框</span>
  <span class="token comment">#https://github.com/YotrolZ/YCShadowView</span>
  pod <span class="token string">&#39;YCShadowView&#39;</span>

  <span class="token comment">#腾讯WCDB是一个高效、完整、易用的移动数据库框架，基于SQLCipher，支持iOS, macOS和Android</span>
  <span class="token comment">#https://github.com/Tencent/wcdb</span>
  pod <span class="token string">&#39;WCDB&#39;</span>

  <span class="token comment">#一行代码实现遮罩视图</span>
  <span class="token comment">#https://github.com/QuintGao/GKCover</span>
  pod <span class="token string">&#39;GKCover&#39;</span>

  <span class="token comment">#图片选择框架，预览框架</span>
  <span class="token comment">#https://github.com/longitachi/ZLPhotoBrowser/</span>
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

  <span class="token comment">#类似微博主页、简书主页等效果。多页面嵌套，既可以上下滑动</span>
  <span class="token comment">#https://github.com/pujiaxin33/JXPagingView</span>
  pod <span class="token string">&#39;JXPagingView/Pager&#39;</span>

  <span class="token comment">#指示器</span>
  <span class="token comment"># https://github.com/pujiaxin33/JXCategoryView</span>
  pod <span class="token string">&#39;JXCategoryView&#39;</span>

  <span class="token comment">#二维码扫描和生成</span>
  <span class="token comment">#https://github.com/kingsic/SGQRCode</span>
  pod <span class="token string">&#39;SGQRCode&#39;</span>

  <span class="token comment">#轮播图，多讲解一个是方便大家选择</span>
  <span class="token comment">#https://github.com/wwmz/WMZBanner</span>
  pod <span class="token string">&#39;WMZBanner&#39;</span>

  <span class="token comment">#https://github.com/91renb/BRPickerView</span>
  <span class="token comment">#封装的是iOS中常用的选择器组件，主要包括：日期选择器</span>
  pod <span class="token string">&#39;BRPickerView&#39;</span>

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

  <span class="token comment">#苹果登录</span>
  pod <span class="token string">&#39;mob_sharesdk/ShareSDKPlatforms/Apple&#39;</span>

  <span class="token comment">#极光推送</span>
  <span class="token comment">#https://docs.jiguang.cn/jpush/client/iOS/ios_guide_new/</span>
  pod <span class="token string">&#39;JPush&#39;</span>

  <span class="token comment">#极光统计</span>
  <span class="token comment">#https://docs.jiguang.cn/janalytics/guideline/intro/</span>
  pod <span class="token string">&#39;JAnalytics&#39;</span>

  <span class="token comment">#webview和js交互框架</span>
  <span class="token comment">#可以直接使用系统提供的api，不是说一定要用框架</span>
  <span class="token comment">#只是用该框架，更方便</span>
  <span class="token comment">#https://github.com/marcuswestin/WebViewJavascriptBridge</span>
  pod <span class="token string">&#39;WebViewJavascriptBridge&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[l];function d(t,m){return s(),e("div",null,c)}const p=n(a,[["render",d],["__file","index.html.vue"]]);export{p as default};
