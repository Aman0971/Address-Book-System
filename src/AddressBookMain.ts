import { Contact } from "./Contact";
import { AddressBook } from "./AddressBook";

console.log("Welcome to Address Book Program");

const addressBook = new AddressBook();

const person1 = new Contact(
    "Aman",
    "Chaudhary",
    "Khalilabad",
    "Sant Kabir Nagar",
    "Uttar Pradesh",
    272175,
    9876543210,
    "aman@gmail.com"
);

addressBook.addContact(person1);

console.log("\nContacts Before Edit");
addressBook.displayContacts();

const updatedPerson = new Contact(
    "Aman",
    "Chaudhary",
    "Lucknow",
    "Lucknow",
    "Uttar Pradesh",
    226001,
    9999999999,
    "aman123@gmail.com"
);

addressBook.editContact("Aman", updatedPerson);

console.log("\nContacts After Edit");
addressBook.displayContacts();

addressBook.deleteContact("Aman");

console.log("\nContacts After Delete");
addressBook.displayContacts();