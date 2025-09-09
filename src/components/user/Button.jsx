// components/user/Button.js
import React from 'react';
import { Button as MaterialButton } from '@mui/material';
import { useNode } from '@craftjs/core';

export const Button = ({
  size = 'medium',
  variant = 'contained',
  color = 'primary',
  children = 'Click me',
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <MaterialButton ref={(ref) => connect(drag(ref))} size={size} variant={variant} color={color}>
      {children}
    </MaterialButton>
  );
};

Button.craft = {
  props: { size: 'medium', variant: 'contained', color: 'primary', children: 'Click me' },
};
