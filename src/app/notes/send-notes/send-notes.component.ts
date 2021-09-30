import { AuthService } from './../../users/auth.service';
import { NotesServiceService } from './../services/notes-service.service';
import { Staff } from './../model/Staff.model';
import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Notes } from '../model/notes.model';
import { User } from './../../users/model/user.model';

@Component({
  selector: 'app-send-notes',
  templateUrl: './send-notes.component.html',
  styleUrls: ['./send-notes.component.css']
})
export class SendNotesComponent implements OnInit {
  public user: User;
  notesform : FormGroup;
  phycision : Staff[] =[];
  desgination:string ="";
  constructor( private authService:AuthService,
    private router : Router,
    private notesService:NotesServiceService
    ) {

     }

  ngOnInit(): void {
    this.loadPhycision();
    this.notesform = new FormGroup({
      recieverId : new FormControl(null,[Validators.required]),
      resieverdesignation :new FormControl (null, [Validators.required]),
      message : new FormControl(null,[Validators.required, Validators.maxLength(200)]),
      urgency : new FormControl(false)
    });

    this.authService.userInfo.subscribe((res) => {
      this.user = res;
    });
  }
  get f(){return this.notesform.controls;}
  loadPhycision() {
    this.notesService.getAllPhycision().subscribe(
      (data) => {
        this.phycision.splice(0,this.phycision.length);
        this.phycision.push(...data)
        
      }
    );
  }
  addValues(roleId:number){
if(roleId ===2 )
this.desgination = "PHYSICIAN";
else {
  if(roleId === 1)
  this.desgination = "ADMIN";
  else if(roleId === 3)
    this.desgination = "NURSE";
  else
  this.desgination =""
}
  }
  onSubmit(){
    const notes =new Notes();
    notes.receiver = this.f.recieverId.value
    notes.message = this.f.message.value
  notes.urgency = this.f.urgency.value
  //notes.senderId = this.user.userId
  notes.sender =1;
   this.notesService.saveNotes(notes).subscribe(
     (data) =>{
       
     }
   )
  
  }
  
}
