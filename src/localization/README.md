## Localization

The library utilizes the `react-i18next` library for handling translations.

Instead of directly using `react-i18next` hooks and functions, it is recommended to use the custom hooks `useLocalization` and the `localization` function provided by our application. This approach ensures that any future migrations or refactoring efforts require modifications in only a single location, improving maintainability and consistency.

### Translation tools

When handling translations, users can utilize either the `useLocalization` hook or the `localization` function.

In general, it is recommended to use the `useLocalization` hook for translation, as explained in the following sections. However, the `localization` function should be used in scenarios where hooks cannot be called, such as within configuration files.

#### Re-rendering Behavior

- `useLocalization`:
  Components using this hook will automatically re-render when the language changes.

- `localization`:
  Components using this function won't automatically re-render when the language changes.

#### Memory and Performance

- `useLocalization`:
  Creates a subscription to i18next's language changes, which is cleaned up when the component unmounts.

- `localization`: Gets a new instance of i18next on every call, which is less efficient.

#### React Best Practices

- `useLocalization`:
  Follows React's component lifecycle and hooks rules.
  For components that need to re-render on language changes.

- `localization`
  Bypasses React's component lifecycle, which can lead to stale data.
  In a utility function (won't re-render on language change).
