# Select

Selects display a list of choices on temporary surfaces.

## Element

```html
<div class="field">
  <select>...</select>
</div>
```

## Most used helpers

**Forms**
border, round, fill

**Sizes**
small, medium, large, extra

**Triggers**
active

## Example

```html
<div class="field label border">
  <select>
    <option>Item</option>
    <option>Item</option>
    <option>Item</option>
  </select>
  <label>Label</label>
</div>
```

## Triggers 

#### To up/down a label

#### Method 1

Add/remove `active` class on label.

```html
<div class="field label border">
  <select>
    <option>Item</option>
    <option>Item</option>
    <option>Item</option>
  </select>
  <label class="active">Label</label>
</div>
```

#### Method 2

Call `ui()` after html output.

```html
<div class="field label border">
  <select>
    <option>Item</option>
    <option>Item</option>
    <option>Item</option>
  </select>
  <label>Label</label>
</div>
```

```js
ui();
```

## Related to
[Checkbox](https://github.com/beercss/beercss/blob/main/docs/CHECKBOX.md), [Icon](https://github.com/beercss/beercss/blob/main/docs/ICON.md), [Input](https://github.com/beercss/beercss/blob/main/docs/INPUT.md), [Media](https://github.com/beercss/beercss/blob/main/docs/MEDIA.md), [Radio](https://github.com/beercss/beercss/blob/main/docs/RADIO.md), [Switch](https://github.com/beercss/beercss/blob/main/docs/SWITCH.md), [Textarea](https://github.com/beercss/beercss/blob/main/docs/TEXTAREA.md)

## Go to
[Begin](https://github.com/beercss/beercss/blob/main/docs/INDEX.md), [Elements](https://github.com/beercss/beercss/blob/main/docs/ELEMENTS.md), [Helpers](https://github.com/beercss/beercss/blob/main/docs/HELPERS.md), [Settings](https://github.com/beercss/beercss/blob/main/docs/SETTINGS.md), [beercss.com](https://www.beercss.com)