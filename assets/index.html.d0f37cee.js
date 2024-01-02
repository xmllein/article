import{_ as i,r as l,o as t,c,a as n,b as a,d as e,e as r}from"./app.26c798e2.js";const o="/article/images/pang/git.png",d={},p=r(`<h2 id="常用的-git-命令" tabindex="-1"><a class="header-anchor" href="#常用的-git-命令" aria-hidden="true">#</a> 常用的 Git 命令</h2><h2 id="查看历史" tabindex="-1"><a class="header-anchor" href="#查看历史" aria-hidden="true">#</a> 查看历史</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 每个提交在一行内显示</span>
<span class="token function">git</span> log <span class="token parameter variable">--oneline</span>

<span class="token comment"># 在所有提交日志中搜索包含「homepage」的提交</span>
<span class="token function">git</span> log <span class="token parameter variable">--all</span> <span class="token parameter variable">--grep</span><span class="token operator">=</span><span class="token string">&#39;homepage&#39;</span>

<span class="token function">git</span> log <span class="token parameter variable">--grep</span><span class="token operator">=</span><span class="token string">&quot;homepage&quot;</span>

<span class="token comment"># 获取某人的提交日志</span>
<span class="token function">git</span> log <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">&quot;tanyinping&quot;</span>

<span class="token comment"># 查看今日的提交</span>
<span class="token function">git</span> log <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token string">&quot;0 am&quot;</span>

<span class="token comment"># 获取所有的操作历史，包括被删除的</span>
<span class="token function">git</span> reflog

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重置本地仓库" tabindex="-1"><a class="header-anchor" href="#重置本地仓库" aria-hidden="true">#</a> 重置本地仓库</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">git</span> fetch origin

<span class="token function">git</span> checkout master

<span class="token comment"># 重置本地仓库，将本地仓库的内容恢复到和远程仓库一样</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> origin/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="操作分支" tabindex="-1"><a class="header-anchor" href="#操作分支" aria-hidden="true">#</a> 操作分支</h2><h3 id="查看分支" tabindex="-1"><a class="header-anchor" href="#查看分支" aria-hidden="true">#</a> 查看分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-v</span>

<span class="token comment"># 分支信息更加详细，可以看到分支是 origin 或 upstream</span>
<span class="token function">git</span> branch <span class="token parameter variable">-vv</span>

<span class="token comment"># 查看本地和远程分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>

<span class="token comment"># 查看所有远程分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-r</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新建分支" tabindex="-1"><a class="header-anchor" href="#新建分支" aria-hidden="true">#</a> 新建分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 新建分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> books

<span class="token comment"># 新建分支并切换到该分支</span>
<span class="token function">git</span> push origin books
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除分支" tabindex="-1"><a class="header-anchor" href="#删除分支" aria-hidden="true">#</a> 删除分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除本地分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> books

<span class="token comment"># 删除没有被合并的分支要用 -D</span>
<span class="token function">git</span> branch <span class="token parameter variable">-D</span> books

<span class="token comment"># 删除远程分支</span>
<span class="token function">git</span> push origin <span class="token parameter variable">-d</span> books
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并分支" tabindex="-1"><a class="header-anchor" href="#合并分支" aria-hidden="true">#</a> 合并分支</h3><p>将 <code>develop</code> 合入 <code>master</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 拉取远程 develop 分支</span>
<span class="token function">git</span> pull origin develop

<span class="token comment"># 切换到 master 分支</span>
<span class="token function">git</span> checkout master

<span class="token comment"># 拉取远程 master 分支</span>
<span class="token function">git</span> pull origin master

<span class="token comment"># 将 develop 分支合入 master 分支</span>
<span class="token function">git</span> merge develop

<span class="token comment"># 将 master 分支推送到远程</span>
<span class="token function">git</span> push origin master

<span class="token comment"># 切换到 develop 分支</span>
<span class="token function">git</span> checkout develop

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重命名分支" tabindex="-1"><a class="header-anchor" href="#重命名分支" aria-hidden="true">#</a> 重命名分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重命名本地分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-m</span> books books2

<span class="token comment"># 重命名远程分支</span>
<span class="token function">git</span> push origin :books books2

<span class="token function">git</span> push origin <span class="token parameter variable">-u</span> books2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提交代码" tabindex="-1"><a class="header-anchor" href="#提交代码" aria-hidden="true">#</a> 提交代码</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看当前状态</span>
<span class="token function">git</span> status

<span class="token comment"># 提交代码</span>
<span class="token function">git</span> commit –a –m <span class="token string">&quot;&quot;</span>
<span class="token function">git</span> commit –am <span class="token string">&quot;&quot;</span>

<span class="token comment"># 修改commit信息</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;add new file&quot;</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token comment"># 直接编辑提交记录</span>

<span class="token comment"># 清除当前目录下所有没add的修改</span>
<span class="token function">git</span> checkout <span class="token builtin class-name">.</span>
<span class="token function">git</span> checkout -- <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>

<span class="token comment"># git format-patch 对某次提交生成patch，方便发送给其他人员进行参考或者同步</span>
<span class="token function">git</span> format-patch <span class="token parameter variable">-n</span> HEAD^ <span class="token comment"># 生成path</span>
<span class="token function">git</span> am *.patch <span class="token comment"># 同步path</span>
<span class="token function">git</span> am <span class="token parameter variable">--abort</span> <span class="token comment"># 恢复原状</span>

<span class="token comment"># git commit之后，想撤销 commit，撤回后保留更改</span>
<span class="token function">git</span> reset <span class="token parameter variable">--soft</span> HEAD^

<span class="token comment"># git commit之后，想撤销 commit，撤回后不保留更改</span>
<span class="token function">git</span> log <span class="token parameter variable">--oneline</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^

<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD@<span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token operator">&lt;</span>commitHash<span class="token operator">&gt;</span>

<span class="token function">git</span> push <span class="token parameter variable">-f</span> 删除远程
<span class="token comment"># HEAD^的意思是上一个版本，也可以写成HEAD~1。如果你进行了 2 次 commit，</span>
<span class="token comment"># 想都撤回，可以使用HEAD~2</span>
<span class="token comment"># --soft：不删除工作空间改动代码，撤销 commit，不撤销git add .</span>
<span class="token comment"># --hard：删除工作空间改动代码，撤销 commit，撤销git add .,</span>
<span class="token comment"># 注意完成这个操作后，就恢复到了上一次的 commit 状态。</span>


<span class="token comment"># revert 针对某一次commit的反向操作，会生成一次空的commit</span>
<span class="token function">git</span> revert <span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>commitHash<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切换到之前分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="拉取和推送" tabindex="-1"><a class="header-anchor" href="#拉取和推送" aria-hidden="true">#</a> 拉取和推送</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 拉取 remote origin 对应的远程仓库的 master 分支合并到本地的 test 分支</span>
<span class="token function">git</span> pull origin master:test

<span class="token comment"># 不获取tags</span>
<span class="token function">git</span> fetch --no-tags
<span class="token function">git</span> config remote origin.tagOpt --no-tags

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意： <code>pull 和 fetch 拉去新的更新，区别是 pull 会和当前分支合并，fetch 不会</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 推送并设置默认远程分支</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master

<span class="token comment"># 强制推送，就算本地和远程有差异也推上去</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> origin master

<span class="token comment"># 删除远程主机的 develop 分支</span>
<span class="token function">git</span> push origin <span class="token parameter variable">-d</span> develop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标签" tabindex="-1"><a class="header-anchor" href="#标签" aria-hidden="true">#</a> 标签</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出所有标签</span>
<span class="token function">git</span> tag

<span class="token comment"># 列出所有标签，按时间排序</span>
<span class="token function">git</span> tag <span class="token parameter variable">-l</span> <span class="token parameter variable">-n1</span> <span class="token parameter variable">--sort</span><span class="token operator">=</span>-v:refname

<span class="token comment"># 打标签</span>
<span class="token function">git</span> tag <span class="token parameter variable">-a</span> v1.0 <span class="token parameter variable">-m</span> <span class="token string">&quot;my version 1.0&quot;</span>

<span class="token comment"># 推送标签到远程</span>
<span class="token function">git</span> push origin v1.0

<span class="token comment"># 追加标签</span>
<span class="token function">git</span> tag <span class="token parameter variable">-a</span> v0.9 85fc7e7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="暂存" tabindex="-1"><a class="header-anchor" href="#暂存" aria-hidden="true">#</a> 暂存</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 暂存当前修改</span>
<span class="token function">git</span> stash

<span class="token comment"># 查看暂存列表</span>
<span class="token function">git</span> stash list

<span class="token comment"># 弹出暂存</span>
<span class="token function">git</span> stash pop

<span class="token comment"># 清空暂存</span>
<span class="token function">git</span> stash <span class="token function">clear</span>


<span class="token comment"># 保存所有正在追踪的文件</span>
<span class="token function">git</span> stash save <span class="token string">&quot;日志信息&quot;</span>

<span class="token comment"># 获取并删除暂存项</span>
<span class="token function">git</span> stash pop stash@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>

<span class="token comment"># 获取暂存项</span>
<span class="token function">git</span> stash apply stash@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>

<span class="token comment"># 删除暂存项</span>
<span class="token function">git</span> stash drop stash@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取上游代码" tabindex="-1"><a class="header-anchor" href="#获取上游代码" aria-hidden="true">#</a> 获取上游代码</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token parameter variable">-v</span>

<span class="token comment"># 添加上游代码</span>
<span class="token function">git</span> remote <span class="token function">add</span> <span class="token operator">&lt;</span>remote name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>
<span class="token function">git</span> remote <span class="token function">add</span> upstream https://github.com/xxx/xxx.git

<span class="token comment"># 从远程存储库中获取更改，但不和本地的合并</span>
<span class="token function">git</span> fetch upstream

<span class="token comment"># 从特定分支获取更改</span>
<span class="token function">git</span> fetch <span class="token operator">&lt;</span>remote name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>branch name<span class="token operator">&gt;</span>

<span class="token comment"># 从远程存储库中获取更改，并与本地的合并</span>
<span class="token function">git</span> merge upstream/master

<span class="token comment"># 删除远程仓库</span>
<span class="token function">git</span> remote <span class="token function">rm</span> <span class="token operator">&lt;</span>remote name<span class="token operator">&gt;</span>

<span class="token comment"># 重命名远程仓库</span>
<span class="token function">git</span> remote <span class="token function">rename</span> <span class="token operator">&lt;</span>old name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>new name<span class="token operator">&gt;</span>


<span class="token comment"># 修改 url</span>
<span class="token function">git</span> remote set-url <span class="token parameter variable">-add</span> <span class="token operator">&lt;</span>remote name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>
<span class="token function">git</span> remote set-url <span class="token parameter variable">--add</span> github https:/xxxx.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="清理" tabindex="-1"><a class="header-anchor" href="#清理" aria-hidden="true">#</a> 清理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 移除远程仓库上不存在的分支</span>
<span class="token function">git</span> fetch <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cherry-pick" tabindex="-1"><a class="header-anchor" href="#cherry-pick" aria-hidden="true">#</a> cherry-pick</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 经常需要从一个分支选择性的合并 commit 到另一个分支，可使用 cherry-pick 实现：</span>
<span class="token comment"># 从其他分支获取提交</span>
<span class="token function">git</span> cherry-pick <span class="token operator">&lt;</span>commitHash<span class="token operator">&gt;</span>

<span class="token comment">#  转移多个提交</span>
<span class="token function">git</span> cherry-pick <span class="token operator">&lt;</span>commitHash<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>commitHash<span class="token operator">&gt;</span>

<span class="token comment"># 从其他分支获取多个提交</span>
<span class="token function">git</span> cherry-pick <span class="token operator">&lt;</span>commitHash<span class="token operator">&gt;</span><span class="token punctuation">..</span><span class="token operator">&lt;</span>commitHash<span class="token operator">&gt;</span>

<span class="token comment"># 从其他分支获取多个提交</span>
<span class="token function">git</span> cherry-pick <span class="token operator">&lt;</span>commitHash<span class="token operator">&gt;</span>^<span class="token punctuation">..</span><span class="token operator">&lt;</span>commitHash<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码冲突" tabindex="-1"><a class="header-anchor" href="#代码冲突" aria-hidden="true">#</a> 代码冲突</h2><p>用户解决代码冲突后，第一步将修改的文件重新加入暂存区（git add .），第二步使用下面的命令，让 Cherry pick 过程继续执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> cherry-pick <span class="token parameter variable">--continue</span>

<span class="token comment"># --abort 发生代码冲突后，放弃合并，回到操作前的样子</span>
<span class="token comment"># --quit 发生代码冲突后，退出 Cherry pick，但是不回到操作前的样子</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 第一次配置</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;xxx&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;xxx@qq.com&quot;</span>

<span class="token comment"># 克隆某个项目</span>
<span class="token function">git</span> clone ssh://git@code.xxxxxx.git

<span class="token comment"># 如果代码已经准备好推送到仓库，请在终端中执行该命令</span>
<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;first commit&quot;</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin ssh://git@code.xxxxxx.git
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master

<span class="token comment"># 如果你的代码已经由 Git 跟踪，然后设置这个仓库作为你的 origin 推送</span>
<span class="token function">git</span> remote set-url origin ssh://git@code.xxxx.git
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master
<span class="token function">git</span> push origin <span class="token parameter variable">--tags</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 统计项目</span>
<span class="token function">git</span> shortlog <span class="token parameter variable">-sn</span>

<span class="token comment">#  强制推送</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span>  git@github.com:xxx/xxx.git master:gh-pages

<span class="token comment"># pull 根据不同的配置，可等于 fetch + merge 或 fetch + rebase</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vim-基本操作" tabindex="-1"><a class="header-anchor" href="#vim-基本操作" aria-hidden="true">#</a> vim 基本操作</h2><p>vim 打开默认是不能输入的，要按 <code>a</code> 或者 <code>i</code> 进入编辑模式，输入完成后，再按 <code>Esc</code> 退出编辑模式，这时左下角会有输入框，输入如下英文字符，注意冒号别打成中文字符，回车即可退出 vim 回到终端。<code>git log</code>后，无法退出时，也可以使用下面的退出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># :wq 保存并退出</span>
<span class="token comment"># :q! 不保存退出</span>
<span class="token comment"># :wq! 强制保存并退出</span>
<span class="token comment"># :q 退出</span>
<span class="token comment"># :w 保存</span>
<span class="token comment"># :w! 强制保存</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提交格式" tabindex="-1"><a class="header-anchor" href="#提交格式" aria-hidden="true">#</a> 提交格式</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># feat：新功能</span>
<span class="token comment"># fix：修补bug</span>
<span class="token comment"># docs：文档（documentation）</span>
<span class="token comment"># style： 格式（不影响代码运行的变动）</span>
<span class="token comment"># refactor：重构（即不是新增功能，也不是修改bug的代码变动）</span>
<span class="token comment"># test：增加测试</span>
<span class="token comment"># chore：构建过程或辅助工具的变动</span>
<span class="token comment"># perf：性能优化</span>
<span class="token comment"># revert：回滚</span>
<span class="token comment"># merge：合并</span>
<span class="token comment"># sync：同步主线或分支的Bug</span>
<span class="token comment"># build：构建系统或外部依赖的变动</span>
<span class="token comment"># ci：CI 配置文件和脚本的变动</span>
<span class="token comment"># release：发布新版本</span>
<span class="token comment"># workflow：工作流改进</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图文" tabindex="-1"><a class="header-anchor" href="#图文" aria-hidden="true">#</a> 图文</h2><p><img src="`+o+'" alt="git"></p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',50),m={href:"https://git-scm.com/book/zh/v2",target:"_blank",rel:"noopener noreferrer"},v={href:"https://docs.github.com/zh/get-started/quickstart",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.bilibili.com/video/BV1pX4y1S7Dq/?spm_id_from=333.999.0.0&vd_source=c5abf1ba032ca00c06ebba96e3ff445e",target:"_blank",rel:"noopener noreferrer"},b={href:"https://toimc-team.github.io/notes-page/interview/types/06-git.html#_1-git-%E6%A1%86%E6%9E%B6%E4%BB%8B%E7%BB%8D-%E5%88%9D%E7%BA%A7",target:"_blank",rel:"noopener noreferrer"},k={href:"https://zhuanlan.zhihu.com/p/584182115?utm_id=0",target:"_blank",rel:"noopener noreferrer"},h={href:"https://oschina.gitee.io/learn-git-branching/?NODEMO",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.bilibili.com/video/BV1HM411377j",target:"_blank",rel:"noopener noreferrer"};function f(x,_){const s=l("ExternalLinkIcon");return t(),c("div",null,[p,n("ul",null,[n("li",null,[n("a",m,[a("git book"),e(s)])]),n("li",null,[n("a",v,[a("github 快速入门"),e(s)])]),n("li",null,[n("a",u,[a("30 分钟掌握所有打工必备操作/git 基础入门教程"),e(s)])]),n("li",null,[n("a",b,[a("大前端 git 篇"),e(s)])]),n("li",null,[n("a",k,[a("30 分钟带你精通 git 使用"),e(s)])]),n("li",null,[n("a",h,[a("learn-git-branching"),e(s)])]),n("li",null,[n("a",g,[a("【GeekHour】一小时 Git 教程"),e(s)])])])])}const E=i(d,[["render",f],["__file","index.html.vue"]]);export{E as default};
