const h = require('http');
const MongoClient = require('mongodb').MongoClient;
const DB_ADDRESS = 'mongodb://localhost:27017/';
const server = h.createServer((req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('服务器创建成功！');
}).listen(3000);
let io = require('socket.io')(server);
io.on('connection',function(socket){
    //连接成功后
    socket.on('sendMessage',function(data){
        //接受到客户传过来数据
        socket.broadcast.emit('newMessage',data);
    });
});

