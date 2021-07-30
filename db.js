const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    'telega_db',
    'kamalov2000',
    '89510972531kamalov',
    {
        host: '92.53.87.155',
        port: '6432',
        dialect: 'postgres'
    }
)
