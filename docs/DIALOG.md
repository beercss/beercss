# Dialog

Dialogs inform users about a task and can contain critical information, required decisions, involve multiple tasks, provide access to destinations in your app and contain a small forms to submit.

## Element

```html
<dialog>...</dialog>

<input class="dialog-trigger" type="checkbox">
<div class="dialog">...</div>
```

## Most used helpers

**Colors**

fill, primary-container, secondary-container, tertiary-container

**Forms**

modal, border, round, no-round, left-round, right-round, top-round, bottom-round

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
<dialog>
  <h5>Title</h5>
  <p>Content of dialog</p>
  <nav>
    <button>Cancel</button>
    <button>Confirm</button>
  </nav>
</dialog>
```

## Triggers 

#### To open/close a dialog

#### Method 1

Add/remove `active` class on dialog.

```html
<dialog class="active">
  <h5>Title</h5>
  <p>Content of dialog</p>
  <nav>
    <button>Cancel</button>
    <button>Confirm</button>
  </nav>
</dialog>
```

#### Method 2

Call HTML dialog element methods

```html
<dialog id="dialog">
  <h5>Title</h5>
  <p>Content of dialog</p>
  <nav>
    <button>Cancel</button>
    <button>Confirm</button>
  </nav>
</dialog>
```

```js
document.querySelector('#dialog').show(); // open
document.querySelector('#dialog').showModal(); // open as modal
document.querySelector('#dialog').close(); // close
```

#### Method 3

Add `data-ui="dialog-selector"` attribute on elements.

```html
<button data-ui="#dialog">Open dialog</button>

<dialog id="dialog">
  <h5>Title</h5>
  <p>Content of dialog</p>
  <nav>
    <button data-ui="#dialog">Cancel</button>
    <button data-ui="#dialog">Confirm</button>
  </nav>
</dialog>
```

#### Method 4

Call `ui("dialog-selector")`

```html
<dialog id="dialog">
  <h5>Title</h5>
  <p>Content of dialog</p>
  <nav>
    <button>Cancel</button>
    <button>Confirm</button>
  </nav>
</dialog>
```

```js
ui('#dialog');
```

#### Method 5

Use `.dialog` class for dialog, add `label for="dialog-selector"` element to trigger and add `input.dialog-trigger` above dialog (a pure CSS solution).

```html
<label class="button" for="dialog">Open</label>

<input class="dialog-trigger" type="checkbox" id="dialog">
<div class="dialog">
  <h5>Title</h5>
  <p>Content of dialog</p>
  <nav>
    <button>Cancel</button>
    <button>Confirm</button>
  </nav>
</div>
```

## Go to

[Begin](INDEX.md), [Elements](ELEMENTS.md), [Helpers](HELPERS.md), [Settings](SETTINGS.md), [Summary](SUMMARY.md), [Javascript](JAVASCRIPT.md), [beercss.com](https://www.beercss.com)

[Badge](BADGE.md), [Button](BUTTON.md), [Card](CARD.md), [Checkbox](CHECKBOX.md), [Chip](CHIP.md), [Container](CONTAINER.md), [Dialog](DIALOG.md), [Divider](DIVIDER.md), [Expansion](EXPANSION.md), [Grid](GRID.md), [Icon](ICON.md), [Input](INPUT.md), [Layout](LAYOUT.md), [List](LIST.md), [Main layout](MAIN_LAYOUT.md), [Media](MEDIA.md), [Menu](MENU.md), [Navigation](NAVIGATION.md), [Overlay](OVERLAY.md), [Page](PAGE.md), [Progress](PROGRESS.md), [Radio](RADIO.md), [Select](SELECT.md), [Slider](SLIDER.md), [Switch](SWITCH.md), [Table](TABLE.md), [Tabs](TABS.md), [Textarea](TEXTAREA.md), [Snackbar](SNACKBAR.md), [Tooltip](TOOLTIP.md), [Typography](TYPOGRAPHY.md)
