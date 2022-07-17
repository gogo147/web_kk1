const express = require('express');
const api = require('./api');

const app = express();
const PORT = 3001

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to server'
    })
})

app.use(bodyparser.json());
app.use('/api', api);
app.use(cors());

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})