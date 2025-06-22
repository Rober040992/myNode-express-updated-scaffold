import express from 'express';
import { example } from '../controllers/controllerExample.js';

const router = express.Router();

router.get('/', example);

export default router;