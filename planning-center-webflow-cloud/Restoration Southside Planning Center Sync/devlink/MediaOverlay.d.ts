import * as React from "react";
import * as Types from "./types";

declare function MediaOverlay(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  variant?: "Base" | "Gradient";
  overlayStrength?: number;
  classes?: Types.Builtin.Text;
}): React.JSX.Element;
