import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ToastService } from 'src/app/toast/toast.service';
import { MedicationsDialogComponent } from '../dialog/medications-dialog/medications-dialog.component';
import { Medications } from '../model/medications';
import { MedicationsService } from '../services/medications.service';

@Component({
  selector: 'app-medications',
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.css'],
})
export class MedicationsComponent implements OnInit {
  @Input() appointmentId: number;
  public Form: FormGroup;
  isPopupOpened = true;
  MedicationList: Medications[] = [];

  listdata: MatTableDataSource<any>;
  constructor(
    private dialog?: MatDialog,
    private formBuilder?: FormBuilder,
    private medService?: MedicationsService
  ) {}

  ngOnInit() {
    this.Form = this.formBuilder.group({
      // DrugID: ['', Validators.required],
      drugName: ['', Validators.required],
      drugForm: ['', Validators.required],
      discription: [''],
    });

    this.getMedicationList();
  }

  getMedicationList() {
    this.medService
      .getByAppointmentId(this.appointmentId)
      .subscribe((value) => (this.MedicationList = value));
    console.log('medication : ');

    console.log(this.MedicationList);
  }

  addMedication() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.height = '380px';
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

  deleteMedication(drugId: number) {
    this.medService.deleteMedication(drugId).subscribe((value) => {
      //   this.toastService.show(value['statusMessage'],{ classname: 'bg-danger text-light', delay: 1000 });
      this.getMedicationList();
    });
  }

  editMedication(drugId: number) {
    this.isPopupOpened = true;
    const medicine = this.medService
      .getAllMedList()
      .find((m) => m.drugId === drugId);
    const dialogRef = this.dialog.open(MedicationsDialogComponent, {
      data: medicine,
    });
  }

  save() {
    console.log(this.MedicationList);
  }
}
