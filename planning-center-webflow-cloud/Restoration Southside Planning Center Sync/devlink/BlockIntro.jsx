"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { TypographyEyebrow } from "./TypographyEyebrow";
import { TypographyHeading } from "./TypographyHeading";
import { TypographyParagraph } from "./TypographyParagraph";
import { Block } from "./Block";
import * as _utils from "./utils";
import _styles from "./BlockIntro.module.css";

export function BlockIntro({
  as: _Component = _Builtin.DOM,
  variant = "Stacked",
  eyebrowHasEyebrow = false,
  eyebrowText = "",
  eyebrowClasses = " ",
  headingVariant = null,
  headingText = "",
  headingMaxWidth = -1,
  headingClasses = " ",
  headingId,
  ledeHasLede = true,
  ledeText = "",
  ledeMaxWidth = 60,
  ledeClasses = "u-rich-text",
  buttonsHasButtons = true,
  buttonsHasSecondaryButton = true,
  primaryButtonVariant = "Stacked",
  primaryButtonText = "Get Directions",

  primaryButtonLink = {
    href: "#",
  },

  primaryButtonType = "button",
  primaryButtonTarget,
  secondaryButtonVariant = null,
  secondaryButtonText = "Join Our Newsletter",

  secondaryButtonLink = {
    href: "#",
  },

  secondaryButtonType = "button",
  secondaryButtonTarget,
  secondaryButtonClasses,
  primaryButtonClasses,
  attributesAttributeName = "",
  attributesAttributeValue,
  classes,
  headingHeadingClasses = " ",
}) {
  const _styleVariantMap = {
    Stacked: "",
    Left: "w-variant-2aea87fe-e1b8-d63d-24fe-45d8f2b6c74e",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "intro", _activeStyleVariant)}
      tag="div"
      slot=""
      _class={classes}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "intro_text_wrap", _activeStyleVariant)}
        tag="div"
      >
        <TypographyEyebrow
          visibility={eyebrowHasEyebrow}
          text={eyebrowText}
          classes={eyebrowClasses}
        />
        <TypographyHeading
          variant={headingVariant}
          text={headingText}
          maxWidth={headingMaxWidth}
          classes={headingHeadingClasses}
          id={headingId}
        />
        <TypographyParagraph
          text={ledeText}
          visibility={ledeHasLede}
          maxWidth={ledeMaxWidth}
          classes="u-rich-text"
        />
      </_Builtin.Block>
      <Block
        visibility={buttonsHasButtons}
        content={
          <>
            <RsButton
              text={primaryButtonText}
              variant={primaryButtonVariant}
              link={primaryButtonLink}
              type={primaryButtonType}
              target={primaryButtonTarget}
              classes={primaryButtonClasses}
            />
            <RsButton
              text={secondaryButtonText}
              variant={secondaryButtonVariant}
              visibility={buttonsHasSecondaryButton}
              link={secondaryButtonLink}
              type={secondaryButtonType}
              target={secondaryButtonTarget}
              classes={secondaryButtonClasses}
            />
          </>
        }
        classes="u-flex-horizontal-wrap u-gap-2"
      />
    </_Component>
  );
}
