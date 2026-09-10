export interface Teacher {
  id: string;
  userId: string;
  schoolId: string;
  employeeId: string;
  dateOfJoining: Date;
  departmentId?: string;
  qualification?: string;
  specialization?: string;
  experience?: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateTeacherRequest {
  userId: string;
  employeeId: string;
  dateOfJoining: Date;
  departmentId?: string;
  qualification?: string;
  specialization?: string;
  experience?: number;
  subjects?: string[];
}

export interface TeacherWithSubjects extends Teacher {
  subjects: string[];
  classes: string[];
}
