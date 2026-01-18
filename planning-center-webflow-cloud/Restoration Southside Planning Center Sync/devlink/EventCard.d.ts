import * as React from "react";
import * as Types from "./types";

declare function EventCard(props: {
  as?: React.ElementType;
  date?: React.ReactNode;
  time?: React.ReactNode;
  title?: React.ReactNode;
  ctaText?: React.ReactNode;
  cardImage?: Types.Asset.Image;
  eventLink?: Types.Basic.Link;
  timeVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
