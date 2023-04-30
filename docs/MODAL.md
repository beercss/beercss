# Modal

Modals inform users about a task and can contain critical information, required decisions, involve multiple tasks, provide access to destinations in your app and contain a small forms to submit.

## Element

```html
<div class="modal">...</div>
```

## Most used helpers

**Colors**

fill, primary-container, secondary-container, tertiary-container

**Forms**

border, round, no-round, left-round, right-round, top-round, bottom-round

**Paddings**

padding, no-padding, tiny-padding, small-padding, medium-padding, large-padding

**Positions**

left, right, top, bottom

**Elevates**

elevate, no-elevate, small-elevate, medium-elevate, large-elevate

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

[Begin](INDEX.md), [Elements](ELEMENTS.md), [Helpers](HELPERS.md), [Settings](SETTINGS.md), [Summary](SUMMARY.md), [beercss.com](https://www.beercss.com)

[Badge](BADGE.md), [Button](BUTTON.md), [Card](CARD.md), [Checkbox](CHECKBOX.md), [Chip](CHIP.md), [Container](CONTAINER.md), [Expansion](EXPANSION.md), [Grid](GRID.md), [Icon](ICON.md), [Input](INPUT.md), [Layout](LAYOUT.md), [Loader](LOADER.md), [Media](MEDIA.md), [Menu](MENU.md), [Modal](MODAL.md), [Navigation](NAVIGATION.md), [Overlay](OVERLAY.md), [Page](PAGE.md), [Progress](PROGRESS.md), [Radio](RADIO.md), [Select](SELECT.md), [Slider](SLIDER.md), [Switch](SWITCH.md), [Table](TABLE.md), [Tabs](TABS.md), [Textarea](TEXTAREA.md), [Toast](TOAST.md), [Tooltip](TOOLTIP.md), [Typography](TYPOGRAPHY.md)
