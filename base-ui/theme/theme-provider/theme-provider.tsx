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
import { bookFont } from '@waweb/base-ui.theme.fonts.book';
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

export function Theme(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={classNames(
        headingFontSize,
        textFontSize,
        bookFont,
        shadowTheme,
        primaryPalette,
        brands,
        headingMargins,
        texts.defaults,
        props.className
      )}
    ></div>
  );
}
