import React from 'react';
import classNames from 'clsx';
import { adobeClean } from '@waweb/base-ui.theme.fonts.adobe-clean';
import { PossibleSizes } from '@waweb/base-ui.theme.sizes';
import { textSize } from '@waweb/base-ui.text.text-sizes';
import styles from './paragraph.module.scss';

export { PossibleSizes };

export type ParagraphProps = {
  /**
   * Font size (from a list of presets).
   */
  size?: PossibleSizes;
  /**
   * The underlying html element
   */
  element: 'p' | 'div' | 'span';
} & React.HTMLAttributes<HTMLParagraphElement>;

/**
 * Paragraph component prototype. Accepts all properties of a native Paragraph element,
 * @name paragraph
 * @example
 * <Paragraph size="sm">This is some text</Paragraph>
 */
export function Paragraph({
  children,
  className,
  size,
  element: Element,
  ...rest
}: ParagraphProps) {
  size = size ?? PossibleSizes.md;
  return (
    <Element
      className={classNames(
        styles.paragraph,
        textSize[size],
        adobeClean.semiLight,
        className
      )}
      data-bit-id="waweb.base-ui/text/paragraph"
      {...rest}
    >
      {children}
    </Element>
  );
}

Paragraph.defaultProps = {
  size: 'md',
  element: 'p',
};
