import{_ as i,r as l,o as u,c as r,d as a,w as t,a as n,b as s,e as c}from"./app.26c798e2.js";const k={},d=c(`<h2 id="rn-常用-api" tabindex="-1"><a class="header-anchor" href="#rn-常用-api" aria-hidden="true">#</a> RN 常用 Api</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  StyleSheet<span class="token punctuation">,</span>
  View<span class="token punctuation">,</span>
  Button<span class="token punctuation">,</span>
  Alert<span class="token punctuation">,</span>
  Text<span class="token punctuation">,</span>
  Dimensions<span class="token punctuation">,</span>
  useWindowDimensions<span class="token punctuation">,</span>
  Platform<span class="token punctuation">,</span>
  Linking<span class="token punctuation">,</span>
  PixelRatio<span class="token punctuation">,</span>
  BackHandler<span class="token punctuation">,</span>
  PermissionsAndroid<span class="token punctuation">,</span>
  Vibration<span class="token punctuation">,</span>
  ToastAndroid<span class="token punctuation">,</span>
  Keyboard<span class="token punctuation">,</span>
  TextInput<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useBackHandler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@react-native-community/hooks&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// const { width, height, scale, fontScale } = useWindowDimensions();</span>
  <span class="token comment">// console.log(\`width=\${width}, height=\${height}\`);</span>
  <span class="token comment">// console.log(\`scale=\${scale}, fontScale=\${fontScale}\`);</span>

  <span class="token function">useBackHandler</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> subcription <span class="token operator">=</span> Dimensions<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
      <span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token parameter">window<span class="token punctuation">,</span> screen</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>screen<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>

    <span class="token comment">// BackHandler.addEventListener(&#39;hardwareBackPress&#39;, backForAndroid)</span>

    <span class="token keyword">const</span> showSubscription <span class="token operator">=</span> Keyboard<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span>
      <span class="token string">&#39;keyboardDidShow&#39;</span><span class="token punctuation">,</span>
      onKeyboardShow
    <span class="token punctuation">)</span>
    <span class="token keyword">const</span> hideSubscription <span class="token operator">=</span> Keyboard<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span>
      <span class="token string">&#39;keyboardDidHide&#39;</span><span class="token punctuation">,</span>
      onKeyboardHide
    <span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      subcription<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      showSubscription<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      hideSubscription<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token comment">// BackHandler.removeEventListener(&#39;hardwareBackPress&#39;, backForAndroid);</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onKeyboardShow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;键盘出现&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onKeyboardHide</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;键盘隐藏&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// const backForAndroid = () =&gt; {</span>
  <span class="token comment">//     return false;</span>
  <span class="token comment">// }</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onPress</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// alert和console你不知道的调试小技巧</span>
    <span class="token comment">// alert(&#39;这是一条提示信息&#39;);</span>
    <span class="token comment">// alert(123);</span>
    <span class="token comment">// alert(false);</span>

    <span class="token comment">// const buttons = [</span>
    <span class="token comment">//     {text: &#39;取消&#39;, onPress: () =&gt; console.log(&#39;取消&#39;)},</span>
    <span class="token comment">//     {text: &#39;确定&#39;, onPress: () =&gt; console.log(&#39;确定&#39;)},</span>
    <span class="token comment">// ];</span>
    <span class="token comment">// Alert.alert(&#39;这是标题&#39;, &#39;这是一条提示信息&#39;, buttons);</span>

    <span class="token comment">// console.log(&#39;这是普通的日志输出&#39;);</span>
    <span class="token comment">// console.info(&#39;信息日志输出&#39;);</span>
    <span class="token comment">// console.debug(&#39;调试日志输出&#39;);</span>
    <span class="token comment">// console.warn(&#39;警告日志输出&#39;);</span>
    <span class="token comment">// console.error(&#39;错误日志输出&#39;);</span>

    <span class="token comment">// console.log(&#39;我是个人开发者%s，我学习RN%d年半了&#39;, &#39;张三&#39;, 2);</span>
    <span class="token comment">// const obj = {name: &#39;张三&#39;, age: 12};</span>
    <span class="token comment">// console.log(&#39;我是一个对象:%o&#39;, obj);</span>

    <span class="token comment">// console.log(&#39;%c这行日志红色文字，字号大&#39;, &#39;color:red; font-size:x-large&#39;);</span>
    <span class="token comment">// console.log(&#39;%c这行日志蓝色文字，字号中&#39;, &#39;color:blue; font-size:x-medium&#39;);</span>
    <span class="token comment">// console.log(&#39;%c这行日志绿色文字，字号小&#39;, &#39;color:green; font-size:x-small&#39;);</span>

    <span class="token comment">// const viewLayout = (</span>
    <span class="token comment">//     &lt;View style={{ flexDirection: &#39;column&#39; }}&gt;</span>
    <span class="token comment">//         &lt;Text style={{ fontSize: 20, color: &#39;red&#39; }} &gt;</span>
    <span class="token comment">//             文字显示</span>
    <span class="token comment">//         &lt;/Text&gt;</span>
    <span class="token comment">//     &lt;/View&gt;</span>
    <span class="token comment">// );</span>
    <span class="token comment">// console.log(viewLayout);</span>

    <span class="token comment">// const users = [</span>
    <span class="token comment">//     {name: &#39;张三&#39;, age: 12, hobby: &#39;唱歌&#39;},</span>
    <span class="token comment">//     {name: &#39;李四&#39;, age: 15, hobby: &#39;跳舞&#39;},</span>
    <span class="token comment">//     {name: &#39;王武&#39;, age: 18, hobby: &#39;打篮球&#39;},</span>
    <span class="token comment">// ];</span>
    <span class="token comment">// console.table(users);</span>

    <span class="token comment">// console.group();</span>
    <span class="token comment">// console.log(&#39;第1行日志&#39;);</span>
    <span class="token comment">// console.log(&#39;第2行日志&#39;);</span>
    <span class="token comment">// console.log(&#39;第3行日志&#39;);</span>
    <span class="token comment">//     console.group();</span>
    <span class="token comment">//     console.log(&#39;二级分组第1行日志&#39;);</span>
    <span class="token comment">//     console.log(&#39;二级分组第2行日志&#39;);</span>
    <span class="token comment">//     console.log(&#39;二级分组第3行日志&#39;);</span>
    <span class="token comment">//     console.groupEnd();</span>
    <span class="token comment">// console.groupEnd();</span>

    <span class="token comment">// Dimension 和 useWindowDimension 获取屏幕信息</span>
    <span class="token comment">// const { width, height, scale, fontScale } = Dimensions.get(&#39;window&#39;);</span>
    <span class="token comment">// console.log(\`width=\${width}, height=\${height}\`);</span>

    <span class="token comment">// Platform获取平台属性</span>
    <span class="token comment">// console.log(Platform.OS);</span>
    <span class="token comment">// console.log(Platform.Version);</span>
    <span class="token comment">// console.log(Platform.constants);</span>
    <span class="token comment">// console.log(Platform.isPad);</span>
    <span class="token comment">// console.log(Platform.isTV);</span>
    <span class="token comment">// const style = Platform.select({</span>
    <span class="token comment">//     android: {</span>
    <span class="token comment">//         marginTop: 20,</span>
    <span class="token comment">//     },</span>
    <span class="token comment">//     ios: {</span>
    <span class="token comment">//         marginTop: 0,</span>
    <span class="token comment">//     },</span>
    <span class="token comment">//     default: {</span>
    <span class="token comment">//         marginTop: 10,</span>
    <span class="token comment">//     },</span>
    <span class="token comment">// });</span>
    <span class="token comment">// console.log(style);</span>

    <span class="token comment">// StyleSheet构建灵活样式表</span>

    <span class="token comment">// const s1 = {</span>
    <span class="token comment">//     fontSize: 18,</span>
    <span class="token comment">// };</span>
    <span class="token comment">// const s2 = {</span>
    <span class="token comment">//     fontSize: 20,</span>
    <span class="token comment">//     color: &#39;red&#39;,</span>
    <span class="token comment">// };</span>
    <span class="token comment">// const composeStyle = StyleSheet.compose(s1, s2);</span>
    <span class="token comment">// console.log(composeStyle);</span>

    <span class="token comment">// const flattenStyle = StyleSheet.flatten([s1, s2]);</span>
    <span class="token comment">// console.log(flattenStyle);</span>

    <span class="token comment">// console.log(StyleSheet.absoluteFill);</span>

    <span class="token comment">// console.log(StyleSheet.hairlineWidth);</span>
    <span class="token comment">// console.log(1 / Dimensions.get(&#39;screen&#39;).scale);</span>

    <span class="token comment">// Linking一个api节省50行代码</span>
    <span class="token comment">// if (Linking.canOpenURL(&#39;https://www.baidu.com/&#39;)) {</span>
    <span class="token comment">//     Linking.openURL(&#39;https://www.baidu.com/&#39;);</span>
    <span class="token comment">// }</span>
    <span class="token comment">// Linking.openURL(&#39;geo:37.2122, 12.222&#39;);</span>
    <span class="token comment">// Linking.openURL(&#39;tel:10086&#39;);</span>
    <span class="token comment">// Linking.openURL(&#39;smsto:10086&#39;);</span>
    <span class="token comment">// Linking.openURL(&#39;mailto:10086@qq.com&#39;);</span>
    <span class="token comment">// Linking.openURL(&#39;dagongjue://demo?name=李四&#39;);</span>
    <span class="token comment">// Linking.openSettings();</span>

    <span class="token comment">// if (Platform.OS === &#39;android&#39;) {</span>
    <span class="token comment">//     Linking.sendIntent(&#39;com.dagongjue.demo.test&#39;, [{key: &#39;name&#39;, value: &#39;王武&#39;}]);</span>
    <span class="token comment">// }</span>
    <span class="token comment">// console.log(Linking.getInitialURL());</span>

    <span class="token comment">// PixelRatio像素比例工具</span>
    <span class="token comment">// console.log(PixelRatio.get());</span>
    <span class="token comment">// console.log(PixelRatio.getFontScale());</span>
    <span class="token comment">// console.log(</span>
    <span class="token comment">//     PixelRatio.getPixelSizeForLayoutSize(200)</span>
    <span class="token comment">// );</span>

    <span class="token comment">// BackHandler安卓返回键适配</span>
    <span class="token comment">// BackHandler.exitApp();</span>

    <span class="token comment">// PermissionsAndroid轻松解决权限问题</span>
    <span class="token comment">// const needPermission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;</span>
    <span class="token comment">// PermissionsAndroid.check(</span>
    <span class="token comment">//     needPermission</span>
    <span class="token comment">// ).then(result =&gt; {</span>
    <span class="token comment">//     if (!result) {</span>
    <span class="token comment">//         PermissionsAndroid.request(needPermission).then(status =&gt; {</span>
    <span class="token comment">//             console.log(status);</span>
    <span class="token comment">//             if (status === &#39;granted&#39;) {</span>
    <span class="token comment">//                 //获得</span>
    <span class="token comment">//             } else if (status === &#39;denied&#39;) {</span>
    <span class="token comment">//                 //拒绝</span>
    <span class="token comment">//             }</span>
    <span class="token comment">//         });</span>
    <span class="token comment">//     }</span>
    <span class="token comment">// });</span>

    <span class="token comment">// PermissionsAndroid.requestMultiple([</span>
    <span class="token comment">//     PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,</span>
    <span class="token comment">//     PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,</span>
    <span class="token comment">// ]);</span>

    <span class="token comment">// Vibration简单好用的震动交互</span>

    <span class="token comment">// Vibration.vibrate();</span>
    <span class="token comment">// Vibration.vibrate(1000);//just android</span>
    <span class="token comment">// Vibration.cancel();</span>
    <span class="token comment">// android</span>
    <span class="token comment">// Vibration.vibrate([100, 500, 200, 500]);</span>
    <span class="token comment">// IOS</span>
    <span class="token comment">// Vibration.vibrate([100, 200, 300, 400]);</span>
    <span class="token comment">// Vibration.vibrate([100, 200, 300, 400], true);</span>

    <span class="token comment">// ToastAndroid安卓平台的提示</span>
    <span class="token comment">// ToastAndroid.show(&#39;这是一个提示&#39;, ToastAndroid.SHORT);</span>
    <span class="token comment">// ToastAndroid.show(&#39;这是一个提示&#39;, ToastAndroid.LONG);</span>
    <span class="token comment">// ToastAndroid.showWithGravity(</span>
    <span class="token comment">//     &#39;这是一个提示&#39;,</span>
    <span class="token comment">//     ToastAndroid.LONG,</span>
    <span class="token comment">//     ToastAndroid.TOP</span>
    <span class="token comment">// );</span>
    <span class="token comment">// ToastAndroid.showWithGravity(</span>
    <span class="token comment">//     &#39;这是一个提示&#39;,</span>
    <span class="token comment">//     ToastAndroid.LONG,</span>
    <span class="token comment">//     ToastAndroid.TOP,</span>
    <span class="token comment">//     100, 200,</span>
    <span class="token comment">// );</span>

    <span class="token comment">// Transform矩阵变换的伪3D效果</span>

    <span class="token comment">// Keyboard键盘操作有神器</span>

    Keyboard<span class="token punctuation">.</span><span class="token function">dismiss</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>root<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Button title<span class="token operator">=</span><span class="token string">&#39;按钮&#39;</span> onPress<span class="token operator">=</span><span class="token punctuation">{</span>onPress<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

      <span class="token punctuation">{</span><span class="token comment">/* &lt;View style={styles.view}&gt;
                &lt;View style={styles.subView} /&gt;
                &lt;View style={styles.subView} /&gt;
                &lt;View style={styles.subView} /&gt;
                &lt;View style={styles.subView} /&gt;
                &lt;View style={styles.subView} /&gt;
                &lt;View style={styles.subView} /&gt;
                &lt;View style={styles.subView} /&gt;
                &lt;View style={styles.subView} /&gt;
                &lt;View style={styles.subView} /&gt;
                &lt;View style={styles.subView} /&gt;
            &lt;/View&gt; */</span><span class="token punctuation">}</span>

      <span class="token operator">&lt;</span>View
        style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
            <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#3050ff&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
            <span class="token literal-property property">marginLeft</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token comment">// {translateX: 200}</span>
              <span class="token comment">// {translateY: 150}</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token number">1.5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token comment">// {scaleX: 1.5},</span>
              <span class="token comment">// {scaleY: 1.5}</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">rotateX</span><span class="token operator">:</span> <span class="token string">&#39;45deg&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token comment">// {rotateY: &#39;45deg&#39;},</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">rotateZ</span><span class="token operator">:</span> <span class="token string">&#39;45deg&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token comment">// {rotate: &#39;45deg&#39;},</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>TextInput
        style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">56</span><span class="token punctuation">,</span>
          <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#E0E0E0&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>Platform<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">android</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">paddingTop</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">ios</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">paddingTop</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">paddingTop</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">view</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">subView</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> PixelRatio<span class="token punctuation">.</span><span class="token function">roundToNearestPixel</span><span class="token punctuation">(</span><span class="token number">32.1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rn-动画" tabindex="-1"><a class="header-anchor" href="#rn-动画" aria-hidden="true">#</a> RN 动画</h2><h3 id="animated-view" tabindex="-1"><a class="header-anchor" href="#animated-view" aria-hidden="true">#</a> Animated.View</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StyleSheet<span class="token punctuation">,</span> View<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Animated <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Animated.Value</span>
  <span class="token keyword">const</span> marginLeft <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Animated<span class="token punctuation">.</span>Value</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>current

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>root<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Button
        title<span class="token operator">=</span><span class="token string">&#39;按钮&#39;</span>
        onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          Animated<span class="token punctuation">.</span><span class="token function">timing</span><span class="token punctuation">(</span>marginLeft<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">toValue</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
            <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
            <span class="token literal-property property">useNativeDriver</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>Animated<span class="token punctuation">.</span>View style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>styles<span class="token punctuation">.</span>view<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">marginLeft</span><span class="token operator">:</span> marginLeft <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//  支持动画组件</span>
<span class="token comment">// Animated: View, Text, Image, ScrollView, FlatList, SectionList</span>
<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;white&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">view</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#3050ff&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动画四大类型" tabindex="-1"><a class="header-anchor" href="#动画四大类型" aria-hidden="true">#</a> 动画四大类型</h3><ul><li>平移，旋转，缩放，透明度变化（渐变）</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StyleSheet<span class="token punctuation">,</span> View<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Animated <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// const marginLeft = useRef(new Animated.Value(0)).current;</span>
  <span class="token comment">// const rotate = useRef(new Animated.Value(0)).current;</span>
  <span class="token comment">// const scale = useRef(new Animated.Value(1)).current;</span>
  <span class="token keyword">const</span> opacity <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Animated<span class="token punctuation">.</span>Value</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>current

  <span class="token comment">// const rotateValue = rotate.interpolate({</span>
  <span class="token comment">//     inputRange: [0, 45],</span>
  <span class="token comment">//     outputRange: [&#39;0deg&#39;, &#39;45deg&#39;],</span>
  <span class="token comment">// })</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>root<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Button
        title<span class="token operator">=</span><span class="token string">&#39;按钮&#39;</span>
        onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          Animated<span class="token punctuation">.</span><span class="token function">timing</span><span class="token punctuation">(</span>opacity<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">toValue</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
            <span class="token literal-property property">useNativeDriver</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>Animated<span class="token punctuation">.</span>View
        style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          styles<span class="token punctuation">.</span>view<span class="token punctuation">,</span>
          <span class="token comment">// {marginLeft: marginLeft}</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token comment">// { rotate: rotateValue },</span>
              <span class="token comment">// { scale: scale }</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> opacity <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;white&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">view</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#3050ff&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    <span class="token literal-property property">marginLeft</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="平移多种属性支持" tabindex="-1"><a class="header-anchor" href="#平移多种属性支持" aria-hidden="true">#</a> 平移多种属性支持</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StyleSheet<span class="token punctuation">,</span> View<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Animated <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> marginLeft <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Animated<span class="token punctuation">.</span>Value</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>current

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>root<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Button
        title<span class="token operator">=</span><span class="token string">&#39;按钮&#39;</span>
        onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          Animated<span class="token punctuation">.</span><span class="token function">timing</span><span class="token punctuation">(</span>marginLeft<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">toValue</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
            <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
            <span class="token literal-property property">useNativeDriver</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>Animated<span class="token punctuation">.</span>View
        style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          styles<span class="token punctuation">.</span>view<span class="token punctuation">,</span>
          <span class="token comment">// {marginTop: marginLeft},</span>
          <span class="token comment">// {transform: [{ translateX: marginLeft }]}</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;absolute&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">top</span><span class="token operator">:</span> marginLeft<span class="token punctuation">,</span>
            <span class="token literal-property property">left</span><span class="token operator">:</span> marginLeft<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;white&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">view</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#3050ff&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三大动画函数" tabindex="-1"><a class="header-anchor" href="#三大动画函数" aria-hidden="true">#</a> 三大动画函数</h3><ul><li>Animated.decay() : 以一个初始速度开始并且逐渐减慢停止。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StyleSheet<span class="token punctuation">,</span> View<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Animated <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> marginLeft <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Animated<span class="token punctuation">.</span>Value</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>current

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>root<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Button
        title<span class="token operator">=</span><span class="token string">&#39;按钮&#39;</span>
        onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// Animated.timing(marginLeft, {</span>
          <span class="token comment">//     toValue: 300,</span>
          <span class="token comment">//     duration: 500,</span>
          <span class="token comment">//     useNativeDriver: false,</span>
          <span class="token comment">// }).start();</span>

          Animated<span class="token punctuation">.</span><span class="token function">decay</span><span class="token punctuation">(</span>marginLeft<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">velocity</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">deceleration</span><span class="token operator">:</span> <span class="token number">0.99</span><span class="token punctuation">,</span>
            <span class="token literal-property property">useNativeDriver</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>Animated<span class="token punctuation">.</span>View style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>styles<span class="token punctuation">.</span>view<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">marginLeft</span><span class="token operator">:</span> marginLeft <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;white&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">view</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#3050ff&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Animated.spring() : 产生一个基于 Rebound 和 Origami 实现的 Spring 动画。它会在 toValue 值更新的同时跟踪当前的速度状态，以确保动画连贯,默认的弹簧阻尼值为 4，可以通过设置 friction 属性来改变阻尼值，也可以通过设置 tension 属性来改变张力值。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StyleSheet<span class="token punctuation">,</span> View<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Animated <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> marginLeft <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Animated<span class="token punctuation">.</span>Value</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>current

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>root<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Button
        title<span class="token operator">=</span><span class="token string">&#39;按钮&#39;</span>
        onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          Animated<span class="token punctuation">.</span><span class="token function">spring</span><span class="token punctuation">(</span>marginLeft<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">toValue</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
            <span class="token literal-property property">useNativeDriver</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

            <span class="token comment">// 第一组配置</span>
            <span class="token literal-property property">bounciness</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
            <span class="token literal-property property">speed</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>

            <span class="token comment">// 第二组配置</span>
            <span class="token comment">// tension: 40,</span>
            <span class="token comment">// friction: 7,</span>

            <span class="token comment">// 第三组配置</span>
            <span class="token comment">// stiffness: 100,</span>
            <span class="token comment">// damping: 10,</span>
            <span class="token comment">// mass: 1,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>Animated<span class="token punctuation">.</span>View style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>styles<span class="token punctuation">.</span>view<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">marginLeft</span><span class="token operator">:</span> marginLeft <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;white&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">view</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#3050ff&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Animated.timing() : 该动画会在给定的时间内逐步改变一个值。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StyleSheet<span class="token punctuation">,</span> View<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Animated<span class="token punctuation">,</span> Easing <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> marginLeft <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Animated<span class="token punctuation">.</span>Value</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>current

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>root<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Button
        title<span class="token operator">=</span><span class="token string">&#39;按钮&#39;</span>
        onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          Animated<span class="token punctuation">.</span><span class="token function">timing</span><span class="token punctuation">(</span>marginLeft<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">toValue</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
            <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
            <span class="token comment">// easing: Easing.back(3),</span>
            <span class="token comment">// easing: Easing.ease,</span>
            <span class="token comment">// easing: Easing.bounce,</span>
            <span class="token comment">// easing: Easing.elastic(3),</span>

            <span class="token comment">// easing: Easing.linear,</span>
            <span class="token comment">// easing: Easing.quad,</span>
            <span class="token comment">// easing: Easing.cubic,</span>

            <span class="token comment">// easing: Easing.bezier(0.7, 0.2, 0.42, 0.82),</span>
            <span class="token comment">// easing: Easing.circle,</span>
            <span class="token comment">// easing: Easing.sin,</span>
            <span class="token comment">// easing: Easing.exp,</span>

            <span class="token comment">// easing: Easing.in(Easing.bounce),</span>
            <span class="token comment">// easing: Easing.out(Easing.exp),</span>
            <span class="token literal-property property">easing</span><span class="token operator">:</span> Easing<span class="token punctuation">.</span><span class="token function">inOut</span><span class="token punctuation">(</span>Easing<span class="token punctuation">.</span><span class="token function">elastic</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">useNativeDriver</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>Animated<span class="token punctuation">.</span>View style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>styles<span class="token punctuation">.</span>view<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">marginLeft</span><span class="token operator">:</span> marginLeft <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;white&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">view</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#3050ff&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="矢量动画" tabindex="-1"><a class="header-anchor" href="#矢量动画" aria-hidden="true">#</a> 矢量动画</h3><ul><li>Animated.ValueXY: 用于跟踪 2D 值的变化，除了可以像使用 Animated.Value 一样使用它，还可以直接通过设置 x 和 y 属性来进行操作。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StyleSheet<span class="token punctuation">,</span> View<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Animated <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> vector <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Animated<span class="token punctuation">.</span>ValueXY</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>current

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>root<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Button
        title<span class="token operator">=</span><span class="token string">&#39;按钮&#39;</span>
        onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          Animated<span class="token punctuation">.</span><span class="token function">timing</span><span class="token punctuation">(</span>vector<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">toValue</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
            <span class="token literal-property property">useNativeDriver</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>Animated<span class="token punctuation">.</span>View
        style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>styles<span class="token punctuation">.</span>view<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">marginLeft</span><span class="token operator">:</span> vector<span class="token punctuation">.</span>x<span class="token punctuation">,</span> <span class="token literal-property property">marginTop</span><span class="token operator">:</span> vector<span class="token punctuation">.</span>y <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;white&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">view</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#3050ff&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组合动画" tabindex="-1"><a class="header-anchor" href="#组合动画" aria-hidden="true">#</a> 组合动画</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StyleSheet<span class="token punctuation">,</span> View<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Animated <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> scale <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Animated<span class="token punctuation">.</span>Value</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>current
  <span class="token keyword">const</span> marginLeft <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Animated<span class="token punctuation">.</span>Value</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>current
  <span class="token keyword">const</span> marginTop <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Animated<span class="token punctuation">.</span>Value</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>current

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>root<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Button
        title<span class="token operator">=</span><span class="token string">&#39;按钮&#39;</span>
        onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> moveX <span class="token operator">=</span> Animated<span class="token punctuation">.</span><span class="token function">timing</span><span class="token punctuation">(</span>marginLeft<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">toValue</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
            <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
            <span class="token literal-property property">useNativeDriver</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token keyword">const</span> moveY <span class="token operator">=</span> Animated<span class="token punctuation">.</span><span class="token function">timing</span><span class="token punctuation">(</span>marginTop<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">toValue</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
            <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
            <span class="token literal-property property">useNativeDriver</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token keyword">const</span> scaleAnim <span class="token operator">=</span> Animated<span class="token punctuation">.</span><span class="token function">timing</span><span class="token punctuation">(</span>scale<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">toValue</span><span class="token operator">:</span> <span class="token number">1.5</span><span class="token punctuation">,</span>
            <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
            <span class="token literal-property property">useNativeDriver</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>

          <span class="token comment">// Animated.parallel([moveX, moveY, scaleAnim]).start();</span>
          <span class="token comment">// Animated.sequence([moveX, moveY, scaleAnim]).start();</span>
          <span class="token comment">// Animated.stagger(1500, [moveX, moveY, scaleAnim]).start();</span>
          Animated<span class="token punctuation">.</span><span class="token function">sequence</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            moveX<span class="token punctuation">,</span>
            Animated<span class="token punctuation">.</span><span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            moveY<span class="token punctuation">,</span>
            Animated<span class="token punctuation">.</span><span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            scaleAnim<span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>Animated<span class="token punctuation">.</span>View
        style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          styles<span class="token punctuation">.</span>view<span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">scale</span><span class="token operator">:</span> scale <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">translateX</span><span class="token operator">:</span> marginLeft <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">translateY</span><span class="token operator">:</span> marginTop <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;white&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">view</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#3050ff&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="跟随动画难题" tabindex="-1"><a class="header-anchor" href="#跟随动画难题" aria-hidden="true">#</a> 跟随动画难题</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StyleSheet<span class="token punctuation">,</span> View<span class="token punctuation">,</span> ScrollView<span class="token punctuation">,</span> Animated <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native&#39;</span>

<span class="token keyword">const</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yellow&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;orange&#39;</span><span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// const [scrollY, setScrollY] = useState(0);</span>
  <span class="token keyword">const</span> scrollY <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Animated<span class="token punctuation">.</span>Value</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>current

  <span class="token keyword">const</span> <span class="token function-variable function">viewList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>array<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>View
            key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span>
            style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
              <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
              <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
              <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> colors<span class="token punctuation">[</span>index <span class="token operator">%</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>root<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>leftLayout<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Animated<span class="token punctuation">.</span>View
          style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
            <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token comment">// {translateY: -scrollY}</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">translateY</span><span class="token operator">:</span> Animated<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> scrollY<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&gt;</span>
          <span class="token punctuation">{</span><span class="token function">viewList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Animated<span class="token punctuation">.</span>View<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>rightLayout<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Animated<span class="token punctuation">.</span>ScrollView
          showsVerticalScrollIndicator<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>
          <span class="token comment">// onScroll={(event) =&gt; {</span>
          <span class="token comment">//     setScrollY(event.nativeEvent.contentOffset.y);</span>
          <span class="token comment">// }}</span>
          onScroll<span class="token operator">=</span><span class="token punctuation">{</span>Animated<span class="token punctuation">.</span><span class="token function">event</span><span class="token punctuation">(</span>
            <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">nativeEvent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">contentOffset</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">y</span><span class="token operator">:</span> scrollY <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">useNativeDriver</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&gt;</span>
          <span class="token punctuation">{</span><span class="token function">viewList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Animated<span class="token punctuation">.</span>ScrollView<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 注意： 要使用 const scrollY = useRef(new Animated.Value(0)).current;</span>
<span class="token comment">// Animated.event 会桥接到原生的动画</span>
<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">flexDirection</span><span class="token operator">:</span> <span class="token string">&#39;row&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">leftLayout</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#00FF0030&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">flexDirection</span><span class="token operator">:</span> <span class="token string">&#39;column&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rightLayout</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#0000FF30&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">marginLeft</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优化-modal-动画" tabindex="-1"><a class="header-anchor" href="#优化-modal-动画" aria-hidden="true">#</a> 优化 Modal 动画</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  StyleSheet<span class="token punctuation">,</span>
  View<span class="token punctuation">,</span>
  Modal<span class="token punctuation">,</span>
  Text<span class="token punctuation">,</span>
  Button<span class="token punctuation">,</span>
  SectionList<span class="token punctuation">,</span>
  TouchableOpacity<span class="token punctuation">,</span>
  Image<span class="token punctuation">,</span>
  Animated<span class="token punctuation">,</span>
  Dimensions<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native&#39;</span>
<span class="token keyword">import</span> icon_close_modal <span class="token keyword">from</span> <span class="token string">&#39;../assets/images/icon_close_modal.png&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> SectionData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../constants/Data&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token constant">WINDOW_HEIGHT</span> <span class="token punctuation">}</span> <span class="token operator">=</span> Dimensions<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;window&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> marginTop <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Animated<span class="token punctuation">.</span>Value</span><span class="token punctuation">(</span><span class="token constant">WINDOW_HEIGHT</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>current

  <span class="token keyword">const</span> <span class="token function-variable function">showModal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    Animated<span class="token punctuation">.</span><span class="token function">timing</span><span class="token punctuation">(</span>marginTop<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">toValue</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
      <span class="token literal-property property">useNativeDriver</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token function-variable function">hideModal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Animated<span class="token punctuation">.</span><span class="token function">timing</span><span class="token punctuation">(</span>marginTop<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">toValue</span><span class="token operator">:</span> <span class="token constant">WINDOW_HEIGHT</span><span class="token punctuation">,</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
      <span class="token literal-property property">useNativeDriver</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 回调函数</span>
      <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token function-variable function">renderItem</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> section <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>txt<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> ListHeader <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>header<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>extraTxt<span class="token punctuation">}</span><span class="token operator">&gt;</span>列表头部<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>TouchableOpacity style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>closeButton<span class="token punctuation">}</span> onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">hideModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Image style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>closeImg<span class="token punctuation">}</span> source<span class="token operator">=</span><span class="token punctuation">{</span>icon_close_modal<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>TouchableOpacity<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>

  <span class="token keyword">const</span> ListFooter <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>styles<span class="token punctuation">.</span>header<span class="token punctuation">,</span> styles<span class="token punctuation">.</span>footer<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>extraTxt<span class="token punctuation">}</span><span class="token operator">&gt;</span>列表尾部<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">renderSectionHeader</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> section <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>sectionHeaderTxt<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>section<span class="token punctuation">.</span>type<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>root<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Button title<span class="token operator">=</span><span class="token string">&#39;按钮&#39;</span> onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>Modal
        visible<span class="token operator">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span>
        onRequestClose<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">hideModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        transparent<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>
        statusBarTranslucent<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>
        animationType<span class="token operator">=</span><span class="token string">&#39;fade&#39;</span>
      <span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Animated<span class="token punctuation">.</span>View
            style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
              styles<span class="token punctuation">.</span>contentView<span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">marginTop</span><span class="token operator">:</span> marginTop<span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">}</span>
          <span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>SectionList
              style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>sectionList<span class="token punctuation">}</span>
              contentContainerStyle<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>containerStyle<span class="token punctuation">}</span>
              sections<span class="token operator">=</span><span class="token punctuation">{</span>SectionData<span class="token punctuation">}</span>
              renderItem<span class="token operator">=</span><span class="token punctuation">{</span>renderItem<span class="token punctuation">}</span>
              keyExtractor<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>item<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span>
              showsVerticalScrollIndicator<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>
              ListHeaderComponent<span class="token operator">=</span><span class="token punctuation">{</span>ListHeader<span class="token punctuation">}</span>
              ListFooterComponent<span class="token operator">=</span><span class="token punctuation">{</span>ListFooter<span class="token punctuation">}</span>
              renderSectionHeader<span class="token operator">=</span><span class="token punctuation">{</span>renderSectionHeader<span class="token punctuation">}</span>
              ItemSeparatorComponent<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>separator<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span>
              stickySectionHeadersEnabled<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>
            <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Animated<span class="token punctuation">.</span>View<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Modal<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">paddingHorizontal</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#00000060&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">contentView</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">paddingTop</span><span class="token operator">:</span> <span class="token string">&#39;30%&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sectionList</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;80%&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">txt</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">56</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#333333&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">textAlignVertical</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">paddingLeft</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">containerStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#F5F5F5&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">48</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;white&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#ff000030&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">extraTxt</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#666666&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">textAlignVertical</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sectionHeaderTxt</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#DDDDDD&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">textAlignVertical</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">paddingLeft</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#333333&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token string">&#39;bold&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">separator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#D0D0D0&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">closeButton</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;absolute&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">closeImg</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="layoutanimation" tabindex="-1"><a class="header-anchor" href="#layoutanimation" aria-hidden="true">#</a> LayoutAnimation</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js 加入代码 安卓启动动画</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>Platform<span class="token punctuation">.</span><span class="token constant">OS</span> <span class="token operator">===</span> <span class="token string">&#39;android&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>UIManager<span class="token punctuation">.</span>setLayoutAnimationEnabledExperimental<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;enable ...&#39;</span><span class="token punctuation">)</span>
    UIManager<span class="token punctuation">.</span><span class="token function">setLayoutAnimationEnabledExperimental</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 动画文件</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  StyleSheet<span class="token punctuation">,</span>
  View<span class="token punctuation">,</span>
  Button<span class="token punctuation">,</span>
  LayoutAnimation<span class="token punctuation">,</span>
  Image<span class="token punctuation">,</span>
  Text<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native&#39;</span>
<span class="token keyword">import</span> icon_avatar <span class="token keyword">from</span> <span class="token string">&#39;../assets/images/default_avatar.png&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showView<span class="token punctuation">,</span> setShowView<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>showRight<span class="token punctuation">,</span> setShowRight<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>root<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Button
        title<span class="token operator">=</span><span class="token string">&#39;按钮&#39;</span>
        onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// LayoutAnimation.configureNext(</span>
          <span class="token comment">//     // LayoutAnimation.Presets.linear</span>
          <span class="token comment">//     // LayoutAnimation.Presets.spring</span>
          <span class="token comment">//     LayoutAnimation.Presets.easeInEaseOut,</span>
          <span class="token comment">//     () =&gt; {</span>
          <span class="token comment">//         console.log(&#39;动画结束&#39;);</span>
          <span class="token comment">//     },</span>
          <span class="token comment">//     () =&gt; {</span>
          <span class="token comment">//         console.log(&#39;动画异常&#39;);</span>
          <span class="token comment">//     }</span>
          <span class="token comment">// );</span>
          <span class="token comment">// setShowView(true);</span>

          <span class="token comment">// LayoutAnimation.configureNext(</span>
          <span class="token comment">//     LayoutAnimation.Presets.spring</span>
          <span class="token comment">// );</span>
          <span class="token comment">// setShowRight(true);</span>

          <span class="token comment">// LayoutAnimation.linear();</span>
          LayoutAnimation<span class="token punctuation">.</span><span class="token function">spring</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token comment">// LayoutAnimation.easeInEaseOut();</span>
          <span class="token function">setShowRight</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>

      <span class="token punctuation">{</span><span class="token comment">/* {showView &amp;&amp; &lt;View style={styles.view} /&gt;} */</span><span class="token punctuation">}</span>

      <span class="token operator">&lt;</span>View
        style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          styles<span class="token punctuation">.</span>view<span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">flexDirection</span><span class="token operator">:</span> showRight <span class="token operator">?</span> <span class="token string">&#39;row-reverse&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;row&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span>
      <span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Image style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>img<span class="token punctuation">}</span> source<span class="token operator">=</span><span class="token punctuation">{</span>icon_avatar<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>txt<span class="token punctuation">}</span><span class="token operator">&gt;</span>这是一行自我介绍的文本<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;white&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">view</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#F0F0F0&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">flexDirection</span><span class="token operator">:</span> <span class="token string">&#39;row&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">paddingHorizontal</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">img</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">64</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">64</span><span class="token punctuation">,</span>
    <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">txt</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#303030&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token string">&#39;bold&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">marginHorizontal</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动画练习-动画菜单" tabindex="-1"><a class="header-anchor" href="#动画练习-动画菜单" aria-hidden="true">#</a> 动画练习(动画菜单)</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef<span class="token punctuation">,</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  StyleSheet<span class="token punctuation">,</span>
  View<span class="token punctuation">,</span>
  Image<span class="token punctuation">,</span>
  Text<span class="token punctuation">,</span>
  Animated<span class="token punctuation">,</span>
  Easing<span class="token punctuation">,</span>
  TouchableOpacity<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native&#39;</span>

<span class="token keyword">import</span> icon_gift <span class="token keyword">from</span> <span class="token string">&#39;../assets/images/icon_gift.png&#39;</span>
<span class="token keyword">import</span> icon_mine <span class="token keyword">from</span> <span class="token string">&#39;../assets/images/icon_mine.png&#39;</span>
<span class="token keyword">import</span> icon_home <span class="token keyword">from</span> <span class="token string">&#39;../assets/images/icon_home.png&#39;</span>
<span class="token keyword">import</span> icon_show <span class="token keyword">from</span> <span class="token string">&#39;../assets/images/icon_show.png&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> width1 <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Animated<span class="token punctuation">.</span>Value</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>current
  <span class="token keyword">const</span> width2 <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Animated<span class="token punctuation">.</span>Value</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>current
  <span class="token keyword">const</span> width3 <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Animated<span class="token punctuation">.</span>Value</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>current
  <span class="token keyword">const</span> width4 <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Animated<span class="token punctuation">.</span>Value</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>current

  <span class="token keyword">const</span> <span class="token punctuation">[</span>index<span class="token punctuation">,</span> setIndex<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">anim1</span><span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token function">anim2</span><span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">anim3</span><span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token function">anim4</span><span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">anim1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">isOpen</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Animated<span class="token punctuation">.</span><span class="token function">timing</span><span class="token punctuation">(</span>width1<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">toValue</span><span class="token operator">:</span> isOpen <span class="token operator">?</span> <span class="token number">200</span> <span class="token operator">:</span> <span class="token number">64</span><span class="token punctuation">,</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> isOpen <span class="token operator">?</span> <span class="token number">500</span> <span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
      <span class="token literal-property property">easing</span><span class="token operator">:</span> isOpen <span class="token operator">?</span> Easing<span class="token punctuation">.</span><span class="token function">elastic</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">:</span> Easing<span class="token punctuation">.</span>ease<span class="token punctuation">,</span>
      <span class="token literal-property property">useNativeDriver</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token function-variable function">anim2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">isOpen</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Animated<span class="token punctuation">.</span><span class="token function">timing</span><span class="token punctuation">(</span>width2<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">toValue</span><span class="token operator">:</span> isOpen <span class="token operator">?</span> <span class="token number">200</span> <span class="token operator">:</span> <span class="token number">64</span><span class="token punctuation">,</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> isOpen <span class="token operator">?</span> <span class="token number">500</span> <span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
      <span class="token literal-property property">easing</span><span class="token operator">:</span> isOpen <span class="token operator">?</span> Easing<span class="token punctuation">.</span><span class="token function">elastic</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">:</span> Easing<span class="token punctuation">.</span>ease<span class="token punctuation">,</span>
      <span class="token literal-property property">useNativeDriver</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token function-variable function">anim3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">isOpen</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Animated<span class="token punctuation">.</span><span class="token function">timing</span><span class="token punctuation">(</span>width3<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">toValue</span><span class="token operator">:</span> isOpen <span class="token operator">?</span> <span class="token number">200</span> <span class="token operator">:</span> <span class="token number">64</span><span class="token punctuation">,</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> isOpen <span class="token operator">?</span> <span class="token number">500</span> <span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
      <span class="token literal-property property">easing</span><span class="token operator">:</span> isOpen <span class="token operator">?</span> Easing<span class="token punctuation">.</span><span class="token function">elastic</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">:</span> Easing<span class="token punctuation">.</span>ease<span class="token punctuation">,</span>
      <span class="token literal-property property">useNativeDriver</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token function-variable function">anim4</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">isOpen</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Animated<span class="token punctuation">.</span><span class="token function">timing</span><span class="token punctuation">(</span>width4<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">toValue</span><span class="token operator">:</span> isOpen <span class="token operator">?</span> <span class="token number">200</span> <span class="token operator">:</span> <span class="token number">64</span><span class="token punctuation">,</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> isOpen <span class="token operator">?</span> <span class="token number">500</span> <span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
      <span class="token literal-property property">easing</span><span class="token operator">:</span> isOpen <span class="token operator">?</span> Easing<span class="token punctuation">.</span><span class="token function">elastic</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">:</span> Easing<span class="token punctuation">.</span>ease<span class="token punctuation">,</span>
      <span class="token literal-property property">useNativeDriver</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>root<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>TouchableOpacity
        activeOpacity<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0.8</span><span class="token punctuation">}</span>
        onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">setIndex</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Animated<span class="token punctuation">.</span>View
          style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
            styles<span class="token punctuation">.</span>view<span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> width1<span class="token punctuation">,</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> index <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0.75</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">}</span>
        <span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Image style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>img<span class="token punctuation">}</span> source<span class="token operator">=</span><span class="token punctuation">{</span>icon_home<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>txt<span class="token punctuation">}</span> numberOfLines<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span> ellipsizeMode<span class="token operator">=</span><span class="token string">&#39;clip&#39;</span><span class="token operator">&gt;</span>
            首页推荐
          <span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>dot<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Animated<span class="token punctuation">.</span>View<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>TouchableOpacity<span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>TouchableOpacity
        activeOpacity<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0.8</span><span class="token punctuation">}</span>
        onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">setIndex</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Animated<span class="token punctuation">.</span>View
          style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
            styles<span class="token punctuation">.</span>view<span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> width2<span class="token punctuation">,</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> index <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0.75</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">}</span>
        <span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Image style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>img<span class="token punctuation">}</span> source<span class="token operator">=</span><span class="token punctuation">{</span>icon_show<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>txt<span class="token punctuation">}</span> numberOfLines<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span> ellipsizeMode<span class="token operator">=</span><span class="token string">&#39;clip&#39;</span><span class="token operator">&gt;</span>
            热门直播
          <span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>dot<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Animated<span class="token punctuation">.</span>View<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>TouchableOpacity<span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>TouchableOpacity
        activeOpacity<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0.8</span><span class="token punctuation">}</span>
        onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">setIndex</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Animated<span class="token punctuation">.</span>View
          style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
            styles<span class="token punctuation">.</span>view<span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> width3<span class="token punctuation">,</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> index <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0.75</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">}</span>
        <span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Image style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>img<span class="token punctuation">}</span> source<span class="token operator">=</span><span class="token punctuation">{</span>icon_gift<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>txt<span class="token punctuation">}</span> numberOfLines<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span> ellipsizeMode<span class="token operator">=</span><span class="token string">&#39;clip&#39;</span><span class="token operator">&gt;</span>
            我的礼物
          <span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>dot<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Animated<span class="token punctuation">.</span>View<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>TouchableOpacity<span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>TouchableOpacity
        activeOpacity<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0.8</span><span class="token punctuation">}</span>
        onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">setIndex</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Animated<span class="token punctuation">.</span>View
          style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
            styles<span class="token punctuation">.</span>view<span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> width4<span class="token punctuation">,</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> index <span class="token operator">===</span> <span class="token number">3</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0.75</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">}</span>
        <span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Image style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>img<span class="token punctuation">}</span> source<span class="token operator">=</span><span class="token punctuation">{</span>icon_mine<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>txt<span class="token punctuation">}</span> numberOfLines<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span> ellipsizeMode<span class="token operator">=</span><span class="token string">&#39;clip&#39;</span><span class="token operator">&gt;</span>
            个人信息
          <span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>dot<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Animated<span class="token punctuation">.</span>View<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>TouchableOpacity<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;white&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">flexDirection</span><span class="token operator">:</span> <span class="token string">&#39;column&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">view</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    <span class="token literal-property property">flexDirection</span><span class="token operator">:</span> <span class="token string">&#39;row&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">marginVertical</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
    <span class="token literal-property property">borderTopRightRadius</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
    <span class="token literal-property property">borderBottomRightRadius</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#2030ff&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">paddingLeft</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
    <span class="token literal-property property">overflow</span><span class="token operator">:</span> <span class="token string">&#39;hidden&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">img</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tintColor</span><span class="token operator">:</span> <span class="token string">&#39;white&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">txt</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#ffffffD0&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">marginLeft</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dot</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#20f020&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">marginLeft</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
    <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="context-使用" tabindex="-1"><a class="header-anchor" href="#context-使用" aria-hidden="true">#</a> Context 使用</h2><ul><li>React.createContext： 创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值。</li></ul>`,32),m=n("div",{class:"language-tsx line-numbers-mode","data-ext":"tsx"},[n("pre",{class:"language-tsx"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createContext "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" ThemeContext "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"createContext"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"string"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'dark'"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" React"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" useState "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" View"),n("span",{class:"token punctuation"},","),s(" Button "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react-native'"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ThemeContext "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./ThemeContext'"),s(`

`),n("span",{class:"token keyword"},"import"),s(" PageView "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./PageView'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("theme"),n("span",{class:"token punctuation"},","),s(" setTheme"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'dark'"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token operator"},"<"),s("ThemeContext"),n("span",{class:"token punctuation"},"."),s("Provider value"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("theme"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s(`Button
        title`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},"'切换主题'"),s(`
        onPress`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token function"},"setTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"state"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("state "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'dark'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},"'light'"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},"'dark'"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("View style"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),s("PageView "),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("View"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("ThemeContext"),n("span",{class:"token punctuation"},"."),s("Provider"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" React "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" View "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react-native'"),s(`

`),n("span",{class:"token keyword"},"import"),s(" Header "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./Header'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token operator"},"<"),s("View"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("Header "),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("View"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" React"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" useContext "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" StyleSheet"),n("span",{class:"token punctuation"},","),s(" View"),n("span",{class:"token punctuation"},","),s(" Image"),n("span",{class:"token punctuation"},","),s(" Text "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react-native'"),s(`

`),n("span",{class:"token keyword"},"import"),s(" icon_avatar "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../assets/images/default_avatar.png'"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ThemeContext "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./ThemeContext'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 获取主题"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" theme "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useContext"),n("span",{class:"token punctuation"},"("),s("ThemeContext"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token comment"},"// 根据主题设置样式"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" styles "),n("span",{class:"token operator"},"="),s(" theme "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'dark'"),s(),n("span",{class:"token operator"},"?"),s(" darkStyles "),n("span",{class:"token operator"},":"),s(` lightStyles
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token operator"},"<"),s("View style"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("content"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("Image style"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("img"),n("span",{class:"token punctuation"},"}"),s(" source"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("icon_avatar"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("Text style"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("txt"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s("个人信息介绍"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("Text"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("View style"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("infoLayout"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),s("Text style"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("infoTxt"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s(`
          各位产品经理大家好，我是个人开发者张三，我学习`),n("span",{class:"token constant"},"RN"),s("两年半了，我喜欢安卓、"),n("span",{class:"token constant"},"RN"),s(`、Flutter。
        `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("Text"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("View"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("View"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(" darkStyles "),n("span",{class:"token operator"},"="),s(" StyleSheet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"height"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"backgroundColor"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#353535'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"flexDirection"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'column'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"alignItems"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"paddingHorizontal"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"paddingTop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"64"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"img"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"96"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"height"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"96"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"borderRadius"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"48"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"borderWidth"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"borderColor"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#ffffffE0'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"txt"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"fontSize"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'white'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"fontWeight"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bold'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"marginTop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"infoLayout"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'90%'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"padding"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"backgroundColor"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#808080'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"borderRadius"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"marginTop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"infoTxt"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"fontSize"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'white'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(" lightStyles "),n("span",{class:"token operator"},"="),s(" StyleSheet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"height"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"backgroundColor"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#fafafa'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"flexDirection"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'column'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"alignItems"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"paddingHorizontal"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"paddingTop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"64"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"img"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"96"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"height"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"96"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"borderRadius"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"48"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"borderWidth"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"borderColor"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#00000080'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"txt"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"fontSize"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#333333'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"fontWeight"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bold'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"marginTop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"infoLayout"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'90%'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"padding"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"backgroundColor"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#EAEAEA'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"borderRadius"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"marginTop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"infoTxt"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"fontSize"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#666666'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("h2",{id:"hoc-使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hoc-使用","aria-hidden":"true"},"#"),s(" Hoc 使用")],-1),w=n("ul",null,[n("li",null,"Hoc: 高阶组件，是参数为组件，返回值为新组件的函数。")],-1),f=n("div",{class:"language-tsx line-numbers-mode","data-ext":"tsx"},[n("pre",{class:"language-tsx"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" React"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" useEffect "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" TouchableOpacity"),n("span",{class:"token punctuation"},","),s(" Image"),n("span",{class:"token punctuation"},","),s(" StyleSheet "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react-native'"),s(`

`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"IReactComponent"),s(),n("span",{class:"token operator"},"="),s(`
  `),n("span",{class:"token operator"},"|"),s(" React"),n("span",{class:"token punctuation"},"."),s(`ClassicComponentClass
  `),n("span",{class:"token operator"},"|"),s(" React"),n("span",{class:"token punctuation"},"."),s(`ComponentClass
  `),n("span",{class:"token operator"},"|"),s(" React"),n("span",{class:"token punctuation"},"."),s(`FunctionComponent
  `),n("span",{class:"token operator"},"|"),s(" React"),n("span",{class:"token punctuation"},"."),s("ForwardRefExoticComponent"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"any"),n("span",{class:"token operator"},">"),s(`

`),n("span",{class:"token keyword"},"import"),s(" icon_add "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../assets/images/icon_add.png'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T")]),s(),n("span",{class:"token attr-name"},"extends"),s(),n("span",{class:"token attr-name"},"IReactComponent"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"(OriginView: T, type: string): T => "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"HOCView"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("props"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"useEffect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"reportDeviceInfo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"reportDeviceInfo"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 模拟上报"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" deviceInfo "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
        deviceId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        deviceName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
        modal`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
        storage`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
        ip`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`

      `),n("span",{class:"token comment"},"// reportDeviceInfo(deviceInfo);"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"OriginView")]),s(),n("span",{class:"token spread"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token operator"},"..."),s("props"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TouchableOpacity")]),s(`
          `),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("addButton"),n("span",{class:"token punctuation"},"}")]),s(`
          `),n("span",{class:"token attr-name"},"onPress"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"onPress ..."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}")]),s(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Image")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("addImg"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token attr-name"},"source"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("icon_add"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TouchableOpacity")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"return"),s(" HOCView "),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token constant"},"T"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`

