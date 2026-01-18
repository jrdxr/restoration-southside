import * as React from "react";
import * as Types from "./types";

declare function Grid(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  classes?: Types.Builtin.Text;
  variant?: "Default" | "Self Contained" | "Autofit" | "Autofill";
  /** Column count on large screens and autofit / autofill max column count*/
  largeScreen?: number;
  /** 0 will inherit from the previous screen size*/
  mediumScreen?: number;
  /** 0 will inherit from the previous screen size*/
  smallScreen?: number;
  /** 0 will inherit from the previous screen size*/
  smallestScreen?: number;
  /** For autofit or autofill grids*/
  minimumColumnSize?: number;
  style?: Types.Builtin.Text;
  /** Switch to "list" if grid will contain a list of items*/
  role?: Types.Builtin.Text;
  content?: React.ReactNode;
}): React.JSX.Element;
