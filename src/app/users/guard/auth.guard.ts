import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> {
  // return this.authService.isLoggedIn.pipe(
  //   take(1),
  //   map((isLoggedIn: boolean) => {
  //     if (!isLoggedIn) {
  //       console.log('Auth Guard isloggedin', isLoggedIn);
  //       this.router.navigate(['/users/auth']);
  //       return false;
  //     }
  //     return true;
  //   })
  // );
  // }
}
