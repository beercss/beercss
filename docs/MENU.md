# Menu

Menus display a list of choices on temporary surfaces.

## Element

```html
<...>
  <menu>...</menu>
</...>
```

## Most used helpers

**Positions**

left, right

**Sizes**

wrap, no-wrap, min, max

**Triggers**

active

## Example

```html
<button>
  <span>Button</span>
  <menu class="no-wrap">
    <a>Item</a>
    <a>Item</a>
    <a>Item</a>
  </menu>
</button>
```

## Triggers 

#### To open/close a menu

#### Method 1

Add/remove `active` class on menu.

```html
<button>
  <span>Button</span>
  <menu class="no-wrap active">
    <a>Item</a>
    <a>Item</a>
    <a>Item</a>
  </menu>
</button>
```

#### Method 2

Add `data-ui="menu-selector"` attribute on elements.

```html
<button data-ui="#menu">
  <span>Button</span>
  <menu id="menu" class="no-wrap">
    <a>Item</a>
    <a>Item</a>
    <a>Item</a>
  </menu>
</button>
```

#### Method 3

Call `ui("menu-selector")`.

```html
<button>
  <span>Button</span>
  <menu id="menu" class="no-wrap">
    <a>Item</a>
    <a>Item</a>
    <a>Item</a>
  </menu>
</button>
```

```js
ui('#menu');
```

## Go to

[Begin](INDEX.md), [Elements](ELEMENTS.md), [Helpers](HELPERS.md), [Settings](SETTINGS.md), [Summary](SUMMARY.md), [beercss.com](https://www.beercss.com)

[Badge](BADGE.md), [Button](BUTTON.md), [Card](CARD.md), [Checkbox](CHECKBOX.md), [Chip](CHIP.md), [Container](CONTAINER.md), [Dialog](DIALOG.md), [Expansion](EXPANSION.md), [Grid](GRID.md), [Icon](ICON.md), [Input](INPUT.md), [Layout](LAYOUT.md), [List](LIST.md), [Main layout](MAIN_LAYOUT.md), [Media](MEDIA.md), [Menu](MENU.md), [Navigation](NAVIGATION.md), [Overlay](OVERLAY.md), [Page](PAGE.md), [Progress](PROGRESS.md), [Radio](RADIO.md), [Select](SELECT.md), [Slider](SLIDER.md), [Switch](SWITCH.md), [Table](TABLE.md), [Tabs](TABS.md), [Textarea](TEXTAREA.md), [Snackbar](SNACKBAR.md), [Tooltip](TOOLTIP.md), [Typography](TYPOGRAPHY.md)