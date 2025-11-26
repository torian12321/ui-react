import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SplashScreen } from './SplashScreen';

describe('Views/SplashScreen', () => {
  it('renders SplashScreen component', () => {
    render(<SplashScreen />);
    const splashScreenContainer = screen.getByTestId('splash-screen-container');
    expect(splashScreenContainer).toBeInTheDocument();
  });

  it('renders LinearProgress component', () => {
    render(<SplashScreen />);
    const progressBarContainer = screen.getByTestId('splash-screen-progress');
    expect(progressBarContainer).toBeInTheDocument();
    expect(
      progressBarContainer.querySelector('.MuiLinearProgress-root'),
    ).toBeInTheDocument();
  });
});
