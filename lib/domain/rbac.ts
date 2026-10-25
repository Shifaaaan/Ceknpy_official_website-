export type Role = 'ADMIN' | 'FACULTY' | 'STUDENT' | 'EDITOR';

export type Permission =
  | 'MANAGE_USERS'
  | 'MANAGE_STUDENTS'
  | 'MANAGE_STAFF'
  | 'MANAGE_COURSES'
  | 'RECORD_ATTENDANCE'
  | 'VIEW_ALL_ATTENDANCE'
  | 'VIEW_OWN_ATTENDANCE'
  | 'MANAGE_TIMETABLE'
  | 'CREATE_ANNOUNCEMENT'
  | 'APPROVE_ANNOUNCEMENT'
  | 'PUBLISH_EDITORIAL'
  | 'VIEW_AUDIT_LOGS';

export interface UserSession {
  id: string;
  name: string;
  email: string;
  role: Role;
  department?: string;
  associatedId?: string; // Student ID (e.g. 'KNP23CS042') or Faculty ID (e.g. 'FAC-CS-01')
  assignedBatchIds?: string[]; // Batches a faculty teaches
}

const ROLE_PERMISSIONS: Record<Role, readonly Permission[]> = {
  ADMIN: [
    'MANAGE_USERS',
    'MANAGE_STUDENTS',
    'MANAGE_STAFF',
    'MANAGE_COURSES',
    'RECORD_ATTENDANCE',
    'VIEW_ALL_ATTENDANCE',
    'VIEW_OWN_ATTENDANCE',
    'MANAGE_TIMETABLE',
    'CREATE_ANNOUNCEMENT',
    'APPROVE_ANNOUNCEMENT',
    'PUBLISH_EDITORIAL',
    'VIEW_AUDIT_LOGS',
  ],
  FACULTY: [
    'RECORD_ATTENDANCE',
    'VIEW_OWN_ATTENDANCE',
    'CREATE_ANNOUNCEMENT',
  ],
  EDITOR: [
    'CREATE_ANNOUNCEMENT',
    'APPROVE_ANNOUNCEMENT',
    'PUBLISH_EDITORIAL',
  ],
  STUDENT: [
    'VIEW_OWN_ATTENDANCE',
  ],
};

export function hasPermission(role: Role, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}

/**
 * Server-side authorization check for student record access.
 * ADMIN can access any student record.
 * FACULTY can access students enrolled in their assigned batches.
 * STUDENT can ONLY access their own record.
 */
export function canAccessStudentRecord(
  user: UserSession,
  targetStudent: { id: string; batchId: string }
): boolean {
  if (user.role === 'ADMIN') return true;

  if (user.role === 'STUDENT') {
    return user.associatedId === targetStudent.id;
  }

  if (user.role === 'FACULTY') {
    return user.assignedBatchIds?.includes(targetStudent.batchId) ?? false;
  }

  return false;
}

/**
 * Validates if user can record attendance for a specific batch/course.
 * ADMIN has institutional override.
 * FACULTY must be assigned to the batch.
 * STUDENT and EDITOR have strict deny.
 */
export function canRecordBatchAttendance(
  user: UserSession,
  batchId: string
): boolean {
  if (user.role === 'ADMIN') return true;
  if (user.role === 'FACULTY') {
    return user.assignedBatchIds?.includes(batchId) ?? false;
  }
  return false;
}
