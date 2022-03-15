const mongoose = require('mongoose');
const {setError} = require('../../utils/error/error');
// Librería para encriptar nuestra contraseña
const bcrypt = require('bcrypt');
const { validationPassword, validationEmail } = require('../../utils/validators/validators');
const userSchema = new mongoose.Schema(
    {
        name: { type: String, trim: true, required: true },
        date: { type: Date, trim: true, required: true },
        password: { type: String, trim: true, required: true },
        email: { type: String, trim: true, required: true },
    }
);

// Tenemos que guardar la contraseña encriptada - para ello usamos el método mongoose pre("save")
userSchema.pre("save", function(next){
    if (!validationPassword(this.password)) {
        //TODO: Create ERROR
        return next(setError(404,'This Email already exists'));
    }
    if (!validationEmail(this.email)) {
        //TODO: Create ERROR
        return next(setError(404,'This Email already exists'));
    }
    // Encriptar la password en nuestra DB
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

const User = mongoose.model('users', userSchema);
module.exports = User;