"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CheckUi.module.css";

export function CheckUi({
  as: _Component = _Builtin.DOM,
  variant = "Checkbox",
  type = "checkbox",
  label = "I agree to the terms",
  name = "Name",
  value = "Value",
  required,
  checked,
  inputAttributeName,
  inputAttributeValue,
  labelAttributeName,
  labelAttributeValue,
}) {
  const _styleVariantMap = {
    Checkbox: "",
    Radio: "w-variant-c18f59b8-0331-9f8c-c106-08818710cc20",
    Toggle: "w-variant-05ff758a-80c8-4344-649b-149f87b62cc9",
    Button: "w-variant-e3978449-fef8-38a6-7f29-4e26ca4f8f53",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "form_ui_label", _activeStyleVariant)}
      tag="label"
      slot=""
      role="listitem"
      data-state="checked"
    >
      <_Builtin.DOM
        className={_utils.cx(_styles, "form_ui_input", _activeStyleVariant)}
        tag="input"
        slot=""
        type={type}
        name={name}
        required={required}
        checked={checked}
        value={value}
      />
      <_Builtin.DOM
        className={_utils.cx(
          _styles,
          "form_ui_visual_wrap",
          _activeStyleVariant
        )}
        tag="span"
        slot=""
      >
        <_Builtin.DOM
          className={_utils.cx(
            _styles,
            "form_ui_visual_inner",
            _activeStyleVariant
          )}
          tag="span"
          slot=""
        >
          <_Builtin.DOM
            className={_utils.cx(
              _styles,
              "form_ui_visual_icon",
              _activeStyleVariant
            )}
            tag="svg"
            slot=""
            viewBox="0 0 11 8"
            fill="none"
            aria-hidden="true"
          >
            <_Builtin.DOM
              tag="path"
              slot=""
              d="M1 4L4 7L10 1"
              stroke="currentColor"
              vector-effect="non-scaling-stroke"
              stroke-width="0.125rem"
            />
          </_Builtin.DOM>
        </_Builtin.DOM>
      </_Builtin.DOM>
      <_Builtin.DOM
        className={_utils.cx(_styles, "form_ui_text", _activeStyleVariant)}
        tag="span"
        slot=""
      >
        {label}
      </_Builtin.DOM>
    </_Component>
  );
}
