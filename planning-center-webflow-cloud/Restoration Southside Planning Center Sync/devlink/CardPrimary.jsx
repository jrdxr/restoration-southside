"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Clickable } from "./Clickable";
import * as _utils from "./utils";
import _styles from "./CardPrimary.module.css";

export function CardPrimary({
  as: _Component = _Builtin.DOM,
  visibility = true,
  variant = "Default",
  headingTag = "h3",
  headingText = "Lorem ipsum",
  paragraphVisibility = true,
  paragraphText = "",
  linkVisibility = true,
  linkText = "",

  linkUrl = {
    href: "#",
  },

  linkTarget,
  image = "",
  role = "none",
  classes,
  contentClasses = " ",
  style,
}) {
  const _styleVariantMap = {
    Default: "",
    Cover: "w-variant-51efa20c-c7be-48fe-973a-11367f19d622",
    Stacked: "w-variant-da648fa9-bbba-c8cb-e549-1d22cb8af97b",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "card_primary_wrap", _activeStyleVariant)}
      slot=""
      tag="div"
      _class={classes}
      style={style}
      role={role}
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
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "card_primary_visual",
              _activeStyleVariant
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(
                _styles,
                "card_primary_image",
                _activeStyleVariant
              )}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src={image}
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "card_primary_content",
              "u-margin-trim",
              _activeStyleVariant
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "card_primary_title",
                "u-text-style-h4",
                _activeStyleVariant
              )}
              tag={headingTag}
            >
              {headingText}
            </_Builtin.Heading>
            {paragraphVisibility ? (
              <_Builtin.RichText
                className={_utils.cx(
                  _styles,
                  "card_primary_text",
                  _activeStyleVariant
                )}
                tag="div"
                slot=""
              >
                {paragraphText}
              </_Builtin.RichText>
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
        <Clickable
          visibility={linkVisibility}
          screenReaderText={linkText}
          link={linkUrl}
          target={linkTarget}
          type="button"
          attributeName=""
          attributeValue=""
        />
      </_Builtin.Block>
    </_Component>
  ) : null;
}
