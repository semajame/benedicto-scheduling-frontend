// export class Teachers {
//   id?: string;
//   employee_id?: string;
//   firstName?: string;
//   lastName?: string;
//   email?: string;
//   address?: string;
//   phoneNumber?: string;
//   contactNumber?: string;
//   gender?: string;
// }

export interface Teachers {
  employee_id: number;
  campus_id: number;
  department_id: number;
  role: string;
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  qualifications: string;
  gender: string;
  address: string;
  contactNumber: string;
  isActive: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  campus: {
    campusName: string;
  };
  department: {
    departmentName: string;
    departmentCode: string;
  };
  allRoles: string;
  fullName: string;
  fullNameWithRole: string;
  name: string;
  campusName: string;
}
