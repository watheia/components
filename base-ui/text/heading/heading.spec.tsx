import React from 'react';
import { render } from '@testing-library/react';

import {
  H1Example,
  H2Example,
  H3Example,
  H4Example,
  H5Example,
  H6Example,
} from './heading.composition';

it('should render correct text in Example', () => {
  const { getByText } = render(<H1Example />);
  const container = getByText('H1 Example');
  expect(container).toBeInstanceOf(HTMLElement);
  expect(container).toMatchSnapshot();
});

it('should render as h2 when defined', () => {
  const { getByText } = render(<H2Example />);
  const container = getByText('H2 Example');
  expect(container.tagName).toEqual('H2');
  expect(container).toMatchSnapshot();
});

it('should render as h3 when defined', () => {
  const { getByText } = render(<H3Example />);
  const container = getByText('H3 Example');
  expect(container.tagName).toEqual('H3');
  expect(container).toMatchSnapshot();
});

it('should render as h4 when defined', () => {
  const { getByText } = render(<H4Example />);
  const container = getByText('H4 Example');
  expect(container.tagName).toEqual('H4');
  expect(container).toMatchSnapshot();
});

it('should render as h5 when defined', () => {
  const { getByText } = render(<H5Example />);
  const container = getByText('H5 Example');
  expect(container.tagName).toEqual('H5');
  expect(container).toMatchSnapshot();
});

it('should render as h6 when defined', () => {
  const { getByText } = render(<H6Example />);
  const container = getByText('H6 Example');
  expect(container.tagName).toEqual('H6');
  expect(container).toMatchSnapshot();
});
