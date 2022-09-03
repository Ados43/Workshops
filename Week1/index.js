// Task 1
console.log("Task 1:");
console.log("Hello World, Node.js!");

// Task 2
console.log("\nTask 2:");
var array = [1,2,3,4,5];
console.log("Original Array: " + array);

array.push(6);
// Adds element to end of array
console.log("Push Array: " + array);

array.unshift(0);
// Add element to beginning of array
console.log("Unshift Array: " + array);

array.splice(3, 0, 2.5);
// Insert element into array
console.log("Splice Add Array: " + array);

array.pop();
// Remove the last number from the array
console.log("Pop Array: " + array);

array.splice(1, 1);
// Remove the second number from the array
console.log("Splice Remove Array: " + array);

array.splice(4, 1, "100");
// Edit the 5th element  to have a value of 100
console.log("Splice Edit Array: " + array);

array.sort(function(a, b) {return a-b});
// Sort array in accending order
console.log("Sorted Arraay: " + array);

// Task 3
console.log("\nTask 3:");
var people = {firstName: "Aidan", lastName: "Lietz"};
console.log(people);
//"Original People Object: " + 

var JSONString = JSON.stringify(people);
console.log("JSON String: " + JSONString);

var JSObject = JSON.parse(JSONString);
console.log(JSObject);
//"Re-converted JS Object: " + 

// Task 4
console.log("\nTask 4:");
const arrayAdd = require('array-add-num');

var array = [1,2,3,4];
var addingArray = arrayAdd(array);
console.log("Testing array: " + array + " = " + addingArray);

var myArray = [5,4,3,8];
console.log("Array add: " + myArray + "\nOutput of above Array is: " + arrayAdd(myArray));

const pkgL = require("./package-lock.json");
console.log(pkgL.dependencies['array-add-num']["version"]);

// Task 5
console.log("\nTask 5");

// Declarative function - Naming the function
function multiplyNums(x, y, z) {
    return "New number is: " + x * y * z;
};
console.log(multiplyNums(1, 2, 3));

// Expression Function - No naming function because part of variable
const numsMultiply = function(x, y, z) {
    return "New number is: " + x * y * z;
};
console.log(numsMultiply(4, 5, 6));

// Arrow Function
const numsMultiply2 = (x, y, z) => {return "New number is: " + x * y * z};
console.log(numsMultiply2(7, 8, 9));