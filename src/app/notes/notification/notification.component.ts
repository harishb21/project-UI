import { User } from './../../model/user.model';
import { AdminserviceService } from './../../admin/admin.service';
import { Subject } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotesServiceService } from './../services/notes-service.service';
import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/model/email.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  emailform:FormGroup;
  model = new Email();
  submitted = false;
  value : string[] =  [];
  users :User[] =[];
  allPatientButton : boolean = false;
  ActivePatientButton : boolean =false;
  allEmployeeButton : boolean = false;
  activeEmployeebutton: boolean = false;
  dataFetch : boolean = false;
  disabledInput:boolean=false;
  constructor(private router: Router,
    private notesSerive:NotesServiceService,
    private _snackBar: MatSnackBar,
    private adminService:AdminserviceService
    ) { }

  ngOnInit(): void {
      this.emailform=new FormGroup({
        email: new FormControl(null, [Validators.required]),
        subject: new FormControl(null, [Validators.required]),
        body: new FormControl(null, [
        Validators.required
      ]),
    });

    // this.error = {
    //   errorTitle: 'Oops! Request for document failed',
    //   errorDesc: 'Something bad happened. Please try again later.'
    // };
  }
  get f(){return this.emailform.controls;}
  onSubmit() {
    this.submitted = true;
    this.model.multipleTo=[];
    //this.model.receipt=this.f.email.value;
    this.model.subject=this.f.subject.value;
    this.model.body=this.f.body.value;
    if(this.dataFetch)
    {
    this.model.multipleTo=this.f.email.value
    }
    else{
    const emailId:string[] = this.f.email.value.split(" ");
    this.model.multipleTo =emailId;
    }
    this.notesSerive.sendMail(this.model).subscribe(
      (data) =>{
      this.router.navigate(['admin'])
      this._snackBar.open(data.success);
     }
    );
  }
  getAllPatient(){
this.adminService.getAllPatientEmail().subscribe(
  (data:any) =>{
    this.users=data.patients;
    this.value = this.value.concat(this.users.map(user=> user.email));
    this.allPatientButton=true;
    this.ActivePatientButton=true;
    this.disabledInput=true;
    this.dataFetch = true;
  })
  }
  getAllActivePatient(){
    this.adminService.getAllActivePatientEmail().subscribe(
      (data:any) =>{
        this.users=data.activePatients;
        this.value = this.value.concat(this.users.map(user=> user.email));
        this.allPatientButton=true;
        this.ActivePatientButton=true;
        this.disabledInput=true;
        this.dataFetch = true;
      })
  }
  getAllEmployee(){
    this.adminService.getAllEmployeeEmail().subscribe(
      (data:any) =>{
        this.users=data.staffs;
        this.value = this.value.concat(this.users.map(user=> user.email));
       this.activeEmployeebutton=true
       this.allEmployeeButton=true
       this.disabledInput=true;
       this.dataFetch = true;
      })
  }
  getAllActiveEmployee(){
    this.adminService.getAllActiveEmployeeEmail().subscribe(
      (data:any) =>{
        this.users=data.activeStaffs;
        this.value = this.value.concat(this.users.map(user=> user.email));
        this.activeEmployeebutton=true
        this.allEmployeeButton=true
        this.disabledInput=true;
        this.dataFetch = true;
      })
  }
  clearInput(){
    this.value = [];
    this.allPatientButton=false;
    this.ActivePatientButton=false;
    this.activeEmployeebutton=false
       this.allEmployeeButton=false
       this.disabledInput=false;
       this.dataFetch = false;
  }
}
