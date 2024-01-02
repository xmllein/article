import{_ as c,r as o,o as t,c as l,a as n,b as s,d as e,e as p}from"./app.26c798e2.js";const i="/article/images/docker/docker.png",r={},d=p(`<h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h2><h2 id="docker-命令" tabindex="-1"><a class="header-anchor" href="#docker-命令" aria-hidden="true">#</a> docker 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#docker 常用命令</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token comment"># 查看所有容器</span>
<span class="token function">docker</span> images <span class="token comment"># 查看所有镜像</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span> centos7 centos:7 /bin/bash <span class="token comment"># 创建容器</span>
<span class="token function">docker</span> start centos7 <span class="token comment"># 启动容器</span>
<span class="token function">docker</span> attach centos7 <span class="token comment"># 进入容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> centos7 /bin/bash <span class="token comment"># 进入容器</span>
<span class="token function">docker</span> stop centos7 <span class="token comment"># 停止容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> centos7 <span class="token comment"># 删除容器</span>
<span class="token function">docker</span> rmi centos:7 <span class="token comment"># 删除镜像</span>
<span class="token function">docker</span> <span class="token function">cp</span> centos7:/usr/local/nginx/conf/nginx.conf /usr/local/nginx/conf/nginx.conf <span class="token comment"># 从容器中拷贝文件到宿主机</span>
<span class="token function">docker</span> <span class="token function">cp</span> /usr/local/nginx/conf/nginx.conf centos7:/usr/local/nginx/conf/nginx.conf <span class="token comment"># 从宿主机拷贝文件到容器</span>
<span class="token function">docker</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;提交信息&quot;</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;作者&quot;</span> 容器ID 镜像名:版本号 <span class="token comment"># 提交容器为镜像</span>
<span class="token function">docker</span> save <span class="token parameter variable">-o</span> centos7.tar centos7 <span class="token comment"># 导出镜像</span>
<span class="token function">docker</span> load <span class="token parameter variable">-i</span> centos7.tar <span class="token comment"># 导入镜像</span>
<span class="token function">docker</span> <span class="token builtin class-name">export</span> <span class="token parameter variable">-o</span> centos7.tar centos7 <span class="token comment"># 导出容器</span>
<span class="token function">docker</span> <span class="token function">import</span> centos7.tar centos7 <span class="token comment"># 导入容器</span>
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> centos7:1.0 <span class="token builtin class-name">.</span> <span class="token comment"># 通过Dockerfile构建镜像</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 <span class="token parameter variable">--name</span> nginx centos7:1.0 <span class="token comment"># 后台运行容器</span>

<span class="token comment">## docker mysql</span>
<span class="token function">docker</span> pull mysql/mysql-server:latest <span class="token comment"># 拉取镜像</span>
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">--name</span> mysql <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token parameter variable">-d</span> mysql/mysql-server:latest <span class="token comment"># 启动容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql <span class="token function">bash</span> <span class="token comment"># 进入容器</span>
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> <span class="token comment"># 登录mysql</span>

<span class="token comment">## 远程连接授权</span>
GRANT ALL PRIVILEGES ON *.* TO <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>
<span class="token comment">## 或者</span>
GRANT ALL PRIVILEGES ON *.* TO <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> WITH GRANT OPTION<span class="token punctuation">;</span>
FLUSH PRIVILEGES<span class="token punctuation">;</span>


<span class="token comment">## 添加权限</span>
CREATE <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED BY <span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># 更改加密规则</span>
ALERT <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;password&#39;</span> PASSWORD EXPIRE NEVER<span class="token punctuation">;</span>

<span class="token comment">## 更新root密码</span>
ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
FLUSH PRIVILEGES<span class="token punctuation">;</span>

<span class="token comment">## docker redis</span>
<span class="token function">docker</span> pull redis:latest <span class="token comment"># 拉取镜像</span>
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token parameter variable">--name</span> redis <span class="token parameter variable">-d</span> redis:latest redis-server <span class="token parameter variable">--appendonly</span> <span class="token function">yes</span> <span class="token comment"># 启动容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> redis <span class="token function">bash</span> <span class="token comment"># 进入容器</span>
redis-cli <span class="token comment"># 登录redis</span>
<span class="token comment">## 密码登录</span>
redis-cli <span class="token parameter variable">-a</span> <span class="token number">123456</span> <span class="token comment"># 登录redis 123456为密码</span>
<span class="token comment">## 设置密码</span>
config <span class="token builtin class-name">set</span> requirepass <span class="token number">123456</span> <span class="token comment"># 设置密码为123456</span>
<span class="token comment">## 取消密码</span>
config <span class="token builtin class-name">set</span> requirepass <span class="token string">&quot;&quot;</span> <span class="token comment"># 取消密码</span>

<span class="token comment">#docker-compose 常用命令</span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span> <span class="token comment"># 启动容器</span>
<span class="token function">docker-compose</span> down <span class="token comment"># 停止容器</span>
<span class="token function">docker-compose</span> restart <span class="token comment"># 重启容器</span>
<span class="token function">docker-compose</span> <span class="token function">ps</span> <span class="token comment"># 查看容器</span>
<span class="token function">docker-compose</span> logs <span class="token parameter variable">-f</span> <span class="token comment"># 查看容器日志</span>
<span class="token function">docker-compose</span> <span class="token builtin class-name">exec</span> 容器名 <span class="token function">bash</span> <span class="token comment"># 进入容器</span>
<span class="token function">docker-compose</span> build <span class="token comment"># 构建镜像</span>
<span class="token function">docker-compose</span> pull <span class="token comment"># 拉取镜像</span>
<span class="token function">docker-compose</span> push <span class="token comment"># 推送镜像</span>
<span class="token function">docker-compose</span> images <span class="token comment"># 查看镜像</span>
<span class="token function">docker-compose</span> <span class="token function">rm</span> <span class="token comment"># 删除容器</span>
<span class="token function">docker-compose</span> stop <span class="token comment"># 停止容器</span>
<span class="token function">docker-compose</span> start <span class="token comment"># 启动容器</span>
<span class="token function">docker-compose</span> <span class="token function">kill</span> <span class="token comment"># 杀死容器</span>
<span class="token function">docker-compose</span> down <span class="token comment"># 停止容器</span>
<span class="token function">docker-compose</span> restart <span class="token comment"># 重启容器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-mysql" tabindex="-1"><a class="header-anchor" href="#docker-mysql" aria-hidden="true">#</a> docker mysql</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull mysql/mysql-server
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> mysql-local <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token parameter variable">-d</span> mysql/mysql-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>进入到 docker 容器中修改连接权限，否则只能本地连接</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql-local <span class="token function">bash</span>
<span class="token comment"># 进入mysql命令行</span>
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p123456</span>
<span class="token comment"># 授权</span>
use mysql<span class="token punctuation">;</span>
<span class="token comment"># 允许root 通过localhost连接数据库</span>
update user <span class="token builtin class-name">set</span> <span class="token function">host</span> <span class="token operator">=</span> <span class="token string">&quot;%&quot;</span> where <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># 修改密码</span>
ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;admin_123&#39;</span><span class="token punctuation">;</span>

ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;admin_123&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># 查看数据用户密码格式</span>
use mysql<span class="token punctuation">;</span>
<span class="token keyword">select</span> user, host, plugin from user<span class="token punctuation">;</span>

<span class="token comment"># 刷新权限</span>
flush privileges<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动-phpadmin-容器" tabindex="-1"><a class="header-anchor" href="#启动-phpadmin-容器" aria-hidden="true">#</a> 启动 phpadmin 容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">docker</span> run <span class="token parameter variable">--name</span> phpmyadmin <span class="token parameter variable">-d</span> <span class="token parameter variable">--link</span> mysql-local:db <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 phpmyadmin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="docker-mongodb" tabindex="-1"><a class="header-anchor" href="#docker-mongodb" aria-hidden="true">#</a> docker mongodb</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载 mongodb 镜像</span>
<span class="token function">docker</span> pull mongo:4.4
<span class="token comment"># 不需要密码</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> mongo-local <span class="token parameter variable">-p</span> <span class="token number">27017</span>:27017 <span class="token parameter variable">-d</span> mongo:4.4
<span class="token comment"># 需要密码</span>
<span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">--name</span> mongo <span class="token parameter variable">-p</span> <span class="token number">27017</span>:27017 mongo:4.4 <span class="token parameter variable">--auth</span>

<span class="token comment"># 查看容器</span>
<span class="token function">docker</span> <span class="token function">ps</span>
<span class="token comment"># 通过容器名称进入容器内部，并以admin账号登陆mongo</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mongo mongo admin
<span class="token comment"># 容器内部执行指令</span>
db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span> user:<span class="token string">&#39;root&#39;</span>,pwd:<span class="token string">&#39;123456&#39;</span>,roles:<span class="token punctuation">[</span> <span class="token punctuation">{</span> role:<span class="token string">&#39;root&#39;</span>, db: <span class="token string">&#39;admin&#39;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 连接账户</span>
db.auth<span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span>, <span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-redis" tabindex="-1"><a class="header-anchor" href="#docker-redis" aria-hidden="true">#</a> docker redis</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载 redis 镜像</span>
<span class="token function">docker</span> pull redis:latest

<span class="token comment"># 启动容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token parameter variable">--name</span> redis <span class="token parameter variable">-d</span> redis:latest redis-server <span class="token parameter variable">--appendonly</span> <span class="token function">yes</span>
<span class="token comment">## 或者</span>
<span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">--name</span> redis-test <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 redis

<span class="token comment"># 进入容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> redis <span class="token function">bash</span>
<span class="token comment"># 登录redis</span>
redis-cli <span class="token parameter variable">-h</span> <span class="token number">192.168</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6379</span> <span class="token parameter variable">-a</span> <span class="token number">123456</span> <span class="token parameter variable">-u</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图文" tabindex="-1"><a class="header-anchor" href="#图文" aria-hidden="true">#</a> 图文</h2><p><img src="`+i+'" alt="docker 安装"></p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',16),m={href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.bilibili.com/video/BV1Kg411D78F?p=1&vd_source=c5abf1ba032ca00c06ebba96e3ff445e",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.yuque.com/wukong-zorrm/xwas40",target:"_blank",rel:"noopener noreferrer"};function b(h,f){const a=o("ExternalLinkIcon");return t(),l("div",null,[d,n("ul",null,[n("li",null,[n("a",m,[s("Docker"),e(a)]),s(" 简介： Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从 Apache2.0 协议开源。 Docker 可以让开发者打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口。")]),n("li",null,[n("a",k,[s("docker hub"),e(a)]),s(" ：Docker Hub 是一个云服务，开发者可以共享或者管理容器镜像，也可以通过它来构建容器镜像，进行镜像仓库的管理等。")]),n("li",null,[n("a",u,[s("docker 一小时入门精讲课程(合集)"),e(a)])]),n("li",null,[n("a",v,[s("docker 一小时入门教程"),e(a)])])])])}const _=c(r,[["render",b],["__file","index.html.vue"]]);export{_ as default};
