'use client';

import React, { useState } from 'react';
import { AppStateProvider, useAppState } from '@/lib/store/appState';
import { CinematicHeader } from '@/components/cinematic/CinematicHeader';
import { CinematicHero } from '@/components/cinematic/CinematicHero';
import { SuccessStoriesBar } from '@/components/cinematic/SuccessStoriesBar';
import { BentoNewsAndEvents } from '@/components/cinematic/BentoNewsAndEvents';
import { AdmissionSection } from '@/components/cinematic/AdmissionSection';
import { CourseFinderSection } from '@/components/cinematic/CourseFinderSection';
import { AboutEditorialSection } from '@/components/cinematic/AboutEditorialSection';
import { CampusLifeMosaic } from '@/components/cinematic/CampusLifeMosaic';
import { AlumniFacesSection } from '@/components/cinematic/AlumniFacesSection';
import { CinematicFooter } from '@/components/cinematic/CinematicFooter';

import { DepartmentsView } from '@/components/views/DepartmentsView';
import { AdmissionsView } from '@/components/views/AdmissionsView';
import { FacultyDirectoryView } from '@/components/views/FacultyDirectoryView';
import { PlacementsView } from '@/components/views/PlacementsView';
import { ResearchView } from '@/components/views/ResearchView';
import { CampusLifeView } from '@/components/views/CampusLifeView';
import { AboutView } from '@/components/views/AboutView';
import { NoticesView } from '@/components/views/NoticesView';
import { MediaDiscoveryView } from '@/components/views/MediaDiscoveryView';
import { AssetInventoryView } from '@/components/views/AssetInventoryView';

import { ImsHeader } from '@/components/ims/ImsHeader';
import { ImsDashboardView } from '@/components/ims/ImsDashboardView';
import { StudentDirectoryView } from '@/components/ims/StudentDirectoryView';
import { AttendanceEngineView } from '@/components/ims/AttendanceEngineView';
import { TimetableManagerView } from '@/components/ims/TimetableManagerView';
import { EditorialCmsView } from '@/components/ims/EditorialCmsView';
import { AuditLogView } from '@/components/ims/AuditLogView';

function MainWebsite() {
  const { activeView, imsActiveTab } = useAppState();
  const [currentTab, setCurrentTab] = useState<string>('HOME');

  // Render Institution Management System (IMS) when activeView is 'IMS'
  if (activeView === 'IMS') {
    return (
      <div className="min-h-screen bg-[#080A09] text-slate-100 flex flex-col font-sans">
        <ImsHeader />
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          {imsActiveTab === 'DASHBOARD' && <ImsDashboardView />}
          {imsActiveTab === 'STUDENTS' && <StudentDirectoryView />}
          {imsActiveTab === 'ATTENDANCE' && <AttendanceEngineView />}
          {imsActiveTab === 'TIMETABLE' && <TimetableManagerView />}
          {imsActiveTab === 'EDITORIAL' && <EditorialCmsView />}
          {imsActiveTab === 'AUDIT' && <AuditLogView />}
        </main>
      </div>
    );
  }

  // Render Photography-First Public Institutional Platform
  return (
    <div className="min-h-screen bg-[#080A09] text-slate-100 flex flex-col font-sans selection:bg-[#387DDD] selection:text-white">
      <CinematicHeader currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <main className="flex-1">
        {currentTab === 'HOME' && (
          <>
            {/* 1. Cinematic Campus Hero with authentic Block-A photograph */}
            <CinematicHero setCurrentTab={setCurrentTab} />

            {/* 2. Success Stories Bar (Spacious warm campus cream #F5E9D8 background - Ref 1) */}
            <SuccessStoriesBar setCurrentTab={setCurrentTab} />

            {/* 3. Bento News and Events (Solid editorial black #080A09 with asymmetric grid - Ref 2) */}
            <BentoNewsAndEvents setCurrentTab={setCurrentTab} />

            {/* 4. Bold Electric Blue Admissions Section with 6 structured action cards - Ref 1 */}
            <AdmissionSection setCurrentTab={setCurrentTab} />

            {/* 5. Course Finder Section (Spacious campus cream #F5E9D8 with photo cards - Ref 1) */}
            <CourseFinderSection setCurrentTab={setCurrentTab} />

            {/* 6. About CEK Editorial Section (Authentic Block-A photo with overlapping white card - Ref 1 & 3) */}
            <AboutEditorialSection setCurrentTab={setCurrentTab} />

            {/* 7. Campus Life & Humans of CEK Photography Mosaic (Ref 2) */}
            <CampusLifeMosaic setCurrentTab={setCurrentTab} />

            {/* 8. Introducing the Faculty Leadership & Mentorship Showcase (Ref 1 & Real CEK) */}
            <AlumniFacesSection setCurrentTab={setCurrentTab} />
          </>
        )}

        {/* Dedicated Sub-Pages */}
        {currentTab === 'DEPARTMENTS' && <DepartmentsView />}
        {currentTab === 'ADMISSIONS' && <AdmissionsView />}
        {currentTab === 'FACULTY' && <FacultyDirectoryView />}
        {currentTab === 'PLACEMENTS' && <PlacementsView />}
        {currentTab === 'RESEARCH' && <ResearchView />}
        {currentTab === 'CAMPUS_LIFE' && <CampusLifeView />}
        {currentTab === 'ABOUT' && <AboutView />}
        {currentTab === 'NOTICES' && <NoticesView />}
        {currentTab === 'MEDIA' && <MediaDiscoveryView />}
        {currentTab === 'INVENTORY' && <AssetInventoryView />}
      </main>

      <CinematicFooter setCurrentTab={setCurrentTab} />
    </div>
  );
}

export default function Page() {
  return (
    <AppStateProvider>
      <MainWebsite />
    </AppStateProvider>
  );
}
