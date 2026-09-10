# Project Structure Documentation

## Directory Organization

### `/src` - Main Application Code
```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── (auth)/              # Auth routes (login, register)
│   ├── (dashboard)/         # Dashboard routes (protected)
│   │   ├── layout.tsx       # Dashboard layout with sidebar
│   │   ├── admin/           # Admin dashboard
│   │   ├── students/        # Student management
│   │   ├── parents/         # Parent management
│   │   ├── teachers/        # Teacher management
│   │   ├── attendance/      # Attendance module
│   │   ├── fees/            # Fees module
│   │   └── settings/        # School settings
│   └── api/                 # API routes
│       ├── auth/            # Authentication endpoints
│       ├── students/        # Student endpoints
│       ├── parents/         # Parent endpoints
│       ├── teachers/        # Teacher endpoints
│       ├── attendance/      # Attendance endpoints
│       ├── fees/            # Fee endpoints
│       ├── whatsapp/        # WhatsApp integration
│       └── webhooks/        # Webhook handlers
│
├── components/              # Reusable React components
│   ├── layout/             # Layout components (Header, Sidebar, etc.)
│   ├── forms/              # Form components with Zod validation
│   ├── tables/             # Table components with sorting/pagination
│   ├── cards/              # Card components
│   ├── modals/             # Modal dialogs
│   ├── buttons/            # Button variants
│   └── shared/             # Shared UI components
│
├── lib/                     # Utility functions
│   ├── auth.ts             # Auth utilities (JWT, password hashing)
│   ├── db.ts               # Prisma client
│   ├── constants.ts        # App constants
│   └── utils.ts            # General utilities
│
├── hooks/                   # Custom React hooks
│   ├── useAuth.ts          # Authentication hook
│   ├── useUser.ts          # User data hook
│   ├── useNotification.ts  # Notification hook
│   └── useModal.ts         # Modal state hook
│
├── middleware/              # Next.js middleware
│   └── auth.ts             # Authentication middleware
│
├── services/                # Business logic & API calls
│   ├── auth.service.ts     # Authentication service
│   ├── student.service.ts  # Student operations
│   ├── parent.service.ts   # Parent operations
│   ├── teacher.service.ts  # Teacher operations
│   ├── attendance.service.ts # Attendance operations
│   ├── fee.service.ts      # Fee operations
│   ├── rbac.service.ts     # RBAC operations
│   ├── audit.service.ts    # Audit logging
│   └── whatsapp.service.ts # WhatsApp integration
│
├── types/                   # TypeScript type definitions
│   ├── auth.types.ts       # Auth types
│   ├── user.types.ts       # User types
│   ├── student.types.ts    # Student types
│   ├── parent.types.ts     # Parent types
│   ├── teacher.types.ts    # Teacher types
│   └── api.types.ts        # API response types
│
├── validations/             # Zod schemas
│   ├── auth.schema.ts      # Auth validation
│   ├── student.schema.ts   # Student validation
│   ├── parent.schema.ts    # Parent validation
│   ├── teacher.schema.ts   # Teacher validation
│   ├── attendance.schema.ts # Attendance validation
│   └── fee.schema.ts       # Fee validation
│
├── store/                   # Zustand stores (client state)
│   ├── authStore.ts        # Auth state
│   ├── userStore.ts        # User state
│   └── uiStore.ts          # UI state
│
├── constants/               # App constants
│   ├── roles.ts            # Role definitions
│   ├── permissions.ts      # Permission definitions
│   ├── messages.ts         # UI messages
│   └── routes.ts           # Route definitions
│
└── styles/                  # Global styles
    └── globals.css         # Tailwind imports and globals

prisma/
├── schema.prisma           # Database schema
└── migrations/             # Database migrations

public/                      # Static assets
├── images/
└── icons/

docs/                        # Documentation
├── SETUP.md               # Setup instructions
├── API.md                 # API documentation
├── DATABASE.md            # Database schema docs
└── ARCHITECTURE.md        # Architecture overview

tests/                      # Test files
├── unit/                  # Unit tests
├── integration/           # Integration tests
└── __mocks__/             # Mock data
```

## Naming Conventions

### Files & Directories
- Use kebab-case for directories: `user-management`, `student-portal`
- Use camelCase for files: `useAuth.ts`, `studentService.ts`
- Use .ts for backend, .tsx for components
- Use `.test.ts` or `.spec.ts` for tests

### Components
- Use PascalCase: `StudentTable.tsx`, `FeeModal.tsx`
- Keep components focused and single-responsibility
- Use `index.ts` for barrel exports

### Functions & Variables
- Use camelCase: `getStudent()`, `studentData`
- Constants in UPPER_SNAKE_CASE: `MAX_FILE_SIZE`, `DEFAULT_PAGE_SIZE`
- Prefixed boolean functions: `isActive`, `hasPermission`, `canAccess`

### Database
- Model names in PascalCase: `Student`, `FeeInvoice`
- Column names in camelCase: `dateOfBirth`, `admissionNumber`
- Relation names in camelCase: `students`, `parentStudent`

## Layer Architecture

### Presentation Layer (Components)
- React components
- UI state management (Zustand)
- Form handling and validation

### API Layer (Routes)
- Next.js API routes
- Request/response handling
- Error handling

### Service Layer (Services)
- Business logic
- Database operations (Prisma)
- Third-party integrations (WhatsApp)

### Data Layer (Prisma)
- Database models
- Migrations
- Query optimization

## Security Practices

1. **Never expose secrets** - All API keys in environment variables
2. **Validate all inputs** - Use Zod schemas on server-side
3. **Check permissions server-side** - Never trust client permissions
4. **Hash passwords** - Use bcryptjs with 10+ rounds
5. **Secure tokens** - Use JWT with expiry
6. **Audit logs** - Log all sensitive operations
7. **CORS & CSP** - Configure headers properly

## Performance Guidelines

1. **Database queries** - Use proper indexes, avoid N+1
2. **Caching** - Implement caching for read-heavy operations
3. **Pagination** - Always paginate large result sets
4. **Code splitting** - Use dynamic imports for large components
5. **Bundle size** - Monitor and minimize dependencies

## Testing Strategy

1. **Unit tests** - Test individual functions
2. **Integration tests** - Test API endpoints
3. **E2E tests** - Test user workflows
4. **Mock data** - Use consistent fixtures

## Documentation

Every module should have:
- Clear function documentation
- Type definitions
- Usage examples
- Error handling documentation
