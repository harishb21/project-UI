import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashboardInbox, InboxData, PatientName, StaffName } from '../model/inbox.model';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InboxServiceBoard {
 
  constructor(private http: HttpClient,private authService: AuthService){
    this.onloadFun();
    this.loadStaffData();
    this.loadPatientNameData();

  }
  staffNameList: StaffName[] = [];
  patientNameList: PatientName[] = [];
  public user: User;
  userEmpId:number=0;
  userRoleId:number=0;
  userEmp:number=0;
  uPhyisicanName:string='';
  disablePhysician:boolean=false;
  //---patient data-----
  patientId:number=0;
  patientName:string='';
  disablePatient:boolean=false;
  onloadFun(){
    this.authService.userInfo.subscribe((res) => {
      this.user = res;
    });
     if( this.user.roleId === 2){
        this.disablePhysician=true;
        this.uPhyisicanName = this.user.title+" "+this.user.firstName+" "+this.user.lastName;
        this.userEmpId=this.user.empId;
        this.userRoleId=this.user.roleId;
     }else if(this.user.roleId === 4){
      console.log("patient details---------"); 
      console.log(this.user); 
      this.disablePatient=true;
      this.patientName = this.user.firstName+" "+this.user.lastName;
      this.patientId = this.user.userId;
      this.userEmpId=this.user.userId;
      this.userRoleId=this.user.roleId;
     }else{
      this.disablePhysician=false;
      this.userEmpId=this.user.empId;
      this.userRoleId=this.user.roleId;
     }
   }
  HOST_URL = 'http://localhost:8072/api';
  getAllAppointmentData(): Observable<InboxData[]> {
    //return this.http.get<InboxData[]>(`${this.HOST_URL}/appointments`)
    console.log(this.userEmpId);
    console.log(this.userRoleId);
    return this.http.get<InboxData[]>(`${this.HOST_URL}/appointments/`+this.userRoleId+"/"+this.userEmpId);
  }

  getAllStaffData(): Observable<User[]> {
    return this.http.get<User[]>(`${this.HOST_URL}/appointments/employees`);
  }

  getAllPaientData(): Observable<User[]> {
    return this.http.get<User[]>(`${this.HOST_URL}/appointments/patients`);
  } 
loadStaffData() {
  this.getAllStaffData().subscribe((res) => {
    res
      .filter((val) => val.roleId == 2)
      .forEach((data:any) => {
        let obj: any = {
          staffName: data.title + ' ' + data.firstName + ' ' + data.lastName,
          id: data.empId,
        };
        this.staffNameList.push(obj);
      });
  });
}

loadPatientNameData() {
this.getAllPaientData().subscribe((res) => {
  res.forEach((data) => {
   // console.log(data.firstName);  
    let obj:any = {
        patientName: data.firstName + ' ' + data.lastName,
        pId: data.userId,
      };
      this.patientNameList.push(obj);
    });
});
}
elementdata:DashboardInbox[]=[];
obj:DashboardInbox ;
getUIData():Array<DashboardInbox>{
  // this.obj = new DashboardInbox();
   this.getAllAppointmentData().subscribe((res) => {
     res.map((data:any) => {
       let obj:any ={
         id : data.id,
         title : data.title,
         dashboardDate : this.getUIDate(data.startTime),
         dashboardStime : this.getUIDate(data.startTime),
         dashboardEtime : this.getUIDate(data.endTime),
         description : data.description,
         physicianName : this.getUIPhysicianName(data.physicianId),
         declined: false
       }
       this.elementdata.push(obj);
       });
   });
   return this.elementdata;
 }
 physicianName:String;
getUIPhysicianName(physicianId:number){
  this.physicianName ='';
  this.staffNameList
    .filter(data=>data.id === physicianId).map(
      val=>{this.physicianName = val.staffName; });
      return this.physicianName; 
  }

  getUIDate(date:String){
    return new Date(date.toString())
  }

getDeclined(){
 // return this.listOfData.filter(ob=>ob.declined===true);
}
  //delete method
  deleteRecord(args:any){
   // const pos = this.listOfData.indexOf(args);
    //this.listOfData.splice(pos, 1);
    //this.listOfData[pos].declined=true;
  }
}
