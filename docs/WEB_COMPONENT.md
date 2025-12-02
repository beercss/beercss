# Using with Web Components

Beer CSS can be scoped to a specific element, making it ideal for use inside Web Components that leverage the Shadow DOM for encapsulation.

This guide will show you how to set up Beer CSS to work exclusively within your custom element.

## The `init()` function

To make Beer CSS aware of your component's Shadow DOM, you must use the exported `init()` function.

`init(root)`

-   **`root`**: The root node where Beer CSS should operate. This can be a `ShadowRoot` or the main `document`. If omitted, it defaults to `document`.

The `init()` function now returns a **scoped UI function** that is specific to the provided `root`. This means Beer CSS can now manage multiple independent roots (e.g., the main `document` and several `shadowRoot`s) concurrently without conflict. Each call to `init()` for a distinct root will set up an isolated Beer CSS instance for that root, ensuring its functionalities operate exclusively within its scope.


## Example

Here is a complete example of a web component using Beer CSS.

1.  **Create your component's class.**
2.  **Attach a Shadow DOM** in the constructor.
3.  **Import Beer CSS:** You'll need to import both the CSS and the `init` function from the JavaScript module.
4.  **Set the `innerHTML`** of your shadow root, including a `<link>` tag for the stylesheet and the HTML for your component's UI.
5.  **Call `init(this.shadowRoot)`** in `connectedCallback` to activate Beer CSS.

```javascript
// It's recommended to import from the package if you're using a bundler.
// import { init } from 'beercss';

// Or import directly from the CDN.
import { init } from 'https://cdn.jsdelivr.net/npm/beercss@3.12.13/dist/cdn/beer.min.js'; // Note: Version might need update

class MyBeerComponent extends HTMLElement {
  _ui; // Declare _ui property to hold the scoped ui function

  constructor() {
    super();
    // Attach a shadow DOM to the element.
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Set the HTML content for the component
    this.shadowRoot.innerHTML = `
      <!-- 1. Link the stylesheet inside the Shadow DOM -->
      <link href="https://cdn.jsdelivr.net/npm/beercss@3.12.13/dist/cdn/beer.min.css" rel="stylesheet" />
      
      <!-- 2. Add your HTML with Beer CSS components -->
      <main class="responsive">
        <article class="round">
          <h5>My Web Component</h5>
          <p>This entire component, including the slider and button below, is encapsulated in a Shadow DOM. Beer CSS has been initialized specifically for this scope.</p>
          
          <label class="slider">
            <input type="range" value="25">
            <span></span>
          </label>

          <nav>
            <button class="chip">
              Cheers! 🍻
            </button>
          </nav>
        </article>
      </main>
    `;

    // 3. Initialize Beer CSS, scoped to this component's shadow DOM.
    // The init() function now returns a UI function bound to this specific shadow DOM.
    // This allows multiple web components to use Beer CSS independently without conflict.
    this._ui = init(this.shadowRoot);

    // If you need to interact with Beer CSS functionalities, use the returned _ui function, e.g.:
    // this._ui("setup"); // To trigger a manual update for this component's Beer CSS elements
    // this._ui("mode", "dark"); // To set the theme mode for this specific component
  }
}

// Define the new custom element
customElements.define('my-beer-component', MyBeerComponent);
```

### Usage in HTML

Once defined, you can use your component like any standard HTML tag:

```html
<body>
  ...
  <my-beer-component></my-beer-component>
  ...
</body>
```

This approach ensures that the styles and behaviors of Beer CSS within `<my-beer-component>` are completely isolated and won't leak out to or conflict with the rest of your application.
