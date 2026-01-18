import * as React from "react";
import * as Types from "./types";

declare function ContentWrapper(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  variant?: "Left" | "Center" | "Right" | "Center Mobile";
  classes?: Types.Builtin.Text;
  content?: React.ReactNode;
}): React.JSX.Element;
