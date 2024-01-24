class Alphabet {
    constructor() {
        this.alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z'];
    }
    length() {
        return this.alphabet.length;
    }
    find(val) {
        return this.alphabet.indexOf(val);
    }
    get(index) {
        return this.alphabet[index];
    }
}

function caesarCipher(string, rot) {
    const alphabet = new Alphabet();
    const stringArray = Array.from(string);
    const rotatedStringArray = [];
    for (e of stringArray) {
        const index = alphabet.find(e);
        const returned = alphabet.get(index+rot);
        rotatedStringArray.push(returned);
    }
    return rotatedStringArray;
}
