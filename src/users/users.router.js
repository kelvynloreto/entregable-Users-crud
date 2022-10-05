//* rutas

const router = require('express').Router();
const userServices = require('./users.services')


//* /users
router.get('/users' , userServices.getUsers)
router.post('/users', userServices.createNewUser)

//* users:id
router.get('/users:id', userServices.getOneUser)

module.exports= router