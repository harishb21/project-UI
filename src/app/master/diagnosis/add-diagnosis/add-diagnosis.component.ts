import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DiagnosisMaster } from '../../model/DiagnosisMaster';
import { DiagnosisMasterService } from '../../services/diagnosis-master.service';

@Component({
  selector: 'app-add-diagnosis',
  templateUrl: './add-diagnosis.component.html',
  styleUrls: ['./add-diagnosis.component.css'],
})
export class AddDiagnosisComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private diagnosisMasterService: DiagnosisMasterService,
    private dialog: MatDialogRef<AddDiagnosisComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      diagnosisCode: ['', Validators.required],
      description: [''],
      isDepricated:['']
       });
  }

  onClose() {
    this.dialog.close();
    this.form.reset();
  }
  obj: DiagnosisMaster = new DiagnosisMaster();
  onSubmit() {
    this.obj.diagnosisCode = this.form.value.diagnosisCode;
    this.obj.description = this.form.value.description;
    this.obj.isDepricated = this.form.value.isDepricated;


    this.diagnosisMasterService.saveDiagnosis(this.obj);
    this.onClose()
   


  }
}
