const MysqlAdappter = require('../utils/mysql');
//const userDao = require('../dao/');

module.exports = {
    async createUser(payload){
        
        var params = { nombre: payload.nombre, fechadenacimiento: payload.fechadenacimiento, telefono: payload.telefono };
        await MysqlAdappter.executeQuery('INSERT INTO usuario SET ?', params);
    },
    async getUsers(){
        return MysqlAdappter.executeQuery('select * from usuario',{});
    }
}
