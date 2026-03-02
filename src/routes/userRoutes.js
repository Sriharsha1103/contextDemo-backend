const express = require('express')
const { addUser, getUser, getUserById } = require('../controllers/userController')
const router = express.Router()


// Register a new user
router.post('/user', addUser)
router.get('/user/:id', getUserById)
router.get('/user', getUser)

module.exports = router