const express     = require('express');
const { engine }  = require('express-handlebars');
const app         = express();
const path        = require('path');
const port        = 3000;
const db          = require('./db/connections');
const bodyParser  = require('body-parser');
const Job         = require('./models/Job');
const { Op }      = require('sequelize');

app.listen(port, function () {
    console.log(`O express está ouvindo a porta ${port}`)
});

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// handlebars
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: 'main' }));
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs');

// static folder
app.use(express.static(path.join(__dirname, '../frontend/public')));

// db connection
db
    .authenticate()
    .then(() => {
        console.log('Conectou ao banco com sucesso');
        return db.sync(); // garante que a tabela "jobs" exista
    })
    .catch(err => {
        console.log('Ocorreu um erro ao conectar', err)
    });

// home - lista as vagas cadastradas (com busca opcional por título)
app.get('/', (req, res) => {
    const busca = req.query.job;
    const where = busca ? { title: { [Op.like]: `%${busca}%` } } : {};

    Job.findAll({ where, order: [['id', 'DESC']] })
        .then(jobs => {
            const plainJobs = jobs.map(job => job.get({ plain: true }));
            res.render('index', { jobs: plainJobs, query: busca || '' });
        })
        .catch(err => {
            console.log('ERRO AO BUSCAR VAGAS:', err);
            res.render('index', { jobs: [], query: busca || '' });
        });
});

// formulário de cadastro de vaga
app.get('/add', (req, res) => {
    res.render('add');
});

// jobs routes
app.use('/jobs', require('./routes/jobs'))
