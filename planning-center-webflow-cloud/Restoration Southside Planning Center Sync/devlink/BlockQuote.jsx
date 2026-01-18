"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { TypographyParagraph } from "./TypographyParagraph";
import { VisualImage } from "./VisualImage";
import * as _utils from "./utils";
import _styles from "./BlockQuote.module.css";

export function BlockQuote({
  as: _Component = _Builtin.DOM,
  quoteVariant = null,
  quoteText = "",
  visualImageVisibility = true,
  visualImageImage = "",
  citationText = "",
  citationMaxWidth = 60,
}) {
  return (
    <_Component tag="blockquote" slot="" id="">
      <TypographyParagraph
        variant={quoteVariant}
        text={quoteText}
        classes="u-margin-bottom-0 u-alignment-center u-width-fit"
      />
      <_Builtin.DOM
        className={_utils.cx(_styles, "quote_cite")}
        tag="cite"
        slot=""
        id=""
      >
        <VisualImage
          visibility={visualImageVisibility}
          image={visualImageImage}
          classes="u-radius-round u-ratio-1-1 u-display-inline"
          style="max-width: 90px;"
          variant="Square 1 / 1"
        />
        <_Builtin.Block tag="div">
          <TypographyParagraph
            text={citationText}
            maxWidth={citationMaxWidth}
            classes="u-rich-text u-margin-bottom-0"
          />
        </_Builtin.Block>
      </_Builtin.DOM>
    </_Component>
  );
}
