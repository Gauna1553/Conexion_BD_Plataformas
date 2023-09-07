const express = require('express');

const app = express();

const sequelize = require('./config/database');

const userRoutes = require('./routes/UserRoutes');

//Configurar la conexión a la base de datos
sequelize.authenticate()
    .then(() => console.log('Conexion establecida con la base de datos'))
    .catch(eror => console.log('Error al conectar con la base de datos:', error
    ));

    //Llamar midlewares
    app.use(cors());
    app.use(morgan());
    //le decimos que serialice la información a json
    app.use(express.json());


//Configurar las rutas de las API
app.user('./api',userRoutes);

//Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor iniciado en el puerto ${PORT}'));