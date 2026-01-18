import * as React from "react";
import * as Types from "./types";

declare function FaqAccordion(props: {
  as?: React.ElementType;
  gridVariant?: "Default" | "Self Contained" | "Autofit" | "Autofill";
  /** Column count on large screens and autofit / autofill max column count*/
  gridLargeScreen?: number;
  /** 0 will inherit from the previous screen size*/
  gridMediumScreen?: number;
  /** 0 will inherit from the previous screen size*/
  gridSmallScreen?: number;
  /** 0 will inherit from the previous screen size*/
  gridSmallestScreen?: number;
  /** For autofit or autofill grids*/
  gridMinimumColumnSize?: number;
  gridStyle?: Types.Builtin.Text;
  /** Switch to "list" if grid will contain a list of items*/
  gridRole?: Types.Builtin.Text;
  gridClasses?: Types.Builtin.Text;
}): React.JSX.Element;
