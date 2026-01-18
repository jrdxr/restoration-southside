import * as React from "react";
import * as Types from "./types";

declare function FormInput(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  labelVariant?: "Visible" | "Hidden" | "Bold";
  label?: React.ReactNode;
  /** Field title for submission results*/
  name?: Types.Builtin.Text;
  placeholder?: Types.Builtin.Text;
  /** Add a space to make the field required*/
  required?: Types.Builtin.Text;
  value?: Types.Builtin.Text;
  /** text, email, password, tel, url, search, number, date*/
  type?: Types.Builtin.Text;
  /** Touch device keyboard type: none, text, decimal, numeric, tel, search, email, url*/
  inputMode?: Types.Builtin.Text;
  /** on, off, name, given-name, family-name, email, tel, organization-title, organization, street-address, address-line1, country, country-name, postal-code, gender, birthday, bday-year, language, photo, url, home, work, mobile*/
  autoComplete?: Types.Builtin.Text;
  classes?: Types.Builtin.Text;
  attributeName?: Types.Builtin.Text;
  attributeValue?: Types.Builtin.Text;
}): React.JSX.Element;
