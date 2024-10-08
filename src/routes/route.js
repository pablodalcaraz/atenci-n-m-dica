import { Router } from "express";
import { login } from '../controllers/controllerMedico.js'; 

const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/login', login);

router.get('/agenda', (req,res) => {
    res.render('agenda')
})

export default router;
