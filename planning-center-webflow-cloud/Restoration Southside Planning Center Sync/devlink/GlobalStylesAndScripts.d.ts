import * as React from "react";
import * as Types from "./types";

declare function GlobalStylesAndScripts(props: {
  as?: React.ElementType;
  /** Set this to visible if you are having issues with closing modals (Usually due to having duplicate modals on a page)*/
  duplicateModalsFix?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
