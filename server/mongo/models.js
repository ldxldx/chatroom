const config = require('../../config');
const Mongolass = require('mongolass');
const mongolass = new Mongolass();
//连接数据库
mongolass.connect(config.mongodb).then((err,db)=>{
    let adminDb = db.admin();
    adminDb.authenticate('ldx','284655');
});

exports.User = mongolass.model('User',{
    nikeName:{
        type:'string'
    },
    pwd:{
        type:'string'
    },
    user:{
        type:'string'
    }
});
