# Grid

Grids are rows and cols system grid. They are most used to organize content.

## Element

```html
<div class="grid">
  <div>...</div>
</div>
```

## Most used helpers

**Sizes**

s1...s12, m1...m12, l1...l12

**Spaces**

no-space, space, small-space, medium-space, large-space

## Example

This will render one or more lines, depends the user screen. All elements immediately inside grid are "cells" and can't be mixed with other elements.

```html
<div class="grid">
  <div class="s12 m6 l3">
    <h5>First</h5>
  </div>
  <div class="s12 m6 l3">
    <h5>Second</h5>
  </div>
  <div class="s12 m6 l3">
    <h5>Third</h5>
  </div>
</div>
```

### ✅ DO:

```html
<div class="grid">
  <div class="s12 m6 l3">
    <article>...</article>
  </div>
  <div class="s12 m6 l3">
    <label>...</label>
  </div>
  <div class="s12 m6 l3">
    <div class="field">...</h5>
  </div>
</div>
```

### 🚫 DON'T:

```html
<div class="grid">
  <article class="s12 m6 l3">...</article>
  <label class="s12 m6 l3">...</label>
  <div class="s12 m6 l3 field">...</div>
</div>
```
