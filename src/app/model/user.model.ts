import { Allergy } from './allergy.model';
export class User {
  public id!:number;
  public userId!: number;
  public title!: string;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public birthDate!: Date;
  public username!: string;
  public roleName!: string;
  public roleId!: number;
  public empId!: number;
  public attempt!: number;
  public age: number;
  public contactNo!: number;
  public password!: string;
  public gender: string;
  public message!: string;
  public status!:string;
  public race!: string;
  public country!: string;
  public ethnicity!: string;

  public city!: string;
  public pincode!: string;
  public state!: string;

  public langKnown!: string;
  public address!: string;
  public deleted!: boolean;
  public active!: boolean;
  public createdOn!: Date;
  public updatedOn!: Date;

  public emgrTitle: string;
  public emgrFname: string;
  public emgrLname: string;
  public emgrEmail: string;
  public emgrPhnumber: number;
  public emgrRelation: string;
  public emgrAddress: number;
  public emgrCity: string;
  public emgrPincode: number;
  public emgrState: number;
  public emgrCountry: string;
  public allergies: Allergy[];

  constructor() {} // public roleId: number // public roleName: string, // public username: string, // public birthDate: Date, // public email: string, // public lastName: string, // public firstName: string, // public title: string,
}
