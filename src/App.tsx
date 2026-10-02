import { useState, lazy, Suspense } from 'react';
import type { Project } from './types/portfolio';
import { useLenisSmoothScroll } from './hooks/useLenisSmoothScroll';
import { NavigationBar } from './components/navigation/NavigationBar';
import { HeroSection } from './components/hero/HeroSection';
import { WelcomeAnimation } from './components/hero/WelcomeAnimation';

// Below-the-fold sections are code-split so the initial paint only ships the
// hero + navigation. Each chunk loads on demand (performance only — no visual change).
const EditorialProfile = lazy(() =>
  import('./components/profile/EditorialProfile').then((m) => ({ default: m.EditorialProfile })),
);
const ProjectShowcase = lazy(() =>
  import('./components/projects/ProjectShowcase').then((m) => ({ default: m.ProjectShowcase })),
);
const TechGrid = lazy(() =>
  import('./components/tech/TechGrid').then((m) => ({ default: m.TechGrid })),
);
const GithubActivitySection = lazy(() =>
  import('./components/activity/GithubActivitySection').then((m) => ({ default: m.GithubActivitySection })),
);
const JourneyTimeline = lazy(() =>
  import('./components/journey/JourneyTimeline').then((m) => ({ default: m.JourneyTimeline })),
);
const ContactSection = lazy(() =>
  import('./components/contact/ContactSection').then((m) => ({ default: m.ContactSection })),
);
const ProjectCaseStudyModal = lazy(() =>
  import('./components/projects/ProjectCaseStudyModal').then((m) => ({ default: m.ProjectCaseStudyModal })),
);

export function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  useLenisSmoothScroll();

  return (
    <div className="min-h-screen bg-[#fff9d4] text-[#0f172a] selection:bg-[#0284c7] selection:text-white">
      {showWelcome && (
        <WelcomeAnimation onComplete={() => setShowWelcome(false)} />
      )}

      <NavigationBar />

      <main className="relative">
        <HeroSection />
        <Suspense fallback={null}>
          <EditorialProfile />
          <ProjectShowcase onOpenProject={setActiveModalProject} />
          <TechGrid onOpenProject={setActiveModalProject} />
          <GithubActivitySection />
          <JourneyTimeline />
          <ContactSection />
        </Suspense>
      </main>

      {activeModalProject && (
        <Suspense fallback={null}>
          <ProjectCaseStudyModal
            project={activeModalProject}
            isOpen={!!activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        </Suspense>
      )}
    </div>
  );
}

export default App;
