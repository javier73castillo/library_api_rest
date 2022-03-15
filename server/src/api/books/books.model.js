// Requerir la librería de mongoose
const mongoose = require('mongoose');

// Creamos un SCHEMA -> Es un método de una clase que nos permite definir un modelo de datos.
const booksSchema = new mongoose.Schema(
    // Type: es el tipo de dato
    // Required: si es un campo obligatorio
    // Trim: elimina los espacios al principio y final
    {
        name: { type: String, required: true, trim: true },
        autor: { type: mongoose.Schema.Types.ObjectId, ref: "authors", required: false},
        year: { type: Number, required: false, trim: true },
        editorial: {type: String, required: false, trim: true},
        img: { type: String, trim: true, required: false }
    },
    // Timestamps: fecha de creación - modificación
    {
        timestamps: true
    }
);

// Guardar en Autor la referencia y el Schema
// books - es el nombre de mi colección en la DB
const Book = mongoose.model('books', booksSchema);
// Exportar ES5
module.exports = Book;