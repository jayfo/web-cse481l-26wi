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
  // Link to Drive document for guidelines.
  linkDriveGuidelines: CourseDataLinkHREF;
  // Link to Drive document for presentation signup.
  linkDrivePresentationSignup: CourseDataLinkHREF;
  // Link to Ed.
  linkEdDiscussion: CourseDataLinkHREF;
  // Link to course GitLab, used for student assignments.
  linkGitLab: CourseDataLinkHREF;
  // Link to technology lab Example 1.
  linkGitLabExample1: CourseDataLinkHREF;
  // Link to technology lab Example 1, commit 1.
  linkGitLabExample1Commit1: CourseDataLinkHREF;
  // Link to technology lab Example 1, commit 2.
  linkGitLabExample1Commit2: CourseDataLinkHREF;
  // Link to technology lab Example 2.
  linkGitLabExample2: CourseDataLinkHREF;
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
  // Link to Drive document for guidelines.
  linkDriveGuidelines:
    "https://docs.google.com/document/d/190MlM2nZhkySmkTffdUTBRQFs_n23BxJdu5rjenApvo/edit?usp=sharing",
  // Link to Drive document for presentation signup.
  linkDrivePresentationSignup:
    "https://docs.google.com/spreadsheets/d/1FI3J-o9GSNrhoZ0JayuCNXtjU8mrbMhOvtrR6poyEzU/edit?usp=sharing",
  // Link to Ed.
  linkEdDiscussion: "https://edstem.org/us/courses/90311/discussion",
  // Link to course GitLab, used for student assignments.
  linkGitLab: "https://gitlab.cs.washington.edu/cse481l-26wi",
  // Link to technology lab Example 1.
  linkGitLabExample1:
    "https://gitlab.cs.washington.edu/cse481l-26wi/tech-lab-demo",
  // Link to technology lab Example 1, commit 1.
  linkGitLabExample1Commit1:
    "https://gitlab.cs.washington.edu/cse481l-26wi/tech-lab-demo/-/commit/cf9b952cf1b968fee1ea0f0a1c8bad9fc02b843e",
  // Link to technology lab Example 1, commit 2.
  linkGitLabExample1Commit2:
    "https://gitlab.cs.washington.edu/cse481l-26wi/tech-lab-demo/-/commit/42e251f661f8081fa3e2e8da00f34a4a1db08450",
  // Link to technology lab Example 2.
  linkGitLabExample2:
    "https://gitlab.cs.washington.edu/cse481l-26wi/tech-lab-demo/-/tree/ollama",
  // Link to course GitHub, used for this website.
  linkGitHub: "https://github.com/uwcse481/web-cse481l-26wi",
} as const;
