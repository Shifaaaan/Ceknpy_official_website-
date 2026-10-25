import test from 'node:test';
import assert from 'node:assert/strict';
import { detectTimetableConflicts, type TimetableEntry } from './timetable';

test('detectTimetableConflicts detects teacher collision', () => {
  const existing: TimetableEntry[] = [
    {
      id: 'tt-1',
      day: 'MONDAY',
      period: 2,
      courseCode: 'CST301',
      courseName: 'FLAT',
      batchId: 'CSE-S5-A',
      facultyId: 'fac-smitha',
      facultyName: 'Dr. Smitha',
      roomNumber: 'LH-101',
    },
  ];

  const proposed: TimetableEntry = {
    id: 'tt-2',
    day: 'MONDAY',
    period: 2,
    courseCode: 'CST303',
    courseName: 'DBMS',
    batchId: 'CSE-S5-B',
    facultyId: 'fac-smitha',
    facultyName: 'Dr. Smitha',
    roomNumber: 'LH-102',
  };

  const conflicts = detectTimetableConflicts(existing, proposed);
  assert.equal(conflicts.length, 1);
  assert.equal(conflicts[0].type, 'TEACHER_CLASH');
});

test('detectTimetableConflicts detects room collision', () => {
  const existing: TimetableEntry[] = [
    {
      id: 'tt-1',
      day: 'WEDNESDAY',
      period: 4,
      courseCode: 'ECT301',
      courseName: 'Signals',
      batchId: 'ECE-S5',
      facultyId: 'fac-ece1',
      facultyName: 'Prof. Ramesh',
      roomNumber: 'LH-201',
    },
  ];

  const proposed: TimetableEntry = {
    id: 'tt-3',
    day: 'WEDNESDAY',
    period: 4,
    courseCode: 'MET301',
    courseName: 'Mechanics',
    batchId: 'ME-S5',
    facultyId: 'fac-me1',
    facultyName: 'Prof. Anoop',
    roomNumber: 'LH-201', // Same room!
  };

  const conflicts = detectTimetableConflicts(existing, proposed);
  assert.equal(conflicts.length, 1);
  assert.equal(conflicts[0].type, 'ROOM_CLASH');
});

test('detectTimetableConflicts accepts valid non-conflicting slot', () => {
  const existing: TimetableEntry[] = [
    {
      id: 'tt-1',
      day: 'MONDAY',
      period: 1,
      courseCode: 'CST301',
      courseName: 'FLAT',
      batchId: 'CSE-S5',
      facultyId: 'fac-1',
      facultyName: 'Prof. Asha',
      roomNumber: 'LH-101',
    },
  ];

  const proposed: TimetableEntry = {
    id: 'tt-4',
    day: 'MONDAY',
    period: 2, // Different period
    courseCode: 'CST305',
    courseName: 'System Software',
    batchId: 'CSE-S5',
    facultyId: 'fac-2',
    facultyName: 'Prof. Biju',
    roomNumber: 'LH-101',
  };

  const conflicts = detectTimetableConflicts(existing, proposed);
  assert.equal(conflicts.length, 0);
});
