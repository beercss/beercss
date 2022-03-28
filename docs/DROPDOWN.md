# Dropdown

Dropdowns display a list of choices on temporary surfaces.

## Element

```html
<...>
  <div class="dropdown">...</div>
</...>
```

## Most used helpers

**Positions**

left, right

**Sizes**

wrap, no-wrap

**Triggers**

active

## Example

```html
<button>
  <span>Button</span>
  <div class="dropdown no-wrap">
    <a>Item</a>
    <a>Item</a>
    <a>Item</a>
  </div>
</button>
```

## Triggers 

#### To open/close a dropdown

#### Method 1

Add/remove `active` class on dropdown.

```html
<button>
  <span>Button</span>
  <div class="dropdown no-wrap active">
    <a>Item</a>
    <a>Item</a>
    <a>Item</a>
  </div>
</button>
```

#### Method 2

Add `data-ui="dropdown-selector"` attribute on elements and call `ui()` after html output.

```html
<button data-ui="#dropdown">
  <span>Button</span>
  <div id="dropdown" class="dropdown no-wrap">
    <a>Item</a>
    <a>Item</a>
    <a>Item</a>
  </div>
</button>
```

```js
ui();
```

#### Method 3

Call `ui("dropdown-selector")`.

```html
<button>
  <span>Button</span>
  <div id="dropdown" class="dropdown no-wrap">
    <a>Item</a>
    <a>Item</a>
    <a>Item</a>
  </div>
</button>
```

```js
ui('#dropdown');
```

## Go to

[Begin](https://github.com/beercss/beercss/blob/main/docs/INDEX.md), [Elements](https://github.com/beercss/beercss/blob/main/docs/ELEMENTS.md), [Helpers](https://github.com/beercss/beercss/blob/main/docs/HELPERS.md), [Settings](https://github.com/beercss/beercss/blob/main/docs/SETTINGS.md), [Summary](https://github.com/beercss/beercss/blob/main/docs/SUMMARY.md), [beercss.com](https://www.beercss.com)

[Badge](https://github.com/beercss/beercss/blob/main/docs/BADGE.md), [Button](https://github.com/beercss/beercss/blob/main/docs/BUTTON.md), [Card](https://github.com/beercss/beercss/blob/main/docs/CARD.md), [Checkbox](https://github.com/beercss/beercss/blob/main/docs/CHECKBOX.md), [Chip](https://github.com/beercss/beercss/blob/main/docs/CHIP.md), [Container](https://github.com/beercss/beercss/blob/main/docs/CONTAINER.md), [Dropdown](https://github.com/beercss/beercss/blob/main/docs/DROPDOWN.md), [Expansion](https://github.com/beercss/beercss/blob/main/docs/EXPANSION.md), [Icon](https://github.com/beercss/beercss/blob/main/docs/ICON.md), [Input](https://github.com/beercss/beercss/blob/main/docs/INPUT.md), [Layout](https://github.com/beercss/beercss/blob/main/docs/LAYOUT.md), [Loader](https://github.com/beercss/beercss/blob/main/docs/LOADER.md), [Media](https://github.com/beercss/beercss/blob/main/docs/MEDIA.md), [Menu](https://github.com/beercss/beercss/blob/main/docs/MENU.md), [Modal](https://github.com/beercss/beercss/blob/main/docs/MODAL.md), [Nav](https://github.com/beercss/beercss/blob/main/docs/NAV.md), [Overlay](https://github.com/beercss/beercss/blob/main/docs/OVERLAY.md), [Page](https://github.com/beercss/beercss/blob/main/docs/PAGE.md), [Progress](https://github.com/beercss/beercss/blob/main/docs/PROGRESS.md), [Radio](https://github.com/beercss/beercss/blob/main/docs/RADIO.md), [Row](https://github.com/beercss/beercss/blob/main/docs/ROW.md), [Select](https://github.com/beercss/beercss/blob/main/docs/SELECT.md), [Switch](https://github.com/beercss/beercss/blob/main/docs/SWITCH.md), [Table](https://github.com/beercss/beercss/blob/main/docs/TABLE.md), [Tabs](https://github.com/beercss/beercss/blob/main/docs/TABS.md), [Textarea](https://github.com/beercss/beercss/blob/main/docs/TEXTAREA.md), [Toast](https://github.com/beercss/beercss/blob/main/docs/TOAST.md), [Tooltip](https://github.com/beercss/beercss/blob/main/docs/TOOLTIP.md), [Typography](https://github.com/beercss/beercss/blob/main/docs/TYPOGRAPHY.md)