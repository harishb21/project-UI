import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DrugMasterService } from 'src/app/master/services/drug-master.service';
import { ToastService } from 'src/app/toast/toast.service';
import { Medications } from '../../model/medications';
import { AppointmentService } from '../../services/appointment.service';
import { MedicationsService } from '../../services/medications.service';
import { DiagnosisDialogComponent } from '../diagnosis-dialog/diagnosis-dialog.component';

@Component({
  selector: 'app-medications-dialog',
  templateUrl: './medications-dialog.component.html',
  styleUrls: ['./medications-dialog.component.css'],
})
export class MedicationsDialogComponent implements OnInit {
  public Form: FormGroup;
  appointmentId: any;

  drugList: any[];

  constructor(
    private dialogRef: MatDialogRef<MedicationsDialogComponent>,
    private formBuilder: FormBuilder,
    private medService: MedicationsService,
    private dialog: MatDialogRef<DiagnosisDialogComponent>,
    private appointmentService: AppointmentService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private drugMasterService: DrugMasterService
  ) {}

  ngOnInit() {
    this.initForm();
    this.appointmentId = this.appointmentService.patientId;

    this.getAlldrugs();
  }

  initForm() {
    this.Form = this.formBuilder.group({
      drugId: ['', Validators.required],
      drugName: ['', Validators.required],
      drugGenericName: ['', Validators.required],
      drugBrandName: ['', Validators.required],
      drugForm: ['', Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getAlldrugs() {
    this.drugMasterService.getDrugs().subscribe((data) => {
      this.drugList = data;
    });
  }

  obj: Medications = new Medications();

  onSubmit() {
    this.obj.drugId = this.Form.value.drugId;
    this.obj.drugName = this.Form.value.drugName;
    this.obj.drugGenericName = this.Form.value.drugGenericName;
    this.obj.drugBrandName = this.Form.value.drugBrandName;
    this.obj.drugForm = this.Form.value.drugForm;
    this.obj.appointmentId = this.appointmentId;

    if (this.obj != null) {
      this.medService.saveMedication(this.obj).subscribe((response) => {});
      this.onNoClick();
    }
  }

  onClose() {
    this.dialog.close();
    this.Form.reset();
  }
}
