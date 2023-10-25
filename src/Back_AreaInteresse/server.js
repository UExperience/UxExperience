<<<<<<< HEAD
//server.js
const express = require('express');
const bodyParser = require('body-parser');
const { createConnection } = require('typeorm');
const AreaInteresse = require('./Back_AreInteresse/AreaInteresse.js');

const app = express();
const port = process.env.PORT || 5173;

app.use(bodyParser.json());

createConnection()
  .then(async () => {
    app.get('/test-db-connection', async (req, res) => {
      res.send('Conexão com o banco de dados estabelecida com sucesso.');
    });

    app.post('/api/areas-interesse', async (req, res) => {
      try {
        const { descricao, ativo } = req.body;
        const areaInteresse = new AreaInteresse();
        areaInteresse.descricao = descricao;
        areaInteresse.ativo = ativo;
        await areaInteresse.save();
        res.json(areaInteresse);
      } catch (error) {
        console.error('Erro ao cadastrar Área de Interesse:', error);
        res.status(500).send('Erro interno do servidor');
      }
    });

    app.put('/api/areas-interesse/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const { descricao, ativo } = req.body;
        const areaInteresse = await AreaInteresse.findOne(id);
        if (!areaInteresse) {
          return res.status(404).send('Área de Interesse não encontrada');
        }
        areaInteresse.descricao = descricao;
        areaInteresse.ativo = ativo;
        await areaInteresse.save();
        res.json(areaInteresse);
      } catch (error) {
        console.error('Erro ao editar Área de Interesse:', error);
        res.status(500).send('Erro interno do servidor');
      }
    });

    app.listen(port, () => {
      console.log(`Servidor está ouvindo na porta ${port}`);
    });
  })
  .catch((error) => {
    console.error('Erro na conexão com o banco de dados:', error);
  });
=======
//server.js
const express = require('express');
const bodyParser = require('body-parser');
const { createConnection } = require('typeorm');
const AreaInteresse = require('./Back_AreInteresse/AreaInteresse.js');

const app = express();
const port = process.env.PORT || 5173;

app.use(bodyParser.json());

createConnection()
  .then(async () => {
    app.get('/test-db-connection', async (req, res) => {
      res.send('Conexão com o banco de dados estabelecida com sucesso.');
    });

    app.post('/api/areas-interesse', async (req, res) => {
      try {
        const { descricao, ativo } = req.body;
        const areaInteresse = new AreaInteresse();
        areaInteresse.descricao = descricao;
        areaInteresse.ativo = ativo;
        await areaInteresse.save();
        res.json(areaInteresse);
      } catch (error) {
        console.error('Erro ao cadastrar Área de Interesse:', error);
        res.status(500).send('Erro interno do servidor');
      }
    });

    app.put('/api/areas-interesse/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const { descricao, ativo } = req.body;
        const areaInteresse = await AreaInteresse.findOne(id);
        if (!areaInteresse) {
          return res.status(404).send('Área de Interesse não encontrada');
        }
        areaInteresse.descricao = descricao;
        areaInteresse.ativo = ativo;
        await areaInteresse.save();
        res.json(areaInteresse);
      } catch (error) {
        console.error('Erro ao editar Área de Interesse:', error);
        res.status(500).send('Erro interno do servidor');
      }
    });

    app.listen(port, () => {
      console.log(`Servidor está ouvindo na porta ${port}`);
    });
  })
  .catch((error) => {
    console.error('Erro na conexão com o banco de dados:', error);
  });
>>>>>>> 207ffc8a98d11bbcb989fed82e50b8cb7f96828f
