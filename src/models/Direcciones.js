const {Schema, model} = require("mongoose");

const EsquemaDireccion = new Schema({
    calle: {
        type: String,
        required: true
    },
    no_casa: {
        type: Number,
        required: true
    },
    vecindario: {
        type: String,
        required: true
    },
    pais: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.export = model("Direccion", EsquemaDireccion);

