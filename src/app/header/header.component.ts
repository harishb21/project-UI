import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user.model';
import { Roles } from '../model/roles.enum';
import { AppointmentService } from '../patient-visit/services/appointment.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'CT Hospital';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  user: User | null;
  isLoggedIn$: Observable<boolean>; //{1}
  isLoggedIn: boolean = false;

  constructor(
    private observer: BreakpointObserver,
    private authService: AuthService,
    private router: Router,
    private appointmentService:AppointmentService
  ) {}

  ngAfterContentInit() {
    if (this.user) {
      this.observer
        .observe(['(max-width: 800px)'])
        .pipe(delay(1))
        .subscribe((res) => {
          if (res.matches) {
            this.sidenav.mode = 'over';
            this.sidenav.close();
          } else {
            this.sidenav.mode = 'side';
            this.sidenav.open();
          }
        });
    }
  }

  // ngAfterViewInit() {
  //   this.observer
  //     .observe(['(max-width: 800px)'])
  //     .pipe(delay(1))
  //     .subscribe((res) => {
  //       if (res.matches) {
  //         this.sidenav.mode = 'over';
  //         this.sidenav.close();
  //       } else {
  //         this.sidenav.mode = 'side';
  //         this.sidenav.open();
  //       }
  //     });
  // }

  ngOnInit(): void {
    this.authService.userInfo.subscribe((res) => {
      this.user = res;

      // console.log('Subscribe : ', this.user);

      // this.user = this.authService.getUserFromSession();
      // console.log('Sssion : ', this.user);
      // if (res) this.isLoggedIn = true;
      // else this.isLoggedIn = false;

      // this.isLoggedIn$.next(this.isLoggedIn);
    });
    // this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
    // console.log('Header Component on nginit Loggedin : ', this.isLoggedIn$);

    this.user = this.authService.getUserFromSession();

    if (this.user) {
      this.observer

        .observe(['(max-width: 800px)'])
        .pipe(delay(1))
        .subscribe((res) => {
          if (res.matches) {
            this.sidenav.mode = 'over';
            this.sidenav.close();
          } else {
            this.sidenav.mode = 'side';
            this.sidenav.open();
          }
        });
    }
  }

  isAdmin() {
    return this.user.roleId === Roles.ADMIN ? true : false;
  }

  isPhysician() {
    return this.user.roleId === Roles.PHYSICIAN ? true : false;
  }

  isNurse() {
    return this.user.roleId === Roles.NURSE ? true : false;
  }

  isPatient() {
    return this.user.roleId === Roles.PATIENT ? true : false;
  }

  onLogout() {
    this.authService.logout();
    // sessionStorage.removeItem('user');
    this.router.navigate(['/users/auth']);
    window.location.reload();
    // event.preventDefault();
    // this.authService.logout().subscribe(
    //   () => {
    //     this.navigateToLogin();
    //   },
    //   (error: any) => {
    //     if (error && error.response && error.response.status === 401) {
    //       this.navigateToLogin();
    //     } else {
    //       console.log('An unknown error occurred while logging out', error);
    //       this.navigateToLogin();
    //     }
    //   }
    // );
  }

  onClickNotes() {}
  routeToHistory() {
    this.router.navigate([
      `/patient-visit/patient-history/` + this.user.userId,
    ]);
  }

navigateToPatientDetails()
{
this.appointmentService.patientId=this.user.userId.toString();
  this.router.navigate(['/patient-visit/patientDemographics/'+this.user.userId]);

}


}
