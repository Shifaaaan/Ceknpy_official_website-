# Requirements Backlog & Traceability Matrix

| Req ID | Priority | Description | Acceptance Criteria | Verification Method | Status |
|---|---|---|---|---|---|
| REQ-PUB-01 | P0 | Public Institutional Discovery | Header, Hero, Academic Departments, Admissions, Campus Life, and Verified Notices render responsively. | Computer-use & Layout inspection | COMPLETE |
| REQ-PUB-02 | P1 | Department Discovery | View details for CSE (NBA), ECE, EEE, ME, AI&DS with intake, labs, and faculty. | UI inspection & unit tests | COMPLETE |
| REQ-PUB-03 | P1 | Authentic Campus Storytelling | Curated stories from `@humansofcek`, IEEE SB, IEDC, and NSS with explicit source attribution. | Content validation & tests | COMPLETE |
| REQ-IMS-01 | P0 | Role-Based Access Control (RBAC) | Strict deny-by-default authorization for ADMIN, FACULTY, STUDENT, EDITOR. | Unit tests in `rbac.test.ts` | COMPLETE |
| REQ-IMS-02 | P0 | Scoped Student Privacy (IDOR Protection) | Students can view only their own records; cross-student access is denied. | Unit tests in `rbac.test.ts` | COMPLETE |
| REQ-IMS-03 | P0 | Attendance Management & KTU Compliance | Mark period attendance; compute real-time attendance; enforce KTU 75% shortage alert; block duplicate periods. | Unit tests in `attendance.test.ts` | COMPLETE |
| REQ-IMS-04 | P1 | Timetable Management & Conflict Detection | Create weekly timetable slots; automatically detect teacher, room, and batch collisions. | Unit tests in `timetable.test.ts` | COMPLETE |
| REQ-IMS-05 | P1 | Editorial Approval Gatekeeper | Multi-stage publishing (Draft &rarr; In Review &rarr; Approved &rarr; Published &rarr; Archived) with media rights & consent checks. | Unit tests in `editorial.test.ts` | COMPLETE |
| REQ-IMS-06 | P1 | Immutable Audit Logging | Record key administrative actions (attendance recorded, student added, announcement published) with actor, timestamp, and details. | Domain state verification | COMPLETE |
