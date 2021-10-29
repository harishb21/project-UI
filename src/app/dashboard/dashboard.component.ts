import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Roles } from '../model/roles.enum';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.userInfo.subscribe((user) => {
      if (user) {
        if (user.roleId === Roles.ADMIN) {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/app-inbox']);
        }
      }
    });
  }
}
