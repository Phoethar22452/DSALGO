/*
    pseudo code of binary search
    - the array must be sorted  
    - create a pointer from the left[start] to right[end]
    - inside the  loop decide 3 things
        - create a pointer in the middle [if this is what we want then return we are done]
        - if value is too small move the left pointer up
        - if value is too big move the right pointer down
        - continue the same loop 
    - if value never find , -1 must be return

    -Linear search 
    Worst/Average O(N)
    Best O(1)
    -Linear search 
    Worst/Average O(LogN)
    Best O(1)
*/

function binarySearch(arr, ele) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== ele && start <= end) {
        if (ele < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === ele ? middle : -1; 
}