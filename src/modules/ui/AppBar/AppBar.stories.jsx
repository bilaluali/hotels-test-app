import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Paper } from '@material-ui/core';

import AppBar from './AppBar';

storiesOf('MaterialUi.AppBar', module).add('Simple', () => (
    <Container>
      <Paper>
        <AppBar />
      </Paper>
    </Container>
));