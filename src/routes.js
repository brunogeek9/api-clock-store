const express = require('express');
const routes = express.Router();
const crud = require('./mongo_cruds/crud_clock');
routes.get('/clocks', crud.index);
routes.post('/clocks', async (request, response) => {
    try {
        const clock = await Clock.create(request.body);
        response.send(clock);
    } catch (error) {
        response.status(500).send(error);
    }
});
routes.get('/clock/:id',crud.show);
routes.put('/clock',crud.update);
routes.delete('/clock/:id',crud.destroy);


module.exports = routes;
