module.exports = {
    checkLogin(req, res, next){
        if (req.session.user) {
            next()
        }
        res.json({
            code: 100,
            data: null,
            msg: '未登录'
        });
    }
}
