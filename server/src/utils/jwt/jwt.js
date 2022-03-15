// Importamos la librería de jsonwebtoken
const jwt = require('jsonwebtoken');
//una forma es generar el token con function
// const generateToken = (id, email) => {
//     return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: '1d' });
// }

// const verifyToken = (token) => {
//     return jwt.verify(token, process.env.JWT_SECRET);
// }

//otra es a traves de objeto
class JwtUtils {
    static generateToken(id, email) {
        return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    }

    static verifyToken(token) {
        return jwt.verify(token, process.env.JWT_SECRET);
    }
}

module.exports = JwtUtils;