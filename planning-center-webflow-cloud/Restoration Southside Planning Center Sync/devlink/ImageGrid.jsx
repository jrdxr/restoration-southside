"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImageGrid.module.css";

export function ImageGrid({
  as: _Component = _Builtin.Block,
  mainImage = "https://cdn.prod.website-files.com/694596af14e57f0c22a741a0/694596af14e57f0c22a74261_rs-placeholder.webp",
  secondaryImage = "https://cdn.prod.website-files.com/694596af14e57f0c22a741a0/694596af14e57f0c22a74261_rs-placeholder.webp",
  tertiaryImage = "https://cdn.prod.website-files.com/694596af14e57f0c22a741a0/694596af14e57f0c22a74261_rs-placeholder.webp",
  image4 = "https://cdn.prod.website-files.com/694596af14e57f0c22a741a0/694596af14e57f0c22a74261_rs-placeholder.webp",
  image5 = "https://cdn.prod.website-files.com/694596af14e57f0c22a741a0/694596af14e57f0c22a74261_rs-placeholder.webp",
  image6 = "https://cdn.prod.website-files.com/694596af14e57f0c22a741a0/694596af14e57f0c22a74261_rs-placeholder.webp",
  image7 = "https://cdn.prod.website-files.com/694596af14e57f0c22a741a0/694596af14e57f0c22a74261_rs-placeholder.webp",
}) {
  return (
    <_Component className={_utils.cx(_styles, "u-display-contents")} tag="div">
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "u-embed-css")}
        id={_utils.cx(
          _styles,
          "w-node-a42b4b03-347b-f31b-cd4e-fc6116631ea6-19effe1c"
        )}
        value="%3Cstyle%3E%0A%0A.image-grid%20%7B%0Acontainer-type%3A%20inline-size%3B%0A%7D%0A%0A.image-grid_image%20%7B%0A--large-bp%3A%20max(var(--_responsive---large)%2Cvar(--_responsive---medium))%3B%0A--small-bp%3A%20max(var(--_responsive---small)%2Cvar(--_responsive---xsmall))%3B%0A%7D%0A%0A%2F*%20Large%20center%20focal%20image%20*%2F%0A.image-grid_image%3Anth-child(1)%20%7B%0A%09grid-column%3A%20calc(5%20*%20var(--large-bp)%20%2B%201%20*%20var(--small-bp))%20%2F%20calc(9%20*%20var(--large-bp)%20%2B%208%20*%20var(--small-bp))%3B%0A%09grid-row%3A%201%20%2F%209%3B%0A%20%20z-index%3A%203%3B%0A%20%09aspect-ratio%3A%209%20%2F%2016%3B%0A%7D%0A%0A.image-grid_image%3Anth-child(2)%20%7B%0Agrid-column%3A%20calc(9%20*%20var(--large-bp)%20%2B%208%20*%20var(--small-bp))%20%2F%20calc(11%20*%20var(--large-bp)%20%2B%2013%20*%20var(--small-bp))%3B%0Agrid-row%3A%202%20%2F%206%3B%0A%7D%0A%0A.image-grid_image%3Anth-child(3)%20%7B%0Agrid-column%3A%20calc(9%20*%20var(--large-bp)%20%2B%208%20*%20var(--small-bp))%20%2F%20calc(11%20*%20var(--large-bp)%20%2B%2013%20*%20var(--small-bp))%3B%0Agrid-row%3A%206%20%2F%208%3B%0A%7D%0A%0A.image-grid_image%3Anth-child(4)%20%7B%0A%09display%3A%20var(--none-small%2C%20block)%20!important%3B%0A%09grid-column%3A%2011%20%2F%2013%3B%0A%09grid-row%3A%203%20%2F%207%3B%0A%7D%0A%0A%0A.image-grid_image%3Anth-child(5)%20%7B%0A%09display%3A%20var(--none-small%2C%20block)%3B%0A%09grid-column%3A%201%20%2F%203%3B%0A%09grid-row%3A%203%20%2F%207%3B%0A%7D%0A%0A%0A.image-grid_image%3Anth-child(6)%20%7B%0A%09display%3A%20var(--none-small%2C%20block)%3B%0A%09grid-column%3A%203%20%2F%205%3B%0A%09grid-row%3A%202%20%2F%204%3B%0A%7D%0A%0A%0A.image-grid_image%3Anth-child(7)%20%7B%0A%09display%3A%20var(--none-small%2C%20block)%3B%0A%09grid-column%3A%203%20%2F%205%3B%0A%09grid-row%3A%204%20%2F%208%3B%0A%7D%09%0A%0A.image-grid_image%20.u-image%20%7B%0A%09object-fit%3A%20cover%3B%0A%7D%0A%20%0A%0A%0A%3C%2Fstyle%3E"
      />
      <_Builtin.Block className={_utils.cx(_styles, "image-grid")} tag="div">
        <_Builtin.DOM
          className={_utils.cx(_styles, "image-grid_image")}
          tag="div"
          slot=""
          _class="image-grid_photo"
          style=""
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "u-image")}
            width="auto"
            height="auto"
            loading="lazy"
            alt=""
            src={mainImage}
          />
        </_Builtin.DOM>
        <_Builtin.DOM
          className={_utils.cx(_styles, "image-grid_image")}
          id={_utils.cx(
            _styles,
            "w-node-df9739a0-2800-08c2-329a-7d8719effe1f-19effe1c"
          )}
          tag="div"
          slot=""
          _class="image-grid_photo"
          style=""
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "u-image")}
            width="auto"
            height="auto"
            loading="lazy"
            alt=""
            src={secondaryImage}
          />
        </_Builtin.DOM>
        <_Builtin.DOM
          className={_utils.cx(_styles, "image-grid_image")}
          id={_utils.cx(
            _styles,
            "w-node-df9739a0-2800-08c2-329a-7d8719effe21-19effe1c"
          )}
          tag="div"
          slot=""
          _class="image-grid_photo"
          style=""
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "u-image")}
            width="auto"
            height="auto"
            loading="lazy"
            alt=""
            src={tertiaryImage}
          />
        </_Builtin.DOM>
        <_Builtin.DOM
          className={_utils.cx(_styles, "image-grid_image")}
          id={_utils.cx(
            _styles,
            "w-node-df9739a0-2800-08c2-329a-7d8719effe23-19effe1c"
          )}
          tag="div"
          slot=""
          _class="image-grid_photo"
          style=""
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "u-image")}
            width="auto"
            height="auto"
            loading="lazy"
            alt=""
            src={image4}
          />
        </_Builtin.DOM>
        <_Builtin.DOM
          className={_utils.cx(_styles, "image-grid_image")}
          id={_utils.cx(
            _styles,
            "w-node-df9739a0-2800-08c2-329a-7d8719effe25-19effe1c"
          )}
          tag="div"
          slot=""
          _class="image-grid_photo"
          style=""
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "u-image")}
            width="auto"
            height="auto"
            loading="lazy"
            alt=""
            src={image5}
          />
        </_Builtin.DOM>
        <_Builtin.DOM
          className={_utils.cx(_styles, "image-grid_image")}
          id={_utils.cx(
            _styles,
            "w-node-df9739a0-2800-08c2-329a-7d8719effe27-19effe1c"
          )}
          tag="div"
          slot=""
          _class="image-grid_photo"
          style=""
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "u-image")}
            width="auto"
            height="auto"
            loading="lazy"
            alt=""
            src={image6}
          />
        </_Builtin.DOM>
        <_Builtin.DOM
          className={_utils.cx(_styles, "image-grid_image")}
          id={_utils.cx(
            _styles,
            "w-node-df9739a0-2800-08c2-329a-7d8719effe29-19effe1c"
          )}
          tag="div"
          slot=""
          _class="image-grid_photo"
          style=""
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "u-image")}
            width="auto"
            height="auto"
            loading="lazy"
            alt=""
            src={image7}
          />
        </_Builtin.DOM>
      </_Builtin.Block>
    </_Component>
  );
}
