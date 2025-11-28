# Storybook Documentation Parameters Guide

This guide shows useful parameters for enhancing Storybook documentation.

## Meta-Level Parameters

### 1. **Component Description**

```typescript
parameters: {
  docs: {
    description: {
      component: 'Your component description with **markdown** support',
    },
  },
}
```

### 2. **Story Description**

```typescript
export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Description for this specific story variant',
      },
    },
  },
};
```

### 3. **Source Code Control**

```typescript
parameters: {
  docs: {
    // Canvas settings
    canvas: {
      sourceState: 'shown', // 'shown' | 'hidden' | 'none'
    },

    // Override source code display
    source: {
      code: '<Button variant="primary">Click me</Button>',
      language: 'tsx',
      format: true, // auto-format
      type: 'code', // 'code' (static) | 'dynamic' (from story)
    },
  },
}
```

### 4. **Backgrounds**

```typescript
parameters: {
  backgrounds: {
    default: 'dark',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#333333' },
      { name: 'brand', value: '#ff4785' },
    ],
  },
}
```

### 5. **Layout**

```typescript
parameters: {
  layout: 'centered', // 'centered' | 'fullscreen' | 'padded'
}
```

### 6. **Viewport**

```typescript
parameters: {
  viewport: {
    defaultViewport: 'mobile1', // predefined viewport
    // Or custom viewports
    viewports: {
      mobile1: {
        name: 'Small mobile',
        styles: { width: '320px', height: '568px' },
      },
    },
  },
}
```

### 7. **Actions**

```typescript
parameters: {
  actions: {
    argTypesRegex: '^on[A-Z].*', // auto-detect onClick, onChange, etc.
    handles: ['click .btn', 'submit form'], // specific event listeners
  },
}
```

### 8. **Controls Customization**

```typescript
argTypes: {
  variant: {
    control: 'select',
    options: ['primary', 'secondary'],
    description: 'Button variant style',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'primary' },
      category: 'Appearance', // Groups controls
    },
  },
  onClick: {
    action: 'clicked', // Shows in Actions panel
    table: {
      category: 'Events',
    },
  },
  children: {
    control: 'text',
    description: 'Button content',
    table: {
      type: { summary: 'React.ReactNode' },
    },
  },
}
```

### 9. **Design Links** (requires addon)

```typescript
parameters: {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/...',
  },
}
```

### 10. **Component Status**

```typescript
tags: ['autodocs', 'stable'], // or 'beta', 'deprecated', 'new'
```

### 11. **Disable Specific Addons**

```typescript
parameters: {
  controls: { disable: true }, // disable controls addon
  actions: { disable: true },  // disable actions addon
  docs: { disable: true },     // disable docs
}
```

### 12. **Custom Page Content**

```typescript
parameters: {
  docs: {
    page: () => (
      <>
        <Title />
        <Description />
        <Primary />
        <Controls />
        <Stories />
        <CustomSection>Your custom content</CustomSection>
      </>
    ),
  },
}
```

## Complete Example

````typescript
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs', 'stable'],

  parameters: {
    docs: {
      description: {
        component:
          'A flexible button component with multiple variants.\n\n```typescript\nimport { Button } from "@torian12321/ui-react/components";\n```',
      },
      canvas: {
        sourceState: 'shown',
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },

  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'Visual style of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
        category: 'Appearance',
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        category: 'Appearance',
      },
    },
    onClick: {
      action: 'clicked',
      table: {
        category: 'Events',
      },
    },
    disabled: {
      control: 'boolean',
      table: {
        category: 'State',
      },
    },
  },

  args: {
    children: 'Click me',
    variant: 'primary',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The primary button style, used for main actions.',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary actions or less prominent buttons.',
      },
    },
  },
};

export const OnDarkBackground: Story = {
  args: {
    variant: 'outline',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    docs: {
      description: {
        story: 'Outline variant works well on dark backgrounds.',
      },
    },
  },
};
````

## Best Practices

1. **Always include import instructions** for components with non-standard import paths
2. **Use argTypes.table.category** to group related controls
3. **Add descriptions** to all props for better autodocs
4. **Set appropriate backgrounds** for stories that need specific contexts
5. **Use story descriptions** to explain when/why to use each variant
6. **Set sourceState** to 'shown' for components with simple usage
7. **Group stories logically** using the title hierarchy (e.g., 'Components/Forms/Button')
