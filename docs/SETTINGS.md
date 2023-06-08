# SETTINGS

## Default theme

It sets the default theme to dark or light.

#### Classes

light, dark 

#### Variables

--primary, --on-primary, --primary-container, --on-primary-container, --secondary, --on-secondary, --secondary-container, --on-secondary-container, --tertiary, --on-tertiary, --tertiary-container, --on-tertiary-container, --error, --on-error, --tertiary-error, --on-error-container, --background, --on-background, --surface, --on-surface, --surface-container, --on-surface-container, --on-surface-variant, --inverse-surface, --inverse-on-surface, --inverse-primary, --inverse-on-primary, --outline, --active, --overlay, --elevate1, --elevate2, --elevate3, --size, --font, --font-icon, --speed1, --speed2, --speed3, --speed4

#### Example

The default theme is light. Use dark to change the default theme to dark.

```html
<body>...</body>

<body class="light">...</body>

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
  dark: "--primary: #D0BCFF;--on-primary: #371E73;--primary-container: #4F378B;--on-primary-container: #EADDFF;--secondary: #CCC2DC;--on-secondary: #332D41;--secondary-container: #4A4458;--on-secondary-container: #E8DEF8;--tertiary: #EFB8C8;--on-tertiary: #492532;--tertiary-container: #633B48;--on-tertiary-container: #FFD8E4;--error: #F2B8B5;--on-error: #601410;--error-container: #8C1D18;--on-error-container: #F9DEDC;--background: #1C1B1F;--on-background: #E6E1E5;--surface: #1C1B1F;--on-surface: #E6E1E5;--outline: #938F99;--surface-variant: #49454F;--on-surface-variant: #CAC4D0;--inverse-surface: #E6E1E5;--inverse-on-surface: #313033;--inverse-primary: #6750A4;--inverse-on-primary: #FFFFFF;",
  light: "--primary: #6750A4;--on-primary: #FFFFFF;--primary-container: #EADDFF;--on-primary-container: #21005E;--secondary: #625B71;--on-secondary: #FFFFFF;--secondary-container: #E8DEF8;--on-secondary-container: #1E192B;--tertiary: #7D5260;--on-tertiary: #FFFFFF;--tertiary-container: #FFD8E4;--on-tertiary-container: #370B1E;--error: #B3261E;--on-error: #FFFFFF;--error-container: #F9DEDC;--on-error-container: #370B1E;--background: #FFFBFE;--on-background: #1C1B1F;--surface: #FFFBFE;--on-surface: #1C1B1F;--outline: #79747E;--surface-variant: #E7E0EC;--on-surface-variant: #49454E;--inverse-surface: #313033;--inverse-on-surface: #F4EFF4;--inverse-primary: #D0BCFF;--inverse-on-primary: #371E73;"
}
```

#### To change mode

Call `ui("mode", "light|dark")` to set current theme between light and dark.

```js
// To light
let mode = ui("mode", "light");

// To dark
let mode = ui("mode", "dark");

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
  --primary: #6750A4;
  --on-primary: #FFFFFF;
  --primary-container: #EADDFF;
  --on-primary-container: #21005E;
  --secondary: #625B71;
  --on-secondary: #FFFFFF;
  --secondary-container: #E8DEF8;
  --on-secondary-container: #1E192B;
  --tertiary: #7D5260;
  --on-tertiary: #FFFFFF;
  --tertiary-container: #FFD8E4;
  --on-tertiary-container: #370B1E;
  --error: #B3261E;
  --on-error: #FFFFFF;
  --error-container: #F9DEDC;
  --on-error-container: #370B1E;
  --background: #FFFBFE;
  --on-background: #1C1B1F;
  --surface: #FFFBFE;
  --on-surface: #1C1B1F;
  --surface-variant: #E7E0EC;
  --on-surface-variant: #49454E;
  --inverse-surface: #313033;
  --inverse-on-surface: #F4EFF4;
  --inverse-primary: #D0BCFF;
  --inverse-on-primary: #371E73;
  --outline: #79747E;
  --active: rgba(0,0,0,.1);
  --overlay: rgba(0,0,0,.5);
  --elevate1: 0 0.125rem 0.125rem 0 rgb(0 0 0 / 0.32);
  --elevate2: 0 0.25rem 0.5rem 0 rgb(0 0 0 / 0.4);
  --elevate3: 0 0.375rem 0.75rem 0 rgb(0 0 0 / 0.48);
  --size: 16px;
  --font: Inter, Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;
  --font-icon: "Material Symbols Outlined";
  --speed1: .1s;
  --speed2: .2s;
  --speed3: .3s;
  --speed4: .4s;  
}

body.dark {
  --primary: #D0BCFF;
  --on-primary: #371E73;
  --primary-container: #4F378B;
  --on-primary-container: #EADDFF;
  --secondary: #CCC2DC;
  --on-secondary: #332D41;
  --secondary-container: #4A4458;
  --on-secondary-container: #E8DEF8;
  --tertiary: #EFB8C8;
  --on-tertiary: #492532;
  --tertiary-container: #633B48;
  --on-tertiary-container: #FFD8E4;
  --error: #F2B8B5;
  --on-error: #601410;
  --error-container: #8C1D18;
  --on-error-container: #F9DEDC;
  --background: #1C1B1F;
  --on-background: #E6E1E5;
  --surface: #1C1B1F;
  --on-surface: #E6E1E5;
  --surface-variant: #49454F;
  --on-surface-variant: #CAC4D0;
  --inverse-surface: #E6E1E5;
  --inverse-on-surface: #313033;
  --inverse-primary: #6750A4;
  --inverse-on-primary: #FFF;
  --outline: #938F99;
  --active: rgba(255,255,255,.2);
  --overlay: rgba(0,0,0,.5);
  --elevate1: 0 0.125rem 0.125rem 0 rgb(0 0 0 / 0.32);
  --elevate2: 0 0.25rem 0.5rem 0 rgb(0 0 0 / 0.4);
  --elevate3: 0 0.375rem 0.75rem 0 rgb(0 0 0 / 0.48);
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

[Begin](INDEX.md), [Elements](ELEMENTS.md), [Helpers](HELPERS.md), [Settings](SETTINGS.md), [Summary](SUMMARY.md), [beercss.com](https://www.beercss.com)

[Badge](BADGE.md), [Button](BUTTON.md), [Card](CARD.md), [Checkbox](CHECKBOX.md), [Chip](CHIP.md), [Container](CONTAINER.md), [Dialog](DIALOG.md), [Expansion](EXPANSION.md), [Grid](GRID.md), [Icon](ICON.md), [Input](INPUT.md), [Layout](LAYOUT.md), [Loader](LOADER.md), [Media](MEDIA.md), [Menu](MENU.md), [Navigation](NAVIGATION.md), [Overlay](OVERLAY.md), [Page](PAGE.md), [Progress](PROGRESS.md), [Radio](RADIO.md), [Select](SELECT.md), [Slider](SLIDER.md), [Switch](SWITCH.md), [Table](TABLE.md), [Tabs](TABS.md), [Textarea](TEXTAREA.md), [Toast](TOAST.md), [Tooltip](TOOLTIP.md), [Typography](TYPOGRAPHY.md)
