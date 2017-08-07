const User = require('./models').User;
/**
 * 返回状态码说明 0-操作成功 1-密码错误 2-用户不存在 3-用户已存在(注册)
 */
module.exports = {
    create(data){
        return User.create(data).exec();
    },
    getUserByName(userName) {
        return User.findOne({user : userName}).exec();
    },
    checkUser(data) {
        return User.findOne({user : data.user}).then((result,err)=>{
            if(result){
                if(result.pwd !== data.pwd){
                    return 1;
                }
                return 0;
            } else {
                return 2;
            }
        }).catch(err=>{
            return new Error(err);
        });
    }
};
