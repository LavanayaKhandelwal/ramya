// Projects index data — the four project cards on /projects.
//
// The brief describes four project-specific photographs, a binder clip, a blue
// tape strip and a wax seal. None of those files exist in the Ramya Portfolio
// Images folder, so every one of them is `null` here and renders as an empty,
// correctly-sized layer. Nothing below invents a filename: add the asset to
// public/ramya-portfolio-images/ and set the string, and the card picks it up
// with no other change.
//
// The slugs are real — each one is a route that already exists in App.tsx — so
// the four buttons navigate to the four project pages.

export interface ProjectCardData {
  id: string;
  /** Route segment under /projects — already wired in App.tsx. */
  slug: string;
  /** Text on the torn label. */
  label: string;
  /** Text on the pill button. */
  buttonLabel: string;
  /** Project photograph. null until the asset is supplied. */
  image: string | null;
  /** Alt text, kept on the data so it arrives with the file. */
  imageDescription: string;
  /** Icon the wax seal is meant to carry. null until the seal asset is supplied. */
  sealIcon: string | null;
  /** Binder clip overlay. null until the asset is supplied. */
  binderClip: string | null;
  /** Gingham tape overlay. null until the asset is supplied. */
  tape: string | null;
  /** Wax seal overlay. null until the asset is supplied. */
  seal: string | null;
}

export const projectsIndex: ProjectCardData[] = [
  {
    id: 'project-1',
    slug: 'marketing',
    label: 'Project 1',
    buttonLabel: 'Project 1',
    image: '/ramya-portfolio-images/project1-hero-section-background.png',
    imageDescription: 'fashion clothing rack with garments in blue and neutral tones',
    sealIcon: 'hanger',
    binderClip: null,
    tape: null,
    seal: null,
  },
  {
    id: 'project-2',
    slug: 'visual-merchandising',
    label: 'Project 2',
    buttonLabel: 'Project 2',
    image: null,
    imageDescription: 'ZARA fashion retail storefront',
    sealIcon: 'shopping-bag',
    binderClip: null,
    tape: null,
    seal: null,
  },
  {
    id: 'project-3',
    slug: 'project-3',
    label: 'Project 3',
    buttonLabel: 'Project 3',
    image: null,
    imageDescription: 'fashion fragrance and creative visual merchandising imagery',
    sealIcon: 'analytics',
    binderClip: null,
    tape: null,
    seal: null,
  },
  {
    id: 'project-4',
    slug: 'project-4',
    label: 'Project 4',
    buttonLabel: 'Project 4',
    image: null,
    imageDescription: 'fashion concept board with globe, sketches and blue imagery',
    sealIcon: 'lightbulb',
    binderClip: null,
    tape: null,
    seal: null,
  },
];
