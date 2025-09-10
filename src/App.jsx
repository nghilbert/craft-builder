// pages/App.jsx
import React from 'react';
import { Typography, Paper, Grid } from '@mui/material';

import { Toolbox } from './components/Toolbox';
import { SettingsPanel } from './components/SettingsPanel';

import { Container } from './components/user/Container';
import { Button } from './components/user/Button';
import { Card, CardTop, CardBottom } from './components/user/Card';
import { Text } from './components/user/Text';

import { Editor, Frame, Element } from '@craftjs/core';

export default function App() {
  return (
    <div>
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>
      <Editor resolver={{ Card, Button, Container, Text, CardTop, CardBottom }}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Frame>
              <Element is={Container} padding={5} background="#eee" canvas>
                <Card />
                <Button size="small" variant="outlined">
                  Click
                </Button>
                <Text text="Hi world!" />
                <Element is={Container} padding={2} background="#999" canvas>
                  {' '}
                  // Canvas Node of type Container, droppable and draggable
                  <Text text="It's me again!" /> // Node of type Text, draggable
                </Element>
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
