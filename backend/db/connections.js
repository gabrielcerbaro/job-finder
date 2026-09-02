const Sequelize = require('sequelize');
const path = require('path');

// como este arquivo já está dentro de backend/db, o app.db
// fica no mesmo diretório dele (por isso usamos __dirname)
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'app.db')
});

module.exports = sequelize;
