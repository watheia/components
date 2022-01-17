import React from 'react';
import { DocsTheme } from '@waweb/docs.theme.docs-theme';
import { Link } from './link';

export const LinkExample = () => (
  <DocsTheme>
    <Link data-testid="test-link" href="https://watheia.io">
      watheia.io
    </Link>
  </DocsTheme>
);
