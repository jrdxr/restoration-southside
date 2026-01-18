import * as React from "react";
import * as Types from "./types";

declare function StickyFeatureDesktopImage(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  /** Match with Sticky Content and use kebab case. 

        Example: cool-feature-1*/
  featureId?: Types.Builtin.Text;
}): React.JSX.Element;
