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

Add `data-ui="dropdown-selector"` attribute on elements.

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

[Begin](INDEX.md), [Elements](ELEMENTS.md), [Helpers](HELPERS.md), [Settings](SETTINGS.md), [Summary](SUMMARY.md), [beercss.com](https://www.beercss.com)

[Badge](BADGE.md), [Button](BUTTON.md), [Card](CARD.md), [Checkbox](CHECKBOX.md), [Chip](CHIP.md), [Container](CONTAINER.md), [Dropdown](DROPDOWN.md), [Expansion](EXPANSION.md), [Grid](GRID.md), [Icon](ICON.md), [Input](INPUT.md), [Layout](LAYOUT.md), [Loader](LOADER.md), [Media](MEDIA.md), [Modal](MODAL.md), [Navigation](NAVIGATION.md), [Overlay](OVERLAY.md), [Page](PAGE.md), [Progress](PROGRESS.md), [Radio](RADIO.md), [Select](SELECT.md), [Switch](SWITCH.md), [Table](TABLE.md), [Tabs](TABS.md), [Textarea](TEXTAREA.md), [Toast](TOAST.md), [Tooltip](TOOLTIP.md), [Typography](TYPOGRAPHY.md)