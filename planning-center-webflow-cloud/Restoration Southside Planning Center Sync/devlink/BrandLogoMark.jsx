"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BrandLogoMark.module.css";

export function BrandLogoMark({
  as: _Component = _Builtin.DOM,
  variant = "Static Coloring",
  classes,
  style,
}) {
  const _styleVariantMap = {
    "Static Coloring": "",
    "Button Coloring": "w-variant-79b3923c-4a19-c1b2-6145-c420f6c99330",
    "Nav Coloring": "w-variant-1254a3c2-1349-5e24-a436-dc4fa7545228",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "svg_logo_mark", _activeStyleVariant)}
      tag="svg"
      slot=""
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 40 55"
      fill="none"
      _class={classes}
      style={style}
    >
      <_Builtin.DOM
        className={_utils.cx(_styles, "logo_secondary", _activeStyleVariant)}
        tag="path"
        slot=""
        d="M29.5 44.17H39.33V24.5H29.5V44.17ZM27.04 24.5H22.12V54.01H27.04V24.5ZM39.33 54.01H29.5V46.63H39.33V54.01Z"
      />
      <_Builtin.DOM
        className={_utils.cx(_styles, "logo_primary", _activeStyleVariant)}
        tag="path"
        slot=""
        d="M17.21 24.5H0V34.33H17.21V24.5ZM7.38 54.01H17.21V36.79H7.38V54.01ZM4.92 54.01H0V36.79H4.92V54.01Z"
      />
      <_Builtin.DOM
        className={_utils.cx(_styles, "logo_primary", _activeStyleVariant)}
        tag="path"
        slot=""
        d="M39.33 12.21V7.29C39.33 7.29 38.51 6.33 36.87 5.11C36.74 5.01 36.62 4.92 36.48 4.82C35.88 4.4 35.2 3.96 34.41 3.51C33.71 3.12 32.92 2.73 32.06 2.36H31.95V2.31C31.19 1.98 30.37 1.67 29.49 1.39C28.72 1.14 27.9 0.91 27.03 0.72C26.25 0.54 25.43 0.38 24.57 0.26C23.78 0.15 22.96 0.06 22.11 0V12.2H39.32L39.33 12.21ZM39.33 19.59H22.12V14.67H39.33V19.59Z"
      />
      <_Builtin.DOM
        className={_utils.cx(_styles, "logo_secondary", _activeStyleVariant)}
        tag="path"
        slot=""
        d="M0 7.30001V12.22H9.83V1.40001C8.95 1.68001 8.13 2.00001 7.37 2.32001V2.37001H7.26C6.4 2.74001 5.62 3.13001 4.91 3.52001C4.12 3.96001 3.44 4.41001 2.84 4.83001C2.7 4.93001 2.58 5.02001 2.45 5.12001C0.82 6.34001 0 7.29001 0 7.29001V7.30001ZM0 19.59H9.83V14.67H0V19.59ZM12.29 19.59V0.73001C13.07 0.55001 13.89 0.39001 14.75 0.27001C15.54 0.16001 16.36 0.0700098 17.21 0.0100098V19.59H12.29Z"
      />
    </_Component>
  );
}
