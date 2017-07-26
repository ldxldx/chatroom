const h = require('http');
const server = h.createServer((req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('服务器创建成功！');
}).listen(3000);
let io = require('socket.io')(server);
io.on('connection',function(socket){
    console.log(socket);
    socket.emit('msgReceived','hello')
});
