---
title: 'Toolbar and icon configuration' 
date: Last Modified 
permalink: /getting-started/toolbars/
tags:
  - config
eleventyNavigation:
  order: 20 
  parent: Getting started 
  key: Toolbar configuration
  title: Toolbar configuration
---

Spacebooks come with (4) configurable toolbars, and a set of default icons. You may place a variable number of icons into any of the four toolbars; each icon can trigger various actions. 

* Toolbar icons can **link to external websites** (e.g. Github, Twitter)
* Toolbar icons can **trigger custom scripts** (e.g. search toggle, dark mode toggle, something custom)
* You can place **any icon into any toolbar** (except for the menu/hamburger icon -- this will always be the default left icon in the header toolbar)
* New SVG **icons can be customized/added**, but it takes some tedious tinkering to make them compatible with your theme colors and dark mode (see examples in _config/icons/icons.toml)

There is a default set of icons in place for each toolbar for example purposes, and these should be adjusted to suit your needs. 

##  Toolbars

The four available toolbars are described below, and each is configurable via *_config/icons/iconGroups.toml*. For example, all of the [[header]] icons defined below will appear in the header toolbar:

```
# Custom header icons
[[header]]
    name="Search"
    icon="searchIcon"
    onclick="toggleSearch()"

[[header]]
    name="Toggle darkmode"
    icon="darkmodeIcon"
    onclick="toggleDarkMode()"

[[header]]
    name="See us on Github"
    url="https://github.com/broeker/spacebook"
    icon="gitIcon"
```

Each defined icon should have a required **name**, a valid **icon** reference, and either an **onclick** reference or a **url** reference (but not both.)

For sidebar icons only, you should also include a text **label** (see example below.) 

If you don't want any icons to appear in a given toolbar, you can simply comment or delete the relevant entries from __config/icons/iconGroups.toml_.

### Header toolbar

An icon set that appears in the upper right of your header (or, as a stand-alone toolbar when viewed on a mobile device.) Best suited for 1-6 icons. By default, your header toolbar includes:

* Mobile menu icon (non-configurable)
* Search icon
* Github icon

You can easily remove/adjust any of these defaults. Example header icon to trigger toggleSearch() script:

```
[[header]]
    name="Search"
    icon="searchIcon"
    onclick="toggleSearch()"
```

### Footer left toolbar

An icon set that appears in the left of your site footer. Best suited for 0-4 icons.

```
[[footerLeft]]
    name="Contact"
    url="mailto:no-reply@my-email.com"
    icon="contactIcon"
```

By default this toolbar includes a dummy mailto: link that can be changed or removed as needed.

### Footer right toolbar

An icon set that appears in the right of your site footer.  Best suited for 0-4 icons.


```
[[footerRight]]
    name="Login"
    url="#"
    icon="cmsIcon"
```

By default you will have a dummy icon to a CMS login that can be removed or replaced as needed.

### Sidebar toolbar

An icon set that appears at the bottom of your vertical navigation toolbar (and also when in responsive mode using horizontal navigation.) Note that this toolbar will ONLY appear when you navigation style is set to `vertical`, or when the site is in responsive mode if navigation style is set to ` horizontal.` Unlike other icon toolbars, the navigation tools allows for support link text.

```
[[sidebar]]
    name="Twitter"
    url="https://twitter.com"
    label = "Follow me on Twitter"
    icon="twitterIcon"
```
By default this toolbar includes a dummy Twitter link that can replaced or adjusted as needed.


## Icon sets

Indvidual icons are defined in _config/icons/icons.toml_. There is an example set of pre-configured icons to use, or, you can add define your own icons.

All icons were taken from various open source libraries, and adjusted to work with Tailwind and to support darkmode.

To create or define a new icon, follow the examples in _config/icons/icons.toml_, paying particular attention to the necessary Tailwind classes. 

```
gitIcon = """
<svg aria-hidden="true" focusable="false" width="24" height="24" 
class="inline fill-current text-icon hover:text-icon-hover dark:text-icon-dark dark:hover:text-icon-dark-hover" 
style="-ms-transform: rotate(360deg); 
-webkit-transform: rotate(360deg); transform: rotate(360deg);" 
preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
<path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4c0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5c-10.2-26.5-24.9-33.6-24.9-33.6c-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8c11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7c-49.7-5.8-102-25.5-102-113.5c0-25.1 8.7-45.6 23-61.6c-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8c14.3 16.1 23 36.6 23 61.6c0 88.2-52.4 107.6-102.3 113.3c8 7.1 15.2 21.1 15.2 42.5c0 30.7-.3 55.5-.3 63c0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7C480 134.9 379.7 32 256 32z" /><rect x="0" y="0" width="512" height="512" fill="rgba(0, 0, 0, 0)" />
</svg>
"""
```

In the above example, note the class tag elements. In many cases, you will also need to strip out existing fill, color, or background elements from downloaded SVG files.
