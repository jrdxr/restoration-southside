import * as React from "react";
import * as Types from "./types";

declare function TypographyLongContent(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  text?: Types.Basic.RichTextChildren;
  /** Set "-1" for no max width*/
  maxWidth?: number;
  classes?: Types.Builtin.Text;
  id?: Types.Basic.IdTextInput;
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
}): React.JSX.Element;
