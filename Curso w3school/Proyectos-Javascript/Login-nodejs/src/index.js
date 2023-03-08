const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');


require('dotenv').config()

// Initializations
const app = express();
require('./database');
require('./passport/local-auth');


//Settings
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine); //Motor de plantillas
app.set('view engine', 'ejs'); //Cargas plantillas ejs
app.set('port', process.env.PORT ||3000); //Establecer puerto

//Middlewares -> 
app.use(morgan('dev'));
//Sólo recibire simple datos de un formulario, no imagenes.
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'mysecretsession',
    resave: false,
    saveUninitialized: false
}))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    app.locals.signupMessage = req.flash('signupMessage');
    next();
});

//Routes
app.use('/', require('./routes/index'));

//Start Server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

