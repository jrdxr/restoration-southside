"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TypographyLongContent.module.css";

export function TypographyLongContent({
  as: _Component = _Builtin.RichText,
  visibility = true,
  text = "",
  maxWidth = 60,
  classes,
  id,
  variant = "Inherit",
}) {
  const _styleVariantMap = {
    Inherit: "",
    "Text Small": "w-variant-c7d99611-3309-3157-8af3-ddd895a44802",
    "Text Main": "w-variant-c7d99611-3309-3157-8af3-ddd895a44803",
    "Text Large": "w-variant-c7d99611-3309-3157-8af3-ddd895a44804",
    H6: "w-variant-c7d99611-3309-3157-8af3-ddd895a44805",
    H5: "w-variant-c7d99611-3309-3157-8af3-ddd895a44806",
    H4: "w-variant-c7d99611-3309-3157-8af3-ddd895a44807",
    H3: "w-variant-c7d99611-3309-3157-8af3-ddd895a44808",
    H2: "w-variant-c7d99611-3309-3157-8af3-ddd895a44809",
    H1: "w-variant-c7d99611-3309-3157-8af3-ddd895a4480a",
    Display: "w-variant-c7d99611-3309-3157-8af3-ddd895a4480b",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "u-rich-text", _activeStyleVariant)}
      tag="div"
      slot=""
      id={id}
    >
      {text}
    </_Component>
  ) : null;
}
