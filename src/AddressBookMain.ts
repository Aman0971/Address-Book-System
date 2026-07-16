import * as readline from "readline-sync";
import { Contact } from "./Contact";
import { AddressBook } from "./AddressBook";
import { AddressBookSystem } from "./AddressBookSystem";

console.log("Welcome to Address Book Program");

const system = new AddressBookSystem();

system.createAddressBook("Default");

let addressBook: AddressBook = system.getAddressBook("Default")!;

let choice: number;

do {

    console.log("\n===== ADDRESS BOOK MENU =====");

    console.log("1. Create Address Book");
    console.log("2. Select Address Book");
    console.log("3. Add Contact");
    console.log("4. Edit Contact");
    console.log("5. Delete Contact");
    console.log("6. Display Contacts");
    console.log("7. Display Address Books");
    console.log("8. Search By City");
    console.log("9. Search By State");
    console.log("10. Exit");

    choice = readline.questionInt("Enter your choice : ");

    switch (choice) {

        case 1:

            const bookName = readline.question("Enter Address Book Name : ");
            system.createAddressBook(bookName);
            break;

        case 2:

            const selectBook = readline.question("Enter Address Book Name : ");

            const selectedBook = system.getAddressBook(selectBook);

            if (selectedBook) {

                addressBook = selectedBook;
                console.log("Switched to " + selectBook);

            } else {

                console.log("Address Book Not Found");

            }

            break;

        case 3:

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

        case 4:

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

        case 5:

            const deleteName = readline.question("Enter First Name : ");

            addressBook.deleteContact(deleteName);

            break;

        case 6:

            addressBook.displayContacts();

            break;

        case 7:

            system.displayAddressBooks();

            break;

        case 8:

            const searchCity = readline.question("Enter City : ");

            system.searchPersonByCity(searchCity);

            break;

        case 9:

            const searchState = readline.question("Enter State : ");

            system.searchPersonByState(searchState);

            break;

        case 10:

            console.log("Thank You");
            break;

        default:

            console.log("Invalid Choice");

    }

} while (choice !== 10);