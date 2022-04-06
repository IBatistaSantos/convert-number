class ConvertNumberService  {
    convertDecimalToRomanNumber ({ number }) {
        const romanNumber = this.getSymbolsRomanNumber();
        let result = ''

        for (let key in romanNumber) {
            while (number >= romanNumber[key]) {
                result += key
                number -= romanNumber[key]
            }
        }
        return result
    }

    convertRomanNumberToDecimal ({ romanNumber }) {
        const romanNumberMap = this.getSymbolsRomanNumber();
        let numberdecimal = 0;

        
        for (let i = 0; i < romanNumber.length; i++) {
              const current = romanNumberMap[romanNumber[i]];
              const next = romanNumberMap[romanNumber[i + 1]];
              if (next === undefined) {
                  numberdecimal += current;
                  continue;
              }
              if (current >= next) {
                  numberdecimal += current;
                  continue;
              }
              numberdecimal -= current;
      } 
          return numberdecimal; 
    }

    getSymbolsRomanNumber() {
        return {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        }
    }
}


module.exports = ConvertNumberService