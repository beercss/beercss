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

Add `data-ui="toast-selector"` attribute on elements and call `ui()` after html output.

```html
<button data-ui="#toast">Open</button>

<div class="toast" id="toast">
  <i>warning</i>
  <span>I'm a toast</span>
</div>
```

```js
ui();
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

[Begin](https://github.com/beercss/beercss/blob/main/docs/INDEX.md), [Elements](https://github.com/beercss/beercss/blob/main/docs/ELEMENTS.md), [Helpers](https://github.com/beercss/beercss/blob/main/docs/HELPERS.md), [Settings](https://github.com/beercss/beercss/blob/main/docs/SETTINGS.md), [Summary](https://github.com/beercss/beercss/blob/main/docs/SUMMARY.md), [beercss.com](https://www.beercss.com)

[Badge](https://github.com/beercss/beercss/blob/main/docs/BADGE.md), [Button](https://github.com/beercss/beercss/blob/main/docs/BUTTON.md), [Card](https://github.com/beercss/beercss/blob/main/docs/CARD.md), [Checkbox](https://github.com/beercss/beercss/blob/main/docs/CHECKBOX.md), [Chip](https://github.com/beercss/beercss/blob/main/docs/CHIP.md), [Main](https://github.com/beercss/beercss/blob/main/docs/MAIN.md), [Dropdown](https://github.com/beercss/beercss/blob/main/docs/DROPDOWN.md), [Expansion](https://github.com/beercss/beercss/blob/main/docs/EXPANSION.md), [Icon](https://github.com/beercss/beercss/blob/main/docs/ICON.md), [Input](https://github.com/beercss/beercss/blob/main/docs/INPUT.md), [Layout](https://github.com/beercss/beercss/blob/main/docs/LAYOUT.md), [Loader](https://github.com/beercss/beercss/blob/main/docs/LOADER.md), [Media](https://github.com/beercss/beercss/blob/main/docs/MEDIA.md), [Modal](https://github.com/beercss/beercss/blob/main/docs/MODAL.md), [Nav](https://github.com/beercss/beercss/blob/main/docs/NAV.md), [Overlay](https://github.com/beercss/beercss/blob/main/docs/OVERLAY.md), [Page](https://github.com/beercss/beercss/blob/main/docs/PAGE.md), [Progress](https://github.com/beercss/beercss/blob/main/docs/PROGRESS.md), [Radio](https://github.com/beercss/beercss/blob/main/docs/RADIO.md), [Row](https://github.com/beercss/beercss/blob/main/docs/ROW.md), [Select](https://github.com/beercss/beercss/blob/main/docs/SELECT.md), [Switch](https://github.com/beercss/beercss/blob/main/docs/SWITCH.md), [Table](https://github.com/beercss/beercss/blob/main/docs/TABLE.md), [Tabs](https://github.com/beercss/beercss/blob/main/docs/TABS.md), [Textarea](https://github.com/beercss/beercss/blob/main/docs/TEXTAREA.md), [Toast](https://github.com/beercss/beercss/blob/main/docs/TOAST.md), [Tooltip](https://github.com/beercss/beercss/blob/main/docs/TOOLTIP.md), [Typography](https://github.com/beercss/beercss/blob/main/docs/TYPOGRAPHY.md)