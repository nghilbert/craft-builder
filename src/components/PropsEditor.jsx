// components/PropsEditor.jsx
import React, { useState, useEffect } from 'react';
import { useEditor } from '@craftjs/core';
import { TextField } from '@mui/material';

export const PropsEditor = () => {
  const { actions, selected } = useEditor((state) => {
    const [currentNodeId] = state.events.selected;
    if (!currentNodeId) return { selected: null };

    return {
      selected: {
        id: currentNodeId,
        style: state.nodes[currentNodeId].data.props.style || {},
      },
    };
  });

  const [value, setValue] = useState('');

  // keep JSON field in sync with node props
  useEffect(() => {
    if (selected) {
      setValue(JSON.stringify(selected.style, null, 2));
    }
  }, [selected]);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (!selected) return;
    try {
      const parsed = JSON.parse(e.target.value);
      actions.setProp(selected.id, (props) => {
        props.style = parsed;
      });
    } catch {
      // ignore invalid JSON until user fixes it
    }
  };

  if (!selected) {
    return <p>No node selected</p>;
  }

  return (
    <TextField
      label="style props (JSON)"
      multiline
      minRows={6}
      value={value}
      onChange={handleChange}
      fullWidth
    />
  );
};
