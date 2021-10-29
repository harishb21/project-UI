import { ExportService } from './../../services/export.service';
import { Router } from '@angular/router';
import { User } from './../../model/user.model';
import {
  AfterViewInit,
  Component,
  ViewChild,
  OnInit,
  ElementRef,
  Pipe,
  PipeTransform,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { AdminserviceService } from '../admin.service';
import { MatTableDataSource } from '@angular/material/table';
import { pipe } from 'rxjs';

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
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css'],
})
export class EmployeeManagementComponent implements OnInit {
  user: User | null = null;
  allPatients: User[] = [];
  displayedColumns: string[] = [
    'empId',
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

  patienId: number;
  tempId: number;
  id: number = 0;
  allEmployee: User[] = [];
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
    this.loadUser();
  }
  public getServerData(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadUser();
    return event;
  }
  
  addValues(patientId: number) {
    const obj: User = new User();
    obj.userId=patientId;
    obj.status=this.selectedValue
    this.allEmployee.push(obj);
  }

  refreshList() {
    this.loadUser();
  }
  onClick(i: number) {
    this.id = i;
    this.disableSelect = new FormControl(!this.disableSelect.value);
  }
  loadUser() {
    this.adminService
      .getAllUsers( this.pageIndex,
        this.pageSize,
        this.columnName,
        this.direction)
        .subscribe((res) => {
          this.dataSource = res.staffs;
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
      this.dataSource = res.staffs;
        this.pageIndex = res.page;
        this.pageSize = res.size;
        this.length = res.totalItems;
    });
    
  }
  changeStatus() {
    this.adminService.editEmployeeStatus(this.allEmployee).subscribe(
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

    this.loadUser();
  }
}