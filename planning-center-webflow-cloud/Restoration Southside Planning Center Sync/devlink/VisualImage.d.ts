import * as React from "react";
import * as Types from "./types";

declare function VisualImage(props: {
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
  image?: Types.Asset.Image;
  altText?: Types.Basic.AltText;
  /** Switch the value to "eager" when image is used at the top of the page.*/
  loading?: Types.Builtin.Text;
  style?: Types.Builtin.Text;
  classes?: Types.Builtin.Text;
  attributeName?: Types.Builtin.Text;
  attributeValue?: Types.Builtin.Text;
}): React.JSX.Element;
