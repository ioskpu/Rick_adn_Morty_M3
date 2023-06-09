const {DataTypes, Sequelize} = require('sequelize');

module.exports = (Sequelize) => {
    Sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true,            
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}