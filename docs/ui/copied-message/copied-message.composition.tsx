import React, { useState } from 'react';
import { CopiedMessage } from './copied-message';
import { Icon } from '@waweb/base-ui.elements.icon';
import { H5 } from '@waweb/base-ui.text.heading';

export const CopiedMessageExample = () => {
  return (
    <div style={{ position: 'relative', paddingLeft: 50, height: 20 }}>
      <CopiedMessage show={true} />
    </div>
  );
};

export const HiddenCopiedMessageExample = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  return (
    <div style={{ position: 'relative' }}>
      <H5>Click icon to copy</H5>
      <Icon
        onClick={handleClick}
        of="content_copy"
        style={{ marginRight: 60, cursor: 'pointer' }}
      />
      <CopiedMessage show={isCopied} />
    </div>
  );
};
