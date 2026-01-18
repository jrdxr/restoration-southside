"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Section } from "./Section";
import * as _utils from "./utils";
import _styles from "./SectionFindUs.module.css";

export function SectionFindUs({
  as: _Component = _Builtin.Block,
  sectionVariant = null,
  sectionPaddingTop = null,
  sectionPaddingBottom = null,
  sectionTag = "section",
  sectionSectionClasses,
  sectionContainerClasses = " ",
  sectionStyle,
  sectionAttributeName,
  sectionAttributeValue,
  sectionIdAttributeName = "id",
  sectionIdAttributeValue = "find-us",
}) {
  return (
    <_Component className={_utils.cx(_styles, "u-display-contents")} tag="div">
      <Section
        paddingBottom={sectionPaddingBottom}
        variant={sectionVariant}
        paddingTop={sectionPaddingTop}
        tag={sectionTag}
        sectionClasses={sectionSectionClasses}
        containerClasses={sectionContainerClasses}
        style={sectionStyle}
        attributeName={sectionAttributeName}
        attributeValue={sectionAttributeValue}
        idAttributeName={sectionIdAttributeName}
        idAttributeValue={sectionIdAttributeValue}
        container={
          <Layout
            column1={
              <>
                <BlockIntro
                  variant="Left"
                  buttonsHasButtons={false}
                  headingText={
                    <_Builtin.Heading tag="h2">{"Find Us"}</_Builtin.Heading>
                  }
                  ledeText={
                    <_Builtin.Paragraph>
                      {
                        "We're located in the Southside of Chattanooga off Broad Street. Here's how to find us and get in touch. We hope to see you soon!"
                      }
                    </_Builtin.Paragraph>
                  }
                />
                <ButtonWrapper
                  content={
                    <>
                      <RsButton
                        variant="Link Reverse Icon"
                        icon={<Email />}
                        text={
                          <>
                            <_Builtin.Strong>{"Email: "}</_Builtin.Strong>
                            {"info@restorationsouthside.org"}
                          </>
                        }
                        link={{
                          href: "mailto:info@restorationsouthside.org",
                        }}
                        linkLineVisibility={false}
                        classes="u-border-none"
                      />
                      <RsButton
                        variant="Link Reverse Icon"
                        icon={<Phone />}
                        text={
                          <>
                            <_Builtin.Strong>{"Phone: "}</_Builtin.Strong>
                            {"(423) 779-7847"}
                          </>
                        }
                        link={{
                          href: "tel:+14237797847",
                        }}
                        classes="u-border-none"
                        linkLineVisibility={false}
                      />
                      <RsButton
                        variant="Link Reverse Icon"
                        text={
                          <>
                            <_Builtin.Strong>{"Address: "}</_Builtin.Strong>
                            {"3146 Broad Street Chattanooga, TN 37408"}
                          </>
                        }
                        link={{
                          href: "https://www.google.com/maps/dir//Restoration+Southside+Church,+3146+Broad+St,+Chattanooga,+TN+37408/@35.0194321,-85.3195183,17z/data=!4m17!1m7!3m6!1s0x88605d909249f7a7:0x9ba3ca9f74f82e29!2sRestoration+Southside+Church!8m2!3d35.0194321!4d-85.3195183!16s%2Fg%2F11hzmt7pyd!4m8!1m0!1m5!1m1!1s0x88605d909249f7a7:0x9ba3ca9f74f82e29!2m2!1d-85.3195183!2d35.0194321!3e0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
                          target: "_blank",
                        }}
                        icon={<Location />}
                        linkLineVisibility={false}
                        classes="u-border-none"
                      />
                    </>
                  }
                  classes="u-flex-vertical-nowrap u-align-items-stretch"
                />
              </>
            }
            column2={<RestorationMap />}
            variant="Columns"
          />
        }
      />
    </_Component>
  );
}
