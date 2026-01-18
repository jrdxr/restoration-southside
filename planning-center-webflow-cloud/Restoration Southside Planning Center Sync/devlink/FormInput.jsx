"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { FormLabelText } from "./FormLabelText";
import * as _utils from "./utils";
import _styles from "./FormInput.module.css";

export function FormInput({
  as: _Component = _Builtin.DOM,
  visibility = true,
  labelVariant = null,
  label = "Label",
  name = "Field Name",
  placeholder = "Placeholder",
  required,
  value,
  type = "text",
  inputMode = "text",
  autoComplete,
  classes,
  attributeName,
  attributeValue,
}) {
  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "form_label_wrap")}
      tag="label"
      slot=""
      data-trigger="focus"
    >
      <FormLabelText text={label} variant={labelVariant} />
      <_Builtin.DOM
        className={_utils.cx(_styles, "form_field")}
        tag="input"
        slot=""
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        inputmode={inputMode}
        autocomplete={autoComplete}
        _class={classes}
      />
    </_Component>
  ) : null;
}
