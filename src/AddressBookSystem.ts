import { AddressBook } from "./AddressBook";
import { Contact } from "./Contact";

export class AddressBookSystem {

    addressBooks: Map<string, AddressBook> = new Map();

    cityDictionary: Map<string, Contact[]> = new Map();

stateDictionary: Map<string, Contact[]> = new Map();

    createAddressBook(name: string): void {

        if (this.addressBooks.has(name)) {

            console.log("Address Book Already Exists");
            return;

        }

        this.addressBooks.set(name, new AddressBook());

        console.log(`${name} Address Book Created Successfully`);

    }

    getAddressBook(name: string): AddressBook | undefined {

        return this.addressBooks.get(name);

    }

    displayAddressBooks(): void {

        if (this.addressBooks.size === 0) {

            console.log("No Address Books Found");
            return;

        }

        console.log("\nAvailable Address Books");

        this.addressBooks.forEach((_, key) => console.log(key));

    }

    searchPersonByCity(city: string): void {

    let found = false;

    this.addressBooks.forEach((addressBook, bookName) => {

        const persons = addressBook.searchByCity(city);

        if (persons.length > 0) {

            console.log(`\nAddress Book : ${bookName}`);

            persons.forEach(person => console.log(person));

            found = true;

        }

    });

    if (!found) {

        console.log("No Person Found");

    }

}
searchPersonByState(state: string): void {

    let found = false;

    this.addressBooks.forEach((addressBook, bookName) => {

        const persons = addressBook.searchByState(state);

        if (persons.length > 0) {

            console.log(`\nAddress Book : ${bookName}`);

            persons.forEach(person => console.log(person));

            found = true;

        }

    });

    if (!found) {

        console.log("No Person Found");

    }

}

updateDictionary(): void {

    this.cityDictionary.clear();
    this.stateDictionary.clear();

    this.addressBooks.forEach((addressBook) => {

        addressBook.contacts.forEach(contact => {

            if (!this.cityDictionary.has(contact.city)) {
                this.cityDictionary.set(contact.city, []);
            }

            this.cityDictionary.get(contact.city)?.push(contact);

            if (!this.stateDictionary.has(contact.state)) {
                this.stateDictionary.set(contact.state, []);
            }

            this.stateDictionary.get(contact.state)?.push(contact);

        });

    });

}
viewPersonsByCity(): void {

    this.updateDictionary();

    this.cityDictionary.forEach((persons, city) => {

        console.log(`\nCity : ${city}`);

        persons.forEach(person => console.log(person));

    });

}

viewPersonsByState(): void {

    this.updateDictionary();

    this.stateDictionary.forEach((persons, state) => {

        console.log(`\nState : ${state}`);

        persons.forEach(person => console.log(person));

    });

}
}