# System Architecture & Technical Decisions

## 1. Architectural Boundaries

The platform maintains clear boundaries between:
- **Public Domain**: Public-facing information routes (About, Departments, Admissions, Campus Life, Research & Notices) that require zero credentials, load quickly, and expose no private student or staff operational data.
- **IMS Operations Domain**: Role-authenticated administrative, pedagogical, and student self-service modules under strict server-enforced access boundaries.
- **Pure Domain Engine**: Independent logic packages (`lib/domain/*`) handling KTU academic calculations, timetable conflict heuristics, editorial gatekeeping, and authorization matrices with automated test coverage.
- **Audit & Governance Stream**: Persistent operational audit trail capturing all mutations.

```
+-----------------------------------------------------------------------------------+
|                            CEK Digital Ecosystem                                  |
+-----------------------------------------------------------------------------------+
|  PUBLIC INSTITUTIONAL WEB              |     INSTITUTION MANAGEMENT SYSTEM (IMS)  |
|  - Home, Governance, Principal         |     - Role Switcher & Session State      |
|  - Academic Departments & Curricula    |     - Student & Staff Directories        |
|  - Admissions & Eligibility            |     - Attendance Engine (KTU 75% rule)   |
|  - Campus Voices (@humansofcek)        |     - Timetable Conflict Heuristics      |
|  - Research, IEDC, IEEE SB, Notices    |     - Editorial & Media Rights Gate      |
|                                        |     - Immutable Audit Trail              |
+----------------------------------------+------------------------------------------+
                                     |
                                     v
+-----------------------------------------------------------------------------------+
|                     Pure Domain Logic Modules (`lib/domain/`)                     |
|      - `attendance.ts`         - `timetable.ts`                                   |
|      - `rbac.ts`               - `editorial.ts`                                   |
+-----------------------------------------------------------------------------------+
                                     |
                                     v
+-----------------------------------------------------------------------------------+
|                     Automated Verification (`node:test`)                          |
|      - `attendance.test.ts`    - `timetable.test.ts`                              |
|      - `rbac.test.ts`          - `editorial.test.ts`                              |
+-----------------------------------------------------------------------------------+
```

## 2. Key Technical Decisions
1. **App Router with Single-Page Interactivity**: Next.js App Router providing lightning-fast transitions between public exploration and IMS operations with cohesive state management.
2. **Deterministic Seed State**: Realistic institutional seed datasets covering all six departments, real course codes (CST301, ECT301, MET301, EST102), authenticated mock sessions, student batches (CSE-S5, ECE-S5), and authentic campus stories.
3. **Decoupled Pure Logic**: Math and rules decoupled from React components to enable fast test cycles in milliseconds without browser overhead.
