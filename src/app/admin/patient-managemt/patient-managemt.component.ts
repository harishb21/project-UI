import { tap } from 'rxjs/operators';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { pipe } from 'rxjs';
import { User } from '../model/user.model';
import { AdminserviceService } from '../admin.service';
import { Patient } from '../model/patient.model';
import { AuthService } from '../../services/auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl): boolean {
    return !!control;
  }
}
interface Status {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-patient-managemt',
  templateUrl: './patient-managemt.component.html',
  styleUrls: ['./patient-managemt.component.css'],
})
export class PatientManagementComponent implements OnInit {
  user: User | null = null;
  allPatients: Patient[] = [];
  displayedColumns: string[] = [
    'patientId',
    'firstName',
    'createdOn',
    'status',
    'editstatus',
  ];
  dataSource: MatTableDataSource<Patient>;
  patienId: number;
  tempId: number;
  id: number = 0;
  allPatient: Patient[] = [];
  allPatientStatus: string[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  disableSelect = new FormControl(true);
  matcher = new MyErrorStateMatcher();
  selectedValue: string;
  allStatus: Status[] = [
    { value: 'active', viewValue: 'Activate' },
    { value: 'deactive', viewValue: 'Deactivate' },
    { value: 'block', viewValue: 'Blocked' },
  ];
  constructor(
    private adminService: AdminserviceService,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}
  selected = new FormControl('selected.value', [
    Validators.pattern('selected.value'),
  ]);
  ngOnInit(): void {
    this.authService.userInfo.subscribe((user) => {
      this.user = user;
    });
    this.loadPatient();
    this.toastr.success('All Data loaded successfully');
  }

  addValues(patientId: number) {
    const obj: Patient = new Patient();
    // obj.userId = patientId;
    // obj.status = this.selectedValue;
    this.allPatient.push(obj);
  }

  refreshList() {
    this.ngOnInit();
  }
  onClick(i: number) {
    this.id = i;
    this.disableSelect = new FormControl(!this.disableSelect.value);
  }
  loadPatient() {
    this.adminService.getAllPatient().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  changeStatus() {
    this.adminService.editPatientStatus(this.allPatient).subscribe(
      pipe((data) => {
        console.log(data);
        this.loadPatient();
      })
    );

    // tap((data) => {
    //         console.log(data);
    //        this.loadPatient();
    //      }),
    //   (error :any) => {
    //    console.log(error);
    //    this.loadPatient();
    //    });
  }
  // acivatePatient(patientId: number) {
  //   this.adminService.activatePatient(patientId).subscribe(
  //     tap((data) => {
  //       console.log(data);
  //       this.loadPatient();
  //     }),
  //     (error) => {
  //       console.log(error);
  //       this.loadPatient();
  //     }
  //   );
  // }
}

/** Builds and returns a new User. */
