"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { VisualImage } from "./VisualImage";
import * as _utils from "./utils";
import _styles from "./StickyFeatureDesktopImage.module.css";

export function StickyFeatureDesktopImage({
  as: _Component = _Builtin.Block,
  image = "",
  featureId,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "sticky_media_wrap")}
      tag="div"
      data-feature={featureId}
    >
      <VisualImage
        image={image}
        style="  border-radius: var(--radius--main) 0 0 var(--radius--main);"
        variant="Cover"
      />
    </_Component>
  );
}
