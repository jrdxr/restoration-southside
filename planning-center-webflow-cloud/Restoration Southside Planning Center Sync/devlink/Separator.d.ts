import * as React from "react";
import * as Types from "./types";

declare function Separator(props: {
  as?: React.ElementType;
  variant?: "Base" | "Vertical";
  topSpace?: "None" | "Even" | "Small" | "Main" | "Large" | "Page Top";
  bottomSpace?: "None" | "Even" | "Small" | "Main" | "Large" | "Page Top";
  classes?: Types.Builtin.Text;
}): React.JSX.Element;
