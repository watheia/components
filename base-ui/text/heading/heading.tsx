import React from 'react';
import clsx from 'clsx';
export type Element = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
import sizeStyles from './heading-sizes.module.scss';
import styles from './heading.module.scss';
import { PossibleSizes } from '@waweb/base-ui.theme.sizes';

export type HeadingProps = {
  size?: PossibleSizes;
  /**
   * underlying html element ("h1", "h2", etc)
   */
  element?: Element;
} & React.HTMLAttributes<HTMLHeadingElement>;

/**
 * Base title component, to be styled by composing components.
 * May have more logic in the future.
 * @example
 * <Heading element="h3">This is a title</Heading>
 */
export function Heading({ element, className, ...rest }: HeadingProps) {
  const Element = element;
  return (
    <Element
      className={clsx(className)}
      data-bit-id="waweb.base-ui/text/heading"
      {...rest}
    />
  );
}

/**
 * A set of concrete heading for the workspace docs.
 * H1, H2, H3, H4, H5, H6.
 *
 * To keep a consistent look to the site, headers come in a limited set of sizes.
 * While each header corresponds to a default font-size, it can be overridden using the size prop:
 */
export function H1(props: HeadingProps) {
  return (
    <Heading
      element="h1"
      {...props}
      className={clsx(
        styles.h1,
        sizeStyles[props.size ?? 'lg'],
        props.className
      )}
    />
  );
}
export function H2(props: HeadingProps) {
  return (
    <Heading
      element="h2"
      {...props}
      className={clsx(
        styles.h2,
        sizeStyles[props.size ?? 'lg'],
        props.className
      )}
    />
  );
}
export function H3(props: HeadingProps) {
  return (
    <Heading
      element="h3"
      {...props}
      className={clsx(
        styles.h3,
        sizeStyles[props.size ?? 'md'],
        props.className
      )}
    />
  );
}
export function H4(props: HeadingProps) {
  return (
    <Heading
      element="h4"
      {...props}
      className={clsx(
        styles.h4,
        sizeStyles[props.size ?? 'sm'],
        props.className
      )}
    />
  );
}
export function H5(props: HeadingProps) {
  return (
    <Heading
      element="h5"
      {...props}
      className={clsx(
        styles.h5,
        sizeStyles[props.size ?? 'xs'],
        props.className
      )}
    />
  );
}
export function H6(props: HeadingProps) {
  return (
    <Heading
      element="h6"
      {...props}
      className={clsx(
        styles.h6,
        sizeStyles[props.size || 'xxs'],
        props.className
      )}
    />
  );
}
