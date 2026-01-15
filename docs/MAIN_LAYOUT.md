# Main layout

The main layout is a common html structure to setup your pages. For RTL languages set the attribute `dir="rtl"` on `body` element (or any other element). [Check the main layout example on Codepen](https://codepen.io/leo-bnu/pen/yLKLPxj).

## Example

```html
<nav class="top">...</nav>
<nav class="bottom">...</nav>
<nav class="left">...</nav>
<nav class="right">...</nav>
<header class="responsive|fixed">...</header>
<main class="responsive">...</main>
<footer class="responsive|fixed">...</footer>
```

This is how the code above will be rendered (you don't need to use all elements):

```
nav.left | nav.top    | nav.right
nav.left | header     | nav.right
nav.left | main       | nav.right
nav.left | footer     | nav.right
nav.left | nav.bottom | nav.right
```

## Most used helpers

The `responsive` helper is used to define a max-width for the element. If the max-width is reached the element will be on center of screen. The `fixed` helper is used to keep the `<header>` (on top) or `<footer>` (on bottom) even after scrolling the page.

**Positions**

top, left, right, bottom, fixed

**Sizes**

responsive

## Compact example

```html
<nav class="bottom">
  <a>
    <i>home</i>
    <span>Home</span>
  </a>
  <a>
    <i>search</i>
    <span>Search</span>
  </a>
  <a>
    <i>share</i>
    <span>share</span>
  </a>
</nav>
<main class="responsive">
  <h3>Compact</h3>
</main>
```

## Medium example

```html
<nav class="left">
  <a>
    <i>home</i>
    <span>Home</span>
  </a>
  <a>
    <i>search</i>
    <span>Search</span>
  </a>
  <a>
    <i>share</i>
    <span>share</span>
  </a>
</nav>
<main class="responsive">
  <h3>Medium</h3>
</main>
```

## Expanded example

```html
<nav class="left max">
  <a>
    <i>home</i>
    <span>Home</span>
  </a>
  <a>
    <i>search</i>
    <span>Search</span>
  </a>
  <a>
    <i>share</i>
    <span>share</span>
  </a>
</nav>
<main class="responsive">
  <h3>Expanded</h3>
</main>
```

## Multi panes example

```html
<nav class="left">
  <a>
    <i>home</i>
    <span>Home</span>
  </a>
  <a>
    <i>search</i>
    <span>Search</span>
  </a>
  <a>
    <i>share</i>
    <span>share</span>
  </a>
</nav>
<main class="responsive">
  <div class="grid">
    <div class="s6">
      <h3>Pane 1</h3>
    </div>
    <div class="s6">
      <h3>Pane 2</h3>
    </div>
  </div>
</main>
```

## Custom example

```html
<nav class="left">
  <a>
    <i>home</i>
    <span>Home</span>
  </a>
  <a>
    <i>search</i>
    <span>Search</span>
  </a>
  <a>
    <i>share</i>
    <span>share</span>
  </a>
</nav>
<main class="responsive">
  <div class="grid">
    <div class="s12 m12 l6">
      <h3>Pane 1</h3>
    </div>
    <div class="s12 m12 l6">
      <h3>Pane 2</h3>
    </div>
    <div class="s12 m12 l6">
      <h3>Pane 3</h3>
    </div>
    <div class="s12 m12 l6">
      <h3>Pane 4</h3>
    </div>
  </div>
</main>
```

## Go to

[Begin](INDEX.md), [Elements](ELEMENTS.md), [Helpers](HELPERS.md), [Settings](SETTINGS.md), [Summary](SUMMARY.md), [Javascript](JAVASCRIPT.md), [beercss.com](https://www.beercss.com)

[Badge](BADGE.md), [Button](BUTTON.md), [Card](CARD.md), [Checkbox](CHECKBOX.md), [Chip](CHIP.md), [Container](CONTAINER.md), [Dialog](DIALOG.md), [Divider](DIVIDER.md), [Expansion](EXPANSION.md), [Grid](GRID.md), [Icon](ICON.md), [Input](INPUT.md), [Layout](LAYOUT.md), [List](LIST.md), [Main layout](MAIN_LAYOUT.md), [Media](MEDIA.md), [Menu](MENU.md), [Navigation](NAVIGATION.md), [Overlay](OVERLAY.md), [Page](PAGE.md), [Progress](PROGRESS.md), [Radio](RADIO.md), [Select](SELECT.md), [Shape](SHAPE.md), [Slider](SLIDER.md), [Snackbar](SNACKBAR.md), [Switch](SWITCH.md), [Table](TABLE.md), [Tabs](TABS.md), [Textarea](TEXTAREA.md), [Tooltip](TOOLTIP.md), [Typography](TYPOGRAPHY.md)