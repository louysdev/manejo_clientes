const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const Client = require("../models/Client");

passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password"

}, async (email, password, done) => {

    //Confirmar si existe el correo del cliente
    const client = await Client.findOne({email});
    if (!client) {
        return done(null, false, {message: "No se ha encontrado ese usuario"})
    } else {
        // Comparar la contraseña
        const match = await client.matchPassword(password);
        if (match) {
            return done(null, client);
        } else {
            return done(null, false, {message: "Contraseña incorrecta"});
        }
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    Client.findById(id, (err, user) => {
        done(err, user)
    })
});