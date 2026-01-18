"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Grid } from "./Grid";
import * as _utils from "./utils";
import _styles from "./FaqAccordion.module.css";

export function FaqAccordion({
  as: _Component = _Builtin.DOM,
  gridVariant = null,
  gridLargeScreen = 6,
  gridMediumScreen = 1,
  gridSmallScreen = 0,
  gridSmallestScreen = 0,
  gridMinimumColumnSize = 12,
  gridStyle,
  gridRole = "none",
  gridClasses = " ",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "u-display-contents")}
      tag="div"
      slot=""
    >
      <Grid
        largeScreen={gridLargeScreen}
        variant={gridVariant}
        mediumScreen={gridMediumScreen}
        smallScreen={gridSmallScreen}
        smallestScreen={gridSmallestScreen}
        minimumColumnSize={gridMinimumColumnSize}
        style={gridStyle}
        role={gridRole}
        classes={gridClasses}
        content={
          <AccordionList
            accordionItem={
              <FaQsCollectionList
                filters={faQsCollectionListFilters}
                sort={faQsCollectionListSort}
              />
            }
            classes="u-column-span-indent"
          />
        }
      />
    </_Component>
  );
}
