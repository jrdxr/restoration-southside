import * as React from "react";
import * as Types from "./types";

declare function FooterLink(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  text?: React.ReactNode;
  link?: Types.Basic.Link;
}): React.JSX.Element;
