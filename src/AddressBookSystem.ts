import { AddressBook } from "./AddressBook";

export class AddressBookSystem {

    addressBooks: Map<string, AddressBook> = new Map();

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

}