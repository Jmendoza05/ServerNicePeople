const mongoose = require ('mongoose');
const ContenidoSchema = mongoose.Schema({

    titulo:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    imagen:{
        type: String,
        required: true
    },
    etiquetas:{
        type: String,
        required: true 
    },
    categoria:{
        type: String,
        required: true 
    },
    fechaDeAccesoLimite:{
        type: Date,
        required: true 
    },
    state:{
        type: String,
        default: "No visto"
    }
});

module.exports = mongoose.model('Contenido',ContenidoSchema);