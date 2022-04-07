
const ConvertNumberService = require('../services/convert-number.service');
const convertNumberService = new ConvertNumberService();

exports.convertDecimalToRomanNumber = (req, res) => {
        const result =  convertNumberService.convertDecimalToRomanNumber({ number: Number(req.query.number) });
        return res.json(result);
}

exports.convertRomanNumberToDecimal = (req, res) => {
    const result =  convertNumberService.convertRomanNumberToDecimal({ romanNumber: req.query.number });
    return res.json(result);
}

