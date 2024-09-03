# Javascript

The JS file of Beer CSS is almost optional. Basically is a JS helper for the dynamic theme and the trigger of elements. It is highly recommended to use it, because you save a lot of JS code using it.

## The dynamic theme

```js
// get mode
ui("mode")

// set mode
ui("mode", "light|dark|auto");

// get theme
await ui("theme")

// set theme
await ui("theme", "color|blob|file|url");
```

## The trigger of elements

### The ui function

The `ui` function has the intent to add/remove the `active` helper from elements. You will call the same function to open/close, show/hide or activate/not activate elements. For example, when you call `ui("dialog")` if the dialog is open, then it will close (and vice versa).

```js
ui("dialog|menu|overlay|page|snackbar");
```

### The data-ui attribute

The `data-ui` attribute has the intent to trigger elements with just HTML. It follows the same logic of the `ui` function. By default, all `data-ui` elements will be triggered on click event.

```html
<button data-ui="#dialog">...</button>
<dialog id="dialog">...</dialog>

<button data-ui="#menu">...</button>
<menu id="menu">...</menu>

<button data-ui="#overlay">...</button>
<div class="overlay" id="overlay">...</div>

<button data-ui="#snackbar">...</button>
<div class="snackbar" id="snackbar">...</div>

<div class="tabs">
  <a data-ui="#page1">...</a>
  <a data-ui="#page2">...</a>
</div>
<div class="page" id="page1">...</div>
<div class="page" id="page2">...</div>
```

## Why the JS file is almost optional?

There are 2 use cases that the JS file is required. When you have a `slider` element (we can't update the slider value without JS). And when you have a `textarea` element (we can't auto resize a textarea without JS). In the future, we will try to leave the JS file fully optional.
