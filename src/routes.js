const express = require('express');
const routes = express.Router();
const crud = require('./mongo_cruds/crud_clock');
routes.get('/clocks', crud.index);
routes.post('/clocks', crud.store);
routes.get('/clock/:id',crud.show);
routes.put('/clock/:id',crud.update);
routes.delete('/clock/:id',crud.destroy);


module.exports = routes;
