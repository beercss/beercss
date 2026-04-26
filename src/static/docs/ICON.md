# Icon

Material design system icons are simple, modern, friendly, and sometimes quirky. Each icon is created using our design guidelines to depict in simple and minimal forms the universal concepts used commonly throughout a UI. Ensuring readability and clarity at both large and small sizes, these icons have been optimized for beautiful display on all common platforms and display resolutions. Get all icons here https://fonts.google.com/icons.

## Element

```html
<i>...</i>
<i>
  <svg>...</svg>
</i>
<i>
  <img>
</i>
```

## Most used helpers

**Forms**

fill

**Sizes**

tiny, small, medium, large, extra

## Example

```html
<i>home</i>
```

## SVG example

```html
<i>
  <svg viewBox="0 0 24 24">
    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"></path>
  </svg>
</i>
```

## Multiple icons in a single SVG example

```html
<svg viewBox="0 0 24 24" style="display: none">
  <g id="home">
    <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"></path>
  </g>
  <g id="star">
    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
  </g>
  <g id="account_circle">
    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"></path>
  </g>
</svg>

<i>
  <svg viewBox="0 0 24 24">
    <use href="#home"></use>
  </svg>
</i>

<i>
  <svg viewBox="0 0 24 24">
    <use href="#star"></use>
  </svg>
</i>

<i>
  <svg viewBox="0 0 24 24">
    <use href="#account_circle"></use>
  </svg>
</i>
```

## Image example

```html
<i>
  <img src="/favicon.png">
</i>
```

## Other libs example

To work as expected, you need to load the libs manually.

### [Font Awesome](https://fontawesome.com/search?m=free&o=r)

```html
<i class="fa-regular fa-clock"></i>
```

### [Pictogrammers](https://pictogrammers.com/library/mdi/)

```html
<i class="mdi mdi-clock-outline"></i>
```

## Go to

[Begin](INDEX.md), [Elements](ELEMENTS.md), [Helpers](HELPERS.md), [Settings](SETTINGS.md), [Summary](SUMMARY.md), [Javascript](JAVASCRIPT.md), [beercss.com](https://www.beercss.com)

[Badge](BADGE.md), [Button](BUTTON.md), [Card](CARD.md), [Checkbox](CHECKBOX.md), [Chip](CHIP.md), [Container](CONTAINER.md), [Dialog](DIALOG.md), [Divider](DIVIDER.md), [Expansion](EXPANSION.md), [Grid](GRID.md), [Icon](ICON.md), [Input](INPUT.md), [Layout](LAYOUT.md), [List](LIST.md), [Main layout](MAIN_LAYOUT.md), [Media](MEDIA.md), [Menu](MENU.md), [Navigation](NAVIGATION.md), [Overlay](OVERLAY.md), [Page](PAGE.md), [Progress](PROGRESS.md), [Radio](RADIO.md), [Select](SELECT.md), [Shape](SHAPE.md), [Slider](SLIDER.md), [Snackbar](SNACKBAR.md), [Switch](SWITCH.md), [Table](TABLE.md), [Tabs](TABS.md), [Textarea](TEXTAREA.md), [Tooltip](TOOLTIP.md), [Typography](TYPOGRAPHY.md)