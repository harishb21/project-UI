import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AuthService } from '../users/auth.service';
import { User } from '../users/model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'my-project';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  user: User | null;
  isLoggedIn$: Observable<boolean>; //{1}
  isLoggedIn: boolean = false;

  constructor(
    private observer: BreakpointObserver,
    private authService: AuthService
  ) {}

  // ngAfterContentInit() {
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
    // this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
    // console.log('Header Component on nginit Loggedin : ', this.isLoggedIn$);

    this.authService.userInfo.subscribe((res) => {
      console.log('Header Component User : ', res);
      this.user = res;
      if (res) this.isLoggedIn = true;
    });

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

  onLogout() {
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
}
