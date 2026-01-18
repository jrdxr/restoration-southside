"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TabLink.module.css";

export function TabLink({
  as: _Component = _Builtin.DOM,
  visibility = true,
  variant = "Link",
  text = "Tab Link",
  itemId,
  classes,
}) {
  const _styleVariantMap = {
    Link: "",
    Button: "w-variant-8ffc88d1-7ba2-15f6-9b67-306f6d86c1bd",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "tab_button_item", _activeStyleVariant)}
      tag="div"
      slot=""
      data-tab-item-id={itemId}
      _class={classes}
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "tab_button_text",
          "u-text-style-main",
          _activeStyleVariant
        )}
        tag="div"
      >
        {text}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "tab_button_line", _activeStyleVariant)}
        tag="div"
      />
    </_Component>
  ) : null;
}
