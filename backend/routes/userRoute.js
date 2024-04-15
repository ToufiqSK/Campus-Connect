import express from 'express';
import { Register } from '../controllers/auth.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.route('/register').post(Register)
export default router;