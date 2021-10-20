
import { NotesServiceService } from './../services/notes-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Notes } from '../../model/notes.model';
import { User } from '../../model/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-send-notes',
  templateUrl: './send-notes.component.html',
  styleUrls: ['./send-notes.component.css'],
})
export class SendNotesComponent implements OnInit {
  public user: User;
  notesform: FormGroup;
  phycision: User[] = [];
  desgination: string = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private notesService: NotesServiceService
  ) {}

  ngOnInit(): void {
    this.authService.userInfo.subscribe((res) => {
      this.user = res;
    });
    this.loadPhycision();
    this.notesform = new FormGroup({
      recieverId: new FormControl(null, [Validators.required]),
      resieverdesignation: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [
        Validators.required,
        Validators.maxLength(200),
      ]),
      urgency: new FormControl(false),
    });

  
  }
  get f() {
    return this.notesform.controls;
  }
  loadPhycision() {
    this.notesService.getAllPhycision().subscribe((data) => {
      this.phycision.splice(0, this.phycision.length);
      this.phycision.push(...data);
      console.log(this.phycision)
    });
  }
  addValues(roleName: string) {
   this.desgination="PHYSICIAN"
  }
  onSubmit(){
    const notes =new Notes();
    const reciever = new User();
    reciever.userId = this.f.recieverId.value
    notes.message = this.f.message.value
    notes.urgency = this.f.urgency.value
    notes.sender = this.user;
    notes.receiver = reciever;
   this.notesService.saveNotes(notes).subscribe(
     (data) =>{
     }
   )
   this.notesform.reset();
  }
  
}
