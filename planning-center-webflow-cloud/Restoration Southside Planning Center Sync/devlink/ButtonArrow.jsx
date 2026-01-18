"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconArrowFull } from "./IconArrowFull";
import { Clickable } from "./Clickable";
import * as _utils from "./utils";
import _styles from "./ButtonArrow.module.css";

export function ButtonArrow({
  as: _Component = _Builtin.DOM,
  visibility = true,
  variant = "Primary / Medium",
  arrowDirection = "Primary / Medium",
  text = "Next",

  link = {
    href: "#",
  },

  classes,
  attributeName,
  attributeValue,
}) {
  const _styleVariantMap = {
    "Primary / Medium": "",
    "Secondary / Medium": "w-variant-bb0688d1-65b6-14b6-81e5-21e2cd39bbda",
    "Primary / Large": "w-variant-d7d7e32c-ac47-de0c-eb2d-07f19dfa19d2",
    "Secondary / Large": "w-variant-6c75cae2-0734-1bbf-191f-bfe0f8ed1797",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "button_arrow_wrap", _activeStyleVariant)}
      tag="div"
      slot=""
      _class={classes}
      data-button=" "
      data-trigger="hover focus"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "button_arrow_element",
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
          <IconArrowFull variant={arrowDirection} />
        </_Builtin.Block>
      </_Builtin.Block>
      <Clickable screenReaderText={text} link={link} />
    </_Component>
  ) : null;
}
