"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TypographyEyebrow.module.css";

export function TypographyEyebrow({
  as: _Component = _Builtin.DOM,
  visibility = true,
  text = "",
  classes = " ",
}) {
  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "u-eyebrow-wrapper")}
      tag="div"
      slot=""
      _class={classes}
    >
      <_Builtin.RichText
        className={_utils.cx(_styles, "u-eyebrow-text", "u-text-style-main")}
        tag="div"
        slot=""
      >
        {text}
      </_Builtin.RichText>
    </_Component>
  ) : null;
}
