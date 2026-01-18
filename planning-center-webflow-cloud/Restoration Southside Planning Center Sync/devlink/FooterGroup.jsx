"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FooterGroup.module.css";

export function FooterGroup({
  as: _Component = _Builtin.Block,
  visibility = true,
  title = "Heading Text",
  footerLink,
}) {
  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "footer_group_wrap")}
      tag="section"
      data-trigger="group"
    >
      <_Builtin.Heading
        className={_utils.cx(
          _styles,
          "footer_group_title",
          "u-text-style-h6",
          "u-margin-bottom-text"
        )}
        tag="h3"
      >
        {title}
      </_Builtin.Heading>
      <_Builtin.Block
        className={_utils.cx(_styles, "footer_group_title")}
        tag="div"
      />
      {footerLink}
    </_Component>
  ) : null;
}
