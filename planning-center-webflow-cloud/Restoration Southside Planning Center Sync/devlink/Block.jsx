"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Block.module.css";

export function Block({
  as: _Component = _Builtin.DOM,
  visibility = true,
  classes = " ",
  style,
  tag = "div",
  attributeName,
  attributeValue,
  content,
}) {
  return visibility ? (
    <_Component slot="" tag={tag} style={style} _class={classes}>
      {content}
    </_Component>
  ) : null;
}
