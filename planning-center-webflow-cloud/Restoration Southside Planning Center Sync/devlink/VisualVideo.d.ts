import * as React from "react";
import * as Types from "./types";

declare function VisualVideo(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  variant?:
    | "Wide 2 / 1"
    | "Wide 16 / 9"
    | "Wide 3 / 2"
    | "Wide 5 / 4"
    | "Square 1 / 1"
    | "Tall 4 / 5"
    | "Tall 2 / 3"
    | "Cover";
  url?: Types.Builtin.Text;
  autoplay?: Types.Builtin.Text;
  loop?: Types.Builtin.Text;
  muted?: Types.Builtin.Text;
  classes?: Types.Builtin.Text;
  style?: Types.Builtin.Text;
  attributeName?: Types.Builtin.Text;
  attributeValue?: Types.Builtin.Text;
  controls?: Types.Builtin.Text;
}): React.JSX.Element;
