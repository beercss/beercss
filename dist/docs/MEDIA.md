# Media

Media can be a image or video element.

## Element

```html
<img>

<video>...</video>
```

## Most used helpers

**Forms**

circle, round, no-round, left-round, right-round, top-round, bottom-round, responsive

**Sizes**

tiny, small, medium, large, extra

## Example

```html
<img src="/image.png" class="circle extra">

<video class="circle extra">
  <source src="/video.mp4" type="video/mp4">
</video>

<svg class="circle extra" viewBox="0 0 24 24">
  <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"></path>
</svg>
```

## Responsive media example

The responsive media is a image/video that automatically adjust with the width/height of your container.

```html
<img src="/image.png" class="responsive">

<video class="responsive">
  <source src="/video.mp4" type="video/mp4">
</video>

<svg class="responsive" viewBox="0 0 24 24">
  <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"></path>
</svg>
```

