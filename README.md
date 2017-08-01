 a simple chat room

> ####package.json 特别插件使用说明：

    body-parser   node.js 正文解析中间件
                  在处理程序之前，在中间件中解析传入的请求体，在req.body属性下可用 
                  post请求下，参数暂未定义，此插件可预解析。
                  bodyParser.json()//解析application/json
                  bodyParser.urlencoded({ extended: true })//解析application/x-www-form-urlencoded
                          
    multer        解析multipart/form-data 的表单数据
    
    mongolass     mongodb驱动库
        

> ####项目目录文件说明

* dist 页面静态资源
* src 前端页面开发目录
* routes 路由资源
* mongo 数据模型
* server.js node入口文件
* webpack.config.babel.js pack配置文件

