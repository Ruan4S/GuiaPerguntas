const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//Importando conexão com banco de dados
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');

//Database
connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com o banco de dados!')
    })
    .catch((e) => {
        console.log(e)
    });

//Dizendo para o Express usar o EJS como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
//Body parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
//Rotas
app.get('/', (req, res) => {
    Pergunta.findAll({raw: true}).then(perguntas => {
        res.render('index', {
            perguntas: perguntas
        });
    });
});

app.get('/perguntar', (req, res) => {
    res.render('perguntar');
});

app.post('/salvarpergunta', (req, res) => {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao,
    }).then(() => {
        res.redirect('/');
    })
});

app.listen(8080, () => console.log('Servidor iniciado'));