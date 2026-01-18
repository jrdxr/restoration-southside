"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./RsDropdownLink.module.css";

export function RsDropdownLink({
  as: _Component = _Builtin.DOM,
  visibility = true,
  linkText = "Default Link",

  link = {
    href: "#",
  },
}) {
  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "nav_dropdown_item")}
      tag="li"
      slot=""
      data-trigger="hover-other focus-other"
    >
      <_Builtin.Link
        className={_utils.cx(_styles, "nav_dropdown_link")}
        button={false}
        block="inline"
        options={link}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "nav_dropdown_text")}
          tag="div"
        >
          {linkText}
        </_Builtin.Block>
      </_Builtin.Link>
    </_Component>
  ) : null;
}
