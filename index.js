// Importación de modulos.
const express = require('express');

//Página principal
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hooooollaaa');
});

app.listen(8000, ()=>{
    console.log("Escuchando en puerto 8000");
});