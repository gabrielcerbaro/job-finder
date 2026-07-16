const express = require('express');
const app = express();
const port = 3000;
const db = require('./db/connections')

app.listen(port, function () {
    console.log(`O express está ouvindo a porta ${port}`)
});

// db connection

db
    .authenticate()
    .then(() => {
        console.log('Conectou ao banco com sucesso');
    })
    .catch(err => {
        console.log('Ocorreu um erro ao conectar', err)
    });

app.get('/', (req, res) => {
    res.send('Está funcionando 3');
});