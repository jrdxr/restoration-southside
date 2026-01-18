import * as React from "react";
import * as Types from "./types";

declare function Slider(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  variant?: "Overflow Visible" | "Overflow Hidden" | "Crop Left";
  slidesPerView?: Types.Builtin.Text;
  settingsControlsVisibility?: Types.Visibility.VisibilityConditions;
  /** If set to false, slider will be swipeable but not draggable.*/
  settingsFollowFinger?: Types.Builtin.Text;
  /** If set to true, slides will not snap into place on release.*/
  settingsFreeMode?: Types.Builtin.Text;
  /** If set to false, the slider can't be controlled by the keyboard arrow keys.*/
  settingsMousewheel?: Types.Builtin.Text;
  /** If set to true, the slide will move into view when we click on it.*/
  settingsSlideToClickedSlide?: Types.Builtin.Text;
  settingsSpeed?: number;
  classes?: Types.Builtin.Text;
  content?: React.ReactNode;
  bulletControls?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
