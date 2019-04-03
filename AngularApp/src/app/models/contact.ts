export class Contact {
    _id: Number;
    FirstName: string;
    LastName: string;
    email: string;
    phoneNumber: number;

    constructor(FirstName: string, LastName: string, email: string, phoneNumber: number) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}