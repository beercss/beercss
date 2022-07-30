# Modal

Modals inform users about a task and can contain critical information, required decisions, involve multiple tasks, provide access to destinations in your app and contain a small forms to submit.

## Element

```html
<div class="modal">...</div>
```

## Most used helpers

**Forms**

border, round, left-round, right-round, top-round, bottom-round

**Positions**

left, right, top, bottom

**Elevates**

no-elevate, small-elevate, medium-elevate, large-elevate

**Sizes**

small, medium, large, max

**Triggers**

active

## Example

```html
<div class="modal">
  <h5>Title</h5>
  <p>Content of modal</p>
  <nav>
    <button>Cancel</button>
    <button>Confirm</button>
  </nav>
</div>
```

## Triggers 

#### To open/close a modal

#### Method 1

Add/remove `active` class on modal.

```html
<div class="modal active">
  <h5>Title</h5>
  <p>Content of modal</p>
  <nav>
    <button>Cancel</button>
    <button>Confirm</button>
  </nav>
</div>
```

#### Method 2

Add `data-ui="modal-selector"` attribute on elements.

```html
<button data-ui="#modal">Open modal</button>

<div class="modal" id="modal">
  <h5>Title</h5>
  <p>Content of modal</p>
  <nav>
    <button data-ui="#modal">Cancel</button>
    <button data-ui="#modal">Confirm</button>
  </nav>
</div>
```

#### Method 3

Call `ui("modal-selector")`

```html
<div class="modal" id="modal">
  <h5>Title</h5>
  <p>Content of modal</p>
  <nav>
    <button>Cancel</button>
    <button>Confirm</button>
  </nav>
</div>
```

```js
ui('#modal');
```

## Go to

[Begin](https://github.com/beercss/beercss/blob/main/docs/INDEX.md), [Elements](https://github.com/beercss/beercss/blob/main/docs/ELEMENTS.md), [Helpers](https://github.com/beercss/beercss/blob/main/docs/HELPERS.md), [Settings](https://github.com/beercss/beercss/blob/main/docs/SETTINGS.md), [Summary](https://github.com/beercss/beercss/blob/main/docs/SUMMARY.md), [beercss.com](https://www.beercss.com)

[Badge](https://github.com/beercss/beercss/blob/main/docs/BADGE.md), [Button](https://github.com/beercss/beercss/blob/main/docs/BUTTON.md), [Card](https://github.com/beercss/beercss/blob/main/docs/CARD.md), [Checkbox](https://github.com/beercss/beercss/blob/main/docs/CHECKBOX.md), [Chip](https://github.com/beercss/beercss/blob/main/docs/CHIP.md), [Container](https://github.com/beercss/beercss/blob/main/docs/CONTAINER.md), [Dropdown](https://github.com/beercss/beercss/blob/main/docs/DROPDOWN.md), [Expansion](https://github.com/beercss/beercss/blob/main/docs/EXPANSION.md), [Grid](https://github.com/beercss/beercss/blob/main/docs/GRID.md), [Icon](https://github.com/beercss/beercss/blob/main/docs/ICON.md), [Input](https://github.com/beercss/beercss/blob/main/docs/INPUT.md), [Layout](https://github.com/beercss/beercss/blob/main/docs/LAYOUT.md), [Loader](https://github.com/beercss/beercss/blob/main/docs/LOADER.md), [Media](https://github.com/beercss/beercss/blob/main/docs/MEDIA.md), [Modal](https://github.com/beercss/beercss/blob/main/docs/MODAL.md), [Navigation](https://github.com/beercss/beercss/blob/main/docs/NAVIGATION.md), [Overlay](https://github.com/beercss/beercss/blob/main/docs/OVERLAY.md), [Page](https://github.com/beercss/beercss/blob/main/docs/PAGE.md), [Progress](https://github.com/beercss/beercss/blob/main/docs/PROGRESS.md), [Radio](https://github.com/beercss/beercss/blob/main/docs/RADIO.md), [Select](https://github.com/beercss/beercss/blob/main/docs/SELECT.md), [Switch](https://github.com/beercss/beercss/blob/main/docs/SWITCH.md), [Table](https://github.com/beercss/beercss/blob/main/docs/TABLE.md), [Tabs](https://github.com/beercss/beercss/blob/main/docs/TABS.md), [Textarea](https://github.com/beercss/beercss/blob/main/docs/TEXTAREA.md), [Toast](https://github.com/beercss/beercss/blob/main/docs/TOAST.md), [Tooltip](https://github.com/beercss/beercss/blob/main/docs/TOOLTIP.md), [Typography](https://github.com/beercss/beercss/blob/main/docs/TYPOGRAPHY.md)
