export default class ValidClient {
    id: string;
    ipAddress: string;
    name: string;
    description: string;
    contactName: string;
    email: string;
    phoneNumber: number | string;
    token: string;
    active: boolean | string;

    constructor() {
        this.id = '';
        this.ipAddress = '';
        this.name = '';
        this.description = '';
        this.contactName = '';
        this.email = '';
        this.phoneNumber = 0;
        this.token = '';
        this.active = false;
    }
}
  