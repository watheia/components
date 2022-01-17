import React from 'react';
import classnames from 'clsx';

export type IconProps = {
  /**
   * icon id (class name)
   */
  of: string;
} & React.HTMLAttributes<HTMLSpanElement>;

/**
 * Base template component for icons.
 * Compose this class to make a specific icon component for a font-set, like [bit-icon](https://bit.dev/bit/evangelist/atom/bit-icon).
 * @example
 * const iconset = "eva-icons";
 * const EvaButton = (props) => <Icon {...props} of={`${iconset}-${props.of}`} />;
 */
export function Icon({ of: iconName, className, ...rest }: IconProps) {
  return (
    <span
      data-bit-id="waweb.base-ui/elements/icon"
      className={classnames(iconName, className)}
      {...rest}
    />
  );
}
