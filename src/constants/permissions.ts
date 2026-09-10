export const PERMISSIONS = {
  // School Management
  MANAGE_SCHOOL: 'manage:school',
  VIEW_SCHOOL_SETTINGS: 'view:school_settings',
  EDIT_SCHOOL_SETTINGS: 'edit:school_settings',

  // User Management
  MANAGE_USERS: 'manage:users',
  CREATE_USER: 'create:user',
  VIEW_USER: 'view:user',
  EDIT_USER: 'edit:user',
  DELETE_USER: 'delete:user',

  // Role & Permission Management
  MANAGE_ROLES: 'manage:roles',
  MANAGE_PERMISSIONS: 'manage:permissions',

  // Student Management
  MANAGE_STUDENTS: 'manage:students',
  CREATE_STUDENT: 'create:student',
  VIEW_STUDENT: 'view:student',
  EDIT_STUDENT: 'edit:student',
  DELETE_STUDENT: 'delete:student',
  VIEW_STUDENT_ATTENDANCE: 'view:student_attendance',
  VIEW_STUDENT_FEES: 'view:student_fees',

  // Parent Management
  MANAGE_PARENTS: 'manage:parents',
  VIEW_PARENT: 'view:parent',
  EDIT_PARENT: 'edit:parent',

  // Teacher Management
  MANAGE_TEACHERS: 'manage:teachers',
  CREATE_TEACHER: 'create:teacher',
  VIEW_TEACHER: 'view:teacher',
  EDIT_TEACHER: 'edit:teacher',

  // Attendance
  MANAGE_ATTENDANCE: 'manage:attendance',
  CREATE_ATTENDANCE: 'create:attendance',
  VIEW_ATTENDANCE: 'view:attendance',
  EDIT_ATTENDANCE: 'edit:attendance',
  VIEW_ATTENDANCE_REPORTS: 'view:attendance_reports',

  // Fees
  MANAGE_FEES: 'manage:fees',
  CREATE_FEE_INVOICE: 'create:fee_invoice',
  VIEW_FEE_INVOICE: 'view:fee_invoice',
  EDIT_FEE_INVOICE: 'edit:fee_invoice',
  CREATE_FEE_PAYMENT: 'create:fee_payment',
  VIEW_FEE_PAYMENT: 'view:fee_payment',
  VIEW_FEE_REPORTS: 'view:fee_reports',

  // Classes & Sections
  MANAGE_CLASSES: 'manage:classes',
  MANAGE_SECTIONS: 'manage:sections',
  MANAGE_SUBJECTS: 'manage:subjects',

  // Academic Sessions
  MANAGE_ACADEMIC_SESSIONS: 'manage:academic_sessions',

  // Communication
  SEND_NOTIFICATIONS: 'send:notifications',
  MANAGE_NOTICES: 'manage:notices',
  SEND_WHATSAPP: 'send:whatsapp',

  // Audit Logs
  VIEW_AUDIT_LOGS: 'view:audit_logs',
} as const;

export const DEFAULT_ROLE_PERMISSIONS: Record<string, string[]> = {
  SUPER_ADMIN: Object.values(PERMISSIONS),
  SCHOOL_ADMIN: [
    PERMISSIONS.VIEW_SCHOOL_SETTINGS,
    PERMISSIONS.EDIT_SCHOOL_SETTINGS,
    PERMISSIONS.MANAGE_USERS,
    PERMISSIONS.MANAGE_STUDENTS,
    PERMISSIONS.MANAGE_TEACHERS,
    PERMISSIONS.MANAGE_PARENTS,
    PERMISSIONS.MANAGE_CLASSES,
    PERMISSIONS.MANAGE_SECTIONS,
    PERMISSIONS.MANAGE_SUBJECTS,
    PERMISSIONS.MANAGE_FEES,
    PERMISSIONS.MANAGE_ATTENDANCE,
    PERMISSIONS.VIEW_AUDIT_LOGS,
  ],
  PRINCIPAL: [
    PERMISSIONS.VIEW_SCHOOL_SETTINGS,
    PERMISSIONS.VIEW_STUDENT_ATTENDANCE,
    PERMISSIONS.VIEW_STUDENT_FEES,
    PERMISSIONS.VIEW_ATTENDANCE_REPORTS,
    PERMISSIONS.VIEW_FEE_REPORTS,
  ],
  TEACHER: [
    PERMISSIONS.VIEW_STUDENT,
    PERMISSIONS.VIEW_STUDENT_ATTENDANCE,
    PERMISSIONS.CREATE_ATTENDANCE,
    PERMISSIONS.EDIT_ATTENDANCE,
  ],
  ACCOUNTANT: [
    PERMISSIONS.MANAGE_FEES,
    PERMISSIONS.VIEW_FEE_INVOICE,
    PERMISSIONS.CREATE_FEE_PAYMENT,
    PERMISSIONS.VIEW_FEE_PAYMENT,
    PERMISSIONS.VIEW_FEE_REPORTS,
  ],
  PARENT: [
    PERMISSIONS.VIEW_STUDENT,
    PERMISSIONS.VIEW_STUDENT_ATTENDANCE,
    PERMISSIONS.VIEW_STUDENT_FEES,
  ],
  STUDENT: [
    PERMISSIONS.VIEW_STUDENT,
  ],
  STAFF: [
    PERMISSIONS.VIEW_STUDENT,
  ],
};
