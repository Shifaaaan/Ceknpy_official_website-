export interface AttendanceSession {
  id: string;
  courseId: string;
  courseName: string;
  batchId: string;
  facultyId: string;
  date: string; // YYYY-MM-DD
  period: number; // 1 to 6
  topicCovered?: string;
}

export type AttendanceStatus = 'PRESENT' | 'ABSENT' | 'LATE' | 'EXCUSED';

export interface AttendanceRecord {
  id: string;
  sessionId: string;
  studentId: string;
  status: AttendanceStatus;
  remarks?: string;
}

export interface StudentAttendanceSummary {
  studentId: string;
  totalSessions: number;
  attendedSessions: number;
  percentage: number;
  hasShortage: boolean; // < 75% under KTU norms
  shortageSeverity: 'NONE' | 'WARNING' | 'CRITICAL';
}

/**
 * Calculates percentage of attended sessions.
 * PRESENT = 1, LATE = 0.5 (or institutional norm 1), EXCUSED = 1, ABSENT = 0.
 */
export function calculateAttendancePercentage(
  records: AttendanceRecord[],
  studentId: string
): number {
  const studentRecords = records.filter(r => r.studentId === studentId);
  if (studentRecords.length === 0) return 100; // No sessions yet

  let score = 0;
  for (const r of studentRecords) {
    if (r.status === 'PRESENT' || r.status === 'EXCUSED') {
      score += 1;
    } else if (r.status === 'LATE') {
      score += 0.8;
    }
  }

  const raw = (score / studentRecords.length) * 100;
  return Math.round(raw * 10) / 10;
}

/**
 * KTU standard: minimum 75% attendance required to sit for semester examinations.
 * Below 75% triggers condonation requirement, below 60% cannot sit for exams.
 */
export function evaluateShortage(percentage: number): {
  hasShortage: boolean;
  severity: 'NONE' | 'WARNING' | 'CRITICAL';
  message: string;
} {
  if (percentage < 60) {
    return {
      hasShortage: true,
      severity: 'CRITICAL',
      message: 'Critical shortage: attendance below 60%. Not eligible for exam condonation without special senate approval.',
    };
  }
  if (percentage < 75) {
    return {
      hasShortage: true,
      severity: 'WARNING',
      message: 'Attendance shortage: between 60% and 74%. Eligible for medical condonation application.',
    };
  }
  return {
    hasShortage: false,
    severity: 'NONE',
    message: 'Attendance is above the KTU mandatory threshold of 75%.',
  };
}

/**
 * Checks whether an attendance session already exists for the given batch, date, and period.
 * Prevents accidental double-marking of periods.
 */
export function checkDuplicateSession(
  existingSessions: AttendanceSession[],
  candidate: { batchId: string; date: string; period: number; excludeSessionId?: string }
): { isDuplicate: boolean; conflictingSession?: AttendanceSession } {
  const found = existingSessions.find(
    s =>
      s.batchId === candidate.batchId &&
      s.date === candidate.date &&
      s.period === candidate.period &&
      s.id !== candidate.excludeSessionId
  );

  return {
    isDuplicate: Boolean(found),
    conflictingSession: found,
  };
}
