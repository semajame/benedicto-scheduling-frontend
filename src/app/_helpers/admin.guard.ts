import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AccountService } from '@app/_services';
import { Role } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {}

  canActivate(): boolean {
    const user = this.accountService.userValue;
    if (user && user.user?.role === Role.Admin) {
      // Admin cannot access non-admin routes, redirect to /admin
      this.router.navigate(['/admin']);
      return false;
    }
    return true; // Allow other users to access the route
  }
}
