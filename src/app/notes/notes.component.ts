import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user.model';

declare const hide: any;
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  user: User | null = null;

  nonReadCount : number= 7;
  activateSendNotes : boolean = true;
  activateSentNotes : boolean = false;
  activateRecievedNotes : boolean = false;
 
  constructor(private authService: AuthService, private router: Router) {}


  ngOnInit(): void {
    this.authService.userInfo.subscribe((user) => {
      this.user = user;
    });
  }
  hideBar() {
    hide();
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

}
