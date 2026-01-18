import * as React from "react";
import * as Types from "./types";

declare function CardPrimary(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  variant?: "Default" | "Cover" | "Stacked";
  headingTag?: Types.Basic.HeadingTag;
  headingText?: React.ReactNode;
  paragraphVisibility?: Types.Visibility.VisibilityConditions;
  paragraphText?: Types.Basic.RichTextChildren;
  linkVisibility?: Types.Visibility.VisibilityConditions;
  linkText?: React.ReactNode;
  linkUrl?: Types.Basic.Link;
  /** "_blank" opens in new tab*/
  linkTarget?: Types.Builtin.Text;
  image?: Types.Asset.Image;
  /** Set to "listitem" if used in a list*/
  role?: Types.Builtin.Text;
  classes?: Types.Builtin.Text;
  contentClasses?: Types.Builtin.Text;
  style?: Types.Builtin.Text;
}): React.JSX.Element;
