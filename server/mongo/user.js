const User = require('./models').User;

module.exports = {
    create(data){
        return User.create(data).exec();
    },
    getUserByName(userName) {
        return User.findOne({user : userName}).exec();
    }
};
