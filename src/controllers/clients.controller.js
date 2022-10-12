const clientsControllers = {};

const Client = require("../models/Client");

clientsControllers.renderSingupForm = (req, res) => {
    res.render("clients/singup")
};

clientsControllers.singup = async (req, res) => {
    const errors = [];
    const {name, email, password, confirm_password} = req.body;

    if (name == "" || email == "" || password == "" || confirm_password == "" ) {
        errors.push({text: "Debes llenar todos los campos"});
    }
    else if (password != confirm_password) {
        errors.push({text: "Las contraseñas no coinciden"});
    }
    else if (password.length < 4) {
        errors.push({text: "La contraseña debe tener mas de 4 letras"});
    }

    if (errors.length > 0) {
        res.render("clients/singup", {
            errors,
            name,
            email,
            password,
            confirm_password
        });
    } else {
        const emailClient = await Client.findOne({email: email});
        if (emailClient) {
            req.flash("error_msg", "El correo ya esta en uso");
            res.redirect("/clientes/registro");
        } else {
            const newClient = new Client({name, email, password});
            newClient.password = await newClient.encryptPassword(password);
            await newClient.save();
            req.flash("success_msg", "El registro ha sido completado correctamente");
            res.redirect("/clientes/iniciar-sesion");
        }
    }
};

clientsControllers.renderSinginForm = (req, res) => {
    res.render("clients/singin")
};

clientsControllers.singin = (req, res) => {
    res.send("Iniciando")
};

clientsControllers.logout = (req, res) => {
    res.send("Cerrando sesion");
}

module.exports = clientsControllers;