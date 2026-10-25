import test from 'node:test';
import assert from 'node:assert/strict';
import {
  canTransitionEditorialState,
  validatePublicationReadiness,
  type EditorialItem,
} from './editorial';

test('canTransitionEditorialState blocks unauthorized publication', () => {
  // Student cannot publish
  const studentAttempt = canTransitionEditorialState('DRAFT', 'PUBLISHED', 'STUDENT');
  assert.equal(studentAttempt.allowed, false);

  // Faculty can submit draft to review
  const facultySubmit = canTransitionEditorialState('DRAFT', 'IN_REVIEW', 'FACULTY');
  assert.equal(facultySubmit.allowed, true);

  // Faculty CANNOT directly approve or publish
  const facultyPublish = canTransitionEditorialState('IN_REVIEW', 'PUBLISHED', 'FACULTY');
  assert.equal(facultyPublish.allowed, false);

  // Editor can approve reviewed draft
  const editorApprove = canTransitionEditorialState('IN_REVIEW', 'APPROVED', 'EDITOR');
  assert.equal(editorApprove.allowed, true);

  // Editor can publish approved item
  const editorPublish = canTransitionEditorialState('APPROVED', 'PUBLISHED', 'EDITOR');
  assert.equal(editorPublish.allowed, true);
});

test('validatePublicationReadiness blocks unverified media and missing consent', () => {
  const incompleteItem: EditorialItem = {
    id: 'ed-1',
    title: 'Hackathon Win',
    category: 'STUDENT_INNOVATION',
    summary: 'Team won first place in regional AI challenge.',
    body: 'Details about the project and presentation.',
    state: 'APPROVED',
    sourceType: 'HUMANS_OF_CEK',
    sourceAttribution: '@humansofcek interview',
    mediaRightsVerified: false, // NOT VERIFIED
    participantConsentObtained: false, // NO CONSENT
    authorId: 'ed-01',
    authorName: 'Content Lead',
    createdAt: '2026-10-25T10:00:00Z',
    updatedAt: '2026-10-25T10:00:00Z',
    tags: ['Hackathon', 'AI'],
  };

  const check = validatePublicationReadiness(incompleteItem);
  assert.equal(check.isReady, false);
  assert.ok(check.errors.some(e => e.includes('Media rights')));
  assert.ok(check.errors.some(e => e.includes('consent')));

  const readyItem: EditorialItem = {
    ...incompleteItem,
    mediaRightsVerified: true,
    participantConsentObtained: true,
  };

  const validCheck = validatePublicationReadiness(readyItem);
  assert.equal(validCheck.isReady, true);
  assert.equal(validCheck.errors.length, 0);
});
