import * as React from "react";
import * as Types from "./types";

declare function FooterGroup(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  title?: React.ReactNode;
  footerLink?: React.ReactNode;
}): React.JSX.Element;
