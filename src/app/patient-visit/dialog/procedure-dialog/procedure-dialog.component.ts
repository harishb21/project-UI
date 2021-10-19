import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-procedure-dialog',
  templateUrl: './procedure-dialog.component.html',
  styleUrls: ['./procedure-dialog.component.css'],
})
export class ProcedureDialogComponent implements OnInit {
  Form: FormGroup = new FormGroup({});
  submitted: boolean = false;
  filterDiagnosisCode: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ProcedureDialogComponent>,
    private dialog: MatDialogRef<ProcedureDialogComponent>,
  ) {}

  ngOnInit() {
    this.Form=this.formBuilder.group({
      procedureCode: ['',Validators.required],
      procedureName: ['',Validators.required],
      discription: ['']
    })
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
