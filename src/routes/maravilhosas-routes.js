const express = require('express');
const router = express.Router();
const controller = require('../controllers/maravilhosas-controller');
const cors = require('cors')

router.get('/maravilhosas', cors(), controller.getMaravilhosas );
router.get('/maravilhosas/:id', cors(), controller.getMaravilhosaById );
router.post('/maravilhosas', cors(), controller.addMaravilhosa );
router.put('/maravilhosas/:id', cors(), controller.updateMaravilhosa)
router.delete('/maravilhosas/:id', cors(), controller.deleteMaravilhosa)



/*
Router.get('/cadastrar', UserController.create);
Router.post('/cadastrar', UserController.store);
Router.get('/login', UserController.show);
Router.post('/login', UserController.login);*/

//get /maravilhosas

//post /maravilhosas

//get /maravilhosas/id

//put /maravilhosas/id

//delete /maravilhosas/id

module.exports = router;

