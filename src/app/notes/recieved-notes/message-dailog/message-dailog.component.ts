import { tap } from 'rxjs/operators';
import { NotesServiceService } from './../../services/notes-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Notes } from './../../../model/notes.model';
import { User } from 'src/app/model/user.model';
import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../recieved-notes.component';


@Component({
  selector: 'app-message-dailog',
  templateUrl: './message-dailog.component.html',
  styleUrls: ['./message-dailog.component.css']
})

export class MessageDailogComponent implements OnInit {
  replyform: FormGroup;
  constructor(public dialogRef: MatDialogRef<MessageDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public note: Notes,
    private notesService:NotesServiceService
    ) { }

  ngOnInit(): void {
    this.replyform = new FormGroup({
      reply: new FormControl(null, [
        Validators.required,
        Validators.maxLength(200),
      ])
    });
  }
  get f() {
    return this.replyform.controls;
  }
  onSendClick(){
    if(this.note.reply==undefined ||this.note.reply==null )
          this.note.reply =[];
    this.note.reply.push(this.f.reply.value);
    this.notesService.sendReply(this.note).subscribe((data)=>{
      console.log(data)
    })
    this.replyform.reset();
  }
  onDeleteClick(){
    this.notesService.deleteNotes(this.note.notesid).subscribe((data)=>{
      console.log(data)
    })
    this.onNoClick();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
