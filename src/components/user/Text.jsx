// components/user/Text.js
import React from 'react';
import { useNode } from '@craftjs/core';

export const Text = ({ text = 'Edit me', fontSize = 16 }) => {
  const {
    connectors: { connect, drag },
    setProp,
  } = useNode();

  return (
    <span
      ref={(dom) => connect(drag(dom))}
      contentEditable
      suppressContentEditableWarning
      style={{ fontSize }}
      onInput={(e) => {
        const value = e.currentTarget.innerText;
        // Debounce updates a bit to avoid excessive state churn
        setProp((props) => {
          props.text = value;
        }, 500);
      }}
    >
      {text}
    </span>
  );
};

Text.craft = {
  props: { text: 'Edit me', fontSize: 16 },
  rules: {
    canDrop: () => true,
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  related: {},
};
