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
  allEmployee: User[]=[];
  currentContact?: null;
  currentIndex = -1;
  id = '';
  p = 1;
  index: number;
  newrecord: number = 5;
  value = 5;
  key: string = 'id';
  reverse: boolean = false;
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

  @ViewChild('RecordNumber', { static: false }) recordnum: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private adminService: AdminserviceService,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.authService.userInfo.subscribe((user) => {
      this.user = user;
    });
    this.loadUser();
  }
  refreshList() {
    this.loadUser();
    this.currentContact = null;
    this.currentIndex = -1;
  }

  loadUser() {
    this.adminService.getAllUsers().subscribe((data) => {
      this.allEmployee = data;
      this.toastr.success('All Data Loaded');
    });
  }
  setActiveContact(employee: User, index: number): void {
    this.currentContact = undefined;
    this.currentIndex = index;
  }

  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  changeRecord(value: any) {
    this.newrecord = value;
  }
  selected = new FormControl('selected.value', [
    Validators.pattern('selected.value'),
  ]);
  onClick(i: number) {
    this.index = i;
    this.disableSelect = new FormControl(!this.disableSelect.value);
  }
  changeStatus() {
    this.adminService.editEmployeeStatus(this.allStaffs).subscribe((data) => {
      console.log(data);
    });
  }
  addValues(patientId: number) {
    const obj = new User();
    //obj.userId = patientId;
    //obj.status = this.selectedValue;
    this.allStaffs.push(obj);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    console.log(filterValue);
  }
}
