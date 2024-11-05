import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({ templateUrl: 'update.component.html' })
export class UpdateComponent implements OnInit {
  account = this.accountService.userValue;
  form!: UntypedFormGroup;
  loading = false;
  submitted = false;
  deleting = false;
  // account: any = {};

  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    console.log(this.account?.user?.id!);
    this.form = this.formBuilder.group(
      {
        first_name: [this.account?.user?.first_name || '', Validators.required],
        last_name: [this.account?.user?.last_name || '', Validators.required],
        email: [
          this.account?.user?.email || '',
          [Validators.required, Validators.email],
        ],
        username: [this.account?.user?.username || '', Validators.required],
        password: ['', [Validators.minLength(5)]],
        confirmPassword: [''],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.accountService
      .update(this.account?.user?.id!, this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          console.log(this.account?.user?.id!);
          this.alertService.success('Update successful', {
            keepAfterRouteChange: true,
          });
          this.router.navigate(['/'], { relativeTo: this.route });
        },
        error: (error) => {
          this.alertService.error(error);
          this.loading = false;
        },
      });
  }
}
