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

Add `data-ui="page-selector"` attribute on elements. All other pages that are in the same level will be hidden.

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

[Begin](INDEX.md), [Elements](ELEMENTS.md), [Helpers](HELPERS.md), [Settings](SETTINGS.md), [Summary](SUMMARY.md), [Javascript](JAVASCRIPT.md), [beercss.com](https://www.beercss.com)

[Badge](BADGE.md), [Button](BUTTON.md), [Card](CARD.md), [Checkbox](CHECKBOX.md), [Chip](CHIP.md), [Container](CONTAINER.md), [Dialog](DIALOG.md), [Divider](DIVIDER.md), [Expansion](EXPANSION.md), [Grid](GRID.md), [Icon](ICON.md), [Input](INPUT.md), [Layout](LAYOUT.md), [List](LIST.md), [Main layout](MAIN_LAYOUT.md), [Media](MEDIA.md), [Menu](MENU.md), [Navigation](NAVIGATION.md), [Overlay](OVERLAY.md), [Page](PAGE.md), [Progress](PROGRESS.md), [Radio](RADIO.md), [Select](SELECT.md), [Shape](SHAPE.md), [Slider](SLIDER.md), [Snackbar](SNACKBAR.md), [Switch](SWITCH.md), [Table](TABLE.md), [Tabs](TABS.md), [Textarea](TEXTAREA.md), [Tooltip](TOOLTIP.md), [Typography](TYPOGRAPHY.md)