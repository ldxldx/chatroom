const collectionUser = require('../mongo/user');
const checkLogin = require('../middleware/checkLogin').checkLogin;
const md5 = require('../lib/md5.min');
module.exports = function (app) {
    /**
     * 注册
     */
    app.post('/api/register', (req, res, next) => {
        console.log("这里是注册post接口");
        let data = req.body;
        collectionUser.getUserByName(data.user)
            .then((info) => {
                if (info) {
                    res.json({
                        code: 100,
                        data: null,
                        msg: '用户名已存在'
                    });
                } else {
                    collectionUser.create(Object.assign(data,{
                        pwd:md5(data.pwd),
                        createTime:new Date().getTime()
                    })).then((result,err) => {
                            res.json({
                                code: 0,
                                data: null,
                                msg: '注册成功'
                            });
                        });
                }
            }).catch(err => {
            next(err);
        });
    });
    /**
     * 登录
     */
    app.post('/api/signIn', (req, res, next) => {
        console.log("这里是登录post接口");
        let data = req.body;
        //找用户
        collectionUser.checkUser(data).then((result,err)=>{
            if(result){
                if(data.pwd) data.pwd = md5(data.pwd);
                if(result.pwd !== data.pwd){
                    res.json({
                        code: 1,
                        data: null,
                        msg: '密码错误'
                    });
                }
                res.json({
                    code: 0,
                    data: null,
                    msg: '登录成功'
                });
            } else {
                res.json({
                    code: 2,
                    data: null,
                    msg: '用户不存在'
                });
            }
        }).catch(err=>{
            next(err);
        });
    });
    /**
     * 登出
     */
    app.put('/api/signOut', (req, res, next) => {
        req.session.user = null;
        res.json({
            code:0,
            data:null,
            msg:'已登出'
        })
    })
}

