import{_ as n,o as s,c as a,e as t}from"./app.26c798e2.js";const e={},p=t(`<h2 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb" aria-hidden="true">#</a> mongodb</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 命令行操作</span>
<span class="token comment"># mongo 数据库操作</span>
<span class="token comment"># 进入数据库</span>
mongo <span class="token parameter variable">--host</span> <span class="token function">host</span> <span class="token parameter variable">--port</span> port <span class="token parameter variable">-u</span> username <span class="token parameter variable">-p</span> password <span class="token parameter variable">--authenticationDatabase</span> admin databaseName
<span class="token comment"># 或者</span>
mongo <span class="token parameter variable">--host</span> <span class="token function">host</span> <span class="token parameter variable">--port</span> port <span class="token parameter variable">-u</span> username <span class="token parameter variable">-p</span> password <span class="token parameter variable">--authenticationDatabase</span> admin

<span class="token comment"># 查看数据库</span>
show dbs
<span class="token comment"># 查看当前数据库</span>
db
<span class="token comment"># 创建数据库</span>
use databaseName
<span class="token comment"># 创建集合</span>
db.createCollection<span class="token punctuation">(</span><span class="token string">&quot;collectionName&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># 查看集合</span>
show collections
<span class="token comment"># 查看集合数据</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 修改数据</span>
db.collection.update<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 删除数据</span>
db.collection.remove<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 删除集合</span>
db.collection.drop<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 删除数据库</span>
db.dropDatabase<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">## 数据查询</span>
<span class="token comment"># 查找数据</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 相当于 select * from collection</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">{</span>key: value<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 相当于 select * from collection where key = value</span>

<span class="token comment"># 查询去掉重复数据</span>
db.collection.distinct<span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 查询age=22 数据</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token number">22</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment"># 查询age&gt;22 数据</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token punctuation">{</span><span class="token variable">$gt</span><span class="token builtin class-name">:</span> <span class="token number">22</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment"># 查询age&gt;=22 数据</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token punctuation">{</span><span class="token variable">$gte</span><span class="token builtin class-name">:</span> <span class="token number">22</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment"># 查询age&lt;22 数据</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token punctuation">{</span><span class="token variable">$lt</span><span class="token builtin class-name">:</span> <span class="token number">22</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment"># 查询age&lt;=22 数据</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token punctuation">{</span><span class="token variable">$lte</span><span class="token builtin class-name">:</span> <span class="token number">22</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment"># 查询age!=22 数据</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token punctuation">{</span><span class="token variable">$ne</span><span class="token builtin class-name">:</span> <span class="token number">22</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment"># 查询age=22 数据, 并且只显示name, age</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token number">22</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span>name: <span class="token number">1</span>, age: <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment"># 模糊查询： 查询name中包含&quot;张&quot;的数据</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">{</span>name: /张/<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 相当于 select * from collection where name like &#39;%张%&#39;</span>

<span class="token comment"># 查询name中以&quot;张&quot;开头的数据</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">{</span>name: /^张/<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 相当于 select * from collection where name like &#39;张%&#39;</span>

<span class="token comment"># 升序 1  ， 降序</span>

<span class="token comment"># 查询age=22 数据, 并且只显示name, age, 并且按照age升序排列</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token number">22</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span>name: <span class="token number">1</span>, age: <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>.sort<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment"># 查询age=22 数据, 并且只显示name, age, 并且按照age降序排列</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token number">22</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span>name: <span class="token number">1</span>, age: <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>.sort<span class="token punctuation">(</span><span class="token punctuation">{</span>age: -1<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment"># 查询 前5条数据</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">)</span>.limit<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment"># 查询 跳过前5条数据</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">)</span>.skip<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

<span class="token comment"># 分页， limit： pageSize, skip: (pageNo - 1) * pageSize</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">)</span>.limit<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>.skip<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

<span class="token comment"># or 查询</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token variable">$or</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>age: <span class="token number">22</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span>age: <span class="token number">23</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 相当于 select * from collection where age = 22 or age = 23</span>

<span class="token comment"># and 查询</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token variable">$and</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>age: <span class="token number">22</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span>name: <span class="token string">&quot;张三&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 相当于 select * from collection where age = 22 and name = &quot;张三&quot;</span>

<span class="token comment"># in 查询</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token punctuation">{</span><span class="token variable">$in</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token number">22</span>, <span class="token number">23</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 相当于 select * from collection where age in (22, 23)</span>

<span class="token comment"># not in 查询</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token punctuation">{</span><span class="token variable">$nin</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token number">22</span>, <span class="token number">23</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 相当于 select * from collection where age not in (22, 23)</span>

<span class="token comment"># findOne</span>
db.collection.findOne<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token number">22</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 相当于 select * from collection where age = 22 limit 1</span>

<span class="token comment"># 统计条数</span>
db.collection.count<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 加条件 统计条数</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token punctuation">{</span><span class="token variable">$gte</span><span class="token builtin class-name">:</span> <span class="token number">22</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>.count<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 如果要返回线坠之后的记录数量</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token punctuation">{</span><span class="token variable">$gte</span><span class="token builtin class-name">:</span> <span class="token number">22</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>.skip<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>.limit<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>.count<span class="token punctuation">(</span>true<span class="token punctuation">)</span>



<span class="token comment">## 修改数据</span>
<span class="token comment"># 修改一条数据</span>
db.collection.update<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token number">22</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span><span class="token variable">$set</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>age: <span class="token number">23</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 相当于 update collection set age = 23 where age = 22 limit 1</span>

<span class="token comment"># 更改所有匹配的项目</span>
db.collection.update<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token number">22</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span><span class="token variable">$set</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>age: <span class="token number">23</span><span class="token punctuation">}</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span>multi: true<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 相当于 update collection set age = 23 where age = 22</span>

<span class="token comment"># 完整替换 一条数据， 不出现 $set</span>
db.collection.update<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token number">22</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span>name: <span class="token string">&quot;张三&quot;</span>, age: <span class="token number">23</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 相当于 update collection set name = &quot;张三&quot;, age = 23 where age = 22 limit 1</span>

<span class="token comment"># $inc 增加</span>
db.collection.update<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token number">22</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span><span class="token variable">$inc</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>age: <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span>, false, <span class="token boolean">true</span> <span class="token punctuation">)</span> <span class="token comment"># 相当于 update collection set age = age + 1 where age = 22 limit 1</span>

<span class="token comment"># $inc 与 $set 同时使用</span>
db.collection.update<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token number">22</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span><span class="token variable">$inc</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>age: <span class="token number">1</span><span class="token punctuation">}</span>, <span class="token variable">$set</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>name: <span class="token string">&quot;张三&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>, false, <span class="token boolean">true</span> <span class="token punctuation">)</span> <span class="token comment"># 相当于 update collection set age = age + 1, name = &quot;张三&quot; where age = 22 limit 1</span>


<span class="token comment">## 删除数据</span>
<span class="token comment"># 删除一条数据</span>
db.collection.remove<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token number">22</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 相当于 delete from collection where age = 22 limit 1</span>
<span class="token comment"># justOne: true 只删除一条数据</span>
db.collection.remove<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token number">22</span><span class="token punctuation">}</span>, <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment"># 相当于 delete from collection where age = 22 limit 1</span>



<span class="token comment">## 索引</span>
<span class="token comment"># 索引： 随着集合增长，针对查询的效率会降低，索引可以提高查询效率</span>
<span class="token comment"># 如果没有对索引的键调用 sort() 方法，MongoDB 会在内部自动对索引键进行排序。</span>
<span class="token comment"># 因此在做无索引排序时，应该使用与索引相同的顺序，以避免额外的排序操作，否则数据量多大以致无法在内存中进行排序，就会导致严重的性能问题，会导致mongodb 崩溃报错。</span>

<span class="token comment"># 创建索引</span>
db.collection.createIndex<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 1 升序， -1 降序</span>
<span class="token comment"># 获取当前集合的索引</span>
db.collection.getIndexes<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 删除索引</span>
db.collection.dropIndex<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment"># 复合索引</span>
<span class="token comment"># 复合索引： age 升序， name 升序</span>
db.collection.ensureIndex<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token number">1</span>, name: <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 1 升序， -1 降序</span>

<span class="token comment"># 唯一索引： age 唯一 不能重复</span>
db.collection.ensureIndex<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token number">1</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span>unique: true<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 1 升序， -1 降序</span>

<span class="token comment"># 索引参数</span>
<span class="token comment"># background: true 后台创建索引, 这样创建索引不会阻塞其他数据库操作，但是会消耗更多的资源。</span>
<span class="token comment"># dropDups: true 删除重复的索引</span>
<span class="token comment"># sparse: true 稀疏索引，只包含有索引字段的文档</span>
<span class="token comment"># unique: true 唯一索引，不能重复</span>
<span class="token comment"># name: &quot;age&quot; 索引名称</span>



<span class="token comment">## explain: 查看查询计划</span>
<span class="token comment"># explain: 查看查询计划</span>
<span class="token comment"># 返回的结果中， queryPlanner 代表查询计划， winningPlan 代表最终执行的计划， executionStats 代表执行的统计信息</span>
<span class="token comment"># serverInfo 代表服务器信息, rejectPlans 代表被拒绝的计划</span>

<span class="token comment"># 具体的执行时间</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">{</span>age: <span class="token number">22</span><span class="token punctuation">}</span><span class="token punctuation">)</span>.explain<span class="token punctuation">(</span><span class="token string">&quot;executionStats&quot;</span><span class="token punctuation">)</span>


<span class="token comment">## 集合 与 集合之间的关系</span>
<span class="token comment"># 一对一 关系</span>
<span class="token comment"># 例如： 用户表，身份证表</span>
<span class="token comment"># 一对一 关系，可以将两个集合合并成一个集合</span>
<span class="token comment"># 用户集合： {name: &quot;张三&quot;, age: 22, idCard: {idCardNo: &quot;1234567890&quot;, address: &quot;北京市&quot;}}</span>
<span class="token comment"># 身份证集合： {idCardNo: &quot;1234567890&quot;, address: &quot;北京市&quot;}</span>
<span class="token comment"># 查询用户信息，包含身份证信息</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">{</span>name: <span class="token string">&quot;张三&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>.populate<span class="token punctuation">(</span><span class="token string">&quot;idCard&quot;</span><span class="token punctuation">)</span>


<span class="token comment"># 一对多 关系</span>
<span class="token comment"># 例如： 用户表，订单表</span>
<span class="token comment"># 用户集合： {name: &quot;张三&quot;, age: 22, orders: [{orderNo: &quot;1234567890&quot;, price: 100}, {orderNo: &quot;1234567891&quot;, price: 200}]}</span>
<span class="token comment"># 订单集合： {orderNo: &quot;1234567890&quot;, price: 100, userId: &quot;1234567890&quot;}</span>
<span class="token comment"># 查询用户信息，包含订单信息</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">{</span>name: <span class="token string">&quot;张三&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>.populate<span class="token punctuation">(</span><span class="token string">&quot;orders&quot;</span><span class="token punctuation">)</span>


<span class="token comment"># 多对多 关系</span>
<span class="token comment"># 例如： 用户表，商品表</span>
<span class="token comment"># 用户集合： {name: &quot;张三&quot;, age: 22, products: [{productName: &quot;苹果&quot;, price: 100}, {productName: &quot;香蕉&quot;, price: 200}]}</span>
<span class="token comment"># 商品集合： {productName: &quot;苹果&quot;, price: 100, userIds: [&quot;1234567890&quot;, &quot;1234567891&quot;]}</span>
<span class="token comment"># 查询用户信息，包含商品信息</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">{</span>name: <span class="token string">&quot;张三&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>.populate<span class="token punctuation">(</span><span class="token string">&quot;products&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># 查询商品信息，包含用户信息</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">{</span>productName: <span class="token string">&quot;苹果&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>.populate<span class="token punctuation">(</span><span class="token string">&quot;userIds&quot;</span><span class="token punctuation">)</span>



<span class="token comment">## 高级查询 aggregate 聚合查询</span>

<span class="token comment"># aggregate 聚合查询： 表关联查询，数据统计</span>
<span class="token comment"># 使用 db.collection.aggregate() 方法来执行聚合操作</span>

<span class="token comment">## 聚合管道操作符与表达式</span>
<span class="token comment"># $project： 修改输入文档的结构。可以用来重命名、增加或删除域，也可以用于创建计算结果以及嵌套文档。 相当于mysql： select</span>
db.collection.aggregate<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token variable">$project</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>name: <span class="token number">1</span>, age: <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># $match: 用于过滤数据，只输出符合条件的文档。$match使用MongoDB的标准查询操作。 相当于mysql： where</span>
db.collection.aggregate<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token variable">$match</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>age: <span class="token number">22</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># $limit： 用来限制MongoDB聚合管道返回的文档数。 相当于mysql： limit</span>
db.collection.aggregate<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token variable">$limit</span><span class="token builtin class-name">:</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># $skip： 在聚合管道中跳过指定数量的文档，并返回余下的文档。</span>
db.collection.aggregate<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token variable">$skip</span><span class="token builtin class-name">:</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># $sort ： 将输入文档排序后输出。 相当于mysql： order by</span>
db.collection.aggregate<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token variable">$sort</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>age: <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># $group： 将集合中的文档分组，可用于统计结果。 相当于mysql： group by</span>
db.collection.aggregate<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token variable">$group</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>_id: <span class="token string">&quot;<span class="token variable">$age</span>&quot;</span>, count: <span class="token punctuation">{</span><span class="token variable">$sum</span><span class="token builtin class-name">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># $lookup： 对集合中的每个文档执行左连接，将其他集合中匹配的文档添加到输出文档中。 相当于mysql： left join</span>
db.collection.aggregate<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token variable">$lookup</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>from: <span class="token string">&quot;orders&quot;</span>, localField: <span class="token string">&quot;name&quot;</span>, foreignField: <span class="token string">&quot;name&quot;</span>, as: <span class="token string">&quot;orderList&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># $sum： 计算总和。 相当于mysql： sum</span>
db.collection.aggregate<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token variable">$group</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>_id: <span class="token string">&quot;<span class="token variable">$age</span>&quot;</span>, count: <span class="token punctuation">{</span><span class="token variable">$sum</span><span class="token builtin class-name">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>




<span class="token comment"># 备份数据</span>
mongodump <span class="token parameter variable">-h</span> dbhost <span class="token parameter variable">-d</span> dbname <span class="token parameter variable">-o</span> dbdirectory
<span class="token comment"># 例如: mongodump -h localhost:27017 -d test -u test -p testpwd -o D:\\dump</span>
<span class="token comment"># 恢复数据</span>
mongorestore <span class="token parameter variable">-h</span> dbhost <span class="token parameter variable">-d</span> dbname <span class="token parameter variable">--dir</span> dbdirectory
<span class="token comment">#例如: mongorestore -h localhost:27017 -d test -c order --dir d:\\dump\\test\\test.bson -u test -p testpwd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[p];function o(l,i){return s(),a("div",null,c)}const m=n(e,[["render",o],["__file","index.html.vue"]]);export{m as default};
