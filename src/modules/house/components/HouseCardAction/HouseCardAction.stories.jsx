import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Paper } from '@material-ui/core';

import HouseCardAction from './HouseCardAction';

storiesOf('House.HouseCardAction', module).add('Simple', () => (
    <Container>
      <Paper>
          <HouseCardAction status="AVAILABLE"/>
          <HouseCardAction status="UNAVAILABLE"/>
      </Paper>
    </Container>
));