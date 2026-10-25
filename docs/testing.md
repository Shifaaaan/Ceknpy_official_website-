# Testing & Verification Strategy

## 1. Test Architecture
We employ a layered verification strategy:
1. **Unit Tests (Pure Domain Logic)**:
   - Built with Node.js built-in runner (`node:test`) and strict assertions (`node:assert/strict`).
   - Run via `npx --yes tsx --test <files>`.
   - Executed in sub-second time.
2. **Component & Integration Verification**:
   - Verification of UI state, role-switching, modals, filter behavior, and mutation updates.
3. **End-to-End Acceptance**:
   - Verified in headless Chromium via Playwright / browser automation tools.

## 2. Test Execution Commands

```bash
# Run all domain logic unit tests
npx --yes tsx --test lib/domain/attendance.test.ts lib/domain/timetable.test.ts lib/domain/rbac.test.ts lib/domain/editorial.test.ts
```

## 3. Test Suites
- `lib/domain/attendance.test.ts`: Verifies calculation of attendance rates, KTU 75% shortage thresholds, and period double-booking detection.
- `lib/domain/timetable.test.ts`: Verifies detection of teacher clashes, room collisions, and batch overlaps.
- `lib/domain/rbac.test.ts`: Verifies least-privilege matrix, cross-student IDOR denial, and batch recording permissions.
- `lib/domain/editorial.test.ts`: Verifies publication gatekeeping, media copyright checks, and privacy consent rules.
