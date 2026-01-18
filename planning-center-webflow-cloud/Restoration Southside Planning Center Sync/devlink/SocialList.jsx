"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SocialList.module.css";

export function SocialList({
  as: _Component = _Builtin.DOM,
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    Light: "w-variant-62ce2454-e297-c873-b009-4951c9daa6ef",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "footer_social_list", _activeStyleVariant)}
      tag="div"
      slot=""
      role="list"
    >
      <_Builtin.DOM
        className={_utils.cx(
          _styles,
          "footer_social_item",
          _activeStyleVariant
        )}
        tag="div"
        slot=""
        role="listitem"
      >
        <_Builtin.Link
          className={_utils.cx(
            _styles,
            "footer_social_link",
            _activeStyleVariant
          )}
          button={false}
          aria-label="Facebook"
          block="inline"
          options={{
            href: "https://www.facebook.com/restorationsouthside/",
            target: "_blank",
          }}
        >
          <_Builtin.DOM
            className={_utils.cx(_styles, "u-svg", _activeStyleVariant)}
            tag="svg"
            slot=""
            width="100%"
            viewBox="0 0 64 64"
            aria-hidden="true"
          >
            <_Builtin.DOM
              tag="path"
              slot=""
              fill="currentColor"
              d="M24.92437,62V36H16V24h8.92437v-8.38004C24.92437,6.49153,30.70333,2,38.84651,2 c3.90067,0,7.25309,0.29041,8.23008,0.42022v9.53975l-5.64773,0.00257C37.00014,11.96253,36,14.06699,36,17.15515V24h12l-4,12h-8v26 H24.92437z"
            />
          </_Builtin.DOM>
        </_Builtin.Link>
      </_Builtin.DOM>
      <_Builtin.DOM
        className={_utils.cx(
          _styles,
          "footer_social_item",
          _activeStyleVariant
        )}
        tag="div"
        slot=""
        role="listitem"
      >
        <_Builtin.Link
          className={_utils.cx(
            _styles,
            "footer_social_link",
            _activeStyleVariant
          )}
          button={false}
          aria-label="Instagram"
          block="inline"
          options={{
            href: "https://www.instagram.com/restorationsouthside/",
            target: "_blank",
          }}
        >
          <_Builtin.DOM
            className={_utils.cx(_styles, "u-svg", _activeStyleVariant)}
            tag="svg"
            slot=""
            viewBox="0 0 56 56"
            width="100%"
            aria-hidden="true"
          >
            <_Builtin.DOM
              tag="path"
              slot=""
              d="M55.84,16.46c-.05-2.33-.49-4.63-1.3-6.8-1.46-3.76-4.43-6.74-8.2-8.19-2.17-.81-4.47-1.25-6.8-1.3-2.98-.14-3.94-.17-11.54-.17s-8.55.03-11.54.17c-2.32.04-4.62.48-6.8,1.3C5.9,2.92,2.93,5.9,1.47,9.66.66,11.84.22,14.14.17,16.46c-.13,2.98-.17,3.94-.17,11.54s.04,8.56.17,11.54c.05,2.33.49,4.63,1.3,6.8,1.46,3.76,4.43,6.74,8.19,8.19,2.18.82,4.48,1.26,6.8,1.3,2.99.14,3.94.17,11.54.17s8.56-.03,11.55-.17c2.32-.04,4.62-.48,6.8-1.3,3.76-1.45,6.73-4.43,8.19-8.19.81-2.17,1.25-4.47,1.3-6.8.13-2.98.16-3.94.16-11.54s-.03-8.56-.16-11.54ZM28,42.38c-7.94,0-14.37-6.44-14.37-14.38s6.43-14.38,14.37-14.38c3.97,0,7.56,1.61,10.17,4.21,2.6,2.61,4.21,6.2,4.21,10.17,0,7.94-6.44,14.38-14.38,14.38ZM42.95,16.41c-1.86,0-3.36-1.5-3.36-3.36s1.5-3.36,3.36-3.36,3.36,1.51,3.36,3.36-1.5,3.36-3.36,3.36Z"
              fill="currentColor"
            />
            <_Builtin.DOM
              tag="path"
              slot=""
              d="M37.34,28c0,5.15-4.18,9.33-9.33,9.33h-.01c-5.15,0-9.33-4.18-9.33-9.33s4.18-9.33,9.33-9.33,9.34,4.18,9.34,9.33Z"
              fill="currentColor"
            />
          </_Builtin.DOM>
        </_Builtin.Link>
      </_Builtin.DOM>
      <_Builtin.DOM
        className={_utils.cx(
          _styles,
          "footer_social_item",
          _activeStyleVariant
        )}
        tag="div"
        slot=""
        role="listitem"
      >
        <_Builtin.Link
          className={_utils.cx(
            _styles,
            "footer_social_link",
            _activeStyleVariant
          )}
          button={false}
          aria-label="YouTube"
          block="inline"
          options={{
            href: "https://www.youtube.com/@RestorationSouthsideChurch",
            target: "_blank",
          }}
        >
          <_Builtin.DOM
            className={_utils.cx(_styles, "u-svg", _activeStyleVariant)}
            tag="svg"
            slot=""
            width="100%"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <_Builtin.DOM
              tag="path"
              slot=""
              fill="currentColor"
              d="M47.5,14.4c0,0-0.5-3.3-1.9-4.8c-1.8-1.9-3.9-1.9-4.8-2C34.1,7.1,24,7.1,24,7.1h0c0,0-10.1,0-16.8,0.5 c-0.9,0.1-3,0.1-4.8,2c-1.4,1.5-1.9,4.8-1.9,4.8S0,18.3,0,22.2v3.6c0,3.9,0.5,7.8,0.5,7.8s0.5,3.3,1.9,4.8c1.8,1.9,4.2,1.9,5.3,2.1 c3.8,0.4,16.3,0.5,16.3,0.5s10.1,0,16.8-0.5c0.9-0.1,3-0.1,4.8-2c1.4-1.5,1.9-4.8,1.9-4.8s0.5-3.9,0.5-7.8v-3.6 C48,18.3,47.5,14.4,47.5,14.4z M19,30.2l0-13.5l13,6.8L19,30.2z"
            />
          </_Builtin.DOM>
        </_Builtin.Link>
      </_Builtin.DOM>
    </_Component>
  );
}
