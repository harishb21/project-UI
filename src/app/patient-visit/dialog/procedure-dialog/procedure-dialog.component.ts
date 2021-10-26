import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { startWith } from 'rxjs/operators';
import { ProcedureMasterService } from 'src/app/master/services/procedure-master.service';
import { Procedure } from '../../model/procedure';
import { AppointmentService } from '../../services/appointment.service';
import { PatientProceduresService } from '../../services/patient-procedures.service';

@Component({
  selector: 'app-procedure-dialog',
  templateUrl: './procedure-dialog.component.html',
  styleUrls: ['./procedure-dialog.component.css'],
})
export class ProcedureDialogComponent implements OnInit {
  Form: FormGroup = new FormGroup({});
  submitted: boolean = false;
  filterDiagnosisCode: any = [];
  activeProcedureList: any[];
  appointmentId: any;
  constructor(
    private formBuilder: FormBuilder,
    private procedureMasterService: ProcedureMasterService,
    private dialogRef: MatDialogRef<ProcedureDialogComponent>,
    private dialog: MatDialogRef<ProcedureDialogComponent>,
    private appointmentService: AppointmentService,
    private procedureService: PatientProceduresService
  ) {}

  ngOnInit() {
    this.Form = this.formBuilder.group({
      procedureCode: ['', Validators.required],
      description: [''],
    });

    this.appointmentId = this.appointmentService.patientId;

    this.getActiveProcedures();
  }

  onClose() {
    this.dialog.close();
    this.Form.reset();
  }

  onNoClick() {
    this.dialogRef.close();
  }

  obj: Procedure = new Procedure();

  onSubmit() {
    this.obj.procedureCode = this.Form.value.procedureCode;
    this.obj.description = this.Form.value.description;
    this.obj.appointmentId = this.appointmentId;

    this.procedureService.saveProcedures(this.obj).subscribe((response) => {});

    this.onClose();
  }

  getActiveProcedures() {
    this.procedureMasterService
      .getActiveProcedures()
      .pipe(startWith(''))
      .subscribe((data) => {
        this.activeProcedureList = data;
      });
  }
}
