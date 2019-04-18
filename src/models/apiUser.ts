import UserType from "./userType";

export default class ApiUser {
  id?: string;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  userType?: UserType;
  active?: boolean;
  tokenValidated?: boolean;
  validationToken?: string;
}
