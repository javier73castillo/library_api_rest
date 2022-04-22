<<<<<<< HEAD
// Importar Express -> Métodos o funciones para gestionar mi server
const express = require('express');
const cors = require('cors');
const { configCloudinary } = require('./src/utils/cloudinary/config');
const { connect } = require('./src/utils/database/db');
const BookRoutes = require('./src/api/books/books.routers');
const AuthorRoutes = require('./src/api/authors/authors.routers');
const UserRoutes = require('./src/api/users/users.routes');

const PORT = process.env.PORT || 8080;
const app = express();
connect();

configCloudinary();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})


app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4200', 'https://bookstore-react-two.vercel.app'],
    credentials: true
}));

// Límite de flujo de información
app.use(express.json({ limit: '5mb' }))

app.use(express.urlencoded({
    limit: '5mb',
    extended: true
}));

// Cargar las rutas
app.use('/api/books', BookRoutes);
app.use('/api/authors', AuthorRoutes);
app.use('/api/users', UserRoutes);
app.use('/', (req, res, next) => {
    return res.json('Mis EndPoints son /api/books & /api/authors')
})


app.use('*', (req, res, next) => {
    const error = new Error();
    error.status = 404;
    error.message = 'Route not found';
    return next(error);
});



app.use((error, req, res, next) => {
    return res.status(error.status || 500).json(error.message || 'Unexpected error');
});

app.disable('x-powered-by');

const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
=======
// Importar Express -> Métodos o funciones para gestionar mi server
const express = require('express');
const cors = require('cors');
const { configCloudinary } = require('./src/utils/cloudinary/config');
const { connect } = require('./src/utils/database/db');
const BookRoutes = require('./src/api/books/books.routers');
const AuthorRoutes = require('./src/api/authors/authors.routers');
const UserRoutes = require('./src/api/users/users.routes');

const PORT = process.env.PORT || 8080;
const app = express();
connect();

configCloudinary();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})


app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4200', 'https://bookstore-react-two.vercel.app/login', 'https://library-api-rest.vercel.app'],
    credentials: true
}));

// Límite de flujo de información
app.use(express.json({ limit: '5mb' }))

app.use(express.urlencoded({
    limit: '5mb',
    extended: true
}));

// Cargar las rutas
app.use('/api/books', BookRoutes);
app.use('/api/authors', AuthorRoutes);
app.use('/api/users', UserRoutes);
app.use('/', (req, res, next) => {
    return res.json('Mis EndPoints son /api/books & /api/authors')
})


app.use('*', (req, res, next) => {
    const error = new Error();
    error.status = 404;
    error.message = 'Route not found';
    return next(error);
});



app.use((error, req, res, next) => {
    return res.status(error.status || 500).json(error.message || 'Unexpected error');
});

app.disable('x-powered-by');

const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
>>>>>>> f7c2d64b804292ffb54f3980423a57bd46e77954
});