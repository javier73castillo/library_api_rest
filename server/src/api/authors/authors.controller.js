const Author = require('./authors.model');


// Metodo para recuperar todos los autores de nuestra DB
const getAll = async (req, res, next) => {
    try {
        // Popular datos -> sin ello te devuelve unicamente los ids de los authores
        // find es un método de mongoose para recuperar todos los autores
        const authors = await Author.find().populate('books');
        // res - es loq ue enviaremos al frontal
        // cabecera - status 200 Todo OK
        // cuerpo -> authors - json
        res.status(200).json(authors);
    } catch (error) {
        return next(error)
    }
}

// Metodo para recuperar un author de nuestra DB
const getOne = async (req, res, next) => {
    try {
        // req -> recuperar valores de la request: h
        const { id } = req.params;
        // findById en el que por param recibe un id y te lo busca
        const authors = await Author.find().populate('books');
        res.status(200).json(authors);
    } catch (error) {
        return next(error)
    }
}
const postAuthor = async (req, res, next) => {

    console.log(req.body)
}

// Método para crear un nuevo author
const postOne = async (req, res, next) => {
    console.log(req.body)
    try {
        // Nuevo autor para introducir los datos del front
        const author = new Author();
        // Este body es la info que nos llega desde el front
        author.name = req.body.name;
        author.date = req.body.date;
        author.nationality = req.body.nationality;
        author.books = req.body.books?req.body.books:[];
        // Método de mongoose - que guarda el autor en la DB
        const authorDB = await author.save();

        return res.status(201).json(authorDB)
    } catch (error) {
        return next(error)
    }
}

// Método para modificar un autor en base a su id
const patchOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const author = new Author(req.body);
        // id nos lo generan y es un numero único
        author._id = id;
        // updatear el author -> Método de mongoose - que sustituye el autor en la DB
        // Param 1- el id recuperado
        // param 2 - el author con la info del front
        const updateAuthor = await Author.findByIdAndUpdate(id, author);
        return res.status(200).json(updateAuthor);
    } catch (error) {
        return next(error);
    }
}

// Método para eliminar un autor en base a su id
const deleteOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        // borrar el autor -> Método de mongoose - que borra el author en la DB por el id recuperado
        const author = await Author.findByIdAndDelete(id);
        return res.status(200).json(author);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
}