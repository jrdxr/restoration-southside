"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Clickable } from "./Clickable";
import { IconArrowFull } from "./IconArrowFull";
import * as _utils from "./utils";
import _styles from "./RsButton.module.css";

export function RsButton({
  as: _Component = _Builtin.DOM,
  variant = "Primary",
  visibility = true,
  text = "Button Text",

  link = {
    href: "#",
  },

  type = "button",
  target,
  classes,
  attributeName,
  attributeValue,
  clickableVisibility = true,
  icon,
  linkLineVisibility = true,
}) {
  const _styleVariantMap = {
    Primary: "",
    Secondary: "w-variant-c29a465f-88b8-735e-8fcf-2720a5b6d564",
    Link: "w-variant-c29a465f-88b8-735e-8fcf-2720a5b6d565",
    "Link Reverse Icon": "w-variant-20f3056f-2b34-ebac-a8e4-1fd5d6cee744",
    "External / Small": "w-variant-370b28fb-1fe0-e053-f7b0-c59d256b9083",
    "Nav CTA": "w-variant-1f30b8d5-a3dc-6a85-91dd-8e0342c7c2a2",
    "Block Link": "w-variant-a16bcdf7-d8a5-4e78-83a0-f68a09b31001",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "button_main_wrap", _activeStyleVariant)}
      tag="div"
      slot=""
      _class={classes}
      data-button=" "
      data-trigger="hover focus"
    >
      <Clickable
        screenReaderText={text}
        link={link}
        type={type}
        target={target}
        visibility={clickableVisibility}
      />
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "button_main_element",
          _activeStyleVariant
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "button_main_text",
            "u-text-style-main",
            _activeStyleVariant
          )}
          tag="div"
          aria-hidden="true"
        >
          {text}
        </_Builtin.Block>
        {icon}
        {linkLineVisibility ? (
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "button_main_line",
              _activeStyleVariant
            )}
            tag="div"
          />
        ) : null}
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "external_icon_wrap",
            _activeStyleVariant
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "button_arrow_icon",
              _activeStyleVariant
            )}
            tag="div"
            aria-hidden="true"
          >
            <IconArrowFull variant="Right" />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  ) : null;
}
