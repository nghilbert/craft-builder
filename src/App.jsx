// src/App.jsx
import React from 'react';
import { Typography, Paper, GridLegacy as Grid } from '@mui/material';
import { Editor, Frame, Element } from '@craftjs/core';

import { Toolbox } from './components/Toolbox';
import { SettingsPanel } from './components/SettingsPanel';
import { Topbar } from './components/Topbar';

import { Container } from './components/user/Container';
import { Button } from './components/user/Button';
import { Text } from './components/user/Text';

export default function App() {
  return (
    <div style={{ margin: '0 auto', width: 800 }}>
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>

      <Topbar />

      <Editor resolver={{ Button, Text, Container }}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Frame>
              - style={}
              <Element
                is={Container}
                style={{
                  background: '#ffffff',
                  width: '1024px',
                  height: '576px',
                  border: '1px dotted #000000',
                }}
                canvas
              />
            </Frame>
          </Grid>

          <Grid item xs={3}>
            <Paper sx={{ p: 2 }}>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
