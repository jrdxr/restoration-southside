"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconArrowFull } from "./IconArrowFull";
import { VisualImage } from "./VisualImage";
import { MediaOverlay } from "./MediaOverlay";
import { Clickable } from "./Clickable";
import * as _utils from "./utils";
import _styles from "./FeatureCard.module.css";

export function FeatureCard({
  as: _Component = _Builtin.Block,

  clickableLink = {
    href: "#",
  },

  visualImageImage = "",
  title = "",
  visibility = true,
}) {
  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "card_feature_wrap", "u-box-shadow")}
      id={_utils.cx(
        _styles,
        "w-node-c6f7f279-9758-6572-e079-10a4a8300c13-a8300c13"
      )}
      tag="div"
      data-trigger="hover focus"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "card_feature_body")}
        tag="div"
      >
        <_Builtin.RichText
          className={_utils.cx(_styles, "", "card_feature_title")}
          tag="div"
          slot=""
        >
          {title}
        </_Builtin.RichText>
        <_Builtin.Block
          className={_utils.cx(_styles, "card_feature_arrow")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "button_arrow_element",
              "feature_card"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "button_arrow_icon")}
              tag="div"
              aria-hidden="true"
            >
              <IconArrowFull variant="Right" />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <VisualImage
        image={visualImageImage}
        variant="Cover"
        visibility={true}
        classes="card_feature_filter"
      />
      <MediaOverlay variant="Gradient" overlayStrength={30} visibility={true} />
      <Clickable link={clickableLink} />
    </_Component>
  ) : null;
}
