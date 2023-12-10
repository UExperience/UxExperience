import express from 'express';
import './shared/services/TranslateYup';
import { router } from './routes/usuariosRoutes'

const server = express();
server.use(express.json());
const cors = require('cors');
const app = server;

app.use(cors());

server.use(router);

export { server };