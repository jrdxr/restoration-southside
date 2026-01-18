import * as React from "react";
import * as Types from "./types";

declare function FormRange(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  classes?: Types.Builtin.Text;
  labelVariant?: "Visible" | "Hidden" | "Bold";
  label?: React.ReactNode;
  /** Field title for submission results*/
  name?: Types.Builtin.Text;
  id?: Types.Builtin.Text;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  outputUnit?: React.ReactNode;
  /** Add a space to make the field required*/
  required?: Types.Builtin.Text;
  attributeName?: Types.Builtin.Text;
  attributeValue?: Types.Builtin.Text;
}): React.JSX.Element;
