import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DrugMaster } from '../../model/DrugMaster';
import { DrugMasterService } from '../../services/drug-master.service';

@Component({
  selector: 'app-edit-drugs',
  templateUrl: './edit-drugs.component.html',
  styleUrls: ['./edit-drugs.component.css']
})
export class EditDrugsComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private drugMasterService: DrugMasterService,
    private dialog: MatDialogRef<EditDrugsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DrugMaster,

  ) {}




  ngOnInit(): void {
    this.form = this.formBuilder.group({
      drugId: [{disabled:true}, Validators.required],
      drugName: ['', Validators.required],
      drugGenericName: ['', Validators.required],
      drugBrandName: ['', Validators.required],
      drugForm: ['', Validators.required],
      drugStrength: ['', Validators.required],
    });

  }


  drugId: string;
  drugName: string;
  drugGenericName: string;
  drugBrandName: string;
  drugForm: string;
  drugStrength: string;

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




  onClose() {
    this.dialog.close();
    this.form.reset();
  }

}
