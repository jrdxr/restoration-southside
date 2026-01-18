"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FormLabelText.module.css";

export function FormLabelText({
  as: _Component = _Builtin.DOM,
  visibility = true,
  variant = "Visible",
  tag = "span",
  text = "Name",
  classes,
}) {
  const _styleVariantMap = {
    Visible: "",
    Hidden: "w-variant-46933b79-cf19-81b4-bc00-8af5c19b08b3",
    Bold: "w-variant-e8e97384-daa0-7ce7-bc12-14efcd69bcd4",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "form_label_text", _activeStyleVariant)}
      slot=""
      tag={tag}
      _class={classes}
    >
      {text}
    </_Component>
  ) : null;
}
