<p align="center">
    <a href="https://www.beercss.com" target="_blank" rel="noopener noreferrer"><img src="https://www.beercss.com/logo.png" alt="Beer CSS logo"></a>
</p>
<p align="center">
    <a href="https://github.com/beercss/beercss/blob/main/LICENSE"><img src="https://img.shields.io/github/license/beercss/beercss" alt="license"></a>
    <a href="https://github.com/beercss/beercss"><img src="https://img.shields.io/jsdelivr/npm/hy/beercss" alt="downloads"></a>
    <a><img src="https://img.shields.io/badge/brotli_size-14.4kb-green" alt="brotli size"></a>
    <a href="https://www.npmjs.com/package/beercss"><img src="https://img.shields.io/npm/v/beercss" alt="version"></a>
    <a href="https://github.com/beercss/beercss/pulls"><img src="https://img.shields.io/github/issues-pr/beercss/beercss" alt="pull Request"></a>
    <a href="https://github.com/beercss/beercss/issues"><img src="https://img.shields.io/github/issues/beercss/beercss" alt="issues"></a>
</p>

# Beer CSS

Build material design interfaces in record time...

...without stress for devs 🍺💛

Cheers, www.beercss.com

# Sponsors

Beer CSS is an MIT-licensed open source project with its ongoing development made possible entirely by the support of these awesome sponsors and backers. If you'd like to join them, please consider sponsoring Beer CSS's development.

<p align="center">
  <a href="https://opencollective.com/beercss">Open Collective</a><br /><br />
  <img src="https://opencollective.com/beercss/sponsors.svg?avatarHeight=56&button=false" alt="Sponsors">
  <img src="https://opencollective.com/beercss/backers.svg?avatarHeight=56&button=false" alt="Sponsors">
</p>

<p align="center">
  <a href="https://github.com/sponsors/beercss">Github Sponsors</a><br /><br />
  <img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/15235526?s=56&v=4&mask=circle&maxage=7d" alt="Sponsors">
  <img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/12303444?s=56&v=4&mask=circle&maxage=7d" alt="Sponsors">
  <img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/40445940?s=56&v=4&mask=circle&maxage=7d" alt="Sponsors">
  <img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/74856856?s=56&v=4&mask=circle&maxage=7d" alt="Sponsors">
  <img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/419690?s=56&v=4&mask=circle&maxage=7d" alt="Sponsors">
  <img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/181576?s=56&v=4&mask=circle&maxage=7d" alt="Sponsors">
  <img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/797439?s=56&v=4&mask=circle&maxage=7d" alt="Sponsors">
  <img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/3647943?s=56&v=4&mask=circle&maxage=7d" alt="Sponsors">
</p>

# Why?

- 🥇 The first CSS framework based on Material Design 3
- 👉 Latest "M3 Expressive" already.
- ⬇️ 10x smaller than others CSS frameworks based on Material Design.
- 🧙‍♂️ Translates Material Design to HTML semantic standard.
- 🤓 Ready to use with any JS framework.
- 🎯 Highly focused on DX.
- 🚫 No build steps, configurations or dependencies.
- ✨ Build modern interfaces without any custom CSS.
- ✅ Compliance with web standards.
- 💯 Google Lighthouse friendly.

# A lightweight beer

Let's be honest, in the ever-evolving world of web development, we're all looking for that sweet spot: powerful functionality without the bloat. We want speed, efficiency, and something that doesn't feel like lugging around a digital elephant. And if you're looking at the chart below, you're probably thinking, "Wow, XYZ is huge!". You're not wrong. But look all the way to the top. See that? That's Beer CSS.

