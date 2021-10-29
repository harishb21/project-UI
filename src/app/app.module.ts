import { MatDialogModule } from '@angular/material/dialog';
import { ExportService } from './services/export.service';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from './footer/footer.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InboxComponent } from './inbox/inbox.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { NotesComponent } from './notes/notes.component';

import { RouterModule, Routes } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './users/guard/auth.guard';
import { UserGuard } from './users/guard/user.guard';
import { Roles } from './model/roles.enum';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AngularMaterialModule } from './angular-material.module';
import { AdminComponent } from './admin/admin.component';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { SendNotesComponent } from './notes/send-notes/send-notes.component';
import { RecievedNotesComponent } from './notes/recieved-notes/recieved-notes.component';
import { SentNotesComponent } from './notes/sent-notes/sent-notes.component';
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { AuthInterceptor } from './users/auth.interceptor';
import { InboxCalendarComponent } from './calendar/inbox-calendar/inbox-calendar.component';
import { CalendarModule } from './model/calendar.module';
import { NotificationComponent } from './notes/notification/notification.component';
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
  {
    path: 'patient',
    loadChildren: () =>
      import('./patient/patient.module').then((m) => m.PatientModule),
  },
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
