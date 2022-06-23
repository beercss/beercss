# SETTINGS

## Default theme

It sets the default theme to dark or light.

#### Classes

light, dark 

#### Variables

--primary, --on-primary, --primary-container, --on-primary-container, --secondary, --on-secondary, --secondary-container, --on-secondary-container, --tertiary, --on-tertiary, --tertiary-container, --on-tertiary-container, --error, --on-error, --tertiary-error, --on-error-container, --background, --on-background, --surface, --on-surface, --surface-container, --on-surface-container, --on-surface-variant, --inverse-surface, --inverse-on-surface, --outline, --active, --overlay, --font, --size, --shadow1, --shadow2, --shadow3, --speed1, --speed2, --speed3, --speed4

#### Example

The default theme is light. Use dark to change the default theme to dark.

```html
<body>...</body>

<body class="light">...</body>

<body class="dark">...</body>
```

## Dynamic theme

It sets the theme at runtime. You need to use [material-dynamic-colors](https://www.npmjs.com/package/material-dynamic-colors).

#### Triggers

Call `ui("theme", "color|path|url|file|blob|theme")`. It returns the new theme and applies on body element. Call `ui("mode", "light|dark")` to set current theme between light and dark.

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
  dark: "--primary: #D0BCFF;--on-primary: #371E73;--primary-container: #4F378B;--on-primary-container: #EADDFF;--secondary: #CCC2DC;--on-secondary: #332D41;--secondary-container: #4A4458;--on-secondary-container: #E8DEF8;--tertiary: #EFB8C8;--on-tertiary: #492532;--tertiary-container: #633B48;--on-tertiary-container: #FFD8E4;--error: #F2B8B5;--on-error: #601410;--error-container: #8C1D18;--on-error-container: #F9DEDC;--background: #1C1B1F;--on-background: #E6E1E5;--surface: #1C1B1F;--on-surface: #E6E1E5;--outline: #938F99;--surface-variant: #49454F;--on-surface-variant: #CAC4D0;--inverse-surface: #E6E1E5;--inverse-on-surface: #313033;--active: rgba(255,255,255,.2);--mode: dark;",
  light: "--primary: #6750A4;--on-primary: #FFFFFF;--primary-container: #EADDFF;--on-primary-container: #21005E;--secondary: #625B71;--on-secondary: #FFFFFF;--secondary-container: #E8DEF8;--on-secondary-container: #1E192B;--tertiary: #7D5260;--on-tertiary: #FFFFFF;--tertiary-container: #FFD8E4;--on-tertiary-container: #370B1E;--error: #B3261E;--on-error: #FFFFFF;--error-container: #F9DEDC;--on-error-container: #370B1E;--background: #FFFBFE;--on-background: #1C1B1F;--surface: #FFFBFE;--on-surface: #1C1B1F;--outline: #79747E;--surface-variant: #E7E0EC;--on-surface-variant: #49454E;--inverse-surface: #313033;--inverse-on-surface: #F4EFF4;--active: rgba(0,0,0,.1);--mode: light;"
}

// Change to light mode
let mode = ui("mode", "light");

