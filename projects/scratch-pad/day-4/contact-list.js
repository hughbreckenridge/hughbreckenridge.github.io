// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
return {
    id: id,
    nameFirst: nameFirst,
    nameLast: nameLast
};

} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
//add key of addContact and value pair that is a function taking contact and returning code that pushes contact into contacts
        addContact: function(contact) { 
            contacts.push(contact);
        },
//add key of findContact and value pair that is a function that loops over the whole contacts array and retuns that contact or undefined if it cant be found
        findContact: function(fullName) {
            for (var i = 0; i < contacts.length; i++) {
                if(fullName === contacts[i].nameFirst + " " + contacts[i].nameLast) {
                    return contacts[i];
                }
            }
            return undefined;
        },
//add key of removeContact and value pair that is a function that loops over contacts and if a match is found remove that object
        removeContact: function(contact) {
            for (var i = 0; i < contacts.length; i++) {
                if (contact === contacts[i]) {
                    return contacts.splice(i, 1);
                }
            }
        },
//add a key called printAllContactNames that has a key of a function that returns a formattted string with all the objects in contacts
        printAllContactNames: function() {
            var all = []; // create an array that will recieve the result of the function
            for (var i = 0; i < contacts.length; i++) {//loop over the contacts array
                var fullName = contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"];//concatenate firstName and lastName separated by a " " in each key
                if (i === contacts.length - 1) {//if we are not on the last index of contacts 
                    all += fullName; //push fullName of that key into all
                } else {
                    all += fullName + '\n'; //if we arent on the last key push fullName into all and start a new line
                }
                }
            return all; //return the all array
        }
    }
    }




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
