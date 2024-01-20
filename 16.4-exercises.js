// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num){
//         return num % 2 ===0
//     });
// }

//refactored with the rest operator and an arrow function:

const filterOutOdds = (...arguments) => arguments.filter(num => num % 2 === 0);


//write a function called findMin that acceptss a variable number of arguments and returns the smallest argument.

const findMin = (...nums) => Math.min(...nums);

//write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and the second object.

const mergeObjects = (object1, object2 ) => ({...object1, ...object2});

//write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should returna  new array with the original array values and all of the additional arguments doubled.

const doubleAndReturnArgs =  (arr , ...arguments) => [...arr, ...arguments.map(variable => variable * 2)];

//for this section, write the following function using rest, spread and refactor these functions to be arrow functions!

// 1. function removeRandom(items){

// }
//remove a random element in the items array and return a new array without that item.

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

// 2. function extend(array1, array2){

// }
// return a new array with every item in array1 and array2.

const extend = (array1, array2) => [...array1, ...array2];

// 3. function addKeyVal(obj, key, val){

// }
// returns a new object with all the keys and values from obj and a new key/value pair.

const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj }
    newObj [key] = val;
    return newObj;
}

// 4. function removeKey(obj,key){

// }
// return a new object with a key removed.

const removeKey = (obj , key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
}

// 5. function combine(obj1, obj2){

// }
// combine two objects and return a new object.

const combine = (obj1, obj2) => ({ ...obj1, ...obj2});

// 6. function update(obj, key, val){

// }
//return a new object with a modified key and value.

const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj [key] = val;
    return newObj;
}