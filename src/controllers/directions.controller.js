const directionsController = {};

const Direction = require("../models/Direction");

directionsController.renderDirectionForm = (req, res) => {
    res.render("directions/new-directions");
};

directionsController.createDirection = async (req, res) => {
    const {street, noHouse, neighborhood, country} = req.body;
    const newDirection = new Direction({street, noHouse, neighborhood, country});
    newDirection.user = req.user.id;
    await newDirection.save();
    req.flash("susccess_msg", "Direccion creada correctamente");
    res.redirect("/direcciones");
};

directionsController.renderDirections = async (req, res) => {
    const directions = await Direction.find({user: req.user.id}).sort({createdAt: "desc"}).lean();
    res.render("directions/all-directions", { directions });
}

directionsController.renderEditForm = async (req, res) => {
    const direction = await Direction.findById(req.params.id).lean();
    if(direction.user != req.user.id) {
        req.flash("error_msg", "No estas autorizado");
        return res.redirect("/direcciones");
    }
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
