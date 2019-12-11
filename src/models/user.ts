import UserType from "./user-type";
import { ICryptoData, IAccountNote } from "./model-interfaces";

export default class User {
  id: string | ICryptoData;
  username: string | ICryptoData;
  email: string | ICryptoData;
  firstName: string | ICryptoData;
  lastName: string | ICryptoData;
  userType: UserType;
  active: boolean | string | ICryptoData;
  tokenValidated: boolean | string | ICryptoData;
  validationToken: string | ICryptoData;
  notes: IAccountNote[];

  constructor() {
    this.id = '';
    this.username = '';
    this.email = '';
    this.firstName = '';
    this.lastName = '';
    this.userType = new UserType();
    this.active = false;
    this.tokenValidated = false;
    this.validationToken = '';
    this.notes = []

  }
}
