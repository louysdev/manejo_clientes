const directionsController = {};

directionsController.renderDirectionForm = (req, res) => {
    res.send("Direccion agregada")
};

directionsController.createDirection = (req, res) => {
    res.send("Nueva direccion")
};

directionsController.renderDirections = (req, res) => {
    res.send("Render Direcciones")
}

directionsController.renderEditForm = (req, res) => {
    res.send("Editando direcciones")
}

directionsController.updateDirection = (req, res) => {
    res.send("Actulizar direccion");
}

directionsController.deleteDirection = (req, res) => {
    res.send("Direccion eliminada")
}

module.exports = directionsController;
