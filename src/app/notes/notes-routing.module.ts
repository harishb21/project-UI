import { NotesComponent } from './notes.component';
import { Role } from './../users/model/role.model';
import { RecievedNotesComponent } from './recieved-notes/recieved-notes.component';
import { SentNotesComponent } from './sent-notes/sent-notes.component';
import { SendNotesComponent } from './send-notes/send-notes.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserGuard } from '../users/guard/user.guard';
import { Roles } from './model/roles.enum';



const routes: Routes = [
      {
        path: '',
        component: NotesComponent,
        canActivate: [UserGuard],
        data: {
          role: [Roles.ADMIN,Roles.PHYSICIAN,Roles.NURSE],
        },
      },
      {
        path: 'send-notes',
        component: SendNotesComponent,
        canActivate: [UserGuard],
        data: {
          role: [Roles.ADMIN,Roles.PHYSICIAN,Roles.NURSE],
        },
      },
      {
        path: 'sent-notes',
        component: SentNotesComponent,
        canActivate: [UserGuard],
        data: {
          role: [Roles.PHYSICIAN,Roles.NURSE, Roles.ADMIN],
        },
      },
      {
        path: 'recieved-notes',
        component: RecievedNotesComponent,
        canActivate: [UserGuard],
        data: {
          role: [Roles.ADMIN,Roles.PHYSICIAN,Roles.NURSE],
        },
      },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class NotesRoutingModule {}