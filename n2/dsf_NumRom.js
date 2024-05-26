function convertToRoman(num) {
  const romanNumerals = {
    1: ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    2: ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    3: ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    4: ['', 'M', 'MM', 'MMM']
  };

  let result = '';
  let pos = 1; 
  
  while (num > 0) {
    const digit = num % 10;
    result = romanNumerals[pos][digit] + result;
    num = (num - digit) / 10; 
    
    pos++;
  }

  return result;
}
