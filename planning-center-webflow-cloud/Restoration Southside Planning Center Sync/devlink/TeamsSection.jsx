"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Spacer } from "./Spacer";
import { Tab } from "./Tab";
import * as _utils from "./utils";
import _styles from "./TeamsSection.module.css";

export function TeamsSection({ as: _Component = _Builtin.DOM }) {
  return (
    <_Component
      className={_utils.cx(_styles, "u-section")}
      tag="section"
      slot=""
      _class="u-background-2"
      style=""
    >
      <Spacer variant="Main" />
      <_Builtin.Block className={_utils.cx(_styles, "u-container")} tag="div">
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "u-embed-css")}
          value="%3Cstyle%3E%0A.tab_left%20.tab_button_list%20%7B%0A%09position%3A%20sticky%3B%0A%20%20top%3A%20var(--_spacing---section-space--large)%3B%0A%7D%0A%3C%2Fstyle%3E"
        />
        <Tab
          tabLink={<TeamsCollectionList />}
          componentId="our-teams"
          tabContent={
            <>
              <PeopleGrid />
              <PeopleGrid
                peopleCollectionListFilters={{
                  filterFor: "ALL",

                  fields: [
                    {
                      fieldPath: "teams",
                      operatorName: "idin",
                      value: "694596af14e57f0c22a7426d",
                    },
                  ],
                }}
              />
              <PeopleGrid
                peopleCollectionListFilters={{
                  filterFor: "ALL",

                  fields: [
                    {
                      fieldPath: "teams",
                      operatorName: "idin",
                      value: "694596af14e57f0c22a7424f",
                    },
                  ],
                }}
              />
              <PeopleGrid
                peopleCollectionListFilters={{
                  filterFor: "ALL",

                  fields: [
                    {
                      fieldPath: "teams",
                      operatorName: "idin",
                      value: "694596af14e57f0c22a742bd",
                    },
                  ],
                }}
              />
              <PeopleGrid
                peopleCollectionListFilters={{
                  filterFor: "ALL",

                  fields: [
                    {
                      fieldPath: "teams",
                      operatorName: "idin",
                      value: "694596af14e57f0c22a74222",
                    },
                  ],
                }}
              />
            </>
          }
          heading={
            <BlockIntro
              variant="Left"
              headingText={
                <_Builtin.Heading tag="h2">{"Our Teams"}</_Builtin.Heading>
              }
              buttonsHasButtons={false}
            />
          }
          variant="Horizontal"
          previewContent="false"
        />
      </_Builtin.Block>
      <Spacer variant="Main" />
      <_Builtin.Block
        className={_utils.cx(_styles, "u-background-slot")}
        tag="div"
      />
    </_Component>
  );
}
