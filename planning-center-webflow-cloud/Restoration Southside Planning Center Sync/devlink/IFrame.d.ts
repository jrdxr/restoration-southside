import * as React from "react";
import * as Types from "./types";

declare function IFrame(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  classes?: Types.Builtin.Text;
  style?: Types.Builtin.Text;
  url?: Types.Builtin.Text;
  title?: Types.Builtin.Text;
}): React.JSX.Element;
