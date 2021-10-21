import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  user: User;

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // If user found in session
    if (sessionStorage.getItem('user')) {
      const str: string | null = sessionStorage.getItem('user');
      const user: User = JSON.parse(str === null ? '{}' : str);
      this.user = user;

      // redirect to home
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
