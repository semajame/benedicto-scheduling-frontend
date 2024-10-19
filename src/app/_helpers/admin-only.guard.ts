import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AccountService } from '@app/_services';
import { Role } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AdminOnlyGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {}

  canActivate(): boolean {
    const user = this.accountService.userValue;
    if (user && user.user?.role === Role.Admin) {
      return true; // Allow access to admin routes
    }
    // Non-admins are redirected away from admin routes
    this.router.navigate(['/']);
    return false;
  }
}
