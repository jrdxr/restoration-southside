"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Spacer } from "./Spacer";
import { Layout } from "./Layout";
import * as _utils from "./utils";
import _styles from "./SectionCta.module.css";

export function SectionCta({
  as: _Component = _Builtin.DOM,
  topPadding = null,
  bottomPadding = null,
  layoutClasses = "u-theme-light u-background-2",
  typographyHeadingVariant = null,
  typographyHeadingText = "",
  typographyHeadingMaxWidth = 20,
  typographyHeadingClasses = " ",
  typographyHeadingId,
  typographyParagraphVariant = null,
  typographyParagraphText = "",
  typographyParagraphMaxWidth = 60,
  typographyParagraphClasses = "u-rich-text",
  typographyParagraphId,
  buttonMainVariant = null,
  buttonMainText = "Plan Your Visit",

  buttonMainLink = {
    href: "#",
  },

  buttonMainType = "button",
  buttonMainTarget,
  buttonMainClasses,
  buttonMainAttributeName,
  buttonMainAttributeValue,
  buttonMainClickableVisibility = true,
  buttonMainVisibility = true,
  typographyParagraphVisibility = true,
  typographyHeadingVisibility = true,
  buttonMainLinkLineVisibility = true,
  buttonMainVisibility2 = true,
  buttonMainVariant2 = null,
  logoVisibility = true,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "u-section")}
      tag="section"
      slot=""
      _class=""
      style=""
    >
      <Spacer variant={topPadding} />
      <_Builtin.Block className={_utils.cx(_styles, "u-container")} tag="div">
        <Layout
          classes={layoutClasses}
          variant="Card"
          column1={
            <>
              <Block
                visibility={logoVisibility}
                content={<BrandLogoMark variant="Button Coloring" />}
                classes="u-margin-bottom-2 u-margin-inline-auto"
                style="width: 3em;"
              />
              <TypographyHeading
                text={typographyHeadingText}
                variant={typographyHeadingVariant}
                maxWidth={typographyHeadingMaxWidth}
                classes={typographyHeadingClasses}
                visibility={typographyHeadingVisibility}
                id={typographyHeadingId}
              />
              <TypographyParagraph
                text={typographyParagraphText}
                variant={typographyParagraphVariant}
                maxWidth={typographyParagraphMaxWidth}
                classes={typographyParagraphClasses}
                visibility={typographyParagraphVisibility}
                id={typographyParagraphId}
              />
              <RsButton
                text={buttonMainText}
                link={buttonMainLink}
                type={buttonMainType}
                target={buttonMainTarget}
                classes={buttonMainClasses}
                attributeName={buttonMainAttributeName}
                attributeValue={buttonMainAttributeValue}
                clickableVisibility={buttonMainClickableVisibility}
                linkLineVisibility={buttonMainLinkLineVisibility}
                visibility={buttonMainVisibility2}
                variant={buttonMainVariant2}
              />
            </>
          }
        />
      </_Builtin.Block>
      <Spacer variant={bottomPadding} />
      <_Builtin.Block
        className={_utils.cx(_styles, "u-background-slot")}
        tag="div"
      />
    </_Component>
  );
}
