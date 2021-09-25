
export class UserDTO {
    public  userId:number;
    public title :string;
    public firstName :string;
    public lastName:string;
    public email:string;
    public username:string;
    
    public birthDate:Date;
    public contactNo:number;
    public attempt:number;

    public roleId:number;
    public roleName :string;
    public empId:number;

    public password:string;
    public oldPassword:string;
    public newPassword: string;
}