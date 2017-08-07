 a simple chat room

> ####项目目录文件说明

* dist 页面静态资源
* server 后端开发目录

   - api 接口管理
   - log 日志
   - mongo mongodb（模块、方法）
   - routes 路由

* src 前端页面开发目录

   - html
   - js

       - components vue组件
       - lib 插件
       - index.js 页面入口
       - router vue路由

   - sass

* config.js node、mongodb配置文件
* server.js node入口文件
* webpack.config.babel.js pack配置文件

> ####package.json 特别插件使用说明：

    body-parser   node.js 正文解析中间件
                  在处理程序之前，在中间件中解析传入的请求体，在req.body属性下可用 
                  post请求下，参数暂未定义，此插件可预解析。
                  bodyParser.json()//解析application/json
                  bodyParser.urlencoded({ extended: true })//解析application/x-www-form-urlencoded
                          
    multer        解析multipart/form-data 的表单数据
    
    mongolass     mongodb驱动库
        
