<p align="center">
    <a href="https://www.beercss.com" target="_blank" rel="noopener noreferrer"><img src="https://www.beercss.com/logo.png" alt="Beercss logo"></a>
</p>
<p align="center">
    <a href="https://github.com/beercss/beercss/blob/main/LICENSE"><img src="https://img.shields.io/github/license/beercss/beercss" alt="License"></a>
    <img src="https://img.shields.io/jsdelivr/npm/hy/beercss" alt="Downloads">
    <a href="https://bundlephobia.com/package/beercss"><img src="https://badgen.net/bundlephobia/minzip/beercss" alt="Size"></a>
    <a href="https://www.npmjs.com/package/beercss"><img src="https://img.shields.io/npm/v/beercss" alt="Version"></a>
    <a href="https://github.com/beercss/beercss/pulls"><img src="https://img.shields.io/github/issues-pr/beercss/beercss" alt="Pull Request"></a>
    <a href="https://github.com/beercss/beercss/issues"><img src="https://img.shields.io/github/issues/beercss/beercss" alt="Issues"></a>
</p>

# Beercss

Build material design interfaces in record time...

...without stress for devs 🍺💛

Cheers, www.beercss.com

## Why? ##

- It's based on latest material design patterns.
- It's themeable.
- **It has zero dependencies.**
- It does a lot of combinations.
- It's easy to work with Vue, React, Angular, Svelte and others.
- **It has about 10kb.**
- **It has the most simple html output around.**
- It does not need tons of documentation to explain it.
- It's fast to learn, read and write code.
- **It's like pure malt beer, only native and standard code.**
- No tricks, no build steps and no abstraction layers to try reduce your final code.
- It's well designed and we hope that you can do a lot with it.

## Applying "the beer way" in css?

This project was guided by the **"Germany Beer Purity Law"** or **"Reinheitsgebot"** created in 1516. This law states that beer should only be brewed with the following ingredients: **water**, **barley malt** and **hops**. Only 3 ingredients. Exciting, right? So we thinking about It and our 3 ingredients are: **settings**, **elements** and **helpers**. This sounds weird at first time, because It's not BEM, OOCSS, SMACSS, ITCSS, "Utility first" or any other approach. Our approach doesn't avoid some bad practices, but is lightweight, tasty and pure like a beer. Just try it and feel it! 😁

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

### DO:

```
// 1 setting to 1 document
<body class="light">...</body>
<body class="dark">...</body>

// 1 element to N helpers
<element class="helper helper">...</element>
<div class="element helper helper">...</div>

// nav elements before all others
<body>
  <nav class="left m l">...</nav>
  <nav class="bottom s">...</nav>
  <header class="responsive">...</header>
  <main class="responsive">...</main>
  <footer class="responsive">...</footer>
</body>

<div id="app">
  <nav class="left m l">...</nav>
  <nav class="bottom s">...</nav>
  <header class="responsive">...</header>
  <main class="responsive">...</main>
  <footer class="responsive">...</footer>
</div>

// write css like this
.element.helper {...}
.element > .element {...}
.element > .helper {...}
```

### DON'T:

```
// N elements to 1 tag
<div class="element element helper">...</div>

// element with dependencies
<div class="element">
  <div class="element-header">...</div>
  <div class="element-content">...</div>
  <div class="element-footer">...</div>
</div>

// nav elements after all others
<body>
  <header class="responsive">...</header>
  <main class="responsive">...</main>
  <footer class="responsive">...</footer>
  <nav class="left m l">...</nav>
  <nav class="bottom s">...</nav>
</body>

<div id="app">
  <header class="responsive">...</header>
  <main class="responsive">...</main>
  <footer class="responsive">...</footer>
  <nav class="left m l">...</nav>
  <nav class="bottom s">...</nav>
</div>

<main class="responsive">
  <nav class="left m l">...</nav>
  <nav class="bottom s">...</nav>
  ...
</main>

// write css like this
.element.element {...}
.element .element {...}
.element .helper {...}
```

## Get started

### CDN

From jsdelivr.net.

```html
<link href="https://cdn.jsdelivr.net/npm/beercss@2.2.0/dist/cdn/beer.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/beercss@2.2.0/dist/cdn/beer.min.js" type="text/javascript"></script>
<script src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@0.0.10/dist/cdn/material-dynamic-colors.min.js" type="text/javascript"></script>
```

### NPM

You can get the latest release using NPM. This release contains source files as well as the compiled CSS and JavaScript files.

```js
// installing
npm i beercss
npm i material-dynamic-colors
```

```js
// importing
import "beercss";
import "material-dynamic-colors";
```

### HTML

You can use this html to setup your project. See on [Codepen](https://codepen.io/leo-bnu/pen/yLKLPxj).

```html
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="google" content="notranslate">
    <title>Hello world</title>
    <link href="https://cdn.jsdelivr.net/npm/beercss@2.2.0/dist/cdn/beer.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/beercss@2.2.0/dist/cdn/beer.min.js" type="text/javascript"></script>
    <script src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@0.0.10/dist/cdn/material-dynamic-colors.min.js" type="text/javascript"></script>
  </head>
  <body class="light">
    <nav class="left m l">
      <img src="https://www.beercss.com/favicon.png" class="circle margin">
      <a>
        <i>home</i>
        <div>Home</div>
      </a>
      <a>
        <i>search</i>
        <div>Search</div>
      </a>
      <a>
        <i>share</i>
        <div>Share</div>
      </a>
      <a>
        <i>more_vert</i>
        <div>More</div>
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
      <img src="https://www.beercss.com/beer-and-woman.jpg" class="responsive round">
      <h3>Welcome</h3>
      <h5>The beer is ready!</h5>
    </main>
  </body>
</html>
```

**We recommend use the material-dynamic-colors only when your app needs to change theme at runtime.**

## Documentation

Complete documentation and examples available at:

- **[Documentation](https://github.com/beercss/beercss/blob/main/docs/INDEX.md)**
- **[Codepen](https://codepen.io/collection/XydYMB)**
- **[Homepage](https://www.beercss.com)**

## Contributing guide

Hi! We are really excited that you are interested in contributing to Beercss! Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

https://github.com/beercss/beercss/blob/main/CONTRIBUTING.md

## License

[MIT](https://opensource.org/licenses/MIT)

## Cheers to all people here 🍻
[![Stargazers repo roster for @beercss/beercss](https://reporoster.com/stars/notext/beercss/beercss)](https://github.com/beercss/beercss/stargazers)

## Supporting us

Beercss is an MIT-licensed open source project with its ongoing development made possible entirely by the support of these awesome backers. If you'd like to join them, please consider:

- [Become a backer or sponsor on Patreon](https://www.patreon.com/beercss).
- [Become a backer or sponsor on Open Collective](https://www.opencollective.com/beercss).
