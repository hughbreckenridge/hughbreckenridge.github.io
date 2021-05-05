// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //return a function that uses an if else if statement to compar base to a new given number
    return function(given) {
        if (given > base) {         //if the given is. greater than the base return true
            return true;
        }  else if (given < base) { // if th given is less than base return false
            return false;
        }  else {                   //if neither of those resolve then the numbers must be equal
            return "same";
        } 
    };
      // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(given) {
        if (given > base) {         //if the given is greater than the base return false
            return false;
        }  else if (given < base) { // if th given is less than base return true
            return true;
        }  else {                   //if neither of those resolve then the numbers must be equal
            return "same";
        } 
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //return a function that checks if a new string has its first character the same as startsWith
    return function(newString) {                                        
        if (startsWith.toLowerCase() == newString[0].toLowerCase()) {   //return true if the first letter og the new string matches startsWith
            return true;
        } if (startsWith.toLowerCase() != newString[0].toLowerCase()) { //return false if the first letter og the new string matches startsWith
            return false;
        } else {
            return "same";
        }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    return function(newString) {                                        
        if (endsWith.toLowerCase() == newString[newString.length - 1].toLowerCase()) {   //return true if the last letter of the new string matches endsWith
            return true;
        } if (endsWith.toLowerCase() != newString[newString.length - 1].toLowerCase()) { //return false if the last letter of the new string matches endsWith
            return false;
        } else {
            return "same";
        }
    };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    var newStrs = [];       //create and empty array that will recieve the new string
    for (let i = 0; i < strings.length; i++){ //loop over strings 
        newStrs.push(modify(strings[i]));//apply the modify function to each string based on its index
        //
    }
    return newStrs;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //I: an array of strings and a function
    //O: return true if all strings resolve to true, otherwise false
    for (var i = 0; i < strings.length; i ++) {  //return boolean if all strings are true
        if (test(strings[i]) === false) { //If not all strings are true return false
            return false;
        }
    }
        return true;//If all strings are true 
    // YOUR CODE ABOVE HERE //
}
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
