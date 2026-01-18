"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ListItem.module.css";

export function ListItem({ as: _Component = _Builtin.DOM, slot }) {
  return (
    <_Component
      className={_utils.cx(_styles, "li_component")}
      tag="div"
      slot=""
    >
      {slot}
    </_Component>
  );
}
