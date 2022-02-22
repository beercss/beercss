# Modal

Modals inform users about a task and can contain critical information, required decisions, involve multiple tasks, provide access to destinations in your app and contain a small forms to submit.

## Element

```html
<div class="modal">...</div>
```

## Most used helpers

**Positions**
left, right, top, bottom

**Sizes**
small, medium, large

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

Add `data-ui="modal-selector"` attribute on elements and call `ui()` after html output.

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

```js
ui();
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

## Related to
[Button](https://github.com/beercss/beercss/blob/main/docs/BUTTON.md), [Chip](https://github.com/beercss/beercss/blob/main/docs/CHIP.md), [Container](https://github.com/beercss/beercss/blob/main/docs/CONTAINER.md), [Icon](https://github.com/beercss/beercss/blob/main/docs/ICON.md), [Media](https://github.com/beercss/beercss/blob/main/docs/MEDIA.md), [Menu](https://github.com/beercss/beercss/blob/main/docs/MENU.md), [Nav](https://github.com/beercss/beercss/blob/main/docs/NAV.md)

## Go to
[Begin](https://github.com/beercss/beercss/blob/main/docs/INDEX.md), [Elements](https://github.com/beercss/beercss/blob/main/docs/ELEMENTS.md), [Helpers](https://github.com/beercss/beercss/blob/main/docs/HELPERS.md), [Settings](https://github.com/beercss/beercss/blob/main/docs/SETTINGS.md), [beercss.com](https://www.beercss.com)