# List

Lists are continuous, vertical indexes of text and images. Each item can have up to 3 lines.

## Element

```html
<ul class="list">
  <li>...</li>
</ul>

<ol class="list">
  <li>...</li>
</ol>
```

## Most used helpers

**Forms**

border

**Spaces**

no-space, space, small-space, medium-space, large-space

## Default list

```html
<ul class="list">
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
</ul>
```

```html
<ul class="list">
  <li>
    <a href="#">Item</a>
  </li>
  <li>
    <a href="#">Item</a>
  </li>
  <li>
    <a href="#">Item</a>
  </li>
  <li>
    <a href="#">Item</a>
  </li>
</ul>
```

## Nested list

```html
<ul class="list">
  <li>Item</li>
  <li>Item</li>
  <li>
    <ul class="list">
      <li>Item</li>
      <li>Item</li>
    </ul>
  </li>
</ul>
```

## Expansion list

```html
<ul class="list">
  <li>Item</li>
  <li>Item</li>
  <li>
    <details>
      <summary>Header Item</summary>
      <ul class="list">
        <li>Item</li>
        <li>Item</li>
      </ul>
    </details>
  </li>
</ul>
```

## Headline and supporting text example

```html
<ul class="list">
  <li>
    <button class="circle">A</button>
    <div class="max">
      <h6 class="small">Headline</h6>
      <div>Supporting text</div>
    </div>
    <label>+15 min</label>
  </li>
</ul>
```

## Icons

```html
<ul class="list">
  <li>
    <i>home</i>
    <div class="max">
      <h6 class="small">Headline</h6>
      <div>Supporting text</div>
    </div>
    <label>+15 min</label>
  </li>
</ul>
```

## Leading media or avatar

```html
<ul class="list">
  <li>
    <img class="round" src="/beer-and-woman.svg">
    <div class="max">
      <h6 class="small">Headline</h6>
      <div>Supporting text</div>
    </div>
    <label>+15 min</label>
  </li>
</ul>
```

## Go to

[Begin](INDEX.md), [Elements](ELEMENTS.md), [Helpers](HELPERS.md), [Settings](SETTINGS.md), [Summary](SUMMARY.md), [Javascript](JAVASCRIPT.md), [beercss.com](https://www.beercss.com)

[Badge](BADGE.md), [Button](BUTTON.md), [Card](CARD.md), [Checkbox](CHECKBOX.md), [Chip](CHIP.md), [Container](CONTAINER.md), [Dialog](DIALOG.md), [Divider](DIVIDER.md), [Expansion](EXPANSION.md), [Grid](GRID.md), [Icon](ICON.md), [Input](INPUT.md), [Layout](LAYOUT.md), [List](LIST.md), [Main layout](MAIN_LAYOUT.md), [Media](MEDIA.md), [Menu](MENU.md), [Navigation](NAVIGATION.md), [Overlay](OVERLAY.md), [Page](PAGE.md), [Progress](PROGRESS.md), [Radio](RADIO.md), [Select](SELECT.md), [Shape](SHAPE.md), [Slider](SLIDER.md), [Snackbar](SNACKBAR.md), [Switch](SWITCH.md), [Table](TABLE.md), [Tabs](TABS.md), [Textarea](TEXTAREA.md), [Tooltip](TOOLTIP.md), [Typography](TYPOGRAPHY.md)
