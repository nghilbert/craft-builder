// components/user/Container.jsx
import React from 'react';
import { useNode } from '@craftjs/core';

export const Container = ({ children, padding = 0, background = 'transparent' }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div ref={(dom) => connect(drag(dom))} style={{ padding, background }}>
      {children}
    </div>
  );
};

Container.craft = {
  props: { padding: 0, background: 'transparent' },
};
