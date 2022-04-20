module.exports = (app)=>{
    //importar as configurações do database
    var conexao = require('../config/database')
    //importar o modelo metas
    var modelo = require('../models/metas')

    //abrir o formulário metas.ejs
    app.get('/metas',(req,res)=>{
        //conectar com o database
        conexao()
        //buscar todos os documentos da colecao metas
        modelo.find()
        .then((modelo)=>{
            res.render('metas.ejs',{dados:modelo})
        })
        .catch(()=>{
            res.render('metas.ejs')
        })
    })

    //gravar as informações do formulário
    app.post('/metas',(req,res)=>{
        //conectar com o database
        conexao()
        //gravar o documento na coleção metas
        var documento = new modelo({
            titulo:"⠀",
            meta:req.body.meta
        }).save()
        .then(()=>{
            res.redirect('/metas')
        })
        .catch(()=>{
            res.send('Não foi possível gravar os dados no DB')
        })
    })
}