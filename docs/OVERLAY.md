# Overlay

Overlays block user screen and can express an unspecified wait time.

## Element

```html
<div class="overlay">...</div>
```

## Most used helpers

**Alignments**

left-align, right-align, center-align, top-align, bottom-align, middle-align

**Triggers**

active

## Example

```html
<div class="overlay center-align middle-align">
  <a class="loader"></a>
</div>
```

## Triggers 

#### To show/hide a overlay

#### Method 1

Add/remove `active` class on overlay.

```html
<div class="overlay center-align middle-align active">
  <a class="loader"></a>
</div>
```

#### Method 2

Add `data-ui="overlay-selector"` attribute on elements.

```html
<button data-ui="#overlay">Show overlay</button>

<div class="overlay center-align middle-align" id="overlay">
  <a class="loader"></a>
</div>
```

#### Method 3

Call `ui("overlay-selector")`.

```html
<div class="overlay center-align middle-align" id="overlay">
  <a class="loader"></a>
</div>
```

```js
ui('#overlay');
```

## Go to

[Begin](INDEX.md), [Elements](ELEMENTS.md), [Helpers](HELPERS.md), [Settings](SETTINGS.md), [Summary](SUMMARY.md), [beercss.com](https://www.beercss.com)

[Badge](BADGE.md), [Button](BUTTON.md), [Card](CARD.md), [Checkbox](CHECKBOX.md), [Chip](CHIP.md), [Container](CONTAINER.md), [Dialog](DIALOG.md), [Expansion](EXPANSION.md), [Grid](GRID.md), [Icon](ICON.md), [Input](INPUT.md), [Layout](LAYOUT.md), [Loader](LOADER.md), [Media](MEDIA.md), [Menu](MENU.md), [Navigation](NAVIGATION.md), [Overlay](OVERLAY.md), [Page](PAGE.md), [Progress](PROGRESS.md), [Radio](RADIO.md), [Select](SELECT.md), [Slider](SLIDER.md), [Switch](SWITCH.md), [Table](TABLE.md), [Tabs](TABS.md), [Textarea](TEXTAREA.md), [Toast](TOAST.md), [Tooltip](TOOLTIP.md), [Typography](TYPOGRAPHY.md)