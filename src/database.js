const mongoose = require("mongoose");

const {MANEJO_CLIENTES_MONGODB_HOST, MANEJO_CLIENTES_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${MANEJO_CLIENTES_MONGODB_HOST}/${MANEJO_CLIENTES_MONGODB_DATABASE}`;

mongoose.connect(process.env.MONGODB_URL || MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log("Base de datos conectada"))
    .catch(err => console.log(err));
