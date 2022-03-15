// Es el enrutamiento | EndPoints que nos da express
const AuthorRoutes = require('express').Router();
const { isAuth } = require('../../middlewares/auth.middleware');
// Importación en ES5 - Métodos de controller
const {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
} = require('./authors.controller');

// Traer todos los actores en el endpoint /all
AuthorRoutes.get('/', getAll);
// Traer autor por id
AuthorRoutes.get('/:id', getOne);
// Crear un autor POST
AuthorRoutes.post('/', [isAuth], postOne);
// Modificar autor
AuthorRoutes.patch('/:id', [isAuth], patchOne);
// Delete autor
AuthorRoutes.delete('/:id', [isAuth], deleteOne);

module.exports = AuthorRoutes;