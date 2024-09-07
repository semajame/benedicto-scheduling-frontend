import { Component } from '@angular/core';
import { Role } from '@app/_models/role';

import { User } from '@app/_models/user';

@Component({ templateUrl: 'layout.component.html' })
export class LayoutComponent {
  Role = Role;
  user?: User | null;
}
