import * as React from "react";
import * as Types from "./types";

declare function Layout(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  variant?:
    | "Stack"
    | "Stack Centered"
    | "Columns"
    | "Columns Reversed"
    | "Sticky Left"
    | "Breakout"
    | "Breakout Reversed"
    | "Full"
    | "Full Reversed"
    | "Contain"
    | "Contain Reversed"
    | "Card";
  classes?: Types.Builtin.Text;
  column1Classes?: Types.Builtin.Text;
  column2Classes?: Types.Builtin.Text;
  /** Can contain headings, paragraphs, buttons, and other primary content*/
  column1?: React.ReactNode;
  /** Can contain images, videos, forms, sliders, and other secondary content. For breakout, full, contain, and card variants, this slot needs to contain a visual.*/
  column2?: React.ReactNode;
}): React.JSX.Element;
