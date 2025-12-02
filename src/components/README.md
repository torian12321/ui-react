Components under this folder should all be stateless components.

## Why use stateless components in React?

_Stateless functional components can be rendered faster. One of the reasons why this is the case is because stateless functional components do not require some of the life cycle hooks. What are life cycle hooks? React components have life cycles._

## How?

Avoid the use of any external app state dependency when creating components, like [Redux](https://react-redux.js.org/) or [React.Context](https://legacy.reactjs.org/docs/context.html).

## Additional

It is encourage to add the following to each stateless component:

- An [Storybook](https://storybook.js.org/) story.
- Test validation at least the basic functionalities.
