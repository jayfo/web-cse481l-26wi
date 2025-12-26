import * as React from "react";

import { ok as assert } from "assert";

import { FormattedReading } from "@/components/FormattedReading";
import { CourseDataLink } from "@/components/links/CourseDataLink";
import { default as ContentContributionsInHCI } from "@/content/ContributionsInHCI.mdx";
import { default as ContentNoReading } from "@/content/NoReading.mdx";
import { default as ContentVisionsOfHCI } from "@/content/VisionsOfHCI.mdx";
import { SiteLinks } from "@/data/SiteLinks";
import {
  AssignmentCalendarItem,
  AwayCalendarItem,
  CalendarDate,
  CalendarItem,
  CalendarWeek,
  EventCalendarItem,
  HolidayCalendarItem,
  LectureCalendarItem,
  OfficeHourCalendarItem,
  StudioCalendarItem,
} from "@/types/CalendarData";
import {
  clamp as clampDate,
  format as datefnsFormat,
  isValid as datefnsIsValid,
  parse as datefnsParse,
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfWeek,
} from "date-fns";

const dayOfWeekValues = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
] as const;
type dayOfWeek = (typeof dayOfWeekValues)[number];

const TIME_AND_LOCATION_LECTURE = {
  time: "10:00 to 11:20",
  location: "BAG 108",
};

const TIME_AND_LOCATION_SHOWCASE = {
  time: "10:00 to 11:20",
  location: "CSE/Allen Atrium",
};

export function parseCalendarDate(calendarDate: CalendarDate): Date {
  const parsedDate = datefnsParse(calendarDate, "yyyy-MM-dd", new Date());
  assert(datefnsIsValid(parsedDate), `Invalid date: ${calendarDate}`);

  return parsedDate;
}

export function formatCalendarDate(
  calendarDate: CalendarDate,
  format: string,
): string {
  return datefnsFormat(parseCalendarDate(calendarDate), format);
}

export function calendarDates(): CalendarDate[] {
  return eachDayOfInterval({
    start: parseCalendarDate(calendarData.datesOfInstruction.start),
    end: parseCalendarDate(calendarData.datesOfInstruction.end),
  }).map((dateCurrent: Date): CalendarDate => {
    return datefnsFormat(dateCurrent, "yyyy-MM-dd");
  });
}

export function calendarWeeks(): CalendarWeek[] {
  return eachWeekOfInterval({
    start: parseCalendarDate(calendarData.datesOfInstruction.start),
    end: parseCalendarDate(calendarData.datesOfInstruction.end),
  }).map((weekCurrent: Date): CalendarWeek => {
    return {
      startDate: datefnsFormat(weekCurrent, "yyyy-MM-dd"),
      dates: eachDayOfInterval({
        start: clampDate(weekCurrent, {
          start: parseCalendarDate(calendarData.datesOfInstruction.start),
          end: parseCalendarDate(calendarData.datesOfInstruction.end),
        }),
        end: clampDate(endOfWeek(weekCurrent), {
          start: parseCalendarDate(calendarData.datesOfInstruction.start),
          end: parseCalendarDate(calendarData.datesOfInstruction.end),
        }),
      }).map((dateCurrent): CalendarDate => {
        return datefnsFormat(dateCurrent, "yyyy-MM-dd");
      }),
    };
  });
}

export function calendarItems(): CalendarItem[] {
  return [
    ...Object.values(calendarData.assignments),
    ...calendarData.aways,
    ...calendarData.events,
    ...calendarData.holidays,
    ...calendarData.lectures,
    ...calendarData.officeHours,
    ...calendarData.studios,
  ];
}

export function calendarItemsForDate(
  calendarDate: CalendarDate,
): CalendarItem[] {
  return calendarItems().filter(
    (calendarItemCurrent: CalendarItem): boolean => {
      if ("date" in calendarItemCurrent) {
        return calendarDate === calendarItemCurrent.date;
      } else {
        return calendarItemCurrent.dates.includes(calendarDate);
      }
    },
  );
}

function verifyCalendarDate(
  calendarDate: CalendarDate,
  dayOfWeek: dayOfWeek,
): CalendarDate {
  assert(dayOfWeekValues.includes(dayOfWeek));

  const parsedDate = parseCalendarDate(calendarDate);
  const parsedDateDayOfWeek = datefnsFormat(parsedDate, "EEE");
  assert(
    parsedDateDayOfWeek === dayOfWeek,
    `Date ${calendarDate} is not ${dayOfWeek}`,
  );

  return calendarDate;
}

