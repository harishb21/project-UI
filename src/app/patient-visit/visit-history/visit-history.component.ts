import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diagnosis } from '../model/diagnosis';
import { Medications } from '../model/medications';
import { Procedure } from '../model/procedure';
import { VisitHistoryService } from '../services/visit-history.service';

@Component({
  selector: 'app-visit-history',
  templateUrl: './visit-history.component.html',
  styleUrls: ['./visit-history.component.css'],
})
export class VisitHistoryComponent implements OnInit {
  appointmentId: string;
  patientId: string;
  diagnosis: Diagnosis[] = [];
  procedures: Procedure[] = [];
  medications: Medications[] = [];
  visitDateList: string[] = [];
  selectedVisitDate: string;

  constructor(
    private activatedroute: ActivatedRoute,
    private visitHistoryService: VisitHistoryService
  ) {}

  ngOnInit(): void {
    // this.appointmentId = this.activatedroute.snapshot.paramMap.get('appointmentId');
    this.patientId = this.activatedroute.snapshot.paramMap.get('patientId');
    this.visitDates();
  }

  getAppointmentIdByVisitDate(date: string) {
    this.visitHistoryService
      .getAppointmentIdByVisitDate(date)
      .subscribe((id) => {
        this.appointmentId = id;
        this.getVitals();
        this.getDiagnosis();
        this.getProcedures();
        this.getMedications();
      });
  }

  visitDates() {
    this.visitHistoryService.getVisitDates(this.patientId).subscribe((data) => {
      this.visitDateList = data;
    });
  }

  vital() {}

  heigth: any;
  weigth: any;
  bloodPressure: any;
  bodyTemperature: any;
  respirationRate: any;
  getVitals() {
    this.visitHistoryService
      .getVitalSings(this.appointmentId)
      .subscribe((data) => {
        (this.heigth = data.height),
          (this.weigth = data.weight),
          (this.bloodPressure = data.bloodPressure),
          (this.bodyTemperature = data.bodyTemperature),
          (this.respirationRate = data.respirationRate);
      });
  }

  getDiagnosis() {
    this.visitHistoryService
      .getDiagnosisByAppoinId(this.appointmentId)
      .subscribe((data) => {
        this.diagnosis = data;
      });
  }

  getProcedures() {
    this.visitHistoryService
      .getProceduresByAppoinId(this.appointmentId)
      .subscribe((data) => {
        this.procedures = data;
      });
  }

  getMedications() {
    this.visitHistoryService
      .getMedicinesByAppoinId(this.appointmentId)
      .subscribe((data) => {
        this.medications = data;
      });
  }
}
