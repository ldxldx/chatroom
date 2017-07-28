const h = require('http');
let MongoClient = require('mongodb').MongoClient;
let DB_CONN_STR = 'mongodb://localhost:27017/vip';

const server = h.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('服务器创建成功！');
}).listen(3000);
let io = require('socket.io')(server);
io.on('connection', function (socket) {
    //连接成功后
    socket.on('sendMessage', function (data) {
        //接受到客户传过来数据
        socket.broadcast.emit('newMessage', data);
    });
});
MongoClient.connect(DB_CONN_STR, function(err, db) {

    db.collection('vip').find().toArray(function (err,docs) {
        console.log(docs);
    })

});
// db.open((err, db) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     db.collection('vip',(err,collection)=>{
//         collection.find().toArray(function(err,docs){
//             console.log('find');
//             console.log(docs);
//         });
//     });
// });