export const calendarData: {
  datesOfInstruction: {
    start: CalendarDate;
    end: CalendarDate;
  };
  assignments: { [key: string]: AssignmentCalendarItem };
  aways: AwayCalendarItem[];
  events: EventCalendarItem[];
  holidays: HolidayCalendarItem[];
  lectures: LectureCalendarItem[];
  officeHours: OfficeHourCalendarItem[];
  studios: StudioCalendarItem[];
} = {
  datesOfInstruction: {
    start: verifyCalendarDate("2025-03-31", "Mon"),
    end: verifyCalendarDate("2025-06-13", "Fri"),
  },

  assignments: {
    labSlidesAndVideo: {
      type: "assignment",
      title:
        "Technology Lab: GitLab Code, Video Demonstration, Reflection, Slide",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2025-04-18", "Fri"),
    },
    labPresentation: {
      type: "assignment",
      title: "Technology Lab: Presentation",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2025-04-22", "Tue"),
    },

    projectIntroductionAndIdeaSlides: {
      type: "assignment",
      title: "Project: Introduction and Idea Slides",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2025-04-02", "Wed"),
    },
    projectIntroductionAndIdeaPresentation: {
      type: "assignment",
      title: "Project: Introduction and Idea Presentation",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2025-04-03", "Thu"),
    },
    projectGroupBrainstorm: {
      type: "assignment",
      title: "Project: Group Brainstorm",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2025-04-09", "Wed"),
    },
    projectGroupsFinalized: {
      type: "assignment",
      title: "Project: Groups Finalized",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2025-04-13", "Sun"),
    },
    projectDesignProposal: {
      type: "assignment",
      title: "Project: Design Proposal",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2025-04-21", "Mon"),
    },
    projectFormativeResearch: {
      type: "assignment",
      title: "Project: Formative Research",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2025-04-30", "Wed"),
    },
    projectInteractivePrototype: {
      type: "assignment",
      title: "Project: Interactive Prototype",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2025-05-11", "Sun"),
    },
    projectRevisedPrototype: {
      type: "assignment",
      title: "Project: Revised Prototype",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2025-05-25", "Sun"),
    },
    projectPoster: {
      type: "assignment",
      title: "Project: Poster",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2025-05-30", "Fri"),
    },
    projectFinalPrototype: {
      type: "assignment",
      title: "Project: Final Prototype",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2025-06-01", "Sun"),
    },
    projectPresentation: {
      type: "assignment",
      title: "Project: Presentation",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2025-06-03", "Tue"),
    },
    projectShowcase: {
      type: "assignment",
      title: "Project: Poster Showcase",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2025-06-05", "Thu"),
    },
  },

  aways: [
    {
      date: verifyCalendarDate("2025-04-22", "Tue"),
      type: "away",
      title: "Mingyuan at CHI 2025",
    },
    {
      date: verifyCalendarDate("2025-04-24", "Thu"),
      type: "away",
      title: "James and Mingyuan at CHI 2025",
    },
    {
      date: verifyCalendarDate("2025-04-29", "Tue"),
      type: "away",
      title: "James and Mingyuan at CHI 2025",
    },
    {
      date: verifyCalendarDate("2025-05-01", "Thu"),
      type: "away",
      title: "James and Mingyuan at CHI 2025",
    },
  ],

  events: [],

  holidays: [
    {
      date: verifyCalendarDate("2025-05-26", "Mon"),
      type: "holiday",
      title: "Memorial Day",
    },
  ],

  lectures: [
    // Week 1
    {
      date: verifyCalendarDate("2025-04-01", "Tue"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Course Overview",
      discussionPapers: [
        {
          authorText:
            "Michael S. Bernstein, Greg Little, Robert C. Miller, Björn Hartmann, Mark S. Ackerman, David R. Karger, David Crowell, Katrina Panovich",
          title: "Soylent: A Word Processor with a Crowd Inside",
          publicationText: "UIST 2010",
          link: "https://canvas.uw.edu/files/132826278/",
        },
      ],
    },
    {
      date: verifyCalendarDate("2025-04-03", "Thu"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Introductions and Project Ideas",
    },

    // Week 2
    {
      date: verifyCalendarDate("2025-04-08", "Tue"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Principles of Human-AI Interaction",
      discussionPapers: [
        {
          authorText: "Eric Horvitz",
          title: "Principles of Mixed-Initiative User Interfaces",
          publicationText: "CHI 1999",
          link: "https://canvas.uw.edu/files/132761885/",
        },
        {
          authorText:
            "Saleema Amershi, Dan Weld, Mihaela Vorvoreanu, Adam Fourney, Besmira Nushi, Penny Collisson, Jina Suh, Shamsi Iqbal, Paul N. Bennett, Kori Inkpen, Jaime Teevan, Ruth Kikin-Gil, Eric Horvitz",
          title: "Guidelines for Human-AI Interaction",
          publicationText: "CHI 2019",
          link: "https://canvas.uw.edu/files/132762356/",
        },
        {
          authorText:
            "Gagan Bansal, Jennifer Wortman Vaughan, Saleema Amershi, Eric Horvitz, Adam Fourney, Hussein Mozannar, Victor Dibia, Daniel S. Weld",
          title: "Challenges in Human-Agent Communication",
          publicationText: "arXiv. 2024",
          link: "https://canvas.uw.edu/files/132762258/",
        },
        {
          authorText:
            "Hariharan Subramonyam, Jane Im, Colleen Seifert, Eytan Adar",
          title:
            "Solving Separation-of-Concerns Problems in Collaborative Design of Human-AI Systems through Leaky Abstractions",
          publicationText: "CHI 2022",
          link: "https://canvas.uw.edu/files/132768251/",
        },
      ],
    },
    {
      date: verifyCalendarDate("2025-04-10", "Thu"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Designing for Human-AI Interaction",
      discussionPapers: [
        {
          authorText:
            "J.D. Zamfirescu-Pereira, Richmond Y. Wong, Bjoern Hartmann, Qian Yang",
          title:
            "Why Johnny Can’t Prompt: How Non-AI Experts Try (and Fail) to Design LLM Prompts",
          publicationText: "CHI 2023",
          link: "https://canvas.uw.edu/files/132826450/",
        },
        {
          authorText:
            "Tim Zindulka, Jannek Sekowski, Florian Lehmann, Daniel Buschek",
          title:
            "Exploring Mobile Touch Interaction with Large Language Models",
          publicationText: "CHI 2025",
          link: "https://canvas.uw.edu/files/132826451/",
        },
        {
          authorText:
            "Damien Masson, Sylvain Malacria, Géry Casiez, Daniel Vogel",
          title:
            "DirectGPT: A Direct Manipulation Interface to Interact with Large Language Models",
          publicationText: "CHI 2024",
          link: "https://canvas.uw.edu/files/132826447/",
        },
        {
          authorText:
            'Zachary Englhardt, Chengqian Ma, Margaret E. Morris, Chun-Cheng Chang, Xuhai "Orson" Xu, Lianhui Qin, Daniel McDuff, Xin Liu, Shwetak Patel, Vikram Iyer',
          title:
            "From Classification to Clinical Insights: Towards Analyzing and Reasoning About Mobile and Behavioral Health Data With Large Language Models",
          publicationText: "IMWUT 2024",
          link: "https://canvas.uw.edu/files/132826446/",
        },
      ],
    },

    // Week 3
    {
      date: verifyCalendarDate("2025-04-15", "Tue"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Designing for Human-AI Interaction",
      discussionPapers: [
        {
          authorText:
            "Peitong Duan, Chin-Yi Cheng, Gang Li, Bjoern Hartmann, Yang Li",
          title:
            "UICrit: Enhancing Automated Design Evaluation with a UI Critique Dataset",
          publicationText: "UIST 2024",
          link: "https://canvas.uw.edu/files/132854975/",
        },
        {
          authorText:
            "Xingyu Bruce Liu, Shitao Fang, Weiyan Shi, Chien-Sheng Wu, Takeo Igarashi, Xiang Anthony Chen",
          title: "Proactive Conversational Agents with Inner Thoughts",
          publicationText: "CHI 2025",
          link: "https://canvas.uw.edu/files/132854974/",
        },
      ],
    },
    {
      date: verifyCalendarDate("2025-04-17", "Thu"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Designing for Human-AI Interaction",
      discussionPapers: [
        {
          authorText: "Joshua Gorniak, Yoon Kim, Donglai Wei, Nam Wook Kim",
          title:
            "VizAbility: Enhancing Chart Accessibility with LLM-based Conversational Interaction",
          publicationText: "UIST 2024",
          link: "https://canvas.uw.edu/files/132854980/",
        },
        {
          authorText:
            "Taewan Kim, Seolyeong Bae, Hyun Ah Kim, Su-Woo Lee, Hwajung Hong, Chanmo Yang, Young-Ho Kim",
          title:
            "MindfulDiary: Harnessing Large Language Model to Support Psychiatric Patients’ Journaling",
          publicationText: "CHI 2024",
          link: "https://canvas.uw.edu/files/132854979/",
        },
      ],
    },

    // Week 4
    {
      date: verifyCalendarDate("2025-04-22", "Tue"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Technology Lab Presentations",
    },
    {
      date: verifyCalendarDate("2025-04-24", "Thu"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Project Working Time",
    },

    // Week 5
    {
      date: verifyCalendarDate("2025-04-29", "Tue"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Project Working Time",
    },
    {
      date: verifyCalendarDate("2025-05-01", "Thu"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Project Working Time",
    },

    // Week 6
    {
      date: verifyCalendarDate("2025-05-06", "Tue"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Project Meetings",
    },
    {
      date: verifyCalendarDate("2025-05-08", "Thu"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Human-AI Interaction in Context",
      discussionPapers: [
        {
          authorText: "Dhruv Agarwal, Mor Naaman, Aditya Vashistha",
          title:
            "AI Suggestions Homogenize Writing Toward Western Styles and Diminish Cultural Nuances",
          publicationText: "CHI 2025",
          link: "https://canvas.uw.edu/files/134315593/",
        },
        {
          authorText:
            "Aaleyah Lewis, Aayushi Dangol, Hyewon Suh, Abbie Olszewski, James Fogarty, Julie A. Kientz",
          title:
            "Exploring AI-Based Support in Speech-Language Pathology for Culturally and Linguistically Diverse Children",
          publicationText: "CHI 2025",
          link: "https://canvas.uw.edu/files/134315596/",
        },
      ],
    },

    // Week 7
    {
      date: verifyCalendarDate("2025-05-13", "Tue"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Project Working Time",
    },
    {
      date: verifyCalendarDate("2025-05-15", "Thu"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Human-AI Interaction in Context",
      discussionPapers: [
        {
          authorText: "Jijie Zhou, Eryue Xu, Yaoyao Wu, Tianshi Li",
          title:
            "Rescriber: Smaller-LLM-Powered User-Led Data Minimization for LLM-Based Chatbots",
          publicationText: "CHI 2025",
          link: "https://canvas.uw.edu/files/134421728/",
        },
        {
          authorText:
            "Weiran Lin, Anna Gerchanovsky, Omer Akgul, Lujo Bauer, Matt Fredrikson, Zifan Wang",
          title: "LLM Whisperer: An Inconspicuous Attack to Bias LLM Responses",
          publicationText: "CHI 2025",
          link: "https://canvas.uw.edu/files/134421732/",
        },
      ],
    },

    // Week 8
    {
      date: verifyCalendarDate("2025-05-20", "Tue"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Human-AI Interaction in Industry",
      guest: {
        name: "Amanda Swearngin",
        link: "https://amaswea.github.io/",
      },
      discussionPapers: [
        {
          authorText:
            "Maryam Taeb, Amanda Swearngin, Eldon Schoop, Ruijia Cheng, Yue Jiang, Jeffrey Nichols",
          title: "AXNav: Replaying Accessibility Tests from Natural Language",
          publicationText: "CHI 2024",
          link: "https://canvas.uw.edu/files/134336791/",
        },
      ],
    },
    {
      date: verifyCalendarDate("2025-05-22", "Thu"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Project Working Time",
    },

    // Week 9
    {
      date: verifyCalendarDate("2025-05-27", "Tue"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Human-AI Interaction in Industry",
      guest: {
        name: "Gagan Bansal",
        link: "https://gagb.github.io/",
      },
      discussionPapers: [
        {
          authorText:
            "Adam Fourney, Gagan Bansal, Hussein Mozannar, Cheng Tan, Eduardo Salinas, Erkang (Eric) Zhu, Friederike Niedtner, Grace Proebsting, Griffin Bassman, Jack Gerrits, Jacob Alber, Peter Chang, Ricky Loynd, Robert West, Victor Dibia, Ahmed Awadallah, Ece Kamar, Rafah Hosn, Saleema Amershi",
          title:
            "Magentic-One: A Generalist Multi-Agent System for Solving Complex Tasks",
          publicationText: "arXiv. 2024",
          link: "https://canvas.uw.edu/files/134605309/",
        },
      ],
    },
    {
      date: verifyCalendarDate("2025-05-29", "Thu"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Project Working Time",
    },

    // Week 10
    {
      date: verifyCalendarDate("2025-06-03", "Tue"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Project Presentations",
    },
    {
      date: verifyCalendarDate("2025-06-05", "Thu"),
      timeAndLocation: TIME_AND_LOCATION_SHOWCASE,
      type: "lecture",
      title: "Project Showcase",
    },
  ],

  officeHours: [],

  studios: [],
};
