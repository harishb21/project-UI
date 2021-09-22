import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InboxComponent } from './inbox/inbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatSortModule } from '@angular/material/sort';
import { NotesComponent } from './notes/notes.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RouterModule, Routes } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { AuthComponent } from './users/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './users/guard/auth.guard';
import { UserGuard } from './users/guard/user.guard';
import { Roles } from './users/model/roles.enum';
import { UserRoutingModule } from './users/user-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
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
    path: 'app-notes',
    component: NotesComponent,
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
];
@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    NotesComponent,
    ScheduleComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(router),
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  providers: [AuthGuard, UserGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
