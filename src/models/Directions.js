const {Schema, model} = require("mongoose");

const DirectionSchema = new Schema({
    street: {
        type: String,
        required: true
    },
    noHouse: {
        type: Integer,
        required: true
    },
    neighborhood: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.export = model("Direction", DirectionSchema);

