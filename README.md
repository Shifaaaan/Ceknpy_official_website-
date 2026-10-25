# CEK Digital Ecosystem

Official digital platform and integrated Institution Management System (IMS) for the **College of Engineering Karunagappally (CEK)**, Kerala, India.

Managed by the **Institute of Human Resources Development (IHRD)**, Government of Kerala.  
Affiliated with **APJ Abdul Kalam Technological University (KTU)**.  
Approved by **AICTE**.

---

## 1. System Overview

The CEK Digital Ecosystem unifies public-facing institutional discovery and protected academic operations into one cohesive, accessible, and secure digital platform:

- **Public Institutional Portal**:
  - Institutional history, leadership (Principal Dr. Smitha Dharan), IHRD governance, and KTU affiliation.
  - Academic departments (CSE, ECE, EEE, ME, AI & DS, Basic Sciences) with NBA-accredited curriculum details.
  - Admissions Gateway: KEAM merit process, NRI quota spot admission criteria, Lateral Entry.
  - Evidence-based campus storytelling integrating verified student initiatives (IEEE Student Branch Exemplary Award winner, IEDC entrepreneurship prototypes, NSS Unit 543 outreach, and curated student narratives from `@humansofcek`).
  - Searchable circulars, official notifications, and academic calendar.

- **Role-Based Institution Management System (IMS)**:
  - **Administrator**: Comprehensive student/staff directory management, academic structure control, timetable configuration, institutional audit log inspection.
  - **Faculty**: Scoped class records, period attendance marking with real-time KTU 75% shortage monitoring, personal timetable view, announcement drafting.
  - **Student**: Strictly scoped self-service portal: enrolled courses, detailed attendance percentage breakdown, timetable, and published circulars (with IDOR protection).
  - **Content Editor**: Multi-stage editorial gatekeeper (Draft &rarr; In Review &rarr; Approved &rarr; Published &rarr; Archived) with mandatory source attribution and media rights/consent verification.

---

## 2. Technology Stack

- **Framework**: Next.js 15+ (App Router) with React 19 & TypeScript
- **Styling**: Tailwind CSS v4, Lucide React icons, Motion animations
- **Domain Logic**: Decoupled pure modules for Attendance, RBAC, Timetables, and Editorial gates
- **Testing**: Node.js built-in test runner (`node:test`, `node:assert/strict`) via `tsx`
- **UI Architecture**: Semantic HTML, WCAG 2.2 AA compliant contrast, zero-pill disciplined design, responsive mobile-first layout

---

## 3. Quick Start & Development

```bash
# 1. Install dependencies
npm install

# 2. Run domain unit tests
npm test # or: npx --yes tsx --test lib/domain/*.test.ts

# 3. Start development server on port 3000
npm run dev

# 4. Production build
npm run build
```

---

## 4. Documentation Directory

- [`docs/requirements.md`](docs/requirements.md) — Prioritized backlog (P0-P3) and acceptance criteria
- [`docs/architecture.md`](docs/architecture.md) — Boundary definitions, data schemas, and state flows
- [`docs/research-ledger.md`](docs/research-ledger.md) — Verified institutional evidence and source inventory
- [`docs/content-strategy.md`](docs/content-strategy.md) — Content model, editorial guidelines, and homepage hierarchy
- [`docs/social-media-strategy.md`](docs/social-media-strategy.md) — Strategic plan for `@humansofcek` & `@ceknpy.official`
- [`docs/security.md`](docs/security.md) — Threat modeling, RBAC permission matrix, and IDOR prevention
- [`docs/testing.md`](docs/testing.md) — Test strategy and validation instructions
- [`docs/validation-ledger.md`](docs/validation-ledger.md) — Traceable verification evidence
- [`docs/progress.md`](docs/progress.md) — Implementation milestones and remaining backlog
