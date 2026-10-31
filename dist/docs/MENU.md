# Menu

Menus display a list of choices on temporary surfaces.

## Element

```html
<...>
  <menu>
    <li>...</li>
  </menu>
</...>
```

## Most used helpers

**Forms**

border, group

**Positions**

left, right, top, bottom

**Sizes**

wrap, no-wrap, min, max

**Spaces**

space, no-space, tiny-space, small-space, medium-space, large-space, extra-space

**Triggers**

active

## Example

```html
<div>
  <button>
    <span>Button</span>
  </button>
  <menu>
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
  </menu>
</div>
```

```html
<div>
  <button>
    <span>Button</span>
  </button>
  <menu>
    <li>
      <a href="#">Item</a>
    </li>
    <li>
      <a href="#">Item</a>
    </li>
    <li>
      <a href="#">Item</a>
    </li>
  </menu>
</div>
```

## Multilevel menu example

```html
<div>
  <button>
    <span>Button</span>
  </button>
  <menu>
    <li>
      <span>Item</span>
      <menu>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
      </menu>
    </li>
  </menu>
</div>
```

## Grouped menu example

The grouped menu was designed to place any element inside it. The `<menu>` is transparent and has a little space on top/bottom. The `<li>` is transparent and hasn't all styles from default version.

```html
<div>
  <button>
    <span>Button</span>
  </button>
  <menu class="group">
    <li>
      <menu>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
      </menu>
    </li>
    <li>
      <menu>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
      </menu>
    </li>
  </menu>
</div>
```

```html
<div>
  <button>
    <span>Button</span>
  </button>
  <menu class="group">
    <li>
      <button>Button</button>
    </li>
    <li>
      <button>Button</button>
    </li>
    <li>
      <button>Button</button>
    </li>
  </menu>
</div>
```

## Triggers 

#### To open/close a menu

#### Method 1

Add/remove `active` class on menu.

```html
<div>
  <button>
    <span>Button</span>
  </button>
  <menu class="active">
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
  </menu>
</div>
```

#### Method 2

Add `data-ui="menu-selector"` attribute on elements.

```html
<div data-ui="#menu">
  <button>
    <span>Button</span>
  </button>
  <menu id="menu">
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
  </menu>
</div>
```

#### Method 3

Call `ui("menu-selector")`.

```html
<div>
  <button>
    <span>Button</span>
  </button>
  <menu id="menu">
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
  </menu>
</div>
```

```js
ui('#menu');
```

