import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './../angular-material.module';
import { SendNotesComponent } from './send-notes/send-notes.component';
import { SentNotesComponent } from './sent-notes/sent-notes.component';
import { RecievedNotesComponent } from './recieved-notes/recieved-notes.component';
import { UserGuard } from './../users/guard/user.guard';
import { AuthGuard } from './../users/guard/auth.guard';
import { AuthService } from './../users/auth.service';
import { CommonModule } from '@angular/common';
import { CdkColumnDef } from '@angular/cdk/table';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { NotesRoutingModule } from './notes-routing.module';

@NgModule({
  declarations: [
  

  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    NotesRoutingModule,
    HttpClientModule

  ],
  providers: [CdkColumnDef,
    AuthService,
    AuthGuard,
    UserGuard,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 500 } },
],
  bootstrap: []
})
export class NotesModule { }
