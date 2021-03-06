import React, { useState } from 'react';
import copy from 'copy-to-clipboard';
import classNames from 'clsx';
import { CopiedMessage } from '@waweb/docs.ui.copied-message';
import { Icon } from '@waweb/base-ui.elements.icon';
import { Grid } from '@waweb/base-ui.layout.grid-component';
import styles from './copy-box.module.scss';

export type CopyBoxProps = {
  /**
   * specify the link to be copied to your clipboard
   */
  children: string;
} & React.HTMLAttributes<HTMLDivElement>; // TODO - export GridProps in '@waweb/base-ui.layout.grid-component' and place here

/**
 *  A UI component that allows copying a link to the clipboard
 */
export function CopyBox({ children, className, ...rest }: CopyBoxProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
    copy(children);
  };

  return (
    <Grid colMd={2} className={classNames(styles.copyBox, className)} {...rest}>
      <div className={styles.leftSection}>{children}</div>
      <div className={styles.rightSection}>
        <CopiedMessage show={isCopied} />
        <button className={styles.button} onClick={handleClick}>
          <Icon className={styles.copyIcon}>content_copy</Icon>
        </button>
      </div>
    </Grid>
  );
}
