// components/user/Button.jsx
import React from 'react';
import { useNode } from '@craftjs/core';

export function Button({ text = 'Click Me!', style = {} }) {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <button ref={(ref) => connect(drag(ref))} type="button" style={style}>
      {text}
    </button>
  );
}

Button.craft = {
  displayName: 'Button',
  props: {
    style: {
      text: 'Click Me!',
      borderRadius: '25px',
      width: '5rem',
      aspectRatio: '1 / 1',
      minHeight: '0px',
      maxWidth: '90%',
      backgroundColor: 'white',
      alignSelf: 'center',
      overflow: 'auto',
      boxSizing: 'border-box',
    },
  },
  rules: { canDrag: () => true },
};
