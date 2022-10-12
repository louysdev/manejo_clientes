const {Schema, model} = require("mongoose");

const DirectionSchema = new Schema({
    street: {
        type: String,
        required: true
    },
    noHouse: {
        type: String,
        required: true
    },
    neighborhood: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model("Direction", DirectionSchema);

