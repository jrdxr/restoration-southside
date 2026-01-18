"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { CheckUi } from "./CheckUi";
import * as _utils from "./utils";
import _styles from "./FormCheckbox.module.css";

export function FormCheckbox({
  as: _Component = _Builtin.DOM,
  visibility = true,
  variant = null,
  label = "Field Label",
  name = "Field Name",
  required,
  checked,
  role = "none",
  classes,
  inputAttributeName,
  inputAttributeValue,
  labelAttributeName,
  labelAttributeValue,
}) {
  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "form_ui_item")}
      tag="div"
      slot=""
      role={role}
      data-state="checked"
      _class={classes}
    >
      <CheckUi
        variant={variant}
        name={name}
        label={label}
        required={required}
        checked={checked}
        inputAttributeName={inputAttributeName}
        inputAttributeValue={inputAttributeValue}
        labelAttributeName={labelAttributeName}
        labelAttributeValue={labelAttributeValue}
      />
    </_Component>
  ) : null;
}
