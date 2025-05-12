/* Iterative way */
function factorialOne(num) {
    let total = 0;
    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}

/* Recursive way */
function factorialTwo(num) {
    if (num === 1) return 1;
    return num * factorialTwo(num - 1);
}

/* Thumb rules
    1- must have a valid base case to stop recursion
    2- different input must come in and process with it
    3- also the process must have an impact on the base case
*/