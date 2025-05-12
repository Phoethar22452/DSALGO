/*
    Sliding Window
    This pattern involves creating a window which can either be an array or a number from one position to another.
    Depending on a certain condition, window either increases or closes (and a new window is created)
    Very useful for keeping track of a subset of data in an array/string etc.
*/


// Normal O(N2)
function maxSubarraySumOne(arr, num)
{
    if (num > arr.length) {
        return null;
    }

    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
        console.log(temp, max);
    }

    return max;
}

maxSubarraySumTwo([1,5,7,8,9,1,4,5,6,7,8,1], 3);

// Refactor O(N)
function maxSubarraySumTwo(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        console.log(`${tempSum} - ${arr[i - num]} + ${arr[i]}`);
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
        console.log(`${tempSum} : ${maxSum}`);
    }

    return maxSum;
}