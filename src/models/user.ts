import UserType from "./user-type";

export default class User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  userType: UserType;
  active: boolean | string;
  tokenValidated: boolean | string;
  validationToken: string;

  constructor() {
    this.id = '';
    this.username = '';
    this.email = '';
    this.firstName = '';
    this.lastName = '';
    this.userType = new UserType();
    this.active = false;
    this.tokenValidated = false;
    this.validationToken = ''
  }
}
