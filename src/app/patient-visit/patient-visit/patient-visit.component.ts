import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-patient-visit',
  templateUrl: './patient-visit.component.html',
  styleUrls: ['./patient-visit.component.css'],
})
export class PatientVisitComponent implements OnInit {
  constructor(
    private activatedroute: ActivatedRoute,
    private appointmentService: AppointmentService
  ) {}

  sidebarOpened = true;
  isExpanded = true;
  isShowing = false;
  aptId: string;
  patientId: string;

  ngOnInit(): void {
    this.patientId = this.activatedroute.snapshot.paramMap.get('id');

    this.appointmentService.patientId = this.patientId;
  }
}
