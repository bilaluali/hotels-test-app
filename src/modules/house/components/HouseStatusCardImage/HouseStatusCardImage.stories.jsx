import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Paper, Grid } from '@material-ui/core';

import HouseStatusCardImage from './HouseStatusCardImage';

storiesOf('House.HouseStatusCardImage', module).add('Simple', () => (
    <Container>
      <Paper>
        <HouseStatusCardImage
          src="https://picsum.photos/1351/675"
          status="AVAILABLE"
        />
        <HouseStatusCardImage
          src="https://picsum.photos/1260/630"
          status="UNAVAILABLE"
        />
        <HouseStatusCardImage
          src="https://picsum.photos/1249/624"
          status="BOOKED"
        />
        <HouseStatusCardImage
          src=""
          status="BOOKED"
        />
        <HouseStatusCardImage
          status="BOOKED"
        />
      </Paper>
    </Container>
));