// Change to dark mode
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
  --outline: #79747E;
  --active: rgba(0,0,0,.1);
  --overlay: rgba(0,0,0,.5);
  --shadow1: 0 2rem 2rem 0 rgba(0, 0, 0, .14), 0 1rem 5rem 0 rgba(0, 0, 0, .12), 0 3rem 1rem -2rem rgba(0, 0, 0, .2);
  --shadow2: 0 6rem 10rem 0 rgba(0, 0, 0, .14), 0 1rem 18rem 0 rgba(0, 0, 0, .12), 0 3rem 5rem -1rem rgba(0, 0, 0, .3);
  --shadow3: 0 10rem 16rem 0 rgba(0, 0, 0, .14), 0 1rem 31rem 0 rgba(0, 0, 0, .12), 0 3rem 9rem 0rem rgba(0, 0, 0, .4);
  --size: 1px;
  --font: "Roboto", BlinkMacSystemFont, -apple-system, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
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
  --outline: #938F99;
  --active: rgba(255,255,255,.2);
  --overlay: rgba(0,0,0,.5);
  --shadow1: 0 2rem 2rem 0 rgba(0, 0, 0, .14), 0 1rem 5rem 0 rgba(0, 0, 0, .12), 0 3rem 1rem -2rem rgba(0, 0, 0, .2);
  --shadow2: 0 6rem 10rem 0 rgba(0, 0, 0, .14), 0 1rem 18rem 0 rgba(0, 0, 0, .12), 0 3rem 5rem -1rem rgba(0, 0, 0, .3);
  --shadow3: 0 10rem 16rem 0 rgba(0, 0, 0, .14), 0 1rem 31rem 0 rgba(0, 0, 0, .12), 0 3rem 9rem 0rem rgba(0, 0, 0, .4);
  --size: 1px;
  --font: "Roboto", BlinkMacSystemFont, -apple-system, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  --speed1: .1s;
  --speed2: .2s;
  --speed3: .3s;
  --speed4: .4s;
}
```

## Others

It sets the hover background, the overlay background, the font family order and the relative size of all elements.

#### Variables

--active, --overlay, --font, --size

## Shadows

It sets the box-shadow property of elements.

#### Variables

--shadow1, --shadow2, --shadow3

## Speed

It sets the animation speed of elements.

#### Variables

--speed1, --speed2, --speed3, --speed4

## Go to

[Begin](https://github.com/beercss/beercss/blob/main/docs/INDEX.md), [Elements](https://github.com/beercss/beercss/blob/main/docs/ELEMENTS.md), [Helpers](https://github.com/beercss/beercss/blob/main/docs/HELPERS.md), [Settings](https://github.com/beercss/beercss/blob/main/docs/SETTINGS.md), [Summary](https://github.com/beercss/beercss/blob/main/docs/SUMMARY.md), [beercss.com](https://www.beercss.com)

[Badge](https://github.com/beercss/beercss/blob/main/docs/BADGE.md), [Button](https://github.com/beercss/beercss/blob/main/docs/BUTTON.md), [Card](https://github.com/beercss/beercss/blob/main/docs/CARD.md), [Checkbox](https://github.com/beercss/beercss/blob/main/docs/CHECKBOX.md), [Chip](https://github.com/beercss/beercss/blob/main/docs/CHIP.md), [Main](https://github.com/beercss/beercss/blob/main/docs/MAIN.md), [Dropdown](https://github.com/beercss/beercss/blob/main/docs/DROPDOWN.md), [Expansion](https://github.com/beercss/beercss/blob/main/docs/EXPANSION.md), [Icon](https://github.com/beercss/beercss/blob/main/docs/ICON.md), [Input](https://github.com/beercss/beercss/blob/main/docs/INPUT.md), [Layout](https://github.com/beercss/beercss/blob/main/docs/LAYOUT.md), [Loader](https://github.com/beercss/beercss/blob/main/docs/LOADER.md), [Media](https://github.com/beercss/beercss/blob/main/docs/MEDIA.md), [Modal](https://github.com/beercss/beercss/blob/main/docs/MODAL.md), [Nav](https://github.com/beercss/beercss/blob/main/docs/NAV.md), [Overlay](https://github.com/beercss/beercss/blob/main/docs/OVERLAY.md), [Page](https://github.com/beercss/beercss/blob/main/docs/PAGE.md), [Progress](https://github.com/beercss/beercss/blob/main/docs/PROGRESS.md), [Radio](https://github.com/beercss/beercss/blob/main/docs/RADIO.md), [Row](https://github.com/beercss/beercss/blob/main/docs/ROW.md), [Select](https://github.com/beercss/beercss/blob/main/docs/SELECT.md), [Switch](https://github.com/beercss/beercss/blob/main/docs/SWITCH.md), [Table](https://github.com/beercss/beercss/blob/main/docs/TABLE.md), [Tabs](https://github.com/beercss/beercss/blob/main/docs/TABS.md), [Textarea](https://github.com/beercss/beercss/blob/main/docs/TEXTAREA.md), [Toast](https://github.com/beercss/beercss/blob/main/docs/TOAST.md), [Tooltip](https://github.com/beercss/beercss/blob/main/docs/TOOLTIP.md), [Typography](https://github.com/beercss/beercss/blob/main/docs/TYPOGRAPHY.md)