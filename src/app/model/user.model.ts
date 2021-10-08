export class User {
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

  public contactNo!: number;
  public password!: string;

  public message!: string;

  public race!: string;
  public ethnicity!: string;
  public languages!: string;
  public address!: string;
  public deleted!: boolean;
  public active!: boolean;
  public createdOn!: Date;
  public updatedOn!: Date;

  constructor() {} // public roleId: number // public roleName: string, // public username: string, // public birthDate: Date, // public email: string, // public lastName: string, // public firstName: string, // public title: string,
}
