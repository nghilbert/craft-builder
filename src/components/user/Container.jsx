// components/user/Container.jsx
import React from 'react';
import { Paper } from '@mui/material';
import { useNode } from '@craftjs/core';

export const Container = ({ children, style = {} }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <Paper ref={(ref) => connect(drag(ref))} style={style}>
      {children}
    </Paper>
  );
};

Container.craft = {
  displayName: 'Container',
  props: {
    style: {
      background: '#eee',
      height: '576px',
      width: '1024px',
    },
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true, // allow dropping anything inside
  },
};
