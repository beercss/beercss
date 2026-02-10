# Menu

Menus display a list of choices on temporary surfaces.

## Element

```html
<...>
  <menu>
    <li>...</li>
  </menu>
</...>
```

## Most used helpers

**Forms**

border

**Positions**

left, right, top, bottom

**Sizes**

wrap, no-wrap, min, max

**Spaces**

space, no-space, small-space, medium-space, large-space

**Triggers**

active

## Example

```html
<div>
  <button>
    <span>Button</span>
  </button>
  <menu>
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
  </menu>
</div>
```

```html
<div>
  <button>
    <span>Button</span>
  </button>
  <menu>
    <li>
      <a href="#">Item</a>
    </li>
    <li>
      <a href="#">Item</a>
    </li>
    <li>
      <a href="#">Item</a>
    </li>
  </menu>
</div>
```

## Triggers 

#### To open/close a menu

#### Method 1

Add/remove `active` class on menu.

```html
<div>
  <button>
    <span>Button</span>
  </button>
  <menu class="active">
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
  </menu>
</div>
```

#### Method 2

Add `data-ui="menu-selector"` attribute on elements.

```html
<div data-ui="#menu">
  <button>
    <span>Button</span>
  </button>
  <menu id="menu">
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
  </menu>
</div>
```

#### Method 3

Call `ui("menu-selector")`.

```html
<div>
  <button>
    <span>Button</span>
  </button>
  <menu id="menu">
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
  </menu>
</div>
```

```js
ui('#menu');
```

## Go to

[Begin](INDEX.md), [Elements](ELEMENTS.md), [Helpers](HELPERS.md), [Settings](SETTINGS.md), [Summary](SUMMARY.md), [Javascript](JAVASCRIPT.md), [beercss.com](https://www.beercss.com)

[Badge](BADGE.md), [Button](BUTTON.md), [Card](CARD.md), [Checkbox](CHECKBOX.md), [Chip](CHIP.md), [Container](CONTAINER.md), [Dialog](DIALOG.md), [Divider](DIVIDER.md), [Expansion](EXPANSION.md), [Grid](GRID.md), [Icon](ICON.md), [Input](INPUT.md), [Layout](LAYOUT.md), [List](LIST.md), [Main layout](MAIN_LAYOUT.md), [Media](MEDIA.md), [Menu](MENU.md), [Navigation](NAVIGATION.md), [Overlay](OVERLAY.md), [Page](PAGE.md), [Progress](PROGRESS.md), [Radio](RADIO.md), [Select](SELECT.md), [Shape](SHAPE.md), [Slider](SLIDER.md), [Snackbar](SNACKBAR.md), [Switch](SWITCH.md), [Table](TABLE.md), [Tabs](TABS.md), [Textarea](TEXTAREA.md), [Tooltip](TOOLTIP.md), [Typography](TYPOGRAPHY.md)