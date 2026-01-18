import * as React from "react";
import * as Types from "./types";

declare function RsDropdownLink(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  linkText?: React.ReactNode;
  link?: Types.Basic.Link;
}): React.JSX.Element;
