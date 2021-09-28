import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Paper, Grid } from '@material-ui/core';

import HouseStatusChip from './HouseStatusChip';

storiesOf('House.HouseStatusChip', module).add('Simple', () => (
    <Container>
      <Paper>
        <Grid container sx={{ padding: 2 }}>
            <Grid item xs={2}><HouseStatusChip status="AVAILABLE"/></Grid>
            <Grid item xs={2}><HouseStatusChip status="UNAVAILABLE"/></Grid>
            <Grid item xs={2}><HouseStatusChip status="BOOKED"/></Grid>
        </Grid>
      </Paper>
    </Container>
));