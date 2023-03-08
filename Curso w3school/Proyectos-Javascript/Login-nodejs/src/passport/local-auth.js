const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/users');

//Serializar usuario, se utiliza para ALMACENAR INFORMACIÓN del USUARIO en la sesión.
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//La deserialización se utiliza para RECUPERAR esa información del usuario.
passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});


passport.use('local-signup', new LocalStrategy({
    //a travez de que dato se va a autenticar los usuarios
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
}, async (req, email, password, done) => {

    const user = await User.findOne({email: email})
    if(user) {
        return done(null, false, req.flash('signupMessage', 'The Email is already registered'));
    } else {
        const newUser = new User();
        //Datos de autenticación
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        await newUser.save();
        done(null, newUser);
    }

}));

passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
}, async (req, email, password, done) => {

    const user = User.findOne({email: email});
    if(!user){
        return done(null, false, req.flash('signinMessage', 'No user found'));
    }
    if(!user.comparePassword(password)) {
        return done(null, false, req.flash("signinMessage",'Incorrect Password'));
    }
    done(null, user);

}))