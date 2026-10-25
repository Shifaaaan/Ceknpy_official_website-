# Security, Threat Modeling & Access Control

## 1. Threat Model & Mitigation Ledger

| Threat Scenario | Risk Level | Mitigation Strategy | Verification In Code |
|---|---|---|---|
| **Insecure Direct Object Reference (IDOR)**: Student attempts to access another student's marks or attendance by guessing or tampering with student IDs. | High | Server-side identity scoping in `canAccessStudentRecord()`. Direct ID lookups are validated against the authenticated user's `associatedId`. | Tested in `lib/domain/rbac.test.ts` (Positive & Adversarial tests) |
| **Unauthorized Role Escalation**: User modifies client-side token or parameter to gain Administrator or Faculty privileges. | Critical | Deny-by-default role permissions mapped in `hasPermission()`. Backend authorization checks independent of UI elements. | Tested in `lib/domain/rbac.test.ts` |
| **Attendance Manipulation**: Unauthorized student or cross-department faculty marks or alters class attendance. | High | Attendance mutations verified with `canRecordBatchAttendance()`. Prevents double-marking period collisions with `checkDuplicateSession()`. | Tested in `lib/domain/attendance.test.ts` & `rbac.test.ts` |
| **Unverified Content Defacement**: External or unauthorized actor publishes unverified claims onto the public website. | High | Strict multi-stage state transitions enforced by `canTransitionEditorialState()`. Only verified items with rights and consent pass `validatePublicationReadiness()`. | Tested in `lib/domain/editorial.test.ts` |
| **Data Leakage via Public APIs**: Internal staff phone numbers or private student addresses exposed via public endpoints. | Medium | Explicit data DTO boundaries separating public directory fields from private IMS records. | Architecture contract |

## 2. RBAC Permission Matrix

| Permission | ADMIN | FACULTY | STUDENT | EDITOR |
|---|:---:|:---:|:---:|:---:|
| `MANAGE_USERS` | YES | NO | NO | NO |
| `MANAGE_STUDENTS` | YES | NO | NO | NO |
| `MANAGE_STAFF` | YES | NO | NO | NO |
| `MANAGE_COURSES` | YES | NO | NO | NO |
| `RECORD_ATTENDANCE` | YES | YES (Assigned batches) | NO | NO |
| `VIEW_ALL_ATTENDANCE` | YES | NO | NO | NO |
| `VIEW_OWN_ATTENDANCE` | YES | YES | YES (Self only) | NO |
| `MANAGE_TIMETABLE` | YES | NO | NO | NO |
| `CREATE_ANNOUNCEMENT` | YES | YES | NO | YES |
| `APPROVE_ANNOUNCEMENT` | YES | NO | NO | YES |
| `PUBLISH_EDITORIAL` | YES | NO | NO | YES |
| `VIEW_AUDIT_LOGS` | YES | NO | NO | NO |
