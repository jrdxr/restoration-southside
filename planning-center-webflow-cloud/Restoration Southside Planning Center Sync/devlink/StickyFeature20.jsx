"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./StickyFeature20.module.css";

export function StickyFeature20({
  as: _Component = _Builtin.Block,
  stickyContent,
  stickyDesktopImage,
}) {
  return (
    <_Component className={_utils.cx(_styles, "sticky_feature")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "sticky_feature_content")}
        tag="div"
      >
        {stickyContent}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "sticky_feature_media")}
        tag="div"
      >
        {stickyDesktopImage}
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "u-embed-js")}
        value="%3Cscript%3E%0Adocument.addEventListener(%22DOMContentLoaded%22%2C%20function%20()%20%7B%0A%20%20document.querySelectorAll(%22.sticky_feature%22).forEach((component)%20%3D%3E%20%7B%0A%20%20%20%20if%20(component.dataset.scriptInitialized)%20return%3B%0A%20%20%20%20component.dataset.scriptInitialized%20%3D%20%22true%22%3B%0A%09%09%2F%2F%20Get%20all%20elements%20with%20data-feature%20attribute%0Aconst%20allFeatureElements%20%3D%20document.querySelectorAll('%5Bdata-feature%5D')%3B%0A%0A%2F%2F%20Group%20them%20by%20their%20data-feature%20value%0Aconst%20grouped%20%3D%20%7B%7D%3B%0A%0AallFeatureElements.forEach(element%20%3D%3E%20%7B%0A%20%20const%20featureValue%20%3D%20element.dataset.feature%3B%0A%20%20%0A%20%20if%20(!grouped%5BfeatureValue%5D)%20%7B%0A%20%20%20%20grouped%5BfeatureValue%5D%20%3D%20%5B%5D%3B%0A%20%20%7D%0A%20%20%0A%20%20grouped%5BfeatureValue%5D.push(element)%3B%0A%7D)%3B%0A%0A%2F%2F%20Create%20animations%20for%20each%20group%0AObject.entries(grouped).forEach((%5BfeatureValue%2C%20elements%5D%2C%20groupIndex)%20%3D%3E%20%7B%0A%20%20if%20(elements.length%20%3E%3D%202)%20%7B%0A%20%20%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20elements.length%20-%201%3B%20i%2B%2B)%20%7B%0A%20%20%20%20%20%20const%20triggerElement%20%3D%20elements%5Bi%5D%3B%0A%20%20%20%20%20%20const%20targetElement%20%3D%20elements%5Bi%20%2B%201%5D%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20if%20(groupIndex%20!%3D%200)%20%7B%0A%20%20%20%20%20%20gsap.set(targetElement%2C%20%7B%0A%20%20%20%20%20%20%20%20autoAlpha%3A%200%2C%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20gsap.to(targetElement%2C%20%7B%0A%20%20%20%20%20%20%20%20scrollTrigger%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20trigger%3A%20triggerElement%2C%0A%20%20%20%20%20%20%20%20%20%20start%3A%20%22top%20bottom%22%2C%0A%20%20%20%20%20%20%20%20%20%20end%3A%20%22bottom%20center%22%2C%0A%20%20%20%20%20%20%20%20%20%20scrub%3A%20true%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20autoAlpha%3A%201%2C%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%3B%0A%20%20%7D)%3B%0A%7D)%3B%0A%3C%2Fscript%3E"
      />
    </_Component>
  );
}
