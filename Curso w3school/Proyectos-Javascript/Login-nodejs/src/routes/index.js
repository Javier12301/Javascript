//Rutas principales
const express = require('express');
const router = express.Router();
const passport = require('passport');


//RAIZ
router.get('/', (req, res, next) => {
    res.render('index');
});


//METHODS /signup
router.get('/signup', (req, res, next) => {
    res.render('signup');
});

//Aquí nos mostrará lo que pasará cuando el usuario escriba los datos y donde los redireccionará.
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    //Este es para pasarle todo los datos del cliente "req"
    passReqToCallback: true
}));

//METHODS /login
router.get('/login', (req, res, next) => {

});

router.post('/login', (req, res, next) => {

});

router.get('/profile', (req, res, next) => {
    res.render('profile');
});


//Exportamos el modulo router para otro archivos
module.exports = router;

