const {DataTypes} = require('sequelize')
module.exports=(sequelize, type)=>{
    return sequelize.define('mascota', {
        id: {
            type: DataTypes.UUID,
           defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull:  false
        }
    },{
        timestamps: false,
    })
}