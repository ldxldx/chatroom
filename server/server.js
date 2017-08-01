const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');// 用于解析中间件传入的请求体
const multer = require('multer');//用于解析 multipart/form-data 类型的表单数据

const app = express();

//静态文件放在多个目录下的话，可多次调用
app.use('/dist', express.static('../dist'));
//挂载服务
const server = app.listen(3000, () => {
  console.log('服务器启动成功')
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

/**
 * 注册
 */
app.post('/register', bodyParser.json(), (req, res) => {
  if (!req.body) res.sendStatus(400);
  let data = req.body;
  //校验参数
  if (data.user){//只可以数字、字母、邮箱

  }
  if(data.pwd){//只可以数字、字母、少数符号

  }
  if(data.nikename){//不可有特殊字符

  }
  console.log("这里是注册post接口中间件");

  res.json({
    code: 0,
    data: null,
    msg: '注册成功'
  });
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
// let DB_CONN_STR = 'mongodb://localhost:27017/vip';
// MongoClient.connect(DB_CONN_STR, function(err, db) {
//
//     db.collection('vip').find().toArray(function (err,docs) {
//         console.log(docs);
//     })
//
// });