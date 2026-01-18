import * as React from "react";
import * as Types from "./types";

declare function AccordionList(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  classes?: Types.Builtin.Text;
  style?: Types.Builtin.Text;
  /** If set to true, currently open accordion will close when new one opens.*/
  closePrevious?: Types.Builtin.Text;
  /** If set to true, accordion will close the second time we click on it.*/
  closeOnSecondClick?: Types.Builtin.Text;
  /** If set to true, accordion will open when we hover over it.*/
  openOnHover?: Types.Builtin.Text;
  /** If set to 1, accordion item 1 will be opened by default.*/
  openByDefaultItem?: Types.Builtin.Text;
  accordionItem?: React.ReactNode;
}): React.JSX.Element;
