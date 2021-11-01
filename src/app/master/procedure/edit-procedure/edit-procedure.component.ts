import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProcedureMaster } from '../../model/ProcedureMaster';
import { ProcedureMasterService } from '../../services/procedure-master.service';

@Component({
  selector: 'app-edit-procedure',
  templateUrl: './edit-procedure.component.html',
  styleUrls: ['./edit-procedure.component.css'],
})
export class EditProcedureComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private procedureMasterService: ProcedureMasterService,
    private dialog: MatDialogRef<EditProcedureComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProcedureMaster
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
