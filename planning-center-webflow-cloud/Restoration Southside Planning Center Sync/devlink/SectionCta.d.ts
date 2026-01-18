import * as React from "react";
import * as Types from "./types";

declare function SectionCta(props: {
  as?: React.ElementType;
  topPadding?: "None" | "Even" | "Small" | "Main" | "Large" | "Page Top";
  bottomPadding?: "None" | "Even" | "Small" | "Main" | "Large" | "Page Top";
  layoutClasses?: Types.Builtin.Text;
  typographyHeadingVariant?:
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
  typographyHeadingText?: Types.Basic.RichTextChildren;
  /** Set "-1" for no max width*/
  typographyHeadingMaxWidth?: number;
  typographyHeadingClasses?: Types.Builtin.Text;
  typographyHeadingId?: Types.Basic.IdTextInput;
  typographyParagraphVariant?:
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
  typographyParagraphText?: Types.Basic.RichTextChildren;
  /** Set "-1" for no max width*/
  typographyParagraphMaxWidth?: number;
  typographyParagraphClasses?: Types.Builtin.Text;
  typographyParagraphId?: Types.Basic.IdTextInput;
  buttonMainVariant?: "Primary" | "Secondary" | "Link";
  buttonMainText?: React.ReactNode;
  buttonMainLink?: Types.Basic.Link;
  /** button, submit, reset*/
  buttonMainType?: Types.Builtin.Text;
  /** "_blank" opens in new tab*/
  buttonMainTarget?: Types.Builtin.Text;
  buttonMainClasses?: Types.Builtin.Text;
  buttonMainAttributeName?: Types.Builtin.Text;
  buttonMainAttributeValue?: Types.Builtin.Text;
  buttonMainClickableVisibility?: Types.Visibility.VisibilityConditions;
  buttonMainVisibility?: Types.Visibility.VisibilityConditions;
  typographyParagraphVisibility?: Types.Visibility.VisibilityConditions;
  typographyHeadingVisibility?: Types.Visibility.VisibilityConditions;
  /** Combine with u-border-none class*/
  buttonMainLinkLineVisibility?: Types.Visibility.VisibilityConditions;
  buttonMainVisibility2?: Types.Visibility.VisibilityConditions;
  buttonMainVariant2?:
    | "Primary"
    | "Secondary"
    | "Link"
    | "Link Reverse Icon"
    | "External / Small"
    | "Nav CTA"
    | "Block Link";
  logoVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
