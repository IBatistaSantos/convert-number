
const ConvertNumberService = require('../services/convert-number.service');
const convertNumberService = new ConvertNumberService();

exports.convertDecimalToRomanNumber = (req, res) => {
    try {
        const { number } = req.query;

        if(!number) {
            return res.status(400).send({ error: 'Number is required' });
        }
        
        const result =  convertNumberService.convertDecimalToRomanNumber({ number: Number(req.query.number) });
        return res.status(200).json({ 
            romanNumber: result,
            decimal: number 
        });
    } catch (error) {
        return res.status(500).send({ error: error });
    }    
}

exports.convertRomanNumberToDecimal = (req, res) => {
    try {
        const { number } = req.query;
    
        if(!number) {
            return res.status(400).send({ error: 'Number is required' });
        }

        const result =  convertNumberService.convertRomanNumberToDecimal({ romanNumber: req.query.number });
        return res.status(200).send({ 
            romanNumber: number,
            decimal: result 
        });
    }
     catch (error) {
        return res.status(500).send({ error: error.message });
    }  
}

