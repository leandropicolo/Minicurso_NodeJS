const { Router } = require('express');
const UserController = require('./controllers/UserController');

const routes = Router();

routes.get('/health', (req,res) => {
    return res.status(200).json({message: 'server is on...'});
});


routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.store);

module.exports = routes;