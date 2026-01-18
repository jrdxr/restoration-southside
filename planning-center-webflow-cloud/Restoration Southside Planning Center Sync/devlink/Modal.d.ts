import * as React from "react";
import * as Types from "./types";

declare function Modal(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  classes?: Types.Builtin.Text;
  variant?: "Small" | "Side Panel" | "Full Screen";
  /** Each modal must have a unique ID. When using a modal inside a CMS Item, use the CMS Item's slug as the ID.*/
  modalId?: Types.Builtin.Text;
  /** If set to true, modal will be visible in designer.*/
  showInDesigner?: Types.Builtin.Text;
  modalContent?: React.ReactNode;
}): React.JSX.Element;
