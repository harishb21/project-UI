import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InboxComponent } from './inbox/inbox.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NotesComponent } from './notes/notes.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RouterModule, Routes } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './users/guard/auth.guard';
import { UserGuard } from './users/guard/user.guard';
import { Roles } from './users/model/roles.enum';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AngularMaterialModule } from './angular-material.module';
import { AdminComponent } from './admin/admin.component';
import { ChartModule } from 'primeng/chart';
import {CommonModule} from '@angular/common'
import { ToastrModule } from 'ngx-toastr';
import { SendNotesComponent } from './notes/send-notes/send-notes.component';
import { RecievedNotesComponent } from './notes/recieved-notes/recieved-notes.component';
import { SentNotesComponent } from './notes/sent-notes/sent-notes.component';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
const router: Routes = [
  {
    path: '',
    component: InboxComponent,
    canActivate: [UserGuard],
    data: {
      role: [Roles.PHYSICIAN, Roles.NURSE, Roles.ADMIN],
    },
  },
  {
    path: 'app-inbox',
    component: InboxComponent,
  },
  {
    path: 'notes',
    loadChildren: () =>
    import('./notes/notes.module').then((n) => n.NotesModule)
  },
  {
    path: 'app-schedule',
    component: ScheduleComponent,
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path:'admin',
    loadChildren : () =>
    import('./admin/admin.module').then((m)=>m.AdminModule)
  }
];
@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    NotesComponent,
    ScheduleComponent,
    HeaderComponent,
    AdminComponent,
    FooterComponent,
    RecievedNotesComponent,
  SentNotesComponent,
  SendNotesComponent
   
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    RouterModule.forRoot(router),
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    AngularMaterialModule,
    ChartModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatInputModule
  ],
  providers: [AuthGuard, UserGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
