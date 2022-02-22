# Page

Pages are containers that can be a main page, multiple pages or just to animate an element.

## Element

```html
<div class="page">...</div>
```

## Most used helpers

**Positions**

left, right, top, bottom

**Triggers**

active

## Example

```html
<div class="page">
  <h5>Title</h5>
</div>
```

## Triggers 

#### To show/hide a page

#### Method 1

Add/remove `active` class on page.

```html
<div class="page active">
  <h5>Title</h5>
</div>
```

#### Method 2

Add `data-ui="page-selector"` attribute on elements and call `ui()` after html output. All other pages that are in the same level will be hidden.

```html
<a data-ui="#page1">Open page 1</a>
<a data-ui="#page2">Open page 2</a>

<div class="page" id="page1">
  <h5>Page 1</h5>
</div>

<div class="page" id="page2">
  <h5>Page 2</h5>
</div>
```

```js
ui();
```

#### Method 3

Call `ui("page-selector")`. All other pages that are in the same level will be hidden.

```html
<div class="page" id="page1">
  <h5>Page 1</h5>
</div>

<div class="page" id="page2">
  <h5>Page 2</h5>
</div>
```

```js
ui('#page1');
```

## Related to
[Button](https://github.com/beercss/beercss/blob/main/docs/BUTTON.md), [Chip](https://github.com/beercss/beercss/blob/main/docs/CHIP.md), [Container](https://github.com/beercss/beercss/blob/main/docs/CONTAINER.md, [Nav](https://github.com/beercss/beercss/blob/main/docs/NAV.md)

## Go to
[Begin](https://github.com/beercss/beercss/blob/main/docs/INDEX.md), [Elements](https://github.com/beercss/beercss/blob/main/docs/ELEMENTS.md), [Helpers](https://github.com/beercss/beercss/blob/main/docs/HELPERS.md), [Settings](https://github.com/beercss/beercss/blob/main/docs/SETTINGS.md), [beercss.com](https://www.beercss.com)