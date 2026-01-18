"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconArrow } from "./IconArrow";
import * as _utils from "./utils";
import _styles from "./RsDropdown.module.css";

export function RsDropdown({
  as: _Component = _Builtin.DropdownWrapper,
  link,
  dropdownText = "Services",
  expanded = "false",
  dropdownClass,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "nav_dropdown_component")}
      tag="div"
      delay={400}
      hover={true}
    >
      <_Builtin.DropdownToggle
        className={_utils.cx(_styles, "nav_links_link")}
        tag="div"
        data-state="expanded"
        aria-expanded={expanded}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "nav_links_text")}
          tag="div"
        >
          {dropdownText}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "nav_links_svg")}
          tag="div"
        >
          <IconArrow direction="Bottom" />
        </_Builtin.Block>
      </_Builtin.DropdownToggle>
      <_Builtin.DropdownList
        className={_utils.cx(_styles, "nav_dropdown_main_wrap")}
        tag="nav"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "nav_dropdown_main_content")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "nav_dropdown_main_scroll")}
            tag="div"
            data-lenis-prevent=""
          >
            <_Builtin.DOM
              className={_utils.cx(_styles, "nav_dropdown_list")}
              tag="ul"
              slot=""
            >
              {link}
            </_Builtin.DOM>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.DropdownList>
    </_Component>
  );
}
