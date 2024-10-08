import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import rutas from './routes/route.js';
import { iniciarConexion } from "./database/db.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, './public')));

app.use('/', rutas);
iniciarConexion();
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto: ${port}`);
});
