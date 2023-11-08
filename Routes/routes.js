// import usercontroller js file
const userController = require('../Controllers/userController')
// import express.js
const express = require('express')

// create router for express app using Router object
const router = new express.Router()

// define different routes for server app
// register
router.post('/user/register', userController.register)



// export router
module.exports = router