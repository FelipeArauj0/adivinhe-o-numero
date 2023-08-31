const express = require('express');
const advinhe = require('./controladores/adivinhe-o-numero');
const rotas = express();

rotas.get('/advinhe/:chute', advinhe)

module.exports = rotas;