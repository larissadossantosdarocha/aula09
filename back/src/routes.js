const express = require('express')
const router = express.Router();

const clientes = require('./controll/clientes')
const telefone = require('./controll/telefone')
const quartos = require('./controll/quartos')
const reservas = require('./controll/reservas')
const estacionamento = require('./controll/estacionamento')

const teste = (req, res)=>{
    res.json("API Loja TI respondendo com sucesso!");
}

router.get('/',teste);
router.post('/clientes',clientes.create);
router.get('/clientes', clientes.read);
router.put('/clientes', clientes.update);
router.delete('/clientes/:id', clientes.deletar);

router.get('/',teste);
router.post('/telefone',telefone.create);
router.get('/telefone', telefone.read);
router.put('/telefone', telefone.update);
router.delete('/telefone/:id', telefone.deletar);

router.get('/',teste);
router.post('/quartos',quartos.create);
router.get('/quartos', quartos.read);
router.put('/quartos', quartos.update);
router.delete('/quartos/:id', quartos.deletar);

router.get('/',teste);
router.post('/reservas',reservas.create);
router.get('/reservas', reservas.read);
router.put('/reservas', reservas.update);
router.delete('/reservas/:id', reservas.deletar);

router.get('/',teste);
router.post('/estacionamento', estacionamento.create);
router.get('/estacionamento', estacionamento.read);
router.put('/estacionamento', estacionamento.update);
router.delete('/estacionamento/:id', estacionamento.deletar);

module.exports = router;