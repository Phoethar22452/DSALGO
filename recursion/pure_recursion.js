function collectOddValues(arr) {
    let newArr = [];
    if (arr.length == 0) {
        return;
    }
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

/* # Pure recursion tips
1- For arrays, use methods like slice, spread operator, and concat that makes copies of arrays so you 
do not mutate them
2- Remember that strings are immutable so you will need methods like slice, substr, substring to make copies 
of strings
3- To make copies of objects use Object.assign, or the spread operator
*/
