# Slider

Sliders let users make selections from a range of values. Default range is 0-100.

## Element

```html
<div class="slider">
  <input type="range">
  <span></span>
</div>
```

## Example

```html
<div class="slider">
  <input type="range">
  <span></span>
</div>

<div class="slider">
  <input type="range" min="4" max="8">
  <span></span>
</div>
```

## Value indicator example

```html
<div class="slider">
  <input type="range">
  <span></span>
  <div class="tooltip"></div>
</div>
```

## Inset icon example

The icon will show only with `medium`, `large` or `extra` helpers.

```html
<div class="slider medium">
  <input type="range">
  <span>
    <i>sunny</i>
  </span>
</div>
```

## In field elements example

```html
<div class="field middle-align">
  <div class="slider">
    <input type="range">
    <span></span>
  </div>
</div>
```

## Custom slider example

```html
<article>
  <div class="slider max">
    <input type="range">
    <span></span>
  </div>
<article>
```
