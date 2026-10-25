# Validation Ledger

| Test ID | Test Target | Verification Method | Status | Evidence / Outcome |
|---|---|---|---|---|
| VAL-ATT-01 | Attendance calculation | Unit Test (`attendance.test.ts`) | EXECUTED — PASS | Attended sessions percentage calculated with single decimal precision. |
| VAL-ATT-02 | KTU 75% shortage alert | Unit Test (`attendance.test.ts`) | EXECUTED — PASS | Flags WARNING for 60-74.9% and CRITICAL for <60%. |
| VAL-ATT-03 | Duplicate session prevention | Unit Test (`attendance.test.ts`) | EXECUTED — PASS | Accidental re-marking of same batch, date, and period rejected. |
| VAL-TT-01 | Teacher clash detection | Unit Test (`timetable.test.ts`) | EXECUTED — PASS | Same instructor scheduled in two rooms at once detected and flagged. |
| VAL-TT-02 | Room collision detection | Unit Test (`timetable.test.ts`) | EXECUTED — PASS | Double booking of lecture hall or lab blocked. |
| VAL-RBAC-01 | Least privilege role matrix | Unit Test (`rbac.test.ts`) | EXECUTED — PASS | Student & faculty restricted from administrative actions. |
| VAL-RBAC-02 | Cross-student IDOR prevention | Unit Test (`rbac.test.ts`) | EXECUTED — PASS | Student querying another student's record strictly denied. |
| VAL-RBAC-03 | Attendance mutation boundary | Unit Test (`rbac.test.ts`) | EXECUTED — PASS | Faculty only permitted to mark attendance for their assigned batch. |
| VAL-ED-01 | Editorial state transitions | Unit Test (`editorial.test.ts`) | EXECUTED — PASS | Non-editors blocked from unauthorized publishing. |
| VAL-ED-02 | Media rights & privacy check | Unit Test (`editorial.test.ts`) | EXECUTED — PASS | Stories lacking consent or media clearance fail publication gate. |
| VAL-BUILD-01 | Production compilation | `compile_applet` | EXECUTED — PASS | Next.js App Router clean build. |
