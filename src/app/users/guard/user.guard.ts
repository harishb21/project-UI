import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../model/user.model';

@Injectable()
export class UserGuard implements CanActivate {
  user: User | null = null;

  constructor(private authService: AuthService, private router: Router) {
    authService.userInfo.subscribe((res) => {
      this.user = res;
      console.log('INSIDE User Guard Cons : ', res);
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem('user')) {
      const str: string | null = localStorage.getItem('user');
      const user: User = JSON.parse(str === null ? '{}' : str);
      this.user = user;

      // this.router.navigate(['/']);
    }

    this.authService.userInfo.subscribe((res) => {
      if (res) {
        this.user = res;
      }
      console.log('INSIDE USER GUARD Subscribe Res: ', res);
    });

    if (this.user === null) {
      this.router.navigate(['/users/auth']);
      return false;
    }

    if (route.data.role.indexOf(this.user?.roleId) === -1) {
      return false;
    }

    return true;
  }
}
