import React from 'react';
import { DocsTheme } from '@waweb/docs.theme.docs-theme';
import { Snippet } from './snippet';

const code = `
<div>simple div element</div>
`;

export const SnippetExample = () => {
  return (
    <DocsTheme>
      <Snippet>{code}</Snippet>
    </DocsTheme>
  );
};

export const SnippetLiveExample = () => {
  return (
    <DocsTheme>
      <Snippet live>{code}</Snippet>
    </DocsTheme>
  );
};
