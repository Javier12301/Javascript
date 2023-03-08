const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

//Schema Users

const userSchema = new Schema({
    email: String,
    password: String
});

userSchema.methods.encryptPassword = (password) => {
    //Con esto encriptamos la contraseña, y pusimos genSaltSync 10 para que se ejecute 10 veces
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('users' ,userSchema);
