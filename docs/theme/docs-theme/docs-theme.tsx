import React, { ReactNode, HTMLAttributes } from 'react';
import { DocsThemeContext, DocsThemeContextType } from './docs-theme-context';
import classNames from 'clsx';
import { Theme } from '@waweb/base-ui.theme.theme-provider';
import sizes from './sizes.module.scss';
import global from './global.module.scss';
import {
  AdobeClean,
  AdobeCleanIt,
  AdobeCleanBold,
  AdobeCleanBoldIt,
  AdobeCleanLight,
  AdobeCleanLightIt,
} from '@waweb/base-ui.theme.fonts.adobe-clean';

export type DocsThemeProps = DocsThemeContextType &
  HTMLAttributes<HTMLDivElement>;

export function DocsTheme({
  mode,
  className,
  children,
  ...props
}: DocsThemeProps) {
  return (
    <DocsThemeContext.Provider value={{ mode }}>
      <Theme
        {...props}
        className={classNames(className, sizes.heading, global.overrides)}
      >
        <AdobeClean>{children}</AdobeClean>
        <AdobeCleanIt />
        <AdobeCleanBold />
        <AdobeCleanBoldIt />
        <AdobeCleanLight />
        <AdobeCleanLightIt />
      </Theme>
    </DocsThemeContext.Provider>
  );
}
