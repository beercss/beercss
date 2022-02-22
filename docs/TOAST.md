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

## Related to
[Button](https://github.com/beercss/beercss/blob/main/docs/BUTTON.md), [Chip](https://github.com/beercss/beercss/blob/main/docs/CHIP.md), [Icon](https://github.com/beercss/beercss/blob/main/docs/ICON.md), [Media](https://github.com/beercss/beercss/blob/main/docs/MEDIA.md)

## Go to
[Begin](https://github.com/beercss/beercss/blob/main/docs/INDEX.md), [Elements](https://github.com/beercss/beercss/blob/main/docs/ELEMENTS.md), [Helpers](https://github.com/beercss/beercss/blob/main/docs/HELPERS.md), [Settings](https://github.com/beercss/beercss/blob/main/docs/SETTINGS.md), [beercss.com](https://www.beercss.com)