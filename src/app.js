const express = require('express');
const bodyParser= require('body-parser');
const routeV= require('./routes/routerVeterinaria')
const app= express()

app.use('/veterinaria', routeV )



module.exports= app;