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

## Go to

[Begin](INDEX.md), [Elements](ELEMENTS.md), [Helpers](HELPERS.md), [Settings](SETTINGS.md), [Summary](SUMMARY.md), [Javascript](JAVASCRIPT.md), [beercss.com](https://www.beercss.com)

[Badge](BADGE.md), [Button](BUTTON.md), [Card](CARD.md), [Checkbox](CHECKBOX.md), [Chip](CHIP.md), [Container](CONTAINER.md), [Dialog](DIALOG.md), [Divider](DIVIDER.md), [Expansion](EXPANSION.md), [Grid](GRID.md), [Icon](ICON.md), [Input](INPUT.md), [Layout](LAYOUT.md), [List](LIST.md), [Main layout](MAIN_LAYOUT.md), [Media](MEDIA.md), [Menu](MENU.md), [Navigation](NAVIGATION.md), [Overlay](OVERLAY.md), [Page](PAGE.md), [Progress](PROGRESS.md), [Radio](RADIO.md), [Select](SELECT.md), [Shape](SHAPE.md), [Slider](SLIDER.md), [Snackbar](SNACKBAR.md), [Switch](SWITCH.md), [Table](TABLE.md), [Tabs](TABS.md), [Textarea](TEXTAREA.md), [Tooltip](TOOLTIP.md), [Typography](TYPOGRAPHY.md)