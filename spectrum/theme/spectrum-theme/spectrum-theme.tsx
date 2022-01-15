import React, { ReactNode } from 'react';

export type SpectrumThemeProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function SpectrumTheme({ children }: SpectrumThemeProps) {
  return (
    <div>
      {children}
    </div>
  );
}
