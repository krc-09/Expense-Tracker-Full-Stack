const Sequelize = require('sequelize');
const sequelize = new Sequelize('expense-app','root','password',{

    dialect : 'mysql',
    host:'localhost'

});
module.exports = sequelize;