const styles = StyleSheet.create(`),n("span",{class:"token punctuation"},"{"),s(`
  addButton`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'absolute'"),n("span",{class:"token punctuation"},","),s(`
    bottom`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),s(`
    right`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"28"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  addImg`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"54"),n("span",{class:"token punctuation"},","),s(`
    height`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"54"),n("span",{class:"token punctuation"},","),s(`
    resizeMode`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'contain'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`)
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" React"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" useEffect "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" StyleSheet"),n("span",{class:"token punctuation"},","),s(" View"),n("span",{class:"token punctuation"},","),s(" Image"),n("span",{class:"token punctuation"},","),s(" Text "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react-native'"),s(`

`),n("span",{class:"token keyword"},"import"),s(" icon_avatar "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../assets/images/default_avatar.png'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" withFloatButton "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./withFloatButton'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"withFloatButton"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" styles "),n("span",{class:"token operator"},"="),s(` darkStyles
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token operator"},"<"),s("View style"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("content"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("Image style"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("img"),n("span",{class:"token punctuation"},"}"),s(" source"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("icon_avatar"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("Text style"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("txt"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s("个人信息介绍"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("Text"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("View style"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("infoLayout"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),s("Text style"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("infoTxt"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s(`
          各位产品经理大家好，我是个人开发者张三，我学习`),n("span",{class:"token constant"},"RN"),s("两年半了，我喜欢安卓、"),n("span",{class:"token constant"},"RN"),s(`、Flutter，Thank
          you`),n("span",{class:"token operator"},"!"),s(`。
        `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("Text"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("View"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("View"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'InfoView'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(" darkStyles "),n("span",{class:"token operator"},"="),s(" StyleSheet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"height"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"backgroundColor"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#353535'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"flexDirection"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'column'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"alignItems"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"paddingHorizontal"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"paddingTop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"64"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"img"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"96"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"height"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"96"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"borderRadius"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"48"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"borderWidth"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"borderColor"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#ffffffE0'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"txt"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"fontSize"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'white'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"fontWeight"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bold'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"marginTop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"infoLayout"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'90%'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"padding"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"backgroundColor"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#808080'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"borderRadius"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"marginTop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"infoTxt"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"fontSize"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'white'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=c('<h2 id="memo-与-性能优化" tabindex="-1"><a class="header-anchor" href="#memo-与-性能优化" aria-hidden="true">#</a> memo 与 性能优化</h2><ul><li><code>React.memo</code>: 用于函数组件的性能优化，只有在组件的 props 发生改变时才会重新渲染组件，否则使用上一次的渲染结果。</li><li><code>useMemo</code>: 用于函数组件的性能优化，依赖的值发生变化时才会重新计算值。</li><li><code>useCallback</code>: 用于函数组件的性能优化，返回一个函数，依赖的值发生变化时才会重新计算值。</li><li><code>shouldComponentUpdate</code>: 用于类组件的性能优化，返回 <code>true</code> 时才会重新渲染组件，否则使用上一次的渲染结果。</li><li><code>PureComponent</code>: 用于类组件的性能优化，浅比较 <code>props</code> 和 <code>state</code>，只有发生改变时才会重新渲染组件，否则使用上一次的渲染结果。</li><li><code>React.memo</code> 与 <code>PureComponent</code> 的区别：<code>React.memo</code> 只能用于函数组件，<code>PureComponent</code> 只能用于类组件，<code>React.memo</code> 与 <code>PureComponent</code> 都是浅比较，<code>React.memo</code> 可以自定义比较函数。</li><li><code>React.memo</code> 与 <code>useMemo</code> 的区别：<code>React.memo</code> 用于组件，<code>useMemo</code> 用于值，<code>React.memo</code> 依赖的值发生变化时才会重新渲染组件，<code>useMemo </code>依赖的值发生变化时才会重新计算值。</li><li><code>React.memo</code> 与 <code>useCallback</code> 的区别：<code>React.memo</code> 用于组件，<code>useCallback</code> 用于函数，<code>React.memo</code> 依赖的值发生变化时才会重新渲染组件，<code>useCallback</code> 依赖的值发生变化时才会重新计算值。</li><li><code>React.memo</code> 与 <code>shouldComponentUpdate</code> 的区别：React.memo 用于组件，<code>shouldComponentUpdate</code> 用于类组件，<code>React.memo</code> 依赖的值发生变化时才会重新渲染组件，<code>shouldComponentUpdate</code> 返回 <code>true</code> 时才会重新渲染组件。</li></ul>',2),T=n("div",{class:"language-tsx line-numbers-mode","data-ext":"tsx"},[n("pre",{class:"language-tsx"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" React"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" useState "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" View"),n("span",{class:"token punctuation"},","),s(" Button "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react-native'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" InfoView "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./InfoView'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" InfoView2 "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./InfoView2'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" ConsumeList "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./ConsumeList'"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" avatarUri "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../constants/Uri'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("info"),n("span",{class:"token punctuation"},","),s(" setInfo"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"useState"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),s("UserInfo"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
    desc`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"View")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token comment"},`/* <Button
                title='按钮'
                onPress={() => {
                    setInfo({
                        avatar: avatarUri,
                        name: '尼古拉斯·段坤',
                        desc: '各位产品经理大家好，我是个人开发者段坤，我学习RN两年半了，我喜欢安卓、RN、Flutter，Thank you!。'
                    });
                }}
            /> */`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token comment"},"/* <InfoView info={info} /> */"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token comment"},"/* <InfoView2 info={info} /> */"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`

      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"ConsumeList")]),s(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"View")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("div",{class:"language-tsx line-numbers-mode","data-ext":"tsx"},[n("pre",{class:"language-tsx"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" React "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" StyleSheet"),n("span",{class:"token punctuation"},","),s(" View"),n("span",{class:"token punctuation"},","),s(" Image"),n("span",{class:"token punctuation"},","),s(" Text "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react-native'"),s(`

`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"Props"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  info`),n("span",{class:"token operator"},":"),s(` UserInfo
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// React.memo 用于函数组件的性能优化，只有在组件的 props 发生改变时才会重新渲染组件，否则使用上一次的渲染结果。"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(" React"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"memo"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token punctuation"},"("),s("props"),n("span",{class:"token operator"},":"),s(" Props"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" info "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(` props

    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'render ...'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"View")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("darkStyles"),n("span",{class:"token punctuation"},"."),s("content"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Image")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("darkStyles"),n("span",{class:"token punctuation"},"."),s("img"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token attr-name"},"source"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"uri"),n("span",{class:"token operator"},":"),s(" info"),n("span",{class:"token punctuation"},"."),s("avatar "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Text")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("darkStyles"),n("span",{class:"token punctuation"},"."),s("txt"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"{"),s("info"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Text")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"View")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("darkStyles"),n("span",{class:"token punctuation"},"."),s("infoLayout"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Text")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("darkStyles"),n("span",{class:"token punctuation"},"."),s("infoTxt"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"{"),s("info"),n("span",{class:"token punctuation"},"."),s("desc"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Text")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"View")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"View")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"("),s("preProps"),n("span",{class:"token operator"},":"),s(" Props"),n("span",{class:"token punctuation"},","),s(" nextProps"),n("span",{class:"token operator"},":"),s(" Props"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(`
    `),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("preProps"),n("span",{class:"token punctuation"},"."),s("info"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("nextProps"),n("span",{class:"token punctuation"},"."),s("info"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(" darkStyles "),n("span",{class:"token operator"},"="),s(" StyleSheet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},","),s(`
    height`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},","),s(`
    backgroundColor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#353535'"),n("span",{class:"token punctuation"},","),s(`
    flexDirection`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'column'"),n("span",{class:"token punctuation"},","),s(`
    alignItems`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
    paddingHorizontal`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
    paddingTop`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"64"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  img`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"96"),n("span",{class:"token punctuation"},","),s(`
    height`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"96"),n("span",{class:"token punctuation"},","),s(`
    borderRadius`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"48"),n("span",{class:"token punctuation"},","),s(`
    borderWidth`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
    borderColor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#ffffffE0'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  txt`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fontSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
    color`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'white'"),n("span",{class:"token punctuation"},","),s(`
    fontWeight`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bold'"),n("span",{class:"token punctuation"},","),s(`
    marginTop`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  infoLayout`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'90%'"),n("span",{class:"token punctuation"},","),s(`
    padding`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
    backgroundColor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#808080'"),n("span",{class:"token punctuation"},","),s(`
    borderRadius`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(`
    marginTop`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  infoTxt`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fontSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
    color`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'white'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-tsx line-numbers-mode","data-ext":"tsx"},[n("pre",{class:"language-tsx"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" React "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" StyleSheet"),n("span",{class:"token punctuation"},","),s(" View"),n("span",{class:"token punctuation"},","),s(" Image"),n("span",{class:"token punctuation"},","),s(" Text "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react-native'"),s(`

`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"Props"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  info`),n("span",{class:"token operator"},":"),s(` UserInfo
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"InfoView2"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"React"),n("span",{class:"token punctuation"},"."),s("Component"),n("span",{class:"token operator"},"<"),s("Props"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),s("props"),n("span",{class:"token operator"},":"),s(" Props"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"("),s("props"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token comment"},"// shouldComponentUpdate: 用于类组件的性能优化，返回 true 时才会重新渲染组件，否则使用上一次的渲染结果。"),s(`
  `),n("span",{class:"token function"},"shouldComponentUpdate"),n("span",{class:"token punctuation"},"("),s("nextProps"),n("span",{class:"token operator"},":"),s(" Readonly"),n("span",{class:"token operator"},"<"),s("Props"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"boolean"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("nextProps"),n("span",{class:"token punctuation"},"."),s("info"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("props"),n("span",{class:"token punctuation"},"."),s("info"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" React"),n("span",{class:"token punctuation"},"."),s("ReactNode "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'render ...'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" info "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`props
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"View")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("darkStyles"),n("span",{class:"token punctuation"},"."),s("content"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Image")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("darkStyles"),n("span",{class:"token punctuation"},"."),s("img"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token attr-name"},"source"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"uri"),n("span",{class:"token operator"},":"),s(" info"),n("span",{class:"token punctuation"},"."),s("avatar "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Text")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("darkStyles"),n("span",{class:"token punctuation"},"."),s("txt"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"{"),s("info"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Text")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"View")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("darkStyles"),n("span",{class:"token punctuation"},"."),s("infoLayout"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Text")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("darkStyles"),n("span",{class:"token punctuation"},"."),s("infoTxt"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"{"),s("info"),n("span",{class:"token punctuation"},"."),s("desc"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Text")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"View")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"View")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(" darkStyles "),n("span",{class:"token operator"},"="),s(" StyleSheet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  content`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},","),s(`
    height`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},","),s(`
    backgroundColor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#353535'"),n("span",{class:"token punctuation"},","),s(`
    flexDirection`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'column'"),n("span",{class:"token punctuation"},","),s(`
    alignItems`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
    paddingHorizontal`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
    paddingTop`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"64"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  img`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"96"),n("span",{class:"token punctuation"},","),s(`
    height`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"96"),n("span",{class:"token punctuation"},","),s(`
    borderRadius`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"48"),n("span",{class:"token punctuation"},","),s(`
    borderWidth`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
    borderColor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#ffffffE0'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  txt`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fontSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
    color`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'white'"),n("span",{class:"token punctuation"},","),s(`
    fontWeight`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bold'"),n("span",{class:"token punctuation"},","),s(`
    marginTop`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  infoLayout`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'90%'"),n("span",{class:"token punctuation"},","),s(`
    padding`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
    backgroundColor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#808080'"),n("span",{class:"token punctuation"},","),s(`
    borderRadius`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(`
    marginTop`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  infoTxt`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fontSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
    color`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'white'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-tsx line-numbers-mode","data-ext":"tsx"},[n("pre",{class:"language-tsx"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" React"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" useState"),n("span",{class:"token punctuation"},","),s(" useMemo"),n("span",{class:"token punctuation"},","),s(" useCallback "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  View`),n("span",{class:"token punctuation"},","),s(`
  Button`),n("span",{class:"token punctuation"},","),s(`
  StyleSheet`),n("span",{class:"token punctuation"},","),s(`
  FlatList`),n("span",{class:"token punctuation"},","),s(`
  Switch`),n("span",{class:"token punctuation"},","),s(`
  Text`),n("span",{class:"token punctuation"},","),s(`
  TouchableOpacity`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react-native'"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ListData"),n("span",{class:"token punctuation"},","),s(" ListData2 "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../constants/Data'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" TypeColors "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../constants/Data'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("data"),n("span",{class:"token punctuation"},","),s(" setData"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"useState"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"any"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),s("ListData"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("showType"),n("span",{class:"token punctuation"},","),s(" setShowType"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"useState"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"boolean"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// const calculateTotal = useMemo(() => {"),s(`
  `),n("span",{class:"token comment"},"//     console.log('重新计算合计');"),s(`
  `),n("span",{class:"token comment"},"//     return data.map((item: any) => item.amount)"),s(`
  `),n("span",{class:"token comment"},"//         .reduce((pre: number, cur: number) => pre + cur);"),s(`
  `),n("span",{class:"token comment"},"// }, [data])"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" totalAmountView "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useMemo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" total "),n("span",{class:"token operator"},"="),s(` data
      `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" item"),n("span",{class:"token punctuation"},"."),s("amount"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reduce"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("pre"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},","),s(" cur"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" pre "),n("span",{class:"token operator"},"+"),s(" cur"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'重新渲染合计'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"View")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("totalLayout"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Text")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("totalTxt"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"{"),s("total"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Text")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Text")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("totalTxt"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"合计："),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Text")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"View")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"["),s("data"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" onItemPress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useCallback"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"点击第"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("item"),n("span",{class:"token punctuation"},"."),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"行"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"renderItem"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" item"),n("span",{class:"token punctuation"},","),s(" index "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" styles "),n("span",{class:"token operator"},"="),s(" StyleSheet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      itemLayout`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},","),s(`
        padding`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
        flexDirection`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'column'"),n("span",{class:"token punctuation"},","),s(`
        borderBottomWidth`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        borderBottomColor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#E0E0E0'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      labelRow`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},","),s(`
        flexDirection`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'row'"),n("span",{class:"token punctuation"},","),s(`
        alignItems`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      valueRow`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        marginTop`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      labelTxt`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        flex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        fontSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"14"),n("span",{class:"token punctuation"},","),s(`
        color`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#666'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      first`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        flex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.4"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      second`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        flex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.3"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      last`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        flex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.6"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      valueTxt`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        flex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        fontSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),s(`
        color`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#333'"),n("span",{class:"token punctuation"},","),s(`
        fontWeight`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bold'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      typeLayout`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        flex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.3"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      typeTxt`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(`
        height`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(`
        textAlign`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
        textAlignVertical`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
        color`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'white'"),n("span",{class:"token punctuation"},","),s(`
        borderRadius`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
        fontWeight`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bold'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TouchableOpacity")]),s(`
        `),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("itemLayout"),n("span",{class:"token punctuation"},"}")]),s(`
        `),n("span",{class:"token attr-name"},"onPress"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token function"},"onItemPress"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),s(`
      `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"View")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("labelRow"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Text")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"["),s("styles"),n("span",{class:"token punctuation"},"."),s("labelTxt"),n("span",{class:"token punctuation"},","),s(" styles"),n("span",{class:"token punctuation"},"."),s("first"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"序号"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Text")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token punctuation"},"{"),s("showType "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"("),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Text")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"["),s("styles"),n("span",{class:"token punctuation"},"."),s("labelTxt"),n("span",{class:"token punctuation"},","),s(" styles"),n("span",{class:"token punctuation"},"."),s("second"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"类型"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Text")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Text")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("labelTxt"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"消费名称"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Text")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Text")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"["),s("styles"),n("span",{class:"token punctuation"},"."),s("labelTxt"),n("span",{class:"token punctuation"},","),s(" styles"),n("span",{class:"token punctuation"},"."),s("last"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"消费金额"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Text")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"View")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"View")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"["),s("styles"),n("span",{class:"token punctuation"},"."),s("labelRow"),n("span",{class:"token punctuation"},","),s(" styles"),n("span",{class:"token punctuation"},"."),s("valueRow"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Text")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"["),s("styles"),n("span",{class:"token punctuation"},"."),s("valueTxt"),n("span",{class:"token punctuation"},","),s(" styles"),n("span",{class:"token punctuation"},"."),s("first"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"{"),s("item"),n("span",{class:"token punctuation"},"."),s("index"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Text")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token punctuation"},"{"),s("showType "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"("),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"View")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("typeLayout"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Text")]),s(`
                `),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"["),s(`
                  styles`),n("span",{class:"token punctuation"},"."),s("typeTxt"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"backgroundColor"),n("span",{class:"token operator"},":"),s(" TypeColors"),n("span",{class:"token punctuation"},"["),s("item"),n("span",{class:"token punctuation"},"."),s("type"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
              `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
                `),n("span",{class:"token punctuation"},"{"),s("item"),n("span",{class:"token punctuation"},"."),s("type"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Text")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"View")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Text")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("valueTxt"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"{"),s("item"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Text")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Text")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"["),s("styles"),n("span",{class:"token punctuation"},"."),s("valueTxt"),n("span",{class:"token punctuation"},","),s(" styles"),n("span",{class:"token punctuation"},"."),s("last"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"{"),s("item"),n("span",{class:"token punctuation"},"."),s("amount"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Text")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"View")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TouchableOpacity")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"View")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"View")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("titleLayout"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Text")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("titleTxt"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"消费记账单"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Text")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Switch")]),s(`
          `),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("switch"),n("span",{class:"token punctuation"},"}")]),s(`
          `),n("span",{class:"token attr-name"},"value"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("showType"),n("span",{class:"token punctuation"},"}")]),s(`
          `),n("span",{class:"token attr-name"},"onValueChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"setShowType"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),s(`
        `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Button")]),s(`
          `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("切换数据"),n("span",{class:"token punctuation"},"'")]),s(`
          `),n("span",{class:"token attr-name"},"onPress"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"setData"),n("span",{class:"token punctuation"},"("),s("ListData2"),n("span",{class:"token punctuation"},")"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}")]),s(`
        `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"View")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"FlatList")]),s(`
        `),n("span",{class:"token attr-name"},"data"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("data"),n("span",{class:"token punctuation"},"}")]),s(`
        `),n("span",{class:"token attr-name"},"keyExtractor"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("item"),n("span",{class:"token punctuation"},","),s(" index")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("item"),n("span",{class:"token punctuation"},"."),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("item"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},"}")]),s(`
        `),n("span",{class:"token attr-name"},"renderItem"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("renderItem"),n("span",{class:"token punctuation"},"}")]),s(`
      `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token comment"},`/* <View style={styles.totalLayout}>
                <Text style={styles.totalTxt}>{calculateTotal}</Text>
                <Text style={styles.totalTxt}>合计：</Text>
            </View> */`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token punctuation"},"{"),s("totalAmountView"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"View")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(" styles "),n("span",{class:"token operator"},"="),s(" StyleSheet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  root`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},","),s(`
    height`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},","),s(`
    backgroundColor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'white'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  titleLayout`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},","),s(`
    height`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},","),s(`
    flexDirection`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'row'"),n("span",{class:"token punctuation"},","),s(`
    alignItems`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
    justifyContent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  titleTxt`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fontSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),s(`
    color`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#333'"),n("span",{class:"token punctuation"},","),s(`
    fontWeight`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bold'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  totalLayout`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},","),s(`
    height`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},","),s(`
    flexDirection`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'row-reverse'"),n("span",{class:"token punctuation"},","),s(`
    borderTopWidth`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    borderTopColor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#c0c0c0'"),n("span",{class:"token punctuation"},","),s(`
    alignItems`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
    paddingHorizontal`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  totalTxt`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fontSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(`
    color`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#333'"),n("span",{class:"token punctuation"},","),s(`
    fontWeight`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bold'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token keyword"},"switch"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'absolute'"),n("span",{class:"token punctuation"},","),s(`
    right`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"UserInfo"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  desc`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("h2",{id:"ref-转发",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ref-转发","aria-hidden":"true"},"#"),s(" Ref 转发")],-1),j=n("ul",null,[n("li",null,[s("Ref: 用于函数组件中获取组件实例，使用 "),n("code",null,"ForwardRef"),s(" 可以将 "),n("code",null,"Ref"),s(" 传递给子组件")]),n("li",null,"Ref: 用户类组件中获取组件实例")],-1),C=n("div",{class:"language-tsx line-numbers-mode","data-ext":"tsx"},[n("pre",{class:"language-tsx"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" React"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" useRef "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" StyleSheet"),n("span",{class:"token punctuation"},","),s(" View"),n("span",{class:"token punctuation"},","),s(" Button"),n("span",{class:"token punctuation"},","),s(" TextInput "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react-native'"),s(`

`),n("span",{class:"token comment"},"// import CustomInput, { CustomInputRef } from './CustomInput';"),s(`
`),n("span",{class:"token keyword"},"import"),s(" CustomInput2 "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./CustomInput2'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" inputRef "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"useRef"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),s("CustomInput2"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"View")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Button")]),s(`
        `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("聚焦"),n("span",{class:"token punctuation"},"'")]),s(`
        `),n("span",{class:"token attr-name"},"onPress"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          inputRef`),n("span",{class:"token punctuation"},"."),s("current"),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"customFocus"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}")]),s(`
      `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Button")]),s(`
        `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("失焦"),n("span",{class:"token punctuation"},"'")]),s(`
        `),n("span",{class:"token attr-name"},"onPress"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          inputRef`),n("span",{class:"token punctuation"},"."),s("current"),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"customBlur"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
          inputRef`),n("span",{class:"token punctuation"},"."),s("current"),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"customXXX"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}")]),s(`
      `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token comment"},"/* <CustomInput ref={inputRef} /> */"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`

      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"CustomInput2")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("inputRef"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"View")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(" styles "),n("span",{class:"token operator"},"="),s(" StyleSheet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  root`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},","),s(`
    height`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},","),s(`
    backgroundColor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'white'"),n("span",{class:"token punctuation"},","),s(`
    paddingHorizontal`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(`
    paddingTop`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"64"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-tsx line-numbers-mode","data-ext":"tsx"},[n("pre",{class:"language-tsx"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" React"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" useState"),n("span",{class:"token punctuation"},","),s(" useRef"),n("span",{class:"token punctuation"},","),s(" forwardRef"),n("span",{class:"token punctuation"},","),s(" useImperativeHandle "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  StyleSheet`),n("span",{class:"token punctuation"},","),s(`
  View`),n("span",{class:"token punctuation"},","),s(`
  Image`),n("span",{class:"token punctuation"},","),s(`
  Text`),n("span",{class:"token punctuation"},","),s(`
  TextInput`),n("span",{class:"token punctuation"},","),s(`
  LayoutAnimation`),n("span",{class:"token punctuation"},","),s(`
  TouchableOpacity`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react-native'"),s(`

`),n("span",{class:"token keyword"},"import"),s(" icon_error "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../assets/images/icon_error.png'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" icon_right "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../assets/images/icon_right.png'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" icon_question "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../assets/images/icon_question.webp'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" icon_delete "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../assets/images/icon_delete.png'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"CustomInputRef"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function-variable function"},"customFocus"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(`
  `),n("span",{class:"token function-variable function"},"customBlur"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"forwardRef"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("props"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" inputRef "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"useRef"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),s("TextInput"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("value"),n("span",{class:"token punctuation"},","),s(" setValue"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"useState"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"string"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"customFocus"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    inputRef`),n("span",{class:"token punctuation"},"."),s("current"),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"focus"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"customBlur"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    inputRef`),n("span",{class:"token punctuation"},"."),s("current"),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"blur"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},"// 暴露给父组件的方法"),s(`
  `),n("span",{class:"token function"},"useImperativeHandle"),n("span",{class:"token punctuation"},"("),s("ref"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      customFocus`),n("span",{class:"token punctuation"},","),s(`
      customBlur`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"View")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"View")]),s(`
        `),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"["),s(`
          styles`),n("span",{class:"token punctuation"},"."),s("inputWrap"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"borderColor"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token operator"},"!"),s(`value
              `),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token string"},"'#888'"),s(`
              `),n("span",{class:"token operator"},":"),s(" value"),n("span",{class:"token operator"},"?."),s("length "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"11"),s(`
              `),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token string"},"'#00CD00'"),s(`
              `),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#ff3050'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
      `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TextInput")]),s(`
          `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("inputRef"),n("span",{class:"token punctuation"},"}")]),s(`
          `),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("input"),n("span",{class:"token punctuation"},"}")]),s(`
          `),n("span",{class:"token attr-name"},"value"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("value"),n("span",{class:"token punctuation"},"}")]),s(`
          `),n("span",{class:"token attr-name"},"keyboardType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("number-pad"),n("span",{class:"token punctuation"},"'")]),s(`
          `),n("span",{class:"token attr-name"},"onChangeText"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            LayoutAnimation`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"spring"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token function"},"setValue"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}")]),s(`
          `),n("span",{class:"token attr-name"},"maxLength"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},"}")]),s(`
        `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`

        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),s("value "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"("),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TouchableOpacity")]),s(`
            `),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("deleteButton"),n("span",{class:"token punctuation"},"}")]),s(`
            `),n("span",{class:"token attr-name"},"onPress"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
              LayoutAnimation`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"spring"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
              `),n("span",{class:"token function"},"setValue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}")]),s(`
          `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Image")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("deleteImg"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token attr-name"},"source"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("icon_delete"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TouchableOpacity")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"View")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"View")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("tipsLayout"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token operator"},"!"),s("value "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token punctuation"},"("),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Image")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("tipImg"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token attr-name"},"source"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("icon_question"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Text")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("tipsTxt"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"请输入您的手机号"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Text")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},":"),s(" value"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"11"),s(),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token punctuation"},"("),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Image")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("tipImgRight"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token attr-name"},"source"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("icon_right"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Text")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("tipsTxtRight"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"输入正确，可进行提交"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Text")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Image")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("tipImgError"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token attr-name"},"source"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("icon_error"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Text")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("tipsTxtError"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"格式错误，请输入正确手机号"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Text")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"View")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"View")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(" styles "),n("span",{class:"token operator"},"="),s(" StyleSheet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  root`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},","),s(`
    flexDirection`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'column'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  input`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},","),s(`
    height`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},","),s(`
    backgroundColor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'transparent'"),n("span",{class:"token punctuation"},","),s(`
    paddingHorizontal`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
    fontSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),s(`
    color`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#333'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  inputWrap`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},","),s(`
    borderWidth`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
    borderRadius`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(`
    flexDirection`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'row'"),n("span",{class:"token punctuation"},","),s(`
    alignItems`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  tipsLayout`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    flexDirection`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'row'"),n("span",{class:"token punctuation"},","),s(`
    alignItems`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
    marginTop`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
    paddingHorizontal`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  tipImg`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),s(`
    height`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),s(`
    resizeMode`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'contain'"),n("span",{class:"token punctuation"},","),s(`
    tintColor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#888'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  tipsTxt`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fontSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},","),s(`
    color`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#666'"),n("span",{class:"token punctuation"},","),s(`
    marginLeft`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
    fontWeight`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bold'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  tipImgRight`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),s(`
    height`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),s(`
    resizeMode`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'contain'"),n("span",{class:"token punctuation"},","),s(`
    tintColor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#00CD00'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  tipsTxtRight`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fontSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},","),s(`
    color`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#00CD00'"),n("span",{class:"token punctuation"},","),s(`
    marginLeft`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
    fontWeight`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bold'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  tipImgError`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),s(`
    height`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),s(`
    resizeMode`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'contain'"),n("span",{class:"token punctuation"},","),s(`
    tintColor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#ff3050'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  tipsTxtError`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fontSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},","),s(`
    color`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#ff3050'"),n("span",{class:"token punctuation"},","),s(`
    marginLeft`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
    fontWeight`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bold'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  deleteButton`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'absolute'"),n("span",{class:"token punctuation"},","),s(`
    right`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  deleteImg`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
    height`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
    resizeMode`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'contain'"),n("span",{class:"token punctuation"},","),s(`
    borderRadius`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("div",{class:"language-tsx line-numbers-mode","data-ext":"tsx"},[n("pre",{class:"language-tsx"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" React "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  StyleSheet`),n("span",{class:"token punctuation"},","),s(`
  View`),n("span",{class:"token punctuation"},","),s(`
  Image`),n("span",{class:"token punctuation"},","),s(`
  Text`),n("span",{class:"token punctuation"},","),s(`
  TextInput`),n("span",{class:"token punctuation"},","),s(`
  LayoutAnimation`),n("span",{class:"token punctuation"},","),s(`
  TouchableOpacity`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react-native'"),s(`

`),n("span",{class:"token keyword"},"import"),s(" icon_error "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../assets/images/icon_error.png'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" icon_right "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../assets/images/icon_right.png'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" icon_question "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../assets/images/icon_question.webp'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" icon_delete "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../assets/images/icon_delete.png'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"CustomInput"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"React"),n("span",{class:"token punctuation"},"."),s("Component "),n("span",{class:"token punctuation"},"{"),s(`
  inputRef `),n("span",{class:"token operator"},"="),s(" React"),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"createRef"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),s("TextInput"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  state `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),s("props"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"("),s("props"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("state "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
      value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function-variable function"},"customFocus"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("inputRef"),n("span",{class:"token punctuation"},"."),s("current"),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"focus"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function-variable function"},"customBlur"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("inputRef"),n("span",{class:"token punctuation"},"."),s("current"),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"blur"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function-variable function"},"customXXX"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'customXXX ...'"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" value "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`state
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"View")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"View")]),s(`
          `),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"["),s(`
            styles`),n("span",{class:"token punctuation"},"."),s("inputWrap"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"borderColor"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token operator"},"!"),s(`value
                `),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token string"},"'#888'"),s(`
                `),n("span",{class:"token operator"},":"),s(" value"),n("span",{class:"token operator"},"?."),s("length "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"11"),s(`
                `),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token string"},"'#00CD00'"),s(`
                `),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#ff3050'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TextInput")]),s(`
            `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("inputRef"),n("span",{class:"token punctuation"},"}")]),s(`
            `),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("input"),n("span",{class:"token punctuation"},"}")]),s(`
            `),n("span",{class:"token attr-name"},"value"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("value"),n("span",{class:"token punctuation"},"}")]),s(`
            `),n("span",{class:"token attr-name"},"keyboardType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("number-pad"),n("span",{class:"token punctuation"},"'")]),s(`
            `),n("span",{class:"token attr-name"},"onChangeText"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
              LayoutAnimation`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"spring"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
              `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
                value`),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}")]),s(`
            `),n("span",{class:"token attr-name"},"maxLength"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},"}")]),s(`
          `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`

          `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),s("value "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"("),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TouchableOpacity")]),s(`
              `),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("deleteButton"),n("span",{class:"token punctuation"},"}")]),s(`
              `),n("span",{class:"token attr-name"},"onPress"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                LayoutAnimation`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"spring"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}")]),s(`
            `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Image")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("deleteImg"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token attr-name"},"source"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("icon_delete"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TouchableOpacity")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"View")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"View")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("tipsLayout"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token operator"},"!"),s("value "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token punctuation"},"("),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Image")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("tipImg"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token attr-name"},"source"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("icon_question"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Text")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("tipsTxt"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"请输入您的手机号"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Text")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},":"),s(" value"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"11"),s(),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token punctuation"},"("),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Image")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("tipImgRight"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token attr-name"},"source"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("icon_right"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Text")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("tipsTxtRight"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"输入正确，可进行提交"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Text")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Image")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("tipImgError"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token attr-name"},"source"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("icon_error"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Text")]),s(),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("styles"),n("span",{class:"token punctuation"},"."),s("tipsTxtError"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
                格式错误，请输入正确手机号
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"Text")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"View")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"View")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(" styles "),n("span",{class:"token operator"},"="),s(" StyleSheet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  root`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},","),s(`
    flexDirection`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'column'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  input`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},","),s(`
    height`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},","),s(`
    backgroundColor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'transparent'"),n("span",{class:"token punctuation"},","),s(`
    paddingHorizontal`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
    fontSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),s(`
    color`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#333'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  inputWrap`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},","),s(`
    borderWidth`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
    borderRadius`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(`
    flexDirection`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'row'"),n("span",{class:"token punctuation"},","),s(`
    alignItems`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  tipsLayout`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    flexDirection`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'row'"),n("span",{class:"token punctuation"},","),s(`
    alignItems`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
    marginTop`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
    paddingHorizontal`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  tipImg`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),s(`
    height`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),s(`
    resizeMode`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'contain'"),n("span",{class:"token punctuation"},","),s(`
    tintColor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#888'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  tipsTxt`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fontSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},","),s(`
    color`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#666'"),n("span",{class:"token punctuation"},","),s(`
    marginLeft`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
    fontWeight`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bold'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  tipImgRight`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),s(`
    height`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),s(`
    resizeMode`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'contain'"),n("span",{class:"token punctuation"},","),s(`
    tintColor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#00CD00'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  tipsTxtRight`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fontSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},","),s(`
    color`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#00CD00'"),n("span",{class:"token punctuation"},","),s(`
    marginLeft`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
    fontWeight`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bold'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  tipImgError`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),s(`
    height`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),s(`
    resizeMode`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'contain'"),n("span",{class:"token punctuation"},","),s(`
    tintColor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#ff3050'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  tipsTxtError`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fontSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},","),s(`
    color`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#ff3050'"),n("span",{class:"token punctuation"},","),s(`
    marginLeft`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
    fontWeight`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bold'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  deleteButton`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'absolute'"),n("span",{class:"token punctuation"},","),s(`
    right`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  deleteImg`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    width`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
    height`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
    resizeMode`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'contain'"),n("span",{class:"token punctuation"},","),s(`
    borderRadius`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=c(`<h2 id="桥接原生" tabindex="-1"><a class="header-anchor" href="#桥接原生" aria-hidden="true">#</a> 桥接原生</h2><h3 id="实现-js-调用原生方法" tabindex="-1"><a class="header-anchor" href="#实现-js-调用原生方法" aria-hidden="true">#</a> 实现 JS 调用原生方法</h3><ul><li><code>NativeModules</code> 获取 原生模块</li></ul><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  StyleSheet<span class="token punctuation">,</span>
  View<span class="token punctuation">,</span>
  Button<span class="token punctuation">,</span>
  NativeModules<span class="token punctuation">,</span>
  Image<span class="token punctuation">,</span>
  Text<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native&#39;</span>

<span class="token keyword">import</span> NativeInfoView <span class="token keyword">from</span> <span class="token string">&#39;./NativeInfoView&#39;</span>
<span class="token keyword">import</span> NativeInfoViewGroup <span class="token keyword">from</span> <span class="token string">&#39;./NativeInfoViewGroup&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> avatarUri <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../constants/Uri&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>root<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      &lt;Button
        title=&#39;调用原生方法&#39;
        onPress=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> <span class="token punctuation">{</span> App <span class="token punctuation">}</span> <span class="token operator">=</span> NativeModules
          <span class="token comment">// 打开原生相册</span>
          <span class="token comment">// App?.openGallery();</span>

          <span class="token comment">// 获取原生版本号（异步）</span>
          <span class="token comment">// App?.getVersionName().then((data: string) =&gt; {</span>
          <span class="token comment">//     console.log(\`versionName=\${data}\`);</span>
          <span class="token comment">// })</span>

          <span class="token comment">// 桥接原生实现JS层获取原生常量 获取原生版本号</span>
          <span class="token keyword">const</span> <span class="token punctuation">{</span> versionName<span class="token punctuation">,</span> versionCode <span class="token punctuation">}</span> <span class="token operator">=</span> App
          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">versionName=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>versionName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, versionCode=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>versionCode<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token plain-text">
      /&gt;

      </span><span class="token punctuation">{</span><span class="token comment">/* &lt;NativeInfoView /&gt; */</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NativeInfoViewGroup</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>content<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Image</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>avatarImg<span class="token punctuation">}</span></span> <span class="token attr-name">source</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">uri</span><span class="token operator">:</span> avatarUri <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>nameLayout<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Text</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>nameTxt<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">尼古拉斯·段坤</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Text</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Text</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>descTxt<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
              各位产品经理大家好，我是个人开发者张三，我学习RN两年半了，我喜欢安卓、RN、Flutter，Thank
              you!。
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Text</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NativeInfoViewGroup</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  root<span class="token operator">:</span> <span class="token punctuation">{</span>
    width<span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    height<span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    backgroundColor<span class="token operator">:</span> <span class="token string">&#39;white&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  content<span class="token operator">:</span> <span class="token punctuation">{</span>
    width<span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    height<span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
    flexDirection<span class="token operator">:</span> <span class="token string">&#39;row&#39;</span><span class="token punctuation">,</span>
    alignItems<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
    paddingHorizontal<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
    paddingTop<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    backgroundColor<span class="token operator">:</span> <span class="token string">&#39;white&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  avatarImg<span class="token operator">:</span> <span class="token punctuation">{</span>
    width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    resizeMode<span class="token operator">:</span> <span class="token string">&#39;contain&#39;</span><span class="token punctuation">,</span>
    borderRadius<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  nameLayout<span class="token operator">:</span> <span class="token punctuation">{</span>
    flex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    flexDirection<span class="token operator">:</span> <span class="token string">&#39;column&#39;</span><span class="token punctuation">,</span>
    marginLeft<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  nameTxt<span class="token operator">:</span> <span class="token punctuation">{</span>
    fontSize<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    color<span class="token operator">:</span> <span class="token string">&#39;#333&#39;</span><span class="token punctuation">,</span>
    fontWeight<span class="token operator">:</span> <span class="token string">&#39;bold&#39;</span><span class="token punctuation">,</span>
    marginTop<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  descTxt<span class="token operator">:</span> <span class="token punctuation">{</span>
    fontSize<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
    color<span class="token operator">:</span> <span class="token string">&#39;#666&#39;</span><span class="token punctuation">,</span>
    marginTop<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原子组件实现原生组件" tabindex="-1"><a class="header-anchor" href="#原子组件实现原生组件" aria-hidden="true">#</a> 原子组件实现原生组件</h3><ul><li><code>requireNativeComponent</code></li><li>与 原生通信传值 和 调用原生方法</li><li>继承是<code>SimpleViewManager</code></li></ul><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  StyleSheet<span class="token punctuation">,</span>
  View<span class="token punctuation">,</span>
  requireNativeComponent<span class="token punctuation">,</span>
  ViewProps<span class="token punctuation">,</span>
  findNodeHandle<span class="token punctuation">,</span>
  UIManager<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> avatarUri <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../constants/Uri&#39;</span>

<span class="token keyword">type</span> <span class="token class-name">NativeInfoViewType</span> <span class="token operator">=</span>
  <span class="token operator">|</span> ViewProps
  <span class="token operator">|</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这部分是自定义的属性</span>
      avatar<span class="token operator">:</span> <span class="token builtin">string</span>
      name<span class="token operator">:</span> <span class="token builtin">string</span>
      desc<span class="token operator">:</span> <span class="token builtin">string</span>
      <span class="token function-variable function">onShapeChange</span><span class="token operator">:</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
    <span class="token punctuation">}</span>

<span class="token keyword">const</span> NativeInfoView <span class="token operator">=</span>
  <span class="token generic-function"><span class="token function">requireNativeComponent</span><span class="token generic class-name"><span class="token operator">&lt;</span>NativeInfoViewType<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;NativeInfoView&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ref <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 原生模块 方法</span>
      <span class="token function">sendCommand</span><span class="token punctuation">(</span><span class="token string">&#39;setShape&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;round&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">sendCommand</span> <span class="token operator">=</span> <span class="token punctuation">(</span>command<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> params<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> viewId <span class="token operator">=</span> <span class="token function">findNodeHandle</span><span class="token punctuation">(</span>ref<span class="token punctuation">.</span>current<span class="token punctuation">)</span>
    <span class="token comment">// @ts-ignore</span>
    <span class="token keyword">const</span> commands <span class="token operator">=</span> UIManager<span class="token punctuation">.</span>NativeInfoView<span class="token punctuation">.</span>Commands<span class="token punctuation">[</span>command<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    UIManager<span class="token punctuation">.</span><span class="token function">dispatchViewManagerCommand</span><span class="token punctuation">(</span>viewId<span class="token punctuation">,</span> commands<span class="token punctuation">,</span> params<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NativeInfoView</span></span>
      <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>infoView<span class="token punctuation">}</span></span>
      <span class="token attr-name">avatar</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>avatarUri<span class="token punctuation">}</span></span>
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>尼古拉斯·段坤<span class="token punctuation">&#39;</span></span>
      <span class="token attr-name">desc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>各位产品经理大家好，我是个人开发者张三，我学习RN两年半了，我喜欢安卓、RN、Flutter，Thank you!。<span class="token punctuation">&#39;</span></span>
      <span class="token attr-name">onShapeChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>nativeEvent<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  infoView<span class="token operator">:</span> <span class="token punctuation">{</span>
    width<span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    height<span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="桥接原生容器组件" tabindex="-1"><a class="header-anchor" href="#桥接原生容器组件" aria-hidden="true">#</a> 桥接原生容器组件</h3><ul><li>原生继承是<code>ViewGroupManager</code></li></ul><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StyleSheet<span class="token punctuation">,</span> requireNativeComponent<span class="token punctuation">,</span> ViewProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native&#39;</span>

<span class="token keyword">type</span> <span class="token class-name">NativeInfoViewGroupType</span> <span class="token operator">=</span>
  <span class="token operator">|</span> ViewProps
  <span class="token operator">|</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这部分是自定义的属性</span>
    <span class="token punctuation">}</span>

<span class="token keyword">const</span> NativeInfoViewGroup <span class="token operator">=</span> <span class="token generic-function"><span class="token function">requireNativeComponent</span><span class="token generic class-name"><span class="token operator">&lt;</span>NativeInfoViewGroupType<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  <span class="token string">&#39;NativeInfoViewGroup&#39;</span>
<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span>props<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> children <span class="token punctuation">}</span> <span class="token operator">=</span> props

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NativeInfoViewGroup</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>infoView<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NativeInfoViewGroup</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  infoView<span class="token operator">:</span> <span class="token punctuation">{</span>
    width<span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    flexDirection<span class="token operator">:</span> <span class="token string">&#39;row&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-navigation-使用" tabindex="-1"><a class="header-anchor" href="#react-navigation-使用" aria-hidden="true">#</a> React-Navigation 使用</h2><ul><li>安装</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装依赖</span>
<span class="token function">npm</span> <span class="token function">install</span> @react-navigation/native
<span class="token function">npm</span> <span class="token function">install</span> @react-navigation/stack
<span class="token function">npm</span> <span class="token function">install</span> @react-navigation/bottom-tabs

<span class="token function">npm</span> <span class="token function">install</span> react-native-gesture-handler
<span class="token function">npm</span> <span class="token function">install</span> react-native-screens
<span class="token function">npm</span> <span class="token function">install</span> react-native-safe-area-context

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),P=n("li",null,"使用路由",-1),D={href:"https://reactnative.dev/docs/navigation#react-navigation",target:"_blank",rel:"noopener noreferrer"},E=c(`<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NavigationContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@react-navigation/native&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStackNavigator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@react-navigation/stack&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> Stack <span class="token operator">=</span> <span class="token function">createStackNavigator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NavigationContainer</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stack.Navigator</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stack.Screen</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>Home<span class="token punctuation">&#39;</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>HomeScreen<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stack.Screen</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>Details<span class="token punctuation">&#39;</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>DetailsScreen<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stack.Navigator</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NavigationContainer</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>@react-navigation/bottom-tabs</li></ul><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createBottomTabNavigator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@react-navigation/bottom-tabs&#39;</span>

<span class="token keyword">const</span> Tab <span class="token operator">=</span> <span class="token function">createBottomTabNavigator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tab.Navigator</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tab.Screen</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>Home<span class="token punctuation">&#39;</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>HomeScreen<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tab.Screen</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>Settings<span class="token punctuation">&#39;</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>SettingsScreen<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tab.Navigator</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// MainTab.tsx</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StyleSheet<span class="token punctuation">,</span> Text<span class="token punctuation">,</span> View<span class="token punctuation">,</span> Image<span class="token punctuation">,</span> TouchableOpacity <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native&#39;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> createBottomTabNavigator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@react-navigation/bottom-tabs&#39;</span>
<span class="token comment">// 手机相册</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> launchImageLibrary <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native-image-picker&#39;</span>

<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;../home/Home&#39;</span>
<span class="token keyword">import</span> Shop <span class="token keyword">from</span> <span class="token string">&#39;../shop/Shop&#39;</span>
<span class="token keyword">import</span> Mine <span class="token keyword">from</span> <span class="token string">&#39;../mine/Mine&#39;</span>
<span class="token keyword">import</span> Message <span class="token keyword">from</span> <span class="token string">&#39;../message/Message&#39;</span>

<span class="token comment">// import icon_tab_home_normal from &#39;../../assets/icon_tab_home_normal.png&#39;;</span>
<span class="token comment">// import icon_tab_home_selected from &#39;../../assets/icon_tab_home_selected.png&#39;;</span>

<span class="token comment">// import icon_tab_shop_normal from &#39;../../assets/icon_tab_shop_normal.png&#39;;</span>
<span class="token comment">// import icon_tab_shop_selected from &#39;../../assets/icon_tab_shop_selected.png&#39;;</span>

<span class="token comment">// import icon_tab_message_normal from &#39;../../assets/icon_tab_message_normal.png&#39;;</span>
<span class="token comment">// import icon_tab_message_selected from &#39;../../assets/icon_tab_message_selected.png&#39;;</span>

<span class="token comment">// import icon_tab_mine_normal from &#39;../../assets/icon_tab_mine_normal.png&#39;;</span>
<span class="token comment">// import icon_tab_mine_selected from &#39;../../assets/icon_tab_mine_selected.png&#39;;</span>

<span class="token keyword">import</span> icon_tab_publish <span class="token keyword">from</span> <span class="token string">&#39;../../assets/icon_tab_publish.png&#39;</span>

<span class="token keyword">const</span> BottomTab <span class="token operator">=</span> <span class="token function">createBottomTabNavigator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 自定义 TabBar</span>
  <span class="token comment">// eslint-disable-next-line react/no-unstable-nested-components</span>
  <span class="token keyword">const</span> <span class="token function-variable function">RedBookTabBar</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> state<span class="token punctuation">,</span> descriptors<span class="token punctuation">,</span> navigation <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> routes<span class="token punctuation">,</span> index <span class="token punctuation">}</span> <span class="token operator">=</span> state
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>tabBarContainer<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>routes<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>route<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> i<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> <span class="token punctuation">{</span> options <span class="token punctuation">}</span> <span class="token operator">=</span> descriptors<span class="token punctuation">[</span>route<span class="token punctuation">.</span>key<span class="token punctuation">]</span>
          <span class="token comment">// 标题</span>
          <span class="token keyword">const</span> label <span class="token operator">=</span> options<span class="token punctuation">.</span>title
          <span class="token comment">// 是否选中</span>
          <span class="token keyword">const</span> isFoucsed <span class="token operator">=</span> index <span class="token operator">===</span> i

          <span class="token comment">// 发布按钮</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
              <span class="token operator">&lt;</span>TouchableOpacity
                key<span class="token operator">=</span><span class="token punctuation">{</span>label<span class="token punctuation">}</span>
                style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>tabItem<span class="token punctuation">}</span>
                onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                  <span class="token comment">// TODO: 选择手机相册</span>
                  <span class="token function">launchImageLibrary</span><span class="token punctuation">(</span>
                    <span class="token punctuation">{</span>
                      mediaType<span class="token operator">:</span> <span class="token string">&#39;photo&#39;</span><span class="token punctuation">,</span>
                      includeBase64<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                      maxHeight<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
                      maxWidth<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                      <span class="token comment">// console.log(&#39;response&#39;, response);</span>
                      <span class="token keyword">const</span> <span class="token punctuation">{</span> assets <span class="token punctuation">}</span> <span class="token operator">=</span> response
                      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>assets <span class="token operator">||</span> assets<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span>
                      <span class="token punctuation">}</span>
                      <span class="token keyword">const</span> <span class="token punctuation">{</span> uri<span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">,</span> fileName<span class="token punctuation">,</span> fileSize<span class="token punctuation">,</span> type <span class="token punctuation">}</span> <span class="token operator">=</span>
                        assets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

                      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;uri&#39;</span><span class="token punctuation">,</span> uri<span class="token punctuation">)</span>
                      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;width&#39;</span><span class="token punctuation">,</span> width<span class="token punctuation">)</span>
                      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;height&#39;</span><span class="token punctuation">,</span> height<span class="token punctuation">)</span>
                      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fileName&#39;</span><span class="token punctuation">,</span> fileName<span class="token punctuation">)</span>
                      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fileSize&#39;</span><span class="token punctuation">,</span> fileSize<span class="token punctuation">)</span>
                      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;type&#39;</span><span class="token punctuation">,</span> type<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                  <span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">}</span>
              <span class="token operator">&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Image</span></span>
                  <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>icon_tab_publish<span class="token punctuation">}</span></span>
                  <span class="token attr-name">source</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>icon_tab_publish<span class="token punctuation">}</span></span>
                <span class="token punctuation">/&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">TouchableOpacity</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TouchableOpacity</span></span>
              <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>label<span class="token punctuation">}</span></span>
              <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>tabItem<span class="token punctuation">}</span></span>
              <span class="token attr-name">onPress</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> event <span class="token operator">=</span> navigation<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;tabPress&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">target</span><span class="token operator">:</span> route<span class="token punctuation">.</span>key<span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isFoucsed <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>event<span class="token punctuation">.</span>defaultPrevented<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  navigation<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
            <span class="token punctuation">&gt;</span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Text</span></span>
                <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
                  isFoucsed
                    <span class="token operator">?</span> styles<span class="token punctuation">.</span>tabItemTextSelected
                    <span class="token operator">:</span> styles<span class="token punctuation">.</span>tabItemTextNormal
                <span class="token punctuation">}</span></span>
              <span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token punctuation">{</span>label<span class="token punctuation">}</span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Text</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">TouchableOpacity</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>root<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BottomTab.Navigator</span></span>
        <span class="token comment">// screenOptions={({ route }) =&gt; ({</span>
        <span class="token comment">//   // eslint-disable-next-line react/no-unstable-nested-components</span>
        <span class="token comment">//   tabBarIcon: ({ focused, color, size }) =&gt; {</span>
        <span class="token comment">//     let img = null;</span>
        <span class="token comment">//     if (route.name === &#39;Home&#39;) {</span>
        <span class="token comment">//       img = focused ? icon_tab_home_selected : icon_tab_home_normal;</span>
        <span class="token comment">//     } else if (route.name === &#39;Shop&#39;) {</span>
        <span class="token comment">//       img = focused ? icon_tab_shop_selected : icon_tab_shop_normal;</span>
        <span class="token comment">//     } else if (route.name === &#39;Message&#39;) {</span>
        <span class="token comment">//       img = focused</span>
        <span class="token comment">//         ? icon_tab_message_selected</span>
        <span class="token comment">//         : icon_tab_message_normal;</span>
        <span class="token comment">//     } else if (route.name === &#39;Mine&#39;) {</span>
        <span class="token comment">//       img = focused ? icon_tab_mine_selected : icon_tab_mine_normal;</span>
        <span class="token comment">//     }</span>

        <span class="token comment">//     return (</span>
        <span class="token comment">//       &lt;Image</span>
        <span class="token comment">//         source={img}</span>
        <span class="token comment">//         style={{ width: size, height: size, tintColor: color }}</span>
        <span class="token comment">//       /&gt;</span>
        <span class="token comment">//     );</span>
        <span class="token comment">//   },</span>
        <span class="token comment">//   tabBarActiveTintColor: &#39;#ff2442&#39;,</span>
        <span class="token comment">//   tabBarInactiveTintColor: &#39;#999999&#39;,</span>
        <span class="token comment">// })}</span>

        <span class="token comment">// eslint-disable-next-line react/no-unstable-nested-components</span>
        <span class="token attr-name">tabBar</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RedBookTabBar</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span></span>
      <span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BottomTab.Screen</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>Home<span class="token punctuation">&#39;</span></span>
          <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span></span>
          <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;首页&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">headerShown</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BottomTab.Screen</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>Shop<span class="token punctuation">&#39;</span></span>
          <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Shop<span class="token punctuation">}</span></span>
          <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;购物&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">headerShown</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BottomTab.Screen</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>Publish<span class="token punctuation">&#39;</span></span>
          <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Shop<span class="token punctuation">}</span></span>
          <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;发布&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">headerShown</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BottomTab.Screen</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>Message<span class="token punctuation">&#39;</span></span>
          <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Message<span class="token punctuation">}</span></span>
          <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;消息&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">headerShown</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BottomTab.Screen</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>Mine<span class="token punctuation">&#39;</span></span>
          <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Mine<span class="token punctuation">}</span></span>
          <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;我&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">headerShown</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">BottomTab.Navigator</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  root<span class="token operator">:</span> <span class="token punctuation">{</span>
    height<span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    background<span class="token operator">:</span> <span class="token string">&#39;#f5f5f5&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  tabBarContainer<span class="token operator">:</span> <span class="token punctuation">{</span>
    width<span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    height<span class="token operator">:</span> <span class="token number">52</span><span class="token punctuation">,</span>
    flexDirection<span class="token operator">:</span> <span class="token string">&#39;row&#39;</span><span class="token punctuation">,</span>
    alignItems<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
    backgroundColor<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  tabItem<span class="token operator">:</span> <span class="token punctuation">{</span>
    flex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    height<span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
    justifyContent<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
    alignItems<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  tabItemTextNormal<span class="token operator">:</span> <span class="token punctuation">{</span>
    fontSize<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
    color<span class="token operator">:</span> <span class="token string">&#39;#999999&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  tabItemTextSelected<span class="token operator">:</span> <span class="token punctuation">{</span>
    fontSize<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    color<span class="token operator">:</span> <span class="token string">&#39;#333&#39;</span><span class="token punctuation">,</span>
    fontWeight<span class="token operator">:</span> <span class="token string">&#39;bold&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  icon_tab_publish<span class="token operator">:</span> <span class="token punctuation">{</span>
    width<span class="token operator">:</span> <span class="token number">52</span><span class="token punctuation">,</span>
    height<span class="token operator">:</span> <span class="token number">52</span><span class="token punctuation">,</span>
    resizeMode<span class="token operator">:</span> <span class="token string">&#39;contain&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,5),B={href:"https://reactnative.cn/",target:"_blank",rel:"noopener noreferrer"},O={href:"https://reactnative.dev/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://coding.imooc.com/class/chapter/435.html#Anchor",target:"_blank",rel:"noopener noreferrer"},H={href:"https://coding.imooc.com/class/628.html",target:"_blank",rel:"noopener noreferrer"},M={href:"https://reactnavigation.org/",target:"_blank",rel:"noopener noreferrer"},W={href:"https://github.com/funnyzak/react-native-v2ex",target:"_blank",rel:"noopener noreferrer"},F={href:"https://blog.csdn.net/wayne214/article/details/82019083",target:"_blank",rel:"noopener noreferrer"},q={href:"https://blog.csdn.net/stu_365392777/article/details/126330892",target:"_blank",rel:"noopener noreferrer"},U={href:"https://juejin.cn/post/6844903567845769223#heading-15",target:"_blank",rel:"noopener noreferrer"};function G(X,Y){const e=l("CodeGroupItem"),o=l("CodeGroup"),p=l("ExternalLinkIcon");return u(),r("div",null,[d,a(o,null,{default:t(()=>[a(e,{title:"ThemeContext.tsx"},{default:t(()=>[m]),_:1}),a(e,{title:"RootView.js"},{default:t(()=>[v]),_:1}),a(e,{title:"PageView.js"},{default:t(()=>[b]),_:1}),a(e,{title:"Header.js"},{default:t(()=>[g]),_:1})]),_:1}),y,w,a(o,null,{default:t(()=>[a(e,{title:"withFloatButton.tsx"},{default:t(()=>[f]),_:1}),a(e,{title:"InfoView.js"},{default:t(()=>[h]),_:1})]),_:1}),x,a(o,null,{default:t(()=>[a(e,{title:"MemoPage.tsx"},{default:t(()=>[T]),_:1}),a(e,{title:"InfoView.tsx"},{default:t(()=>[V]),_:1}),a(e,{title:"InfoView2.tsx"},{default:t(()=>[S]),_:1}),a(e,{title:"ConsumeList.tsx"},{default:t(()=>[_]),_:1}),a(e,{title:"index.d.ts"},{default:t(()=>[R]),_:1})]),_:1}),I,j,a(o,null,{default:t(()=>[a(e,{title:"RefDemo.tsx"},{default:t(()=>[C]),_:1}),a(e,{title:"CustomInput.tsx"},{default:t(()=>[A]),_:1}),a(e,{title:"CustomInput2.tsx"},{default:t(()=>[L]),_:1})]),_:1}),N,n("ul",null,[P,n("li",null,[n("a",D,[s("React Navigation"),a(p)])])]),E,n("ul",null,[n("li",null,[n("a",B,[s("React Native 中文网"),a(p)])]),n("li",null,[n("a",O,[s("React Native 官网"),a(p)])]),n("li",null,[n("a",z,[s("跨平台应用 ReactNative+TypeScript 仿喜马拉雅开发 App"),a(p)])]),n("li",null,[n("a",H,[s("RN 从 0 到 1 系统精讲与小红书 APP 实战"),a(p)])]),n("li",null,[n("a",M,[s("react-navigation 官网"),a(p)])]),n("li",null,[n("a",W,[s("react-native-v2ex"),a(p)])]),n("li",null,[n("a",F,[s("React-Native 开发中常用的第三方控件持续更新"),a(p)])]),n("li",null,[n("a",q,[s("React Native 常用第三方组件汇总"),a(p)])]),n("li",null,[n("a",U,[s("开发 React Native APP —— 从改造官方 Demo 开始"),a(p)])])])])}const K=i(k,[["render",G],["__file","index.html.vue"]]);export{K as default};
