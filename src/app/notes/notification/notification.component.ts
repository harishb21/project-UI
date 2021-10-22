import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotesServiceService } from './../services/notes-service.service';
import { InboxService } from './../../inbox/inbox.service';
import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/model/email.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  emailform:FormGroup;
  model = new Email();
  submitted = false;
  error: {};
  constructor(private router: Router,private notesSerive:NotesServiceService) { }

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
    this.model.receipt=this.f.email.value;
    this.model.subject=this.f.subject.value;
    this.model.body=this.f.body.value;
    console.log(this.model);
    // return this.notesSerive.sendMail(this.model).subscribe(
    //   data => this.model = data,
    //   error => this.error = error
    // );
  }
 
}
