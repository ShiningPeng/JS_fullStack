- json 格式是标准的数据交换
- 前后端开发， /api 都是json格式来交流
- 全栈 fullstack

- restful 是一个web开发的理念，一切皆资源
暴露资源 
- 设计良好的URL
  /posts  拿到所有的文章
  /posts/:id               
  /comments
  /comments/:id
  /posts/1/comments

HTTP 动词
GET（ 查询） 得到，
如果要加一条评论  增加一个资源 
POST（新增） 提交一个表单到 /comments
DELETE 动词 删除一个资源 /posts/2
修改 PUT/PATCH
/comments/2  的 body 修改为 最美不过下雨天，是与你。。。
PUT 把全新的所有的内容， 去替换掉旧的内容
PATCH 只要传要更新的字段，局部

- RESTFUL 考点
  认为一切皆资源，URL是唯一定位资源的符号，
  它有一定的设计原则，简单清晰准确
  HTTP动词是WEB资源的状态转换动词

操作      SQL方法       HTTP动词
CREATE    INSERT        POST
READ      SELECT        GET
UPDATE    UPDATE        PUT/PATCH
DELETE    DELETE        DELETE



