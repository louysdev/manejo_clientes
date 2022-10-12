const directionsController = {};

const Direction = require("../models/Direction");

directionsController.renderDirectionForm = (req, res) => {
    res.render("directions/new-directions");
};

directionsController.createDirection = async (req, res) => {
    const {street, noHouse, neighborhood, country} = req.body;
    const newDirection = new Direction({street, noHouse, neighborhood, country});
    await newDirection.save();
    req.flash("susccess_msg", "Direccion creada correctamente");
    res.redirect("/direcciones");
};

directionsController.renderDirections = async (req, res) => {
    const directions = await Direction.find().lean();
    res.render("directions/all-directions", { directions });
}

directionsController.renderEditForm = async (req, res) => {
    const direction = await Direction.findById(req.params.id).lean();
    console.log(direction);
    res.render("directions/edit-directions", {direction});
}

directionsController.updateDirection = async (req, res) => {
    const {street, noHouse, neighborhood, country} = req.body;
    await Direction.findByIdAndUpdate(req.params.id, {street, noHouse, neighborhood, country});
    req.flash("susccess_msg", "Direccion actualizada correctamente");
    res.redirect("/direcciones")
}

directionsController.deleteDirection = async (req, res) => {
    await Direction.findByIdAndDelete(req.params.id);
    req.flash("susccess_msg", "Direccion eliminada correctamente");
    res.redirect("/direcciones");
}

module.exports = directionsController;
