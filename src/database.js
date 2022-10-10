const mongoose = require("mongoose");

const {MANEJO_CLIENTES_MONGODB_HOST, MANEJO_CLIENTES_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${MANEJO_CLIENTES_MONGODB_HOST}/${MANEJO_CLIENTES_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log("Base de datos conectada"))
    .catch(err => console.loge(err));
