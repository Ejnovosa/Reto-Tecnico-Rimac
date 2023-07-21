const MysqlAdappter = require('../utils/mysql');

module.exports = {
    async getUser (){
        return MysqlAdappter.executeQuery('select * from usuario',{});
    }
}