

class ConvertNumber  {
    convertDecimalToRomanNumber ({ number }) {}
}


describe('ConvertDecimalToRomanNumber', () => {
    let convertNumberClass;

    beforeEach(() => {
        convertNumberClass = new ConvertNumber();
    });

    it('should call ConvertNumberDecimalToRoman with number correct', () => {
        const number = 1;
        const spy = jest.spyOn(convertNumberClass, 'convertDecimalToRomanNumber');
        convertNumberClass.convertDecimalToRomanNumber({ number });
        expect(spy).toHaveBeenCalledWith({ number });
    });
})