"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { VideoJs } from "./VideoJs";
import * as _utils from "./utils";
import _styles from "./VideoPlayer.module.css";

export function VideoPlayer({
  as: _Component = _Builtin.DOM,
  visibility = true,
  variant = "Wide",
  posterUrl = "https://cdn.prod.website-files.com/690b8ab67998629d0f1e957d/6937714060e6eefdc33f935b_video-poster.jpg",
  videoSrc = "https://restorationsouthside.us.getafile.online/intro-video-example",
}) {
  const _styleVariantMap = {
    Wide: "",
    Vertical: "w-variant-523cded9-f534-eecd-d272-c8e2e3b198b5",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "video_embed_wrap", _activeStyleVariant)}
      tag="div"
      slot=""
    >
      <_Builtin.DOM
        className={_utils.cx(_styles, "video_embed", _activeStyleVariant)}
        tag="video"
        slot=""
        preload="metadata"
        poster={posterUrl}
        data-video-type="standard"
        playsinline="true"
      >
        <_Builtin.DOM tag="source" slot="" src={videoSrc} type="video/mp4" />
      </_Builtin.DOM>
      <VideoJs />
    </_Component>
  ) : null;
}
