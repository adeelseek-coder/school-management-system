export const ROLES = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  SCHOOL_ADMIN: 'SCHOOL_ADMIN',
  PRINCIPAL: 'PRINCIPAL',
  TEACHER: 'TEACHER',
  ACCOUNTANT: 'ACCOUNTANT',
  STAFF: 'STAFF',
  PARENT: 'PARENT',
  STUDENT: 'STUDENT',
} as const;

export const ROLE_DISPLAY_NAMES: Record<string, string> = {
  SUPER_ADMIN: 'Super Administrator',
  SCHOOL_ADMIN: 'School Administrator',
  PRINCIPAL: 'Principal',
  TEACHER: 'Teacher',
  ACCOUNTANT: 'Accountant',
  STAFF: 'Staff',
  PARENT: 'Parent',
  STUDENT: 'Student',
};

export const ROLE_DESCRIPTIONS: Record<string, string> = {
  SUPER_ADMIN: 'Full system access and configuration',
  SCHOOL_ADMIN: 'School administration and user management',
  PRINCIPAL: 'School oversight and approvals',
  TEACHER: 'Class and student management',
  ACCOUNTANT: 'Financial and fee management',
  STAFF: 'Staff operations',
  PARENT: 'Parent portal access',
  STUDENT: 'Student portal access',
};

export type Role = (typeof ROLES)[keyof typeof ROLES];
