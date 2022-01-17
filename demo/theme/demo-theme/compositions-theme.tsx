import React from 'react';
import { Roboto } from '@waweb/base-ui.theme.fonts.roboto';
import { IconFont } from '@waweb/base-ui.theme.icons-font';
import { Theme, ThemeProps } from './theme-provider';

export function ThemeCompositions(props: ThemeProps) {
  return (
    <Theme {...props}>
      <IconFont query="eo46cx" />
      <Roboto />
      {props.children}
    </Theme>
  );
}
