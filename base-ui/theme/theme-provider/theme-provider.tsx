import React from 'react';
import classNames from 'clsx';

import {
  headingFontSize,
  textFontSize,
} from '@waweb/base-ui.theme.size-definition';
import { shadowTheme } from '@waweb/base-ui.theme.shadow-definition';
import { primaryPalette } from '@waweb/base-ui.theme.color-definition';
import { brands } from '@waweb/base-ui.theme.brand-definition';
import { headingMargins } from '@waweb/base-ui.theme.heading-margin-definition';
import { AdobeClean } from '@waweb/base-ui.theme.fonts.adobe-clean';
import { IconFont } from '@waweb/base-ui.theme.icons-font';
import texts from './texts.module.scss';

/**
 * @name ThemeProvider
 * @description
 * Applies shared styles to all child components.
 *
 * @example
 * <Theme>
 *  <Paragraph>I got all the base styles! yippee!</Paragraph>
 * </Theme>
 */

export function Theme({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={classNames(
        headingFontSize,
        textFontSize,
        shadowTheme,
        primaryPalette,
        brands,
        headingMargins,
        texts.defaults,
        className
      )}
    >
      <IconFont />
      <AdobeClean>{children}</AdobeClean>
    </div>
  );
}
