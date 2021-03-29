# Changelog

## v1.0.0 ##
- Adding textarea element
- Adding .min and .max helpers to .container
- Adding .min helper to .dropdown
- Adding .min helper to .card
- BREAKING CHANGE - Renaming .nowrap to .no-wrap, it's like .no-padding, .no-margin and others.
- BREAKING CHANGE - Renaming .btn to .button or <button>

```html
<div class="field label textarea">
  <textarea></textarea>
  <label>Text</label>
</div>
```

## v0.0.81 ##
- Adding .wave and .no-wave class, button has .wave by default

## v0.0.78 ##

- To work in iOS we made changes in checkbox, radio and switch
- Old sintax does not will work anymore

```html
<label class="checkbox">
  <input type="checkbox">
  <span>Item</span>
</label>

<label class="radio">
  <input type="radio">
  <span>Item</span>
</label>

<label class="switch">
  <input type="checkbox">
  <span>Item</span>
</label>
```

## v0.0.74 ##

- Renaming .btn to .button or <button>.
- You can still use the .btn class, but is not recommended.

### Cheers! ###
