// pages/index.js
import React from 'react';
import { Typography, Paper, Grid } from '@mui/material';

import { Toolbox } from '../components/Toolbox';
import { SettingsPanel } from '../components/SettingsPanel';

import { Container } from '../components/user/Container';
import { Button } from '../components/user/Button';
import { Card } from '../components/user/Card';
import { Text } from '../components/user/Text';

import { Editor, Frame, Element } from '@craftjs/core';

export default function App() {
  return (
    <div>
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>
      <Editor resolver={{ Card, Button, Text, Container }}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Frame>
              <Element
                is={Container}
                canvas
                padding={20}
                background="#fff"
                // Size & centering for the starting canvas
                style={{
                  width: 960,
                  minHeight: 640,
                  margin: '0 auto',
                  border: '1px dashed #ccc',
                  boxSizing: 'border-box',
                }}
              />
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.root}>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
