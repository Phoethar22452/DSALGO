// Run: node big_notation.js
function addUpToOne(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

function addUpToTwo(n) { 
    return n * (n + 1) / 2;
}

/*
Function 2 is constant n so O(1)
Function 1 trends increase (resources, operations, time) based on n
O(n)
*/

/*
Big O Notation
----------------
Shortly to analyse the performance of an algorithm
Finding better function for the same purpose and result 
With Big 0 (based on the different of num of procs)
Time and Space Complexity of an algorithm 
Space Complexity = auxillary space complexity

Time Complexity :
-----------------
(the amount of time it takes to solve a problem)
Big O Notation is a way to formalize counting. It allows us to talk formally how the runtime of an algorithm grows as the inputs grow. Details are not imporatant, only focus on the general trends.

O(2n) = O(n)
O(500) = O(1)
O(15n.square + 100n + 8) = O(n.sqare) [# Only focus on big picture (as it should n.square + n)]

Possible Graph Trends
---------------------
O(1) ) (constant)
O(logn)
O(n) (linear)
O(nlogn)
O(n.square) (quadratic complexity)

O(1) → Constant Time (Fastest)
O(log n) → Logarithmic Time (Very Efficient)
O(n) → Linear Time (Grows Proportionally)
O(n * log n) → Log-Linear Time (Common in Sorting)
O(n²), O(2ⁿ), O(n!) → Slower, exponentially growing complexities

Rule of Thumbs
--------------
When determining the time complexity of an algorithm, there are some useful rule of thumbs for Big O expressions.
There rules of thumbs are consequences of the definition of Big O notation.

Space Complexity :
------------------
Rule of Thumbs
--------------
(the amount of space it takes to solve a problem)
When determining the space complexity of an algorithm, there are some useful rule of thumbs for Big O expressions.
There rules of thumbs are consequences of the definition of Big O notation.
Most primitives (booleans, numbers, undefined, null) are constant space
String require O(n) space (where n is the string length)
Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

The Logarithm Complexity
------------------------
(the number of steps it takes to solve a problem)
In Big O notation, logarithmic complexity, denoted as O(log n), represents an algorithm whose runtime grows very slowly as the input size n increases. Specifically, it often refers to the base-2 logarithm, log₂(n), because operations in computer science frequently involve halving the problem size.
The logarithm of a number roughly measures by the number of times you can divide that number by two before you get a value that's less than or equal to one.

log2(n) = exponent 
log2(16)  = ? 
16 / 2 = 8
8 / 2 = 4
4 / 2 = 2
2 / 2 = 1

4 times = 
log2(16) = 4
2 4(sub) = 16 

Cares
-----
Certian searching algorit have logarithmic time complexity
Efficient sorting algorithms involve logarithms
Recursion sometimes involves logarithmic space complexity
*/