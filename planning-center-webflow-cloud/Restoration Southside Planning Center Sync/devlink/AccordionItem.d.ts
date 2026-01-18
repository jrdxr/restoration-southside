import * as React from "react";
import * as Types from "./types";

declare function AccordionItem(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  headingTag?: Types.Basic.TagType;
  headingText?: React.ReactNode;
  content?: Types.Basic.RichTextChildren;
  classes?: Types.Builtin.Text;
}): React.JSX.Element;
