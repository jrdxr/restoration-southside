import * as React from "react";
import * as Types from "./types";

declare function FeatureCard(props: {
  as?: React.ElementType;
  clickableLink?: Types.Basic.Link;
  visualImageImage?: Types.Asset.Image;
  title?: Types.Basic.RichTextChildren;
  visibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
