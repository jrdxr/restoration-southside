"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Spacer } from "./Spacer";
import { ContentWrapper } from "./ContentWrapper";
import { Block } from "./Block";
import * as _utils from "./utils";
import _styles from "./SectionCustomDuplicateThis.module.css";

export function SectionCustomDuplicateThis({
  as: _Component = _Builtin.DOM,
  sectionVisibility = true,
  sectionTheme = "Inherit",
  eyebrowVisibility = true,
  eyebrowText = "",
  headingText = "",
  paragraphVisibility = true,
  paragraphText = "",
  buttonGroupVisibility = true,
  button1Visibility = true,
  button1Text = "Button Text",

  button1Link = {
    href: "#",
  },

  button2Visibility = true,
  button2Text = "Button Text",

  button2Link = {
    href: "#",
  },

  imageVisibility = true,
  imageFile = "https://cdn.prod.website-files.com/694596af14e57f0c22a741a0/694596af14e57f0c22a741d4_b16175113d4bf879cb6e602fcdc53752_placeholder.png",
  imageLoading = "lazy",
  videoVisibility = false,
  videoUrl,
  sectionPaddingTop = null,
  sectionPaddingBottom = null,
  sectionId,
}) {
  const _styleVariantMap = {
    Inherit: "",
    Light: "w-variant-f3a81397-d460-3add-9beb-5ec7af47907a",
    Dark: "w-variant-b4d321b1-05d4-6b05-8ab2-dfbc2f41ee4e",
    Brand: "w-variant-bb2c68bd-fd74-aa1e-69b0-e84595dd4ec8",
  };

  const _activeStyleVariant = _styleVariantMap[sectionTheme];

  return sectionVisibility ? (
    <_Component
      className={_utils.cx(
        _styles,
        "section_wrap",
        "u-section",
        _activeStyleVariant
      )}
      tag="section"
      slot=""
      id={sectionId}
    >
      <Spacer variant={sectionPaddingTop} />
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "section_contain",
          "u-container",
          _activeStyleVariant
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "section_layout",
            "u-grid-autofit",
            _activeStyleVariant
          )}
          tag="div"
        >
          <ContentWrapper
            content={
              <>
                <TypographyEyebrow
                  text={eyebrowText}
                  visibility={eyebrowVisibility}
                />
                <TypographyHeading text={headingText} />
                <TypographyParagraph
                  text={paragraphText}
                  visibility={paragraphVisibility}
                />
                <ButtonWrapper
                  visibility={buttonGroupVisibility}
                  content={
                    <>
                      <RsButton />
                      <RsButton variant="Secondary" />
                    </>
                  }
                />
              </>
            }
          />
          <Block
            classes="u-position-relative u-cover u-radius-small u-background-skeleton u-ratio-16-9 u-overflow-clip"
            content={
              <>
                <VisualImage
                  visibility={imageVisibility}
                  image={imageFile}
                  loading={imageLoading}
                  variant="Cover"
                  classes=" "
                />
                <VisualVideo
                  url={videoUrl}
                  visibility={videoVisibility}
                  classes=" "
                  variant="Cover"
                />
              </>
            }
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <Spacer variant={sectionPaddingBottom} />
    </_Component>
  ) : null;
}
