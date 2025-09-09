// Container.jsx
import { useNode } from '@craftjs/core';
import { Paper } from '@mui/material';

export const Container = ({ background, padding = 0, style, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Paper
      ref={(ref) => ref && connect(drag(ref))}
      style={{ background, padding, ...style }}
      square
    >
      {children}
    </Paper>
  );
};

// Optional: make the root container non-draggable to avoid accidental moves
Container.craft = {
  rules: { canDrag: () => false },
  props: { background: '#fff', padding: 20 },
};
