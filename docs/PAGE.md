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

## Go to

[Begin](https://github.com/beercss/beercss/blob/main/docs/INDEX.md), [Elements](https://github.com/beercss/beercss/blob/main/docs/ELEMENTS.md), [Helpers](https://github.com/beercss/beercss/blob/main/docs/HELPERS.md), [Settings](https://github.com/beercss/beercss/blob/main/docs/SETTINGS.md), [Summary](https://github.com/beercss/beercss/blob/main/docs/SUMMARY.md), [beercss.com](https://www.beercss.com)

[Badge](https://github.com/beercss/beercss/blob/main/docs/BADGE.md), [Button](https://github.com/beercss/beercss/blob/main/docs/BUTTON.md), [Card](https://github.com/beercss/beercss/blob/main/docs/CARD.md), [Checkbox](https://github.com/beercss/beercss/blob/main/docs/CHECKBOX.md), [Chip](https://github.com/beercss/beercss/blob/main/docs/CHIP.md), [Container](https://github.com/beercss/beercss/blob/main/docs/CONTAINER.md), [Dropdown](https://github.com/beercss/beercss/blob/main/docs/DROPDOWN.md), [Expansion](https://github.com/beercss/beercss/blob/main/docs/EXPANSION.md), [Icon](https://github.com/beercss/beercss/blob/main/docs/ICON.md), [Input](https://github.com/beercss/beercss/blob/main/docs/INPUT.md), [Layout](https://github.com/beercss/beercss/blob/main/docs/LAYOUT.md), [Loader](https://github.com/beercss/beercss/blob/main/docs/LOADER.md), [Media](https://github.com/beercss/beercss/blob/main/docs/MEDIA.md), [Modal](https://github.com/beercss/beercss/blob/main/docs/MODAL.md), [Navigation](https://github.com/beercss/beercss/blob/main/docs/NAVIGATION.md), [Overlay](https://github.com/beercss/beercss/blob/main/docs/OVERLAY.md), [Page](https://github.com/beercss/beercss/blob/main/docs/PAGE.md), [Progress](https://github.com/beercss/beercss/blob/main/docs/PROGRESS.md), [Radio](https://github.com/beercss/beercss/blob/main/docs/RADIO.md), [Row](https://github.com/beercss/beercss/blob/main/docs/ROW.md), [Select](https://github.com/beercss/beercss/blob/main/docs/SELECT.md), [Switch](https://github.com/beercss/beercss/blob/main/docs/SWITCH.md), [Table](https://github.com/beercss/beercss/blob/main/docs/TABLE.md), [Tabs](https://github.com/beercss/beercss/blob/main/docs/TABS.md), [Textarea](https://github.com/beercss/beercss/blob/main/docs/TEXTAREA.md), [Toast](https://github.com/beercss/beercss/blob/main/docs/TOAST.md), [Tooltip](https://github.com/beercss/beercss/blob/main/docs/TOOLTIP.md), [Typography](https://github.com/beercss/beercss/blob/main/docs/TYPOGRAPHY.md)