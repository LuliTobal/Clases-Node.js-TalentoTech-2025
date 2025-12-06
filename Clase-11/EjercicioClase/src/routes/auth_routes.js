import express from 'express';
import { login } from '../controllers/auth_controllers.js';

const routes = express.Router();
routes.post('/login', login);

export default routes;