export interface Subjects {
  course_id: number;
  campus_id: number;
  department_id: number | null;
  courseCode: string;
  courseDescription: string;
  unit: number;
  isActive: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  campus: {
    campusName: string;
  };
  department: any; // Adjust this as necessary
  departmentCodeForClass: string;
  fullCourseNameWithCampus: string;
  fullCourseName: string;
  fullDepartmentNameWithCampus: any; // Adjust this as necessary
  campusName: string;
}
