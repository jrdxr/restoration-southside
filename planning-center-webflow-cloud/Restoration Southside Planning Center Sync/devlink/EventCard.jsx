"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Clickable } from "./Clickable";
import { VisualImage } from "./VisualImage";
import { MediaOverlay } from "./MediaOverlay";
import { RsButton } from "./RsButton";
import * as _utils from "./utils";
import _styles from "./EventCard.module.css";

export function EventCard({
  as: _Component = _Builtin.Block,
  date = "Event Date",
  time = "Event Time",
  title = "Event Title Placeholder",
  ctaText = "View Event",
  cardImage = "https://cdn.prod.website-files.com/694596af14e57f0c22a741a0/694596af14e57f0c22a741d4_b16175113d4bf879cb6e602fcdc53752_placeholder.png",

  eventLink = {
    href: "#",
    target: "_blank",
  },

  timeVisibility = true,
}) {
  return (
    <_Component className={_utils.cx(_styles, "card_event_wrap")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "card_event_header")}
        tag="div"
      >
        <Clickable
          screenReaderText={title}
          link={eventLink}
          type="a"
          target="_blank"
        />
        <_Builtin.Heading
          className={_utils.cx(_styles, "u-text", "card_event_title")}
          tag="h3"
          aria-hidden="true"
        >
          {title}
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "card_event_body")}
        tag="div"
      >
        <VisualImage image={cardImage} variant="Cover" visibility={true} />
        <MediaOverlay variant="Base" overlayStrength={60} visibility={true} />
        <_Builtin.Block
          className={_utils.cx(_styles, "card_event_info")}
          tag="div"
        >
          <_Builtin.Paragraph
            className={_utils.cx(_styles, "card_event_date", "u-weight-bold")}
          >
            {date}
          </_Builtin.Paragraph>
          {timeVisibility ? (
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "card_event_time")}
            >
              {time}
            </_Builtin.Paragraph>
          ) : null}
        </_Builtin.Block>
        <RsButton
          link={eventLink}
          variant="External / Small"
          clickableVisibility={false}
          text="View Event"
          type="a"
        />
      </_Builtin.Block>
    </_Component>
  );
}
