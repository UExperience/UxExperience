import express from 'express';
import './shared/services/TranslateYup';
import { routerUser } from './routes/usuariosRoutes'
import { routerAreaAcademica } from './routes/areaAcademicaRoutes'

const server = express();
server.use(express.json());
const cors = require('cors');
const app = server;

app.use(cors());

server.use(routerUser,routerAreaAcademica );

export { server };