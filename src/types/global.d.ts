export {};
declare global {
  interface SocialNetwork {
    url: string;
    name: string;
    className?: string;
  }
  interface Testimonial {
    description: string;
    name: string;
    position: string;
  }
  interface MainData {
    name: string;
    description: string;
    image: string;
    bio: string;
    email: string;
    phone?: string;
    github: string;
    resumedownload: string;
    calUsername: string;
    calEvent?: string;
    website?: string;
    social: SocialNetwork[];
  }

  interface Project {
    title: string;
    category: string;
    image?: string;
    url: string;
    isExternalImage?: boolean;
  }

  interface PortfolioInfo {
    projects: Project[];
  }

  interface Education {
    school: string;
    degree: string;
    graduated: string;
    description: string;
  }

  interface Work {
    company: string;
    title: string;
    years: string;
    description: string;
  }

  interface Skill {
    name: string;
    level: string;
  }

  interface ResumeInfo {
    education: Education[];
    work: Work[];
    skills: Skill[];
  }

  interface ResumeData {
    main: MainData;
    resume: ResumeInfo;
    portfolio: PortfolioInfo;
    testimonials: Testimonial[];
  }

  interface Window {
    _revealIo?: IntersectionObserver;
  }
}
