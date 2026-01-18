import * as React from "react";
import * as Types from "./types";

declare function CardPrimary20(props: {
  as?: React.ElementType;
  linkLinkVisibility?: Types.Visibility.VisibilityConditions;
  linkLinkText?: React.ReactNode;
  linkLinkUrl?: Types.Basic.Link;
  /** "_blank" opens in new tab*/
  linkLinkTarget?: Types.Builtin.Text;
  visibility?: Types.Visibility.VisibilityConditions;
  /** Set to "listitem" if used in a list*/
  role?: Types.Builtin.Text;
  styleBackgroundImage?: Types.Visibility.VisibilityConditions;
  styleImage?: Types.Asset.Image;
  styleClasses?: Types.Builtin.Text;
  styleContentClasses?: Types.Builtin.Text;
  styleStyle?: Types.Builtin.Text;
  /** brand, brand-secondary, light, dark, accent, tertiary*/
  styleBackgroundColorOverride?: Types.Builtin.Text;
  variant?: "Default" | "Cover" | "Stat" | "Stacked";
  contentHasEyebrow?: Types.Visibility.VisibilityConditions;
  contentEyebrowSlot?: React.ReactNode;
  contentHasTitle?: Types.Visibility.VisibilityConditions;
  contentTitleSlot?: React.ReactNode;
  contentHasButton?: Types.Visibility.VisibilityConditions;
  contentButtonSlot?: React.ReactNode;
  contentHasParagraph?: Types.Visibility.VisibilityConditions;
  contentParagraphSlot?: React.ReactNode;
  contentVisualSlot?: React.ReactNode;
}): React.JSX.Element;
