/*
    recursion is doing the same process all the time.
    recursive function is also doing the same task all the time but it consists of two main components
    1. base case
    2. different input

    | Benefit                           | Recursion
    | --------------------------------- | ---------
    | Readability & elegance            | ✅
    | Matches natural problem structure | ✅
    | Great for tree/graph traversal    | ✅
    | Supports divide & conquer         | ✅
    | Functional programming fit        | ✅
*/

function countDown(num) {
    if (num <= 0) {
        console.log('All done!');
        return 1;
    }
    console.log(num);
    countDown(num);
    num--;
}

countDown(10);