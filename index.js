import viewsRoutes from './routes/views.js';
import productsRoutes from './routes/productos.js';
import express from 'express';
import dotenv from 'dotenv';

const app = express(); // requiero el archivo .env para el servidor
dotenv.config();

const port = process.env.PORT; //traigo el puerto indicado en el .env

app.set('view engine', 'ejs');  //indico que el servidor va a leer un motor de vista ejs
app.use(express.static('public')); /*indico que el servidor tiene que usar lo que esta dentro de public
para que posteriormente lo lea el ejs */
app.use(express.json()); //le indico a la api que el servidor lee JSON

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.use(viewsRoutes);
app.use(productsRoutes);
