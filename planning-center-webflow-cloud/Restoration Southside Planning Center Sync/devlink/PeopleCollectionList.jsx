"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { PeopleCard } from "./PeopleCard";
import { Modal } from "./Modal";
import * as _utils from "./utils";
import _styles from "./PeopleCollectionList.module.css";

export function PeopleCollectionList({ as: _Component = _Builtin.DOM }) {
  return (
    <_Component
      className={_utils.cx(_styles, "u-display-contents")}
      tag="div"
      slot=""
    >
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "u-embed-css")}
        value="%3Cstyle%3E%0A.u-checks%3Ahas(.u-bio-check.w-condition-invisible)%20%2B%20.person%20%5Bdata-modal-trigger%5D%20%7B%0Adisplay%3A%20none%3B%0A%7D%0A%0A.u-checks%3Ahas(.u-email-check.w-condition-invisible)%20%2B%20.person%20%5Bdata-button%5D%3Ahas(%5Bhref%3D%22%23%22%5D)%20%7B%0Adisplay%3A%20none%3B%0A%7D%0A%0A%3C%2Fstyle%3E"
      />
      <_Builtin.NotSupported _atom="DynamoWrapper" />
    </_Component>
  );
}
