"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FooterLink.module.css";

export function FooterLink({
  as: _Component = _Builtin.DOM,
  visibility = true,
  text = "Link Text Here",

  link = {
    href: "#",
  },
}) {
  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "footer_group_item")}
      tag="div"
      slot=""
      data-trigger="hover-other focus-other"
      role="listitem"
    >
      <_Builtin.Link
        className={_utils.cx(_styles, "footer_link_wrap")}
        button={false}
        block="inline"
        options={link}
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "footer_link_text",
            "u-text-style-small"
          )}
          tag="div"
        >
          {text}
        </_Builtin.Block>
      </_Builtin.Link>
    </_Component>
  ) : null;
}
