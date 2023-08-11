const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.split("**********");
    let result = '';
    for( let i of arr) {
        let newStr = i.replaceAll('11', '-').replaceAll('10', '.').replaceAll('0', ' ').trim().split(" ");
        for (let j = 0; j < newStr.length; j++) {
            if (Object.keys(MORSE_TABLE).includes(newStr[j])) {
                result += Object.values(MORSE_TABLE)[Object.keys(MORSE_TABLE).indexOf(newStr[j])];
            }
        }
        result += " "
    }
    return result.trim()
}

module.exports = {
    decode
}