import * as React from "react";
import * as Types from "./types";

declare function FormCheckbox(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  variant?: "Checkbox" | "Radio" | "Toggle" | "Button";
  /** Label text shown on page*/
  label?: React.ReactNode;
  /** Field title for submission results*/
  name?: Types.Builtin.Text;
  /** Add a space to make the field required*/
  required?: Types.Builtin.Text;
  /** Add a space to make the field checked by default*/
  checked?: Types.Builtin.Text;
  /** Switch to "listitem" if used in a list*/
  role?: Types.Builtin.Text;
  classes?: Types.Builtin.Text;
  inputAttributeName?: Types.Builtin.Text;
  inputAttributeValue?: Types.Builtin.Text;
  labelAttributeName?: Types.Builtin.Text;
  labelAttributeValue?: Types.Builtin.Text;
}): React.JSX.Element;
