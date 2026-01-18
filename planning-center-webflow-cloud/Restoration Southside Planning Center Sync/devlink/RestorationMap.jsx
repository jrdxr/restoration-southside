"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function RestorationMap({ as: _Component = _Builtin.MapWidget }) {
  return (
    <_Component
      zoom={17}
      latlng="35.0194321,-85.3195183"
      mapStyle="roadmap"
      enableScroll={true}
      enableTouch={true}
      title="Restoration Southside Church"
      apiKey={process.env.DEVLINK_ENV_GOOGLE_MAPS_API_KEY}
    />
  );
}
