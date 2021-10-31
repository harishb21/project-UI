import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Allergy } from 'src/app/model/allergy.model';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-add-allergy-dialog',
  templateUrl: './add-allergy-dialog.component.html',
  styleUrls: ['./add-allergy-dialog.component.css'],
})
export class AddAllergyDialogComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  patientId:string;

  allergy_idlist: Allergy[];
  allergy_namelist: Allergy[];
  allergy_typelist: Allergy[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private patientService: PatientService,
    private dialog: MatDialogRef<AddAllergyDialogComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      allergyId: ['', Validators.required],
      allergyName: ['', Validators.required],
      allergyType: ['', Validators.required],
      allergyDesc: ['', Validators.required],
      patientId: ['', Validators.required],
    });

    this.patientId=this.patientService.patientIdToAddAllergy;

    this.patientService.getAllergy().subscribe((allergy_idlist) => {
      console.log(allergy_idlist);
      this.allergy_idlist = allergy_idlist;
    });
    this.patientService.getAllergyName().subscribe((allergy_namelist) => {
      console.log(allergy_namelist);
      
      this.allergy_namelist = allergy_namelist;
    });
    this.patientService.getAllergyType().subscribe((allergy_typelist) => {
      console.log(allergy_typelist);
      
      this.allergy_typelist = allergy_typelist;
    });

  }

  onClose() {
    this.dialog.close();
    this.form.reset();
  }
  obj: Allergy = new Allergy();
  onSubmit() {
    this.obj.allergyId = this.form.value.allergyId;
    this.obj.allergyName = this.form.value.allergyName;
    this.obj.allergyType = this.form.value.allergyType;
    this.obj.allergyDesc = this.form.value.allergyDesc;
    this.obj.patientId = this.patientId;

    console.log(this.obj);
    
    this.patientService.saveAllergy(this.obj);
    this.onClose();
  }
}
