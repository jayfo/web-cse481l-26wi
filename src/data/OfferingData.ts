import { CourseDataLinkHREF } from "@/data/CourseData";

export type OfferingData = {
  // Link to Canvas.
  linkCanvas: CourseDataLinkHREF;
  // Link to Canvas Paper Presentations.
  linkCanvasPaperPresentation1DraftSlides: CourseDataLinkHREF;
  linkCanvasPaperPresentation1ContributionStatement: CourseDataLinkHREF;
  linkCanvasPaperPresentation2DraftSlides: CourseDataLinkHREF;
  linkCanvasPaperPresentation2ContributionStatement: CourseDataLinkHREF;
  // Link to Drive.
  linkDrive: CourseDataLinkHREF;
  // Link to Drive document for presentation signup.
  linkDrivePresentationSignup: CourseDataLinkHREF;
  // Link to Ed.
  linkEdDiscussion: CourseDataLinkHREF;
  // Link to course GitLab, used for student assignments.
  linkGitLab: CourseDataLinkHREF;
  // Link to course GitHub, used for this website.
  linkGitHub: CourseDataLinkHREF;
};

export const offeringData: OfferingData = {
  // Link to Canvas.
  linkCanvas: "https://canvas.uw.edu/courses/1860401",
  // Link to Canvas Paper Presentations.
  linkCanvasPaperPresentation1DraftSlides:
    "https://canvas.uw.edu/courses/1860401/assignments/10964899",
  linkCanvasPaperPresentation1ContributionStatement:
    "https://canvas.uw.edu/courses/1860401/assignments/10964898",
  linkCanvasPaperPresentation2DraftSlides:
    "https://canvas.uw.edu/courses/1860401/assignments/10964901",
  linkCanvasPaperPresentation2ContributionStatement:
    "https://canvas.uw.edu/courses/1860401/assignments/10964900",
  // Link to Drive.
  linkDrive:
    "https://drive.google.com/drive/folders/1Ay16rlUBGUL_mCZ6btF0da6jfsCEKWNp?usp=sharing",
  // Link to Drive document for presentation signup.
  linkDrivePresentationSignup:
    "https://docs.google.com/spreadsheets/d/1dkXhZMsL--e_lmMuVbzRLWUhrDm1vOCLKO3glksqKBo/edit?usp=sharing",
  // Link to Ed.
  linkEdDiscussion: "https://edstem.org/us/courses/77347/discussion",
  // Link to course GitLab, used for student assignments.
  linkGitLab: "https://gitlab.cs.washington.edu/cse481l-26wi",
  // Link to course GitHub, used for this website.
  linkGitHub: "https://github.com/uwcse481/web-cse481l-26wi",
} as const;

// Data from previous offering. To help track what still needs updated.
//
// export const offeringData: OfferingData = {
//     // Link to Drive document for presentation signup.
//     linkDrivePresentationSignup: "https://docs.google.com/spreadsheets/d/1dkXhZMsL--e_lmMuVbzRLWUhrDm1vOCLKO3glksqKBo/edit?usp=sharing",
//     // Link to Ed.
//     linkEdDiscussion: "https://edstem.org/us/courses/77347/discussion",
//   } as const;
