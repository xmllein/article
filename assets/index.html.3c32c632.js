import{_ as s,o as a,c as n,e}from"./app.26c798e2.js";const i={},d=e(`<h2 id="开发最常用的-adb-命令" tabindex="-1"><a class="header-anchor" href="#开发最常用的-adb-命令" aria-hidden="true">#</a> 开发最常用的 adb 命令</h2><h2 id="启动停止服务" tabindex="-1"><a class="header-anchor" href="#启动停止服务" aria-hidden="true">#</a> 启动停止服务</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动 adb 服务</span>
adb start-server

<span class="token comment"># 停止 adb 服务</span>
adb kill-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装卸载应用" tabindex="-1"><a class="header-anchor" href="#安装卸载应用" aria-hidden="true">#</a> 安装卸载应用</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装应用</span>
adb <span class="token function">install</span> /Users/compass/Desktop/app/app.apk

<span class="token comment"># 多个设备，安装到指定设备</span>
adb <span class="token parameter variable">-s</span> xxx <span class="token function">install</span> /Users/compass/Desktop/app/app.apk

<span class="token comment"># 覆盖安装apk</span>
adb <span class="token function">install</span> <span class="token parameter variable">-r</span> /Users/compass/Desktop/app/app.apk

<span class="token comment"># 当运行正常，通过adb命令安装失败报如此提示</span>
<span class="token comment"># Failure [INSTALL_FAILED_TEST_ONLY: installPackageLI]</span>
<span class="token comment"># 使用命令(intall后加上-t)</span>
adb <span class="token function">install</span> <span class="token parameter variable">-t</span> /Users/compass/Desktop/app/app.apk

<span class="token comment"># 卸载应用</span>
adb uninstall com.example.app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="系统信息" tabindex="-1"><a class="header-anchor" href="#系统信息" aria-hidden="true">#</a> 系统信息</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看设备信息</span>
adb devices

<span class="token comment"># 查看adb的版本信息</span>
adb version

<span class="token comment"># 查看设备 android_id</span>
adb shell settings get secure android_id

<span class="token comment"># 查看设备的系统版本</span>
adb shell getprop ro.build.version.release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改分辨率" tabindex="-1"><a class="header-anchor" href="#修改分辨率" aria-hidden="true">#</a> 修改分辨率</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看设备分辨率</span>
adb shell wm size

<span class="token comment"># 修改设备分辨率</span>
adb shell wm size 1080x1920

<span class="token comment"># 恢复设备分辨率</span>
adb shell wm size reset

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改屏幕密度" tabindex="-1"><a class="header-anchor" href="#修改屏幕密度" aria-hidden="true">#</a> 修改屏幕密度</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看设备屏幕密度</span>
adb shell wm density

<span class="token comment"># 修改设备屏幕密度</span>
adb shell wm density <span class="token number">480</span>

<span class="token comment"># 恢复设备屏幕密度</span>
adb shell wm density reset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看当前活动窗口的类名" tabindex="-1"><a class="header-anchor" href="#查看当前活动窗口的类名" aria-hidden="true">#</a> 查看当前活动窗口的类名</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># windows 系统</span>
adb shell dumpsys window windows <span class="token operator">|</span> findstr mCurrentFocus

<span class="token comment"># mac 系统</span>
adb shell dumpsys window windows <span class="token operator">|</span> <span class="token function">grep</span> mCurrentFocus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="电脑和手机互传文件" tabindex="-1"><a class="header-anchor" href="#电脑和手机互传文件" aria-hidden="true">#</a> 电脑和手机互传文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 电脑到手机</span>
adb push /Users/compass/Desktop/app/app.apk /sdcard/

<span class="token comment"># 手机到电脑</span>
adb pull /sdcard/app.apk /Users/compass/Desktop/app/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="收集日志" tabindex="-1"><a class="header-anchor" href="#收集日志" aria-hidden="true">#</a> 收集日志</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将日志保存到电脑固定的位置</span>
adb logcat <span class="token parameter variable">-v</span> <span class="token function">time</span> <span class="token operator">&gt;</span> /Users/compass/Desktop/log.txt

<span class="token comment"># 查看已经报错崩溃的手机中的日志</span>
adb logcat <span class="token parameter variable">-v</span> <span class="token function">time</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;crash&quot;</span>

<span class="token comment"># 收集日志</span>
adb logcat <span class="token operator">&gt;</span> log.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动应用" tabindex="-1"><a class="header-anchor" href="#启动应用" aria-hidden="true">#</a> 启动应用</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动应用</span>
adb shell am start <span class="token parameter variable">-n</span> com.example.app/com.example.app.MainActivity

<span class="token comment"># 启动应用并传递参数</span>
adb shell am start <span class="token parameter variable">-n</span> com.example.app/com.example.app.MainActivity <span class="token parameter variable">--es</span> <span class="token string">&quot;key&quot;</span> <span class="token string">&quot;value&quot;</span>

<span class="token comment">#示例：adb shell am start -S -R 10 -W com.example.app/.MainActivity</span>
<span class="token comment">#其中-S表示每次启动前先强行停止，-R表示重复测试次数，注意反斜杠、包名、类名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),l=[d];function c(r,t){return a(),n("div",null,l)}const m=s(i,[["render",c],["__file","index.html.vue"]]);export{m as default};
