import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'src/app/toast/toast.service';
import { Diagnosis } from '../../model/diagnosis';
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

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DiagnosisDialogComponent>,
    private dialog: MatDialogRef<DiagnosisDialogComponent>,
  ) {}

  ngOnInit() {
    this.Form = this.formBuilder.group({
      diagnosisCode: ['', Validators.required],
      diagnosisName: ['', Validators.required],
      description: [''],
    });
  }

  onClose() {
    this.dialog.close();
    this.Form.reset();
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log(this.Form.value.diagnosisCode);
    console.log(this.Form.value.diagnosisName);
    console.log(this.Form.value.description);
  }
}
