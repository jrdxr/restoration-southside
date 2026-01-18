import * as React from "react";
import * as Types from "./types";

declare function VideoPlayer(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  variant?: "Wide" | "Vertical";
  /** If not seeing a visual change, refresh the editor*/
  posterUrl?: Types.Builtin.Text;
  /** If not seeing a visual change, refresh the editor*/
  videoSrc?: Types.Builtin.Text;
}): React.JSX.Element;
