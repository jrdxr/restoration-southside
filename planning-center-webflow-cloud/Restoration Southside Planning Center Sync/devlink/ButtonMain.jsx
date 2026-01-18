"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Clickable } from "./Clickable";
import * as _utils from "./utils";
import _styles from "./ButtonMain.module.css";

export function ButtonMain({
  as: _Component = _Builtin.DOM,
  visibility = true,
  variant = "Primary",
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
}) {
  const _styleVariantMap = {
    Primary: "",
    Secondary: "w-variant-e85564cd-af30-a478-692b-71732aefb3ab",
    Link: "w-variant-625d5df4-ad91-f7dc-9e2f-2e69f3fd7400",
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
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "button_main_line",
            _activeStyleVariant
          )}
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  ) : null;
}
