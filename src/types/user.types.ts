export type UserRole = 'SUPER_ADMIN' | 'SCHOOL_ADMIN' | 'PRINCIPAL' | 'TEACHER' | 'ACCOUNTANT' | 'STAFF' | 'PARENT' | 'STUDENT';

export type UserStatus = 'active' | 'inactive' | 'suspended';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  photoUrl?: string;
  isActive: boolean;
  lastLoginAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile extends User {
  roles: string[];
  permissions: string[];
  schoolId?: string;
}

export interface CreateUserRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  roles: string[];
}

export interface UpdateUserRequest {
  firstName?: string;
  lastName?: string;
  phone?: string;
  photoUrl?: string;
  isActive?: boolean;
}
