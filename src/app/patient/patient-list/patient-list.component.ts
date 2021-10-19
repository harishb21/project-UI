import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit {
  constructor(private patientService: PatientService, private router: Router) {}
  dataSource: any;
  PATIENT_DATA: PatientInterface[] = [];
  ngOnInit(): void {
    this.patientService.getAllPatient().subscribe((data) => {
      this.dataSource = new MatTableDataSource<PatientInterface>(data);

      console.log(this.dataSource);
    });
    console.log('patient data :' + this.PATIENT_DATA);
  }
  displayedColumns: string[] = [
    'patient ID',
    'First Name',
    'Last Name',
    'Email',
    'Action',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  editData(id: number) {
    console.log(id);
    // id=1;
    this.router.navigate(['/patient/patientDemographics/' + id]);
  }
}

export class PatientInterface {
  id: number;
  title: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  age: number;
  gender: string;
  race: string;
  ethnicity: string;
  languages: string;
  email: string;
  contactNo: string;
  address: string;
  emergencyContact: EmergencyContactInterface;
}

export class EmergencyContactInterface {
  firstName: string;
  lastName: string;
  relationship: string;
  email: string;
  contact: number;
  address: string;
}
