 const express = require('express');
const  routes  = require('./routes');

const app = express();

app.use(express.json());
app.use(routes)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});




/* const ConvertNumberService = require('../src/services/convert-number.service');

const convertNumberService = new ConvertNumberService();

(console.log(convertNumberService.convertDecimalToRomanNumber({ number: 1 }))); */
