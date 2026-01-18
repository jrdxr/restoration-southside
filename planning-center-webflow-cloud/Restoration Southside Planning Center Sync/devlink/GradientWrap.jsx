"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./GradientWrap.module.css";

export function GradientWrap({
  as: _Component = _Builtin.Block,
  variant = "Base",
  slot,
  _class,
}) {
  const _styleVariantMap = {
    Base: "",
    "Base Reverse": "w-variant-e014fd26-18ca-c30a-7189-170f5aba0fcc",
    "Base 2": "w-variant-c7d78bfc-974c-16a8-34c1-ece13265f567",
    Dark: "w-variant-470bb2ff-cfc7-e21d-4cab-02e69630c7d7",
    Brand: "w-variant-5d61cc6a-2ac3-4ece-db40-28ef64d0ce98",
    "Brand-Secondary": "w-variant-cb82ae98-ed81-7930-59b7-0a2178cbd422",
    Accent: "w-variant-808dbaa9-94c2-8988-4f3c-daf6013d395a",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "gradient-wrap",
        "u-background-gradient",
        _activeStyleVariant
      )}
      tag="div"
    >
      {slot}
    </_Component>
  );
}
