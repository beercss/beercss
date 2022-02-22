# Overlay

Overlays block user screen and can express an unspecified wait time.

## Element

```html
<div class="overlay">...</div>
```

## Most used helpers

**Alignments**

left-align, right-align, center-align, top-align, bottom-align, middle-align

**Triggers**

active

## Example

```html
<div class="overlay center-align middle-align">
  <a class="loader"></a>
</div>
```

## Triggers 

#### To show/hide a overlay

#### Method 1

Add/remove `active` class on overlay.

```html
<div class="overlay center-align middle-align active">
  <a class="loader"></a>
</div>
```

#### Method 2

Add `data-ui="overlay-selector"` attribute on elements and call `ui()` after html output.

```html
<button data-ui="#overlay">Show overlay</button>

<div class="overlay center-align middle-align" id="overlay">
  <a class="loader"></a>
</div>
```

```js
ui();
```

#### Method 3

Call `ui("overlay-selector")`.

```html
<div class="overlay center-align middle-align" id="overlay">
  <a class="loader"></a>
</div>
```

```js
ui('#overlay');
```

## Related to
[Loader](https://github.com/beercss/beercss/blob/main/docs/LOADER.md)

## Go to
[Begin](https://github.com/beercss/beercss/blob/main/docs/INDEX.md), [Elements](https://github.com/beercss/beercss/blob/main/docs/ELEMENTS.md), [Helpers](https://github.com/beercss/beercss/blob/main/docs/HELPERS.md), [Settings](https://github.com/beercss/beercss/blob/main/docs/SETTINGS.md), [beercss.com](https://www.beercss.com)