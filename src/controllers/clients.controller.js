const clientsControllers = {};

clientsControllers.renderSingupForm = (req, res) => {
    res.render("clients/singup")
};

clientsControllers.singup = (req, res) => {
    res.send("Registrado");
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