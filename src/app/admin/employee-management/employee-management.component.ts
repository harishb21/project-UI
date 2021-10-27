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
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { AdminserviceService } from '../admin.service';

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
  allEmployee: User[] = [];
  currentEmployee: null;
  currentIndex = -1;
  id = '';
  page = 0;
  count = 0;
  pageSize = 5;
  pageSizes = [5, 10, 50, 100];
  index: number;
  noValue: boolean = false;
  value = 5;
  columnName: string = 'userId';
  direction: string = 'ASC';
  staffId: number;
  allStaffs: User[] = [];
  disableSelect = new FormControl(true);
  matcher = new MyErrorStateMatcher();
  selectedValue: string;
  allStatus: Status[] = [
    { value: 'active', viewValue: 'Activate' },
    { value: 'deactive', viewValue: 'Deactivate' },
    { value: 'block', viewValue: 'Blocked' },
  ];
  @ViewChild('userTable') userTable: ElementRef;
  @ViewChild('RecordNumber', { static: false }) recordnum: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private adminService: AdminserviceService,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private exportService : ExportService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  ngOnInit() {
    this.authService.userInfo.subscribe((user) => {
      this.user = user;
    });
    this.loadUser();
  }
  refreshList() {
    this.loadUser();
    this.currentEmployee = null;
    this.currentIndex = -1;
  }

  loadUser() {
    this.adminService
      .getAllUsers(this.page, this.pageSize, this.columnName, this.direction)
      .subscribe((data) => {
        const { staffs, totalElements, page, size } = data;
        this.allEmployee = staffs;
        this.count = totalElements;
        (this.page = page), (this.pageSize = size);
      });
  }
  handlePageChange(event: any): void {
    this.page = event;
    this.loadUser();
  }

  selected = new FormControl('selected.value', [
    Validators.pattern('selected.value'),
  ]);
  onClick(i: number) {
    this.index = i;
    this.disableSelect = new FormControl(false);
  }
  changeStatus() {
    this.adminService.editEmployeeStatus(this.allStaffs).subscribe((data) => {
      this._snackBar.open(data.msg);
      this.selected.reset();
    });
  }
  addValues(patientId: number) {
    const obj = new User();
    obj.userId = patientId;
    obj.status = this.selectedValue;
    this.allStaffs.push(obj);
  }
  applyFilter(event: Event) :any{
    const filterValue = (event.target as HTMLInputElement).value;
    if(filterValue === "")
      {
        this.loadUser();
      return false;
      }
    this.adminService
      .getFilterEmployeeRecord(
        this.page,
        this.pageSize,
        this.direction,
        filterValue
      )
      .subscribe((data) => {
        console.log(data);
        const { staffs, totalElements, page, size } = data;
        this.allEmployee = staffs;
        this.count = totalElements;
        (this.page = page), (this.pageSize = size);
        if (totalElements === 0) this.noValue = true;
      });
      
  }

  changeRecord(value: any) {
    this.pageSize = value;
    this.loadUser();
  }

  getSort(key: any) {
    if (this.columnName === key) {
      if (this.direction === 'ASC') this.direction = 'DESC';
      else this.direction = 'ASC';
    }
    this.columnName = key;

    this.loadUser();
  }
  exportElmToExcel(): void {
    this.exportService.exportTableElmToExcel(this.userTable, 'user_data');
  }
}
