"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Clickable } from "./Clickable";
import * as _utils from "./utils";
import _styles from "./CardPrimary20.module.css";

export function CardPrimary20({
  as: _Component = _Builtin.DOM,
  linkLinkVisibility = true,
  linkLinkText = "",

  linkLinkUrl = {
    href: "#",
  },

  linkLinkTarget,
  visibility = true,
  role = "none",
  styleBackgroundImage = true,
  styleImage = "",
  styleClasses,
  styleContentClasses = " ",
  styleStyle,
  styleBackgroundColorOverride,
  variant = "Default",
  contentHasEyebrow = false,
  contentEyebrowSlot,
  contentHasTitle = true,
  contentTitleSlot,
  contentHasButton = false,
  contentButtonSlot,
  contentHasParagraph = true,
  contentParagraphSlot,
  contentVisualSlot,
}) {
  const _styleVariantMap = {
    Default: "",
    Cover: "w-variant-de273dc4-6eb7-86d0-3193-da7954199647",
    Stat: "w-variant-de273dc4-6eb7-86d0-3193-da7954199648",
    Stacked: "w-variant-de273dc4-6eb7-86d0-3193-da7954199649",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "card_primary_wrap", _activeStyleVariant)}
      slot=""
      tag="div"
      _class={styleClasses}
      style={styleStyle}
      role={role}
      background-color={styleBackgroundColorOverride}
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "card_primary_group",
          _activeStyleVariant
        )}
        tag="div"
        data-trigger="hover-if-clickable focus"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "card_primary_element",
            _activeStyleVariant
          )}
          tag="div"
        >
          {contentVisualSlot}
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "card_primary_content",
              "u-margin-trim",
              _activeStyleVariant
            )}
            tag="div"
          >
            {contentEyebrowSlot}
            {contentTitleSlot}
            {contentParagraphSlot}
            {contentButtonSlot}
          </_Builtin.Block>
        </_Builtin.Block>
        <Clickable
          visibility={linkLinkVisibility}
          screenReaderText={linkLinkText}
          link={linkLinkUrl}
          target={linkLinkTarget}
          type="button"
          attributeName=""
          attributeValue=""
        />
      </_Builtin.Block>
    </_Component>
  ) : null;
}
