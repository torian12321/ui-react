<p align="center">
  <a href="https://github.com/torian12321/ui-react/actions/workflows/ci.yml"><img src="https://github.com/torian12321/ui-react/actions/workflows/CI.yml/badge.svg?branch=master" alt="build status"></a>
    <a href="https://github.com/torian12321/ui-react/releases/latest" title="Latest Release">
  <img alt="GitHub release" src="https://img.shields.io/github/v/release/torian12321/ui-react" />
  </a>
</p>

## @torian12321/ui-react

`@torian12321/ui-react` library provides a collection of generic, reusable React components to streamline development and enhance code consistency across projects.It includes a variety of stateles components `@torian12321/ui-react/components`, and layout components `@torian12321/ui-react/layout` utility functions that can be employed in different scenarios to reduce redundancy.

Components from `@torian12321/ui-react` are moslty extending from [MUI](https://mui.com/material-ui/) library, but adding customization options for custom brand colors.

## Installation

```sh
npm install @torian12321/ui-react --save-dev
```

## Usage

To start using the library start by wrapper you application with the Provider.

```jsx
import { Provider } from '@torian12321/ui-react';

const MyApp = ({ children }) => {
  return <Provider>{children}</Provider>;
};
```

## Import example

Generic import:

```jsx
import { Button } from '@torian12321/ui-react';

const MyComplexComponent = (
  <div>
    <Button>Click Me</Button>
  </div>
);
```

Components dedicated import:

```jsx
import { Button } from '@torian12321/ui-react/components';

const MyComplexComponent = (
  <div>
    <Button>Click Me</Button>
  </div>
);
```

## TODO:

- Extend documentation.
- Consider to use [react-popper](https://popper.js.org/react-popper/) to replace MUITooltips.
