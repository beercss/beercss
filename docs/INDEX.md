# The principles

This project was guided by the **"Germany Beer Purity Law"** or **"Reinheitsgebot"** created in 1516. This law states that beer should only be brewed with the following ingredients: **water**, **barley malt** and **hops**. Only 3 ingredients. Exciting, right? So we thinking about It and our 3 ingredients are: [Settings](SETTINGS.md), [Elements](ELEMENTS.md) and [Helpers](HELPERS.md). This sounds weird at first time, because It's not BEM, OOCSS, SMACSS, ITCSS, "Utility first" or any other approach. Our approach doesn't avoid some bad practices, but is lightweight, tasty and pure like a beer. Just try it and feel it! 😁

```
|  SETTINGS     |       // The settings affects all document
|---------------|----|
|               |    |
|  ELEMENTS     |    |  // The elements are the components, widgets or tags
|               |    |
|---------------|    |
|               |    |
|               |    |
|  HELPERS      |----|  // The common helpers makes the elements more scalable and customizable
|               |
|               |
|---------------|
```

# Get started

### DEFAULT VERSION

```html
<link href="https://cdn.jsdelivr.net/npm/beercss@4.0.2/dist/cdn/beer.min.css" rel="stylesheet" />
<script type="module" src="https://cdn.jsdelivr.net/npm/beercss@4.0.2/dist/cdn/beer.min.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@1.1.4/dist/cdn/material-dynamic-colors.min.js"></script>
```

```js
npm i beercss
npm i material-dynamic-colors
```

```js
import "beercss";
import "material-dynamic-colors";
```

### SCOPED VERSION
Applied on child elements of `<* class="beer">...</*>`.

```html
<link href="https://cdn.jsdelivr.net/npm/beercss@4.0.2/dist/cdn/beer.scoped.min.css" rel="stylesheet" />
<script type="module" src="https://cdn.jsdelivr.net/npm/beercss@4.0.2/dist/cdn/beer.min.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@1.1.4/dist/cdn/material-dynamic-colors.min.js"></script>
```

```js
npm i beercss
npm i material-dynamic-colors
```

```js
import "beercss/scoped";
import "material-dynamic-colors";
```

### CUSTOM ELEMENT VERSION
Applied on child elements of `<beer-css>...</beer-css>`.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/beercss@4.0.2/dist/cdn/beer.custom-element.min.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@1.1.4/dist/cdn/material-dynamic-colors.min.js"></script>
```

```js
npm i beercss
npm i material-dynamic-colors
```

```js
import "beercss/custom-element";
import "material-dynamic-colors";
```

### LOCAL CDN VERSION

Download all files from CDN https://cdn.jsdelivr.net/npm/beercss@4.0.2/dist/cdn/ and https://cdn.jsdelivr.net/npm/material-dynamic-colors@1.1.4/dist/cdn/. Now put the files inside a new folder in your project (like `/beercss` for example):

```html
<link href="/beercss/beer.min.css" rel="stylesheet" />
<script type="module" src="/beercss/beer.min.js"></script>
<script type="module" src="/beercss/material-dynamic-colors.min.js"></script>
```

### HTML

You can use this html to setup your project. See on [Codepen](https://codepen.io/leo-bnu/pen/yLKLPxj). More about in [Main layout](docs/MAIN_LAYOUT.md).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="google" content="notranslate">
    <title>Hello world</title>
    <link href="https://cdn.jsdelivr.net/npm/beercss@4.0.2/dist/cdn/beer.min.css" rel="stylesheet">
    <script type="module" src="https://cdn.jsdelivr.net/npm/beercss@4.0.2/dist/cdn/beer.min.js"></script>
    <script type="module" src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@1.1.4/dist/cdn/material-dynamic-colors.min.js"></script>
  </head>
  <body class="dark">
    <nav class="left max l">
      <header>
        <nav>
          <img alt="logo" src="https://www.beercss.com/favicon.png" class="circle extra">
          <h6>Cheers</h6>
        </nav>
      </header>
      <a>
        <i>home</i>
        <span>Home</span>
      </a>
      <a>
        <i>search</i>
        <span>Search</span>
      </a>
      <a>
        <i>share</i>
        <span>Share</span>
      </a>
      <a>
        <i>more_vert</i>
        <span>More</span>
      </a>
      <div class="divider"></div>
      <a>
        <i>widgets</i>
        <span>Widgets</span>
      </a>
      <a>
        <i>chat</i>
        <span>Chat</span>
      </a>
      <a>
        <i>help</i>
        <span>Help</span>
      </a>  
    </nav>

    <nav class="left m">
      <header>
        <img alt="logo" src="https://www.beercss.com/favicon.png" class="circle extra">
      </header>
      <a>
        <i>home</i>
        <span>Home</span>
      </a>
      <a>
        <i>search</i>
        <span>Search</span>
      </a>
      <a>
        <i>share</i>
        <span>Share</span>
      </a>
      <a>
        <i>more_vert</i>
        <span>More</span>
      </a>
    </nav>

    <nav class="bottom s">
      <a>
        <i>home</i>
      </a>
      <a>
        <i>search</i>
      </a>
      <a>
        <i>share</i>
      </a>
      <a>
        <i>more_vert</i>
      </a>
    </nav>

    <main class="responsive">
      <img alt="beer and woman" src="https://www.beercss.com/beer-and-woman.svg" class="responsive round medium-height">
      <h3>Welcome</h3>
      <h4>The beer is ready!</h4>
    </main>
  </body>
</html>
```

