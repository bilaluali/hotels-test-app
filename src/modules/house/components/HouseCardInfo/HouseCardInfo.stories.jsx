import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Paper, Grid } from '@material-ui/core';

import HouseCardInfo from './HouseCardInfo';

storiesOf('House.HouseCardInfo', module).add('Simple', () => (
    <Container>
      <Paper>
        <HouseCardInfo
            primary="1234567890"
            secondary="Wild Atlantic Way"
        />
      </Paper>
    </Container>
));