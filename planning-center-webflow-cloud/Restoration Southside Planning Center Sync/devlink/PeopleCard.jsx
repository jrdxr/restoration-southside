"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { TypographyPlain } from "./TypographyPlain";
import { RsButton } from "./RsButton";
import * as _utils from "./utils";
import _styles from "./PeopleCard.module.css";

export function PeopleCard({
  as: _Component = _Builtin.Block,
  headshot = "https://cdn.prod.website-files.com/694596af14e57f0c22a741a0/695d3c7b22756088453d8e33_placeholder.svg",
  name = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  jobTitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",

  email = {
    href: "#",
  },

  bioButton = true,
  emailButton = true,
  modalTrigger = "data-modal-trigger",
  modalTriggerValue,
  positionVisibility = true,
}) {
  return (
    <_Component className={_utils.cx(_styles, "person")} tag="article">
      <_Builtin.Block
        className={_utils.cx(_styles, "person_media_wrap")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "person_media")}
          width="auto"
          height="auto"
          loading="lazy"
          alt=""
          src={headshot}
        />
      </_Builtin.Block>
      <TypographyPlain
        text={name}
        variant="Text Large"
        classes="u-weight-bold u-margin-bottom-3 u-margin-top-4"
        tag="h3"
      />
      <TypographyPlain
        text={jobTitle}
        visibility={positionVisibility}
        variant="Text Main"
      />
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "u-flex-horizontal-wrap",
          "u-gap-4",
          "u-margin-top-auto"
        )}
        tag="div"
      >
        <RsButton
          visibility={bioButton}
          attributeName={modalTrigger}
          attributeValue={modalTriggerValue}
          variant="Link"
          icon={
            <IconArrowFull attributeName="data-rotate" attributeValue="-45" />
          }
          text="Read Bio"
        />
        <RsButton
          link={email}
          visibility={emailButton}
          variant="Link"
          text="Email"
          icon={<Email />}
        />
      </_Builtin.Block>
    </_Component>
  );
}
