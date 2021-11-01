import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ChartModule } from 'primeng/chart';
import { AdminComponent } from './admin/admin.component';
import { AngularMaterialModule } from './angular-material.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InboxComponent } from './inbox/inbox.component';
import { Roles } from './model/roles.enum';
import { NotesComponent } from './notes/notes.component';
import { NotificationComponent } from './notes/notification/notification.component';
import { RecievedNotesComponent } from './notes/recieved-notes/recieved-notes.component';
import { SendNotesComponent } from './notes/send-notes/send-notes.component';
import { SentNotesComponent } from './notes/sent-notes/sent-notes.component';
import { ExportService } from './services/export.service';
import { AuthInterceptor } from './users/auth.interceptor';
import { AuthGuard } from './users/guard/auth.guard';
import { UserGuard } from './users/guard/user.guard';

import { InboxCalendarComponent } from './calendar/inbox-calendar/inbox-calendar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const router: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [UserGuard],
    data: {
      role: [Roles.PHYSICIAN, Roles.NURSE, Roles.PATIENT, Roles.ADMIN],
    },
  },
  {
    path: 'app-inbox',
    canActivate: [UserGuard],
    component: InboxComponent,
    data: {
      role: [Roles.PHYSICIAN, Roles.NURSE, Roles.PATIENT],
    },
  },
  {
    path: 'notes',
    loadChildren: () =>
      import('./notes/notes.module').then((n) => n.NotesModule),
  },
  // {
  //   path: 'app-schedule',
  //   component: ScheduleComponent,
  // },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  // {
  //   path: '',
  //   component: InboxCalendarComponent,
  //   loadChildren: () =>
  //     import('./model/calendar.module').then((m) => m.CalendarModule),
  // },
  {
    path: 'app-inbox-calendar',
    component: InboxCalendarComponent,
    loadChildren: () =>
      import('./model/calendar.module').then((m) => m.CalendarModule),
  },
  // {
  //   path: 'patient',
  //   loadChildren: () =>
  //     import('./patient/patient.module').then((m) => m.PatientModule),
  // },
  {
    path: 'patient-visit',
    loadChildren: () =>
      import('./patient-visit/patient-visit.module').then(
        (m) => m.PatientVisitModule
      ),
  },
  {
    path: 'master',
    loadChildren: () =>
      import('./master/master.module').then((m) => m.MasterModule),
  },
  
];
@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    NotesComponent,
    HeaderComponent,
    AdminComponent,
    FooterComponent,
    RecievedNotesComponent,
    SentNotesComponent,
    SendNotesComponent,
    NotificationComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(router),
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    AngularMaterialModule,
    ChartModule,
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatInputModule,
    MatDialogModule,
  
  ],
  providers: [
    AuthGuard,
    UserGuard,
    ExportService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