**The `beer.min.js` and `material-dynamic-colors.min.js` are optional, but could be required for some use cases.**

### ✅ DO:

```
// 1 setting to 1 document
<body class="dark|light">...</body>

// 1 element to N helpers
<element class="helper helper">...</element>
<div class="element helper helper">...</div>

// 1 main element per document
<...>
  <main></main>
</...>

// inline/block elements in block elements
<div>
  <div></div>
  <span></span>
</div>

// write css like this
.element.helper {...}
.element > .element {...}
.element > .helper {...}
```

### 🚫 DON'T:

```
// N elements to 1 tag
<div class="element element helper">...</div>
<element class="element helper">...</element>

// element with dependencies
<div class="element">
  <div class="element-header">...</div>
  <div class="element-content">...</div>
  <div class="element-footer">...</div>
</div>

// N main elements per document
<...>
  <main></main>
  <main></main>
</...>

// block elements in inline elements
<span>
  <div></div>
</span>

// write css like this
.element.element {...}
.element .element {...}
.element .helper {...}
```

## Tips to master beercss

1. Try use [Helpers](HELPERS.md) first, before any custom css.
2. To customize themes go to [Settings](SETTINGS.md).
3. To quick learn the project go to [Summary](SUMMARY.md).
4. To understand the [Javascript](JAVASCRIPT.md) file.
5. Read the DO and DON'T section to write a compliance HTML/CSS.
6. For [Vite](https://vite.dev/config/build-options#build-assetsinlinelimit) users, build your app with `assetsInlineLimit: 0` to keep the original size of CSS files.


## Go to

[Begin](INDEX.md), [Elements](ELEMENTS.md), [Helpers](HELPERS.md), [Settings](SETTINGS.md), [Summary](SUMMARY.md), [Javascript](JAVASCRIPT.md), [beercss.com](https://www.beercss.com)

[Badge](BADGE.md), [Button](BUTTON.md), [Card](CARD.md), [Checkbox](CHECKBOX.md), [Chip](CHIP.md), [Container](CONTAINER.md), [Dialog](DIALOG.md), [Divider](DIVIDER.md), [Expansion](EXPANSION.md), [Grid](GRID.md), [Icon](ICON.md), [Input](INPUT.md), [Layout](LAYOUT.md), [List](LIST.md), [Main layout](MAIN_LAYOUT.md), [Media](MEDIA.md), [Menu](MENU.md), [Navigation](NAVIGATION.md), [Overlay](OVERLAY.md), [Page](PAGE.md), [Progress](PROGRESS.md), [Radio](RADIO.md), [Select](SELECT.md), [Shape](SHAPE.md), [Slider](SLIDER.md), [Snackbar](SNACKBAR.md), [Switch](SWITCH.md), [Table](TABLE.md), [Tabs](TABS.md), [Textarea](TEXTAREA.md), [Tooltip](TOOLTIP.md), [Typography](TYPOGRAPHY.md)
