const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const mD = require('./module.js');

app.listen(3000, () => {
    console.log('listening at port 3000');
})  