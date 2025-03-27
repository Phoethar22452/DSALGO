let instructor = {
    firstName: "Aung Kaung Myat",
    isInstructor: true,
    favouriteNumbers: [1, 2, 3, 4]
};
/*
insertion - O(1)
removal - O(1)
searching - O(N)
access - O(1)

Object.keys - O(N)
Object.values - O(N)
Object.entries - O(N)
Object.hasOwnProperty - O(1)
*/

let arr = ["aungaung", "maungmaung", "zawzaw"];

/*
Insertion - it depends... 
Removal - it depends...
Searching - O(N)
Access - O(1)

push & pop always faster than shift & unshift

push O(1)
pop O(1)
shift O(N)
unshift O(N)

concat O(N)
slice O(N)
splice O(N)
sort O(N * logN)
foreach/map/filter/reduce/etc O(N)
*/