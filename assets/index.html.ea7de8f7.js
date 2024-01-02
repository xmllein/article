import{_ as n,o as s,c as a,e}from"./app.26c798e2.js";const l={},t=e(`<h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> mysql</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 数据库字段常用类型</span>
<span class="token comment"># 整数类型 ： tinyint smallint mediumint int bigint</span>
<span class="token comment"># 字符类型 ： char varchar</span>
<span class="token comment"># 日期类型： date datetime timestamp time year</span>
<span class="token comment"># 备注类型： text longtext mediumtext tinytext</span>
<span class="token comment"># 浮点类型： float double decimal</span>

<span class="token comment"># mysql 数据库操作</span>
<span class="token comment"># 进入数据库</span>
mysql <span class="token parameter variable">-h</span> <span class="token function">host</span> <span class="token parameter variable">-P</span> port <span class="token parameter variable">-u</span> username <span class="token parameter variable">-p</span> password
<span class="token comment">#或者</span>
mysql <span class="token parameter variable">-u</span> username <span class="token parameter variable">-p</span> password <span class="token parameter variable">-h</span> <span class="token function">host</span> <span class="token parameter variable">-P</span> port
<span class="token comment"># 查看所有数据库</span>
show databases<span class="token punctuation">;</span>
<span class="token comment"># 查看当前数据库</span>
<span class="token keyword">select</span> database<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 创建数据库</span>
create database databaseName<span class="token punctuation">;</span>
<span class="token comment"># 删除数据库</span>
drop database databaseName<span class="token punctuation">;</span>
<span class="token comment"># 使用数据库</span>
use databaseName<span class="token punctuation">;</span>
<span class="token comment"># 查看所有表</span>
show tables<span class="token punctuation">;</span>
<span class="token comment"># 查看表结构</span>
desc tableName<span class="token punctuation">;</span>
<span class="token comment"># 设置中文编码</span>
<span class="token builtin class-name">set</span> names utf8<span class="token punctuation">;</span>
<span class="token comment"># 查看表数据</span>
<span class="token keyword">select</span> * from tableName<span class="token punctuation">;</span>


<span class="token comment"># 查看数据 条件查询</span>
<span class="token comment"># 常用运算符： &gt; &lt; = &gt;= &lt;= != &lt;&gt;</span>
<span class="token keyword">select</span> * from tableName where columnName <span class="token operator">&gt;</span> value<span class="token punctuation">;</span>
<span class="token comment"># is null : 没有值，is not null : 有值， is null 和 is not null 只能用于判断是否有值，不能用于判断是否相等</span>
<span class="token keyword">select</span> * from tableName where columnName is null<span class="token punctuation">;</span>
<span class="token comment"># between and: 在某个范围内</span>
<span class="token keyword">select</span> * from tableName where columnName between value1 and value2<span class="token punctuation">;</span>
<span class="token comment"># no between : 不在某个范围内</span>
<span class="token keyword">select</span> * from tableName where columnName not between value1 and value2<span class="token punctuation">;</span>
<span class="token comment"># in : 在某个范围内</span>
<span class="token keyword">select</span> * from tableName where columnName <span class="token keyword">in</span> <span class="token punctuation">(</span>value1, value2, <span class="token punctuation">..</span>.<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># like : 模糊查询</span>
<span class="token keyword">select</span> * from tableName where columnName like <span class="token string">&#39;%value%&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># and : 并且</span>
<span class="token keyword">select</span> * from tableName where columnName1 <span class="token operator">=</span> value1 and columnName2 <span class="token operator">=</span> value2<span class="token punctuation">;</span>
<span class="token comment"># or : 或者</span>
<span class="token keyword">select</span> * from tableName where columnName1 <span class="token operator">=</span> value1 or columnName2 <span class="token operator">=</span> value2<span class="token punctuation">;</span>
<span class="token comment"># order by : 排序</span>
<span class="token keyword">select</span> * from tableName order by columnName desc<span class="token punctuation">;</span> <span class="token comment"># 降序 desc 升序 asc</span>

<span class="token comment"># msyql 分组函数</span>
<span class="token comment"># count : 统计数量</span>
<span class="token keyword">select</span> count<span class="token punctuation">(</span>*<span class="token punctuation">)</span> from tableName<span class="token punctuation">;</span>
<span class="token comment"># max : 最大值</span>
<span class="token keyword">select</span> max<span class="token punctuation">(</span>columnName<span class="token punctuation">)</span> from tableName<span class="token punctuation">;</span>
<span class="token comment"># min : 最小值</span>
<span class="token keyword">select</span> min<span class="token punctuation">(</span>columnName<span class="token punctuation">)</span> from tableName<span class="token punctuation">;</span>
<span class="token comment"># sum : 求和</span>
<span class="token keyword">select</span> sum<span class="token punctuation">(</span>columnName<span class="token punctuation">)</span> from tableName<span class="token punctuation">;</span>
<span class="token comment"># avg : 平均值</span>
<span class="token keyword">select</span> avg<span class="token punctuation">(</span>columnName<span class="token punctuation">)</span> from tableName<span class="token punctuation">;</span>


<span class="token comment"># mysql 别名：as 用于给字段或者表起别名</span>
<span class="token comment"># as</span>
<span class="token keyword">select</span> columnName as aliasName from tableName<span class="token punctuation">;</span>


<span class="token comment"># mysql 表与表之间的关系</span>
<span class="token comment"># 一对一 ： 一个表的一条数据对应另一个表的一条数据， 需要借助外键</span>
<span class="token comment"># 例如： 一个学生对应一个身份证号，一个身份证号对应一个学生</span>


<span class="token comment"># 一对多 ： 一个表的一条数据对应另一个表的多条数据， 需要借助外键</span>
<span class="token comment"># 例如： 一个班级对应多个学生，一个学生对应一个班级</span>


<span class="token comment"># 多对多 ： 一个表的多条数据对应另一个表的多条数据， 需要借助第三张表</span>
<span class="token comment"># 例如： 一个学生对应多个课程，一个课程对应多个学生</span>
<span class="token comment"># lesson 表  student 表  lesson_student 表(中间表)</span>
<span class="token comment"># 普通查询</span>
<span class="token keyword">select</span> * from lesson where <span class="token function">id</span> <span class="token keyword">in</span> <span class="token punctuation">(</span>select lesson_id from lesson_student where student_id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 笛卡尔积关联查询</span>
<span class="token keyword">select</span> * from lesson, lesson_student where lesson.id <span class="token operator">=</span> lesson_student.lesson_id and lesson_student.student_id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment"># 连表查询</span>
<span class="token keyword">select</span> * from lesson left <span class="token function">join</span> lesson_student on lesson.id <span class="token operator">=</span> lesson_student.lesson_id where lesson_student.student_id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment"># 内连接查询</span>
<span class="token keyword">select</span> * from lesson inner <span class="token function">join</span> lesson_student on lesson.id <span class="token operator">=</span> lesson_student.lesson_id where lesson_student.student_id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>


<span class="token comment"># mysql 笛卡尔积连接， 内连接， 左外连接， 右外连接</span>
<span class="token comment"># 注意： 在项目中能不用连接查询尽量就不用连接查询，连接查询会影响性能， 笛卡尔积查询速度最慢，内连接速度最快（会用）</span>

<span class="token comment"># 笛卡尔积连接</span>
<span class="token keyword">select</span> * from tableName1, tableName2 where tableName1.columnName <span class="token operator">=</span> tableName2.columnName<span class="token punctuation">;</span>

<span class="token comment"># 内连接</span>
<span class="token keyword">select</span> * from tableName1 inner <span class="token function">join</span> tableName2 on tableName1.columnName <span class="token operator">=</span> tableName2.columnName<span class="token punctuation">;</span>

<span class="token comment"># 左外连接</span>
<span class="token keyword">select</span> * from tableName1 left <span class="token function">join</span> tableName2 on tableName1.columnName <span class="token operator">=</span> tableName2.columnName<span class="token punctuation">;</span>

<span class="token comment"># 右外连接</span>
<span class="token keyword">select</span> * from tableName1 right <span class="token function">join</span> tableName2 on tableName1.columnName <span class="token operator">=</span> tableName2.columnName<span class="token punctuation">;</span>

<span class="token comment">## mysql 索引</span>
<span class="token comment"># 索引 对表中的一列或多列的值进行排序的一种结构，使用索引可快速访问数据库表中的特定信息</span>
<span class="token comment"># 简单来说： 索引就是提高查询数据速度，数据量越大，索引的作用越明显</span>
<span class="token comment"># mysql 索引类型： 普通索引， 唯一索引， 主键索引， 全文索引</span>

<span class="token comment"># 普通索引</span>
create index indexName on tableName<span class="token punctuation">(</span>columnName<span class="token punctuation">)</span><span class="token punctuation">;</span>
create index index_name on class<span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment"># 创建索引</span>

<span class="token comment"># 查看索引</span>
show index from tableName<span class="token punctuation">;</span>
show index from class<span class="token punctuation">;</span>
show index from class<span class="token punctuation">\\</span>G<span class="token punctuation">;</span> <span class="token comment"># \\G 以竖行的形式显示</span>

<span class="token comment"># 删除索引</span>
drop index indexName on tableName<span class="token punctuation">;</span>
drop index index_name on class<span class="token punctuation">;</span>

<span class="token comment"># 创建唯一索引（主键是一种唯一索引）</span>
create unique index indexName on tableName<span class="token punctuation">(</span>columnName<span class="token punctuation">)</span><span class="token punctuation">;</span>
create unique index index_name on class<span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 另外一种创建和删除方式</span>
alter table tableName <span class="token function">add</span> index indexName<span class="token punctuation">(</span>columnName<span class="token punctuation">)</span><span class="token punctuation">;</span>
alert table class <span class="token function">add</span> unique index index_name<span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
alter table tableName drop index indexName<span class="token punctuation">;</span>

<span class="token comment"># 创建主键索引</span>
alter table tableName <span class="token function">add</span> primary key<span class="token punctuation">(</span>columnName<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 创建全文索引</span>
alter table tableName <span class="token function">add</span> fulltext<span class="token punctuation">(</span>columnName<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment"># mysql 事务</span>
<span class="token comment"># 事务： 一组sql语句的集合，这组sql语句要么全部执行，要么全部不执行</span>
<span class="token comment"># 例如： 张三给李四转账100元，张三的账户减少100元，李四的账户增加100元，这两个操作要么同时成功，要么同时失败</span>
begin<span class="token punctuation">;</span> <span class="token comment"># 开启事务</span>
update user1 <span class="token builtin class-name">set</span> money <span class="token operator">=</span> money - <span class="token number">100</span> where <span class="token function">id</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
update user2 <span class="token builtin class-name">set</span> money <span class="token operator">=</span> money + <span class="token number">100</span> where <span class="token function">id</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
commit<span class="token punctuation">;</span> <span class="token comment"># 提交事务</span>
rollback<span class="token punctuation">;</span> <span class="token comment"># 回滚事务</span>


<span class="token comment">#mysql 锁</span>
<span class="token comment"># 锁： 用于控制多个用户对数据的并发访问，锁可以在事务隔离级别上起作用</span>
<span class="token comment"># 锁的分类： 共享锁（读锁）： 允许一个事务去读一行，阻止其他事务获得相同数据集的排他锁</span>
<span class="token comment"># 添加读锁： 可以并发读，但是不能并发写，读锁期间，没有释放前不能进行写操作</span>
<span class="token comment"># 使用场景： 读取结果集的最新结果，同时防止其他事务对结果集进行修改，确保没有人对结果集进行修改</span>
lock table tableName <span class="token builtin class-name">read</span><span class="token punctuation">;</span>

unlock tables<span class="token punctuation">;</span>


<span class="token comment"># 排他锁（写锁）： 允许获得排他锁的事务更新数据，阻止其他事务取得相同数据集的共享读锁和排他写锁</span>
<span class="token comment"># 只有锁表用户才能对表进行读写操作，其他用户不能对表进行读写操作</span>
<span class="token comment"># 使用场景：并发对商品库存进行修改，防止超卖</span>
lock table tableName <span class="token function">write</span><span class="token punctuation">;</span>

unlock tables<span class="token punctuation">;</span>


<span class="token comment"># 添加数据</span>
insert into tableName<span class="token punctuation">(</span>columnName1, columnName2, <span class="token punctuation">..</span>.<span class="token punctuation">)</span> values<span class="token punctuation">(</span>value1, value2, <span class="token punctuation">..</span>.<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 更新表数据</span>
update tableName <span class="token builtin class-name">set</span> columnName <span class="token operator">=</span> value where columnName <span class="token operator">=</span> value<span class="token punctuation">;</span>
<span class="token comment"># 删除表数据</span>
delete from tableName where columnName <span class="token operator">=</span> value<span class="token punctuation">;</span>
<span class="token comment"># 删除表</span>
drop table tableName<span class="token punctuation">;</span>
<span class="token comment"># 创建表</span>
create table tableName<span class="token punctuation">(</span>
    columnName1 dataType1,
    columnName2 dataType2,
    <span class="token punctuation">..</span>.
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 指定排序</span>
<span class="token keyword">select</span> * from tableName order by columnName desc<span class="token punctuation">;</span> <span class="token comment"># 降序 desc 升序 asc</span>
<span class="token comment"># 统计数量</span>
<span class="token keyword">select</span> count<span class="token punctuation">(</span>*<span class="token punctuation">)</span> from tableName<span class="token punctuation">;</span>
<span class="token comment"># limit 限制查询数量</span>
<span class="token keyword">select</span> * from tableName limit <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment"># 查询前10条数据</span>
<span class="token comment"># 分页查询</span>
<span class="token keyword">select</span> * from tableName limit <span class="token number">10</span>, <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment"># 查询第11-20条数据</span>
<span class="token comment"># 删除表</span>
drop table tableName<span class="token punctuation">;</span>

<span class="token comment"># 查看mysql版本</span>
<span class="token keyword">select</span> version<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 查看mysql状态</span>
show status<span class="token punctuation">;</span>
<span class="token comment"># 查看mysql进程</span>
show processlist<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[t];function i(o,p){return s(),a("div",null,c)}const u=n(l,[["render",i],["__file","index.html.vue"]]);export{u as default};
