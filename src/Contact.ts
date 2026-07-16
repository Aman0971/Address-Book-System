export class Contact {

    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    phoneNumber: number;
    email: string;

    constructor(
        firstName: string,
        lastName: string,
        address: string,
        city: string,
        state: string,
        zip: number,
        phoneNumber: number,
        email: string
    ) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;

    }

}