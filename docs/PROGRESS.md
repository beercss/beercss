# Progress

Progress display the length of a process.

## Element

```html
<...>
  <div class="progress">...</div>
</...>
```

## Most used helpers

**Positions**
left, right, top, bottom

## Example

```html
<div class="small-space">
  <div class="progress"></div>
</div>

<article>
  <div class="progress"></div>
  <h5>Title</h5>
</article>
```

## Triggers 

#### To change a progress

#### Unique method

Call `ui("progress-selector", percentage)`.

```html
<div class="small-space">
  <div class="progress" id="progress1"></div>
</div>

<article>
  <div class="progress" id="progress2"></div>
  <h5>Title</h5>
</article>
```

```js
ui("#progress1", 10);
ui("#progress2", 30);
```

## Related to
[Button](https://github.com/beercss/beercss/blob/main/docs/BUTTON.md), [Card](https://github.com/beercss/beercss/blob/main/docs/CARD.md), [Chip](https://github.com/beercss/beercss/blob/main/docs/CHIP.md)

## Go to
[Begin](https://github.com/beercss/beercss/blob/main/docs/INDEX.md), [Elements](https://github.com/beercss/beercss/blob/main/docs/ELEMENTS.md), [Helpers](https://github.com/beercss/beercss/blob/main/docs/HELPERS.md), [Settings](https://github.com/beercss/beercss/blob/main/docs/SETTINGS.md), [beercss.com](https://www.beercss.com)