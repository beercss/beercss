# BeerCSS Agent Skill

BeerCSS is a CSS framework based on Material Design 3 with a 3-ingredient architecture: **Settings** (CSS variables), **Elements** (semantic components), and **Helpers** (utility classes).

For installation options, DO/DON'T rules, and setup guide, see [INDEX.md](references/INDEX.md).

## Settings and Theming

### Default Theme

Set theme via body class:
```html
<body class="light">...</body>
<body class="dark">...</body>
```

### Dynamic Theme (requires material-dynamic-colors)

```js
// Set theme from color
const theme = await ui("theme", "#ffd700");

// Set mode
ui("mode", "light");   // light mode
ui("mode", "dark");    // dark mode
ui("mode", "auto");    // device color scheme

// Get current
const mode = ui("mode");
const theme = await ui("theme");
```

### Custom CSS Variables

```css
:root, body.light {
  --primary: #6750a4;
  --on-primary: #ffffff;
  --background: #fffbff;
  --surface: #fdf8fd;
  --font: "Roboto Flex";
  --font-icon: "Material Symbols Outlined";
  --size: 16px;
  --elevate1: 0 1px 3px rgba(0,0,0,0.12);
}
body.dark {
  --primary: #cfbcff;
  --on-primary: #381e72;
  --background: #1c1b1e;
  --surface: #141316;
}
```

Key CSS variables: `--primary`, `--on-primary`, `--primary-container`, `--on-primary-container`, `--secondary`, `--on-secondary`, `--tertiary`, `--on-tertiary`, `--error`, `--on-error`, `--background`, `--on-background`, `--surface`, `--on-surface`, `--surface-variant`, `--on-surface-variant`, `--outline`, `--shadow`, `--font`, `--font-icon`, `--size`, `--elevate1` through `--elevate3`, `--speed1` through `--speed4`.

## JavaScript API

The JS file is almost optional — mainly needed for dynamic theme and element triggers.

### Element Triggers

```js
// Toggle elements
ui("dialog");   // opens if closed, closes if open
ui("menu");
ui("overlay");
ui("page");
ui("snackbar");
```

### data-ui attribute (HTML-only triggers)

```html
<button data-ui="#dialog">Open Dialog</button>
<dialog id="dialog">...</dialog>

<button data-ui="#menu">Open Menu</button>
<menu id="menu">...</menu>

<button data-ui="#snackbar">Show</button>
<div class="snackbar" id="snackbar">Message</div>

<!-- Tabs / Pages -->
<div class="tabs">
  <a data-ui="#page1">Tab 1</a>
  <a data-ui="#page2">Tab 2</a>
</div>
<div class="page" id="page1">...</div>
<div class="page" id="page2">...</div>
```

## Component Reference

Each component has its own reference file in the `references/` directory. When the user asks about a specific component, read the corresponding reference file.

Available components: Badge, Button, Card, Checkbox, Chip, Container, Dialog, Divider, Expansion, Grid, Icon, Input, Layout, List, Main Layout, Media, Menu, Navigation, Overlay, Page, Progress, Radio, Select, Shape, Slider, Snackbar, Switch, Table, Tabs, Textarea, Tooltip, Typography.

See [the Elements reference](references/ELEMENTS.md) for an overview of all elements and their available helpers.

See [the Helpers reference](references/HELPERS.md) for the complete list of helper classes (colors, sizes, positions, spacing, etc.).

See [the Settings reference](references/SETTINGS.md) for CSS variable customization and theming details.

See [the JavaScript reference](references/JAVASCRIPT.md) for the full API reference.

For a quick reference of all classes and their combinations, read [the Summary reference](references/SUMMARY.md).

## Helper Classes

BeerCSS provides extensive helper classes for rapid UI development without custom CSS:

**Colors:** Full Material palette (amber, blue, cyan, green, etc.) with numbered shades 1-10, plus `-border` and `-text` variants.

**Sizes:** tiny, small, medium, large, extra, wrap, no-wrap, max, auto-width, small-width, medium-width, large-width.

**Paddings:** padding, no-padding, tiny-padding through large-padding, left/right/top/bottom/horizontal/vertical variants.

**Margins:** Same pattern as paddings.

**Forms:** border, no-border, circle, square, fill, extend, round, no-round, left/right/top/bottom-round variants.

**Positions:** left, right, center, top, bottom, middle, front, back.

**Theme helpers:** primary, primary-text, primary-border, primary-container, secondary, tertiary, error, background, surface, inverse-surface, black, white, transparent (each with -text and -border variants).

**Responsive:** responsive, s (small device), m (medium device), l (large device).

**Other:** ripple, wave, elevate, shadow, blur, opacity, zoom, scroll, active.

## Common Patterns

### Navigation bar (responsive — shows different layouts per device size)
```html
<nav class="left max l">  <!-- large: full left nav -->
  <header><h6>App</h6></header>
  <a><i>home</i><span>Home</span></a>
  <a><i>search</i><span>Search</span></a>
</nav>
<nav class="left m">       <!-- medium: compact left nav -->
  <a><i>home</i></a>
</nav>
<nav class="bottom s">     <!-- small: bottom nav -->
  <a><i>home</i></a>
</nav>
```

### Form with validation
```html
<field class="border round padding">
  <label>Email</label>
  <input type="email" placeholder="user@example.com">
  <span class="error-text">Invalid email</span>
</field>
```

### Card layout
```html
<div class="card padding">
  <img class="responsive" src="image.jpg">
  <h5>Title</h5>
  <p>Content here</p>
  <nav>
    <button class="border">Action 1</button>
    <button>Action 2</button>
  </nav>
</div>
```

### Dialog
```html
<dialog class="small">
  <h5>Title</h5>
  <p>Content</p>
  <nav class="right-align">
    <button class="border" data-ui="#dialog">Cancel</button>
    <button data-ui="#dialog">Confirm</button>
  </nav>
</dialog>
<button data-ui="#dialog">Open</button>
```
