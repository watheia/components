import React, { ReactNode } from 'react';

export type PageProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Page({ children }: PageProps) {
  return <div>{children}</div>;
}
