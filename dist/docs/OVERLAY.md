# Overlay

Overlays block user screen and can express an unspecified wait time.

## Element

```html
<div class="overlay">...</div>
```

## Most used helpers

**Alignments**

left-align, right-align, center-align, top-align, bottom-align, middle-align

**Forms**

blur, small-blur, medium-blur, large-blur

**Triggers**

active

## Example

```html
<div class="overlay center-align middle-align">
  <progress class="circle"></progress>
</div>
```

## Triggers 

#### To show/hide a overlay

#### Method 1

Add/remove `active` class on overlay.

```html
<div class="overlay center-align middle-align active">
  <progress class="circle"></progress>
</div>
```

#### Method 2

Add `data-ui="overlay-selector"` attribute on elements.

```html
<button data-ui="#overlay">Show overlay</button>

<div class="overlay center-align middle-align" id="overlay">
  <progress class="circle"></progress>
</div>
```

#### Method 3

Call `ui("overlay-selector")`.

```html
<div class="overlay center-align middle-align" id="overlay">
  <progress class="circle"></progress>
</div>
```

```js
ui('#overlay');
```

