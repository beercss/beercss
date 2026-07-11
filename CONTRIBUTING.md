# Beer CSS Contributing Guide

Hi! We are really excited that you are interested in contributing to Beer CSS! Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

- [Issue Reporting Guidelines](#issue-reporting-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)

## Issue Reporting Guidelines

- If you are reporting a bug, please use the "Bug report" template, otherwise use the "Blank issue" template.

## Pull Request Guidelines

- The `main` branch is just a snapshot of the latest stable release. All development should be done in dedicated branches. **Do not submit PRs against the `main` branch.**

- Checkout a topic branch from the relevant branch, e.g. `dev`, and merge back against that branch.

- Work in the `src` folder and **DO NOT** checkin `dist` in the commits.

- It's OK to have multiple small commits as you work on the PR - GitHub will automatically squash it before merging.

- Make sure `npm run test` passes. (see [development setup](#development-setup))

- If adding a new feature:
  - Add accompanying test case.
  - Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first and have it approved before working on it.

- If fixing bug:
  - If you are resolving a special issue, add `(fix #xxxx[,#xxxx])` (#xxxx is the issue id) in your PR title for a better release log, e.g. `update entities encoding/decoding (fix #3899)`.
  - Provide a detailed description of the bug in the PR. Live demo preferred.
  - Add appropriate test coverage if applicable.

## Development Setup

You will need [Node.js](http://nodejs.org).

After cloning the repo, run:

``` bash
$ npm install
```

### Commonly used NPM scripts

``` bash
# watch and opens a browser
$ npm run dev

# build all dist files, including npm packages
$ npm run build

# run the full test suite, including linting/type checking
$ npm run test
```

## Project Structure

- **`build`**: contains build-related scripts and configuration files. Usually, you don't need to touch them. However, it would be helpful to familiarize yourself with the following files:

- **`dist`**: contains built files for distribution. Note this directory is only updated when a release happens; they do not reflect the latest changes in development branches.

- **`src`**: contains the source code.

  - **`cdn`**: contains files that will be used for cdn/npm
  
  - **`home`**: contains a homepage for [Beer CSS](https://www.beercss.com)

  - **`shared`**: contains utilities shared across the entire codebase.

  - **`static`**: contains static files.

  - **`test`**: contains a blank test page for use in your tests. It will be available in `npm run dev` at url http://localhost:3000/test

- **`tests`**: contains all tests. The unit tests are written with [Vitest](https://vitest.dev/).

## Credits

Thank you to all the people who have already contributed to Beer CSS!

- https://github.com/beercss/beercss/graphs/contributors
