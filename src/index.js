const express = require('express');
const rotas = require('./rotas');
const app = express();

app.use(express.json());
app.use(rotas)

app.listen(3000,()=>{
    console.log('servidor rodando em http://localhost:3000/')
})