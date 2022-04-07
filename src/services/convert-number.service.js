class ConvertNumberService  {
    convertDecimalToRomanNumber ({ number }) {
        const romanNumbers = this.getSymbolsRomanNumber();
        let result = ''

        for (let key in romanNumbers) {
            while (number >= romanNumbers[key]) {
                result += key
                number -= romanNumbers[key]
            }
        }
        return result
    }

    convertRomanNumberToDecimal ({ romanNumber }) {
        const romanNumberMap = this.getSymbolsRomanNumber();
        let numberdecimal = 0;

        for (let counterLength = 0; counterLength < romanNumber.length; counterLength++) {
              const current = romanNumberMap[romanNumber[counterLength]];
              const next = romanNumberMap[romanNumber[counterLength + 1]];
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