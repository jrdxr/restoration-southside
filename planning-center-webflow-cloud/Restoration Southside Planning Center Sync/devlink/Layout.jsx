"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Layout.module.css";

export function Layout({
  as: _Component = _Builtin.DOM,
  visibility = true,
  variant = "Stack",
  classes,
  column1Classes = " ",
  column2Classes = " ",
  column1,
  column2,
}) {
  const _styleVariantMap = {
    Stack: "",
    "Stack Centered": "w-variant-d69d5003-e9bc-b347-4e02-eb46976beb1c",
    Columns: "w-variant-558793eb-2b07-490b-9842-2d7e6f6bf325",
    "Columns Reversed": "w-variant-1261a7e4-2c05-3b0b-2126-d399890906b8",
    "Sticky Left": "w-variant-81232c92-6578-ef9a-1e3e-35e3204ae0fd",
    Breakout: "w-variant-4fee4cc0-701f-2817-944f-2c0261b9c2f3",
    "Breakout Reversed": "w-variant-6bb5e515-55a9-1fc8-d29b-ff898d8b40f7",
    Full: "w-variant-58b19052-6f23-ab5e-5e89-54288af57e85",
    "Full Reversed": "w-variant-560ed4d9-9e8c-5c39-4619-fc154cdf9f19",
    Contain: "w-variant-31f8ed75-2c88-945a-a737-1b9b50b4494b",
    "Contain Reversed": "w-variant-329f6899-ba0f-e4db-0449-3c5b8ba4f388",
    Card: "w-variant-ebfcdcb1-ac53-1b15-fcb9-eaeda25808f5",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "u-layout-wrapper", _activeStyleVariant)}
      tag="div"
      slot=""
      _class={classes}
    >
      <_Builtin.DOM
        className={_utils.cx(_styles, "u-layout", _activeStyleVariant)}
        tag="div"
        slot=""
      >
        {column1}
        {column2}
      </_Builtin.DOM>
    </_Component>
  ) : null;
}
