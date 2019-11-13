import { ICryptoData } from "./model-interfaces";

export default class UserType {
    id: string | ICryptoData;
    display: string | ICryptoData;
    description: string | ICryptoData;
    active: boolean | string | ICryptoData;
    
    constructor() {
      this.id = '';
      this.display = '';
      this.description = '';
      this.active = false;
    }
}
  