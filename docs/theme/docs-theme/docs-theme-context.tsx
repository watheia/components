import { createContext } from 'react';

export type PaletteMode = 'light' | 'dark';

export type DocsThemeContextType = {
  /**
   * primary color of theme.
   */
  mode?: PaletteMode;
};

export const DocsThemeContext = createContext<DocsThemeContextType>({
  mode: 'light',
});
