import React, { ReactNode } from 'react';

export type LayoutProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      {children}
    </div>
  );
}
