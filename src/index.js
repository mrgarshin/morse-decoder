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
    // let arr = expr.split("**********");
        // for( let i of arr) {
    //     let newStr = i.replaceAll('11', '-').replaceAll('10', '.').replaceAll('0', ' ').trim().split(" ");
    //     for (let j = 0; j < newStr.length; j++) {
    //         if (Object.keys(MORSE_TABLE).includes(newStr[j])) {
    //             result += Object.values(MORSE_TABLE)[Object.keys(MORSE_TABLE).indexOf(newStr[j])];
    //         }
    //     }
    //     result += " "
    // }
    // return result.trim()
    let result = '';
    let arr = [];
    for(let i = 0; i <=expr.length; i+=10) {
        arr.push(expr.slice(i, i+10))
    }
    arr = arr.join(' ').replaceAll('11', '-').replaceAll('10', '.').replaceAll('0', '').trim().split(' ');
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '**********') {
            result += " ";
        } else {
            result += MORSE_TABLE[arr[i]];
        }
    }
    return result;
}

module.exports = {
    decode
}