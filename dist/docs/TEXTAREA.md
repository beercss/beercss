# Textarea

Textarea fields let users enter and edit long text.

## Element

If [textarea rows attribute](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/textarea#rows) is not defined, the textarea will auto resize automatically. It uses a pure CSS solution on all Chromium based browsers, except on Apple devices. Other browsers will use JS.

```html
<div class="field">
  <textarea></textarea>
</div>
```

```html
<div class="field">
  <textarea rows="10"></textarea>
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
  <textarea></textarea>
  <label>Label</label>
</div>
```

## Triggers

### To up/down a label

#### Method 1

Add/remove `active` class on label/textarea (the JS file of beer do this automatically).

```html
<div class="field label">
  <textarea></textarea>
  <label class="active">Label</label>
</div>

<div class="field label border">
  <textarea class="active"></textarea>
  <label class="active">Label</label>
</div>
```
#### Method 2

- Add `placehholder=" "` on textarea (a pure CSS solution).

```html
<div class="field label">
  <textarea placeholder=" "></textarea>
  <label>Label</label>
</div>
```

```html
<div class="field label border">
  <textarea placeholder=" "></textarea>
  <label>Label</label>
</div>
```
