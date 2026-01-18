import * as React from "react";
import * as Types from "./types";

declare function Tab(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  variant?: "Base" | "Horizontal";
  /** Show next and previous buttons*/
  controlsVisibility?: Types.Visibility.VisibilityConditions;
  /** Set to true to preview all tab content in designer view.*/
  previewContent?: Types.Builtin.Text;
  /** Give the component a unique ID to anchor link to it from a separate page.*/
  componentId?: Types.Builtin.Text;
  /** If set to true, tab content will slide from side to side instead of fading out.*/
  slideTabs?: Types.Builtin.Text;
  /** Set a duration in seconds such as "4" to make the tabs autoplay.*/
  autoplayDuration?: Types.Builtin.Text;
  transitionDuration?: number;
  /** If true, the next button will loop instead of disabling when reaching end of list.*/
  loopControls?: Types.Builtin.Text;
  /** If set to true, the autoplay will pause whenever we hover over the component.*/
  pauseOnHover?: Types.Builtin.Text;
  classes?: Types.Builtin.Text;
  heading?: React.ReactNode;
  tabLink?: React.ReactNode;
  tabContent?: React.ReactNode;
}): React.JSX.Element;
