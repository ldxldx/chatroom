const collectionUser = require('../mongo/user');
const bodyParser = require('body-parser');// 用于解析中间件传入的请求体
const md5 = require('../lib/md5.min');
let prompt = (req, res, next) => {
        if (!req.body) res.status(400).send('参数错误');
        next();
};
module.exports = function (app) {
    /**
     * 注册
     * 连接mongodb 查询 插入
     */
    app.post('/api/register', bodyParser.json(), prompt,(req, res, next) => {
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
                    })).then(info => {
                            res.json({
                                code: 0,
                                data: null,
                                msg: '注册成功'
                            });
                        });
                }
            }).catch(err => {
            next(new Error('数据库操作失败'));
        });
    });
    app.post('/api/login', bodyParser.json(), (req, res, next) => {
        console.log("这里是登录post接口");
        let data = req.body;
        //找用户
        if(data.pwd) data.pwd = md5(data.pwd);
        req.session.user = data.user;
        collectionUser.checkUser(data).then(status=>{
            if(status === 0){
                res.json({
                    code: 0,
                    data: null,
                    msg: '登录成功'
                })
            } else if(status === 1){
                res.json({
                    code: 1,
                    data: null,
                    msg: '密码错误'
                })
            } else if(status === 2){
                res.json({
                    code: 2,
                    data: null,
                    msg: '用户不存在'
                })
            }
        }).catch(err=>{
            console.log('index catch');
            next(new Error(err))
        })
    });
}

