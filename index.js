const express = require('express');
const cors = require('cors')
const router = require('./src/routes/routes')

const app = express();

app.use(cors())
app.use(express.json())
app.use(router)


app.get('/', (req, res)=>{
    res.json({message:"Olá, mundo.."})
})

app.listen(4000, ()=>{
    console.log("Servidor rodando....")
})