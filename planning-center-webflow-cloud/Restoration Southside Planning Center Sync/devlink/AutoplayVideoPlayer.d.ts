import * as React from "react";
import * as Types from "./types";

declare function AutoplayVideoPlayer(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  /** If not seeing a visual change, refresh the editor*/
  posterUrl?: Types.Builtin.Text;
  /** If not seeing a visual change, refresh the editor*/
  videoSrc?: Types.Builtin.Text;
  variant?: "Wide" | "Vertical";
}): React.JSX.Element;
