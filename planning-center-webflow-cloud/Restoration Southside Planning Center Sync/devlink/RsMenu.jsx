"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./RsMenu.module.css";

export function RsMenu({ as: _Component = _Builtin.Block, dropdownOrLink }) {
  return (
    <_Component
      className={_utils.cx(_styles, "nav_links_component")}
      tag="nav"
      aria-label="Main"
    >
      <_Builtin.DOM
        className={_utils.cx(_styles, "nav_links_wrap")}
        tag="ul"
        slot=""
        id=""
      >
        {dropdownOrLink}
      </_Builtin.DOM>
    </_Component>
  );
}
