import * as React from "react";
import * as Types from "./types";

declare function Section(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  variant?: "Inherit" | "Light" | "Dark" | "Brand" | "Brand-Secondary";
  paddingTop?: "None" | "Even" | "Small" | "Main" | "Large" | "Page Top";
  paddingBottom?: "None" | "Even" | "Small" | "Main" | "Large" | "Page Top";
  tag?: Types.Basic.TagType;
  sectionClasses?: Types.Builtin.Text;
  containerClasses?: Types.Builtin.Text;
  style?: Types.Builtin.Text;
  attributeName?: Types.Builtin.Text;
  attributeValue?: Types.Builtin.Text;
  /** Type "id" in this field when applying an id to the section*/
  idAttributeName?: Types.Builtin.Text;
  idAttributeValue?: Types.Basic.IdTextInput;
  container?: React.ReactNode;
  background?: React.ReactNode;
}): React.JSX.Element;
