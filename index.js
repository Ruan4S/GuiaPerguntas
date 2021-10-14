const express = require('express');
const app = express();

//Dizendo para o Express usar o EJS como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/:nome/:lang', (req, res) => {
    let nome = req.params.nome;
    let lang = req.params.lang;
    let exibirMsg = true;

    var produtos = [
        {nome: "Doritos", preco: 3.14},
        {nome: "Coca-cola", preco: 5},
        {nome: "Leite", preco: 1.45},
        {nome: "Carne", preco: 15},
        {nome: "RedBull", preco: 6},
        {nome: "Nescau", preco: 4},
    ]

    res.render('index', {
        nome: nome,
        lang: lang,
        msg: exibirMsg,
        produtos: produtos,
    });
});

app.listen(8080, () => console.log('Servidor iniciado'))