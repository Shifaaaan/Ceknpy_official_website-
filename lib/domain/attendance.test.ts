import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateAttendancePercentage,
  evaluateShortage,
  checkDuplicateSession,
  type AttendanceRecord,
  type AttendanceSession,
} from './attendance';

test('calculateAttendancePercentage handles all present', () => {
  const records: AttendanceRecord[] = [
    { id: '1', sessionId: 's1', studentId: 'stud1', status: 'PRESENT' },
    { id: '2', sessionId: 's2', studentId: 'stud1', status: 'PRESENT' },
    { id: '3', sessionId: 's3', studentId: 'stud1', status: 'PRESENT' },
  ];
  assert.equal(calculateAttendancePercentage(records, 'stud1'), 100);
});

test('calculateAttendancePercentage computes mixed attendance correctly', () => {
  const records: AttendanceRecord[] = [
    { id: '1', sessionId: 's1', studentId: 'stud1', status: 'PRESENT' },
    { id: '2', sessionId: 's2', studentId: 'stud1', status: 'ABSENT' },
    { id: '3', sessionId: 's3', studentId: 'stud1', status: 'PRESENT' },
    { id: '4', sessionId: 's4', studentId: 'stud1', status: 'ABSENT' },
  ];
  assert.equal(calculateAttendancePercentage(records, 'stud1'), 50);
});

test('evaluateShortage applies KTU 75% policy correctly', () => {
  assert.equal(evaluateShortage(85).hasShortage, false);
  assert.equal(evaluateShortage(75).hasShortage, false);

  const warn = evaluateShortage(72.5);
  assert.equal(warn.hasShortage, true);
  assert.equal(warn.severity, 'WARNING');

  const crit = evaluateShortage(55);
  assert.equal(crit.hasShortage, true);
  assert.equal(crit.severity, 'CRITICAL');
});

test('checkDuplicateSession prevents period double booking', () => {
  const sessions: AttendanceSession[] = [
    {
      id: 'sess-1',
      courseId: 'CST301',
      courseName: 'Formal Languages and Automata',
      batchId: 'CSE-S5-A',
      facultyId: 'fac-1',
      date: '2026-10-26',
      period: 1,
    },
  ];

  const duplicateCheck = checkDuplicateSession(sessions, {
    batchId: 'CSE-S5-A',
    date: '2026-10-26',
    period: 1,
  });
  assert.equal(duplicateCheck.isDuplicate, true);

  const validCheck = checkDuplicateSession(sessions, {
    batchId: 'CSE-S5-A',
    date: '2026-10-26',
    period: 2,
  });
  assert.equal(validCheck.isDuplicate, false);
});
