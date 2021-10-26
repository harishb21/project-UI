import { NotesServiceService } from './services/notes-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user.model';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  user: User | null = null;

  nonReadCount : number= 0;
  activateSendNotes : boolean = true;
  activateSentNotes : boolean = false;
  activateRecievedNotes : boolean = false;
 
  constructor(private authService: AuthService, private notesService:NotesServiceService, private router: Router) {}


  ngOnInit(): void {

    this.authService.userInfo.subscribe((user) => {
      this.user = user;
    });
    this.getNonReadCount();
    // setTimeout(function(){
    //   window.location.reload();
    // },100000);
  }
  

  activatatedeSendNotes() {
    this.activateSendNotes = true;
    this.activateSentNotes = false;
    this.activateRecievedNotes = false;
  }
  activatatedeSentNotes() {
    this.activateSendNotes = false;
    this.activateSentNotes = true;
    this.activateRecievedNotes = false;
  }
  activatatedeRecievedNotes() {
    this.activateSendNotes = false;
    this.activateSentNotes = false;
    this.activateRecievedNotes = true;
  }
 
    hidden = false;
    
    toggleBadgeVisibility() {

      this.hidden = true;
    }

    getNonReadCount(){
      this.notesService.getNonReadCount(this.user.userId).subscribe(
        (res)=>{
          this.nonReadCount=res.nonreadcount;
          if(this.nonReadCount===0)
            this.hidden=true
          
        }
      )
    }

}
