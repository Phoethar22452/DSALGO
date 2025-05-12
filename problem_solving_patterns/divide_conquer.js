/*
    This pattern involves dividing a data set into smaller chunks and then 
    repeating a process with a subset of data.
    This pattern can tremendously decrease time complexity.
*/

// Linear search O(N) Time Complexity
function search(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

// Binary search Log(N) Time Complexity
function betterSearch(arr, val) {
    let min = 0;
    let max = arr.length;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if (arr[middle] < val) {
            min = middle + 1;
        } else if (arr[middle] > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
}

console.log(betterSearch([1,2,3,4,5,6,7,8,9,10], 3));