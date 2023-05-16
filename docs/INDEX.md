## Get started

#### CDN

From jsdelivr.net.

```html
// with html
<link href="https://cdn.jsdelivr.net/npm/beercss@3.2.0/dist/cdn/beer.min.css" rel="stylesheet" />
<script type="module" src="https://cdn.jsdelivr.net/npm/beercss@3.2.0/dist/cdn/beer.min.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@0.1.7/dist/cdn/material-dynamic-colors.min.js"></script>
```

```css
// with css
@import "https://cdn.jsdelivr.net/npm/beercss@3.2.0/dist/cdn/beer.min.css";
```

```js
// with javascript
import "https://cdn.jsdelivr.net/npm/beercss@3.2.0/dist/cdn/beer.min.js";
import "https://cdn.jsdelivr.net/npm/material-dynamic-colors@0.1.7/dist/cdn/material-dynamic-colors.min.js";
```

#### NPM

You can get the latest release using NPM. This release contains source files as well as the compiled CSS and JavaScript files.

```js
// installing
npm i beercss
npm i material-dynamic-colors
```

```js
// importing as window.beercss and window.materialDynamicColors
import "beercss";
import "material-dynamic-colors";
```

```js
// importing as beercss and materialDynamicColors
import beercss from "beercss";
import materialDynamicColors from "material-dynamic-colors";
```

```js
// importing manually from dist
import "beercss/dist/cdn/beer.min.css";
import "beercss/dist/cdn/material-symbols-outlined.woff2";
import "beercss/dist/cdn/material-symbols-rounded.woff2";
import "beercss/dist/cdn/material-symbols-sharp.woff2";
import beercss from "beercss/dist/cdn/beer.min.js";
import materialDynamicColors from "material-dynamic-colors/dist/cdn/material-dynamic-colors.min.js";
```

```js
// importing manually from src
import "beercss/src/cdn/beer.css";
import "beercss/src/cdn/material-symbols-outlined.woff2";
import "beercss/src/cdn/material-symbols-rounded.woff2";
import "beercss/src/cdn/material-symbols-sharp.woff2";
import beercss from "beercss/src/cdn/beer.ts";
import materialDynamicColors from "material-dynamic-colors/src/cdn/material-dynamic-colors.js";
```

### HTML

You can use this html to setup your project. See on [Codepen](https://codepen.io/leo-bnu/pen/yLKLPxj).

```html
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="google" content="notranslate">
    <title>Hello world</title>
    <link href="https://cdn.jsdelivr.net/npm/beercss@3.2.0/dist/cdn/beer.min.css" rel="stylesheet">
    <script type="module" src="https://cdn.jsdelivr.net/npm/beercss@3.2.0/dist/cdn/beer.min.js"></script>
    <script type="module" src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@0.1.7/dist/cdn/material-dynamic-colors.min.js"></script>
  </head>
  <body class="light">
    <nav class="left m l">
      <img src="https://www.beercss.com/favicon.png" class="circle margin">
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
      <img src="https://www.beercss.com/beer-and-woman.jpg" class="responsive round">
      <h3>Welcome</h3>
      <h5>The beer is ready!</h5>
    </main>
  </body>
</html>
```

**We recommend use the material-dynamic-colors only when your app needs to change theme at runtime.**

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

## Go to

[Begin](INDEX.md), [Elements](ELEMENTS.md), [Helpers](HELPERS.md), [Settings](SETTINGS.md), [Summary](SUMMARY.md), [beercss.com](https://www.beercss.com)

[Badge](BADGE.md), [Button](BUTTON.md), [Card](CARD.md), [Checkbox](CHECKBOX.md), [Chip](CHIP.md), [Container](CONTAINER.md), [Dialog](DIALOG.md), [Expansion](EXPANSION.md), [Grid](GRID.md), [Icon](ICON.md), [Input](INPUT.md), [Layout](LAYOUT.md), [Loader](LOADER.md), [Media](MEDIA.md), [Menu](MENU.md), [Navigation](NAVIGATION.md), [Overlay](OVERLAY.md), [Page](PAGE.md), [Progress](PROGRESS.md), [Radio](RADIO.md), [Select](SELECT.md), [Slider](SLIDER.md), [Switch](SWITCH.md), [Table](TABLE.md), [Tabs](TABS.md), [Textarea](TEXTAREA.md), [Toast](TOAST.md), [Tooltip](TOOLTIP.md), [Typography](TYPOGRAPHY.md)
