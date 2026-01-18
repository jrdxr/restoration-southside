"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Spacer } from "./Spacer";
import * as _utils from "./utils";
import _styles from "./Separator.module.css";

export function Separator({
  as: _Component = _Builtin.Block,
  variant = "Base",
  topSpace = null,
  bottomSpace = null,
  classes,
}) {
  const _styleVariantMap = {
    Base: "",
    Vertical: "w-variant-a7a73cbe-23ca-781f-e711-791466f96b01",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "u-separator-wrap", _activeStyleVariant)}
      tag="div"
    >
      <Spacer variant={topSpace} />
      <_Builtin.Block
        className={_utils.cx(_styles, "u-separator", _activeStyleVariant)}
        tag="div"
      />
      <Spacer variant={bottomSpace} />
    </_Component>
  );
}
