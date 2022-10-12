const directionsController = {};

const Direction = require("../models/Direction");

directionsController.renderDirectionForm = (req, res) => {
    res.render("directions/new-directions");
};

directionsController.createDirection = async (req, res) => {
    const {street, noHouse, neighborhood, country} = req.body;
    const newDirection = new Direction({street , noHouse , neighborhood , country });
    await newDirection.save();
    res.send("Nueva direccion")
};

directionsController.renderDirections = async (req, res) => {
    const directions = await Direction.find().lean();
    res.render("directions/all-directions", { directions });
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
