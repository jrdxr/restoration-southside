"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Grid.module.css";

export function Grid({
  as: _Component = _Builtin.DOM,
  visibility = true,
  classes = " ",
  variant = "Default",
  largeScreen = 2,
  mediumScreen = 1,
  smallScreen,
  smallestScreen,
  minimumColumnSize = 12,
  style,
  role = "none",
  content,
}) {
  const _styleVariantMap = {
    Default: "",
    "Self Contained": "w-variant-b8204f2e-764d-b421-dc96-2c59d3054271",
    Autofit: "w-variant-d58244bf-290f-ebb3-3aa0-352d6fa8e84f",
    Autofill: "w-variant-129319ac-a2cd-9e88-2ebd-a33b4bb85fa5",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "u-grid-wrapper", _activeStyleVariant)}
      slot=""
      tag="div"
      style={style}
      _class={classes}
      data-number={numberToText(-1)(minimumColumnSize)}
    >
      {content}
    </_Component>
  ) : null;
}
