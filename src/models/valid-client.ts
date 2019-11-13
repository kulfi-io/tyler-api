import { ICryptoData } from "./model-interfaces";

export default class ValidClient {
    id: string | ICryptoData;
    ipAddress: string | ICryptoData;
    name: string | ICryptoData;
    description: string | ICryptoData;
    contactName: string | ICryptoData;
    email: string | ICryptoData; 
    phoneNumber: number | string | ICryptoData;
    token: string | ICryptoData;
    active: boolean | string | ICryptoData;

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
  