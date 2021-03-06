import React from 'react';
import { Heading } from '@waweb/demo.ui.atoms.heading';
import { Text } from '@waweb/demo.ui.atoms.text';
import { Link } from '@waweb/mdx.ui.docs.link';
import { CopyBox } from '@waweb/docs.ui.copy-box';

import styles from './card.module.scss';

export type CardProps = {
  /**
   * link for the card
   */
  link?: string;
  /**
   * heading for the card
   */
  heading?: string;
  /**
   * text for the card
   */
  text?: string;
  /**
   * command for the copy box component
   */
  command?: string;
};

export function Card({ heading, command, text, link }: CardProps) {
  return (
    <div className={styles.card}>
      <Link href={link}>
        <Heading element="h3" className={styles.heading}>
          {heading}
        </Heading>
        <Text className={styles.text} text={text} />
      </Link>
      {command ? (
        <CopyBox className={styles['copy-box']}>{command}</CopyBox>
      ) : null}
    </div>
  );
}
