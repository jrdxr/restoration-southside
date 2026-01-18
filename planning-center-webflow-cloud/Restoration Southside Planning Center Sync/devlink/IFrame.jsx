"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./IFrame.module.css";

export function IFrame({
  as: _Component = _Builtin.DOM,
  visibility = true,
  classes,
  style,
  url = "https://www.youtube.com/embed/GPRcAZLuT3U",
  title = "YouTube video player",
}) {
  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "u-iframe-wrapper")}
      tag="div"
      slot=""
      _class={classes}
      style={style}
    >
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "u-embed-css")}
        value="%3Cstyle%3E%0Ahtml.site-scrollbar%20.c-iframe%20%7B%0A%09pointer-events%3A%20none%3B%0A%7D%0A%3C%2Fstyle%3E"
      />
      <_Builtin.DOM
        className={_utils.cx(_styles, "u-iframe")}
        tag="iframe"
        slot=""
        src={url}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen=" "
        frameborder="0"
      />
    </_Component>
  ) : null;
}
