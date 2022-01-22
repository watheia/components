import React from 'react';
import { Theme, ThemeProps } from './theme-provider';

export function ThemeCompositions(props: ThemeProps) {
  return <Theme {...props}>{props.children}</Theme>;
}
