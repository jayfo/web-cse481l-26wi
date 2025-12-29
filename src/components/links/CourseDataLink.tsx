import * as React from "react";

import { AppLink } from "@/components/links/AppLink";
import { TBD } from "@/components/TBD";
import { CourseDataLinkHREF } from "@/data/CourseData";
import { assertIsOuterComponent, OuterComponent } from "@/types/OuterComponent";

interface CourseDataLinkProps extends React.PropsWithChildren<{}> {
  linkHref: CourseDataLinkHREF;
  outerComponent?: OuterComponent;
}

export const CourseDataLink: React.FunctionComponent<CourseDataLinkProps> = ({
  children,
  linkHref,
  // Default to no explicit outerComponent.
  outerComponent = undefined,
}: CourseDataLinkProps): React.ReactElement => {
  // If provided an outerComponent, be sure it is valid.
  if (outerComponent !== undefined) {
    assertIsOuterComponent(outerComponent);
  }

  const resultComponentAnchor: React.ReactNode = (() => {
    if (children) {
      // If we have any anchor content, use that.
      return children;
    } else {
      // If we do not have any anchor content, use an appropriate default.
      if (linkHref) {
        // If we have an actual href, default to the href itself.
        return linkHref;
      } else {
        // Without an actual href, indicate the link is TBD.
        return "Link TBD.";
      }
    }
  })();

  if (linkHref) {
    // Actual href is available, create the link.
    return (
      <AppLink href={linkHref} outerComponent={outerComponent}>
        {resultComponentAnchor}
      </AppLink>
    );
  } else {
    // Actual href is not available, create a TBD.
    return <TBD outerComponent={outerComponent}>{resultComponentAnchor}</TBD>;
  }
};

// Below is a copy of this from when it also included an anchor.
// Preserving that while re-organizing.

// import * as React from "react";

// import { AppLink } from "@/components/links/AppLink";
// import { TBD } from "@/components/TBD";
// import { CourseDataLinkKey } from "@/data/CourseData";
// import { assertIsOuterComponent, OuterComponent } from "@/types/OuterComponent";

// interface CourseDataLinkProps extends React.PropsWithChildren<{}> {
//   linkKey: CourseDataLinkKey;
//   outerComponent?: OuterComponent;
// }

// export const CourseDataLink: React.FunctionComponent<CourseDataLinkProps> = ({
//   children,
//   linkKey,
//   // Default to no explicit outerComponent.
//   outerComponent = undefined,
// }: CourseDataLinkProps): React.ReactElement => {
//   // If provided an outerComponent, be sure it is valid.
//   if (outerComponent !== undefined) {
//     assertIsOuterComponent(outerComponent);
//   }

//   // // Actual href retrieved from CourseData.
//   const href = linkKey.href;

//   const resultComponentAnchor: React.ReactNode = (() => {
//     if (children) {
//       // If we have any anchor content, use that.
//       return children;
//     } else {
//       // If we do not have any anchor content, use an appropriate default.
//       if (linkKey.anchor) {
//         // If the link has a default, use that.
//         return linkKey.anchor;
//       } else if (href) {
//         // If we have an actual href, default to the href itself.
//         return href;
//       } else {
//         // Without an actual href, indicate the link is TBD.
//         return "Link TBD.";
//       }
//     }
//   })();

//   if (href) {
//     // Actual href is available, create the link.
//     return (
//       <AppLink href={href} outerComponent={outerComponent}>
//         {resultComponentAnchor}
//       </AppLink>
//     );
//   } else {
//     // Actual href is not available, create a TBD.
//     return <TBD outerComponent={outerComponent}>{resultComponentAnchor}</TBD>;
//   }
// };
