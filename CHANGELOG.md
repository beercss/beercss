# Changelog

## v0.0.78 ##

- To work in iOS we made changes in checkbox, radio and switch
- Old sintax does not will work anymore

```html
// old checkbox, radio and switch
<label>
  <input type="checkbox">
  <span>Item</span>
</label>

<label>
  <input type="radio">
  <span>Item</span>
</label>

<label>
  <input class="switch" type="checkbox">
  <span>Item</span>
</label>

// new checkbox, radio and switch
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

- The .btn class was marked as obsolete, use .button or <button> instead.
- You can still use the .btn class, but is not recommended.
 
### Cheers! ###
