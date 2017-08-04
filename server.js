const express = require('express');
const API = require('./server/api/index');
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
    next();
});

/**
 * 添加api
 */
API(app);

/**
 * 错误处理
 */
app.use((err,req, res, next)=>{
    console.log(err.stack);
    res.status(500).send('操作失败')
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
