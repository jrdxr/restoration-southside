"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconX } from "./IconX";
import { Clickable } from "./Clickable";
import * as _utils from "./utils";
import _styles from "./ButtonClose.module.css";

export function ButtonClose({
  as: _Component = _Builtin.DOM,
  visibility = true,
  variant = "Primary / Medium",
  text = "Close",

  link = {
    href: "#",
  },

  classes,
  attribute1Name,
  attribute1Value,
  attribute2Name,
  attribute2Value,
}) {
  const _styleVariantMap = {
    "Primary / Medium": "",
    "Secondary / Medium": "w-variant-c144d67f-2c62-4dbf-0fd8-0b6056b717ec",
    "Primary / Large": "w-variant-7198e0ca-f9f4-9662-3fe9-d7114404c9cb",
    "Secondary / Large": "w-variant-c6d40e5e-3298-1af4-067d-37896ebd2a45",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "button_close_wrap", _activeStyleVariant)}
      tag="div"
      slot=""
      _class={classes}
      data-button=" "
      data-trigger="hover focus"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "button_close_element",
          _activeStyleVariant
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "button_close_icon",
            _activeStyleVariant
          )}
          tag="div"
          aria-hidden="true"
        >
          <IconX />
        </_Builtin.Block>
      </_Builtin.Block>
      <Clickable screenReaderText={text} link={link} />
    </_Component>
  ) : null;
}
