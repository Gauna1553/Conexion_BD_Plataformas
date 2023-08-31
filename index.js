//Conexion a la base de datos
const { Sequelize,DataTypes } = require('sequelize');
const express = require('express');
const app = express();

const sequelize = new Sequelize('USUARIOS', 'root', '',{
    host: "localhost",
    dialect: 'mysql'
});

module.exports = sequelize;

const User = sequelize.define('User', {
    fistName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER(10),
    }
});

const crearUsuarios = async  (request, response) => {
    const newUser = await User.create({
        fistName: 'John',
        lastName: 'Doe',
        age: 25
    }) 
    response.status(200).json({
        newUser
    })
    };

(async () =>{
    try{
        await sequelize.authenticate();
        console.log('Conexion a la base de datos establecida correctamente');
    } catch (error) {
        console.log ('Error al conectar a la base de datos:', error)
    }
})();
app.get('/api/usuarios', crearUsuarios);


/*const users = await User.findAll();
const user = await User.findByPk(1);

const usuarios = await user.findAll({
    where: {
        age: { [Op.gte]: 18} //Usuarios mayores o iguales a 18
    }
})*/

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});

//