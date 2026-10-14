// Projects index data — the four project cards on /projects.
//
// Each card is one supplied image. The artwork already contains the envelope,
// the photographs, the tape, the binder clip, the wax seal and the script
// label, so the whole card is the image and the only other thing rendered is
// the pill button, which navigates.
//
// Project 3 and 4 also ship as transparent RGBA PNGs; Project 4's source was a
// flattened RGB with a baked-in checkerboard, so it was keyed out to alpha
// before being added here.
//
// The slugs are real — each one is a route that already exists in App.tsx — so
// the four buttons navigate to the four project pages.

export interface ProjectCardData {
  id: string;
  /** Route segment under /projects — already wired in App.tsx. */
  slug: string;
  /** Text on the pill button. */
  buttonLabel: string;
  /** The whole card artwork. */
  image: string;
  /** Alt text, kept on the data so it arrives with the file. */
  imageDescription: string;
}

export const projectsIndex: ProjectCardData[] = [
  {
    id: 'project-1',
    slug: 'marketing',
    buttonLabel: 'Project 1',
    image: '/ramya-portfolio-images/placeholders/1AR.png',
    imageDescription:
      'Project 1 card: a cream envelope holding fashion photographs, fabric swatches and flowers, with a script "Project 1" label and a blue wax seal',
  },
  {
    id: 'project-2',
    slug: 'visual-merchandising',
    buttonLabel: 'Project 2',
    image: '/ramya-portfolio-images/placeholders/2BA.png',
    imageDescription:
      'Project 2 card: a cream envelope holding a concept board, fabric swatches and dried flowers, with a script "Project 2" label and a blue wax seal',
  },
  {
    id: 'project-3',
    slug: 'project-3',
    buttonLabel: 'Project 3',
    image: '/ramya-portfolio-images/placeholders/3AB.png',
    imageDescription:
      'Project 3 card: a cream envelope holding packaging photographs, fabric swatches and dried flowers, with a script "Project 3" label and a blue wax seal',
  },
  {
    id: 'project-4',
    slug: 'project-4',
    buttonLabel: 'Project 4',
    image: '/ramya-portfolio-images/placeholders/4AD.png',
    imageDescription:
      'Project 4 card: a cream envelope holding perfume bottle photographs, fabric swatches and dried flowers, with a script "Project 4" label and a blue wax seal',
  },
];
