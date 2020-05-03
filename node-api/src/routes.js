const express = require('express');
const routes = express.Router();
// const mongoose = require('mongoose');

const ProductController = require('./controller/ProductController');

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);
routes.get('/products/:id', ProductController.show);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);


module.exports = routes;