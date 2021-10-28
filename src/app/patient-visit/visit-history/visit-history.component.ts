import { Medications } from './../model/medications';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExportService } from 'src/app/services/export.service';
import { Diagnosis } from '../model/diagnosis';
import { Procedure } from '../model/procedure';
import { VisitHistoryService } from '../services/visit-history.service';
import { ExcelJson } from 'src/app/model/excel-json.interface';
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
    private visitHistoryService: VisitHistoryService,
    private exportService : ExportService
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
 
  exportToExcel(): void {

    const edata: Array<ExcelJson> = [];
    // adding Vital sign to file"
    const pvs = {
      data: [
        // chart title
        { A: 'Vital Signs', B: '' },
        { A: '#', B: 'Heigth', C: 'Weight', D: 'Blood Pressure',E: 'Body Temperature',F: 'Respiration Rate' }, // table header
      ],
      skipHeader: true
    };
      pvs.data.push({
        A: String(1),
        B: this.heigth,
        C: this.weigth,
        D: this.bloodPressure,
        E:this.bodyTemperature,
        F:this.respirationRate
      });
    const sdt: ExcelJson = {
      data: [
        { A: 'User Diagnosis Data' }, // title
        { A: '#', B: 'Diagnosis Code', C: 'Description' }, // table header
      ],
      skipHeader: true
    };
    this.diagnosis.forEach(diagnosis => {
      sdt.data.push({
        A:diagnosis.id,
        B:diagnosis.diagnosisCode,
        C:diagnosis.description
      });
    });
    const spd: ExcelJson = {
      data: [
        { A: 'User Procedures Details' }, // title
        { A: '#', B: 'Procedure Code', C: 'Description' }, // table header
      ],
      skipHeader: true
    };
    this.procedures.forEach(procedure => {
      spd.data.push({
        A:procedure.id,
        B:procedure.procedureCode,
        C:procedure.description
      });
    });
    const smt: ExcelJson = {
      data: [
        { A: 'User Medication Data' }, // title
        { A: '#', B: 'Drug Name', C: 'Drug Generic Name',D:'Drug Brand Name',E:'Drug Form' }, // table header
      ],
      skipHeader: true
    };
    this.medications.forEach(medication => {
      smt.data.push({
        A:medication.id,
        B:medication.drugName,
        C:medication.drugGenericName,
        D:medication.drugBrandName,
        E:medication.drugForm
      });
    });
    edata.push(pvs)
    edata.push(sdt);
    edata.push(spd);
    edata.push(smt);

    
    this.exportService.exportJsonToExcel(edata, 'user_data_');
  }
}
