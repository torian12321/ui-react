## Why to use it instead of MUI List?

`<List />` component form this library has some inbuild features:

- Allows **draggable** option when `draggable={true}`
- **Virtual Rendering** with [React Virtuoso](https://www.npmjs.com/package/react-virtuoso) to allow rendering a large list of child elements without performance issues.

## Component Control

`<List />` is a **[Controlled Component](https://legacy.reactjs.org/docs/forms.html#controlled-components)** (externally controlled)\*\*. This means that the component doesn't manage its own state internally - it relies on external state management through props like `itemsIds` and `onChange`.

## Draggable option

When using the draggable functionality, it's **recommended to use the `useList` hook** to manage the list state. The `useList` hook provides:

- State management for item positions
- Actions to sort and reset items
- Proper integration with the List component's drag and drop functionality

### Example usage with useList:

```tsx
import { List, ListItem, useList } from './';

const MyComponent = () => {
  const [selectedItems, actions] = useList(items);
  const itemsIds = items.map(item => item.id);

  return (
    <List draggable itemsIds={itemsIds} onChange={actions.sort}>
      {selectedItems.map(item => (
        <ListItem key={item.id} id={item.id} title={item.title}>
          {item.title}
        </ListItem>
      ))}
    </List>
  );
};
```

The `useList` hook ensures proper state synchronization and provides a clean API for managing draggable list items.
