import * as React from "react";
import * as Types from "./types";

declare function BlockIntro(props: {
  as?: React.ElementType;
  variant?: "Stacked" | "Left";
  eyebrowHasEyebrow?: Types.Visibility.VisibilityConditions;
  eyebrowText?: Types.Basic.RichTextChildren;
  eyebrowClasses?: Types.Builtin.Text;
  headingVariant?:
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
  headingText?: Types.Basic.RichTextChildren;
  /** Set "-1" for no max width*/
  headingMaxWidth?: number;
  headingClasses?: Types.Builtin.Text;
  headingId?: Types.Basic.IdTextInput;
  ledeHasLede?: Types.Visibility.VisibilityConditions;
  ledeText?: Types.Basic.RichTextChildren;
  /** Set "-1" for no max width*/
  ledeMaxWidth?: number;
  ledeClasses?: Types.Builtin.Text;
  buttonsHasButtons?: Types.Visibility.VisibilityConditions;
  buttonsHasSecondaryButton?: Types.Visibility.VisibilityConditions;
  primaryButtonVariant?:
    | "Primary"
    | "Secondary"
    | "Link"
    | "Link Reverse Icon"
    | "External / Small"
    | "Nav CTA"
    | "Block Link";
  primaryButtonText?: React.ReactNode;
  primaryButtonLink?: Types.Basic.Link;
  /** button, submit, reset*/
  primaryButtonType?: Types.Builtin.Text;
  /** "_blank" opens in new tab*/
  primaryButtonTarget?: Types.Builtin.Text;
  secondaryButtonVariant?:
    | "Primary"
    | "Secondary"
    | "Link"
    | "Link Reverse Icon"
    | "External / Small"
    | "Nav CTA"
    | "Block Link";
  secondaryButtonText?: React.ReactNode;
  secondaryButtonLink?: Types.Basic.Link;
  /** button, submit, reset*/
  secondaryButtonType?: Types.Builtin.Text;
  /** "_blank" opens in new tab*/
  secondaryButtonTarget?: Types.Builtin.Text;
  secondaryButtonClasses?: Types.Builtin.Text;
  primaryButtonClasses?: Types.Builtin.Text;
  attributesAttributeName?: React.ReactNode;
  attributesAttributeValue?: Types.Builtin.Text;
  classes?: Types.Builtin.Text;
  headingHeadingClasses?: Types.Builtin.Text;
}): React.JSX.Element;
