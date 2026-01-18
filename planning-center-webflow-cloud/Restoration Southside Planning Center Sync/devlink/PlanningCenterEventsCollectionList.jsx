"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Clickable } from "./Clickable";
import { VisualImage } from "./VisualImage";
import { MediaOverlay } from "./MediaOverlay";
import { RsButton } from "./RsButton";
import { CardPrimary20 } from "./CardPrimary20";
import * as _utils from "./utils";
import _styles from "./PlanningCenterEventsCollectionList.module.css";

export function PlanningCenterEventsCollectionList({
  as: _Component = _Builtin.Block,
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "slider_events_wrapper",
        "u-display-contents"
      )}
      tag="div"
      aria-label="Upcoming Events Carousel"
    >
      <_Builtin.NotSupported _atom="DynamoWrapper" />
    </_Component>
  );
}
