/**
 * Import documentation for a component
 * @param packageName - The package name of the component
 * @param componentName - The name of the component
 * @returns The import documentation
 */
export const docImport = (
  packageName: 'components' | 'formRenderer' | 'views' | 'layout' | 'contexts',
  componentName: string,
): string =>
  `\`\`\`typescript\nimport { ${componentName} } from '@torian12321/ui-react/${packageName}';\`\`\``;

/**
 * Status badges for component documentation
 * @param status - The status of the component
 * @returns The status badge
 */
export const statusBadge = (
  status: 'new' | 'deprecated' | 'beta' | 'stable',
): string => {
  const badges = {
    new: '🆕 **NEW** - ',
    deprecated:
      '⚠️ **DEPRECATED** - This component will be removed in a future version. ',
    beta: '🧪 **BETA** - This component is experimental and may change. ',
    stable: '✅ **STABLE** - ',
  };
  return `${badges[status]} \n\n`;
};
