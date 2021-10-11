import { FormControl } from '@angular/forms';
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
  reply: string;
  constructor(public dialogRef: MatDialogRef<MessageDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public note: Notes
    ) { }

  ngOnInit(): void {
      this.reply="";
    //console.log(this.reply.value)
  }
  
  onSendClick(){
    console.log(this.reply)
  }
  onDeleteClick(){
    alert(this.note.notesid)
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
