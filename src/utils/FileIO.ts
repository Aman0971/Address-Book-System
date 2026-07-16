import * as fs from "fs";
import { Contact } from "../Contact";

export class FileIO {

    static writeToFile(fileName: string, contacts: Contact[]): void {

        const data = JSON.stringify(contacts, null, 2);

        fs.writeFileSync(fileName, data);

        console.log("Contacts Written Successfully");

    }

    static readFromFile(fileName: string): void {

        if (!fs.existsSync(fileName)) {

            console.log("File Not Found");

            return;

        }

        const data = fs.readFileSync(fileName, "utf-8");

        console.log("\nContacts From File\n");

        console.log(data);

    }

}