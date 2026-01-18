import * as React from "react";
import * as Types from "./types";

declare function ButtonWrapper(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  classes?: Types.Builtin.Text;
  style?: Types.Builtin.Text;
  content?: React.ReactNode;
}): React.JSX.Element;
