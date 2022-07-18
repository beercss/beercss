# Tabs

Tabs organize content across different screens, data sets, and other interactions.

## Element

```html
<div class="tabs">...</div>
```

## Most used helpers

**Alignments**

left-align, right-align, center-align

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

[Begin](https://github.com/beercss/beercss/blob/main/docs/INDEX.md), [Elements](https://github.com/beercss/beercss/blob/main/docs/ELEMENTS.md), [Helpers](https://github.com/beercss/beercss/blob/main/docs/HELPERS.md), [Settings](https://github.com/beercss/beercss/blob/main/docs/SETTINGS.md), [Summary](https://github.com/beercss/beercss/blob/main/docs/SUMMARY.md), [beercss.com](https://www.beercss.com)

[Badge](https://github.com/beercss/beercss/blob/main/docs/BADGE.md), [Button](https://github.com/beercss/beercss/blob/main/docs/BUTTON.md), [Card](https://github.com/beercss/beercss/blob/main/docs/CARD.md), [Checkbox](https://github.com/beercss/beercss/blob/main/docs/CHECKBOX.md), [Chip](https://github.com/beercss/beercss/blob/main/docs/CHIP.md), [Container](https://github.com/beercss/beercss/blob/main/docs/CONTAINER.md), [Dropdown](https://github.com/beercss/beercss/blob/main/docs/DROPDOWN.md), [Expansion](https://github.com/beercss/beercss/blob/main/docs/EXPANSION.md), [Grid](https://github.com/beercss/beercss/blob/main/docs/GRID.md), [Icon](https://github.com/beercss/beercss/blob/main/docs/ICON.md), [Input](https://github.com/beercss/beercss/blob/main/docs/INPUT.md), [Layout](https://github.com/beercss/beercss/blob/main/docs/LAYOUT.md), [Loader](https://github.com/beercss/beercss/blob/main/docs/LOADER.md), [Media](https://github.com/beercss/beercss/blob/main/docs/MEDIA.md), [Modal](https://github.com/beercss/beercss/blob/main/docs/MODAL.md), [Navigation](https://github.com/beercss/beercss/blob/main/docs/NAVIGATION.md), [Overlay](https://github.com/beercss/beercss/blob/main/docs/OVERLAY.md), [Page](https://github.com/beercss/beercss/blob/main/docs/PAGE.md), [Progress](https://github.com/beercss/beercss/blob/main/docs/PROGRESS.md), [Radio](https://github.com/beercss/beercss/blob/main/docs/RADIO.md), [Select](https://github.com/beercss/beercss/blob/main/docs/SELECT.md), [Switch](https://github.com/beercss/beercss/blob/main/docs/SWITCH.md), [Table](https://github.com/beercss/beercss/blob/main/docs/TABLE.md), [Tabs](https://github.com/beercss/beercss/blob/main/docs/TABS.md), [Textarea](https://github.com/beercss/beercss/blob/main/docs/TEXTAREA.md), [Toast](https://github.com/beercss/beercss/blob/main/docs/TOAST.md), [Tooltip](https://github.com/beercss/beercss/blob/main/docs/TOOLTIP.md), [Typography](https://github.com/beercss/beercss/blob/main/docs/TYPOGRAPHY.md)