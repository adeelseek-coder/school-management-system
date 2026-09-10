export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Login successful',
  LOGOUT_SUCCESS: 'Logout successful',
  STUDENT_CREATED: 'Student created successfully',
  STUDENT_UPDATED: 'Student updated successfully',
  STUDENT_DELETED: 'Student deleted successfully',
  PARENT_CREATED: 'Parent created successfully',
  PARENT_UPDATED: 'Parent updated successfully',
  TEACHER_CREATED: 'Teacher created successfully',
  TEACHER_UPDATED: 'Teacher updated successfully',
  ATTENDANCE_MARKED: 'Attendance marked successfully',
  FEE_INVOICE_CREATED: 'Fee invoice created successfully',
  FEE_PAYMENT_RECORDED: 'Fee payment recorded successfully',
  NOTIFICATION_SENT: 'Notification sent successfully',
} as const;

export const ERROR_MESSAGES = {
  INVALID_CREDENTIALS: 'Invalid email or password',
  USER_NOT_FOUND: 'User not found',
  USER_ALREADY_EXISTS: 'User with this email already exists',
  UNAUTHORIZED: 'You are not authorized to perform this action',
  FORBIDDEN: 'Access denied',
  NOT_FOUND: 'Resource not found',
  INTERNAL_SERVER_ERROR: 'An internal server error occurred',
  DATABASE_ERROR: 'Database operation failed',
  VALIDATION_ERROR: 'Validation failed',
  INVALID_TOKEN: 'Invalid or expired token',
  TOKEN_REQUIRED: 'Authentication token required',
} as const;

export const INFO_MESSAGES = {
  LOADING: 'Loading...',
  NO_DATA: 'No data available',
  CONFIRM_DELETE: 'Are you sure you want to delete this item?',
  UNSAVED_CHANGES: 'You have unsaved changes. Do you want to leave?',
} as const;
