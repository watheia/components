import React from 'react';
import { DarkThemeUsage, LightThemeUsage } from './docs-theme.composition';
import { render } from '@testing-library/react';

it('should render the button in the dark mode', () => {
  const { getByText } = render(<DarkThemeUsage />);
  const rendered = getByText('this should be dark');
  expect(rendered).toBeTruthy();
});

it('should render the button in the light mode', () => {
  const { getByText } = render(<LightThemeUsage />);
  const rendered = getByText('this should be light');
  expect(rendered).toBeTruthy();
});
