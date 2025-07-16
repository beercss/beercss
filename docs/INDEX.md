# Get started

### DEFAULT VERSION

```html
<link href="https://cdn.jsdelivr.net/npm/beercss@3.11.33/dist/cdn/beer.min.css" rel="stylesheet" />
<script type="module" src="https://cdn.jsdelivr.net/npm/beercss@3.11.33/dist/cdn/beer.min.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@1.1.2/dist/cdn/material-dynamic-colors.min.js"></script>
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
<link href="https://cdn.jsdelivr.net/npm/beercss@3.11.33/dist/cdn/beer.scoped.min.css" rel="stylesheet" />
<script type="module" src="https://cdn.jsdelivr.net/npm/beercss@3.11.33/dist/cdn/beer.min.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@1.1.2/dist/cdn/material-dynamic-colors.min.js"></script>
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
<script type="module" src="https://cdn.jsdelivr.net/npm/beercss@3.11.33/dist/cdn/beer.custom-element.min.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@1.1.2/dist/cdn/material-dynamic-colors.min.js"></script>
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

Download all files from CDN https://cdn.jsdelivr.net/npm/beercss@3.11.33/dist/cdn/ and https://cdn.jsdelivr.net/npm/material-dynamic-colors@1.1.2/dist/cdn/. Now put the files inside a new folder in your project (like `/beercss` for example):

```html
<link href="/beercss/beer.min.css" rel="stylesheet" />
<script type="module" src="/beercss/beer.min.js"></script>
<script type="module" src="/beercss/material-dynamic-colors.min.js"></script>
```

### HTML

You can use this html to setup your project. See on [Codepen](https://codepen.io/leo-bnu/pen/yLKLPxj). More about in [Main layout](docs/MAIN_LAYOUT.md).

```html
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="google" content="notranslate">
    <title>Hello world</title>
    <link href="https://cdn.jsdelivr.net/npm/beercss@3.11.33/dist/cdn/beer.min.css" rel="stylesheet">
    <script type="module" src="https://cdn.jsdelivr.net/npm/beercss@3.11.33/dist/cdn/beer.min.js"></script>
    <script type="module" src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@1.1.2/dist/cdn/material-dynamic-colors.min.js"></script>
  </head>
  <body class="dark">
    <nav class="left max l">
      <header>
        <nav>
          <img src="https://www.beercss.com/favicon.png" class="circle extra">
          <h6>Cheers</h6>
        </nav>
      </header>
      <a>
        <i>home</i>
        <div>Home</div>
      </a>
      <a>
        <i>search</i>
        <div>Search</div>
      </a>
      <a>
        <i>share</i>
        <div>Share</div>
      </a>
      <a>
        <i>more_vert</i>
        <div>More</div>
      </a>
      <div class="divider"></div>
      <a>
        <i>widgets</i>
        <div>Widgets</div>
      </a>
      <a>
        <i>chat</i>
        <div>Chat</div>
      </a>
      <a>
        <i>help</i>
        <div>Help</div>
      </a>  
    </nav>

    <nav class="left m">
      <header>
        <img src="https://www.beercss.com/favicon.png" class="circle extra">
      </header>
      <a>
        <i>home</i>
        <div>Home</div>
      </a>
      <a>
        <i>search</i>
        <div>Search</div>
      </a>
      <a>
        <i>share</i>
        <div>Share</div>
      </a>
      <a>
        <i>more_vert</i>
        <div>More</div>
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
      <img src="https://www.beercss.com/beer-and-woman.svg" class="responsive round medium-height">
      <h3>Welcome</h3>
      <h5>The beer is ready!</h5>
    </main>
  </body>
</html>
```

**We recommend using the material-dynamic-colors only when your app needs to change theme at runtime.**

## [Settings](SETTINGS.md)

The settings affects all document.

## [Elements](ELEMENTS.md)

The elements are the components, widgets or tags.

## [Helpers](HELPERS.md)

The common helpers makes the elements more scalable and customizable.

## Tips to master beercss

1. Try use helpers first, before any custom css.
2. To customize themes go to [Settings](SETTINGS.md).
3. To quick learn the project go to [Summary](SUMMARY.md).
4. To understand the JS file [Javascript](JAVASCRIPT.md).

## Go to

[Begin](INDEX.md), [Elements](ELEMENTS.md), [Helpers](HELPERS.md), [Settings](SETTINGS.md), [Summary](SUMMARY.md), [Javascript](JAVASCRIPT.md), [beercss.com](https://www.beercss.com)

[Badge](BADGE.md), [Button](BUTTON.md), [Card](CARD.md), [Checkbox](CHECKBOX.md), [Chip](CHIP.md), [Container](CONTAINER.md), [Dialog](DIALOG.md), [Divider](DIVIDER.md), [Expansion](EXPANSION.md), [Grid](GRID.md), [Icon](ICON.md), [Input](INPUT.md), [Layout](LAYOUT.md), [List](LIST.md), [Main layout](MAIN_LAYOUT.md), [Media](MEDIA.md), [Menu](MENU.md), [Navigation](NAVIGATION.md), [Overlay](OVERLAY.md), [Page](PAGE.md), [Progress](PROGRESS.md), [Radio](RADIO.md), [Select](SELECT.md), [Shape](SHAPE.md), [Slider](SLIDER.md), [Snackbar](SNACKBAR.md), [Switch](SWITCH.md), [Table](TABLE.md), [Tabs](TABS.md), [Textarea](TEXTAREA.md), [Tooltip](TOOLTIP.md), [Typography](TYPOGRAPHY.md)
