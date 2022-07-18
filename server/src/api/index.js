const express = require('express');

const items = require('./items');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Hello World',
    });
});

router.use('/items', items);

module.exports = router;