export const PUBLIC_ROUTES = [
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
] as const;

export const PROTECTED_ROUTES = {
  DASHBOARD: '/dashboard',
  STUDENTS: '/dashboard/students',
  PARENTS: '/dashboard/parents',
  TEACHERS: '/dashboard/teachers',
  ATTENDANCE: '/dashboard/attendance',
  FEES: '/dashboard/fees',
  SETTINGS: '/dashboard/settings',
  ADMIN: '/dashboard/admin',
} as const;

export const API_ROUTES = {
  AUTH: '/api/auth',
  STUDENTS: '/api/students',
  PARENTS: '/api/parents',
  TEACHERS: '/api/teachers',
  ATTENDANCE: '/api/attendance',
  FEES: '/api/fees',
  WHATSAPP: '/api/whatsapp',
  WEBHOOKS: '/api/webhooks',
} as const;
