import * as React from "react";
import * as Types from "./types";

declare function StickyFeatureContent(props: {
  as?: React.ElementType;
  contents?: React.ReactNode;
  /** Match with Sticky Desktop Image and use kebab case. 

        Example: cool-feature-1*/
  featureId?: Types.Builtin.Text;
  visualImageMobileOnly?: React.ReactNode;
}): React.JSX.Element;
