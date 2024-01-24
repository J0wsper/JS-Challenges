class Alphabet {
    constructor() {
        this.alphabet = {1: 'a',2:'b',3:'c',4:'d',5:'e',6:'f',7:'g',8:'h',9:'i',10:'j',11:'k',12:'l',13:'m',
        14:'n',15:'o',16:'p',17:'q',18:'r',19:'s',20:'t',21:'u',22:'v',23:'w',24:'x',25:'y',26:'z'};
    }
    length() {
        return this.alphabet.length;
    }
    rotate(index, rot) {
        for (let i = 0; i < this.alphabet.length; i++) {
            this.alphabet[i] = index.alphabet[i+rot]; 
        }
    }
}

function caesarCipher(string, rot) {
    const alphabet = new Alphabet();
    let cipher = new Alphabet();
    cipher.rotate(alphabet,rot);
    const stringArray = Array.from(string);
    for (e of stringArray) {
        
    }
}

console.log(caesarCipher('gee',1))
