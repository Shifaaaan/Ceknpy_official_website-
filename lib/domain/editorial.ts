import type { Role } from './rbac';

export type EditorialState =
  | 'DRAFT'
  | 'IN_REVIEW'
  | 'APPROVED'
  | 'PUBLISHED'
  | 'ARCHIVED';

export type ContentCategory =
  | 'OFFICIAL_CIRCULAR'
  | 'ACADEMIC_ACHIEVEMENT'
  | 'STUDENT_INNOVATION'
  | 'CAMPUS_LIFE_STORY'
  | 'TECHNICAL_FEST'
  | 'IEDC_STARTUP'
  | 'IEEE_HIGHLIGHT'
  | 'NSS_OUTREACH';

export type SourceType =
  | 'OFFICIAL_COLLEGE_NOTICE'
  | 'IEDC_CELL'
  | 'IEEE_STUDENT_BRANCH'
  | 'NSS_UNIT_543'
  | 'HUMANS_OF_CEK'
  | 'DEPARTMENT_ASSOCIATION'
  | 'EXTERNAL_CORROBORATED';

export interface EditorialItem {
  id: string;
  title: string;
  category: ContentCategory;
  summary: string;
  body: string;
  state: EditorialState;
  sourceType: SourceType;
  sourceUrl?: string;
  sourceAttribution: string;
  mediaRightsVerified: boolean;
  participantConsentObtained: boolean;
  authorId: string;
  authorName: string;
  reviewedBy?: string;
  approvedBy?: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
}

/**
 * Validates state transition according to institutional editorial protocol.
 * Only ADMIN or EDITOR can approve and publish.
 * Faculty can draft and submit for review.
 */
export function canTransitionEditorialState(
  currentState: EditorialState,
  targetState: EditorialState,
  role: Role
): { allowed: boolean; reason?: string } {
  if (currentState === targetState) {
    return { allowed: true };
  }

  // Admin can perform any state transition
  if (role === 'ADMIN') {
    return { allowed: true };
  }

  // Non-editors/admins cannot modify editorial states beyond draft
  if (role === 'STUDENT') {
    return { allowed: false, reason: 'Students do not have editorial privileges.' };
  }

  if (role === 'FACULTY') {
    if (currentState === 'DRAFT' && targetState === 'IN_REVIEW') {
      return { allowed: true };
    }
    return {
      allowed: false,
      reason: 'Faculty may only submit drafts for editorial review. Approval requires an Editor or Administrator.',
    };
  }

  if (role === 'EDITOR') {
    if (currentState === 'DRAFT' && targetState === 'IN_REVIEW') return { allowed: true };
    if (currentState === 'IN_REVIEW' && (targetState === 'APPROVED' || targetState === 'DRAFT')) return { allowed: true };
    if (currentState === 'APPROVED' && (targetState === 'PUBLISHED' || targetState === 'IN_REVIEW')) return { allowed: true };
    if (currentState === 'PUBLISHED' && targetState === 'ARCHIVED') return { allowed: true };
    if (currentState === 'ARCHIVED' && targetState === 'DRAFT') return { allowed: true };
  }

  return {
    allowed: false,
    reason: `Transition from ${currentState} to ${targetState} is not permitted for role ${role}.`,
  };
}

/**
 * Ensures strict pre-publication gates:
 * 1. Must have valid source attribution
 * 2. Media rights and licenses verified
 * 3. Participant consent obtained for identifiable persons
 * 4. Content length and completeness
 */
export function validatePublicationReadiness(item: EditorialItem): {
  isReady: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!item.title || item.title.trim().length < 5) {
    errors.push('Title must be at least 5 characters long.');
  }

  if (!item.summary || item.summary.trim().length < 20) {
    errors.push('Summary must provide at least 20 characters of verified context.');
  }

  if (!item.sourceAttribution || item.sourceAttribution.trim().length < 3) {
    errors.push('Explicit source attribution is required for institutional transparency.');
  }

  if (!item.mediaRightsVerified) {
    errors.push('Media rights and license verification must be confirmed before publication.');
  }

  if (!item.participantConsentObtained) {
    errors.push('Privacy consent from identifiable participants must be verified.');
  }

  return {
    isReady: errors.length === 0,
    errors,
  };
}
