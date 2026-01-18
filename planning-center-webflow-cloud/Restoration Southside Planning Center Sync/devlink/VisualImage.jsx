"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./VisualImage.module.css";

export function VisualImage({
  as: _Component = _Builtin.DOM,
  visibility = true,
  variant = "Wide 16 / 9",
  image = "https://cdn.prod.website-files.com/694596af14e57f0c22a741a0/695d3c7b22756088453d8e33_placeholder.svg",
  altText = "__wf_reserved_inherit",
  loading = "lazy",
  style,
  classes = " ",
  attributeName,
  attributeValue,
}) {
  const _styleVariantMap = {
    "Wide 2 / 1": "",
    "Wide 16 / 9": "w-variant-27d05669-180c-3169-9b64-0eda31f8d4d3",
    "Wide 3 / 2": "w-variant-57c7d8f5-d942-5de8-0712-e12fff699502",
    "Wide 5 / 4": "w-variant-8e41429f-9f9e-7697-357e-815bd3e59383",
    "Square 1 / 1": "w-variant-a5f35569-5171-ee3d-f7bb-c5b2372249ac",
    "Tall 4 / 5": "w-variant-35ea7d22-774e-1ba9-1dcc-8a392636f83d",
    "Tall 2 / 3": "w-variant-a93327ec-aace-62d3-860b-21ee12acd25a",
    Cover: "w-variant-4972adff-107c-1f37-d19c-526a2bf55c28",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "u-image-wrapper", _activeStyleVariant)}
      tag="div"
      slot=""
      _class={classes}
      style={style}
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "u-image", _activeStyleVariant)}
        loading={loading}
        width="auto"
        height="auto"
        src={image}
      />
    </_Component>
  ) : null;
}
