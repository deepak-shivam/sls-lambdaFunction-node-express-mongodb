const express = require('express')
const router = express.Router()

const {userLogin, userRegister} = require('../controller/user')

//USER REGISTER
router.post('/user', userRegister)

// USER LOGIN
router.post('/session', userLogin)



module.exports = router