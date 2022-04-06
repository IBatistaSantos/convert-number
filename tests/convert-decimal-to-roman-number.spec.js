

class ConvertNumberService  {
    convertDecimalToRomanNumber ({ number }) {
        const romanNumber = {
            'M': 1000,
            'CM': 900,
            'D': 500,
            'CD': 400,
            'C': 100,
            'XC': 90,
            'L': 50,
            'XL': 40,
            'X': 10,
            'IX': 9,
            'V': 5,
            'IV': 4,
            'I': 1
        }

        let result = ''

        for (let key in romanNumber) {
            while (number >= romanNumber[key]) {
                result += key
                number -= romanNumber[key]
            }
        }

        return result
    }

    convertRomanNumberToDecimal ({ romanNumber }) {}
}


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
    })
})