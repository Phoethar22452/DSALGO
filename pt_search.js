// Original array with unique values
const arr = [1, 4, 6, 12, 5, 123, 99, 42, 7];

// Step 1: Preprocess the array into a map (object)
const indexMap = {};
for (let i = 0; i < arr.length; i++) {
  indexMap[arr[i]] = i;
}

// Step 2: Now you can search for any value in O(1) time
const targets = [123, 4, 42, 7, 1];

for (const val of targets) {
  console.log(`Value: ${val} is at index: ${indexMap[val]}`);
}