![image](https://github.com/user-attachments/assets/23df0121-7716-4114-9751-38b1e519cfcd)

# The principles

This project was guided by the **"Germany Beer Purity Law"** or **"Reinheitsgebot"** created in 1516. This law states that beer should only be brewed with the following ingredients: **water**, **barley malt** and **hops**. Only 3 ingredients. Exciting, right? So we thinking about It and our 3 ingredients are: [Settings](docs/SETTINGS.md), [Elements](docs/ELEMENTS.md) and [Helpers](docs/HELPERS.md). This sounds weird at first time, because It's not BEM, OOCSS, SMACSS, ITCSS, "Utility first" or any other approach. Our approach doesn't avoid some bad practices, but is lightweight, tasty and pure like a beer. Just try it and feel it! 😁

```
|  SETTINGS     |       // The settings affects all document
|---------------|----|
|               |    |
|  ELEMENTS     |    |  // The elements are the components, widgets or tags
|               |    |
|---------------|    |
|               |    |
|               |    |
|  HELPERS      |----|  // The common helpers makes the elements more scalable and customizable
|               |
|               |
|---------------|
```

# Get started

### DEFAULT VERSION

```html
<link href="https://cdn.jsdelivr.net/npm/beercss@4.0.1/dist/cdn/beer.min.css" rel="stylesheet" />
<script type="module" src="https://cdn.jsdelivr.net/npm/beercss@4.0.1/dist/cdn/beer.min.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@1.1.4/dist/cdn/material-dynamic-colors.min.js"></script>
```

```js
npm i beercss
npm i material-dynamic-colors
```

```js
import "beercss";
import "material-dynamic-colors";
```

### SCOPED VERSION
Applied on child elements of `<* class="beer">...</*>`.

```html
<link href="https://cdn.jsdelivr.net/npm/beercss@4.0.1/dist/cdn/beer.scoped.min.css" rel="stylesheet" />
<script type="module" src="https://cdn.jsdelivr.net/npm/beercss@4.0.1/dist/cdn/beer.min.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@1.1.4/dist/cdn/material-dynamic-colors.min.js"></script>
```

```js
npm i beercss
npm i material-dynamic-colors
```

```js
import "beercss/scoped";
import "material-dynamic-colors";
```

### CUSTOM ELEMENT VERSION
Applied on child elements of `<beer-css>...</beer-css>`.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/beercss@4.0.1/dist/cdn/beer.custom-element.min.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@1.1.4/dist/cdn/material-dynamic-colors.min.js"></script>
```

```js
npm i beercss
npm i material-dynamic-colors
```

```js
import "beercss/custom-element";
import "material-dynamic-colors";
```

### LOCAL CDN VERSION

Download all files from CDN https://cdn.jsdelivr.net/npm/beercss@4.0.1/dist/cdn/ and https://cdn.jsdelivr.net/npm/material-dynamic-colors@1.1.4/dist/cdn/. Now put the files inside a new folder in your project (like `/beercss` for example):

```html
<link href="/beercss/beer.min.css" rel="stylesheet" />
<script type="module" src="/beercss/beer.min.js"></script>
<script type="module" src="/beercss/material-dynamic-colors.min.js"></script>
```

### HTML

You can use this html to setup your project. See on [Codepen](https://codepen.io/leo-bnu/pen/yLKLPxj). More about in [Main layout](docs/MAIN_LAYOUT.md).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="google" content="notranslate">
    <title>Hello world</title>
    <link href="https://cdn.jsdelivr.net/npm/beercss@4.0.1/dist/cdn/beer.min.css" rel="stylesheet">
    <script type="module" src="https://cdn.jsdelivr.net/npm/beercss@4.0.1/dist/cdn/beer.min.js"></script>
    <script type="module" src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@1.1.4/dist/cdn/material-dynamic-colors.min.js"></script>
  </head>
  <body class="dark">
    <nav class="left max l">
      <header>
        <nav>
          <img alt="logo" src="https://www.beercss.com/favicon.png" class="circle extra">
          <h6>Cheers</h6>
        </nav>
      </header>
      <a>
        <i>home</i>
        <span>Home</span>
      </a>
      <a>
        <i>search</i>
        <span>Search</span>
      </a>
      <a>
        <i>share</i>
        <span>Share</span>
      </a>
      <a>
        <i>more_vert</i>
        <span>More</span>
      </a>
      <div class="divider"></div>
      <a>
        <i>widgets</i>
        <span>Widgets</span>
      </a>
      <a>
        <i>chat</i>
        <span>Chat</span>
      </a>
      <a>
        <i>help</i>
        <span>Help</span>
      </a>  
    </nav>

    <nav class="left m">
      <header>
        <img alt="logo" src="https://www.beercss.com/favicon.png" class="circle extra">
      </header>
      <a>
        <i>home</i>
        <span>Home</span>
      </a>
      <a>
        <i>search</i>
        <span>Search</span>
      </a>
      <a>
        <i>share</i>
        <span>Share</span>
      </a>
      <a>
        <i>more_vert</i>
        <span>More</span>
      </a>
    </nav>

    <nav class="bottom s">
      <a>
        <i>home</i>
      </a>
      <a>
        <i>search</i>
      </a>
      <a>
        <i>share</i>
      </a>
      <a>
        <i>more_vert</i>
      </a>
    </nav>

    <main class="responsive">
      <img alt="beer and woman" src="https://www.beercss.com/beer-and-woman.svg" class="responsive round medium-height">
      <h3>Welcome</h3>
      <h4>The beer is ready!</h4>
    </main>
  </body>
</html>
```

**We recommend using the material-dynamic-colors only when your app needs to change theme at runtime.**

### ✅ DO:

```
// 1 setting to 1 document
<body class="dark|light">...</body>

// 1 element to N helpers
<element class="helper helper">...</element>
<div class="element helper helper">...</div>

// 1 main element per document
<...>
  <main></main>
</...>

// inline/block elements in block elements
<div>
  <div></div>
  <span></span>
</div>

// write css like this
.element.helper {...}
.element > .element {...}
.element > .helper {...}
```

### 🚫 DON'T:

```
// N elements to 1 tag
<div class="element element helper">...</div>
<element class="element helper">...</element>

// element with dependencies
<div class="element">
  <div class="element-header">...</div>
  <div class="element-content">...</div>
  <div class="element-footer">...</div>
</div>

// N main elements per document
<...>
  <main></main>
  <main></main>
</...>

// block elements in inline elements
<span>
  <div></div>
</span>

// write css like this
.element.element {...}
.element .element {...}
.element .helper {...}
```

# Documentation

Complete documentation and examples available at:

- **[Documentation](docs/INDEX.md)**
- **[Codepen](https://codepen.io/collection/XydYMB)**
- **[Homepage](https://www.beercss.com)**

# Contributing guide

Hi! We are really excited that you are interested in contributing to Beer CSS! Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

[Beer CSS Contributing Guidelines](CONTRIBUTING.md)

# License

[MIT](https://opensource.org/licenses/MIT)

# Cheers to all stargazers 🍻
[![Stargazers repo roster for @beercss/beercss](https://reporoster.com/stars/notext/beercss/beercss)](https://github.com/beercss/beercss/stargazers)

### Stargazers over time
[![Stargazers over time](https://starchart.cc/beercss/beercss.svg?variant=adaptive)](https://starchart.cc/beercss/beercss)
