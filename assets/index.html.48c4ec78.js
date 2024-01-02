import{_ as l,r,o as d,c,a as n,b as s,d as a,e as i}from"./app.26c798e2.js";const o={},t=i(`<h2 id="vue-项目部署" tabindex="-1"><a class="header-anchor" href="#vue-项目部署" aria-hidden="true">#</a> Vue 项目部署</h2><h3 id="_1-项目打包" tabindex="-1"><a class="header-anchor" href="#_1-项目打包" aria-hidden="true">#</a> 1. 项目打包</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 生成 dist 目录</span>
<span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拉取镜像" tabindex="-1"><a class="header-anchor" href="#拉取镜像" aria-hidden="true">#</a> 拉取镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull nginx:1.17.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建-default-conf" tabindex="-1"><a class="header-anchor" href="#创建-default-conf" aria-hidden="true">#</a> 创建 default.conf</h3>`,6),p={href:"https://github.com/ant-design/ant-design-pro/issues/1365",target:"_blank",rel:"noopener noreferrer"},u=i(`<div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>
server {
    listen       80;
    server_name  localhost;
    # charset koi8-r;
    access_log  /var/log/nginx/host.access.log  main;
    error_log  /var/log/nginx/error.log  error;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    # api 接口代理
    location /api {
        proxy_pass http://localhost:3000;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建-dockerfile" tabindex="-1"><a class="header-anchor" href="#创建-dockerfile" aria-hidden="true">#</a> 创建 Dockerfile</h3><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># 基础镜像</span>
<span class="token instruction"><span class="token keyword">FROM</span> nginx:1.17.8</span>
<span class="token comment"># 拷贝文件</span>
<span class="token instruction"><span class="token keyword">COPY</span> ./dist /usr/share/nginx/html</span>
<span class="token comment"># 拷贝配置文件</span>
<span class="token instruction"><span class="token keyword">COPY</span> ./default.conf /etc/nginx/conf.d/default.conf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建镜像" tabindex="-1"><a class="header-anchor" href="#创建镜像" aria-hidden="true">#</a> 创建镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> vue-app:1.0 <span class="token builtin class-name">.</span>

<span class="token comment"># 查看镜像命令</span>
<span class="token function">docker</span> images <span class="token function">ls</span> <span class="token operator">|</span> <span class="token function">grep</span> vue-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行容器" tabindex="-1"><a class="header-anchor" href="#运行容器" aria-hidden="true">#</a> 运行容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 vue-app:1.0

<span class="token comment"># 查看运行的容器id</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">grep</span> vue-app

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署-node-项目" tabindex="-1"><a class="header-anchor" href="#部署-node-项目" aria-hidden="true">#</a> 部署 node 项目</h2><h3 id="创建-dockerfile-1" tabindex="-1"><a class="header-anchor" href="#创建-dockerfile-1" aria-hidden="true">#</a> 创建 Dockerfile</h3><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> node:latest</span>
<span class="token comment"># 创建项目目录</span>
<span class="token instruction"><span class="token keyword">RUN</span> mkdir -p /usr/src/app</span>

<span class="token comment"># 拷贝文件</span>
<span class="token instruction"><span class="token keyword">COPY</span> db /usr/src/app/db</span>
<span class="token instruction"><span class="token keyword">COPY</span> app.js /usr/src/app</span>
<span class="token instruction"><span class="token keyword">COPY</span> package.json /usr/src/app/package.json</span>
<span class="token instruction"><span class="token keyword">COPY</span> msyql.js /usr/src/app/mysql.js</span>

<span class="token comment"># 设置工作目录</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /usr/src/app</span>

<span class="token comment"># 安装依赖</span>
<span class="token instruction"><span class="token keyword">RUN</span> npm install</span>

<span class="token comment"># 暴露端口</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 3000</span>

<span class="token comment"># 启动项目</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;npm&quot;</span>, <span class="token string">&quot;start&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构建镜像" tabindex="-1"><a class="header-anchor" href="#构建镜像" aria-hidden="true">#</a> 构建镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> node-app:1.0 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="运行容器-1" tabindex="-1"><a class="header-anchor" href="#运行容器-1" aria-hidden="true">#</a> 运行容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">3000</span>:3000 node-app:1.0
<span class="token comment"># docker ps -a | grep node-app   可以查看运行的容器id</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,15),v={href:"https://juejin.cn/post/7139724794672447518",target:"_blank",rel:"noopener noreferrer"},m={href:"https://juejin.cn/post/7204646143543033916",target:"_blank",rel:"noopener noreferrer"},h={href:"https://juejin.cn/post/7165515526947471391",target:"_blank",rel:"noopener noreferrer"},b={href:"https://juejin.cn/post/6844904022659301383",target:"_blank",rel:"noopener noreferrer"};function k(g,f){const e=r("ExternalLinkIcon");return d(),c("div",null,[t,n("ul",null,[n("li",null,[n("a",p,[s("前端重定向，index.html 文件被浏览器缓存，导致整个应用都是旧的"),a(e)])])]),u,n("ul",null,[n("li",null,[n("a",v,[s("写给前端的 docker 使用指南"),a(e)])]),n("li",null,[n("a",m,[s("使用 Docker + Nginx 部署前端项目"),a(e)])]),n("li",null,[n("a",h,[s("基于 docker 部署微前端项目的入门实践指南"),a(e)])]),n("li",null,[n("a",b,[s("Docker 部署前端 vue+node（前端入门篇）"),a(e)])])])])}const _=l(o,[["render",k],["__file","index.html.vue"]]);export{_ as default};
