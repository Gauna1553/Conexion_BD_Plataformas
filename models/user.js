const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
class User extends Model {}
User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
        sequelize,
        modelName: 'user'
    });

    User.sync()
        .then(() => {
            console.log("La tabla de usuarios a sido creada");
        })
        .catch((error) => {
            console.error('Error al crear la tabla de usuarios: ' ,error)
        })

module.exports = User;
