# SETTINGS

## Default theme

It sets the default theme to dark or light.

#### Classes

light, dark 

#### Variables

--primary, --on-primary, --primary-container, --on-primary-container, --secondary, --on-secondary, --secondary-container, --on-secondary-container, --tertiary, --on-tertiary, --tertiary-container, --on-tertiary-container, --error, --on-error, --error-container, --on-error-container, --background, --on-background, --surface, --on-surface, --surface-variant, --on-surface-variant, --outline, --outline-variant, --shadow, --scrim, --inverse-surface, --inverse-on-surface, --inverse-primary, --surface-dim, --surface-bright, --surface-container-lowest, --surface-container-low, --surface-container, --surface-container-high, --surface-container-highest --active, --overlay, --elevate1, --elevate2, --elevate3, --size, --font, --font-icon, --speed1, --speed2, --speed3, --speed4

#### Example

The default theme will be set according to device color scheme. Use light or dark to set the default theme.

```html
// It will be set according to device color scheme
<body>...</body>

// To light
<body class="light">...</body>

// To dark
<body class="dark">...</body>
```

## Dynamic theme

It sets the theme and mode at runtime. You need to use [material-dynamic-colors](https://www.npmjs.com/package/material-dynamic-colors). You can get a real example of dynamic theme [in this codepen](https://codepen.io/leo-bnu/pen/LYWxjVG).

#### To change theme

Call `ui("theme", "color|path|url|file|blob|theme")`. It returns the new theme and applies on body element.
```js
// From color
let theme = await ui("theme", "#ffd700");

// From path
let theme = await ui("theme", "/image.png");

// From url (caution with cors error)
let theme = await ui("theme", "http://domain.com/image.png");

// From file
let file = document.query("input[type='file']").files[0];
let theme = await ui("theme", file);

// From blob
let blob = new Blob();
let theme = await ui("theme", blob);

// From theme
let theme = await ui("theme", theme);

// Get current theme
let theme = await ui("theme");

// The returned theme is
{
  dark: "--primary:#cfbcff;--on-primary:#381e72;--primary-container:#4f378a;--on-primary-container:#e9ddff;--secondary:#cbc2db;--on-secondary:#332d41;--secondary-container:#4a4458;--on-secondary-container:#e8def8;--tertiary:#efb8c8;--on-tertiary:#4a2532;--tertiary-container:#633b48;--on-tertiary-container:#ffd9e3;--error:#ffb4ab;--on-error:#690005;--error-container:#93000a;--on-error-container:#ffb4ab;--background:#1c1b1e;--on-background:#e6e1e6;--surface:#141316;--on-surface:#e6e1e6;--surface-variant:#49454e;--on-surface-variant:#cac4cf;--outline:#948f99;--outline-variant:#49454e;--shadow:#000000;--scrim:#000000;--inverse-surface:#e6e1e6;--inverse-on-surface:#313033;--inverse-primary:#6750a4;--surface-dim:#141316;--surface-bright:#3a383c;--surface-container-lowest:#0f0e11;--surface-container-low:#1c1b1e;--surface-container:#201f22;--surface-container-high:#2b292d;--surface-container-highest:#363438;",
  light: "--primary:#6750a4;--on-primary:#ffffff;--primary-container:#e9ddff;--on-primary-container:#22005d;--secondary:#625b71;--on-secondary:#ffffff;--secondary-container:#e8def8;--on-secondary-container:#1e192b;--tertiary:#7e5260;--on-tertiary:#ffffff;--tertiary-container:#ffd9e3;--on-tertiary-container:#31101d;--error:#ba1a1a;--on-error:#ffffff;--error-container:#ffdad6;--on-error-container:#410002;--background:#fffbff;--on-background:#1c1b1e;--surface:#fdf8fd;--on-surface:#1c1b1e;--surface-variant:#e7e0eb;--on-surface-variant:#49454e;--outline:#7a757f;--outline-variant:#cac4cf;--shadow:#000000;--scrim:#000000;--inverse-surface:#313033;--inverse-on-surface:#f4eff4;--inverse-primary:#cfbcff;--surface-dim:#ddd8dd;--surface-bright:#fdf8fd;--surface-container-lowest:#ffffff;--surface-container-low:#f7f2f7;--surface-container:#f2ecf1;--surface-container-high:#ece7eb;--surface-container-highest:#e6e1e6;"
}
```

#### To change mode

Call `ui("mode", "light|dark|auto")` to set current theme to light, dark or auto.

```js
// To light
let mode = ui("mode", "light");

// To dark
let mode = ui("mode", "dark");

// To set from device color scheme
let mode = ui("mode", "auto");

// Get current mode
let mode = ui("mode");

// The returned mode is
"light" or "dark"
```

## Customize the default theme

To customize the default theme, you need to use the css structure below.

#### Example

```css
:root,
body.light {
  --primary: #6750a4;
  --on-primary: #ffffff;
  --primary-container: #e9ddff;
  --on-primary-container: #22005d;
  --secondary: #625b71;
  --on-secondary: #ffffff;
  --secondary-container: #e8def8;
  --on-secondary-container: #1e192b;
  --tertiary: #7e5260;
  --on-tertiary: #ffffff;
  --tertiary-container: #ffd9e3;
  --on-tertiary-container: #31101d;
  --error: #ba1a1a;
  --on-error: #ffffff;
  --error-container: #ffdad6;
  --on-error-container: #410002;
  --background: #fffbff;
  --on-background: #1c1b1e;
  --surface: #fdf8fd;
  --on-surface: #1c1b1e;
  --surface-variant: #e7e0eb;
  --on-surface-variant: #49454e;
  --outline: #7a757f;
  --outline-variant: #cac4cf;
  --shadow: #000000;
  --scrim: #000000;
  --inverse-surface: #313033;
  --inverse-on-surface: #f4eff4;
  --inverse-primary: #cfbcff;
  --surface-dim: #ddd8dd;
  --surface-bright: #fdf8fd;
  --surface-container-lowest: #ffffff;
  --surface-container-low: #f7f2f7;
  --surface-container: #f2ecf1;
  --surface-container-high: #ece7eb;
  --surface-container-highest: #e6e1e6;
}

body.dark {
  --primary: #cfbcff;
  --on-primary: #381e72;
  --primary-container: #4f378a;
  --on-primary-container: #e9ddff;
  --secondary: #cbc2db;
  --on-secondary: #332d41;
  --secondary-container: #4a4458;
  --on-secondary-container: #e8def8;
  --tertiary: #efb8c8;
  --on-tertiary: #4a2532;
  --tertiary-container: #633b48;
  --on-tertiary-container: #ffd9e3;
  --error: #ffb4ab;
  --on-error: #690005;
  --error-container: #93000a;
  --on-error-container: #ffb4ab;
  --background: #1c1b1e;
  --on-background: #e6e1e6;
  --surface: #141316;
  --on-surface: #e6e1e6;
  --surface-variant: #49454e;
  --on-surface-variant: #cac4cf;
  --outline: #948f99;
  --outline-variant: #49454e;
  --shadow: #000000;
  --scrim: #000000;
  --inverse-surface: #e6e1e6;
  --inverse-on-surface: #313033;
  --inverse-primary: #6750a4;
  --surface-dim: #141316;
  --surface-bright: #3a383c;
  --surface-container-lowest: #0f0e11;
  --surface-container-low: #1c1b1e;
  --surface-container: #201f22;
  --surface-container-high: #2b292d;
  --surface-container-highest: #363438;
}
```

## Others

It sets the hover background, the overlay background, the font family order and the relative size of all elements.

#### Variables

--active, --overlay, --size

## Fonts

It sets the font and icon font of project.

#### Variables

--font, --font-icon

#### Examples

```css
 /* To import your custom font */
@import "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap";

:root {
  /* To use your custom font */
  --font: "Roboto Flex";

  /* To remove default icons */
  --font-icon: none;

  /* To use default outlined icons */
  --font-icon: "Material Symbols Outlined";

  /* To use default rounded icons */
  --font-icon: "Material Symbols Rounded";

  /* To use default sharp icons */
  --font-icon: "Material Symbols Sharp";

  /* To only use minimal subset of icons required in checkbox, radio and switch */
  --font-icon: "Material Symbols Subset";
}
```

## Elevates

It sets the box-shadow property of elements.

#### Variables

--elevate1, --elevate2, --elevate3

## Speed

It sets the animation speed of elements.

#### Variables

--speed1, --speed2, --speed3, --speed4

## Go to

[Begin](INDEX.md), [Elements](ELEMENTS.md), [Helpers](HELPERS.md), [Settings](SETTINGS.md), [Summary](SUMMARY.md), [Javascript](JAVASCRIPT.md), [beercss.com](https://www.beercss.com)

[Badge](BADGE.md), [Button](BUTTON.md), [Card](CARD.md), [Checkbox](CHECKBOX.md), [Chip](CHIP.md), [Container](CONTAINER.md), [Dialog](DIALOG.md), [Divider](DIVIDER.md), [Expansion](EXPANSION.md), [Grid](GRID.md), [Icon](ICON.md), [Input](INPUT.md), [Layout](LAYOUT.md), [List](LIST.md), [Main layout](MAIN_LAYOUT.md), [Media](MEDIA.md), [Menu](MENU.md), [Navigation](NAVIGATION.md), [Overlay](OVERLAY.md), [Page](PAGE.md), [Progress](PROGRESS.md), [Radio](RADIO.md), [Select](SELECT.md), [Shape](SHAPE.md), [Slider](SLIDER.md), [Snackbar](SNACKBAR.md), [Switch](SWITCH.md), [Table](TABLE.md), [Tabs](TABS.md), [Textarea](TEXTAREA.md), [Tooltip](TOOLTIP.md), [Typography](TYPOGRAPHY.md)
