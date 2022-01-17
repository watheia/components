import React, { useContext } from 'react';
import { DocsTheme } from './docs-theme';
import { DocsThemeContext } from './docs-theme-context';

function MockComponent() {
  const theme = useContext(DocsThemeContext);

  return (
    <div
      style={{
        color: theme.mode === 'light' ? '#000000' : '#ffffff',
        backgroundColor: theme.mode === 'light' ? '#ffffff' : '#000000',
      }}
    >
      this should be {theme.mode}
    </div>
  );
}

export const LightThemeUsage = () => {
  return (
    <DocsTheme mode="light">
      <MockComponent />
    </DocsTheme>
  );
};

export const DarkThemeUsage = () => {
  return (
    <DocsTheme mode="dark">
      <MockComponent />
    </DocsTheme>
  );
};
