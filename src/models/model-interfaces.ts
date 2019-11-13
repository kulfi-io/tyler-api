import { Document } from 'mongoose';

export interface IValidClient extends Document {
  id: string | ICryptoData;
  ipAddress: string | ICryptoData;
  name: string | ICryptoData;
  description: string | ICryptoData;
  contactName: string | ICryptoData;
  email: string | ICryptoData;
  phoneNumber: number | ICryptoData;
  token: string | ICryptoData;
  active: boolean | ICryptoData;
}

export interface ICookieUser {
  id: string | ICryptoData,
  fullname: string | ICryptoData,
  firstname: string | ICryptoData,
  lastname: string | ICryptoData,
  email: string | ICryptoData
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
  id: string | ICryptoData;
  display: string | ICryptoData;
  description: string | ICryptoData;
  active: boolean | string | ICryptoData;
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
  username: string | ICryptoData
}


export interface ILogin extends IUsername {
  password: string | ICryptoData;
}


export interface IValidate extends ILogin {
  token: string;
}

export interface IResetAccount {
  email: string | ICryptoData;
}

export interface IUserReset extends IUsername, IResetAccount {
  firstname: string | ICryptoData;
  lastname: string | ICryptoData;
  token: string | ICryptoData;
}

export interface IReset extends IValidate, IResetAccount {

}

export interface IMeetingUser {
  id: string;
  firstname: string;
  lastname: string;
  fullname?: string;
}

export interface IMeetingNote {
  id: string;
  title: string;
  display: string;
  detail: string;
  active: string;
  user: IMeetingUser
}


export interface IEvent extends Document {
  title: string;
  userId: string;
  start: Date;
  end: Date;
  calandarId: string;
}

export interface ICryptoData {
  iv: string,
  encryptedData: string
}