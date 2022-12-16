
const { Router } = require('express')


const routeV= Router();

routeV.get('/', (req, res)=>{
    console.log("2hola")
    res.send('hola mundo')
})
module.exports= routeV;