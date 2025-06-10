# Navigation

Navigations are containers that display actions placed horizontally (or vertically). Elements, like buttons, chips, images, checkboxes, radios and switches can be placed inside a nav. Some examples are navigation rail or navigation bar.

## Element

```html
<div class="row">...</div>
<nav>...</nav>
<nav class="left">...</nav>
<nav class="right">...</nav>
<nav class="top">...</nav>
<nav class="bottom">...</nav>
```

## Most used helpers

**Alignments**

left-align, right-align, center-align, top-align, bottom-align, middle-align

**Colors**

fill, primary-container, secondary-container, tertiary-container

**Directions**

vertical, horizontal

**Forms**

border, round, no-round, left-round, right-round, top-round, bottom-round, tabbed, group, toolbar

**Margins**

margin, no-margin, tiny-margin, small-margin, medium-margin, large-margin

**Positions**

left, right, top, bottom

**Elevates**

elevate, no-elevate, small-elevate, medium-elevate, large-elevate

**Sizes**

no-space, small-space, medium-space, large-space, wrap, no-wrap, min, max

## Row example

```html
<div class="row">
  <div>min</div>
  <div>min</div>
  <div class="max">max</div>
</div>
```

## Navigation example

```html
<nav>
  <button>Button</button>
  <a class="chip">Chip</button>
  <a>
    <img class="circle" src="/image.png" />
  </a>
  <label class="checkbox">
    <input type="checkbox">
  </label>
</nav>
```

```html
<nav>
  <ul>
    <li>
      <button>Button</button>
    </li>
    <li>
      <a class="chip">Chip</button>
    </li>
    <li>
      <a>
        <img class="circle" src="/image.png" />
      </a>
    </li>
    <li>
      <label class="checkbox">
        <input type="checkbox">
      </label>
    </li>
  </ul>
</nav>
```

## Navigation rail example
```html
<nav class="left">
  <a>
    <i>home</i>
    <div>Home</div>
  </a>
  <a>
    <i>search</i>
    <div>Search</div>
  </a>
  <a>
    <i>more_vert</i>
    <div>More</div>
  </a>
</nav>

<nav class="left max">
  <a>
    <i>home</i>
    <div>Home</div>
  </a>
  <a>
    <i>search</i>
    <div>Search</div>
  </a>
  <a>
    <i>more_vert</i>
    <div>More</div>
  </a>
</nav>
```

## Navigation bar example
```html
<nav class="bottom">
  <a>
    <i>home</i>
    <div>Home</div>
  </a>
  <a>
    <i>search</i>
    <div>Search</div>
  </a>
  <a>
    <i>more_vert</i>
    <div>More</div>
  </a>
</nav>

<nav class="bottom max">
  <a>
    <i>home</i>
    <div>Home</div>
  </a>
  <a>
    <i>search</i>
    <div>Search</div>
  </a>
  <a>
    <i>more_vert</i>
    <div>More</div>
  </a>
</nav>
```

## Navigation tabbed example
```html
<nav class="tabbed">
  <a>
    <i>home</i>
    <div>Home</div>
  </a>
  <a>
    <i>search</i>
    <div>Search</div>
  </a>
  <a>
    <i>more_vert</i>
    <div>More</div>
  </a>
</nav>
```

## Go to

[Begin](INDEX.md), [Elements](ELEMENTS.md), [Helpers](HELPERS.md), [Settings](SETTINGS.md), [Summary](SUMMARY.md), [Javascript](JAVASCRIPT.md), [beercss.com](https://www.beercss.com)

[Badge](BADGE.md), [Button](BUTTON.md), [Card](CARD.md), [Checkbox](CHECKBOX.md), [Chip](CHIP.md), [Container](CONTAINER.md), [Dialog](DIALOG.md), [Divider](DIVIDER.md), [Expansion](EXPANSION.md), [Grid](GRID.md), [Icon](ICON.md), [Input](INPUT.md), [Layout](LAYOUT.md), [List](LIST.md), [Main layout](MAIN_LAYOUT.md), [Media](MEDIA.md), [Menu](MENU.md), [Navigation](NAVIGATION.md), [Overlay](OVERLAY.md), [Page](PAGE.md), [Progress](PROGRESS.md), [Radio](RADIO.md), [Select](SELECT.md), [Shape](SHAPE.md), [Slider](SLIDER.md), [Snackbar](SNACKBAR.md), [Switch](SWITCH.md), [Table](TABLE.md), [Tabs](TABS.md), [Textarea](TEXTAREA.md), [Tooltip](TOOLTIP.md), [Typography](TYPOGRAPHY.md)
