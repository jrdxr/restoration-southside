"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { CheckUi } from "./CheckUi";
import * as _utils from "./utils";
import _styles from "./FormRadio.module.css";

export function FormRadio({
  as: _Component = _Builtin.DOM,
  visibility = true,
  variant = null,
  groupName = "Group Name",
  label = "Label",
  value = "Value",
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
        name={groupName}
        label={label}
        value={value}
        required={required}
        checked={checked}
        inputAttributeName={inputAttributeName}
        inputAttributeValue={inputAttributeValue}
        labelAttributeName={labelAttributeName}
        labelAttributeValue={labelAttributeValue}
        type="radio"
      />
    </_Component>
  ) : null;
}
