import { Contact } from "./Contact";

export class AddressBook {

    contacts: Contact[] = [];
    
    addContact(contact: Contact): void {

    const isDuplicate = this.contacts.some(existingContact =>
        existingContact.equals(contact)
    );

    if (isDuplicate) {

        console.log("Duplicate Contact Found. Contact Not Added.");
        return;

    }

    this.contacts.push(contact);

    console.log("Contact Added Successfully");

}

    displayContacts(): void {

    if (this.contacts.length === 0) {
        console.log("Address Book is Empty");
        return;
    }

    console.log("\n------ Contact List ------");

    this.contacts.forEach(contact => console.log(contact));

   }

   //uc3
    editContact(firstName: string, updatedContact: Contact): void {

    const index = this.contacts.findIndex(
        contact => contact.firstName === firstName
    );

    if (index !== -1) {

        this.contacts[index] = updatedContact;
        console.log("Contact Updated Successfully");

    }
    else {

        console.log("Contact Not Found");
    }
    }
   // uc4
    deleteContact(firstName: string): void {

    const index = this.contacts.findIndex(
        contact => contact.firstName === firstName
    );

    if (index !== -1) {

        this.contacts.splice(index, 1);
        console.log("Contact Deleted Successfully");

    } else {

        console.log("Contact Not Found");

    }

}
}