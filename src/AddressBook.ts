import { Contact } from "./Contact";

export class AddressBook {

    contacts: Contact[] = [];
    addContact(contact: Contact): void {

        this.contacts.push(contact);

        console.log("Contact Added Successfully");

    }
    displayContacts(): void {

        console.log("\nAddress Book Contacts");

        this.contacts.forEach(contact => console.log(contact));

    }
}