import { iniciarConexion } from "../database/db.js";

export const login = async (req, res) => {
    const { nombre_medico, matriculaMedico } = req.body;
    try {
        const connection = await iniciarConexion();
        const query = 'SELECT * FROM medico WHERE nombre_medico = ? AND matriculaMedico = ?';
        const [result] = await connection.execute(query, [nombre_medico, matriculaMedico]);//filtra el resultado directamente en la base de datos y devuelve solo uno 
            if (result.length > 0) {
                return res.redirect('/agenda');
            } else {
                return res.status(401).send('Credenciales inválidas');
            }

    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        return res.status(500).send('Error en el servidor');
    }
};
