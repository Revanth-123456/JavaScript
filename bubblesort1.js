function bubbleSort(arr) {
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < arr.length - 1; i++) {
            // instead of > for ascending use < for desending
            if (arr[i] > arr[i + 1]) {
                // swap
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }

    } while (swapped);

    return arr;
}

// calling function
let result = bubbleSort([-3, 30, 1, -2, 10]);
console.log(result.reverse());