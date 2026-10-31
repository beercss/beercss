# Modules

Use the [Settings](SETTINGS.md) , [Elements](ELEMENTS.md) and [Helpers](HELPERS.md) as modules. You can load modules by **direct import** or by **query string** (`settings=&elements=&helpers=&scoped=`). If a query string parameter is omitted, all modules for the omitted parameter will be loaded. If a query string parameter is informed, but empty, no modules will be loaded for the empty parameter. All CSS modules has `*.css`, `*.min.css`, `*.scoped.css` and `*.scoped.min.css` files. All JS modules has `*.js` and `*.min.js` files. Query string supports `beer.loader.js`, `beer.loader.min.js` `beer.custom-element.js` and `beer.custom-element.min.js` files.

### SETTINGS

**Query string:** global, light, dark, font, reset, theme

**Direct import:** https://cdn.jsdelivr.net/npm/beercss@5.0.3/dist/cdn/settings/

### ELEMENTS

**Query string:** badge, bar, button, card, chip, dialog, divider, expansion, field, grid, icon, layout, list, mainLayout, media, menu, navigation, overlay, page, progress, selection, shape, slider, snackbar, tab, table, tooltip, typography

**Direct import:** https://cdn.jsdelivr.net/npm/beercss@5.0.3/dist/cdn/elements/

### HELPERS

**Query string:** alignment, blur, color, direction, elevate, form, margin, opacity, padding, position, responsive, ripple, scroll, shadow, size, space, wave, zoom

**Direct import:** https://cdn.jsdelivr.net/npm/beercss@5.0.3/dist/cdn/helpers/

### DEFAULT VERSION

**Query string**

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/beercss@5.0.3/dist/cdn/beer.loader.js?elements=button,dialog&helpers=form"></script>
```

**Direct import**

```html
<style>
  @import "https://cdn.jsdelivr.net/npm/beercss@5.0.3/dist/cdn/settings/all.css";
  @import "https://cdn.jsdelivr.net/npm/beercss@5.0.3/dist/cdn/helpers/form.css";
  @import "https://cdn.jsdelivr.net/npm/beercss@5.0.3/dist/cdn/elements/button.css";
  @import "https://cdn.jsdelivr.net/npm/beercss@5.0.3/dist/cdn/elements/dialog.css";
</style>
<script type="module">
  import "https://cdn.jsdelivr.net/npm/beercss@5.0.3/dist/cdn/elements/dialog.js";
  import "https://cdn.jsdelivr.net/npm/beercss@5.0.3/dist/cdn/beer.loader.js";
</script>
```

**The `ui()` function**

```html
<script type="module">
  import ui from "https://cdn.jsdelivr.net/npm/beercss@5.0.3/dist/cdn/beer.loader.js";
  ui("import", "elements=button,dialog&helpers=form");
</script>
```

**Bundler import (we recommend [Vite](https://vite.dev/))**

```js
npm i beercss
```

```js
import "beercss/dist/cdn/settings/all.css";
import "beercss/dist/cdn/helpers/form.css";
import "beercss/dist/cdn/elements/button.css";
import "beercss/dist/cdn/elements/dialog.css";
import "beercss/dist/cdn/elements/dialog.js";
import "beercss/loader";
```

### SCOPED VERSION

**Query string**

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/beercss@5.0.3/dist/cdn/beer.loader.js?elements=button,dialog&helpers=form&scoped=1"></script>
```

**Direct import**

```html
<style>
  @import "https://cdn.jsdelivr.net/npm/beercss@5.0.3/dist/cdn/settings/all.scoped.css";
  @import "https://cdn.jsdelivr.net/npm/beercss@5.0.3/dist/cdn/helpers/form.scoped.css";
  @import "https://cdn.jsdelivr.net/npm/beercss@5.0.3/dist/cdn/elements/button.scoped.css";
  @import "https://cdn.jsdelivr.net/npm/beercss@5.0.3/dist/cdn/elements/dialog.scoped.css";
</style>
<script type="module">
  import "https://cdn.jsdelivr.net/npm/beercss@5.0.3/dist/cdn/elements/dialog.js";
  import "https://cdn.jsdelivr.net/npm/beercss@5.0.3/dist/cdn/beer.loader.js";
</script>
```

**The `ui()` function**

```html
<script type="module">
  import ui from "https://cdn.jsdelivr.net/npm/beercss@5.0.3/dist/cdn/beer.loader.js";
  ui("import", "elements=button,dialog&helpers=form&scoped=1");
</script>
```

**Bundler import (we recommend [Vite](https://vite.dev/))**

```js
npm i beercss
```

```js
import "beercss/dist/cdn/settings/all.scoped.css";
import "beercss/dist/cdn/helpers/form.scoped.css";
import "beercss/dist/cdn/elements/button.scoped.css";
import "beercss/dist/cdn/elements/dialog.scoped.css";
import "beercss/dist/cdn/elements/dialog.js";
import "beercss/loader";
```

#### CUSTOM ELEMENT VERSION

The custom element is scoped by default. Note the empty query string params on second example.

**Query string**

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/beercss@5.0.3/dist/cdn/beer.custom-element.js?elements=button,dialog&helpers=form"></script>
```

**The `import` attribute**

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/beercss@5.0.3/dist/cdn/beer.custom-element.js?settings=&elements=&helpers="></script>

<beer-css import="elements=button&dialog&helpers=form">...</beer-css>
```

### ✅ DO:

```
// load settings, helpers and elements respectively
import "beercss/dist/cdn/settings/**";
import "beercss/dist/cdn/helpers/**";
import "beercss/dist/cdn/elements/**";

// load modules in alphabetical order
import "beercss/dist/cdn/settings/all.css";
import "beercss/dist/cdn/helpers/elevate.css";
import "beercss/dist/cdn/helpers/form.css";
import "beercss/dist/cdn/elements/button.css";
import "beercss/dist/cdn/elements/dialog.css";

// load all settings
import "beercss/dist/cdn/settings/all.css";
import "beercss/dist/cdn/helpers/**";
import "beercss/dist/cdn/elements/**";
```

### 🚫 DON'T:

```
// load settings, helpers and elements in any order
import "beercss/dist/cdn/elements/**";
import "beercss/dist/cdn/helpers/**";
import "beercss/dist/cdn/settings/**";

// load modules in any order
import "beercss/dist/cdn/settings/all.css";
import "beercss/dist/cdn/helpers/form.css";
import "beercss/dist/cdn/helpers/elevate.css";
import "beercss/dist/cdn/elements/dialog.css";
import "beercss/dist/cdn/elements/button.css";

// load incomplete settings
import "beercss/dist/cdn/settings/dark.css";
import "beercss/dist/cdn/settings/light.css";
import "beercss/dist/cdn/helpers/**";
import "beercss/dist/cdn/elements/**";
```

**We exposed the `src` folder for advanced users. It uses Vite and Typescript. It doesn't has scoped version. Be careful and use by your own here https://cdn.jsdelivr.net/npm/beercss@5.0.3/src/cdn/.**

## 🧙‍♂️ Tips to master beercss modules

1. Read the DO and DON'T section to import correctly.
2. For [Vite](https://vite.dev/config/build-options#build-assetsinlinelimit) users, build your app with `assetsInlineLimit: 0` to keep the original size of CSS files.

