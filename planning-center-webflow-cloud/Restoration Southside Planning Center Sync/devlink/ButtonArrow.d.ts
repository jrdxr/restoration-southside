import * as React from "react";
import * as Types from "./types";

declare function ButtonArrow(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  variant?:
    | "Primary / Medium"
    | "Secondary / Medium"
    | "Primary / Large"
    | "Secondary / Large";
  arrowDirection?: "Right" | "Left" | "Top" | "Bottom";
  /** This is the text screen readers will read when focused on the button.*/
  text?: React.ReactNode;
  link?: Types.Basic.Link;
  classes?: Types.Builtin.Text;
  attributeName?: Types.Builtin.Text;
  attributeValue?: Types.Builtin.Text;
}): React.JSX.Element;
