function zeroesToEnd(arr) {

    for (let i = 0; i < arr.length; i++) {

        //Depending on how many zeroes there are, splice that many elements.
        if (arr[i] == 0 && arr[i+1] == 0) {
            
            //Stopping condition.
            if (arr.slice(i).every((element) => element == 0)) {
                continue;
            }

            let zeroIndex = i;

            while (arr[zeroIndex] == 0) {
                zeroIndex++;
                arr.push(0);
            }

            const zeroQuantity = zeroIndex-i

            arr.splice(i,zeroQuantity)

        }

        //Otherwise, if there is only 1 zero, just remove that zero.
        else if (arr[i] == 0) {
            arr.splice(i,1);
            arr.push(0);
        }
    }
    return arr;
}
