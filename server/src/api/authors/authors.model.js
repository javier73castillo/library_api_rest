// Requerir la librería de mongoose
const mongoose = require('mongoose');
// Creamos un SCHEMA -> Es un método de una clase que nos permite definir un modelo de datos.
const authorSchema = new mongoose.Schema(
    // Type: es el tipo de dato
    // Required: si es un campo obligatorio
    // Trim: elimina los espacios al principio y final
    {
        name: { type: String, required: true, trim: true },
        date: { type: Date, required: false, trim: true },
        nationality: {type: String, required: false, trim: true},
        books: [{ type: mongoose.Schema.Types.ObjectId, ref: "books", required: false, trim: true }],

    },
    // Timestamps: fecha de creación - modificación
    {
        timestamps: true
    }
);

// Guardar en Author la referencia y el Schema
// authors - es el nombre de mi colección en la DB
const Author = mongoose.model('authors', authorSchema);
// Exportar ES5
module.exports = Author;