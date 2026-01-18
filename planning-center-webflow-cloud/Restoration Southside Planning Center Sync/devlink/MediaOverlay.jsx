"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./MediaOverlay.module.css";

export function MediaOverlay({
  as: _Component = _Builtin.DOM,
  visibility = true,
  variant = "Base",
  overlayStrength = 70,
  classes = " ",
}) {
  const _styleVariantMap = {
    Base: "",
    Gradient: "w-variant-9653c0cc-21fc-fb82-1373-c98b1644e5a8",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "u-overlay", _activeStyleVariant)}
      tag="div"
      slot=""
      _class={classes}
      data-number={numberToText(-1)(overlayStrength)}
    />
  ) : null;
}
