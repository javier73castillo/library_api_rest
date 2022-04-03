const Book = require('./books.model');
const { deleteImgCloudinary } = require('../../middlewares/deleteFile.middleware');

// Metodo para recuperar todos los libros de nuestra DB
const getAll = async (req, res, next) => {
    try {
        // Popular datos -> sin ello te devuelve unicamente los ids de los autores
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        return next(error)
    }
}

// Metodo para recuperar un libro de nuestra DB
const getOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        res.status(200).json(book);
    } catch (error) {
        return next(error)
    }
}

// Método para crear un nuevo libro
const postOne = async (req, res, next) => {
    try {
        const book = new Book();
        book.name = req.body.name;
        book.autor = req.body.autor;
        book.year = req.body.year;
        book.editorial = req.body.editorial;
        book.img = req.body.img;
        book.price = req.body.price;
        const bookDB = await book.save();
        
        return res.status(201).json(bookDB)
    } catch (error) {
        return next(error)
    }
    
}

// Método para modificar una book en base a su id
const patchOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const book = new Book(req.body);
        book._id = id;
        const updateBook = await Book.findByIdAndUpdate(id, book);
        return res.status(200).json(updateBook);
    } catch (error) {
        return next(error);
    }
}

// Método para eliminar una book en base a su id
const deleteOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndDelete(id);
        return res.status(200).json(book);
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