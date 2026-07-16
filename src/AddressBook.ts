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
//uc8
}
searchByCity(city: string): Contact[] {

    return this.contacts.filter(contact => contact.city === city);

}

searchByState(state: string): Contact[] {

    return this.contacts.filter(contact => contact.state === state);

}
//uc11
   sortByName(): void {

    if (this.contacts.length === 0) {

        console.log("Address Book is Empty");
        return;

    }

    const sortedContacts = [...this.contacts].sort((contact1, contact2) =>
        contact1.firstName.localeCompare(contact2.firstName)
    );

    console.log("\n----- Contacts Sorted By Name -----");

    sortedContacts.forEach(contact => console.log(contact));

}
//uc12
sortByCity(): void {

    if (this.contacts.length === 0) {

        console.log("Address Book is Empty");
        return;

    }

    const sortedContacts = [...this.contacts].sort((contact1, contact2) =>
        contact1.city.localeCompare(contact2.city)
    );

    console.log("\n----- Contacts Sorted By City -----");

    sortedContacts.forEach(contact => console.log(contact));

}
sortByState(): void {

    if (this.contacts.length === 0) {

        console.log("Address Book is Empty");
        return;

    }

    const sortedContacts = [...this.contacts].sort((contact1, contact2) =>
        contact1.state.localeCompare(contact2.state)
    );

    console.log("\n----- Contacts Sorted By State -----");

    sortedContacts.forEach(contact => console.log(contact));

}
sortByZip(): void {

    if (this.contacts.length === 0) {

        console.log("Address Book is Empty");
        return;

    }

    const sortedContacts = [...this.contacts].sort((contact1, contact2) =>
        contact1.zip - contact2.zip
    );

    console.log("\n----- Contacts Sorted By Zip -----");

    sortedContacts.forEach(contact => console.log(contact));

}
getContacts(): Contact[] {

    return this.contacts;

}
}