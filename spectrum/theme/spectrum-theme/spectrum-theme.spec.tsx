import React from 'react';
import { render } from '@testing-library/react';
import { BasicSpectrumTheme } from './spectrum-theme.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSpectrumTheme />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
