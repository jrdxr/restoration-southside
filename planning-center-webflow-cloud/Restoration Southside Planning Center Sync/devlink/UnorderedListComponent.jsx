"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./UnorderedListComponent.module.css";

export function UnorderedListComponent({
  as: _Component = _Builtin.DOM,
  uDisplayContents,
  classes,
  style,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "ul_component")}
      tag="ul"
      slot=""
      role="list"
      _class={classes}
      style={style}
    >
      {uDisplayContents}
    </_Component>
  );
}
