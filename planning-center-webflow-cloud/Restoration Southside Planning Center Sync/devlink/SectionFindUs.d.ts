import * as React from "react";
import * as Types from "./types";

declare function SectionFindUs(props: {
  as?: React.ElementType;
  sectionVariant?: "Inherit" | "Light" | "Dark" | "Brand" | "Brand-Secondary";
  sectionPaddingTop?: "None" | "Even" | "Small" | "Main" | "Large" | "Page Top";
  sectionPaddingBottom?:
    | "None"
    | "Even"
    | "Small"
    | "Main"
    | "Large"
    | "Page Top";
  sectionTag?: Types.Basic.TagType;
  sectionSectionClasses?: Types.Builtin.Text;
  sectionContainerClasses?: Types.Builtin.Text;
  sectionStyle?: Types.Builtin.Text;
  sectionAttributeName?: Types.Builtin.Text;
  sectionAttributeValue?: Types.Builtin.Text;
  /** Type "id" in this field when applying an id to the section*/
  sectionIdAttributeName?: Types.Builtin.Text;
  sectionIdAttributeValue?: Types.Basic.IdTextInput;
}): React.JSX.Element;
