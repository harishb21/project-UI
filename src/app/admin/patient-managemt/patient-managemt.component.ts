import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from './../../model/user.model';
import { tap } from 'rxjs/operators';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
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
import { AdminserviceService } from '../admin.service';
import { AuthService } from '../../services/auth.service';
import { Sort } from 'src/app/model/page';
import { PaginationDataSource } from 'src/app/model/PaginationDataSource.datasource';

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
  allPatients: User[] = [];
  displayedColumns: string[] = [
    'patientId',
    'firstName',
    'createdOn',
    'status',
    'editstatus',
  ];
  dataSource: MatTableDataSource<User>;
  pageEvent: PageEvent;
  pageIndex: number = 0;
  pageSize: number = 5;
  length: number;
  columnName: string = 'userId';
  direction: string = 'ASC';
disabledEditButton : boolean = false;
  patienId: number;
  tempId: number;
  id: number = -1;
  allPatient: User[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
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
    private _snackBar: MatSnackBar,
    private router:Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  selected = new FormControl('selected.value', [
    Validators.pattern('selected.value'),
  ]);
  ngOnInit(): void {
    this.authService.userInfo.subscribe((user) => {
      this.user = user;
    });
    this.loadPatient();
  }
  public getServerData(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadPatient();
    return event;
  }

  addValues(patientId: number) {
    const obj: User = new User();
    obj.userId=patientId;
    obj.status=this.selectedValue
    this.allPatient.push(obj);
  }

  refreshList() {
    this.ngOnInit();
  }
  onClick(i: number) {
    this.disabledEditButton=true;
    this.id = i;
    this.disableSelect = new FormControl(false);
  }
  loadPatient() {
    this.adminService
      .getAllPatient(
        this.pageIndex,
        this.pageSize,
        this.columnName,
        this.direction
      )
      .subscribe((res) => {
        this.dataSource = res.patients;
        this.pageIndex = res.page;
        this.pageSize = res.size;
        this.length = res.totalItems;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.adminService
    .getFilterPatientRecord(this.pageIndex,
      this.pageSize,
      this.direction,
      filterValue)
    .subscribe((res) => {
      this.dataSource = res.patients;
        this.pageIndex = res.page;
        this.pageSize = res.size;
        this.length = res.totalItems;
    });
    
  }
  changeStatus() {
    this.adminService.editPatientStatus(this.allPatient).subscribe(
      pipe((data:any) => {
        this._snackBar.open(data.msg);
        this.ngOnInit();
       window.location.reload();
      })
    );
  }
  getSort(sort: string) {
    if (this.columnName === sort) {
      if (this.direction === 'ASC') this.direction = 'DESC';
      else this.direction = 'ASC';
    }
    this.columnName = sort;

    this.loadPatient();
  }
}

/** Builds and returns a new User. */
