import { Document } from 'mongoose';

export interface IValidClient extends Document {
  id: string;
  ipAddress: string;
  name: string;
  description: string;
  contactName: string;
  email: string;
  phoneNumber: number;
  token: string;
  active: boolean;
}

export interface IDecoded {
  id: string;
  username: string;
  fdnq: string;
  address: string;
  exp: number;
  iat: number;
}



export interface IUserType extends Document {
  id: string;
  display: string;
  description: string;
  active: boolean | string;
}

export interface IUser extends Document {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  userType: IUserType;
  active: boolean;
  tokenValidated: boolean;
  validationToken: string;
}

export interface IUsername {
  username: string
}


export interface ILogin extends IUsername {
  password: string;
}


export interface IValidate extends ILogin {
  token: string;
}

export interface IResetAccount {
  email: string;
}

export interface IUserReset extends IUsername, IResetAccount {
  firstname: string;
  lastname: string;
  token: string;
}

export interface IReset extends IValidate, IResetAccount {

}