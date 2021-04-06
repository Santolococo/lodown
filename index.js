'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}



/*
    identity: Designed to return the value of the input parameter unchanged
 
    @param {value} value: the value being returned.
 
 */
function identity(value){
    return value;
};


/*
    typeOf: Designed to return the datatype of an input value
 
    @param {array, null, string, object, undefined, number, boolean, function} value: the value that is being inspected. 

*/
function typeOf(value){
    if (Array.isArray(value)) {
        return "array";
    }
    if (value === null) {
        return "null";
    }
    if (typeof(value) === 'string') {
        return "string";
    }
    if (typeof(value) === 'object') {
        return "object";
    }
    if (value === undefined) {
        return "undefined";
    }
    if (typeof(value) === 'number') {
        return "number";
    }
    if (typeof(value) === 'boolean') {
        return "boolean";
    }
    if (typeof(value) === 'function') {
        return "function";
    }

};


/*
    first: Designed to take an array and a number a return that number of items from the array starting from the 0 index of the array. if no array is given it returns an 
    empty array. if the number given is not a number, the function only returns the first item from the array.
    
    @param {array} array: the array to reference.
    
    @param {number} number: the number of items that will fill the output array.

*/

function first(array, number){
    let firstElement = [];
    if (!Array.isArray(array)) {
        return [];
    }
    if (number === isNaN || number === undefined) {
        return array[0];
    }
    if (number > array.length) {
        return array;
    }
    for (let i = 0; i < array.length; i++) {
        if (firstElement.length < number) {
            firstElement.push(array[i]);
        }
        else return firstElement;
    }
};

/*
    last: Designed to take an array and a number and return a new array that contains the input number of items from the original array starting from the last index of the input array.
    if the input array is not an array, an empty array is returned. if the input number is not a number, only the last index is returned. 
    
    @param  {array} array: an array to reference
    
    @param {number} number: the number of items being put into a new array and returned

*/

function last(array, number) {
    let lastElement = [];
    if (!Array.isArray(array)) {
        return [];
    }
    if (number === isNaN || number === undefined) {
        return array[array.length - 1];
    }
    if (number > array.length) {
        return array;
    }
    for (let i = array.length - 1; i >= 0; i--) {
        if (lastElement.length < number) {
            lastElement.unshift(array[i]);
        }
        else return lastElement;
    }
}


/*
    indexOf: Designed to take an array and a value and return the index of the first occurence of the value in the array.
    
    @param {array} array: an array to search through.
    
    @param {value} value: a value being searched for.
*/

function indexOf(array, value) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i
        }
    }
    return -1
}

/*
    contains: Designed to take an array and a value and return a boolean based on if the value is found inside the array.
    
    @param {array} array: the array to search through.
    
    @param {value} value: the value being searched for.
    
*/

function contains(array, value) {
    return (array.includes(value)) ? true : false
}

/*
    Unique: designed to take an array and return an array with the same values but without any identical values.
    
    @param {array} array: an array to search through.
    
*/

function unique(array) {
    let unique = [...new Set(array)]
    return unique
}

/*
    filter: designed to take an array and a function. it will call the function for each element in the array that passes the arguments: the element, it's index, array. it will return a new 
    array of elements that pass.
    
    @param {array} array: an array to iterate through
    
    @param {function} function: a function to call on elements in the array

*/

function filter(array, func) {
    let filtered = []
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            filtered.push(array[i])
        }
    }
    return filtered
}

/*
    reject: designed to take an array and a function and return a new array. the function is called for each element in the array passin the arguments: the element, it's index, array
    
    @param {array} array: an array to iterat through
    
    @param {function} function: a function to call on elements in the array

*/

function reject(array, func) {
    let rejected = []
    for (let i = 0; i < array.length; i++) {
        if (!func(array[i], i, array)) {
            rejected.push(array[i])
        }
    }
    return rejected
}

/*
    partition: is designed to take an array and a function. it will return an array with two sub-arrays. one sub-array for elements in the array that test false when
    the function is called on it, and another of when they test true.
    
    @param {array} array: an array to iterat through
    
    @param {function} function: a function to call on elements in the array

*/

