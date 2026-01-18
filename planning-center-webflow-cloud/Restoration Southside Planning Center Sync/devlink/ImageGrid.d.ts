import * as React from "react";
import * as Types from "./types";

declare function ImageGrid(props: {
  as?: React.ElementType;
  /** This shows on desktop and mobile*/
  mainImage?: Types.Asset.Image;
  /** This shows on desktop and mobile*/
  secondaryImage?: Types.Asset.Image;
  /** This shows on desktop and mobile*/
  tertiaryImage?: Types.Asset.Image;
  /** This only shows on desktop*/
  image4?: Types.Asset.Image;
  /** This only shows on desktop*/
  image5?: Types.Asset.Image;
  /** This only shows on desktop*/
  image6?: Types.Asset.Image;
  /** This only shows on desktop*/
  image7?: Types.Asset.Image;
}): React.JSX.Element;
