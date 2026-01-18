import * as React from "react";
import * as Types from "./types";

declare function GradientWrap(props: {
  as?: React.ElementType;
  variant?:
    | "Base"
    | "Base Reverse"
    | "Base 2"
    | "Dark"
    | "Brand"
    | "Brand-Secondary"
    | "Accent";
  slot?: React.ReactNode;
  _class?: Types.Builtin.Text;
}): React.JSX.Element;
