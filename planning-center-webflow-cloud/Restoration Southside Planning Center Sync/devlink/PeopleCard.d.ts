import * as React from "react";
import * as Types from "./types";

declare function PeopleCard(props: {
  as?: React.ElementType;
  headshot?: Types.Asset.Image;
  name?: React.ReactNode;
  jobTitle?: React.ReactNode;
  email?: Types.Basic.Link;
  bioButton?: Types.Visibility.VisibilityConditions;
  emailButton?: Types.Visibility.VisibilityConditions;
  modalTrigger?: Types.Builtin.Text;
  modalTriggerValue?: Types.Builtin.Text;
  positionVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
