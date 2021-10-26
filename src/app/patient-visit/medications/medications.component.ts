import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MedicationsDialogComponent } from '../dialog/medications-dialog/medications-dialog.component';
import { Medications } from '../model/medications';
import { AppointmentService } from '../services/appointment.service';
import { MedicationsService } from '../services/medications.service';

@Component({
  selector: 'app-medications',
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.css'],
})
export class MedicationsComponent implements OnInit {
  appointmentId: string;
  public Form: FormGroup;
  isPopupOpened = true;
  MedicationList: Medications[] = [];

  listdata: MatTableDataSource<any>;
  constructor(
    private dialog?: MatDialog,
    private formBuilder?: FormBuilder,
    private medService?: MedicationsService,
    private appointmentService?: AppointmentService
  ) {}

  ngOnInit() {
    this.Form = this.formBuilder.group({
      drugId: ['', Validators.required],
      drugName: ['', Validators.required],
      drugGenericName: ['', Validators.required],
      drugBrandName: ['', Validators.required],
      drugForm: ['', Validators.required],
    });
    this.appointmentId = this.appointmentService.appointmentId;
    this.getMedicationList();
  }

  getMedicationList() {
    this.medService
      .getByAppointmentId(this.appointmentId)
      .subscribe((value) => {
        this.MedicationList = value;
      });
  }

  addMedication() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.height = '400px';
    dialogConfig.data = this.appointmentId;
    dialogConfig.position = {};

    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(
      MedicationsDialogComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((result) => {
      this.isPopupOpened = false;
      this.getMedicationList();
    });
  }

  deleteMedication(id: number) {
    this.medService.deleteMedication(id).subscribe((value) => {
      this.getMedicationList();
    });
  }
}
