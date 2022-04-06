
const ConvertNumberService = require('../src/services/convert-number.service');


describe('ConvertNumber', () => {
    let convertNumberService;

    beforeEach(() => {
        convertNumberService = new ConvertNumberService();
    });

    describe('ConvertNumberDecimalToRoman', () => {
        it('should call ConvertNumberDecimalToRoman with number correct', () => {
            const number = 1;
            const spy = jest.spyOn(convertNumberService, 'convertDecimalToRomanNumber');
            convertNumberService.convertDecimalToRomanNumber({ number });
            expect(spy).toHaveBeenCalledWith({ number });
        });
    
        it('should return number roman equals C for number decimal 100', () => {
            const number = 100;
            const result = convertNumberService.convertDecimalToRomanNumber({ number });
            expect(result).toBe('C');
        })
    
        it ('should print empty as long as number is less than or equal to zero', () => {
            expect(convertNumberService.convertDecimalToRomanNumber({ number: 0 })).toBe('');
        });
    })
    
    describe('ConvertRomanToDecimal', () => {
        it('should call ConvertRomanToDecimal with number correct', () => {
            const romanNumber = 'I';
            const spy = jest.spyOn(convertNumberService, 'convertRomanNumberToDecimal');
            convertNumberService.convertRomanNumberToDecimal({ romanNumber });
            expect(spy).toHaveBeenCalledWith({ romanNumber });
        });

        it ('should print 1 for I', () => {
            const romanNumber = 'I';
            expect(convertNumberService.convertRomanNumberToDecimal({ romanNumber })).toBe(1);
        })

        it ('should print 250 for CCL', () => {
            const romanNumber = 'CCL';
            expect(convertNumberService.convertRomanNumberToDecimal({ romanNumber })).toBe(250);
        })
    })
})