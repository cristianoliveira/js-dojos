# Array Infinity Slicer

The idea behind this challenge is to have access to items inside of an array
independtly of if the given index is inside the array's range take the examples
below:

```
const array = [1,2,3,4];

console.log(slicer(array, 1)) // 2
console.log(slicer(array, 3)) // 4
console.log(slicer(array, 4)) // 1
console.log(slicer(array, -2)) // 3
console.log(slicer(array, -3)) // 4
```

Also we should be able to have slices following the same principle. Example:

```
const array = [1,2,3,4,5,6];

console.log(slicer(array, 1, 2)) // slice from index 1 till 2 equals [2,3]
console.log(slicer(array, 5, 8)) // slice from index 5 till 8 equals [6,1,2,3]
```
