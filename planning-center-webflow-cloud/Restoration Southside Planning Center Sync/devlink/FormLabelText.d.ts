import * as React from "react";
import * as Types from "./types";

declare function FormLabelText(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  variant?: "Visible" | "Hidden" | "Bold";
  tag?: Types.Basic.TagType;
  /** Field label shown on page*/
  text?: React.ReactNode;
  classes?: Types.Builtin.Text;
}): React.JSX.Element;
