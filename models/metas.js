const mongoose = require('mongoose')

const modelo = mongoose.Schema({
    titulo: String,
    meta: String,
    enviado: { type: Date, default: Date.now }
})

const metas = mongoose.model('metas', modelo)

module.exports = metas