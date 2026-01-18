import * as React from "react";
import * as Types from "./types";

declare function BrandLogoMark(props: {
  as?: React.ElementType;
  variant?: "Static Coloring" | "Button Coloring" | "Nav Coloring";
  classes?: Types.Builtin.Text;
  style?: Types.Builtin.Text;
}): React.JSX.Element;
