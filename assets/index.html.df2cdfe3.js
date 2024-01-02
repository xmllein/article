import{_ as d,r as i,o as r,c as l,a as t,b as e,d as a,e as s}from"./app.26c798e2.js";const o={},c=t("h2",{id:"flutter-基础",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#flutter-基础","aria-hidden":"true"},"#"),e(" Flutter 基础")],-1),p=t("h3",{id:"环境搭建",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#环境搭建","aria-hidden":"true"},"#"),e(" 环境搭建")],-1),u={href:"https://juejin.cn/post/7207078219215929402",target:"_blank",rel:"noopener noreferrer"},m={href:"https://juejin.cn/post/7209653045310210108",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.bilibili.com/video/BV1S4411E7LY?p=17&vd_source=c5abf1ba032ca00c06ebba96e3ff445e",target:"_blank",rel:"noopener noreferrer"},b={href:"https://flutter.cn/docs",target:"_blank",rel:"noopener noreferrer"},h={href:"https://dart.cn/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://johns.blog.csdn.net/article/details/122146619",target:"_blank",rel:"noopener noreferrer"},f={href:"https://blog.csdn.net/nicepainkiller/article/details/122146356",target:"_blank",rel:"noopener noreferrer"},k=s(`<h3 id="flutter-常用命令行" tabindex="-1"><a class="header-anchor" href="#flutter-常用命令行" aria-hidden="true">#</a> Flutter 常用命令行</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">#运行项目</span>
$ flutter run

<span class="token comment">#模拟器列表</span>
$ flutter emulators

<span class="token comment">#启动模拟器,只有启动模拟器才可以运行模拟器</span>
$ flutter emulators <span class="token parameter variable">--launch</span> <span class="token operator">&lt;</span>emulator id<span class="token operator">&gt;</span>
<span class="token comment">#例如未启动模拟器列表:</span>
Nexus_5X_API_28     • Nexus 5X      • Google • Nexus 5X API <span class="token number">28</span>
apple_ios_simulator • iOS Simulator • Apple

<span class="token comment">#启动安卓模拟器</span>
$ flutter emulators <span class="token parameter variable">--launch</span> Nexus_5X_API_28

<span class="token comment">#运行所有模拟器</span>
$ flutter run <span class="token parameter variable">-d</span> all

<span class="token comment">#运行指定模拟器</span>
$ flutter run <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>deviceId<span class="token operator">&gt;</span>
<span class="token comment">#例如模拟器列表:</span>
Android SDK built <span class="token keyword">for</span> x86 • emulator-5554             • android-x86 • Android <span class="token number">9</span> <span class="token punctuation">(</span>API <span class="token number">28</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>emulator<span class="token punctuation">)</span>
xxx的 iPhone               • 00008020-001838491169002E • ios         • iOS <span class="token number">12.2</span>

<span class="token comment">#运行安卓模拟器</span>
$ flutter run <span class="token parameter variable">-d</span> emulator-5554

<span class="token comment">#运行IOS真机</span>
$ flutter run <span class="token parameter variable">-d</span> 00008020-001838491169002E

<span class="token comment">#更新版本</span>
$ flutter upgrade

<span class="token comment">#运行模拟器过程中命令</span>
<span class="token comment">#热更新直接刷新</span>
$ r

<span class="token comment">#热更新重启刷新</span>
$ R

<span class="token comment">#退出运行模拟器</span>
$ q

<span class="token comment">#切换android和ios 模式</span>
$ o

<span class="token comment">#显示网格</span>
$ p

<span class="token comment">#打包apk包</span>

<span class="token comment">#直接打包：</span>
flutter build apk

<span class="token comment"># 64位-release：</span>
flutter build apk <span class="token parameter variable">--release</span> --target-platform android-arm64

<span class="token comment"># 32位-release：</span>
flutter build apk <span class="token parameter variable">--release</span> --target-platform android-arm

<span class="token comment">#打包ipa包</span>

<span class="token comment">#直接打包：</span>
flutter build ios

<span class="token comment"># 64位-release：</span>
flutter build ios <span class="token parameter variable">--release</span> --no-codesign --target-platform<span class="token operator">=</span>ios <span class="token parameter variable">--target</span><span class="token operator">=</span>lib/main.dart

<span class="token comment"># 32位-release：</span>
flutter build ios <span class="token parameter variable">--release</span> --no-codesign --target-platform<span class="token operator">=</span>ios <span class="token parameter variable">--target</span><span class="token operator">=</span>lib/main.dart --build-number<span class="token operator">=</span><span class="token number">1.0</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flutter-h-帮助命令含义" tabindex="-1"><a class="header-anchor" href="#flutter-h-帮助命令含义" aria-hidden="true">#</a> Flutter -h 帮助命令含义</h3><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:right;">含义</th></tr></thead><tbody><tr><td style="text-align:left;">--version</td><td style="text-align:right;">查看 Flutter 版本</td></tr><tr><td style="text-align:left;">--h 或者 -help</td><td style="text-align:right;">打印所有命令行用法信息</td></tr><tr><td style="text-align:left;">analyze</td><td style="text-align:right;">分享项目的 Dart 代码</td></tr><tr><td style="text-align:left;">build</td><td style="text-align:right;">Flutter 构建命令</td></tr><tr><td style="text-align:left;">channel</td><td style="text-align:right;">列表或开关 Flutter 通道</td></tr><tr><td style="text-align:left;">clean</td><td style="text-align:right;">删除构建/目录</td></tr><tr><td style="text-align:left;">config</td><td style="text-align:right;">配置 Flutter 设置</td></tr><tr><td style="text-align:left;">create</td><td style="text-align:right;">创建一个新的 Flutter 项目</td></tr><tr><td style="text-align:left;">devices</td><td style="text-align:right;">列出所有连接的设备</td></tr><tr><td style="text-align:left;">doctor</td><td style="text-align:right;">展示了有关安装工具的信息</td></tr><tr><td style="text-align:left;">drive</td><td style="text-align:right;">为当前项目运行 Flutter 驱动程序测试</td></tr><tr><td style="text-align:left;">format</td><td style="text-align:right;">格式一个或多个 Dart 文件</td></tr><tr><td style="text-align:left;">fuchsia_reload</td><td style="text-align:right;">在 Fuchsia 上进行热重载</td></tr><tr><td style="text-align:left;">help</td><td style="text-align:right;">显示帮助信息的 Flutter</td></tr><tr><td style="text-align:left;">install</td><td style="text-align:right;">在附加设备上安装 Flutter 应用程序</td></tr><tr><td style="text-align:left;">logs</td><td style="text-align:right;">显示用于运行 Flutter 应用程序的日志输出</td></tr><tr><td style="text-align:left;">packages</td><td style="text-align:right;">命令用于管理 Flutter 包</td></tr><tr><td style="text-align:left;">precache</td><td style="text-align:right;">填充了 Flutter 工具的二进制工件缓存</td></tr><tr><td style="text-align:left;">run</td><td style="text-align:right;">在附加设备上运行你的 Flutter 应用程序</td></tr><tr><td style="text-align:left;">screenshot</td><td style="text-align:right;">从一个连接的设备截图</td></tr><tr><td style="text-align:left;">stop</td><td style="text-align:right;">停止在附加设备上的 Flutter 应用</td></tr><tr><td style="text-align:left;">test</td><td style="text-align:right;">对当前项目的 Flutter 单元测试</td></tr><tr><td style="text-align:left;">trace</td><td style="text-align:right;">开始并停止跟踪运行的 Flutter 应用程序</td></tr><tr><td style="text-align:left;">upgrade</td><td style="text-align:right;">升级你的 Flutter 副本</td></tr></tbody></table><h3 id="flutter-项目-重新生成-android-ios-模板项目" tabindex="-1"><a class="header-anchor" href="#flutter-项目-重新生成-android-ios-模板项目" aria-hidden="true">#</a> flutter 项目 重新生成 Android ios 模板项目</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># android</span>
<span class="token comment"># 进入工程目录，删除android目录</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> android

<span class="token comment"># 重新创建java语言的android目录</span>
flutter create <span class="token parameter variable">-a</span> <span class="token function">java</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 重新创建kotlin语言的android目录</span>
flutter create <span class="token parameter variable">-a</span> kotlin <span class="token builtin class-name">.</span>

<span class="token comment"># ios</span>
<span class="token comment"># 进入工程目录，删除ios</span>

<span class="token function">rm</span> <span class="token parameter variable">-rf</span> ios

<span class="token comment"># 重新创建指定swift语言的ios目录</span>
flutter create <span class="token parameter variable">-i</span> swift <span class="token builtin class-name">.</span>

<span class="token comment"># 重新创建指定objective-c 语言的ios目录</span>
flutter create <span class="token parameter variable">-i</span> objc <span class="token builtin class-name">.</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="android-gradle" tabindex="-1"><a class="header-anchor" href="#android-gradle" aria-hidden="true">#</a> android gradle</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pluginManagement <span class="token punctuation">{</span>
    repositories <span class="token punctuation">{</span>
        //gradlePluginPortal<span class="token punctuation">(</span><span class="token punctuation">)</span>
        //google<span class="token punctuation">(</span><span class="token punctuation">)</span>
        //mavenCentral<span class="token punctuation">(</span><span class="token punctuation">)</span>
        maven <span class="token punctuation">{</span> url <span class="token string">&#39;https://maven.aliyun.com/repository/google&#39;</span> <span class="token punctuation">}</span>
        maven <span class="token punctuation">{</span> url <span class="token string">&#39;https://maven.aliyun.com/repository/public&#39;</span> <span class="token punctuation">}</span>
        maven <span class="token punctuation">{</span> url <span class="token string">&#39;https://maven.aliyun.com/repository/gradle-plugin&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
dependencyResolutionManagement <span class="token punctuation">{</span>
    repositoriesMode.set<span class="token punctuation">(</span>RepositoriesMode.FAIL_ON_PROJECT_REPOS<span class="token punctuation">)</span>
    repositories <span class="token punctuation">{</span>
//        google<span class="token punctuation">(</span><span class="token punctuation">)</span>
//        mavenCentral<span class="token punctuation">(</span><span class="token punctuation">)</span>
        maven <span class="token punctuation">{</span> url <span class="token string">&#39;https://maven.aliyun.com/repository/google&#39;</span> <span class="token punctuation">}</span>
        maven <span class="token punctuation">{</span> url <span class="token string">&#39;https://maven.aliyun.com/repository/public&#39;</span> <span class="token punctuation">}</span>
        maven <span class="token punctuation">{</span> url <span class="token string">&#39;https://maven.aliyun.com/repository/gradle-plugin&#39;</span> <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
rootProject.name <span class="token operator">=</span> <span class="token string">&quot;My Application&quot;</span>
include <span class="token string">&#39;:app&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ios-podfile" tabindex="-1"><a class="header-anchor" href="#ios-podfile" aria-hidden="true">#</a> iOS Podfile</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> <span class="token string">&#39;https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="flutter-代码片段" tabindex="-1"><a class="header-anchor" href="#flutter-代码片段" aria-hidden="true">#</a> flutter 代码片段</h2>`,11),x={href:"https://marketplace.visualstudio.com/items?itemName=alexisvt.flutter-snippets",target:"_blank",rel:"noopener noreferrer"},y=s('<table><thead><tr><th>Snippet</th><th>Description</th></tr></thead><tbody><tr><td><code>fstful</code></td><td>StatefulWidget snippet. This is an alternative of <code>stful</code></td></tr><tr><td><code>fstless</code></td><td>StatelessWidget snippet. This is an alternative of <code>stless</code></td></tr><tr><td><code>fscaff</code></td><td>Scaffold widget snippet</td></tr><tr><td><code>fedgall</code></td><td>EdgeInsets widget snippet with named constructor <code>all</code></td></tr><tr><td><code>fedgonly</code></td><td>EdgeInsets widget snippet with named constructor <code>only</code></td></tr><tr><td><code>ftxt</code></td><td>Text widget snippet</td></tr><tr><td><code>finitlf</code></td><td>Flutter initState lifecycle method snippet</td></tr><tr><td><code>fic</code></td><td>Flutter Icon widget snippet</td></tr><tr><td><code>fcont</code></td><td>Flutter Container widget snippet</td></tr><tr><td><code>fcent</code></td><td>Flutter Center widget snippet</td></tr><tr><td><code>frow</code></td><td>Flutter Row widget snippet</td></tr><tr><td><code>fcol</code></td><td>Flutter Column widget snippet</td></tr><tr><td><code>fex</code></td><td>Expand widget snippet</td></tr><tr><td><code>fszbw</code></td><td>SizedBox widget snippet with just width argument</td></tr><tr><td><code>fszbh</code></td><td>SizedBox widget snippet with just height argument</td></tr><tr><td><code>fszb</code></td><td>SizedBox widget with width and height arguments</td></tr><tr><td><code>fedgsym</code></td><td>EdgeInsets widget with named constructor <code>symmetric</code></td></tr><tr><td><code>fedgsymv</code></td><td>EdgeInsets widget with named constructor <code>symmetric</code> with <code>vertical</code> parameter</td></tr><tr><td><code>fedgsymh</code></td><td>EdgeInsets widget with named constructor <code>symmetric</code> with <code>horizontal</code> parameter</td></tr><tr><td><code>fimpmat</code></td><td>Add material&#39;s package import statement</td></tr><tr><td><code>fstream</code></td><td>Display a StreamBuilder widget</td></tr><tr><td><code>felbtn</code></td><td>Flutter ElevatedButton snippet</td></tr></tbody></table><h3 id="dart-相关代码片段" tabindex="-1"><a class="header-anchor" href="#dart-相关代码片段" aria-hidden="true">#</a> Dart 相关代码片段</h3><table><thead><tr><th>Snippet</th><th>Description</th></tr></thead><tbody><tr><td><code>dvar</code></td><td>Dart variable declaration using <code>var</code></td></tr><tr><td><code>dfinal</code></td><td>Dart variable declaration using <code>final</code></td></tr><tr><td><code>dconst</code></td><td>Dart variable declaration using <code>const</code></td></tr><tr><td><code>dinvar</code></td><td>Dart Public Instance variable snippet</td></tr><tr><td><code>dprinvar</code></td><td>Dart Private instance variable snippet</td></tr><tr><td><code>dmt</code></td><td>Dart public method snippet</td></tr><tr><td><code>dprmt</code></td><td>Dart private method snippet</td></tr><tr><td><code>darr</code></td><td>Dart public arrow function snippet</td></tr><tr><td><code>dprarr</code></td><td>Dart private arrow function snippet</td></tr><tr><td><code>dopnctor</code></td><td>Dart optional named parameters constructor snippet</td></tr><tr><td><code>dlist</code></td><td>Dart <code>List</code> collection snippet</td></tr><tr><td><code>dmap</code></td><td>Dart <code>Map</code> collection snippet</td></tr><tr><td><code>dset</code></td><td>Dart <code>Set</code> collection snippet</td></tr><tr><td><code>dgetarr</code></td><td>Dart arrow function getter snippet</td></tr><tr><td><code>dimpas</code></td><td>Dart <code>import as</code> snippet</td></tr><tr><td><code>dimpshow</code></td><td>Dart <code>import show</code> snippet</td></tr><tr><td><code>dimplazy</code></td><td>Dart <code>import deffered as</code> snippet</td></tr><tr><td><code>dimphide</code></td><td>Dart <code>import hide</code> snippet</td></tr><tr><td><code>dexhide</code></td><td>Dart <code>export hide</code> snippet</td></tr><tr><td><code>dexshow</code></td><td>Dart <code>export show</code> snippet</td></tr><tr><td><code>dconvert</code></td><td>Dart <code>convert</code> lib import snippet</td></tr><tr><td><code>dimpmeta</code></td><td>Add meta package import statement</td></tr><tr><td><code>dan</code></td><td>Add a Dart anonymous function</td></tr><tr><td><code>dcla</code></td><td>Add Dart Class snippet</td></tr><tr><td><code>dclae</code></td><td>Add Dart Class snippet with extends keyword</td></tr></tbody></table><h3 id="flutter-bloc-代码片段" tabindex="-1"><a class="header-anchor" href="#flutter-bloc-代码片段" aria-hidden="true">#</a> Flutter Bloc 代码片段</h3><table><thead><tr><th>Snippet</th><th>Description</th></tr></thead><tbody><tr><td><code>fblocprov</code></td><td>Flutter bloc provider snippet</td></tr></tbody></table><h2 id="getx-snippets" tabindex="-1"><a class="header-anchor" href="#getx-snippets" aria-hidden="true">#</a> GetX Snippets</h2>',6),_={href:"https://marketplace.visualstudio.com/items?itemName=get-snippets.get-snippets",target:"_blank",rel:"noopener noreferrer"},w={href:"https://pub-web.flutter-io.cn/packages/get_cli",target:"_blank",rel:"noopener noreferrer"};function F(D,S){const n=i("ExternalLinkIcon");return r(),l("div",null,[c,p,t("ul",null,[t("li",null,[t("a",u,[e("Flutter Android 打包保姆式全流程 2023 版"),a(n)])]),t("li",null,[t("a",m,[e("Flutter IOS 新建打包发布全流程 2023 版"),a(n)])]),t("li",null,[t("a",v,[e("Flutter 环境搭建 视频"),a(n)])]),t("li",null,[t("a",b,[e("flutter 文档"),a(n)])]),t("li",null,[t("a",h,[e("dart 文档"),a(n)])]),t("li",null,[t("a",g,[e("Flutter 集成与打包 iOS 应用"),a(n)])]),t("li",null,[t("a",f,[e("Flutter 集成与打包 Android 应用"),a(n)])])]),k,t("p",null,[t("a",x,[e("Flutter Widget Snippets"),a(n)])]),y,t("ul",null,[t("li",null,[t("a",_,[e("GetX Snippets"),a(n)])]),t("li",null,[t("a",w,[e("get_cli "),a(n)])])])])}const I=d(o,[["render",F],["__file","index.html.vue"]]);export{I as default};
