"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { VideoJs } from "./VideoJs";
import * as _utils from "./utils";
import _styles from "./AutoplayVideoPlayer.module.css";

export function AutoplayVideoPlayer({
  as: _Component = _Builtin.DOM,
  visibility = true,
  posterUrl,
  videoSrc = "https://restorationsouthside.us.getafile.online/rs-homepage-placeholder",
  variant = "Wide",
}) {
  const _styleVariantMap = {
    Wide: "",
    Vertical: "w-variant-6dc8f19d-70fa-21fc-f7a8-2d2e0e58b928",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "video_embed_wrap", _activeStyleVariant)}
      tag="div"
      slot=""
    >
      <_Builtin.DOM
        className={_utils.cx(
          _styles,
          "video_embed",
          "bg-player",
          _activeStyleVariant
        )}
        tag="video"
        slot=""
        preload="metadata"
        poster={posterUrl}
        autoplay="true"
        muted="true"
        loop="true"
        playsinline="true"
        data-video-type="bg-w-controls"
      >
        <_Builtin.DOM tag="source" slot="" src={videoSrc} type="video/mp4" />
      </_Builtin.DOM>
      <VideoJs />
    </_Component>
  ) : null;
}
