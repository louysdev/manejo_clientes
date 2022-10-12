const {Schema, model} = require("mongoose");
const bcrypt = require("bcryptjs");

const ClientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true,
        default: "user"
    }
}, {
    timestamps: true
});

ClientSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

ClientSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = model("Client", ClientSchema);