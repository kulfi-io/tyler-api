import { ICryptoData } from "./model-interfaces";

export default class Verify {
    userId: string | ICryptoData;
    username: string | ICryptoData;
    email: string | ICryptoData;
    token: string | ICryptoData;
    
    constructor() {
        this.userId = '';
        this.username = '';
        this.email = '';
        this.token = '';
    }
}
  