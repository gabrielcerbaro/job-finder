const express    = require('express');
const app        = express();
const port       = 3000;
const db         = require('./db/connections')
const bodyParser = require('body-parser');

app.listen(port, function () {
    console.log(`O express está ouvindo a porta ${port}`)
});

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

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

// jobs routes
app.use('/jobs', require('./routes/jobs'))