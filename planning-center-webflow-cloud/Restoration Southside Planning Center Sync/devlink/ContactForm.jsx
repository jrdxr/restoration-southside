"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { FormFieldset } from "./FormFieldset";
import { ButtonWrapper } from "./ButtonWrapper";
import * as _utils from "./utils";
import _styles from "./ContactForm.module.css";

export function ContactForm({
  as: _Component = _Builtin.DOM,
  visibility = true,
  classes = " ",
}) {
  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "form_component")}
      tag="div"
      slot=""
      _class={classes}
    >
      <_Builtin.FormWrapper className={_utils.cx(_styles, "form_wrap")}>
        <_Builtin.FormForm
          className={_utils.cx(_styles, "form_element")}
          name="wf-form-Contact-Form"
          data-name="Contact Form"
          method="get"
          id="wf-form-Contact-Form"
        >
          <FormFieldset
            legendVariant="Bold"
            legendText="Contact Details"
            content={
              <>
                <FormInput
                  autoComplete="given-name"
                  name="First Name"
                  placeholder="First name"
                  label="First Name"
                />
                <FormInput
                  autoComplete="family-name"
                  name="Last Name"
                  placeholder="Last name"
                  label="Last Name"
                />
                <FormInput
                  autoComplete="email"
                  inputMode="email"
                  type="email"
                  name="Email Address"
                  placeholder="email@company.com"
                  label="Email Address"
                />
                <FormFieldset
                  legendText="Address"
                  content={
                    <>
                      <FormSelect
                        formSelectOption={
                          <>
                            <FormSelectOption text="Select one..." value="" />
                            <FormSelectOption
                              text="Option 1"
                              value="Option 1"
                            />
                            <FormSelectOption
                              text="Option 2"
                              value="Option 2"
                            />
                            <FormSelectOption
                              text="Option 3"
                              value="Option 3"
                            />
                          </>
                        }
                        name="State"
                        label="State"
                        classes="u-column-span-2"
                      />
                      <FormInput
                        autoComplete="postal-code"
                        name="Zip Code"
                        placeholder=""
                        type="text"
                        inputMode="text"
                        label="Zip Code"
                      />
                    </>
                  }
                  variant="Grid 3 Column"
                  legendVariant="Hidden"
                />
                <FormFieldset
                  legendText="Date of Birth"
                  content={
                    <>
                      <FormSelect
                        formSelectOption={
                          <>
                            <FormSelectOption text="MM" value="" />
                            <FormSelectOption text="January" value="January" />
                            <FormSelectOption
                              text="February"
                              value="February"
                            />
                            <FormSelectOption text="March" value="March" />
                            <FormSelectOption text="April" value="April" />
                            <FormSelectOption text="May" value="May" />
                            <FormSelectOption text="June" value="June" />
                            <FormSelectOption text="July" value="July" />
                            <FormSelectOption text="August" value="August" />
                            <FormSelectOption
                              text="September"
                              value="September"
                            />
                            <FormSelectOption text="October" value="October" />
                            <FormSelectOption
                              text="November"
                              value="November"
                            />
                            <FormSelectOption
                              text="December"
                              value="December"
                            />
                          </>
                        }
                        name="Month"
                        label="Month"
                        labelVariant="Hidden"
                      />
                      <FormSelect
                        formSelectOption={
                          <>
                            <FormSelectOption text="DD" value="" />
                            <FormSelectOption text="1" value="1" />
                            <FormSelectOption text="2" value="2" />
                            <FormSelectOption text="3" value="3" />
                          </>
                        }
                        name="Day"
                        labelVariant="Hidden"
                        label="Day"
                      />
                      <FormSelect
                        formSelectOption={
                          <>
                            <FormSelectOption text="YYYY" value="" />
                            <FormSelectOption text="2025" value="2025" />
                            <FormSelectOption text="2024" value="2024" />
                            <FormSelectOption text="2023" value="2023" />
                          </>
                        }
                        name="Year"
                        label="Year"
                        labelVariant="Hidden"
                      />
                    </>
                  }
                  variant="Grid 3 Column"
                />
                <FormInput
                  autoComplete="tel"
                  inputMode="tel"
                  type="tel"
                  name="Phone Number"
                  placeholder="000-000-0000"
                  label="Phone Number"
                />
              </>
            }
            variant="Grid 2 Column"
          />
          <FormFieldset
            legendVariant="Bold"
            legendText="Project Details"
            variant="Grid 2 Column"
            content={
              <>
                <FormFieldset
                  content={
                    <>
                      <FormRadio
                        checked=" "
                        required=" "
                        groupName="Color"
                        label="Red"
                        value="Red"
                        variant="Radio"
                        role="listitem"
                      />
                      <FormRadio
                        value="Green"
                        label="Green"
                        required=" "
                        groupName="Color"
                        variant="Radio"
                        role="listitem"
                      />
                      <FormRadio
                        value="Blue"
                        label="Blue"
                        required=" "
                        groupName="Color"
                        variant="Radio"
                        role="listitem"
                      />
                    </>
                  }
                  variant="Flex Horizontal"
                  legendText="Favorite Color"
                  slotRole="list"
                />
                <FormFieldset
                  content={
                    <>
                      <FormCheckbox
                        name="I agree to the terms"
                        label="I agree to the terms"
                        checked=" "
                        role="listitem"
                      />
                      <FormCheckbox
                        name="I agree to the terms"
                        label="I agree to the terms"
                        role="listitem"
                      />
                    </>
                  }
                  variant="Flex Horizontal"
                  legendText="Terms & Conditions"
                  slotRole="list"
                />
                <FormSelect
                  formSelectOption={
                    <>
                      <FormSelectOption text="Select one..." value="" />
                      <FormSelectOption />
                      <FormSelectOption text="Option 2" value="Option 2" />
                      <FormSelectOption text="Option 3" value="Option 3" />
                    </>
                  }
                  label="Job Title"
                  name="Job Title"
                />
                <FormInput
                  autoComplete=""
                  name="Completion Date"
                  placeholder=""
                  label="Completion Date"
                  type="date"
                  inputMode=""
                />
                <FormRange />
                <FormTextarea
                  classes="u-column-2"
                  label="Message"
                  name="Message"
                  placeholder="Your message"
                />
              </>
            }
          />
          <ButtonWrapper
            content={<RsButton text="Submit" type="submit" />}
            classes="u-margin-top-0"
          />
        </_Builtin.FormForm>
        <_Builtin.FormSuccessMessage
          className={_utils.cx(_styles, "form_success_wrap")}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "form_success_text")}
            tag="div"
          >
            {"Thank you! Your submission has been received!"}
          </_Builtin.Block>
        </_Builtin.FormSuccessMessage>
        <_Builtin.FormErrorMessage
          className={_utils.cx(_styles, "form_error_wrap")}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "form_error_text")}
            tag="div"
          >
            {"Oops! Something went wrong while submitting the form."}
          </_Builtin.Block>
        </_Builtin.FormErrorMessage>
      </_Builtin.FormWrapper>
    </_Component>
  ) : null;
}
