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
  <div class="max">Some text here</div>
  <a>
    <i>edit</i>
  </a>
  <a>
    <i>delete</i>
  </a>
</div>
```

## Clickable list example

```html
<a class="row wave">
  <i>home</i>
  <div>Item</div>
</div>
```

## Empty state example
```html
<div class="fill medium-height middle-align center-align">
  <div class="center-align">
    <i class="extra">mail</i>
    <h5>You have no new messages</h5>
    <p>Click the button to start a conversation</p>
    <div class="space"></div>
    <nav class="center-align">
      <button class="round">Send a message</button>
    </nav>
  </div>
</div>
```

## Go to

[Begin](INDEX.md), [Elements](ELEMENTS.md), [Helpers](HELPERS.md), [Settings](SETTINGS.md), [Summary](SUMMARY.md), [beercss.com](https://www.beercss.com)

[Badge](BADGE.md), [Button](BUTTON.md), [Card](CARD.md), [Checkbox](CHECKBOX.md), [Chip](CHIP.md), [Container](CONTAINER.md), [Dialog](DIALOG.md), [Expansion](EXPANSION.md), [Grid](GRID.md), [Icon](ICON.md), [Input](INPUT.md), [Layout](LAYOUT.md), [Loader](LOADER.md), [Media](MEDIA.md), [Menu](MENU.md), [Navigation](NAVIGATION.md), [Overlay](OVERLAY.md), [Page](PAGE.md), [Progress](PROGRESS.md), [Radio](RADIO.md), [Select](SELECT.md), [Slider](SLIDER.md), [Switch](SWITCH.md), [Table](TABLE.md), [Tabs](TABS.md), [Textarea](TEXTAREA.md), [Toast](TOAST.md), [Tooltip](TOOLTIP.md), [Typography](TYPOGRAPHY.md)
