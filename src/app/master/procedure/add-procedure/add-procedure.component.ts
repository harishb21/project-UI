import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProcedureMaster } from '../../model/ProcedureMaster';
import { ProcedureMasterService } from '../../services/procedure-master.service';

@Component({
  selector: 'app-add-procedure',
  templateUrl: './add-procedure.component.html',
  styleUrls: ['./add-procedure.component.css'],
})
export class AddProcedureComponent implements OnInit {
  form: FormGroup = new FormGroup({});


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private procedureMasterService: ProcedureMasterService,
    private dialog: MatDialogRef<AddProcedureComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      procedureCode: ['', Validators.required],
      description: [''],
      isDepricated: [''],
    });

  }

  onClose() {
    this.dialog.close();
    this.form.reset();
  }

  obj: ProcedureMaster = new ProcedureMaster();
  onSubmit() {
    this.obj.procedureCode = this.form.value.procedureCode;
    this.obj.description = this.form.value.description;
    this.obj.isDepricated = this.form.value.isDepricated;

    this.procedureMasterService.saveProcedures(this.obj);
    this.onClose();
  }

  
}
