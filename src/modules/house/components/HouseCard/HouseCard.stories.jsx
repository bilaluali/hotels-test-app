import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Paper, Grid } from '@material-ui/core';

import HouseCard from './HouseCard';

storiesOf('House.HouseCard', module).add('Simple', () => (
    <Container>
      <Paper>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <HouseCard 
                    src="https://picsum.photos/1351/675"
                    status="AVAILABLE"
                    primary="1234567890"
                    secondary="Wild Atlantic Way Apartments Killarney"
                />
            </Grid>
            <Grid item xs={3}>
                <HouseCard 
                    src="https://picsum.photos/1616/808"
                    status="UNAVAILABLE"
                    primary="1234567890"
                    secondary="Wild Atlantic Way Apartments Killarney"
                />
            </Grid>
            <Grid item xs={3}>
                <HouseCard 
                    src="https://picsum.photos/1309/654"
                    status="BOOKED"
                    primary="1234567890"
                    secondary="Wild Atlantic Way Apartments Killarney"
                />
            </Grid>
            <Grid item xs={3}>
                <HouseCard 
                    src="https://picsum.photos/1192/596"
                    status="UNAVAILABLE"
                    primary="1234567890"
                    secondary="Wild Atlantic Way Apartments Killarney"
                />
            </Grid>
        </Grid>
      </Paper>
    </Container>
));