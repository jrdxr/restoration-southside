"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconArrow } from "./IconArrow";
import * as _utils from "./utils";
import _styles from "./AccordionItem.module.css";

export function AccordionItem({
  as: _Component = _Builtin.Block,
  visibility = true,
  headingTag = "h3",
  headingText = "This is some text inside of a div block.",
  content = "",
  classes,
}) {
  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "accordion_item")}
      tag="div"
      role="listitem"
      data-state=""
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "accordion_component")}
        tag="div"
      >
        <_Builtin.DOM
          className={_utils.cx(_styles, "accordion_toggle_heading")}
          slot=""
          tag={headingTag}
        >
          <_Builtin.DOM
            className={_utils.cx(_styles, "accordion_toggle_button")}
            tag="button"
            slot=""
            aria-expanded="false"
          >
            <_Builtin.DOM
              className={_utils.cx(
                _styles,
                "accordion_toggle_text",
                "u-text-style-h5"
              )}
              tag="span"
              slot=""
            >
              {headingText}
            </_Builtin.DOM>
            <_Builtin.DOM
              className={_utils.cx(_styles, "accordion_toggle_icon")}
              tag="span"
              slot=""
            >
              <IconArrow direction="Bottom" />
            </_Builtin.DOM>
          </_Builtin.DOM>
        </_Builtin.DOM>
        <_Builtin.Block
          className={_utils.cx(_styles, "accordion_content_wrap")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "accordion_content_padding")}
            tag="div"
          >
            <_Builtin.RichText
              className={_utils.cx(
                _styles,
                "accordion_content_text",
                "u-rich-text"
              )}
              tag="div"
              slot=""
            >
              {content}
            </_Builtin.RichText>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  ) : null;
}
