import * as React from "react";
import * as Types from "./types";

declare function ButtonMain(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  variant?: "Primary" | "Secondary" | "Link";
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
}): React.JSX.Element;
