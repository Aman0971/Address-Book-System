import * as readline from "readline-sync";
import { Contact } from "./Contact";
import { AddressBook } from "./AddressBook";

console.log("Welcome to Address Book Program");

const addressBook = new AddressBook();

let choice: number;

do {

    console.log("\n===== ADDRESS BOOK MENU =====");

    console.log("1. Add Contact");
    console.log("2. Edit Contact");
    console.log("3. Delete Contact");
    console.log("4. Display Contacts");
    console.log("5. Exit");

    choice = readline.questionInt("Enter your choice : ");

    switch (choice) {

        case 1:

            const firstName = readline.question("First Name : ");
            const lastName = readline.question("Last Name : ");
            const address = readline.question("Address : ");
            const city = readline.question("City : ");
            const state = readline.question("State : ");
            const zip = readline.questionInt("Zip : ");
            const phone = readline.questionInt("Phone Number : ");
            const email = readline.question("Email : ");

            const person = new Contact(
                firstName,
                lastName,
                address,
                city,
                state,
                zip,
                phone,
                email
            );

            addressBook.addContact(person);

            break;

        case 2:

            const editName = readline.question("Enter First Name : ");

            const updatedPerson = new Contact(

                editName,
                readline.question("Last Name : "),
                readline.question("Address : "),
                readline.question("City : "),
                readline.question("State : "),
                readline.questionInt("Zip : "),
                readline.questionInt("Phone Number : "),
                readline.question("Email : ")

            );

            addressBook.editContact(editName, updatedPerson);

            break;

        case 3:

            const deleteName = readline.question("Enter First Name : ");

            addressBook.deleteContact(deleteName);

            break;

        case 4:

            addressBook.displayContacts();

            break;

        case 5:

            console.log("Thank You");

            break;

        default:

            console.log("Invalid Choice");

    }

} while (choice !== 5);