function partition(array, func) {
    let truthy = []
    let falsey = []
    let part = [truthy, falsey]
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            truthy.push(array[i])
        }
        else if (!func(array[i], i, array)) {
            falsey.push(array[i])
        }
    }
    return part
}


/*
    map: designed to take a collection and a function and return an array. it calls the function for each element in the array that passes the argument if <collection> is an array:
    the element, it's index, <collection>; if <collection> is an object:the value, it's key, <collection>; and saves the value into a new array and returns it.
    
    @param {collection} array: an array to loop through.
    
    @param {collection} object: an object to loop through.
    
    @param {function} function: a function to call on the elements that pass.
    
*/

function map(collection, func) {
    let arr = []
    each(collection, function(ele, i, col) {
        arr.push(func(ele, i, col))
    })
    return arr
}


/*
    pluck: is designed to take an array of objects and a property then return an array containing the value of <property> for every element in <array>.
    
    @param {objArr} array: an array with objects in it.
    
    @param {prop} property: a key name that will be searched for in the objects array.
    
*/

function pluck(objArr, prop) {
    let propArr = []
    for (let i = 0; i < objArr.length; i++) {
        if (objArr[i].hasOwnProperty(prop)) {
            propArr.push(objArr[i][prop])
        }
    }
    return propArr
}

/*
    every: is designed to take a collecition and a funciton and return a boolean. it calls the function for every element of the collection with the parameter:
    if <collection> is an array: current element, it's index, <collection>; if <collection> is an object: current value, current key, <collection>.
    if every element tests true it returns true. if even one element tests false it will return false.
    
    @param {collection} array: an array to loop through.
    
    @param {collection} object: an object to loop through.
    
    @param {function} function: a function to call on the elements

*/

function every(collection, iterator) {
    iterator = iterator || identity;

    return !!reduce(collection, function(a, b) {
        return a && iterator(b);
    }, true)

}

/*
    some: is designed to take a collection and a function and return a boolean. it calls the function for every element of the collection with the parameter:
    if <collection> is an array: current element, it's index, <collection>; if <collection> is an object: current value, current key, <collection>.
    if even one element tests true it returns true. if none test true it returns false.
    
    @param {collection} array: an array to loop through.
    
    @param {collection} object: an object to loop through.
    
    @param {function} function: a function to call on the elements

*/

function some(collection, func){
    let bool = false
    if (!func) {
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                if (collection[i]) bool = true;
            }

        }
        else {
            for (let key in collection) {
                if (collection[key]) bool = true;
            }

        }

    }
    else if (typeof func === 'function') {
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                if (func(collection[i], i, collection)) {
                    bool = true;
                }
            }
        }
    

    else {
        for (let key in collection) {
            if (func(collection[key], key, collection)) {
                    bool = true;
                }

            }
        }
    }
return bool
}

/* 
    reduce: is designed to take an array a function and a seed then return the seed. the seed take the value it is given. if no seed is given it returns the return value of the final function call
    
    @param {array} array: an array to loop through
    
    @param {function} function: a function to call for every element in the array passing the arguments: previous result, element, index.
    
    @param {seed} value: a seed that is returned after it has been altered by the function.
*/

function reduce(array, func, seed) {
    if (seed !== undefined) {
        for (let i = 0; i < array.length; i++) {
            seed = func(seed, array[i], i, array);
        }
        return seed
    }
    else {
        seed = array[0]
        for (let i = 1; i < array.length; i++) {
            seed = func(seed, array[i], i, array)
        }
        return seed
    }

}

/*
    extend: is designed to take at least two objects but can have more and return a new object with all the key value pairs of all the objects into one. 
    
    @param {obj} object: an object
    
    @param {obj} object: an object
    
    @param {...objects} objects: more objects.
    
*/


 function extend(obj1, obj2, ...objects){
     let extended = Object.assign(obj1, obj2, ...objects)
      return extended
 }




module.exports.each = each;
