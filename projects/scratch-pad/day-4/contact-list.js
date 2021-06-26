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
 
         var contact = {
             id: id,
             nameFirst: nameFirst,
             nameLast: nameLast
         };

     return contact;
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
        addContact: function(contact) {
       //Use .push method to add contacts into contacts array
            return contacts.push(contact);
        },
        findContact: function(fullName) {
           //Use built-in find() to retrieve the elements in the array, which are objects. Then sort
           //through those object by accessing key nameFirst and nameLast. Then compare by using a 
           //conditional statement, if the values pulled from the object in the array are equal to the
           //fullName argument, return the contact's object
           //Find is awesome because it returns undefined if the key isn't found.
          return contacts.find(contactObject => { 
                let contactObjFullName = `${contactObject.nameFirst} ${contactObject.nameLast}`;
                  if (contactObjFullName === fullName) {
                      return contactObject;
                  }
                 });
       
       
       
             ///Use a for loop to loop from the elements, which are objects, in the array. Store 
             //in variable contactObject. Concat nameFirst and nameLast from the object. Make a 
             //conditional statement where if the concat fullname from object matchs the fullName argument,
             //return the contact's object. If not, return undefined.
          
        //   for (let i = 0; i <= contacts.length; i++){
        //      console.log(contacts[i]);
        //      let contactObject = contacts[i];
        //      let contactObjFullName = `${contactObject.nameFirst} ${contactObject.nameLast}`;
        //      if (contactObjFullName === fullName) {
        //          return contactObject;
        //      } else {
        //          return undefined;
        //      }
        //   }
        },
        removeContact: function(contact) {
            //Use .splice on the array to remove a contact
            contacts.splice(0, 1);
             return contacts;
            
        },
        printAllContactNames: function(){
          //What I want my function to do: 
          //-Loop through contact and return first and last name
          //-Combine first and last name to get the full name
          //-Store the full name in a container (arr)
          //-Need to seperate the strings in the array. use .join()
          //-\n is new line character.
          
          //**IMPORTANT** CONSTRAINTS: Can NOT have the \n  on the last
          //full name.
          
          //var to store first and last name strings
           let allNames = [];
          
        
        for (let i = 0; i < contacts.length; i++) {
           let firstName = contacts[i].nameFirst;
           let lastName = contacts[i].nameLast;
           let fullName = `${firstName} ${lastName}`;
           allNames.push(fullName);
        }
        
          //var to store my strings from my allNames array, joined with the \n character
          let allNamesCombined = allNames.join("\n");
        
           
         console.log(allNamesCombined);
   
        //return allNamesCombined var 
        return allNamesCombined;
           
           
        }
    }


//console.log(makeContactList.findContact);

}
// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
