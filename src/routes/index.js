const { Router } = require('express');
const ConvertNumberController = require('../controllers/convert-number.controller');

const routes = Router();


routes.get('/convert/decimalToRoman', ConvertNumberController.convertDecimalToRomanNumber);
routes.get('/convert/romanToDecimal', ConvertNumberController.convertRomanNumberToDecimal);

module.exports = routes;