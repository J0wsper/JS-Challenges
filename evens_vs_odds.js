function availableSpots(arr, num) {
    let likedSpots = 0;
    const parity = evenOrOdd(num);
    for (i = 0; i < arr.length-1; i++) {
        const left = arr[i];
        const right = arr[i+1];
        const leftParity = evenOrOdd(left);
        const rightParity = evenOrOdd(right);
    
        if (parity == 'odd') {
          
            if (leftParity == 'even' && rightParity == 'even') {
                continue;
            }

            else {
                likedSpots++;
            }

        }
        else {

            if (leftParity == 'odd' && rightParity == 'odd') {
                continue;
            }

            else {
                likedSpots++;
            }
        }

    }
    return likedSpots;
}


function evenOrOdd(num) {
    if (num % 2 == 1) {
        return 'odd';
    }
    else {
        return 'even';
    }
}

console.log(availableSpots([4,4,4,4,5],7))