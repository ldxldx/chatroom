const express = require('express');
const API = require('./server/api/index');
const session = require('express-session');
const config = require('./config');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');// 用于解析中间件传入的请求体
// const multer = require('multer');//用于解析 multipart/form-data 类型的表单数据（通常用于视频流） 对分布式不支持
const app = express();
//静态文件放在多个目录下的话，可多次调用
app.use('/dist', express.static('./dist'));
//挂载服务
const server = app.listen(3000, () => {
    console.log('服务器启动成功')
});
/**
 * 设置请求头
 */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 'Content-Type');
    res.header("Access-Control-Request-Method", "GET,POST,DELETE,PUT");
    next();
});
/**
 * session
 */
app.use(session({
    name: config.session.key,
    secret: config.session.secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: config.session.maxAge,
    },//设置cookie
    store: new MongoStore({
        url: config.mongodb,
        collection:'session',
        ttl:20,
        autoRemoveInterval:10,
        touchAfter:24*3600
    })//写入数据库 20分钟过期 24小时候会自动清理过期session
}));
app.use(bodyParser.json(),(req, res, next) => {
    if (!req.body) res.status(400).send('参数错误');
    next();
});
/**
 * 添加api
 */
API(app);
/**
 * 错误处理
 * next() 传入参数（除了 ‘route’ 字符串），Express 会认为当前请求有错误的输出
 * 即会自动跳入错误处理中间件
 */
app.use((err, req, res, next) => {
    console.log('错误处理')
    //根本传过来的err 来判断错误事项
    console.log(err);
    res.status(500).send('操作失败');
});
/**
 * socket
 */
// let io = require('socket.io')(server);
// io.on('connection', function (socket) {
//     //连接成功后
//     socket.on('sendMessage', function (data) {
//         //接受到客户传过来数据
//         socket.broadcast.emit('newMessage', data);
//     });
// });
