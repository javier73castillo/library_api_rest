// Es el enrutamiento | EndPoints que nos da express
const BookRoutes = require('express').Router();

const { isAuth } = require('../../middlewares/auth.middleware');
// Importación en ES5 - Métodos de controller
const {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
} = require('./books.controller');

// Traer todos los movies en el endpoint /all
BookRoutes.get('/', getAll);
// Traer movie por id
BookRoutes.get('/:id', getOne);
// Crear un movie POST
BookRoutes.post('/', [isAuth], postOne);
// Modificar movie
BookRoutes.patch('/:id', [isAuth], patchOne);
// Delete movie
BookRoutes.delete('/:id', [isAuth], deleteOne);

module.exports = BookRoutes;