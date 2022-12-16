const { Sequelize }= require('sequelize');

const mascotaModel= require('../src/models/mascota')

const {USER, PASSWORD,HOST, DATABASE }= process.env;

const sequelize= new Sequelize('veterinaria', 'root', 'root', {
    host: 'localhost',
dialect: 'mysql'
})

const mascota= mascotaModel(sequelize, Sequelize);

sequelize.sync({force: true})
.then(()=>{
    console.log("tabla sincronizada")
})

module.exports= {
    mascota
}