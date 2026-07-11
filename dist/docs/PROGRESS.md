# Progress

Progress display the length of a process or an unspecified wait time.

## Element

```html
<progress>...</progress>
```

## Most used helpers

**Forms**

circle, wavy, indeterminate

**Sizes**

small, medium, large, max

## Linear example

```html
<progress></progress>
<progress value="25" max="100"></progress>
```

```html
<progress class="wavy"></progress>
<progress class="wavy" value="25" max="100"></progress>
```

## Circular example

```html
<progress class="circle"></progress>
<progress class="circle" value="25" max="100"></progress>
```

```html
<progress class="circle wavy"></progress>
<progress class="circle wavy" value="25" max="100"></progress>
```

## Custom examples

```html
<article>
  <progress class="max" value="25" max="100"></progress>
  <h5>Title</h5>
</article>

<article>
  <h5>Title</h5>
  <progress class="max" value="25" max="100"></progress>
</article>
```

