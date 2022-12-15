// Importación de modulos.
const fs = require('fs');
const express = require('express');

//Variables
const app = express();
const port = 3000; 

const mainPage = fs.readFileSync(`${__dirname}/index.html`, 'utf-8');
app.use(express.static('public'));
app.use(express.static(__dirname+'/')); //Configuraciòn de la ruta.

app.set('view engine', 'pug');

app.post('/', (req, res) => {
    res
    .status(200)
    .render(mainPage);
});

app.listen(port, ()=>{
    console.log("Escuchando en puerto 8000");
});