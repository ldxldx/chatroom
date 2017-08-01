const express = require('express');
const bodyParser = require('body-parser');// 用于解析中间件传入的请求体
// const multer = require('multer');//用于解析 multipart/form-data 类型的表单数据（通常用于视频流）
const Mongo = require('mongoskin');
const mongoVip = Mongo.db('mongodb://localhost:27017/vip');

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
 * 注册
 * 连接mongodb 查询 插入
 */
app.post('/api/register', bodyParser.json(), (req, res, next) => {
    if (!req.body) res.sendStatus(400);
    console.log("这里是注册post接口");
    let data = req.body;
    mongoVip.collection('vip').findOne({user:data.user},(err,info)=>{
        if(err) next(new Error('数据库操作失败'));
        if(info){
            res.json({
                code: 100,
                data: null,
                msg: '用户名已存在'
            });
        } else {
            mongoVip.collection('vip').insert(data,(err,result)=>{
              if(err) next(new Error('数据库操作失败'));
              res.json({
                    code: 0,
                    data: null,
                    msg: '注册成功'
                });
            });
        }
    });
});
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
/**
 * mongodb
 */
