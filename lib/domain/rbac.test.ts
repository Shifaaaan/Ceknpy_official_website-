import test from 'node:test';
import assert from 'node:assert/strict';
import {
  hasPermission,
  canAccessStudentRecord,
  canRecordBatchAttendance,
  type UserSession,
} from './rbac';

test('hasPermission enforces least-privilege', () => {
  assert.equal(hasPermission('ADMIN', 'MANAGE_USERS'), true);
  assert.equal(hasPermission('ADMIN', 'VIEW_AUDIT_LOGS'), true);

  assert.equal(hasPermission('FACULTY', 'MANAGE_USERS'), false);
  assert.equal(hasPermission('FACULTY', 'RECORD_ATTENDANCE'), true);

  assert.equal(hasPermission('STUDENT', 'RECORD_ATTENDANCE'), false);
  assert.equal(hasPermission('STUDENT', 'VIEW_OWN_ATTENDANCE'), true);

  assert.equal(hasPermission('EDITOR', 'PUBLISH_EDITORIAL'), true);
  assert.equal(hasPermission('EDITOR', 'RECORD_ATTENDANCE'), false);
});

test('canAccessStudentRecord prevents IDOR and cross-student snooping', () => {
  const studentA: UserSession = {
    id: 'usr-stud-1',
    name: 'Rahul K',
    email: 'rahul@cek.ac.in',
    role: 'STUDENT',
    associatedId: 'KNP23CS010',
  };

  // Student can access own record
  assert.equal(
    canAccessStudentRecord(studentA, { id: 'KNP23CS010', batchId: 'CSE-S5' }),
    true
  );

  // Student CANNOT access another student's record
  assert.equal(
    canAccessStudentRecord(studentA, { id: 'KNP23CS099', batchId: 'CSE-S5' }),
    false
  );

  const faculty: UserSession = {
    id: 'usr-fac-1',
    name: 'Dr. Asha',
    email: 'asha@cek.ac.in',
    role: 'FACULTY',
    assignedBatchIds: ['CSE-S5', 'CSE-S7'],
  };

  // Faculty can access student in their assigned batch
  assert.equal(
    canAccessStudentRecord(faculty, { id: 'KNP23CS099', batchId: 'CSE-S5' }),
    true
  );

  // Faculty CANNOT access student in unassigned batch
  assert.equal(
    canAccessStudentRecord(faculty, { id: 'KNP23EC015', batchId: 'ECE-S3' }),
    false
  );

  const admin: UserSession = {
    id: 'usr-admin-1',
    name: 'Academic Dean',
    email: 'dean@cek.ac.in',
    role: 'ADMIN',
  };

  // Admin has global institutional view
  assert.equal(
    canAccessStudentRecord(admin, { id: 'KNP23EC015', batchId: 'ECE-S3' }),
    true
  );
});

test('canRecordBatchAttendance restricts attendance mutation to authorized teachers', () => {
  const faculty: UserSession = {
    id: 'usr-fac-1',
    name: 'Dr. Asha',
    email: 'asha@cek.ac.in',
    role: 'FACULTY',
    assignedBatchIds: ['CSE-S5'],
  };

  assert.equal(canRecordBatchAttendance(faculty, 'CSE-S5'), true);
  assert.equal(canRecordBatchAttendance(faculty, 'ME-S5'), false);

  const student: UserSession = {
    id: 'usr-stud-1',
    name: 'Rahul K',
    email: 'rahul@cek.ac.in',
    role: 'STUDENT',
    associatedId: 'KNP23CS010',
  };
  assert.equal(canRecordBatchAttendance(student, 'CSE-S5'), false);
});
