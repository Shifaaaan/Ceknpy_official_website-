export type DayOfWeek = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY';

export interface TimetableEntry {
  id: string;
  day: DayOfWeek;
  period: number; // 1 (9:00-9:50), 2 (9:50-10:40), 3 (10:55-11:45), 4 (11:45-12:35), 5 (1:30-2:20), 6 (2:20-3:10)
  courseCode: string;
  courseName: string;
  batchId: string; // e.g. 'CSE-S5'
  facultyId: string;
  facultyName: string;
  roomNumber: string; // e.g. 'LH-201' or 'CSE-LAB-2'
}

export interface TimetableConflict {
  type: 'TEACHER_CLASH' | 'ROOM_CLASH' | 'BATCH_CLASH';
  message: string;
  conflictingEntry: TimetableEntry;
}

/**
 * Validates whether a proposed timetable entry conflicts with existing schedule.
 * Detects:
 * 1. Same teacher scheduled in multiple places at the same day & period.
 * 2. Same classroom/laboratory double booked.
 * 3. Same student batch scheduled for two different classes simultaneously.
 */
export function detectTimetableConflicts(
  existingEntries: TimetableEntry[],
  proposed: TimetableEntry
): TimetableConflict[] {
  const conflicts: TimetableConflict[] = [];

  for (const existing of existingEntries) {
    if (existing.id === proposed.id) continue;
    if (existing.day !== proposed.day || existing.period !== proposed.period) continue;

    // 1. Batch conflict
    if (existing.batchId === proposed.batchId) {
      conflicts.push({
        type: 'BATCH_CLASH',
        message: `Batch ${proposed.batchId} is already scheduled for ${existing.courseCode} (${existing.courseName}) during period ${proposed.period} on ${proposed.day}.`,
        conflictingEntry: existing,
      });
    }

    // 2. Faculty conflict
    if (existing.facultyId === proposed.facultyId) {
      conflicts.push({
        type: 'TEACHER_CLASH',
        message: `Faculty ${proposed.facultyName} is already assigned to teach ${existing.courseCode} for batch ${existing.batchId} during period ${proposed.period} on ${proposed.day}.`,
        conflictingEntry: existing,
      });
    }

    // 3. Room conflict
    if (existing.roomNumber.toLowerCase() === proposed.roomNumber.toLowerCase()) {
      conflicts.push({
        type: 'ROOM_CLASH',
        message: `Room/Lab ${proposed.roomNumber} is already occupied by ${existing.batchId} for ${existing.courseCode} during period ${proposed.period} on ${proposed.day}.`,
        conflictingEntry: existing,
      });
    }
  }

  return conflicts;
}
