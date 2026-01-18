"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { BrandLogoFull } from "./BrandLogoFull";
import { SocialList } from "./SocialList";
import { Grid } from "./Grid";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "footer_wrap")}
      tag="footer"
      grid={{
        type: "section",
      }}
    >
      <_Builtin.Heading
        className={_utils.cx(_styles, "footer_title", "u-sr-only")}
        tag="h2"
      >
        {"Footer"}
      </_Builtin.Heading>
      <_Builtin.Block
        className={_utils.cx(_styles, "footer_contain", "u-container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "footer_layout", "u-grid-custom")}
          tag="div"
          data-medium-columns="1"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "footer_content")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "footer_logo_wrap")}
              id={_utils.cx(
                _styles,
                "w-node-_29394d2f-cd0c-8059-7e15-66f9381499a5-3814999f"
              )}
              button={false}
              aria-label="Go to the homepage"
              block="inline"
              options={{
                href: "#",
              }}
            >
              <BrandLogoFull />
            </_Builtin.Link>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer_social_wrap")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "footer_social_title",
                  "u-text-style-h6",
                  "u-margin-bottom-4"
                )}
                tag="h3"
              >
                {"Follow us"}
              </_Builtin.Heading>
              <SocialList variant="Base" />
            </_Builtin.Block>
          </_Builtin.Block>
          <Grid
            role="navigation"
            content={
              <>
                <FooterGroup
                  footerLink={
                    <>
                      <FooterLink
                        text="Facility Rentals"
                        link={{
                          href: "#",
                        }}
                      />
                      <FooterLink
                        text="Employment Opportunities"
                        link={{
                          href: "#",
                        }}
                      />
                      <FooterLink
                        text="Pastoral Search Committee"
                        link={{
                          href: "#",
                        }}
                      />
                      <FooterLink text="Contact Us" />
                    </>
                  }
                  title="Resources"
                />
                <FooterGroup
                  footerLink={
                    <>
                      <FooterLink
                        text="Updates and News"
                        link={{
                          href: "#",
                        }}
                      />
                      <FooterLink
                        text="Archive"
                        link={{
                          href: "#",
                        }}
                      />
                    </>
                  }
                  title="Content"
                />
              </>
            }
            classes="u-gap-row-7 u-column-span-8"
            largeScreen={4}
            mediumScreen={0}
            smallScreen={2}
            smallestScreen={1}
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "footer_bottom_wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "footer_bottom_contain", "u-container")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "footer_bottom_layout")}
            tag="div"
          >
            <_Builtin.DOM
              className={_utils.cx(
                _styles,
                "footer_bottom_text",
                "u-text-style-small"
              )}
              tag="div"
              slot=""
            >
              <_Builtin.DOM tag="span" slot="">
                {"© "}
              </_Builtin.DOM>
              <_Builtin.DOM tag="span" slot="" data-dynamic-year=" ">
                {"{{year}}"}
              </_Builtin.DOM>
              <_Builtin.DOM tag="span" slot="">
                {"Copyright. All Rights Reserved."}
              </_Builtin.DOM>
            </_Builtin.DOM>
            <_Builtin.DOM
              className={_utils.cx(_styles, "footer_bottom_list")}
              tag="div"
              slot=""
              data-trigger="group"
              role="list"
            >
              <_Builtin.DOM
                className={_utils.cx(_styles, "footer_bottom_item")}
                tag="div"
                slot=""
                data-trigger="hover-other focus-other"
                role="listitem"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer_bottom_link_wrap")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "footer_bottom_link_text",
                      "u-text-style-small"
                    )}
                    tag="div"
                  >
                    {"Privacy Policy"}
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.DOM>
              <_Builtin.DOM
                className={_utils.cx(_styles, "footer_bottom_item")}
                tag="div"
                slot=""
                data-trigger="hover-other focus-other"
                role="listitem"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer_bottom_link_wrap")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "footer_bottom_link_text",
                      "u-text-style-small"
                    )}
                    tag="div"
                  >
                    {"Terms & Conditions"}
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.DOM>
              <_Builtin.DOM
                className={_utils.cx(_styles, "footer_bottom_item")}
                tag="div"
                slot=""
                data-trigger="hover-other focus-other"
                role="listitem"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer_bottom_link_wrap")}
                  button={false}
                  block="inline"
                  options={{
                    href: "/sitemap.xml",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "footer_bottom_link_text",
                      "u-text-style-small"
                    )}
                    tag="div"
                  >
                    {"Site Map"}
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.DOM>
            </_Builtin.DOM>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "u-embed-js")}
        value="%3Cscript%3E%0Adocument.addEventListener(%22DOMContentLoaded%22%2C%20function%20()%20%7B%0A%20%20document.querySelectorAll(%22%5Bdata-dynamic-year%5D%22).forEach(function%20(el)%20%7B%0A%20%20%20%20el.textContent%20%3D%20new%20Date().getFullYear()%3B%0A%20%20%7D)%3B%0A%7D)%3B%0A%3C%2Fscript%3E"
      />
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "u-embed-js")}
        value="%3Cscript%3E%0Adocument.addEventListener(%22DOMContentLoaded%22%2C%20function%20()%20%7B%0AsetTimeout(()%20%3D%3E%20%7B%0A%20%20document.querySelector(%22.w-webflow-badge%22).remove()%3B%0A%20%20%7D%2C%20%222000%22)%3B%0A%7D)%3B%0A%3C%2Fscript%3E"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "footer_background_wrap")}
        tag="div"
      />
    </_Component>
  );
}
