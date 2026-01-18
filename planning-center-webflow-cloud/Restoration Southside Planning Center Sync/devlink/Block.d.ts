import * as React from "react";
import * as Types from "./types";

declare function Block(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  classes?: Types.Builtin.Text;
  style?: Types.Builtin.Text;
  tag?: Types.Basic.TagType;
  attributeName?: Types.Builtin.Text;
  attributeValue?: Types.Builtin.Text;
  content?: React.ReactNode;
}): React.JSX.Element;
