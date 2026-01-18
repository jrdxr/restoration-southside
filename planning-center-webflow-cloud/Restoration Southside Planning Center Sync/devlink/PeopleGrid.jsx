"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Grid } from "./Grid";

export function PeopleGrid({ as: _Component = _Builtin.DOM }) {
  return (
    <_Component tag="div" slot="">
      <Grid
        content={
          <PeopleCollectionList
            filters={peopleCollectionListFilters}
            sort={[
              {
                field: "last-initial",
                direction: "asc",
              },
            ]}
          />
        }
        variant="Autofill"
        largeScreen={3}
        classes="u-gap-8"
      />
    </_Component>
  );
}
