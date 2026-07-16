import { Contact } from "./Contact";
import { AddressBook } from "./AddressBook";

console.log("Welcome to Address Book Program");

const addressBook = new AddressBook();

const person = new Contact(
    "Aman",
    "Chaudhary",
    "Khalilabad",
    "Sant Kabir Nagar",
    "Uttar Pradesh",
    272175,
    9876543210,
    "aman@gmail.com"
);

addressBook.addContact(person);

addressBook.displayContacts();