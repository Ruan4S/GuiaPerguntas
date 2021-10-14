const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Dizendo para o Express usar o EJS como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//Rotas
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/perguntar', (req, res) => {
    res.render('perguntar');
});

app.post('/salvarpergunta', (req, res) => {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    res.send(`${titulo} + ${descricao}`)
});

app.listen(8080, () => console.log('Servidor iniciado'));