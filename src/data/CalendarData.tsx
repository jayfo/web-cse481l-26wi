import * as React from "react";

import { FormattedReading } from "@/components/FormattedReading";
import { CourseDataLink } from "@/components/links/CourseDataLink";
import { default as ContentContributionsInHCI } from "@/content/ContributionsInHCI.mdx";
import { default as ContentNoReading } from "@/content/NoReading.mdx";
import { default as ContentVisionsOfHCI } from "@/content/VisionsOfHCI.mdx";
import {
  calendarDates as calendarDatesUtil,
  calendarItemsForDate as calendarItemsForDateUtil,
  calendarWeeks as calendarWeeksUtil,
  verifyCalendarDate,
} from "@/data/CalendarUtils";
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

const TIME_AND_LOCATION_LECTURE = {
  time: "10:00 to 11:20",
  location: "MGH 058",
};

const TIME_AND_LOCATION_SHOWCASE = {
  time: "10:00 to 11:20",
  location: "CSE/Allen Atrium",
};

export function calendarDates(): CalendarDate[] {
  return calendarDatesUtil(
    calendarData.datesOfInstruction.start,
    calendarData.datesOfInstruction.end,
  );
}

export function calendarWeeks(): CalendarWeek[] {
  return calendarWeeksUtil(
    calendarData.datesOfInstruction.start,
    calendarData.datesOfInstruction.end,
  );
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
  return calendarItemsForDateUtil(calendarDate, calendarItems());
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
    start: verifyCalendarDate("2026-01-05", "Mon"),
    end: verifyCalendarDate("2026-03-20", "Fri"),
  },

  assignments: {
    labDeliverables: {
      type: "assignment",
      title:
        "Technology Lab: GitLab Code, Video Demonstration, Reflection, Slides",
      link: SiteLinks.assignmentsTechnologyLabDeliverables.href,
      date: verifyCalendarDate("2026-01-23", "Fri"),
    },
    labPresentationsDay1: {
      type: "assignment",
      title: "Technology Lab: Presentations",
      link: SiteLinks.assignmentsTechnologyLabDeliverables.href,
      date: verifyCalendarDate("2026-01-27", "Tue"),
    },
    labPresentationsDay2: {
      type: "assignment",
      title: "Technology Lab: Presentations",
      link: SiteLinks.assignmentsTechnologyLabDeliverables.href,
      date: verifyCalendarDate("2026-01-29", "Thu"),
    },

    projectIntroductionAndIdeaSlides: {
      type: "assignment",
      title: "Project: Introduction and Idea Slides",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2026-01-07", "Wed"),
    },
    projectIntroductionAndIdeaPresentation: {
      type: "assignment",
      title: "Project: Introduction and Idea Presentation",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2026-01-08", "Thu"),
    },
    projectGroupBrainstorm: {
      type: "assignment",
      title: "Project: Group Brainstorm",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2026-01-14", "Wed"),
    },
    projectGroupsFinalized: {
      type: "assignment",
      title: "Project: Groups Finalized",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2026-01-18", "Sun"),
    },
    projectDesignProposal: {
      type: "assignment",
      title: "Project: Design Proposal",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2026-01-26", "Mon"),
    },
    projectFormativeResearch: {
      type: "assignment",
      title: "Project: Formative Research",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2026-02-04", "Wed"),
    },
    projectInteractivePrototype: {
      type: "assignment",
      title: "Project: Interactive Prototype",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2026-02-15", "Sun"),
    },
    projectRevisedPrototype: {
      type: "assignment",
      title: "Project: Revised Prototype",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2026-03-01", "Sun"),
    },
    projectPoster: {
      type: "assignment",
      title: "Project: Poster",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2026-03-06", "Fri"),
    },
    projectFinalPrototype: {
      type: "assignment",
      title: "Project: Final Prototype",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2026-03-08", "Sun"),
    },
    projectPresentation: {
      type: "assignment",
      title: "Project: Presentation",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2026-03-10", "Tue"),
    },
    projectShowcase: {
      type: "assignment",
      title: "Project: Poster Showcase",
      link: SiteLinks.assignmentsProjectTop.href,
      date: verifyCalendarDate("2026-03-12", "Thu"),
    },
  },

  aways: [
    {
      date: verifyCalendarDate("2026-01-06", "Tue"),
      type: "away",
      title: "Mingyuan Away",
    },
    {
      date: verifyCalendarDate("2026-02-17", "Tue"),
      type: "away",
      title: "James Away",
    },
    {
      date: verifyCalendarDate("2026-02-19", "Thu"),
      type: "away",
      title: "James Away",
    },
  ],

  events: [],

  holidays: [
    {
      date: verifyCalendarDate("2026-01-19", "Mon"),
      type: "holiday",
      title: "Martin Luther King Jr. Day",
    },
    {
      date: verifyCalendarDate("2026-02-16", "Mon"),
      type: "holiday",
      title: "Presidents Day",
    },
  ],

  lectures: [
    // Week 1
    {
      date: verifyCalendarDate("2026-01-06", "Tue"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Course Overview",
      discussionPapers: [
        {
          authorText:
            "Michael S. Bernstein, Greg Little, Robert C. Miller, Björn Hartmann, Mark S. Ackerman, David R. Karger, David Crowell, Katrina Panovich",
          title: "Soylent: A Word Processor with a Crowd Inside",
          publicationText: "UIST 2010",
          link: "https://canvas.uw.edu/files/143346407/",
        },
      ],
    },
    {
      date: verifyCalendarDate("2026-01-08", "Thu"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Introductions and Project Ideas",
    },

    // Week 2
    {
      date: verifyCalendarDate("2026-01-13", "Tue"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Principles of Human-AI Interaction",
      discussionPapers: [
        {
          authorText: "Eric Horvitz",
          title: "Principles of Mixed-Initiative User Interfaces",
          publicationText: "CHI 1999",
          link: "https://canvas.uw.edu/files/143346424/",
        },
        {
          authorText:
            "Saleema Amershi, Dan Weld, Mihaela Vorvoreanu, Adam Fourney, Besmira Nushi, Penny Collisson, Jina Suh, Shamsi Iqbal, Paul N. Bennett, Kori Inkpen, Jaime Teevan, Ruth Kikin-Gil, Eric Horvitz",
          title: "Guidelines for Human-AI Interaction",
          publicationText: "CHI 2019",
          link: "https://canvas.uw.edu/files/143346422/",
        },
        {
          authorText:
            "Gagan Bansal, Jennifer Wortman Vaughan, Saleema Amershi, Eric Horvitz, Adam Fourney, Hussein Mozannar, Victor Dibia, Daniel S. Weld",
          title: "Challenges in Human-Agent Communication",
          publicationText: "arXiv. 2024",
          link: "https://canvas.uw.edu/files/143346423/",
        },
        {
          authorText:
            "Hariharan Subramonyam, Jane Im, Colleen Seifert, Eytan Adar",
          title:
            "Solving Separation-of-Concerns Problems in Collaborative Design of Human-AI Systems through Leaky Abstractions",
          publicationText: "CHI 2022",
          link: "https://canvas.uw.edu/files/143346421/",
        },
      ],
    },
    {
      date: verifyCalendarDate("2026-01-15", "Thu"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Designing for Human-AI Interaction",
      discussionPapers: [
        // {
        //   authorText:
        //     "J.D. Zamfirescu-Pereira, Richmond Y. Wong, Bjoern Hartmann, Qian Yang",
        //   title:
        //     "Why Johnny Can’t Prompt: How Non-AI Experts Try (and Fail) to Design LLM Prompts",
        //   publicationText: "CHI 2023",
        //   // link: "https://canvas.uw.edu/files/132826450/",
        // },
        // {
        //   authorText:
        //     "Tim Zindulka, Jannek Sekowski, Florian Lehmann, Daniel Buschek",
        //   title:
        //     "Exploring Mobile Touch Interaction with Large Language Models",
        //   publicationText: "CHI 2025",
        //   // link: "https://canvas.uw.edu/files/132826451/",
        // },
        // {
        //   authorText:
        //     "Damien Masson, Sylvain Malacria, Géry Casiez, Daniel Vogel",
        //   title:
        //     "DirectGPT: A Direct Manipulation Interface to Interact with Large Language Models",
        //   publicationText: "CHI 2024",
        //   // link: "https://canvas.uw.edu/files/132826447/",
        // },
        // {
        //   authorText:
        //     'Zachary Englhardt, Chengqian Ma, Margaret E. Morris, Chun-Cheng Chang, Xuhai "Orson" Xu, Lianhui Qin, Daniel McDuff, Xin Liu, Shwetak Patel, Vikram Iyer',
        //   title:
        //     "From Classification to Clinical Insights: Towards Analyzing and Reasoning About Mobile and Behavioral Health Data With Large Language Models",
        //   publicationText: "IMWUT 2024",
        //   // link: "https://canvas.uw.edu/files/132826446/",
        // },
      ],
    },

    // Week 3
    {
      date: verifyCalendarDate("2026-01-20", "Tue"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Designing for Human-AI Interaction",
      discussionPapers: [
        // {
        //   authorText:
        //     "Peitong Duan, Chin-Yi Cheng, Gang Li, Bjoern Hartmann, Yang Li",
        //   title:
        //     "UICrit: Enhancing Automated Design Evaluation with a UI Critique Dataset",
        //   publicationText: "UIST 2024",
        //   // link: "https://canvas.uw.edu/files/132854975/",
        // },
        // {
        //   authorText:
        //     "Xingyu Bruce Liu, Shitao Fang, Weiyan Shi, Chien-Sheng Wu, Takeo Igarashi, Xiang Anthony Chen",
        //   title: "Proactive Conversational Agents with Inner Thoughts",
        //   publicationText: "CHI 2025",
        //   // link: "https://canvas.uw.edu/files/132854974/",
        // },
      ],
    },
    {
      date: verifyCalendarDate("2026-01-22", "Thu"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Designing for Human-AI Interaction",
      discussionPapers: [
        // {
        //   authorText: "Joshua Gorniak, Yoon Kim, Donglai Wei, Nam Wook Kim",
        //   title:
        //     "VizAbility: Enhancing Chart Accessibility with LLM-based Conversational Interaction",
        //   publicationText: "UIST 2024",
        //   // link: "https://canvas.uw.edu/files/132854980/",
        // },
        // {
        //   authorText:
        //     "Taewan Kim, Seolyeong Bae, Hyun Ah Kim, Su-Woo Lee, Hwajung Hong, Chanmo Yang, Young-Ho Kim",
        //   title:
        //     "MindfulDiary: Harnessing Large Language Model to Support Psychiatric Patients’ Journaling",
        //   publicationText: "CHI 2024",
        //   // link: "https://canvas.uw.edu/files/132854979/",
        // },
      ],
    },

    // Week 4
    {
      date: verifyCalendarDate("2026-01-27", "Tue"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Technology Lab Presentations",
    },
    {
      date: verifyCalendarDate("2026-01-29", "Thu"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Technology Lab Presentations",
    },

    // Week 5
    {
      date: verifyCalendarDate("2026-02-03", "Tue"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "TBD",
    },
    {
      date: verifyCalendarDate("2026-02-05", "Thu"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "TBD",
    },

    // Week 6
    {
      date: verifyCalendarDate("2026-02-10", "Tue"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      // title: "Project Meetings",
      title: "TBD",
    },
    {
      date: verifyCalendarDate("2026-02-12", "Thu"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "TBD",
      // title: "Human-AI Interaction in Context",
      // discussionPapers: [
      //   {
      //     authorText: "Dhruv Agarwal, Mor Naaman, Aditya Vashistha",
      //     title:
      //       "AI Suggestions Homogenize Writing Toward Western Styles and Diminish Cultural Nuances",
      //     publicationText: "CHI 2025",
      //     link: "https://canvas.uw.edu/files/134315593/",
      //   },
      //   {
      //     authorText:
      //       "Aaleyah Lewis, Aayushi Dangol, Hyewon Suh, Abbie Olszewski, James Fogarty, Julie A. Kientz",
      //     title:
      //       "Exploring AI-Based Support in Speech-Language Pathology for Culturally and Linguistically Diverse Children",
      //     publicationText: "CHI 2025",
      //     link: "https://canvas.uw.edu/files/134315596/",
      //   },
      // ],
    },

    // Week 7
    {
      date: verifyCalendarDate("2026-02-17", "Tue"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Project Working Time",
    },
    {
      date: verifyCalendarDate("2026-02-19", "Thu"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Project Working Time",
      // title: "Human-AI Interaction in Context",
      // discussionPapers: [
      //   {
      //     authorText: "Jijie Zhou, Eryue Xu, Yaoyao Wu, Tianshi Li",
      //     title:
      //       "Rescriber: Smaller-LLM-Powered User-Led Data Minimization for LLM-Based Chatbots",
      //     publicationText: "CHI 2025",
      //     link: "https://canvas.uw.edu/files/134421728/",
      //   },
      //   {
      //     authorText:
      //       "Weiran Lin, Anna Gerchanovsky, Omer Akgul, Lujo Bauer, Matt Fredrikson, Zifan Wang",
      //     title: "LLM Whisperer: An Inconspicuous Attack to Bias LLM Responses",
      //     publicationText: "CHI 2025",
      //     link: "https://canvas.uw.edu/files/134421732/",
      //   },
      // ],
    },

    // Week 8
    {
      date: verifyCalendarDate("2026-02-24", "Tue"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "TBD",
      // title: "Human-AI Interaction in Industry",
      // guest: {
      //   name: "Amanda Swearngin",
      //   link: "https://amaswea.github.io/",
      // },
      // discussionPapers: [
      //   {
      //     authorText:
      //       "Maryam Taeb, Amanda Swearngin, Eldon Schoop, Ruijia Cheng, Yue Jiang, Jeffrey Nichols",
      //     title: "AXNav: Replaying Accessibility Tests from Natural Language",
      //     publicationText: "CHI 2024",
      //     link: "https://canvas.uw.edu/files/134336791/",
      //   },
      // ],
    },
    {
      date: verifyCalendarDate("2026-02-26", "Thu"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "TBD",
      // title: "Project Working Time",
    },

    // Week 9
    {
      date: verifyCalendarDate("2026-03-03", "Tue"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "TBD",
      // title: "Human-AI Interaction in Industry",
      // guest: {
      //   name: "Gagan Bansal",
      //   link: "https://gagb.github.io/",
      // },
      // discussionPapers: [
      //   {
      //     authorText:
      //       "Adam Fourney, Gagan Bansal, Hussein Mozannar, Cheng Tan, Eduardo Salinas, Erkang (Eric) Zhu, Friederike Niedtner, Grace Proebsting, Griffin Bassman, Jack Gerrits, Jacob Alber, Peter Chang, Ricky Loynd, Robert West, Victor Dibia, Ahmed Awadallah, Ece Kamar, Rafah Hosn, Saleema Amershi",
      //     title:
      //       "Magentic-One: A Generalist Multi-Agent System for Solving Complex Tasks",
      //     publicationText: "arXiv. 2024",
      //     link: "https://canvas.uw.edu/files/134605309/",
      //   },
      // ],
    },
    {
      date: verifyCalendarDate("2026-03-05", "Thu"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Project Working Time",
    },

    // Week 10
    {
      date: verifyCalendarDate("2026-03-10", "Tue"),
      timeAndLocation: TIME_AND_LOCATION_LECTURE,
      type: "lecture",
      title: "Project Presentations",
    },
    {
      date: verifyCalendarDate("2026-03-12", "Thu"),
      timeAndLocation: TIME_AND_LOCATION_SHOWCASE,
      type: "lecture",
      title: "Project Showcase",
    },
  ],

  officeHours: [],

  studios: [],
};
