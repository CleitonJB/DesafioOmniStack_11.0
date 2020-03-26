const express = require('express'); //Importação do pacote base para um backend em NodeJS
const cors = require('cors');
const routes = require('./routes'); //Importação do arquivo que contém as rotas da API

const app = express(); //Inicializando aplicação

app.use(cors()); //Todos podem acessar o backend

app.use(express.json()); //Enviar e receber dados em formato JSON 
app.use(routes); //Fazendo com que as rotas do arquivo 'routes.js' sejam reconhecidas 

app.listen(3333);