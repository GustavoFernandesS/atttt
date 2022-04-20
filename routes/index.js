module.exports = (app) => {
    var conexao = require('../config/database')
    conexao()
    var metas = require('../models/metas')

    app.get('/', async(req, res) => {
        var metasdados = await metas.find().sort({'_id':-1})
            
        res.render('index.ejs',{dados:metasdados})
    })
}