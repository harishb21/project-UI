import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { InboxServiceBoard } from 'src/app/inbox/inbox.dashboard-service';
import { InboxData } from 'src/app/model/inbox.model';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { AppointmentService } from '../services/appointment.service';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-visit',
  templateUrl: './patient-visit.component.html',
  styleUrls: ['./patient-visit.component.css'],
})
export class PatientVisitComponent implements OnInit {
  constructor(
    private activatedroute: ActivatedRoute,
    private appointmentService: AppointmentService,
    private inboxService: InboxServiceBoard,
    private patientService: PatientService,
    private router: Router,
    private authService:AuthService
  ) {}

  sidebarOpened = true;
  isExpanded = true;
  isShowing = false;

  inbox: InboxData;

  user: User | null = null;


  ngOnInit(): void {
    this.appointmentService.appointmentId =
      this.activatedroute.snapshot.paramMap.get('appointmentId');
    this.appointmentService.patientId =
      this.activatedroute.snapshot.paramMap.get('patientId');

      this.authService.userInfo.subscribe((user) => {

console.log(user);

console.log(user.roleName);



        this.user = user;
        
      });

  }
}
