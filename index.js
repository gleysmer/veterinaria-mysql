require('./src/db')

const app = require('./src/app.js');
const port= 3001

app.listen(port, ()=>{
    console.log(`escuchando puerto ${port}`)
})