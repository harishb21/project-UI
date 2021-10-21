import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inbox } from '../inbox.model';
import { InboxData } from '../model/inbox.model';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class InboxService {
  listOfData: Inbox[] = [
    new Inbox(
      1,
      'Covid-19',
      'dhoni1',
      '2021-9-11',
      '4:30',
      `Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.`,
      true
    ),
    new Inbox(
      2,
      'Covid-19',
      'dhoni2',
      '2021-9-11',
      '4:30',
      `Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.`,
      true
    ),
    new Inbox(
      3,
      'Covid-19',
      'dhoni3',
      '2021-9-11',
      '4:30',
      `Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.`,
      false
    ),
    new Inbox(
      4,
      'Covid-19',
      'dhoni4',
      '2021-9-11',
      '4:30',
      `Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.`,
      false
    ),
    new Inbox(
      5,
      'Covid-19',
      'dhoni5',
      '2021-9-11',
      '4:30',
      `Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.`,
      true
    ),
    new Inbox(
      6,
      'Covid-19',
      'dhoni6',
      '2021-9-11',
      '4:30',
     `Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.`,
     false
    ),
    new Inbox(
      7,
      'Covid-19',
      'dhoni7',
      '2021-9-11',
      '4:30',
     `Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.`,
     false
    ),
  ];
  constructor(private http: HttpClient,private authService: AuthService){}
  staffNameList: User[] = [];
  patientNameList: User[] = [];
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

getAllappointments(){
  return this.listOfData.filter(ob=>ob.declined===false);
}
getDeclined(){
  return this.listOfData.filter(ob=>ob.declined===true);
}
  //delete method
  deleteRecord(args:Inbox){
    const pos = this.listOfData.indexOf(args);
    //this.listOfData.splice(pos, 1);
    this.listOfData[pos].declined=true;
  }
}
