import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DiagnosisMasterService } from 'src/app/master/services/diagnosis-master.service';
import { Diagnosis } from '../../model/diagnosis';
import { AppointmentService } from '../../services/appointment.service';
import { DiagnosisService } from '../../services/diagnosis.service';

@Component({
  selector: 'app-diagnosis-dialog',
  templateUrl: './diagnosis-dialog.component.html',
  styleUrls: ['./diagnosis-dialog.component.css'],
})
export class DiagnosisDialogComponent implements OnInit {
  Form: FormGroup = new FormGroup({});
  submitted: boolean = false;
  filterDiagnosisCode: any = [];
  activeDiagnosisList: any[];

  appointmentId: any;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DiagnosisDialogComponent>,
    private dialog: MatDialogRef<DiagnosisDialogComponent>,
    private diagnosisMasterService: DiagnosisMasterService,
    private diagnosisService: DiagnosisService,
    private appointmentService: AppointmentService,
  ) {}

  ngOnInit() {
    this.Form = this.formBuilder.group({
      diagnosisCode: ['', Validators.required],
      description: [''],
    });

    this.getActiveDiagnosis();
    this.appointmentId = this.appointmentService.appointmentId;
  }

  // onClose() {
  //   this.dialog.close();
  //   this.Form.reset();
  // }

  onNoClick() {
    this.dialogRef.close();
  }

  obj: Diagnosis = new Diagnosis();

  onSubmit() {
    this.obj.diagnosisCode = this.Form.value.diagnosisCode;
    this.obj.description = this.Form.value.description;
    this.obj.appointmentId = this.appointmentId;

    if (this.obj != null) {
      this.diagnosisService.saveDiagnosis(this.obj).subscribe((response) => {
        
      });
      this.onNoClick();
    }
  }

  getActiveDiagnosis() {
    this.diagnosisMasterService.getActiveDiagnosis().subscribe((data) => {
      this.activeDiagnosisList = data;
    });
  }
}
