import React from 'react';
import { render } from '@testing-library/react';
import { AdobeCleanBlackComp } from './adobe-clean.composition';

it('should render with the correct text', () => {
  const { getByTestId } = render(<AdobeCleanBlackComp />);
  const rendered = getByTestId('waweb.spectrum/theme/fonts/adobe-clean');
  expect(rendered).toBeTruthy();
});
