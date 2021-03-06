//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
 return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
   let values = [];
    for (let key in object) {
        if (typeof object[key] === "string") { // checks to see if object is equal to string
            values.push(object[key]);
        }
    }
    return values.join(" "); // call function with join method
}


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection) === true) {
        return "array";
    } else {
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    let newString = string[0].toUpperCase() + string.substring(1);
    console.log(newString);
    return newString;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let newString = string.split(" "); // splitting strings with ??????
    let arr = []; // created a empty array
    for (let i = 0; i < newString.length; i++) { // loop through array
    // push in newString in arr toUpperCase joined with the substring
        arr.push(newString[i][0].toUpperCase() + newString[i].substring(1));
    }
    return arr.join(" "); // return arr with .join
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) { 
    //access the value of the name key and return it with welcome and a !
let string = "Welcome " + capitalizeWord(object.name) +"!";
console.log(string);
 return string;;
    
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
let string = capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);
return string;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
if (arrayOrObject(object.noises) === "array" &&
object.noises.length > 1) {
    return object.noises.join(" ");
} else{
    return "there are no noises";
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
return string.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//push name into object.friends
object.friends.push(name);
//return object
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
if (arrayOrObject(object.friends) === "array" && object.friends.includes(name)) {
    return true;
} else {
    return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
 let result = [];
//loop through given array
    //if name !== array[i].name
    //if !isFriend(name,array[i]
        //result.push(array[i].name)
//return result
    for(let i = 0; i < array.length; i++) {
        if(name !== array[i].name){
            if(!array[i].friends.includes(name)){
                result.push(array[i].name);
            }
        }
    }
        return result;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
if (!object.hasOwnProperty(key)) {
object[key] = value;
   }else{
       for(var keys in object) {
      if (keys === key){
           object[keys] = value;
      }
       }
     }
     return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//loop throught the array the the object
for (let i = 0; i < array.length; i++){
        for (let key in object) {
            if(array[i] === key) {
                delete object[key];//delete the array values
            }
        }
    }return object;

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
return Array.from(new Set(array));
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}