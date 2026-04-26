# Snackbar

Snackbars provide brief messages about app processes at bottom or top of the screen. It's not recommended to show two or more snackbars at same time. Snackbars appear without warning, and don't require user interaction. It's recommended that they disappear from the screen after a minimum of four seconds, and a maximum of ten seconds.

## Element

```html
<div class="snackbar">...</div>
```

## Most used helpers

**Positions**

top, bottom

**Triggers**

active

## Example

```html
<div class="snackbar">
  <i>warning</i>
  <span>I'm a snackbar</span>
</div>
```

## Triggers

#### To open/close a menu

#### Method 1

Add/remove `active` class on snackbar.

```html
<div class="snackbar active">
  <i>warning</i>
  <span>I'm a snackbar</span>
</div>
```

#### Method 2

Add `data-ui="snackbar-selector"` attribute on elements.

```html
<button data-ui="#snackbar">Open</button>

<div class="snackbar" id="snackbar">
  <i>warning</i>
  <span>I'm a snackbar</span>
</div>
```

#### Method 3

Call `ui("#snackbar-selector", millisecondsToHide)`. The default value for millisecondsToHide is 6000.

```html
<div class="snackbar" id="snackbar">
  <i>warning</i>
  <span>I'm a snackbar</span>
</div>
```

```js
ui("#snackbar"); // deafult timeout of 6000 milliseconds
ui("#snackbar", 3000); // custom timeout of 3000 milliseconds
```

#### Method 4

Using [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API).

```html
<button popovertarget="snackbar">Button</button>

<div class="snackbar" id="snackbar" popover>
  <i>warning</i>
  <span>I'm a snackbar</span>
</div>
```

```js
document.querySelector('#snackbar').hidePopover(); // hide
document.querySelector('#snackbar').showPopover(); //show
document.querySelector('#snackbar').togglePopover(); // toggle
```
