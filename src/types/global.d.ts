export {};
declare global {
  interface SocialNetwork {
    url: string;
    name: string;
    className: string;
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
    address: {
      city: string;
      state: string;
      zip: string;
      street: string;
    };
    phone: string;
    email: string;
    resumedownload: string;
    contactmessage: string;
    github: string;
    social: SocialNetwork[];
  }

  interface Project {
    title: string;
    category: string;
    image: string;
    url: string;
  }

  interface Portfolio {
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

  interface Skills {
    name: string;
    level: string;
  }

  interface ResumeInfo {
    skillmessage: string;
    education: Education[];
    work: Work[];
    skills: Skill[];
  }

  interface ResumeData {
    main: MainData;
    resume: ResumeInfo;
    portfolio: Portfolio;
    testimonials: Testimonial[];
  }
}
