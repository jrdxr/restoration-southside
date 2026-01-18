"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ContentWrapper.module.css";

export function ContentWrapper({
  as: _Component = _Builtin.DOM,
  visibility = true,
  variant = "Left",
  classes = " ",
  content,
}) {
  const _styleVariantMap = {
    Left: "",
    Center: "w-variant-4f54624e-ceb1-0769-a238-365d5e220b70",
    Right: "w-variant-405b6754-709a-81de-bf32-f0102c0c7aa2",
    "Center Mobile": "w-variant-e98b91c1-a8bf-9b6d-a119-f398c9e3f46b",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "u-display-contents", _activeStyleVariant)}
      slot=""
      tag="div"
    >
      {content}
    </_Component>
  ) : null;
}
