import { tap } from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, pipe } from 'rxjs';
import { AdminserviceService } from './admin.service';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  user: User | null = null;
  patientData: any;
  userData: any;
  currentUser: BehaviorSubject<User>;

  constructor(
    private toaster: ToastrService,
    private adminService: AdminserviceService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.userInfo.subscribe((user) => {
      this.user = user;
    });
    this.loadPatientData();
    this.loadUserData();
  }

  loadPatientData() {
    this.adminService.getPatientCount().subscribe(
      pipe((res:any) => {
       
        this.patientData = {
          labels: ['Total Patient', 'Active Patient', 'Need to be Activated'],
          datasets: [
            {
              label: 'Patient Overview',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: res.count
            },
          ],
        };
      })
    );
  }
  loadUserData() {
    this.adminService.getEmployeeCount().subscribe(
      pipe((res:any) => {
        this.userData = {
          labels: ['Total Employee', 'Active Employee', 'Need to be Activated'],
          datasets: [
            {
              label: 'Hospital User Overview',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: res.count
            },
          ],
        };
      })
    );
  }
  goToPatientDetails() {
    this.router.navigate(['patient-details']);
  }
}
