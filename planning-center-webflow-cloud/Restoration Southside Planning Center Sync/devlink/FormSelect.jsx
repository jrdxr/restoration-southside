"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { FormLabelText } from "./FormLabelText";
import * as _utils from "./utils";
import _styles from "./FormSelect.module.css";

export function FormSelect({
  as: _Component = _Builtin.DOM,
  visibility = true,
  labelVariant = null,
  label = "Label",
  name = "Name",
  required,
  allowMultiSelect,
  classes,
  attributeName,
  attributeValue,
  formSelectOption,
}) {
  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "form_label_wrap")}
      tag="label"
      slot=""
      data-trigger="focus"
      _class={classes}
    >
      <FormLabelText text={label} variant={labelVariant} />
      <_Builtin.DOM
        className={_utils.cx(_styles, "form_select_wrap")}
        tag="span"
        slot=""
      >
        <_Builtin.DOM
          className={_utils.cx(_styles, "form_field")}
          tag="select"
          slot=""
          name={name}
          multiple={allowMultiSelect}
          required={required}
        >
          {formSelectOption}
        </_Builtin.DOM>
        <_Builtin.DOM
          className={_utils.cx(_styles, "form_select_icon")}
          tag="svg"
          slot=""
          width="100%"
          viewBox="0 0 6 5"
          fill="none"
          aria-hidden="true"
        >
          <_Builtin.DOM
            tag="path"
            slot=""
            d="M0.5 1L3 3.5L5.5 1"
            stroke="currentColor"
            stroke-width="0.125rem"
            vector-effect="non-scaling-stroke"
          />
        </_Builtin.DOM>
      </_Builtin.DOM>
    </_Component>
  ) : null;
}
