// Central placeholder content — mirrors lavanaya's portfolioData shape
// but with dummy text only. Replace with real copy + designs later.

export interface ProjectSummary {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
}

export const siteData = {
  student: {
    name: '[Student Name]',
    degree: '[Degree — e.g. Masters in Fashion & Lifestyle Business Management]',
    institution: '[Institution]',
    year: '[Year range]',
    location: '[Location]',
    statement: '[Hero statement — 1 line]',
    secondaryStatement: '[About paragraph — journey / background]',
    currentFocus: '[Current focus — 1 line]',
  },
  internship: {
    company: '[Internship Company]',
    role: '[Role Title]',
    overview: '[Internship overview — 2-3 lines]',
    highlights: ['[Highlight 1]', '[Highlight 2]', '[Highlight 3]'],
    learningOutcomes: [
      { number: '01', title: '[Learning outcome 1]', desc: '[1-2 line description]' },
      { number: '02', title: '[Learning outcome 2]', desc: '[1-2 line description]' },
      { number: '03', title: '[Learning outcome 3]', desc: '[1-2 line description]' },
      { number: '04', title: '[Learning outcome 4]', desc: '[1-2 line description]' },
    ],
  },
  selectedProjects: [
    {
      id: 'proj-1',
      slug: 'marketing',
      number: '01',
      title: '[Project 1 — Marketing / Brand Extension]',
      category: '[Category]',
    },
    {
      id: 'proj-2',
      slug: 'visual-merchandising',
      number: '02',
      title: '[Project 2 — Visual Merchandising]',
      category: '[Category]',
    },
    {
      id: 'proj-3',
      slug: 'project-3',
      number: '03',
      title: '[Project 3 — Startup / Athleisure]',
      category: '[Category]',
    },
    {
      id: 'proj-4',
      slug: 'project-4',
      number: '04',
      title: '[Project 4 — Customer Experience Activation]',
      category: '[Category]',
    },
  ] as ProjectSummary[],
  contact: {
    email: '[email@example.com]',
    phone: '[+91 XXXXXXXXXX]',
    location: '[City, Country]',
    socials: [{ name: '[LinkedIn]', handle: '[Handle]', url: '#' }],
  },
};
