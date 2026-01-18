import * as React from "react";
import * as Types from "./types";

declare function FormSelect(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  labelVariant?: "Visible" | "Hidden" | "Bold";
  /** Field label shown on page*/
  label?: React.ReactNode;
  /** Field title for submission results*/
  name?: Types.Builtin.Text;
  /** Add a space to make the field required*/
  required?: Types.Builtin.Text;
  /** Add a space to allow multi select*/
  allowMultiSelect?: Types.Builtin.Text;
  classes?: Types.Builtin.Text;
  attributeName?: Types.Builtin.Text;
  attributeValue?: Types.Builtin.Text;
  formSelectOption?: React.ReactNode;
}): React.JSX.Element;
