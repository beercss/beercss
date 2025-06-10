# Button

Buttons allow users to take actions, and make choices, with a single tap.

## Element

```
<button>...</button>
<a class="button">...</a>
```

## Most used helpers

**Colors**

fill, primary, secondary, tertiary

**Directions**

horizontal, vertical

**Forms**

border, circle, square, round, no-round, left-round, right-round, top-round, bottom-round, responsive, extend

**Sizes**

small, medium, large, extra

## Example

```html
<button>Button</button>

<button>
  <i>home</i>
  <span>Button</span>
</button>
```

## Responsive button example

The responsive button is a button that automatically adjusts with the width of your container.

```html
<button class="responsive">Button</button>

<button class="responsive">
  <i>home</i>
  <span>Button</span>
</button>
```

## FAB example

A floating action button (FAB) represents the primary action of a screen.

```html
<button class="circle extra">
  <i>home</i>
</button>
```

## Extended FAB example

The extended FAB is wider, and it includes a text label.

```html
<button class="extend circle">
  <i>home</i>
  <span>Button</span>
</button>
```

## FABs menu

The floating action button (FAB) menu opens from a FAB to display multiple related actions

```html
<...>
  <button class="circle extra">
    <i>Home</i>
  </button>
  <menu class="top transparent no-wrap">
    <li>
      <button>Button</button>
    </li>
    ...
  </menu>
</...>
```

## Icon button example

The transparent button is a button for navigation. The shape of button will be revealed on button actions. Combine with icons and images.

```html
<button class="transparent circle">
  <i>home</i>
</button>

<button class="transparent circle">
  <img class="responsive" src="/image.png">
</button>
```

## Button groups

Button groups organize buttons and add interactions between them.

```html
<nav class="group">
  <button class="left-round">Left</button>
  <button class="no-round">Center</button>
  <button class="right-round">Right</button>
</nav>
```


```html
<nav class="group connected">
  <button class="left-round">Left</button>
  <button class="no-round">Center</button>
  <button class="right-round">Right</button>
</nav>
```

## Split buttons

Split buttons open a menu to give people more options related to an action.

```html
<nav class="group split">
  <button class="left-round">Button</button>
  <button class="right-round">
    <i>keyboard_arrow_down</i>
  </button>
</nav>
```

## Go to

[Begin](INDEX.md), [Elements](ELEMENTS.md), [Helpers](HELPERS.md), [Settings](SETTINGS.md), [Summary](SUMMARY.md), [Javascript](JAVASCRIPT.md), [beercss.com](https://www.beercss.com)

[Badge](BADGE.md), [Button](BUTTON.md), [Card](CARD.md), [Checkbox](CHECKBOX.md), [Chip](CHIP.md), [Container](CONTAINER.md), [Dialog](DIALOG.md), [Divider](DIVIDER.md), [Expansion](EXPANSION.md), [Grid](GRID.md), [Icon](ICON.md), [Input](INPUT.md), [Layout](LAYOUT.md), [List](LIST.md), [Main layout](MAIN_LAYOUT.md), [Media](MEDIA.md), [Menu](MENU.md), [Navigation](NAVIGATION.md), [Overlay](OVERLAY.md), [Page](PAGE.md), [Progress](PROGRESS.md), [Radio](RADIO.md), [Select](SELECT.md), [Shape](SHAPE.md), [Slider](SLIDER.md), [Snackbar](SNACKBAR.md), [Switch](SWITCH.md), [Table](TABLE.md), [Tabs](TABS.md), [Textarea](TEXTAREA.md), [Tooltip](TOOLTIP.md), [Typography](TYPOGRAPHY.md)
