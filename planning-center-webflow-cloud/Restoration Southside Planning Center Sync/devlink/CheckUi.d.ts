import * as React from "react";
import * as Types from "./types";

declare function CheckUi(props: {
  as?: React.ElementType;
  variant?: "Checkbox" | "Radio" | "Toggle" | "Button";
  type?: Types.Builtin.Text;
  /** Field label shown on page*/
  label?: React.ReactNode;
  name?: Types.Builtin.Text;
  value?: Types.Builtin.Text;
  /** Add a space to make the field required*/
  required?: Types.Builtin.Text;
  /** Add a space to make the field checked by default*/
  checked?: Types.Builtin.Text;
  inputAttributeName?: Types.Builtin.Text;
  inputAttributeValue?: Types.Builtin.Text;
  labelAttributeName?: Types.Builtin.Text;
  labelAttributeValue?: Types.Builtin.Text;
}): React.JSX.Element;
