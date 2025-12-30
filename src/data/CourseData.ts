import { offeringData, OfferingData } from "@/data/OfferingData";

export type CourseDataLinkHREF = string;

export type CourseData = {
  // Data specific to this offering.
  offering: OfferingData;
  // Link to UW COVID guidelines.
  linkUniversityCovidGuidelines: CourseDataLinkHREF;
  // Link to UW syllabus guidelines.
  linkUniversitySyllabusGuidelines: CourseDataLinkHREF;
};

/**
 * Course data that is relatively and persists across offerings.
 * Data that changes in every offering should instead be in offeringData (e.g., course-specific URLs).
 */
export const courseData: CourseData = {
  // Data specific to this offering.
  offering: offeringData,

  // Link to UW COVID guidelines.
  linkUniversityCovidGuidelines:
    "https://www.ehs.washington.edu/covid-19-prevention-and-response/covid-19-illness-and-exposure-guidance",

  // Link to UW syllabus guidelines.
  linkUniversitySyllabusGuidelines:
    "https://registrar.washington.edu/curriculum/syllabus-guidelines",
} as const;
