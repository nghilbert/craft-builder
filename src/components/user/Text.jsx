// components/user/Text.jsx
import React from 'react';
import { Typography } from '@mui/material';
import { useNode } from '@craftjs/core';

export const Text = ({ fontSize, text }) => {
  // Connectors connect the editor to the DOM
  const {
    connectors: { connect, drag },
    hasSelectedNode,
    hasDraggedNode,
    actions: { setProp },
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
    hasDraggedNode: state.events.dragged,
  }));

  const [editable, setEditable] = useState(false);
  useEffect(() => {
    !hasSelectedNode && setEditable(false);
  }, [hasSelectedNode]);

  return (
    <div ref={(ref) => connect(drag(ref))} onClick={(e) => setEditable(true)}>
      <ContentEditable
        html={text}
        onChange={(e) =>
          setProp((props) => (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, '')))
        }
        tagName="p"
        style={{ fontSize: `${fontSize}px`, textAlign }}
      />
    </div>
  );
};

const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
  }));

  return (
    <>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Font size</FormLabel>
        <Slider
          value={fontSize || 7}
          step={7}
          min={1}
          max={50}
          onChange={(_, value) => {
            setProp((props) => (props.fontSize = value));
          }}
        />
      </FormControl>
    </>
  );
};

Text.craft = {
  props: {
    text: 'Hello world',
  },
  rules: {
    canDrag: true,
  },
  related: {
    settings: TextSettings,
  },
};
