import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DrugMaster } from '../../model/DrugMaster';
import { DrugMasterService } from '../../services/drug-master.service';

@Component({
  selector: 'app-add-drugs',
  templateUrl: './add-drugs.component.html',
  styleUrls: ['./add-drugs.component.css'],
})
export class AddDrugsComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private drugMasterService: DrugMasterService,
    private dialog: MatDialogRef<AddDrugsComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      drugId: ['', Validators.required],
      drugName: ['', Validators.required],
      drugGenericName: ['', Validators.required],
      drugBrandName: ['', Validators.required],
      drugForm: ['', Validators.required],
      drugStrength: ['', Validators.required],
    });
  }

  onClose() {
    this.dialog.close();
    this.form.reset();
  }

  obj: DrugMaster = new DrugMaster();

  onSubmit() {
    this.obj.drugId = this.form.value.drugId;
    this.obj.drugName = this.form.value.drugName;
    this.obj.drugGenericName = this.form.value.drugGenericName;
    this.obj.drugBrandName = this.form.value.drugBrandName;
    this.obj.drugForm = this.form.value.drugForm;
    this.obj.drugStrength = this.form.value.drugStrength;

    this.drugMasterService.addNewDrug(this.obj);
    this.onClose();
  }
}
