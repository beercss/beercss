# Checkbox

Checkboxes allow users to select one or more items from a set. Checkboxes can turn an option on or off.

## Element

```html
<label class="checkbox">
  <input type="checkbox">
  <span></span>
</label>
```

## Most used helpers

**Sizes**

small, medium, large, extra

## Example

```html
<label class="checkbox">
  <input type="checkbox">
  <span></span>
</label>

<label class="checkbox">
  <input type="checkbox">
  <span>Click here</span>
</label>

<label class="checkbox icon">
  <input type="checkbox">
  <span>
    <i>close</i>
    <i>done</i>
  </span>
</label>

<nav>
  <label class="checkbox">
    <input type="checkbox">
    <span>Item 1</span>
  </label>
  <label class="checkbox">
    <input type="checkbox">
    <span>Item 2</span>
  </label>
  <label class="checkbox">
    <input type="checkbox">
    <span>Item 3</span>
  </label>
</nav>
```

## In field elements example

```html
<div class="field middle-align">
  <nav>
    <label class="checkbox">
      <input type="checkbox">
      <span>Item 1</span>
    </label>
    <label class="checkbox">
      <input type="checkbox">
      <span>Item 2</span>
    </label>
    <label class="checkbox">
      <input type="checkbox">
      <span>Item 3</span>
    </label>
  </nav>
</div>
```

## Indeterminate state example

This is set using the indeterminate property via JavaScript (it cannot be set using an HTML attribute) https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes:

```js
document.getElementById(elementId).indeterminate = true;
```
