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
<div class="field label">
  <input type="text">
  <label>Label</label>
</div>
```

## Icons example

```html
<div class="field label prefix">
  <i>search</i>
  <input type="text">
  <label>Label</label>
</div>
```

## Clickable icons example

```html
<div class="field label prefix">
  <a>
    <i>search</i>
  </a>
  <input type="text">
  <label>Label</label>
</div>
```

```html
<div class="field label prefix">
  <i class="front">search</i>
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
```

#### Method 2

Add `placeholder=" "` on input (a pure CSS solution).

```html
<div class="field label">
  <input type="text" placeholder=" ">
  <label>Label</label>
</div>
```

