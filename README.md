 a simple chat room

> ####package.json 部分插件使用说明：

    body-parser   node.js 正文解析中间件
                  在处理程序之前，在中间件中解析传入的请求体，在req.body属性下可用 
                  post请求下，参数暂未定义，此插件可预解析。
                  bodyParser.json()//解析application/json
                  bodyParser.urlencoded({ extended: true })//解析application/x-www-form-urlencoded
                          
    multer        解析multipart/form-data 的表单数据
    
    mongolass     mongodb驱动库
        
       
