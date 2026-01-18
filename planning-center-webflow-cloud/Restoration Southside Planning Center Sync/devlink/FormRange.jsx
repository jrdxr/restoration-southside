"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { FormLabelText } from "./FormLabelText";
import * as _utils from "./utils";
import _styles from "./FormRange.module.css";

export function FormRange({
  as: _Component = _Builtin.DOM,
  visibility = true,
  classes,
  labelVariant = null,
  label = "Label",
  name = "Field Name",
  id = "field-id",
  value = 50,
  min,
  max = 100,
  step = 1,
  outputUnit = "%",
  required,
  attributeName,
  attributeValue,
}) {
  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "form_range_wrap")}
      tag="div"
      slot=""
      data-number={numberToText(-1)(value)}
    >
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "u-embed-css")}
        value="%3Cstyle%3E%0A.form_range_wrap%20%7B%0A%09--progress%3A%200.5%3B%0A%20%20--thumb-size%3A%202rem%3B%0A%20%20--thumb-radius%3A%20100vw%3B%0A%20%20--thumb-color%3A%20transparent%3B%0A%7D%0Ainput%5Btype%3D%22range%22%5D%20%7B%0A%09appearance%3A%20none%3B%0A%7D%0Ainput%5Btype%3D%22range%22%5D%3A%3A-webkit-slider-thumb%20%7B%0A%09cursor%3A%20grab%3B%0A%20%20appearance%3A%20none%3B%0A%20%20width%3A%20var(--thumb-size)%3B%0A%20%20aspect-ratio%3A%201%20%2F%201%3B%0A%20%20border-radius%3A%20var(--thumb-radius)%3B%0A%20%20background%3A%20var(--thumb-color)%3B%0A%7D%0Ainput%5Btype%3D%22range%22%5D%3A%3A-moz-range-thumb%20%7B%0A%09cursor%3A%20grab%3B%0A%20%20appearance%3A%20none%3B%0A%20%20width%3A%20var(--thumb-size)%3B%0A%20%20aspect-ratio%3A%201%20%2F%201%3B%0A%20%20border-radius%3A%20var(--thumb-radius)%3B%0A%20%20background%3A%20var(--thumb-color)%3B%0A%7D%0Ainput%5Btype%3D%22range%22%5D%3A%3A-webkit-slider-thumb%3Aactive%20%7B%0A%20%20cursor%3A%20grabbing%3B%0A%7D%0Ainput%5Btype%3D%22range%22%5D%3A%3A-moz-range-thumb%3Aactive%20%7B%0A%20%20cursor%3A%20grabbing%3B%0A%7D%0A%3C%2Fstyle%3E%0A%0A%3Cnoscript%3E%3Cstyle%3E%0A.form_range_wrap%20%7B%20--thumb-color%3A%20currentColor%3B%20%7D%0A.form_range_fill%2C%20.form_range_thumb_wrap%20%7B%20display%3A%20none%3B%20%7D%0A%3C%2Fstyle%3E%3C%2Fnoscript%3E"
      />
      <_Builtin.DOM
        className={_utils.cx(_styles, "form_label_wrap")}
        tag="label"
        slot=""
      >
        <FormLabelText text={label} variant={labelVariant} />
        <_Builtin.DOM
          className={_utils.cx(_styles, "form_range_element")}
          tag="span"
          slot=""
        >
          <_Builtin.DOM
            className={_utils.cx(_styles, "form_range_input")}
            tag="input"
            slot=""
            name={name}
            type="range"
            required={required}
            value={numberToText(-1)(value)}
            _class={classes}
            min={numberToText(-1)(min)}
            max={numberToText(-1)(max)}
            step={numberToText(-1)(step)}
            id={id}
          />
          <_Builtin.DOM
            className={_utils.cx(_styles, "form_range_fill")}
            tag="span"
            slot=""
          />
          <_Builtin.DOM
            className={_utils.cx(_styles, "form_range_thumb_wrap")}
            tag="span"
            slot=""
          >
            <_Builtin.DOM
              className={_utils.cx(_styles, "form_range_thumb_element")}
              tag="span"
              slot=""
            />
          </_Builtin.DOM>
        </_Builtin.DOM>
      </_Builtin.DOM>
      <_Builtin.DOM
        className={_utils.cx(_styles, "form_range_output_wrap")}
        tag="span"
        slot=""
      >
        <_Builtin.DOM
          className={_utils.cx(_styles, "form_range_output_element")}
          tag="ouput"
          slot=""
          _for={id}
        >
          <_Builtin.DOM
            className={_utils.cx(_styles, "form_range_output_value")}
            tag="span"
            slot=""
          >
            {_utils.formatNumber(value, -1)}
          </_Builtin.DOM>
          <_Builtin.DOM tag="span" slot="">
            {outputUnit}
          </_Builtin.DOM>
        </_Builtin.DOM>
      </_Builtin.DOM>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "u-embed-js")}
        value="%3Cscript%3E%0Adocument.addEventListener(%22DOMContentLoaded%22%2C%20()%20%3D%3E%20%7B%0A%20%20document.querySelectorAll(%22.form_range_wrap%22).forEach((component)%20%3D%3E%20%7B%0A%20%20%20%20if%20(component.dataset.scriptInitialized)%20return%3B%0A%20%20%20%20component.dataset.scriptInitialized%20%3D%20%22true%22%3B%0A%0A%20%20%20%20const%20input%20%3D%20component.querySelector(%22input%5Btype%3D'range'%5D%22)%3B%0A%20%20%20%20const%20output%20%3D%20component.querySelector(%22.form_range_output_value%22)%3B%0A%20%20%20%20%0A%20%20%20%20const%20update%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20const%20min%20%3D%20input.min%20%3F%20%2Binput.min%20%3A%200%3B%0A%20%20%20%20%20%20const%20max%20%3D%20input.max%20%3F%20%2Binput.max%20%3A%20100%3B%0A%20%20%20%20%20%20const%20val%20%3D%20%2Binput.value%20%7C%7C%20min%3B%0A%20%20%20%20%20%20const%20progress%20%3D%20(val%20-%20min)%20%2F%20(max%20-%20min)%3B%0A%20%20%20%20%20%20component.style.setProperty(%22--progress%22%2C%20progress)%3B%0A%09%09%09if%20(output)%20output.textContent%20%3D%20val%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20input.addEventListener(%22input%22%2C%20update)%3B%0A%20%20%20%20update()%3B%0A%20%20%7D)%3B%0A%7D)%3B%0A%3C%2Fscript%3E"
      />
    </_Component>
  ) : null;
}
