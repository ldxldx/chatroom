const collectionUser = require('../mongo/user');
const bodyParser = require('body-parser');// 用于解析中间件传入的请求体

module.exports = function (app) {
    /**
     * 注册
     * 连接mongodb 查询 插入
     */
    app.post('/api/register', bodyParser.json(), (req, res, next) => {
        if (!req.body) res.status(400).send('请传参数');
        console.log("这里是注册post接口");
        let data = req.body;
        collectionUser.getUserByName(data.user)
            .then((info)=>{
                if(info){
                    res.json({
                        code: 100,
                        data: null,
                        msg: '用户名已存在'
                    });
                } else {
                    collectionUser.create(data)
                        .then(info=>{
                            res.json({
                                code: 0,
                                data: null,
                                msg: '注册成功'
                            });
                        });
                }
            }).catch(err=>{
                next(new Error('数据库操作失败'));
            });
    });
}

