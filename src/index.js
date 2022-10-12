require("dotenv").config();

const app = require("./server");
const {connectDB} = require("./database");

app.listen(app.get("port"), () => {
    console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
})