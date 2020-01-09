const express = require('express')
const router = express.Router()
const share = require('./share')
const user = require('./user')

router.use('/share', share)
router.use('/user', user)

router.get('/', (req, res) => {
    res.send('Test')
});

module.exports = router