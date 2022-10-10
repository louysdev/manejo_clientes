const {Schema, model} = require("mongoose");
const bcrypt = require("bcryptjs");

const EsquemaCliente = new Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true,
        default: "usuario"
    }
}, {
    timestamps: true
});

EsquemaCliente.methods.encriptarContraseña = async contraseña => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(contraseña, salt);
};

EsquemaCliente.methods.comprarContraseña = async function(contraseña) {
    return await bcrypt.compare(contraseña, this.contraseña);
}

module.exports = model("Cliente", EsquemaCliente);