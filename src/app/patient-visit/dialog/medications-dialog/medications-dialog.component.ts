import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Medications } from '../../model/medications';
import { Observable, OperatorFunction } from 'rxjs';
import { MedicationsService } from '../../services/medications.service';
import { ToastService } from 'src/app/toast/toast.service';
import { DrugMasterService } from '../../services/drugMaster-service';
import { DiagnosisDialogComponent } from '../diagnosis-dialog/diagnosis-dialog.component';

@Component({
  selector: 'app-medications-dialog',
  templateUrl: './medications-dialog.component.html',
  styleUrls: ['./medications-dialog.component.css']
})
export class MedicationsDialogComponent implements OnInit {

  public Form: FormGroup;
  options = ["sam", "jon"];
  option1=["form","form2"];
  users: {};
  filteredName: any[] = [];
  filteredForm: any[] = [];

  listoption: any;
  listForms: any;

  constructor(private dialogRef: MatDialogRef<MedicationsDialogComponent>,
    private formBuilder: FormBuilder,
    private medService: MedicationsService,
    private dialog: MatDialogRef<DiagnosisDialogComponent>,
    private to: ToastService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private drugMasterService: DrugMasterService,) { }

  ngOnChanges() {

  }

  ngOnInit() {
    this.initForm();
    this.getDrugId();
    this.getAllusers();
    this.getDrugForm();
  }

  initForm(){
    this.Form = this.formBuilder.group({
      // DrugID: ['', Validators.required],
      drugName: ['', Validators.required],
      drugForm: ['', Validators.required],
      discription:['']
    });

    /* this.Form.get('drugName').valueChanges.
      pipe(debounceTime(1000)).subscribe(response => {
        if (response && response.length) {
          this.filterData(response);
        } else {
          this.filteredOptions = [];
        }
      })

      this.Form.get('drugForm').valueChanges.
      pipe(debounceTime(1000)).subscribe(response => {
        if (response && response.length) {
          this.filterData1(response);
        } else {
          this.filteredOptions1 = [];
        }
      }) */

      

  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.filterDrugCode(term))
    )

  onDrugCodeSelection(event:any) {
    this.filteredForm = this.filteredName.filter(item => {
      return item['drugName'].toLowerCase() === event.item.toLowerCase()
    })
  }

  filterDrugCode(enteredData:any){
    return this.filteredName.filter(item => {
      return item['drugName'].toLowerCase().includes(enteredData.toLowerCase()) && !item['drugIsDepricated']
    }).map(value => value['drugName'])
  }

  filterData(enteredData:any) {
    this.filteredName = this.options.filter(item => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {

    this.medService.addMedication(this.Form.value);
    
    let medicine:Medications=this.Form.value;
    medicine.appointmentId=this.data;
    console.log(medicine)
    this.medService.saveMedication(medicine).subscribe(data=>{
      this.to.show(data.statusMessage,{ classname: 'bg-success text-light', delay: 1000 });
      this.dialogRef.close();
    })
  }

  getDrugId() {
    this.drugMasterService.getDrug(0, 10000, '', '', 'ASC').subscribe((responce: { drugList: any[]; }) => {
      console.log(responce)
      this.filteredName = responce.drugList;
    })
  }

  getDrugForm(){
    this.medService.getAllDrugForm().subscribe(res =>{
      this.option1=res;
      this.filteredForm=res;
      
    })
  }

  getPosts(value: any) {
    console.log(value);
    // this.medService.getDrugByID(value).subscribe(res =>{
    //   console.log(res);
      
    // })

  }

  onClose() {
    this.dialog.close();
    this.Form.reset();
  }

  getAllusers() {
    this.medService.getallDAta().subscribe(res => {

      this.options = res;
      this.filteredName = res;
    })
  }

}
