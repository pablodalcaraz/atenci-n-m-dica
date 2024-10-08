import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const conConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

let connection;

async function iniciarConexion() {
    if (!connection) {
        try {
            connection = await mysql.createConnection(conConfig);
            console.log('Conectado a la base de datos MySQL');
        } catch (error) {
            console.error('No se pudo establecer la conexión a la BD', error);
            process.exit(1);
        }
    }
    return connection;
}

export { iniciarConexion };