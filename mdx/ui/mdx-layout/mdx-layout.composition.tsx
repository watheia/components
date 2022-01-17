import React from 'react';
import { DocsTheme } from '@waweb/docs.theme.docs-theme';
import { MDXLayout } from './mdx-layout';
// @ts-ignore
import MdxContentDefault from './mdx-layout.docs.md';
// @ts-ignore
import MdxContentExample from './md-example.md';

export const MDXLayoutExample = () => (
  <DocsTheme>
    <MDXLayout>
      <MdxContentDefault />
    </MDXLayout>
  </DocsTheme>
);

export const MDXLayoutSecondExample = () => (
  <DocsTheme>
    <MDXLayout>
      <MdxContentExample />
    </MDXLayout>
  </DocsTheme>
);

MDXLayoutSecondExample.canvas = {
  overflow: 'scroll',
  height: 200,
};
