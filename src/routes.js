// Router for routes
const express = require('express');
const router = express.Router();

const PipedriveController = require('./app/controllers/PipedriveController');
const ClientController = require('./app/controllers/ClientController');
const ProductController = require('./app/controllers/ProductController');
const OrderController = require('./app/controllers/OrderController');

// Pipedrive
router.get('/pipedrive', PipedriveController.show);
router.get('/pipedrive/won', PipedriveController.index);

// Bling - Contatos
router.get('/bling/contatos', ClientController.show);
router.post('/bling/contatos', ClientController.store);

// Bling - Produtos
router.get('/bling/produtos', ProductController.show);
router.post('/bling/produtos', ProductController.store);

// Bling - Pedidos
router.get('/bling/pedidos', OrderController.show);
router.post('/bling/pedidos', OrderController.store);

module.exports = router;
