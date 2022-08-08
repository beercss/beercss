# Layout

Layouts are containers that you can place in any position. There are absolute and fixed elements.

## Element

```html
<...>
  <div class="absolute">...</div>
</...>

<div class="fixed">...</div>
```

## Most used helpers

**Alignments**

left-align, right-align, center-align, top-align, bottom-align, middle-align

**Positions**

left, right, top, bottom, front, back

**Sizes**

small, medium, large, responsive


## Absolute example

Absolute elements are relative to container.

```html
<article class="small">
  <div class="absolute left bottom right">
    <h5>Bottom of container</h5>
  </div>
</article>
```

## Fixed example

Fixed elements are relative to document.

```html
<div class="fixed left bottom right">
  <h5>Bottom of document</h5>
</div>
```

## Alignment example

```html
<article class="small center-align middle-align">
  <span>Aligned</span>
</article>
```

## Position example

```html
<article class="small">
  <span class="absolute center middle">Positioned</span>
</article>
```

## Header and footer examples

Headers and footers are `position: sticky` when `fixed`.

```html
<article class="small-width small-height scroll">
  <header class="fixed bold">Fixed header</header>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <footer class="fixed bold">Fixed footer</header>
</article>
```

## Top app bar example

```html
<header class="primary">
  <nav>
    <button class="circle transparent">
      <i>arrow_backward</i>
    </button>
    <h5>Title large</h5>
    <div class="max"></div>
    <button class="circle transparent">
      <i>attach_file</i>
    </button>
    <button class="circle transparent">
      <i>today</i>
    </button>
    <button class="circle transparent">
      <i>more_vert</i>
    </button>
  </nav>
</header>
```

## Bottom app bar example

```html
<footer>
  <nav>
    <button class="circle transparent">
      <i>check_box_filled</i>
    </button>
    <button class="circle transparent">
      <i>brush</i>
    </button>
    <button class="circle transparent">
      <i>mic</i>
    </button>
    <button class="circle transparent">
      <i>image</i>
    </button>
    <div class="max"></div>
    <button class="square round extend">
      <i>add</i>
    </button>
  </nav>
</header>
```

## List example

```html
<div class="row">
  <a>
    <i>warning</i>
  </a>
  <div class="max">
    <div>Title</div>
    <div class="small-text">Some text here</div>
  </div>
  <a>
    <i>edit</i>
  </a>
  <a>
    <i>delete</i>
  </a>
</div>
```

## Go to

[Begin](https://github.com/beercss/beercss/blob/main/docs/INDEX.md), [Elements](https://github.com/beercss/beercss/blob/main/docs/ELEMENTS.md), [Helpers](https://github.com/beercss/beercss/blob/main/docs/HELPERS.md), [Settings](https://github.com/beercss/beercss/blob/main/docs/SETTINGS.md), [Summary](https://github.com/beercss/beercss/blob/main/docs/SUMMARY.md), [beercss.com](https://www.beercss.com)

[Badge](https://github.com/beercss/beercss/blob/main/docs/BADGE.md), [Button](https://github.com/beercss/beercss/blob/main/docs/BUTTON.md), [Card](https://github.com/beercss/beercss/blob/main/docs/CARD.md), [Checkbox](https://github.com/beercss/beercss/blob/main/docs/CHECKBOX.md), [Chip](https://github.com/beercss/beercss/blob/main/docs/CHIP.md), [Container](https://github.com/beercss/beercss/blob/main/docs/CONTAINER.md), [Dropdown](https://github.com/beercss/beercss/blob/main/docs/DROPDOWN.md), [Expansion](https://github.com/beercss/beercss/blob/main/docs/EXPANSION.md), [Grid](https://github.com/beercss/beercss/blob/main/docs/GRID.md), [Icon](https://github.com/beercss/beercss/blob/main/docs/ICON.md), [Input](https://github.com/beercss/beercss/blob/main/docs/INPUT.md), [Layout](https://github.com/beercss/beercss/blob/main/docs/LAYOUT.md), [Loader](https://github.com/beercss/beercss/blob/main/docs/LOADER.md), [Media](https://github.com/beercss/beercss/blob/main/docs/MEDIA.md), [Modal](https://github.com/beercss/beercss/blob/main/docs/MODAL.md), [Navigation](https://github.com/beercss/beercss/blob/main/docs/NAVIGATION.md), [Overlay](https://github.com/beercss/beercss/blob/main/docs/OVERLAY.md), [Page](https://github.com/beercss/beercss/blob/main/docs/PAGE.md), [Progress](https://github.com/beercss/beercss/blob/main/docs/PROGRESS.md), [Radio](https://github.com/beercss/beercss/blob/main/docs/RADIO.md), [Select](https://github.com/beercss/beercss/blob/main/docs/SELECT.md), [Switch](https://github.com/beercss/beercss/blob/main/docs/SWITCH.md), [Table](https://github.com/beercss/beercss/blob/main/docs/TABLE.md), [Tabs](https://github.com/beercss/beercss/blob/main/docs/TABS.md), [Textarea](https://github.com/beercss/beercss/blob/main/docs/TEXTAREA.md), [Toast](https://github.com/beercss/beercss/blob/main/docs/TOAST.md), [Tooltip](https://github.com/beercss/beercss/blob/main/docs/TOOLTIP.md), [Typography](https://github.com/beercss/beercss/blob/main/docs/TYPOGRAPHY.md)
