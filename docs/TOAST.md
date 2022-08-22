# Toast

Toasts provide brief messages about app processes at bottom or top of the screen. It's not recomended to show two or more toasts at same time.

## Element

```html
<div class="toast">...</div>
```

## Most used helpers

**Positions**

top, bottom

**Triggers**

active

## Example

```html
<div class="toast">
  <i>warning</i>
  <span>I'm a toast</span>
</div>
```

## Triggers 

#### To open/close a dropdown

#### Method 1

Add/remove `active` class on toast.

```html
<div class="toast active">
  <i>warning</i>
  <span>I'm a toast</span>
</div>
```

#### Method 2

Add `data-ui="toast-selector"` attribute on elements.

```html
<button data-ui="#toast">Open</button>

<div class="toast" id="toast">
  <i>warning</i>
  <span>I'm a toast</span>
</div>
```

#### Method 3

Call `ui("toast-selector", millisecondsToHide)`. The default value for millisecondsToHide is 6000.

```html
<div class="toast" id="toast">
  <i>warning</i>
  <span>I'm a toast</span>
</div>
```

```js
ui("#toast");
```

## Go to

[Begin](INDEX.md), [Elements](ELEMENTS.md), [Helpers](HELPERS.md), [Settings](SETTINGS.md), [Summary](SUMMARY.md), [beercss.com](https://www.beercss.com)

[Badge](BADGE.md), [Button](BUTTON.md), [Card](CARD.md), [Checkbox](CHECKBOX.md), [Chip](CHIP.md), [Container](CONTAINER.md), [Dropdown](DROPDOWN.md), [Expansion](EXPANSION.md), [Grid](GRID.md), [Icon](ICON.md), [Input](INPUT.md), [Layout](LAYOUT.md), [Loader](LOADER.md), [Media](MEDIA.md), [Modal](MODAL.md), [Navigation](NAVIGATION.md), [Overlay](OVERLAY.md), [Page](PAGE.md), [Progress](PROGRESS.md), [Radio](RADIO.md), [Select](SELECT.md), [Switch](SWITCH.md), [Table](TABLE.md), [Tabs](TABS.md), [Textarea](TEXTAREA.md), [Toast](TOAST.md), [Tooltip](TOOLTIP.md), [Typography](TYPOGRAPHY.md)