import * as React from "react";
import * as Types from "./types";

declare function RsDropdown(props: {
  as?: React.ElementType;
  link?: React.ReactNode;
  dropdownText?: React.ReactNode;
  expanded?: Types.Builtin.Text;
  /** Add "w--open" if you want open by default*/
  dropdownClass?: Types.Builtin.Text;
}): React.JSX.Element;
