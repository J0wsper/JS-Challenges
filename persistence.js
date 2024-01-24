function additivePersistence(num) {
    let numString = num.toString();
    let numArray = Array.from(numString, (v,i) => Number(v));
    let iterations = 0;
    while (numArray.length > 1) {
        let total = 0;
        for (e of numArray) {
            total += e;
        }
        numString = total.toString();
        numArray = Array.from(numString, (v,i) => Number(v));
        iterations++;
    }
    return iterations;
}

function multiplicativePersistence(num) {
    let numString = num.toString();
    let numArray = Array.from(numString, (v,i) => Number(v));
    let iterations = 0;
    while (numArray.length > 1) {
        let total = 1;
        for (e of numArray) {
            total *= e;
        }
        numString = total.toString();
        numArray = Array.from(numString, (v,i) => Number(v));
        iterations++;
    }
    return iterations;
}