import * as React from "react";
import * as Types from "./types";

declare function BlockQuote(props: {
  as?: React.ElementType;
  quoteVariant?:
    | "Inherit"
    | "Text Small"
    | "Text Main"
    | "Text Large"
    | "H6"
    | "H5"
    | "H4"
    | "H3"
    | "H2"
    | "H1"
    | "Display";
  quoteText?: Types.Basic.RichTextChildren;
  visualImageVisibility?: Types.Visibility.VisibilityConditions;
  visualImageImage?: Types.Asset.Image;
  citationText?: Types.Basic.RichTextChildren;
  /** Set "-1" for no max width*/
  citationMaxWidth?: number;
}): React.JSX.Element;
