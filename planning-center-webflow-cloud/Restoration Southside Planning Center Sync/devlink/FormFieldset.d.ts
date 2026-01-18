import * as React from "react";
import * as Types from "./types";

declare function FormFieldset(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  variant?:
    | "Flex Vertical"
    | "Flex Horizontal"
    | "Grid 2 Column"
    | "Grid 3 Column";
  legendVariant?: "Visible" | "Hidden" | "Bold";
  legendText?: React.ReactNode;
  /** Switch to "list" if containing a list of items*/
  slotRole?: Types.Builtin.Text;
  classes?: Types.Builtin.Text;
  attributeName?: Types.Builtin.Text;
  attributeValue?: Types.Builtin.Text;
  content?: React.ReactNode;
}): React.JSX.Element;
