// App.jsx
import React from 'react';
import { Typography, Paper, Grid } from '@mui/material';

import { Toolbox } from './components/Toolbox';
import { Topbar } from './components/Topbar';
import { SettingsPanel } from './components/SettingsPanel';

import { Container } from './components/user/Container';
import { Button } from './components/user/Button';
import { Text } from './components/user/Text';

import { Editor, Frame, Element } from '@craftjs/core';

export default function App() {
  return (
    <div>
      <Editor resolver={{ Button, Text, Container }}>
        <Topbar />
        <Grid container spacing={3}>
          <Grid item xs>
            <Frame>
              <Element is={Container} canvas />
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
