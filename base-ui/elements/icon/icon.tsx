import React from 'react';
import MuiIcon, { IconProps as MuiIconProps } from '@mui/material/Icon';

export type IconProps = {
  /**
   * @deprecated use component children instead
   */
  of?: string;
} & MuiIconProps;

/**
 * Base template component for icons.
 * Compose this class to make a specific icon component.
 * See: <https://mui.com/components/material-icons/>
 */
export function Icon({ className, of, children, ...rest }: IconProps) {
  children = of ?? children;
  return (
    <MuiIcon
      data-bit-id="waweb.base-ui/elements/icon"
      className={className}
      {...rest}
    >
      {children}
    </MuiIcon>
  );
}
