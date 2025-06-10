# Tabs

Tabs organize content across different screens, data sets, and other interactions.

## Element

```html
<div class="tabs">...</div>
```

## Most used helpers

**Alignments**

left-align, right-align, center-align

**Directions**

horizontal, vertical

**Sizes**

min, max

**Triggers**

active

## Example

```html
<div class="tabs">
  <a>Tab 1</a>
  <a>Tab 2</a>
  <a>Tab 3</a>
</div>

<div class="page">
  <h5>Tab 1</h5>
</div>
<div class="page">
  <h5>Tab 2</h5>
</div>
<div class="page">
  <h5>Tab 3</h5>
</div>
```

## Triggers 

#### To active a tab

#### Method 1

Add/remove `active` class on tab and page elements.

```html
<div class="tabs">
  <a class="active">Tab 1</a>
  <a>Tab 2</a>
  <a>Tab 3</a>
</div>

<div class="page active">
  <h5>Tab 1</h5>
</div>
<div class="page">
  <h5>Tab 2</h5>
</div>
<div class="page">
  <h5>Tab 3</h5>
</div>
```

#### Method 2

Add `data-ui="page-selector"` attribute on elements. All other pages that are in the same level will be hidden.

```html
<div class="tabs">
  <a data-ui="#page1">Tab 1</a>
  <a data-ui="#page2">Tab 2</a>
  <a data-ui="#page3">Tab 3</a>
</div>

<div class="page" id="page1">
  <h5>Tab 1</h5>
</div>
<div class="page" id="page2">
  <h5>Tab 2</h5>
</div>
<div class="page" id="page3">
  <h5>Tab 3</h5>
</div>
```

## Go to

[Begin](INDEX.md), [Elements](ELEMENTS.md), [Helpers](HELPERS.md), [Settings](SETTINGS.md), [Summary](SUMMARY.md), [Javascript](JAVASCRIPT.md), [beercss.com](https://www.beercss.com)

[Badge](BADGE.md), [Button](BUTTON.md), [Card](CARD.md), [Checkbox](CHECKBOX.md), [Chip](CHIP.md), [Container](CONTAINER.md), [Dialog](DIALOG.md), [Divider](DIVIDER.md), [Expansion](EXPANSION.md), [Grid](GRID.md), [Icon](ICON.md), [Input](INPUT.md), [Layout](LAYOUT.md), [List](LIST.md), [Main layout](MAIN_LAYOUT.md), [Media](MEDIA.md), [Menu](MENU.md), [Navigation](NAVIGATION.md), [Overlay](OVERLAY.md), [Page](PAGE.md), [Progress](PROGRESS.md), [Radio](RADIO.md), [Select](SELECT.md), [Shape](SHAPE.md), [Slider](SLIDER.md), [Snackbar](SNACKBAR.md), [Switch](SWITCH.md), [Table](TABLE.md), [Tabs](TABS.md), [Textarea](TEXTAREA.md), [Tooltip](TOOLTIP.md), [Typography](TYPOGRAPHY.md)