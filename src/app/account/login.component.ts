import { Component, OnInit } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';
import { Role } from '@app/_models';

@Component({
  templateUrl: 'login.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf, RouterLink],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.accountService.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.alertService.clear();

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.accountService
      .login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe({
        next: () => {
          const user = this.accountService.userValue;

          if (user && user.user?.role === Role.Admin) {
            // Redirect admin user to /admin
            this.router.navigate(['/admin']);
          } else {
            // Redirect other users to the root route or another default route
            const returnUrl =
              this.route.snapshot.queryParams['returnUrl'] || '/';
            this.router.navigateByUrl(returnUrl);
          }

          this.alertService.success('Login successfully', {
            keepAfterRouteChange: true,
          });
        },
        error: (error) => {
          this.alertService.error('Wrong username or password', {
            keepAfterRouteChange: true,
          });
          this.loading = false;
        },
      });
  }
}
