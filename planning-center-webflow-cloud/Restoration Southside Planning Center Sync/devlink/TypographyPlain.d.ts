import * as React from "react";
import * as Types from "./types";

declare function TypographyPlain(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  variant?:
    | "Inherit"
    | "Text Small"
    | "Text Main"
    | "Text Large"
    | "H6"
    | "H5"
    | "H4"
    | "H3"
    | "H2"
    | "H1"
    | "Display";
  tag?: Types.Basic.TagType;
  text?: React.ReactNode;
  /** Set "-1" for no max width*/
  maxWidth?: number;
  classes?: Types.Builtin.Text;
  style?: Types.Builtin.Text;
}): React.JSX.Element;
