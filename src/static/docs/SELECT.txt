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

label, border, round, fill, prefix, suffix

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

### To up/down a label

#### Method 1

Add/remove `active` class on label/select (the JS file of beer do this automatically).

```html
<div class="field label">
  <select>
    <option>Item</option>
    <option>Item</option>
    <option>Item</option>
  </select>
  <label class="active">Label</label>
</div>

<div class="field label border">
  <select class="active">
    <option>Item</option>
    <option>Item</option>
    <option>Item</option>
  </select>
  <label class="active">Label</label>
</div>
```
