# Input

Input fields let users enter and edit text.

## Element

```html
<div class="field">
  <input type="text">
</div>
```

## Most used helpers

**Forms**

label, border, round, fill, prefix, suffix

**Sizes**

small, medium, large, extra

**Triggers**

active

## Example

```html
<div class="field label border">
  <input type="text">
  <label>Label</label>
</div>
```

## Triggers

### To up/down a label

#### Method 1

Add/remove `active` class on label/input (the JS file of beer do this automatically).

```html
<div class="field label">
  <input type="text" class="active">
  <label class="active">Label</label>
</div>

<div class="field label border">
  <input type="text" class="active">
  <label class="active">Label</label>
</div>
```
#### Method 2

- Add `placehholder=" "` on input (a pure CSS solution).

```html
<div class="field label">
  <input type="text" placeholder=" ">
  <label>Label</label>
</div>
```

```html
<div class="field label border">
  <input type="text" placeholder=" ">
  <label>Label</label>
</div>
```
## Go to

[Begin](INDEX.md), [Elements](ELEMENTS.md), [Helpers](HELPERS.md), [Settings](SETTINGS.md), [Summary](SUMMARY.md), [Javascript](JAVASCRIPT.md), [beercss.com](https://www.beercss.com)

[Badge](BADGE.md), [Button](BUTTON.md), [Card](CARD.md), [Checkbox](CHECKBOX.md), [Chip](CHIP.md), [Container](CONTAINER.md), [Dialog](DIALOG.md), [Divider](DIVIDER.md), [Expansion](EXPANSION.md), [Grid](GRID.md), [Icon](ICON.md), [Input](INPUT.md), [Layout](LAYOUT.md), [List](LIST.md), [Main layout](MAIN_LAYOUT.md), [Media](MEDIA.md), [Menu](MENU.md), [Navigation](NAVIGATION.md), [Overlay](OVERLAY.md), [Page](PAGE.md), [Progress](PROGRESS.md), [Radio](RADIO.md), [Select](SELECT.md), [Shape](SHAPE.md), [Slider](SLIDER.md), [Snackbar](SNACKBAR.md), [Switch](SWITCH.md), [Table](TABLE.md), [Tabs](TABS.md), [Textarea](TEXTAREA.md), [Tooltip](TOOLTIP.md), [Typography](TYPOGRAPHY.md)
