import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule

import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';
import { HomeComponent } from './home.component';

// Define the routes for this module
const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    jqxSchedulerModule,

    RouterModule.forChild(routes), // Configure the routes for this module
  ],
  declarations: [HomeComponent],
})
export class HomeModule {} // Ensure PascalCase
