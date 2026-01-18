"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { FormLabelText } from "./FormLabelText";
import * as _utils from "./utils";
import _styles from "./FormFieldset.module.css";

export function FormFieldset({
  as: _Component = _Builtin.DOM,
  visibility = true,
  variant = "Flex Vertical",
  legendVariant = "Flex Vertical",
  legendText = "Legend",
  slotRole = "none",
  classes = " ",
  attributeName,
  attributeValue,
  content,
}) {
  const _styleVariantMap = {
    "Flex Vertical": "",
    "Flex Horizontal": "w-variant-ccbf2df7-16d0-30d7-0afb-0df098785596",
    "Grid 2 Column": "w-variant-14c165fa-7397-02ef-8dc0-6e307b6c980f",
    "Grid 3 Column": "w-variant-5fdb0361-c340-58a0-00d3-b0e0b17257ad",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "form_fieldset_wrap", _activeStyleVariant)}
      tag="fieldset"
      slot=""
      _class={classes}
    >
      <FormLabelText text={legendText} variant={legendVariant} tag="legend" />
      {content}
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "u-embed-css", _activeStyleVariant)}
        value="%3Cstyle%3E%0A%40container%20(width%20%3C%2040em)%20%7B%0A%09.form_fieldset_list%3Ahas(.form_fieldset_list)%20%7B%20display%3A%20flex%3B%20%7D%0A%7D%0A%40container%20(width%20%3C%2018em)%20%7B%0A%09.form_fieldset_list%20%7B%20display%3A%20flex%3B%20%7D%0A%7D%0A%3C%2Fstyle%3E"
      />
    </_Component>
  ) : null;
}
