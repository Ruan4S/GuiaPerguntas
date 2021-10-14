const express = require('express');
const app = express();

//Dizendo para o Express usar o EJS como view engine
app.set('view engine', 'ejs');

app.get('/:nome/:lang', (req, res) => {
    let nome = req.params.nome;
    let lang = req.params.lang;
    let exibirMsg = true;
    res.render('index', {
        nome: nome,
        lang: lang,
        msg: exibirMsg,
    });
});

app.listen(8080, () => console.log('Servidor iniciado'))