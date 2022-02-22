# Dropdown

Dropdowns display a list of choices on temporary surfaces.

## Element

```html
<...>
  <div class="dropdown">...</div>
</...>
```

## Most used helpers

**Positions**

left, right

**Sizes**

wrap, no-wrap

**Triggers**

active

## Example

```html
<button>
  <span>Button</span>
  <div class="dropdown no-wrap">
    <a>Item</a>
    <a>Item</a>
    <a>Item</a>
  </div>
</button>
```

## Triggers 

#### To open/close a dropdown

#### Method 1

Add/remove `active` class on dropdown.

```html
<button>
  <span>Button</span>
  <div class="dropdown no-wrap active">
    <a>Item</a>
    <a>Item</a>
    <a>Item</a>
  </div>
</button>
```

#### Method 2

Add `data-ui="dropdown-selector"` attribute on elements and call `ui()` after html output.

```html
<button data-ui="#dropdown">
  <span>Button</span>
  <div id="dropdown" class="dropdown no-wrap">
    <a>Item</a>
    <a>Item</a>
    <a>Item</a>
  </div>
</button>
```

```js
ui();
```

#### Method 3

Call `ui("dropdown-selector")`.

```html
<button>
  <span>Button</span>
  <div id="dropdown" class="dropdown no-wrap">
    <a>Item</a>
    <a>Item</a>
    <a>Item</a>
  </div>
</button>
```

```js
ui('#dropdown');
```

## Related to
[Icon](https://github.com/beercss/beercss/blob/main/docs/ICON.md), [Media](https://github.com/beercss/beercss/blob/main/docs/MEDIA.md)

## Go to
[Begin](https://github.com/beercss/beercss/blob/main/docs/INDEX.md), [Elements](https://github.com/beercss/beercss/blob/main/docs/ELEMENTS.md), [Helpers](https://github.com/beercss/beercss/blob/main/docs/HELPERS.md), [Settings](https://github.com/beercss/beercss/blob/main/docs/SETTINGS.md), [beercss.com](https://www.beercss.com)