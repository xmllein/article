import{_ as i,r as l,o as c,c as t,a as n,b as a,d as e,e as p}from"./app.26c798e2.js";const r={},m=p(`<h2 id="linux-常用命令" tabindex="-1"><a class="header-anchor" href="#linux-常用命令" aria-hidden="true">#</a> Linux 常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看防火墙状态</span>
firewall-cmd <span class="token parameter variable">--state</span>
<span class="token comment"># 启动防火墙</span>
systemctl start firewalld.service
<span class="token comment"># 开放端口</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">8080</span>/tcp <span class="token parameter variable">--permanent</span>
<span class="token comment"># 重启防火墙</span>
systemctl restart firewalld.service
<span class="token comment"># 重新加载配置</span>
firewall-cmd <span class="token parameter variable">--reload</span>

<span class="token comment"># 关机，重启</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-h</span> now <span class="token comment"># 立即关机</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-r</span> now <span class="token comment"># 立即重启</span>

<span class="token comment"># 查看系统版本</span>
<span class="token function">cat</span> /etc/redhat-release

<span class="token comment"># 查看内核版本</span>
<span class="token function">uname</span> <span class="token parameter variable">-r</span>

<span class="token comment"># 目录管理</span>
<span class="token function">ls</span>    <span class="token comment"># list的缩写，显示当前目录下的文件或文件夹</span>
<span class="token function">ls</span> <span class="token parameter variable">-a</span> <span class="token comment">#  显示当前目录下的文件或文件夹,包括隐藏文件</span>
<span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token comment"># 查看文件详细信息，文件权限-文件所属人-文件所属组-文件大小(字节数)-文件最后修改时间</span>

<span class="token builtin class-name">cd</span> <span class="token comment">#切换所在目录（change directory）：</span>
~ <span class="token comment">#家目录</span>
- <span class="token comment">#（中划线）上次的目录</span>
<span class="token builtin class-name">.</span> <span class="token comment">#当前目录</span>
<span class="token punctuation">..</span> <span class="token comment">#上级目录</span>


<span class="token comment"># 目录操作</span>
<span class="token function">mkdir</span> <span class="token comment">#目录名  创建目录（make directory）</span>
<span class="token function">rmdir</span> <span class="token comment">#目录名  删除空目录（remove empty directory）</span>

<span class="token function">cp</span> <span class="token comment">#复制目录或文件 copy</span>
<span class="token function">cp</span> <span class="token comment">#[源文件或者目录] [目标文件]</span>

<span class="token function">mv</span> <span class="token comment">#移动文件或者改名 move</span>
<span class="token function">mv</span> <span class="token comment">#[源文件或者目录] [目标文件]</span>


<span class="token function">rm</span> <span class="token comment">#文件或者目录  删除文件或者空目录</span>
  <span class="token parameter variable">-r</span> <span class="token comment">#删除目录</span>
  <span class="token parameter variable">-f</span> <span class="token comment">#强制删除</span>
  <span class="token parameter variable">-rf</span> <span class="token comment">#文件或者目录, 递归强制删除所有目录</span>

<span class="token comment"># 查看文件/文件夹，当前所在的路径</span>
<span class="token builtin class-name">pwd</span>


<span class="token comment"># 文本操作</span>
<span class="token function">cat</span> 文件名      <span class="token comment">#concatenate的缩写。把文件输出到控制台(不适用大文件)</span>
<span class="token function">touch</span> fileName <span class="token comment"># 创建文件</span>
<span class="token function">head</span> <span class="token parameter variable">-n</span> 文件名 <span class="token comment"># n 为任意数字，表示可以查看前 n 行</span>
<span class="token function">tail</span> <span class="token parameter variable">-n</span> 文件名 <span class="token comment"># n 为任意数字，表示可以查看后 n 行</span>

<span class="token comment"># grep</span>
<span class="token comment"># grep 命令用于查找文件里符合条件的字符串。</span>
<span class="token comment"># grep [-acinv] [--color=auto] &#39;查找字符串&#39; filename</span>

<span class="token function">grep</span> <span class="token parameter variable">-i</span> <span class="token comment"># 忽略大小写</span>
<span class="token function">grep</span> <span class="token parameter variable">-n</span> <span class="token comment"># 显示行号</span>
<span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token comment"># 反向选择，即显示不包含匹配文本的所有行</span>
<span class="token function">grep</span> <span class="token parameter variable">-r</span> <span class="token comment"># 递归查找</span>
<span class="token function">grep</span> <span class="token parameter variable">-w</span> <span class="token comment"># 精确匹配</span>
<span class="token function">grep</span> <span class="token parameter variable">-l</span> <span class="token comment"># 只列出匹配的文件名</span>
<span class="token function">grep</span> <span class="token parameter variable">-c</span> <span class="token comment"># 统计匹配的行数</span>
<span class="token function">grep</span> <span class="token parameter variable">-o</span> <span class="token comment"># 只输出匹配到的部分</span>


<span class="token comment"># 压缩与解压</span>
<span class="token comment"># 将/etc文件夹中的文件归档到文件etc.tar（并不会进行压缩</span>
<span class="token function">tar</span> <span class="token parameter variable">-cvf</span> /mydata/etc.tar /etc
<span class="token comment"># 用gzip压缩文件夹/etc中的文件到文件etc.tar.gz：</span>
<span class="token function">tar</span> <span class="token parameter variable">-zcvf</span> /mydata/etc.tar.gz /etc
<span class="token comment"># 用bzip2压缩文件夹/etc到文件/etc.tar.bz2：</span>
<span class="token function">tar</span> <span class="token parameter variable">-jcvf</span> /mydata/etc.tar.bz2 /etc
<span class="token comment"># 解压文件到当前目录（gzip）</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> /mydata/etc.tar.gz


<span class="token comment"># cat 连接文件并打印输出</span>
<span class="token comment"># 查看文件内容</span>
<span class="token function">cat</span> ~/.ssh/id_rsa.pub
<span class="token comment"># 清空 index.html 内容：</span>
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> index.html
<span class="token comment"># 把 index.html 的内容写入 second.html</span>
<span class="token function">cat</span> index.html <span class="token operator">&gt;</span> second.html
<span class="token comment"># 把 index.html 的内容追加写入 second.html</span>
<span class="token function">cat</span> index.html <span class="token operator">&gt;&gt;</span> second.html
<span class="token comment"># 把 index.html 和 second.html 追加写入 third.html：</span>
<span class="token function">cat</span> index.html second.html <span class="token operator">&gt;&gt;</span> third.html

<span class="token comment"># ssh 命令</span>
<span class="token function">ssh</span> <span class="token parameter variable">-p</span> <span class="token number">22</span>
<span class="token function">ssh</span> host@ip <span class="token parameter variable">-p</span> <span class="token number">22</span>

<span class="token comment"># scp 命令</span>
<span class="token comment"># 从远程服务器下载文件到本地</span>
<span class="token function">scp</span> <span class="token parameter variable">-P</span> <span class="token number">22</span> <span class="token parameter variable">-r</span> /home/xxx root@ip:/home/xxx
<span class="token comment"># 从本地上传文件到远程服务器</span>
<span class="token function">scp</span> <span class="token parameter variable">-P</span> <span class="token number">22</span> <span class="token parameter variable">-r</span> root@ip:/home/xxx /home/xxx


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># nginx常用操作</span>
nginx <span class="token parameter variable">-s</span> reopen 	<span class="token comment">#重启Nginx</span>
nginx <span class="token parameter variable">-s</span> reload 	<span class="token comment">#重新加载Nginx配置文件，然后以优雅的方式重启Nginx</span>
nginx <span class="token parameter variable">-s</span> stop   	<span class="token comment">#强制停止Nginx服务</span>
nginx <span class="token parameter variable">-s</span> quit   	<span class="token comment">#优雅地停止Nginx服务（即处理完所有请求后再停止服务）</span>
nginx <span class="token parameter variable">-h</span> 		<span class="token comment">#打开帮助信息</span>
nginx <span class="token parameter variable">-v</span> 		<span class="token comment">#显示版本信息并退出</span>
nginx <span class="token parameter variable">-V</span>		<span class="token comment">#显示版本和配置选项信息，然后退出</span>
nginx <span class="token parameter variable">-t</span>		<span class="token comment">#检测配置文件是否有语法错误，然后退出</span>
nginx <span class="token parameter variable">-T</span>	 	<span class="token comment">#检测配置文件是否有语法错误，转储并退出</span>
nginx <span class="token parameter variable">-q</span> 	  	<span class="token comment">#在检测配置文件期间屏蔽非错误信息</span>
nginx <span class="token parameter variable">-p</span> prefix   	<span class="token comment">#设置前缀路径(默认是:/usr/share/nginx/)</span>
nginx <span class="token parameter variable">-c</span> filename	<span class="token comment">#设置配置文件(默认是:/etc/nginx/nginx.conf)</span>
nginx <span class="token parameter variable">-g</span> directives 	<span class="token comment">#设置配置文件外的全局指令</span>
<span class="token function">killall</span> nginx		<span class="token comment">#杀死所有nginx进程</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> redis</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># redis 数据库操作</span>
<span class="token comment"># 进入数据库</span>
redis-cli <span class="token parameter variable">-h</span> <span class="token function">host</span> <span class="token parameter variable">-p</span> port <span class="token parameter variable">-a</span> password
<span class="token comment"># 查看所有key</span>
keys *
<span class="token comment"># 查看key的类型</span>
<span class="token builtin class-name">type</span> key
<span class="token comment"># 查看key的值</span>
get key
<span class="token comment"># 设置key的值</span>
<span class="token builtin class-name">set</span> key value
<span class="token comment"># 删除key</span>
del key
<span class="token comment"># 查看当前数据库key的数量</span>
dbsize key
<span class="token comment"># hset</span>
hset key field value
<span class="token comment"># hget</span>
hget key field

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,7),o={href:"https://www.bilibili.com/video/BV1rG4y1e7BQ/?spm_id_from=333.999.0.0&vd_source=c5abf1ba032ca00c06ebba96e3ff445e",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.yuque.com/wukong-zorrm/cql6cz/zwbl2x",target:"_blank",rel:"noopener noreferrer"};function v(u,b){const s=l("ExternalLinkIcon");return c(),t("div",null,[m,n("ul",null,[n("li",null,[n("a",o,[a("nginx 一小时入门精讲课程"),e(s)])]),n("li",null,[n("a",d,[a("nginx 一小时入门精讲课程 笔记"),e(s)])])])])}const h=i(r,[["render",v],["__file","index.html.vue"]]);export{h as default};
