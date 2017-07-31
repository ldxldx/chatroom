const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
//静态文件放在多个目录下的话，可多次调用
app.use(express.static('../dist'));
//起服务

let DB_CONN_STR = 'mongodb://localhost:27017/vip'
const server = app.listen(3000,()=>{

});
/**
 * 注册
 */
app.post('/register',(req,res)=>{
  console.log('register 注册');
  console.log(req);
});
// const h = require('http');;
//
// const server = h.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('服务器创建成功！');
// }).listen(3000);
// let io = require('socket.io')(server);
// io.on('connection', function (socket) {
//     //连接成功后
//     socket.on('sendMessage', function (data) {
//         //接受到客户传过来数据
//         socket.broadcast.emit('newMessage', data);
//     });
// });
// MongoClient.connect(DB_CONN_STR, function(err, db) {
//
//     db.collection('vip').find().toArray(function (err,docs) {
//         console.log(docs);
//     })
//
// });