import * as React from "react";
import * as Types from "./types";

declare function RsButton(props: {
  as?: React.ElementType;
  variant?:
    | "Primary"
    | "Secondary"
    | "Link"
    | "Link Reverse Icon"
    | "External / Small"
    | "Nav CTA"
    | "Block Link";
  visibility?: Types.Visibility.VisibilityConditions;
  text?: React.ReactNode;
  link?: Types.Basic.Link;
  /** button, submit, reset*/
  type?: Types.Builtin.Text;
  /** "_blank" opens in new tab*/
  target?: Types.Builtin.Text;
  classes?: Types.Builtin.Text;
  attributeName?: Types.Builtin.Text;
  attributeValue?: Types.Builtin.Text;
  clickableVisibility?: Types.Visibility.VisibilityConditions;
  icon?: React.ReactNode;
  /** Combine with u-border-none class*/
  linkLineVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
