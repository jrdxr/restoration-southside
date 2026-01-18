"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { FormLabelText } from "./FormLabelText";
import * as _utils from "./utils";
import _styles from "./FormTextarea.module.css";

export function FormTextarea({
  as: _Component = _Builtin.DOM,
  visibility = true,
  labelVariant = null,
  label = "Label",
  name = "Name",
  placeholder,
  required,
  value,
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
      _class={classes}
    >
      <FormLabelText variant={labelVariant} text={label} />
      <_Builtin.DOM
        className={_utils.cx(_styles, "form_field", "is-textarea")}
        tag="textarea"
        slot=""
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
      />
    </_Component>
  ) : null;
}
