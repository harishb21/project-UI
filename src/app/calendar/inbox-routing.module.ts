import { InboxCalendarComponent } from './inbox-calendar/inbox-calendar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from '../users/guard/user.guard';
import { Roles } from '../model/roles.enum';

const routes: Routes = [
  // {
  //   path: '',
  //   component: InboxCalendarComponent,
  //   canActivate: [UserGuard],
  //   data: {
  //     role: [Roles.PATIENT, Roles.PHYSICIAN, Roles.NURSE, Roles.ADMIN],
  //   },
  // },
  {
    path: 'app-inbox-calendar',
    component: InboxCalendarComponent,
    canActivate: [UserGuard],
    data: {
      role: [Roles.PATIENT, Roles.PHYSICIAN, Roles.NURSE, Roles.ADMIN],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxRoutingModule {}
