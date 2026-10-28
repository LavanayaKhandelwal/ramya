// Real artwork for the Project 2, Project 3 and Project 4 case studies.
//
// The client supplied per-page exports in `public/Project 2`, `public/Project 3`
// and `public/Project 4`. Each file name carries the design page plus the slot code
// it belongs to (e.g. `Page 5 2AN.png` = page 5, slot `2AN`), and those codes are the
// same ones used by the placeholder set, so every code maps to exactly one file.
//
// Two quirks in the supplied names, both handled below:
//   * `4I` and `2I` arrive with a lower-case `i` (`Page 2 4i.jpg`).
//   * Project 4's last asset is `Page 5 AC.jpg` — the slot is `4AC`.
//
// Slots with no supplied artwork yet (`2AC`–`2AM`, `3H`–`3M`, `3O`)
// fall back to their labelled placeholder in
// `public/ramya-portfolio-images/placeholders`, so the gap stays visible instead of
// silently rendering an empty box.

const PLACEHOLDER_DIR = '/ramya-portfolio-images/placeholders';

const PROJECT_1_DIR = 'Project 1';
const PROJECT_2_DIR = 'Project 2';
const PROJECT_3_DIR = 'Project 3';
const PROJECT_4_DIR = 'Project 4';

/** `Project N` + `Page 5 2AN.png` -> `/Project%20N/Page%205%202AN.png`. */
const fileUrl = (dir: string, file: string) =>
  '/' + [...dir.split('/'), ...file.split('/')].map(encodeURIComponent).join('/');

/** Slot code -> supplied file name, in scroll order. */
const PROJECT_2_FILES: Record<string, string> = {
  '2A': 'Page 1 2A.png', // hero
  '2B': 'Page 2 2B.jpg',
  '2C': 'Page 2 2C.jpg',
  '2D': 'Page 2 2D.jpg',
  '2E': 'Page 2 2E.jpg',
  '2F': 'Page 2 2F.jpg',
  '2G': 'Page 2 2G.png',
  '2H': 'Page 2 2H.jpg',
  '2I': 'Page 2 2i.jpg',
  '2J': 'Page 3 2J.png',
  '2K': 'Page 3 2K.png',
  '2L': 'Page 3 2L.png',
  '2M': 'Page 3 2M.png',
  '2N': 'Page 3 2N.png',
  '2O': 'Page 3 2O.png',
  '2P': 'Page 3 2P.png',
  '2Q': 'Page 4 2Q.jpg',
  '2R': 'Page 4 2R.png',
  '2S': 'Page 4 2S.png',
  '2T': 'Page 4 2T.png',
  '2U': 'Page 4 2U.png',
  '2V': 'Page 4 2V.png',
  '2W': 'Page 4 2W.png',
  '2X': 'Page 4 2X.png',
  '2Y': 'Page 4 2Y.png',
  '2Z': 'Page 4 2Z.png',
  '2AA': 'Page 5 2AA.png',
  '2AB': 'Page 5 2AB.jpg',
  '2AN': 'Page 5 2AN.png',
  '2AO': 'Page 5 2AO.png',
  '2AP': 'Page 5 2AP.png',
  '2AQ': 'Page 5 2AQ.png',
  '2AR': 'Page 5 2AR.png',
  '2AS': 'Page 5 2AS.png',
  '2AT': 'Page 5 2AT.png',
  '2AU': 'Page 5 2AU.png',
  '2AV': 'Page 5 2AV.png',
  '2AW': 'Page 6 2AW.png',
  '2AX': 'Page 6 2AX.png',
  '2AY': 'Page 6 2AY.png',
  '2AZ': 'Page 6 2AZ.png',
};

