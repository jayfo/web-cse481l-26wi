import * as React from "react";

import { FormattedReading } from "@/components/FormattedReading";
import { CourseDataLink } from "@/components/links/CourseDataLink";
import { SiteLink } from "@/components/links/SiteLink";
import { courseData } from "@/data/CourseData";
import { SiteLinks } from "@/data/SiteLinks";
import { CalendarItem } from "@/types/CalendarData";

export const CalendarItemDiscussionPapers: React.FunctionComponent<{
  calendarItem: CalendarItem;
}> = ({ calendarItem }) => {
  if ("discussionPapers" in calendarItem) {
    return (
      <React.Fragment>
        {calendarItem.discussionPapers.length == 1 && <p>Discussion paper:</p>}
        {calendarItem.discussionPapers.length > 1 && <p>Discussion papers:</p>}
        <ul>
          {calendarItem.discussionPapers.map((readingCurrent) => (
            <li key={readingCurrent.title}>
              <p>
                <FormattedReading reading={readingCurrent} />
              </p>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  } else {
    return undefined;
  }
};
