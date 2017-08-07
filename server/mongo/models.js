const config = require('../../config');
const Mongolass = require('mongolass');
const mongolass = new Mongolass();
//连接数据库
mongolass.connect(config.mongodb)
    .then((db,err)=>{
    let adminDb = db.admin();adminDb.authenticate('ldx','284655');
});

exports.User = mongolass.model('user',{
    nikeName:{
        type:'string'
    },
    pwd:{
        type:'string',
        require: true
    },
    user:{
        type:'string',
        require: true
    },
    createTime:{
        type:'number'
    }
});
