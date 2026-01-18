"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./StickyFeatureContent.module.css";

export function StickyFeatureContent({
  as: _Component = _Builtin.DOM,
  contents,
  featureId,
  visualImageMobileOnly,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "sticky_content_item")}
      tag="div"
      slot=""
      data-feature={featureId}
    >
      {contents}
      <_Builtin.Block
        className={_utils.cx(_styles, "sticky_content_image")}
        tag="div"
      >
        {visualImageMobileOnly}
      </_Builtin.Block>
    </_Component>
  );
}
