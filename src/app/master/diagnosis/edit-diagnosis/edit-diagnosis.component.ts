import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DiagnosisMaster } from '../../model/DiagnosisMaster';
import { DiagnosisMasterService } from '../../services/diagnosis-master.service';

@Component({
  selector: 'app-edit-diagnosis',
  templateUrl: './edit-diagnosis.component.html',
  styleUrls: ['./edit-diagnosis.component.css']
})
export class EditDiagnosisComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private diagnosisMasterService: DiagnosisMasterService,
    private dialog: MatDialogRef<EditDiagnosisComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DiagnosisMaster,

  ) {}



  ngOnInit(): void {
    this.form = this.formBuilder.group({
      diagnosisCode: [{disabled:true}, Validators.required],
      description: [''],
      isDepricated: [''],
    });

  }



  onClose() {
    this.dialog.close();
  }
  obj: DiagnosisMaster = new DiagnosisMaster();
  onSubmit() {
    this.obj.diagnosisCode = this.form.value.diagnosisCode;
    this.obj.description = this.form.value.description;
    this.obj.isDepricated = this.form.value.isDepricated;

    console.log(this.form.value.diagnosisCode);
    console.log(this.form.value.description);


    this.diagnosisMasterService.saveDiagnosis(this.obj);
    this.onClose();
  }

}
