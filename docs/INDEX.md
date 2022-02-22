## Get started

#### CDN

From jsdelivr.net.

```html
<link href="https://cdn.jsdelivr.net/npm/beercss@2.0.12/dist/cdn/beer.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/beercss@2.0.12/dist/cdn/beer.min.js" type="text/javascript"></script>
<script src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@0.0.9/dist/cdn/material-dynamic-colors.min.js" type="text/javascript"></script>
```

#### NPM

You can get the latest release using NPM. This release contains source files as well as the compiled CSS and JavaScript files.

```js
// installing
npm i material-dynamic-colors
npm i beercss
```

```js
// importing
import "material-dynamic-colors";
import "beercss";
```

**We recommend use the material-dynamic-colors only when your app needs to change theme at runtime.**

## [Elements](https://github.com/beercss/beercss/blob/main/docs/ELEMENTS.md)

The elements are the components, widgets or tags.

## [Helpers](https://github.com/beercss/beercss/blob/main/docs/HELPERS.md)

The common helpers makes the elements more scalable and customizable.

## [Settings](https://github.com/beercss/beercss/blob/main/docs/SETTINGS.md)

The settings affects all document.

## 3 tips to master beercss

1. Try use helpers first, before any custom css.
2. When you use the dynamic theme, save the last theme. You will need the current theme to change from light to dark.
3. When the html output has a `data-ui` attribute or a field element, call `ui()` to trigger them. You can trigger it manually, but it can be a painful.

## Go to
[Begin](https://github.com/beercss/beercss/blob/main/docs/INDEX.md), [Elements](https://github.com/beercss/beercss/blob/main/docs/ELEMENTS.md), [Helpers](https://github.com/beercss/beercss/blob/main/docs/HELPERS.md), [Settings](https://github.com/beercss/beercss/blob/main/docs/SETTINGS.md), [beercss.com](https://www.beercss.com)