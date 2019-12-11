import { ICryptoData } from "./model-interfaces";

export default class AccountNote {
    id: string | ICryptoData;
    userId: string | ICryptoData
    title: string | ICryptoData;
    note: string | ICryptoData;
    createdAt: string | ICryptoData;
    active: boolean | ICryptoData

    constructor() {
        this.id = '';
        this.userId = ''
        this.title = '';
        this.note = '';
        this.createdAt = '';
        this.active = true;
    }
}