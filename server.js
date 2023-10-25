import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5173;

app.use(express.static(path.join(__dirname, 'src/pages')));

app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, 'src/pages', '/menu/index.jsx'));
});

app.post('/api/login', (req, res) => {
  res.redirect('/login/index.jsx');
});

app.post('/api/cadastro2', (req, res) => {
  res.redirect('/cadastro/index.jsx');
});
 
app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});
