"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { NavBanner } from "./NavBanner";
import { BrandLogoFull } from "./BrandLogoFull";
import { BrandLogoMark } from "./BrandLogoMark";
import { RsButton } from "./RsButton";
import { RsMenu } from "./RsMenu";
import { SocialList } from "./SocialList";
import * as _utils from "./utils";
import _styles from "./RsNav.module.css";

export function RsNav({ as: _Component = _Builtin.Block, variant = "Base" }) {
  const _styleVariantMap = {
    Base: "",
    "Dark Mode": "w-variant-fd7b5b9e-80f9-1987-7071-9234069af8f4",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "nav_component", _activeStyleVariant)}
      tag="div"
    >
      <NavBanner visibility={false} />
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "u-embed-css", _activeStyleVariant)}
        value="%3Cstyle%3E%0Abody%3Ahas(.nav_component%20.w-nav-button.w--open)%3Anot(%3Ahas(.nav_desktop_wrap%3Anot(.w-condition-invisible)))%20%7B%20overflow%3A%20hidden%3B%20%7D%0A%2F*%20on%20smaller%20screens%20*%2F%0A%40media%20(width%20%3C%2065em)%20%7B%0A%09%2F*%20disable%20scroll%20when%20mobile%20menu%20is%20open%20*%2F%0A%09body%3Ahas(.nav_component%20.w-nav-button.w--open)%20%7B%20overflow%3A%20hidden%3B%20%7D%0A%7D%0A%2F*%20on%20larger%20screens%20*%2F%0A%40container%20(min-width%3A%2065em)%20%7B%0A%09%2F*%20show%20desktop%20nav%20%26%20dropdown%20backdrop%20*%2F%0A%09.nav_desktop_wrap%2C%20.nav_dropdown_backdrop%20%7B%20display%3A%20block%3B%20%7D%0A%09%2F*%20hide%20mobile%20nav%20%26%20mobile%20menu%20backdrop%20*%2F%0A%09.nav_desktop_wrap%3Anot(.w-condition-invisible)%20~%20.nav_wrap%2C%20.nav_desktop_wrap%3Anot(.w-condition-invisible)%20~%20.nav_menu_backdrop%20%7B%20display%3A%20none%3B%20%7D%0A%7D%0A%2F*%20dropdown%20list%3A%20initial%20state%20*%2F%0Ahtml%3Anot(.wf-design-mode)%20.nav_dropdown_component%20%3E%20.w-dropdown-list%20%7B%0A%09%2F*%20removes%20display%20none%20to%20enable%20css%20transitions%20*%2F%0A%09display%3A%20grid%20!important%3B%0A%09grid-template-columns%3A%20minmax(0%2C%201fr)%3B%0A%09%2F*%20sets%20list%20to%200%20height%20by%20default%20*%2F%0A%09grid-template-rows%3A%200fr%3B%0A%09transition%3A%20grid-template-rows%20var(--nav--dropdown-close-duration)%3B%0A%09%2F*%20makes%20list%20content%20not%20focusable%20when%20closed%20*%2F%0A%09visibility%3A%20hidden%3B%0A%09opacity%3A%200%3B%0A%7D%0A%2F*%20makes%20list%20content%20focusable%20when%20opened%20*%2F%0Ahtml%3Anot(.wf-design-mode)%20.nav_dropdown_component%20%3E%20.w-dropdown-list.w--open%20%7B%0A%09visibility%3A%20visible%3B%0A%09opacity%3A%201%3B%0A%7D%0A%2F*%20sets%20list%20child%20to%20overflow%20hidden%20to%20enable%20css%20height%20transition%20*%2F%0A.nav_dropdown_component%20%3E%20.w-dropdown-list%20%3E%20*%20%7B%0A%09overflow%3A%20hidden%3B%0A%7D%0A%2F*%20set%20open%20state%20of%20dropdown%20list%20*%2F%0A.nav_dropdown_component%3Ahas(%3E%20.w-dropdown-toggle%5Baria-expanded%3D%22true%22%5D)%20%3E%20.w-dropdown-list%20%7B%0A%09--nav--dropdown-close-duration%3A%20var(--nav--dropdown-open-duration)%3B%0A%09grid-template-rows%3A%201fr%3B%0A%7D%0A%2F*%20on%20desktop%2C%20delay%20dropdown%20opening%20if%20another%20dropdown%20is%20open%20*%2F%0A.nav_desktop_wrap%3Ahas(.nav_dropdown_component%20%3E%20.w-dropdown-toggle.w--open%5Baria-expanded%3D%22false%22%5D)%20.nav_dropdown_component%3Ahas(%3E%20.w--open%5Baria-expanded%3D%22true%22%5D)%20%3E%20.w-dropdown-list%20%7B%0A%09transition-delay%3A%20var(--nav--dropdown-close-duration)%3B%0A%7D%0A%2F*%20reveal%20dropdown%20backdrop%20when%20dropdown%20open%20*%2F%0A.nav_dropdown_backdrop%20%7B%0A%09transition%3A%20opacity%20var(--nav--dropdown-close-duration)%3B%0A%7D%0Abody%3Ahas(.nav_dropdown_component%20%3E%20%5Baria-expanded%3D%22true%22%5D)%20.nav_dropdown_backdrop%20%7B%0A%09opacity%3A%201%3B%0A%7D%0A%2F*%20reveal%20mobile%20menu%20backdrop%20on%20menu%20open%20*%2F%0A.nav_menu_backdrop%2C%20.nav_footer_wrap%20%7B%0A%09transition%3A%20opacity%20var(--nav--menu-close-duration)%3B%0A%7D%0A.nav_component%3Ahas(.w-nav-button.w--open)%20%3Ais(.nav_menu_backdrop%2C%20.nav_footer_wrap)%20%7B%0A%09opacity%3A%201%3B%0A%7D%0A%0A.nav_component%3Ahas(.w-nav-button.w--open)%20%3Ais(.nav_footer_wrap)%20%7B%0A%09pointer-events%3A%20auto%3B%0A%7D%0A%2F*%20menu%20animations%20*%2F%0A%40keyframes%20menuOpen%20%7B%0A%20from%20%7B%20clip-path%3A%20polygon(0%200%2C%20100%25%200%2C%20100%25%200%2C%200%200)%3B%20%7D%0A%20to%20%7B%20clip-path%3A%20polygon(0%200%2C%20100%25%200%2C%20100%25%20100%25%2C%200%20100%25)%3B%20%7D%0A%7D%0A%40keyframes%20menuClose%20%7B%0A%20from%20%7B%20clip-path%3A%20polygon(0%200%2C%20100%25%200%2C%20100%25%20100%25%2C%200%20100%25)%3B%20%7D%0A%20to%20%7B%20clip-path%3A%20polygon(0%200%2C%20100%25%200%2C%20100%25%200%2C%200%200)%3B%20%7D%0A%7D%0A%2F*%20menu%20open%20*%2F%0A.nav_component%3Ahas(.w-nav-button.w--open)%20.w-nav-menu%20%7B%0A%09animation%3A%20menuOpen%20var(--nav--menu-open-duration)%20ease-in-out%20forwards%3B%0A%7D%0A%2F*%20menu%20close%20*%2F%0A.nav_component%3Ahas(.w-nav-button%3Anot(.w--open))%20.w-nav-menu%20%7B%0A%09animation%3A%20menuClose%20var(--nav--menu-close-duration)%20ease-in-out%20forwards%3B%0A%7D%0A%2F*%20position%20overflow%20to%20top%20of%20screen%20*%2F%0A.nav_component%20.w-nav-overlay%20%7B%0A%20top%3A%200%3B%0A%20min-height%3A%20100vh%3B%0A%7D%0A%2F*%20open%20dropdown%20on%20mobile%20*%2F%0A.nav_wrap%20%5Bdata-open-on-mobile%5D%20%3E%20.w-dropdown-toggle%20%7B%0A%09display%3A%20none%3B%0A%7D%0A.nav_wrap%20%5Bdata-open-on-mobile%5D%20%3E%20.w-dropdown-list%20%7B%0A%09visibility%3A%20visible%20!important%3B%0A%09opacity%3A%201%20!important%3B%0A%09display%3A%20block%20!important%3B%0A%09grid-template-rows%3A%201fr%20!important%3B%0A%7D%0A%2F*%20nav%20banner%20*%2F%0Ahtml%3Ahas(.nav_banner_wrap%3Anot(.w-condition-invisible))%3Anot(.hide-nav-banner)%20%7B%0A%09--nav--height-total%3A%20calc(var(--nav--banner-height)%20%2B%20var(--nav--height)%20%2B%20var(--nav--spacing-outer-vertical))%3B%0A%7D%0A.hide-nav-banner%20.nav_banner_wrap%20%7B%0A%09display%3A%20none%3B%0A%7D%0A.wf-design-mode%20.nav__wrap%20%7B%0A%09width%3A%20100%25%3B%0A%7D%0A%0A%2F*%0A%0A.nav_links_component%20%7B%0A%20%20container-type%3A%20inline-size%3B%0A%20%20container-name%3A%20nav%3B%0A%7D%0A%0A%40media%20(min-width%3A%201000px)%20%7B%0A%0A%20%20.nav_mobile_menu_wrap%20%7B%0A%20%20%20%20height%3A%20100dvh%3B%0A%20%20%20%20width%3A%20100%25%3A%0A%20%20%7D%0A%0A%20%20.nav_mobile_menu_scroll%20%7B%0A%20%20%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20align-items%3A%20center%3B%0A%20%20%7D%0A%0A%20%20%0A%20%20.nav_links_link%20%7B%0A%20%20%09width%3A%2050%25%3B%0A%20%20%09padding-inline-end%3A%20var(--_spacing---space--3)%20!important%3B%0A%20%20%7D%0A%20%20%0A%0A%0A%20%20.nav_dropdown_component%3A%3Aafter%20%7B%0A%20%20%20%20content%3A%20''%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20top%3A%200%25%3B%0A%20%20%20%20bottom%3A%200%25%3B%0A%20%20%20%20width%3A%20var(--border-width--main)%3B%0A%20%20%20%20background%3A%20rgba(255%2C%20255%2C%20255%2C%200.15)%3B%0A%20%20%20%20%0A%20%20%7D%0A%0A%20%20.nav_links_svg%20%7B%0A%20%20%20%20display%3A%20none%3B%0A%20%20%7D%0A%20%0A%0A%20%20.nav_dropdown_main_wrap%20%7B%0A%20%20%09position%3A%20fixed%3B%0A%20%20%20%20top%3A%2050%25%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20transform%3AtranslateY(-50%25)%20translateX(50%25)%3B%0A%20%20%20%20padding-inline-start%3A%20var(--_spacing---space--3)%3B%0A%20%20%7D%0A%20%0A%20%7D%0A%20%0A%20*%2F%0A%3C%2Fstyle%3E"
      />
      <_Builtin.Link
        className={_utils.cx(_styles, "nav_skip_wrap", _activeStyleVariant)}
        button={false}
        block="inline"
        options={{
          href: "#main",
        }}
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "nav_skip_text",
            "u-text-style-small",
            _activeStyleVariant
          )}
          tag="div"
        >
          {"Skip to main content"}
        </_Builtin.Block>
      </_Builtin.Link>
      <_Builtin.NavbarWrapper
        className={_utils.cx(_styles, "nav_wrap", _activeStyleVariant)}
        tag="div"
        data-state="open"
        config={{
          easing: "ease",
          easing2: "ease",
          duration: 400,
          docHeight: true,
          noScroll: false,
          animation: "default",
          collapse: "all",
        }}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "nav_contain", _activeStyleVariant)}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "nav_layout", _activeStyleVariant)}
            tag="div"
          >
            <_Builtin.NavbarButton
              className={_utils.cx(
                _styles,
                "nav_button_wrap",
                "u-order-last-small",
                _activeStyleVariant
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "nav_button_icon",
                  _activeStyleVariant
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "nav_button_line",
                    "is-1",
                    _activeStyleVariant
                  )}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "nav_button_line",
                    "is-2",
                    _activeStyleVariant
                  )}
                  tag="div"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "nav_button_label",
                  _activeStyleVariant
                )}
                tag="div"
              >
                {"Menu"}
              </_Builtin.Block>
            </_Builtin.NavbarButton>
            <_Builtin.Link
              className={_utils.cx(_styles, "nav_logo", _activeStyleVariant)}
              button={false}
              aria-label="Home Page"
              block="inline"
              options={{
                href: "#",
                preload: "prefetch",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "nav_logo_wrap",
                  _activeStyleVariant
                )}
                tag="div"
              >
                <BrandLogoFull
                  classes="u-display-none-small"
                  variant="Nav Coloring"
                />
                <BrandLogoMark
                  classes="u-display-none u-display-block-small"
                  variant="Nav Coloring"
                />
              </_Builtin.Block>
            </_Builtin.Link>
            <RsButton
              text="Plan Your Visit"
              variant="Nav CTA"
              link={{
                href: "#",
              }}
            />
            <_Builtin.NavbarMenu
              className={_utils.cx(
                _styles,
                "nav_menu_wrap",
                _activeStyleVariant
              )}
              tag="nav"
              role="navigation"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "nav_menu_scroll",
                  _activeStyleVariant
                )}
                tag="div"
                data-lenis-prevent=""
              >
                <RsMenu
                  dropdownOrLink={
                    <>
                      <RsDropdown
                        link={
                          <>
                            <RsDropdownLink
                              linkText="Plan Your Visit"
                              link={{
                                href: "#",
                                preload: "prefetch",
                              }}
                            />
                            <RsDropdownLink
                              linkText="About Restoration Southside"
                              link={{
                                href: "#",
                              }}
                            />
                            <RsDropdownLink
                              linkText="Sermons"
                              link={{
                                href: "https://restorationsouthside.churchcenter.com/channels/18388",
                                target: "_blank",
                              }}
                            />
                            <RsDropdownLink
                              linkText="Songbook"
                              link={{
                                href: "#",
                              }}
                            />
                          </>
                        }
                        dropdownText="Get Started"
                        expanded="true"
                      />
                      <RsDropdown
                        link={
                          <>
                            <RsDropdownLink
                              linkText="City Groups"
                              link={{
                                href: "#",
                              }}
                            />
                            <RsDropdownLink
                              linkText="Kid's Zone"
                              link={{
                                href: "#",
                              }}
                            />
                            <RsDropdownLink
                              linkText="Men's Ministry"
                              link={{
                                href: "#",
                              }}
                            />
                            <RsDropdownLink
                              linkText="Women's Ministry"
                              link={{
                                href: "#",
                              }}
                            />
                            <RsDropdownLink
                              linkText="Youth Ministry"
                              link={{
                                href: "#",
                              }}
                            />
                          </>
                        }
                        dropdownText="Connect"
                      />
                      <RsDropdown
                        link={
                          <>
                            <RsDropdownLink
                              linkText="Get Care"
                              link={{
                                href: "#",
                              }}
                            />
                            <RsDropdownLink
                              linkText="Sign Up to Serve"
                              link={{
                                href: "https://restorationsouthside.churchcenter.com/people/forms/148489",
                                target: "_blank",
                              }}
                            />
                            <RsDropdownLink
                              linkText="Support Restoration Southside"
                              link={{
                                href: "#",
                              }}
                            />
                            <RsDropdownLink
                              linkText="Missions"
                              link={{
                                href: "#",
                              }}
                            />
                            <RsDropdownLink
                              linkText="Mercy Requests"
                              link={{
                                href: "https://restorationsouthside.churchcenter.com/people/forms/670367",
                                target: "_blank",
                              }}
                            />
                            <RsDropdownLink
                              linkText="Next Gen Campaign"
                              visibility={false}
                            />
                          </>
                        }
                        dropdownText="Restore"
                      />
                    </>
                  }
                />
              </_Builtin.Block>
            </_Builtin.NavbarMenu>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.NavbarWrapper>
      <_Builtin.Block
        className={_utils.cx(_styles, "nav_menu_backdrop", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "nav_footer_wrap", _activeStyleVariant)}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "nav_footer_content",
              _activeStyleVariant
            )}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "nav_footer_link",
                "first",
                _activeStyleVariant
              )}
              button={false}
              block=""
              options={{
                href: "/contact",
              }}
            >
              {"Contact"}
            </_Builtin.Link>
            <SocialList />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "u-embed-js", _activeStyleVariant)}
        value="%3Cscript%3E%0Aif%20(sessionStorage.getItem(%22hide-nav-banner%22)%20%3D%3D%3D%20%22true%22)%20%7B%0A%20%20document.documentElement.classList.add(%22hide-nav-banner%22)%3B%0A%7D%0Adocument.addEventListener(%22DOMContentLoaded%22%2C%20function%20()%20%7B%0A%20%20document.querySelectorAll(%22.nav_banner_close_wrap%22).forEach((button)%20%3D%3E%20%7B%0A%20%20%20%20button.addEventListener(%22click%22%2C%20function%20()%20%7B%0A%20%20%20%20%20%20sessionStorage.setItem(%22hide-nav-banner%22%2C%20%22true%22)%3B%0A%20%20%20%20%20%20document.documentElement.classList.add(%22hide-nav-banner%22)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%20%20document.querySelectorAll(%22.nav_skip_wrap%22).forEach(function%20(link)%20%7B%0A%20%20%20%20const%20target%20%3D%20document.querySelector(%22main%22)%3B%0A%20%20%20%20if%20(!target)%20return%3B%0A%20%20%20%20link.addEventListener(%22click%22%2C%20function%20()%20%7B%0A%20%20%20%20%20%20target.setAttribute(%22tabindex%22%2C%20%22-1%22)%3B%0A%20%20%20%20%20%20target.focus()%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%7D)%3B%0A%0Adocument.addEventListener('DOMContentLoaded'%2C%20()%20%3D%3E%20%7B%0AScrollTrigger.create(%7B%0A%20%20start%3A%20150%2C%0A%20%20end%3A%20%22max%22%2C%0A%20%20onEnter%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20document.querySelector('.nav_layout').classList.add('nav_on_scroll')%3B%0A%20%20%7D%2C%0A%20%20onLeaveBack%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20document.querySelector('.nav_layout').classList.remove('nav_on_scroll')%3B%0A%20%20%7D%0A%7D)%3B%0A%7D)%3B%0A%3C%2Fscript%3E"
      />
    </_Component>
  );
}