/** Slot code -> supplied file name, in scroll order. */
const PROJECT_3_FILES: Record<string, string> = {
  '3A': 'Page 1 3A.png', // hero
  '3B': 'Page 2 3B.png',
  '3C': 'Page 2 3C.png',
  '3D': 'Page 2 3D.png',
  '3E': 'Page 2 3E.png',
  '3F': 'Page 2 3F.png',
  '3G': 'florals reimagined/Page 2 3G.png',
  '3N': 'florals reimagined/Page 2 3N.png',
  '3P': 'Page 3 3P.png',
  '3Q': 'Page 3 3Q Background Removed.png',
  '3R': 'Page 3 3R.jpg',
  '3S': 'Page 3 3S.png',
  '3T': 'Page 3 3T.jpg',
  '3U': 'Page 3 3U.png',
  '3V': 'Page 3 3V.jpg',
  '3W': 'Page 3 3W.png',
  '3X': 'Page 4 3X.png',
  '3Y': 'Page 4 3Y.png',
  '3Z': 'Page 4 3Z.jpg',
  '3AA': 'Page 4 3AA.png',
};

/** Slot code -> supplied file name, in scroll order. */
const PROJECT_4_FILES: Record<string, string> = {
  '4A': 'Page 1 4A.png', // hero
  '4B': 'Page 2 4B.jpg',
  '4C': 'Page 2 4C.png',
  '4D': 'Page 2 4D.jpg',
  '4E': 'Page 2 4E.jpg',
  '4F': 'Page 2 4F.jpg',
  '4G': 'Page 2 4G.png',
  '4H': 'Page 2 4H.jpg',
  '4I': 'Page 2 4i.jpg',
  '4J': 'Page 2 4J.png',
  '4K': 'Project 4 page 3/HANA.png',
  '4L': 'Project 4 page 3/MIZU.png',
  '4M': 'Project 4 page 3/KAZE.png',
  '4N': 'Project 4 page 3/SORA.png',
  '4O': 'Page 4 4O.jpg',
  '4P': 'Page 4 4P.png',
  '4Q': 'Page 4 4Q.png',
  '4R': 'Page 4 4R.png',
  '4S': 'Page 4 4S.png',
  '4T': 'Page 5 4T.png',
  '4U': 'Page 5 4U.png',
  '4V': 'Page 5 4V.png',
  '4W': 'Page 5 4W.png',
  '4X': 'Page 5 4X.jpg',
  '4Y': 'Page 5 4Y.jpg',
  '4Z': 'Page 5 4Z.jpg',
  '4AA': 'Page 5 4AA.jpg',
  '4AB': 'Page 5 4AB.jpg',
  '4AC': 'Page 5 AC.jpg',
  '4AE': 'Page 4 4AE.png',
};

/** Supplied artwork for the slot, or the labelled placeholder while it is missing. */
function resolve(dir: string, files: Record<string, string>, code: string): string {
  const file = files[code];
  return file ? fileUrl(dir, file) : `${PLACEHOLDER_DIR}/${code}.png`;
}

/** Asset for a Project 2 slot code (`2A`–`2AZ`). */
export const project2Image = (code: string) => resolve(PROJECT_2_DIR, PROJECT_2_FILES, code);

/** Asset for a Project 3 slot code (`3A`–`3AB`). */
export const project3Image = (code: string) => resolve(PROJECT_3_DIR, PROJECT_3_FILES, code);

/** Project 3 trend board, supplied alongside the Florals Reimagined mood boards. */
export const project3TrendBoard = fileUrl(PROJECT_3_DIR, 'florals reimagined/Page 2 trend board.png');

/** Asset for a Project 4 slot code (`4A`–`4AE`). */
export const project4Image = (code: string) => resolve(PROJECT_4_DIR, PROJECT_4_FILES, code);

/** Asset from `Project 4/Project 4 page 3/` folder. */
export const project4Page3Image = (file: string) => fileUrl(PROJECT_4_DIR, `Project 4 page 3/${file}`);

/** Asset for the perfume bottles to the right of 'The Fragrance Expression' heading. */
export const project4TopHeroImage = (file: string) =>
  fileUrl(PROJECT_4_DIR, `images which goes right side of heading THE FRAGRANCE EXPRESSION/${file}`);

/** Asset from `Project 1/project1- section3/` folder. */
export const project1Section3Image = (file: string) =>
  fileUrl(PROJECT_1_DIR, `project1- section3/${file}`);
