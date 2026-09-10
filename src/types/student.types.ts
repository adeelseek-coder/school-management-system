export type StudentStatus = 'active' | 'inactive' | 'transferred' | 'passed_out';

export interface Student {
  id: string;
  userId: string;
  schoolId: string;
  admissionNumber: string;
  classId: string;
  sectionId: string;
  dateOfBirth: Date;
  gender: string;
  bloodGroup?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  studentStatus: StudentStatus;
  enrollmentDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateStudentRequest {
  userId: string;
  admissionNumber: string;
  classId: string;
  sectionId: string;
  dateOfBirth: Date;
  gender: string;
  bloodGroup?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  guardians?: GuardianInfo[];
  emergencyContacts?: EmergencyContactInfo[];
}

export interface GuardianInfo {
  relation: string;
  name: string;
  phone?: string;
  email?: string;
  occupation?: string;
}

export interface EmergencyContactInfo {
  name: string;
  relation: string;
  phone: string;
}
