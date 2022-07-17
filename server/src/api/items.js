const express = require('express');

const router = express.Router();

const items = [
    {id: '1' , name: 'buy cars', completed: false},
]

router.get('/', (req, res) => {
    res.json({
        items,
    });
});

module.exports = router;