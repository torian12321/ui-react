import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Tooltip } from './Tooltip';
import type { TooltipProps } from './Tooltip.types';

const renderTooltip = (props?: Partial<TooltipProps>) =>
  render(
    <Tooltip title='Tooltip message' {...props}>
      <div data-testid='content-tooltip'>Tooltip mock content</div>
    </Tooltip>,
  );

describe('Components/Tooltip', () => {
  it('Should render without tooltip on screen', () => {
    renderTooltip();
    const tooltip = screen.queryByRole('tooltip');
    const content = screen.getByTestId('content-tooltip');

    expect(tooltip).not.toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent('Tooltip mock content');
  });

  it('Should render tooltip when overing the child component', async () => {
    renderTooltip();
    const content = screen.getByTestId('content-tooltip');

    fireEvent.mouseOver(content);

    expect(await screen.findByRole('tooltip')).toBeInTheDocument();

    const tooltip = screen.queryByRole('tooltip');
    expect(tooltip).toHaveTextContent('Tooltip message');
  });
});
