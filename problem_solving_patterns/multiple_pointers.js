/* multiple pointers are use when in case we have to loop over the array to solve a problem.
   this approach is better than nested loop with is quadric in BigO.
   creating pointers or values that correspond to an index or position and move towards the beginning, end, or middle 
   based on a certain condition.
   very efficient for solving problems with minimal space complexity as well.
*/
/*
    this func is to find the sum zero pair where both two elements exist in the array
*/
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum == 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

/*
    this func is to find the count of unique values
*/

function countUniqueValues(arr) {
    let i = 0;
    let j = 1;
    let lookup = {};

    while (j <= arr.length & i < j) {
    		let value = arr[i];
        if (!lookup[value]) {
        	lookup[value] = 1;
        } else {
        	lookup[value] += 1;
        }
        i++;
        j++;
    }
    return lookup.length;
}
console.log(countUniqueValues([1,2,3,4,5,1,2,3,4,5,6,7,8,1,1,1,1,1,1,1]));

// This one is more optimized even though BigO(N) is same same
function countUniqueValuesTwo(arr) {
    if (arr.length == 0) { return 0; }
    var i = 0;
    for (j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}